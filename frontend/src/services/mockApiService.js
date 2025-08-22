// Мок API сервис для тестирования
export class MockApiService {
  constructor() {
    this.mockFiles = [
      // Публичные файлы (30)
      {
        title: 'Неврологические синдромы в клинической практике',
        authors: 'Иванов А.П.',
        fileName: 'neurology_syndromes.pdf',
        uploadDate: '2024-01-15 10:30:00',
        fileSize: 2048576,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Диагностика и лечение инсульта',
        authors: 'Петров В.С.',
        fileName: 'stroke_diagnosis.pdf',
        uploadDate: '2024-01-10 14:20:00',
        fileSize: 1536000,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Эпилепсия: современные подходы',
        authors: 'Сидоров М.И.',
        fileName: 'epilepsy_modern.pdf',
        uploadDate: '2024-01-08 09:15:00',
        fileSize: 3072000,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Детская неврология',
        authors: 'Волкова Н.П.',
        fileName: 'pediatric_neurology.pdf',
        uploadDate: '2024-01-01 13:20:00',
        fileSize: 1792000,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Головная боль: дифференциальная диагностика',
        authors: 'Соколова И.К.',
        fileName: 'headache_diagnosis.pdf',
        uploadDate: '2023-12-25 10:45:00',
        fileSize: 1280000,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Демиелинизирующие заболевания',
        authors: 'Александрова Т.М.',
        fileName: 'demyelinating.pdf',
        uploadDate: '2023-12-18 09:20:00',
        fileSize: 3584000,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Болезнь Паркинсона: клиника и лечение',
        authors: 'Медведев С.В.',
        fileName: 'parkinsons_disease.pdf',
        uploadDate: '2023-12-15 11:30:00',
        fileSize: 2252800,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Рассеянный склероз: патогенез',
        authors: 'Кузнецова Е.А.',
        fileName: 'multiple_sclerosis.pdf',
        uploadDate: '2023-12-12 16:45:00',
        fileSize: 2816000,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейроанатомия для клиницистов',
        authors: 'Лебедев А.М.',
        fileName: 'neuroanatomy_clinical.pdf',
        uploadDate: '2023-12-10 09:20:00',
        fileSize: 4096000,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейрофизиологические методы исследования',
        authors: 'Смирнов П.К.',
        fileName: 'neurophysiology_methods.pdf',
        uploadDate: '2023-12-08 14:15:00',
        fileSize: 2560000,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Клиническая нейроофтальмология',
        authors: 'Орлова Н.В.',
        fileName: 'neuroophthalmology.pdf',
        uploadDate: '2023-12-05 10:30:00',
        fileSize: 1920000,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейроурология: основы',
        authors: 'Козлов Д.А.',
        fileName: 'neurourology_basics.pdf',
        uploadDate: '2023-12-03 13:40:00',
        fileSize: 1689600,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейроэндокринология',
        authors: 'Морозова Е.В.',
        fileName: 'neuroendocrinology.pdf',
        uploadDate: '2023-11-30 15:20:00',
        fileSize: 2355200,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейроиммунология: современные концепции',
        authors: 'Волков И.С.',
        fileName: 'neuroimmunology.pdf',
        uploadDate: '2023-11-28 11:10:00',
        fileSize: 3145728,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейрогенетика наследственных заболеваний',
        authors: 'Генетиков А.Л.',
        fileName: 'neurogenetics.pdf',
        uploadDate: '2023-11-25 14:50:00',
        fileSize: 2752512,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейротоксикология',
        authors: 'Токсикологов В.П.',
        fileName: 'neurotoxicology.pdf',
        uploadDate: '2023-11-22 09:35:00',
        fileSize: 1884160,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейроонкология: диагностика',
        authors: 'Онкологов М.Р.',
        fileName: 'neurooncology.pdf',
        uploadDate: '2023-11-20 16:25:00',
        fileSize: 3342336,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейротравматология',
        authors: 'Травматологов С.А.',
        fileName: 'neurotraumatology.pdf',
        uploadDate: '2023-11-18 12:15:00',
        fileSize: 2097152,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейрореабилитация: принципы',
        authors: 'Реабилитологов Е.К.',
        fileName: 'neurorehabilitation.pdf',
        uploadDate: '2023-11-15 10:40:00',
        fileSize: 2424832,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейропсихология: клинические аспекты',
        authors: 'Психологов Л.М.',
        fileName: 'neuropsychology.pdf',
        uploadDate: '2023-11-12 13:55:00',
        fileSize: 1966080,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейрохирургические вмешательства',
        authors: 'Козлов Д.А.',
        fileName: 'neurosurgery.pdf',
        uploadDate: '2024-01-05 16:45:00',
        fileSize: 4096000,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Реабилитация после ЧМТ',
        authors: 'Морозова Е.В.',
        fileName: 'tbi_rehabilitation.pdf',
        uploadDate: '2024-01-03 11:30:00',
        fileSize: 2560000,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейрофизиология в клинике',
        authors: 'Лебедев А.М.',
        fileName: 'neurophysiology.pdf',
        uploadDate: '2023-12-28 15:10:00',
        fileSize: 3328000,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейроинфекции',
        authors: 'Кузнецов Р.В.',
        fileName: 'neuroinfections.pdf',
        uploadDate: '2023-12-20 14:30:00',
        fileSize: 2816000,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Современные методы нейровизуализации',
        authors: 'Радиологов В.И.',
        fileName: 'neuroimaging.pdf',
        uploadDate: '2023-11-10 14:20:00',
        fileSize: 5242880,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Инвазивная нейрофизиология',
        authors: 'Хирургов А.Н.',
        fileName: 'invasive_neurophysiology.pdf',
        uploadDate: '2023-11-08 11:45:00',
        fileSize: 3670016,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Стереотаксическая нейрохирургия',
        authors: 'Стереотаксиков П.В.',
        fileName: 'stereotactic_neurosurgery.pdf',
        uploadDate: '2023-11-05 16:30:00',
        fileSize: 4194304,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Эндоваскулярная нейрохирургия',
        authors: 'Эндоваскулярных М.С.',
        fileName: 'endovascular_neurosurgery.pdf',
        uploadDate: '2023-11-03 09:15:00',
        fileSize: 2883584,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейроанестезиология',
        authors: 'Анестезиологов К.Л.',
        fileName: 'neuroanesthesiology.pdf',
        uploadDate: '2023-11-01 13:40:00',
        fileSize: 2202009,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Интенсивная терапия в неврологии',
        authors: 'Интенсивников О.П.',
        fileName: 'neurology_icu.pdf',
        uploadDate: '2023-10-30 15:25:00',
        fileSize: 3014656,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейрофармакология: новые препараты',
        authors: 'Фармакологов Т.Р.',
        fileName: 'neuropharmacology.pdf',
        uploadDate: '2023-10-28 10:50:00',
        fileSize: 2621440,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Клинические исследования в неврологии',
        authors: 'Исследователей Г.А.',
        fileName: 'clinical_trials.pdf',
        uploadDate: '2023-10-25 14:35:00',
        fileSize: 1835008,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейростатистика и метаанализ',
        authors: 'Статистиков В.Е.',
        fileName: 'neurostatistics.pdf',
        uploadDate: '2023-10-23 11:20:00',
        fileSize: 1572864,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейроэтика и биоэтика',
        authors: 'Этиков Ю.Б.',
        fileName: 'neuroethics.pdf',
        uploadDate: '2023-10-20 16:10:00',
        fileSize: 1310720,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейроэкономика',
        authors: 'Экономистов Д.К.',
        fileName: 'neuroeconomics.pdf',
        uploadDate: '2023-10-18 12:45:00',
        fileSize: 2097152,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейроархеология',
        authors: 'Археологов Н.В.',
        fileName: 'neuroarchaeology.pdf',
        uploadDate: '2023-10-15 09:30:00',
        fileSize: 2752512,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейроантропология',
        authors: 'Антропологов М.Ж.',
        fileName: 'neuroanthropology.pdf',
        uploadDate: '2023-10-12 14:55:00',
        fileSize: 1966080,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейрофилософия сознания',
        authors: 'Философов А.С.',
        fileName: 'neurophilosophy.pdf',
        uploadDate: '2023-10-10 10:25:00',
        fileSize: 1572864,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейротеология',
        authors: 'Теологов И.М.',
        fileName: 'neurotheology.pdf',
        uploadDate: '2023-10-08 15:40:00',
        fileSize: 1310720,
        type: 'pdf',
        isPublic: true,
      },
      {
        title: 'Нейроискусство и креативность',
        authors: 'Искусствоведов Л.Т.',
        fileName: 'neuroart.pdf',
        uploadDate: '2023-10-05 12:15:00',
        fileSize: 2359296,
        type: 'pdf',
        isPublic: true,
      },

      // Приватные файлы (10)
      {
        title: 'Секретные протоколы лечения',
        authors: 'Секретный Врач',
        fileName: 'secret_protocols.pdf',
        uploadDate: '2024-01-20 08:00:00',
        fileSize: 1048576,
        type: 'pdf',
        isPublic: false,
      },
      {
        title: 'Экспериментальные методы терапии',
        authors: 'Экспериментатор А.Б.',
        fileName: 'experimental_therapy.pdf',
        uploadDate: '2024-01-18 12:30:00',
        fileSize: 2097152,
        type: 'pdf',
        isPublic: false,
      },
      {
        title: 'Конфиденциальные исследования',
        authors: 'Исследователь С.К.',
        fileName: 'confidential_research.pdf',
        uploadDate: '2024-01-16 15:45:00',
        fileSize: 1572864,
        type: 'pdf',
        isPublic: false,
      },
      {
        title: 'Внутренние стандарты качества',
        authors: 'Качество В.М.',
        fileName: 'internal_standards.pdf',
        uploadDate: '2024-01-14 10:20:00',
        fileSize: 1310720,
        type: 'pdf',
        isPublic: false,
      },
      {
        title: 'Протоколы клинических испытаний',
        authors: 'Испытатель П.Н.',
        fileName: 'clinical_protocols.pdf',
        uploadDate: '2024-01-12 14:15:00',
        fileSize: 2621440,
        type: 'pdf',
        isPublic: false,
      },
      {
        title: 'Внутренняя документация',
        authors: 'Документатор Л.В.',
        fileName: 'internal_docs.pdf',
        uploadDate: '2024-01-10 09:30:00',
        fileSize: 1835008,
        type: 'pdf',
        isPublic: false,
      },
      {
        title: 'Конфиденциальные отчеты',
        authors: 'Отчетчик М.Д.',
        fileName: 'confidential_reports.pdf',
        uploadDate: '2024-01-08 16:40:00',
        fileSize: 1153434,
        type: 'pdf',
        isPublic: false,
      },
      {
        title: 'Секретные методики',
        authors: 'Методист К.С.',
        fileName: 'secret_methods.pdf',
        uploadDate: '2024-01-06 11:25:00',
        fileSize: 1468006,
        type: 'pdf',
        isPublic: false,
      },
      {
        title: 'Внутренние регламенты',
        authors: 'Регламентатор Е.Т.',
        fileName: 'internal_regulations.pdf',
        uploadDate: '2024-01-04 13:50:00',
        fileSize: 1048576,
        type: 'pdf',
        isPublic: false,
      },
      {
        title: 'Конфиденциальные алгоритмы',
        authors: 'Алгоритмист Р.П.',
        fileName: 'confidential_algorithms.pdf',
        uploadDate: '2024-01-02 10:10:00',
        fileSize: 2097152,
        type: 'pdf',
        isPublic: false,
      },
    ]
  }

