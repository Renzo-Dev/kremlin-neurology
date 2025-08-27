<template>
  <div class="conference-detail-page">
    <div class="container">
      <header class="page-header">
        <div class="breadcrumb">
          <router-link to="/conferences" class="breadcrumb-link">
            ← Назад к конференциям
          </router-link>
        </div>
        <h1>Конференция {{ conference.year }} года</h1>
        <div class="conference-meta">
          <div class="conference-date">{{ conference.date }}</div>
          <div class="conference-location">{{ conference.location }}</div>
        </div>
      </header>

      <section class="conference-info">
        <h2>О конференции</h2>
        <p>{{ conference.description }}</p>
        <p>
          Конференция была организована совместно с {{ conference.partner }} 
          и прошла под эгидой научно-практической конференции "{{ conference.title }}".
        </p>
      </section>

      <section class="conference-details">
        <h2>Детали конференции</h2>
        <div class="details-grid">
          <div class="detail-item">
            <div class="detail-icon">📅</div>
            <div class="detail-content">
              <h3>Дата проведения</h3>
              <p>{{ conference.date }}</p>
            </div>
          </div>
          
          <div class="detail-item">
            <div class="detail-icon">📍</div>
            <div class="detail-content">
              <h3>Место проведения</h3>
              <p>{{ conference.location }}</p>
            </div>
          </div>
          
          <div class="detail-item">
            <div class="detail-icon">🏥</div>
            <div class="detail-content">
              <h3>Организатор</h3>
              <p>{{ conference.organizer }}</p>
            </div>
          </div>
          
          <div class="detail-item">
            <div class="detail-icon">🤝</div>
            <div class="detail-content">
              <h3>Партнер</h3>
              <p>{{ conference.partner }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="conference-program">
        <h2>Программа конференции</h2>
        <div class="program-content">
          <h3>Секция: {{ conference.section }}</h3>
          <p>
            {{ conference.description }}
          </p>
          
          <div v-if="conference.specialInfo" class="special-info">
            <p>{{ conference.specialInfo }}</p>
          </div>
          
          <div v-if="conference.detailedInfo" class="detailed-info">
            <p>{{ conference.detailedInfo }}</p>
          </div>
          
          <div v-if="conference.program" class="conference-program-detailed">
            <h3>Детальная программа конференции:</h3>
            <div class="program-timeline">
              <div 
                v-for="(item, index) in conference.program" 
                :key="index"
                class="program-item"
              >
                <span class="program-time">{{ item.split(' - ')[0] }}</span>
                <span class="program-description">{{ item.split(' - ').slice(1).join(' - ') }}</span>
              </div>
            </div>
          </div>
          
          <h3>Ключевые темы:</h3>
          <ul class="topics-list">
            <li>Современные методы нейрореабилитации</li>
            <li>Восстановительное лечение в остром периоде</li>
            <li>Инновационные подходы к диагностике</li>
            <li>Практические аспекты лечения</li>
            <li>Междисциплинарный подход к реабилитации</li>
          </ul>
        </div>
      </section>

      <section class="conference-materials">
        <h2>Материалы конференции</h2>
        <div class="materials-content">
          <p>
            По итогам конференции {{ conference.year }} года были подготовлены материалы, которые доступны для специалистов в области неврологии 
            и нейрореабилитации.
          </p>
          
          <div class="materials-download">
            <div class="download-item">
              <div class="download-icon">{{ getFileIcon() }}</div>
              <div class="download-info">
                <h3>Материалы конференции {{ conference.year }} года</h3>
                <p>{{ getFileDescription() }}</p>
                <div class="file-details">
                  <span class="file-name">{{ conference.fileName }}</span>
                  <span class="file-format">{{ getFileFormat() }}</span>
                </div>
                <button 
                  @click="downloadMaterials" 
                  class="download-button"
                >
                  <span class="download-icon-btn">⬇️</span>
                  Скачать материалы
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>




    </div>
  </div>
</template>

<script>
import { ApiService } from '@/services/apiService.js'

export default {
  name: 'ConferenceDetail',
  props: {
    year: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      apiService: new ApiService(),
      conferences: {
        '2010': {
          year: '2010',
          date: '17 ноября 2010 г.',
          location: 'г. Москва, ул. Покровка, д. 2',
          title: 'Современные подходы к диагностике и лечению неврологических заболеваний',
          section: 'Нейрореабилитация и восстановительное лечение неврологических заболеваний в остром периоде',
          organizer: 'Клиника неврологии им. А.Я. Кожевникова',
          partner: 'Российская ассоциация неврологов "Российское общество неврологов"',
          fileName: 'Conference_neuro-2010.doc',
          description: 'В рамках научно-практической конференции состоялась секция "Нейрореабилитация и восстановительное лечение неврологических заболеваний в остром периоде".'
        },
        '2011': {
          year: '2011',
          date: '21 декабря 2011 г.',
          location: 'г. Москва, ул. Покровка, д. 2',
          title: 'Современные подходы к диагностике и лечению неврологических заболеваний',
          section: 'II ежегодная научно-практическая конференция',
          organizer: 'Клиника неврологии им. А.Я. Кожевникова',
          partner: 'Российская ассоциация неврологов "Российское общество неврологов"',
          fileName: 'Conference_neuro-2011(itog).doc',
          description: 'II ежегодная научно-практическая конференция с международным участием "Современные подходы к диагностике и лечению неврологических заболеваний".'
        },
        '2012': {
          year: '2012',
          date: '15 ноября 2012 г.',
          location: 'г. Москва, ул. Покровка, д. 2',
          title: 'Современные подходы к диагностике и лечению неврологических заболеваний',
          section: 'III ежегодная научно-практическая конференция',
          organizer: 'Клиника неврологии им. А.Я. Кожевникова',
          partner: 'Российская ассоциация неврологов "Российское общество неврологов"',
          fileName: 'Conference_neuro-2012.pdf',
          description: 'III ежегодная научно-практическая конференция с международным участием "Современные подходы к диагностике и лечению неврологических заболеваний".',
          specialInfo: 'Конференция была посвящена неврологическим заболеваниям. В рамках конференции состоялась секция "Нейрореабилитация и восстановительное лечение неврологических заболеваний в остром периоде". Председатель конференции - д.м.н., профессор А.Н. Бойко. Программа конференции доступна для скачивания в формате PDF.'
        },
        '2013': {
          year: '2013',
          date: '13 ноября 2013 г.',
          location: 'г. Москва, ул. Покровка, д. 2',
          title: 'Современные подходы к диагностике и лечению неврологических заболеваний',
          section: 'IV ежегодная научно-практическая конференция',
          organizer: 'Клиника неврологии им. А.Я. Кожевникова',
          partner: 'Российская ассоциация неврологов "Российское общество неврологов"',
          fileName: 'Conference_neuro-2013_itog.pdf',
          description: 'IV ежегодная научно-практическая конференция с международным участием "Современные подходы к диагностике и лечению неврологических заболеваний".',
          specialInfo: 'Конференция была посвящена неврологическим заболеваниям. В рамках конференции состоялась секция "Нейрореабилитация и восстановительное лечение неврологических заболеваний в остром периоде". Председатель конференции - д.м.н., профессор А.Н. Бойко. Программа конференции доступна для скачивания в формате PDF.'
        },
        '2014': {
          year: '2014',
          date: '9 декабря 2014 г.',
          location: 'г. Москва, ул. Покровка, д. 2',
          title: 'Современные подходы к диагностике и лечению неврологических заболеваний',
          section: 'V ежегодная научно-практическая конференция',
          organizer: 'Клиника неврологии им. А.Я. Кожевникова',
          partner: 'Российская ассоциация неврологов "Российское общество неврологов"',
          fileName: 'Conference_neuro-02-11-2016.pdf',
          description: 'V ежегодная научно-практическая конференция с международным участием "Современные подходы к диагностике и лечению неврологических заболеваний".',
          specialInfo: 'Конференция была посвящена неврологическим заболеваниям. В рамках конференции состоялась секция "Нейрореабилитация и восстановительное лечение неврологических заболеваний в остром периоде". Председатель конференции - д.м.н., профессор А.Н. Бойко. Программа конференции доступна для скачивания в формате PDF.',
          detailedInfo: 'V ежегодная научно-практическая конференция с международным участием "Современные подходы к диагностике и лечению неврологических заболеваний". Конференция была посвящена неврологическим заболеваниям. В рамках конференции состоялась секция "Нейрореабилитация и восстановительное лечение неврологических заболеваний в остром периоде". Председатель конференции - д.м.н., профессор А.Н. Бойко.',
          program: [
            '09.00 - 10.00 Регистрация участников',
            '10.00 - 10.10 Открытие конференции. Приветственное слово',
            '10.10 - 10.40 Основные направления неврологии',
            '10.40 - 11.00 Нейрореабилитация и восстановительное лечение',
            '11.00 - 11.15 Современные методы диагностики и лечения',
            '11.15 - 12.00 Основные неврологические заболевания и их лечение',
            '12.00 - 12.15 Перерыв, кофе-брейк',
            '12.15 - 12.30 Нейрореабилитация и восстановительное лечение',
            '12.30 - 13.00 Обед',
            '13.00 - 13.15 Нейрореабилитация и восстановительное лечение',
            '13.15 - 13.30 Современные методы диагностики и лечения',
            '13.30 - 13.45 Нейрореабилитация и восстановительное лечение',
            '13.45 - 14.00 Основные неврологические заболевания',
            '14.00 - 14.15 Современные методы диагностики и лечения',
            '14.15 - 14.30 Основные неврологические заболевания',
            '14.30 - 14.45 Основные неврологические заболевания',
            '14.45 - 15.00 Нейрореабилитация и восстановительное лечение',
            '15.00 - 15.15 Основные неврологические заболевания',
            '15.15 - 15.30 Основные неврологические заболевания',
            '15.30 - 15.45 Современные методы диагностики и лечения',
            '15.45 - 16.00 Нейрореабилитация и восстановительное лечение',
            '16.00 - 16.15 Основные неврологические заболевания',
            '16.15 - 16.30 Нейрореабилитация и восстановительное лечение',
            '16.30 - 16.45 Основные неврологические заболевания',
            '16.45 - 17.00 Нейрореабилитация и восстановительное лечение',
            '17.00 - 18.00 Перерыв, кофе-брейк',
            '18.00 Закрытие'
          ]
        },
        '2015': {
          year: '2015',
          date: '12 ноября 2015 г.',
          location: 'г. Москва, ул. Покровка, д. 2',
          title: 'Современные подходы к диагностике и лечению неврологических заболеваний',
          section: 'VI ежегодная научно-практическая конференция',
          organizer: 'Клиника неврологии им. А.Я. Кожевникова',
          partner: 'Российская ассоциация неврологов "Российское общество неврологов"',
          fileName: 'Conference_neuro-02-11-2016.pdf',
          description: 'VI ежегодная научно-практическая конференция с международным участием "Современные подходы к диагностике и лечению неврологических заболеваний".',
          specialInfo: 'Конференция была посвящена неврологическим заболеваниям. В рамках конференции состоялась секция "Нейрореабилитация и восстановительное лечение неврологических заболеваний в остром периоде". Председатель конференции - д.м.н., профессор А.Н. Бойко. Программа конференции доступна для скачивания в формате PDF.',
          detailedInfo: 'VI ежегодная научно-практическая конференция с международным участием "Современные подходы к диагностике и лечению неврологических заболеваний". Конференция была посвящена неврологическим заболеваниям. В рамках конференции состоялась секция "Нейрореабилитация и восстановительное лечение неврологических заболеваний в остром периоде". Председатель конференции - д.м.н., профессор А.Н. Бойко.',
          program: [
            '09.00 - 10.00 Регистрация участников',
            '10.00 - 10.10 Открытие конференции. Приветственное слово',
            '10.10 - 10.40 Основные направления неврологии',
            '10.40 - 11.00 Нейрореабилитация и восстановительное лечение',
            '11.00 - 11.15 Современные методы диагностики и лечения',
            '11.15 - 12.00 Основные неврологические заболевания и их лечение',
            '12.00 - 12.15 Перерыв, кофе-брейк',
            '12.15 - 12.30 Нейрореабилитация и восстановительное лечение',
            '12.30 - 13.00 Обед',
            '13.00 - 13.15 Нейрореабилитация и восстановительное лечение',
            '13.15 - 13.30 Современные методы диагностики и лечения',
            '13.30 - 13.45 Нейрореабилитация и восстановительное лечение',
            '13.45 - 14.00 Основные неврологические заболевания',
            '14.00 - 14.15 Современные методы диагностики и лечения',
            '14.15 - 14.30 Основные неврологические заболевания',
            '14.30 - 14.45 Основные неврологические заболевания',
            '14.45 - 15.00 Нейрореабилитация и восстановительное лечение',
            '15.00 - 15.15 Основные неврологические заболевания',
            '15.15 - 15.30 Основные неврологические заболевания',
            '15.30 - 15.45 Современные методы диагностики и лечения',
            '15.45 - 16.00 Нейрореабилитация и восстановительное лечение',
            '16.00 - 16.15 Основные неврологические заболевания',
            '16.15 - 16.30 Нейрореабилитация и восстановительное лечение',
            '16.30 - 16.45 Основные неврологические заболевания',
            '16.45 - 17.00 Нейрореабилитация и восстановительное лечение',
            '17.00 - 18.00 Перерыв, кофе-брейк',
            '18.00 Закрытие'
          ]
        },
        '2016': {
          year: '2016',
          date: '2 ноября 2016 г.',
          location: 'г. Москва, ул. Покровка, д. 2',
          title: 'Современные подходы к диагностике и лечению неврологических заболеваний',
          section: 'VII ежегодная научно-практическая конференция',
          organizer: 'Клиника неврологии им. А.Я. Кожевникова',
          partner: 'Российская ассоциация неврологов "Российское общество неврологов"',
          fileName: 'Conference_neuro-02-11-2016.pdf',
          description: 'VII ежегодная научно-практическая конференция с международным участием "Современные подходы к диагностике и лечению неврологических заболеваний".',
          specialInfo: 'Конференция была посвящена неврологическим заболеваниям. В рамках конференции состоялась секция "Нейрореабилитация и восстановительное лечение неврологических заболеваний в остром периоде". Председатель конференции - д.м.н., профессор А.Н. Бойко. Программа конференции доступна для скачивания в формате PDF.',
          detailedInfo: 'VII ежегодная научно-практическая конференция с международным участием "Современные подходы к диагностике и лечению неврологических заболеваний". Конференция была посвящена неврологическим заболеваниям. В рамках конференции состоялась секция "Нейрореабилитация и восстановительное лечение неврологических заболеваний в остром периоде". Председатель конференции - д.м.н., профессор А.Н. Бойко.',
          program: [
            '09.00 - 10.00 Регистрация участников',
            '10.00 - 10.10 Открытие конференции. Приветственное слово',
            '10.10 - 10.40 Основные направления неврологии',
            '10.40 - 11.00 Нейрореабилитация и восстановительное лечение',
            '11.00 - 11.15 Современные методы диагностики и лечения',
            '11.15 - 12.00 Основные неврологические заболевания и их лечение',
            '12.00 - 12.15 Перерыв, кофе-брейк',
            '12.15 - 12.30 Нейрореабилитация и восстановительное лечение',
            '12.30 - 13.00 Обед',
            '13.00 - 13.15 Нейрореабилитация и восстановительное лечение',
            '13.15 - 13.30 Современные методы диагностики и лечения',
            '13.30 - 13.45 Нейрореабилитация и восстановительное лечение',
            '13.45 - 14.00 Основные неврологические заболевания',
            '14.00 - 14.15 Современные методы диагностики и лечения',
            '14.15 - 14.30 Основные неврологические заболевания',
            '14.30 - 14.45 Основные неврологические заболевания',
            '14.45 - 15.00 Нейрореабилитация и восстановительное лечение',
            '15.00 - 15.15 Основные неврологические заболевания',
            '15.15 - 15.30 Основные неврологические заболевания',
            '15.30 - 15.45 Современные методы диагностики и лечения',
            '15.45 - 16.00 Нейрореабилитация и восстановительное лечение',
            '16.00 - 16.15 Основные неврологические заболевания',
            '16.15 - 16.30 Нейрореабилитация и восстановительное лечение',
            '16.30 - 16.45 Основные неврологические заболевания',
            '16.45 - 17.00 Нейрореабилитация и восстановительное лечение',
            '17.00 - 18.00 Перерыв, кофе-брейк',
            '18.00 Закрытие'
          ]
        },
        '2017': {
          year: '2017',
          date: '24 октября 2017 г.',
          location: 'г. Москва, ул. Покровка, д. 2',
          title: 'Современные подходы к диагностике и лечению неврологических заболеваний',
          section: 'VIII ежегодная научно-практическая конференция',
          organizer: 'Клиника неврологии им. А.Я. Кожевникова',
          partner: 'Российская ассоциация неврологов "Российское общество неврологов"',
          fileName: 'Conference_neuro-2017.pdf',
          description: 'VIII ежегодная научно-практическая конференция с международным участием "Современные подходы к диагностике и лечению неврологических заболеваний".',
          specialInfo: 'Конференция была посвящена неврологическим заболеваниям. В рамках конференции состоялась секция "Нейрореабилитация и восстановительное лечение неврологических заболеваний в остром периоде". Председатель конференции - д.м.н., профессор А.Н. Бойко. Программа конференции доступна для скачивания в формате PDF.',
          detailedInfo: 'VIII ежегодная научно-практическая конференция с международным участием "Современные подходы к диагностике и лечению неврологических заболеваний". Конференция была посвящена неврологическим заболеваниям. В рамках конференции состоялась секция "Нейрореабилитация и восстановительное лечение неврологических заболеваний в остром периоде". Председатель конференции - д.м.н., профессор А.Н. Бойко.',
          program: [
            '09.00 - 10.00 Регистрация участников',
            '10.00 - 10.10 Открытие конференции. Приветственное слово',
            '10.10 - 10.40 Основные направления неврологии',
            '10.40 - 11.00 Нейрореабилитация и восстановительное лечение',
            '11.00 - 11.45 Основные неврологические заболевания и их лечение',
            '11.45 - 12.05 Перерыв, кофе-брейк',
            '12.05 - 12.25 Основные неврологические заболевания и их лечение',
            '12.25 - 12.45 Основные неврологические заболевания и их лечение',
            '12.45 - 13.15 Обед',
            '13.15 - 13.35 Основные неврологические заболевания и их лечение',
            '13.35 - 13.55 Основные неврологические заболевания и их лечение',
            '13.55 - 14.40 Основные неврологические заболевания и их лечение',
            '14.40 - 15.00 Основные неврологические заболевания и их лечение',
            '15.00 - 15.45 Основные неврологические заболевания и их лечение',
            '15.45 - 16.05 Основные неврологические заболевания и их лечение',
            '16.05 - 16.25 Основные неврологические заболевания и их лечение',
            '16.25 - 16.45 Основные неврологические заболевания и их лечение',
            '16.45 - 17.05 Основные неврологические заболевания и их лечение',
            '17.05 - 18.00 Перерыв, кофе-брейк',
            '18.00 Закрытие'
          ]
        }
        // Можно добавить данные для других лет
      }
    }
  },
  computed: {
    conference() {
      return this.conferences[this.year] || this.conferences['2010']
    }
  },
  methods: {
    async downloadMaterials() {
      try {
        await this.apiService.downloadFile(this.conference.fileName, false)
      } catch (error) {
        console.error('Ошибка при скачивании файла:', error)
        // Можно добавить уведомление пользователю об ошибке
      }
    },
    
    getFileIcon() {
      const fileName = this.conference.fileName.toLowerCase()
      if (fileName.includes('.pdf')) return '📕'
      if (fileName.includes('.doc') || fileName.includes('.docx')) return '📄'
      if (fileName.includes('.txt')) return '📝'
      return '📄'
    },
    
    getFileDescription() {
      const fileName = this.conference.fileName.toLowerCase()
      if (fileName.includes('.pdf')) {
        return 'PDF документ с полным описанием конференции и представленных докладов'
      }
      if (fileName.includes('.doc') || fileName.includes('.docx')) {
        return 'Документ Word с полным описанием конференции и представленных докладов'
      }
      if (fileName.includes('.txt')) {
        return 'Текстовый документ с описанием конференции и представленных докладов'
      }
      return 'Документ с полным описанием конференции и представленных докладов'
    },
    
    getFileFormat() {
      const fileName = this.conference.fileName.toLowerCase()
      if (fileName.includes('.pdf')) return 'PDF'
      if (fileName.includes('.doc')) return 'DOC'
      if (fileName.includes('.docx')) return 'DOCX'
      if (fileName.includes('.txt')) return 'TXT'
      return 'Документ'
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;

.conference-detail-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
  
  .breadcrumb {
    text-align: left;
    margin-bottom: 1rem;
    
    .breadcrumb-link {
      color: v.$primary-color;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      
      &:hover {
        color: v.$secondary-color;
      }
    }
  }
  
  h1 {
    font-size: 2.5rem;
    color: v.$primary-color;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  
  .conference-meta {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    
    .conference-date,
    .conference-location {
      background: rgba(255, 255, 255, 0.9);
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      font-weight: 500;
      color: v.$text-primary;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
}

section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h2 {
    color: v.$primary-color;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid v.$accent-color;
    padding-bottom: 0.5rem;
  }
  
  h3 {
    color: v.$secondary-color;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  
  p {
    line-height: 1.7;
    margin-bottom: 1rem;
    color: v.$text-primary;
  }
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  
  .detail-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }
  
  .detail-content {
    h3 {
      color: v.$primary-color;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }
    
    p {
      color: v.$text-secondary;
      margin-bottom: 0;
    }
  }
}

.program-content {
  h3 {
    color: v.$primary-color;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .special-info {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin: 1.5rem 0;
    border-left: 4px solid v.$accent-color;
    
    p {
      margin: 0;
      color: v.$text-primary;
      line-height: 1.6;
    }
  }
  
  .detailed-info {
    background: #e8f4fd;
    padding: 1.5rem;
    border-radius: 8px;
    margin: 1.5rem 0;
    border-left: 4px solid v.$secondary-color;
    
    p {
      margin: 0;
      color: v.$text-primary;
      line-height: 1.6;
    }
  }
  
  .conference-program-detailed {
    margin: 2rem 0;
    
    h3 {
      color: v.$primary-color;
      margin-bottom: 1.5rem;
      border-bottom: 2px solid v.$accent-color;
      padding-bottom: 0.5rem;
    }
    
    .program-timeline {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 1.5rem;
      border-left: 4px solid v.$primary-color;
      
      .program-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 0.75rem 0;
        border-bottom: 1px solid #e9ecef;
        
        &:last-child {
          border-bottom: none;
        }
        
        .program-time {
          background: v.$primary-color;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 600;
          min-width: 80px;
          text-align: center;
          flex-shrink: 0;
        }
        
        .program-description {
          color: v.$text-primary;
          line-height: 1.4;
          flex: 1;
        }
      }
    }
  }
  
  .topics-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
    
    li {
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;
      color: v.$text-primary;
      
      &::before {
        content: '•';
        color: v.$accent-color;
        font-weight: bold;
        position: absolute;
        left: 0;
      }
    }
  }
}

.materials-download {
  margin-top: 1.5rem;
}

.download-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, v.$primary-color, v.$secondary-color);
  border-radius: 12px;
  color: white;
  
  .download-icon {
    font-size: 3rem;
    flex-shrink: 0;
  }
  
  .download-info {
    h3 {
      color: white;
      margin-bottom: 0.5rem;
    }
    
    p {
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 1.5rem;
    }
    
    .file-details {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
      align-items: center;
      
      .file-name {
        background: rgba(255, 255, 255, 0.1);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-family: monospace;
        font-size: 0.9rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .file-format {
        background: rgba(255, 255, 255, 0.15);
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    }
    
    .download-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      text-decoration: none;
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      font-weight: 500;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      
      &:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }
      
      .download-icon-btn {
        font-size: 1.1rem;
      }
    }
  }
}





@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .conference-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .details-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .detail-item {
    flex-direction: column;
    text-align: center;
    
    .detail-icon {
      margin: 0 auto;
    }
  }
  
  .download-item {
    flex-direction: column;
    text-align: center;
    
    .download-icon {
      margin: 0 auto;
    }
  }
  
  .conference-program-detailed {
    .program-timeline {
      .program-item {
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
        
        .program-time {
          min-width: auto;
          width: 100%;
          max-width: 120px;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
