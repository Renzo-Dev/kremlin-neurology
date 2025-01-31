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
        <router-link class="swiper-slide__link" :to="slide.route"
          >{{ slide.title }}
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
  </div>
</template>

<script lang="js">
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { onMounted, ref } from 'vue'

export default {
  name: 'navPanel',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiper = ref(null)
    const nextButton = ref(null)
    const prevButton = ref(null)

    const slides = [
      { title: 'Обучение', route: 'learning' },
      { title: 'История', route: 'history' },
      { title: 'Научная работа', route: 'research' },
      { title: 'Библиотека', route: 'library' },
      { title: 'Клиентская база', route: 'clientBase' },
      { title: 'Ежегодные конференции ▼', route: 'annualConferences' },
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