  // Имитация задержки сети
  async delay(ms = 500) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  // Получение публичных файлов
  async getPublicFiles() {
    await this.delay()
    return {
      success: true,
      files: this.mockFiles.filter(file => file.isPublic),
    }
  }

  // Получение приватных файлов
  async getPrivateFiles() {
    await this.delay()
    return {
      success: true,
      files: this.mockFiles.filter(file => !file.isPublic),
    }
  }

  // Проверка пароля
  async verifyPassword(password) {
    await this.delay(300)

    if (password === '123456') {
      return {
        success: true,
        message: 'Пароль верный',
      }
    } else {
      return {
        success: false,
        message: 'Неверный пароль',
      }
    }
  }

  // Поиск файлов
  async searchFiles(query, filters = {}) {
    await this.delay(200)

    let results = [...this.mockFiles]

    if (query) {
      const searchQuery = query.toLowerCase()
      results = results.filter(
        file =>
          file.title.toLowerCase().includes(searchQuery) ||
          file.authors.toLowerCase().includes(searchQuery)
      )
    }

    if (filters.author) {
      results = results.filter(file => file.authors === filters.author)
    }

    if (filters.type) {
      results = results.filter(file => file.type === filters.type)
    }

    return {
      success: true,
      files: results,
    }
  }

  // Скачивание файла (мок)
  async downloadFile(fileName, isPrivate = false) {
    await this.delay(1000)

    // Имитируем скачивание
    const file = this.mockFiles.find(f => f.fileName === fileName)

    if (file) {
      return {
        success: true,
        fileName: file.fileName,
        fileSize: file.fileSize,
        message: 'Файл успешно скачан',
      }
    } else {
      return {
        success: false,
        message: 'Файл не найден',
      }
    }
  }
}
