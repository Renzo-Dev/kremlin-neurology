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
        <a
          v-if="slide.hasDropDown"
          class="swiper-slide__link"
          :id="slide.hasDropDown ? 'AnnualConferences' : null"
          @mouseenter="showDropDownMenu($event)"
          @mouseleave="hideDropDownMenu"
        >
          {{ slide.title }}
        </a>
        <router-link v-else class="swiper-slide__link" :to="slide.route">
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
  </div>
  <div id="dropdown-content">
    <a href="#"
      >Научно-практическая конференция "Инновационные технологии в области
      неврологии и смежных специальностей"</a
    >
    <a href="#"
      >Научно-образовательная конференция "Неврологические образовательные
      университеты"</a
    >
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

    let isDropDownVisible = ref(false)
    let dropDownElem = ref(null)

    const slides = [
      { title: 'Обучение', route: 'learning' },
      { title: 'История', route: 'history' },
      { title: 'Научная работа', route: 'research' },
      { title: 'Библиотека', route: 'library' },
      { title: 'Клиентская база', route: 'clientBase' },
      {
        title: 'Ежегодные конференции',
        buttonOne: {
          title:
            'Инновационные технологии в области неврологии и смежных специальностей',
          route: 'youngNeurologists',
        },
        buttonTwo: {
          title: 'Неврологические образовательные университеты',
          route: 'youngNeurologists',
        },
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

    function showDropDownMenu(event) {
      let dropdownContent = document.getElementById('dropdown-content')
      let dropDownMenu = event.target.getBoundingClientRect()
      dropdownContent.style.display = 'flex'
      dropdownContent.style.width = dropDownMenu.width + 'px'
      dropdownContent.style.left =
        dropDownElem.getBoundingClientRect().left +
        (dropDownElem.getBoundingClientRect().width -
          dropdownContent.getBoundingClientRect().width) /
          2 +
        'px'
      dropdownContent.style.top =
        dropDownElem.getBoundingClientRect().bottom + 10 + 'px'

      // Add event listeners for mouseenter and mouseleave to dropdown-content links
      // Добавить обработчики событий для mouseenter и mouseleave для ссылок в dropdown-content
      dropdownContent.querySelectorAll('a').forEach(elem => {
        elem.addEventListener('mouseenter', () => {
          isDropDownVisible.value = true
        })
        elem.addEventListener('mouseleave', () => {
          isDropDownVisible.value = false
          hideDropDownMenu()
        })
      })
    }

    function hideDropDownMenu() {
      let dropdownContent = document.getElementById('dropdown-content')
      setTimeout(() => {
        if (isDropDownVisible.value === false) {
          dropdownContent.style.display = 'none'
        }
      }, 200)
    }

    onMounted(() => {
      dropDownElem = document.getElementById('AnnualConferences')
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
      isDropDownVisible,
      showDropDownMenu,
      hideDropDownMenu,
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
@use '@/assets/styles/components/navPanel.scss';
</style>
