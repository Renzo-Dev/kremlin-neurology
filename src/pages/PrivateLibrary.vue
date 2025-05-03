<template>
  <div class="container">
    <div class="library mt-4">
      <div class="library__content">
        <div class="library__header">
          <h2 class="library__title">
            Приветная библиотека сайта "Кремлевская неврология"
          </h2>
        </div>

        <div class="library__accordion mb-4 w-100">
          <LibraryAccordion :items="items" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import LibraryAccordion from '@/components/library/LibraryAccordion.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { LibraryAccordion },
  setup() {
    let items = [
      {
        letter: 'А',
        publications: [
          {
            authors: 'Андреева Т.Е., Богачева Л.А., Седова Т.Н.',
            title:
              'Принципы диагностики и лечения хронических непрогрессирующих головных болей различной этиологии в условиях специализированного поликлинического отделения. Кремлевская медицина. Клинический вестник – 2000. - №3. – С. 35-36',
            link: 'AndreevaTE.doc',
            img: {
              type: 'word',
              src: 'word.png',
            },
          },
          {
            authors: 'Артамонов А.В.',
            title:
              'Кардиоцеребральный синдром у лиц пожилого и старческого возраста с преходящими нарушениями мозгового кровообращения (вопросы этиологии, патогенеза и лечения. Автореферат диссертации на соискание ученой степени кандидата медицинских наук, Москва – 2009.',
            link: 'Artamonov_AV.pdf',
            img: {
              type: 'pdf',
              src: 'pdf.gif',
            },
          },
        ],
      },
    ]
    return {
      items,
    }
  },
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/pages/library.scss';
</style>
