<template>
  <div class="nav-panel">
    <img
      ref="prevButton"
      src="/src/assets/icons/arrow_icon.svg"
      alt="Назад"
      @click.prevent="swiper.slidePrev()"
      class="buttonPrev button-swiper"
    />
    <swiper
      @swiper="onSwiperInit"
      @slideChange="updateButtonVisibility"
      :breakpoints="breakpoints"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <router-link
          class="swiper-slide__link"
          :to="slide.route"
          @mouseover="slide.hasDropDown && onMouseOver()"
          @mouseleave="slide.hasDropDown && onMouseLeave()"
        >
          {{ slide.title }}
        </router-link>
      </swiper-slide>
    </swiper>
    <img
      ref="nextButton"
      src="/src/assets/icons/arrow_icon.svg"
      style="transform: rotate(180deg)"
      alt="Вперед"
      @click.prevent="swiper.slideNext()"
      class="buttonNext button-swiper"
    />
    <ConferenceDropdown v-if="dropDownActive === true" />
  </div>
</template>

<script lang="js">
import ConferenceDropdown from '@/components/topHeader/ConferenceDropdown.vue'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { onMounted, ref } from 'vue'

export default {
  name: 'navPanel',
  computed: {},
  components: {
    ConferenceDropdown,
    Swiper,
    SwiperSlide,
  },
  setup() {
    
    const swiper = ref(null)
    const nextButton = ref(null)
    const prevButton = ref(null)
    let dropDownActive = ref(false)

    const slides = [
      { title: 'Обучение', route: 'learning' },
      { title: 'История', route: 'history' },
      { title: 'Научная работа', route: 'research' },
      { title: 'Библиотека', route: 'library' },
      { title: 'Клиентская база', route: 'clientBase' },
      {
        title: 'Ежегодные конференции ▼',
        route: 'annualConferences',
        hasDropDown: true,
      },
      {
        title: 'Научный кружок "Школа молодых неврологов"',
        route: 'youngNeurologists',
      },
      { title: 'Новости и обновления', route: 'newsUpdates' },
      { title: 'Контактная информация', route: 'contactInfo' },
    ]
    const breakpoints = {
      300: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
      2000: {
        slidesPerView: 8,
        spaceBetween: 50,
      },
      3000: {
        slidesPerView: 10,
        spaceBetween: 50,
      },
    }
    const onMouseOver = () => {
      console.log('Навели на "Ежегодные конференции"')
      dropDownActive = true
      // Добавь здесь логику показа dropdown или что тебе нужно
    }

    const onMouseLeave = () => {
      console.log('Убрали мышь с "Ежегодные конференции"')
      dropDownActive = false
      // Здесь — скрытие dropdown и т.п.
    }

    onMounted(() => {
      updateButtonVisibility()
    })

    const onSwiperInit = instance => {
      swiper.value = instance
    }

    const updateButtonVisibility = () => {
      if (swiper.value.isEnd) {
        nextButton.value.style.visibility = 'hidden'
      } else {
        nextButton.value.style.visibility = 'visible'
      }
      if (swiper.value.isBeginning) {
        prevButton.value.style.visibility = 'hidden'
      } else {
        prevButton.value.style.visibility = 'visible'
      }
    }

    return {
      onMouseOver,
      onMouseLeave,
      dropDownActive,
      breakpoints,
      prevButton,
      nextButton,
      swiper,
      slides,
      onSwiperInit,
      updateButtonVisibility,
    }
  },
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/components/navPanel';
</style>
