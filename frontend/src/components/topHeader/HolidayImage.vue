<template>
  <div class="holiday-banner" v-if="holiday">
    <img :src="holiday.image" :alt="holiday.alt" />
  </div>
</template>

<script lang="js">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  props: {},
  setup() {
    // текущий подходящий праздник
    let holiday = ref(null)

    /**
     * Проверяет, входит ли текущая дата в диапазон [start, end]
     * @param {string} current - текущая дата в формате M-D (например "5-7")
     * @param {string} start - начальная дата диапазона
     * @param {string} end - конечная дата диапазона
     */
    function isDateInRange(current, start, end) {
      const [currM, currD] = current.split('-').map(Number) // получаем текущий месяц-день 5-9
      const [startM, startD] = start.split('-').map(Number) // получаем стартовый месяц-день 5-6 праздника
      const [endM, endD] = end.split('-').map(Number) // получаем конечный месяц-день 5-9 праздника

      // Приводим все даты к одному году (2000), чтобы сравнение было простым
      const currDate = new Date(2000, currM - 1, currD)
      const startDate = new Date(2000, startM - 1, startD)
      const endDate = new Date(2000, endM - 1, endD)

      return currDate >= startDate && currDate <= endDate
    }

    onMounted(async () => {
      const today = new Date()
      // Получаем текущую дату в формате "месяц-день", например "5-9"
      const todayKey = `${today.getMonth() + 1}-${today.getDate()}`

      // Массив праздников с диапазонами дат
      const holidays = [
        {
          date: {
            start: '5-5',
            end: '5-9',
          },
          image: new URL('@/assets/images/GeorgLenta.png', import.meta.url)
            .href,
          alt: '9 Мая — День Победы',
        },
        {
          date: {
            start: '1-1',
            end: '1-2',
          },
          image: new URL('@/assets/images/NewYear.png', import.meta.url).href,
          alt: 'Новый Год',
        },
        // Добавь другие праздники здесь
      ]
      // Ищем подходящий праздник по сегодняшней дате
      holiday.value =
        holidays.find(h => isDateInRange(todayKey, h.date.start, h.date.end)) ||
        null
    })
    return {
      holiday,
    }
  },
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins';
@use 'sass:map';

$sizes: (
  small: (
    width: calc(80 * 0.25vw),
    height: calc(60 * 0.25vw),
  ),
  xsmall: (
    width: calc(80 * 0.25vw),
    height: calc(27 * 0.25vw),
  ),
  medium: (
    width: calc(70 * 0.25vw),
    height: calc(34 * 0.25vw),
  ),
  large: (
    width: calc(51 * 0.25vw),
    height: calc(25 * 0.25vw),
  ),
  xlarge: (
    width: calc(50 * 0.25vw),
    height: calc(20 * 0.25vw),
  ),
  xxlarge: (
    width: calc(55 * 0.25vw),
    height: calc(18 * 0.25vw),
  ),
);

.holiday-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  overflow: hidden;
  border-radius: 8px;
  animation: fadeIn 1.2s ease-in-out;

  @each $size, $values in $sizes {
    @include mixins.respond-to($size) {
      min-width: map.get($values, width);
      max-width: map.get($values, width);
      min-height: map.get($values, height);
      max-height: map.get($values, height);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    pointer-events: none;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
