<template>
  <div class="container mt-4">
    <h2 class="container h2 mt-2 text-center">
      Электронная библиотека сайта "Кремлевская неврология"
    </h2>
    <LibraryAccordion :items="items"></LibraryAccordion>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import LibraryAccordion from '@/components/library/LibraryAccordion.vue'

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
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=AndreevaTE.doc',
            img: {
              type: 'word',
              src: 'word.png',
            },
          },
          {
            authors: 'Артамонов А.В.',
            title:
              'Кардиоцеребральный синдром у лиц пожилого и старческого возраста с преходящими нарушениями мозгового кровообращения (вопросы этиологии, патогенеза и лечения. Автореферат диссертации на соискание ученой степени кандидата медицинских наук, Москва – 2009.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Artamonov_AV.pdf',
            img: {
              type: 'pdf',
              src: 'pdf.gif',
            },
          },
        ],
      },
      {
        letter: 'Б',
        publications: [
          {
            authors: 'Бадалян Л.О.',
            title: 'Детская неврология. Изд. 3-е. М.:Медицина, 1984. – 576с.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Badalyan_LO_Detskaya_nevrologiya.zip',
            img: {
              type: 'ZIP',
              src: 'djvu.jpg',
            },
          },
          {
            authors: 'Баранцевич Е.Р., Посохина О.В., Стурова Ю.В.',
            title:
              'Эффективность препарата ноопепт при дисциркуляторной энцефалопатии. – Журнал неврологии и психиатрии, №5, 2009г. – 62-64.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Barancevich_Posohina_Eff-t_Noo_pri_DE.pdf',
            img: {
              type: 'pdf',
              src: 'pdf.gif',
            },
          },
        ],
      },
      {
        letter: 'В',
        publications: [
          {
            authors:
              'Васильев А.С., Бабенков Н.В., Носенко Е.М., Андреева Н.Я., Васильева В.В., Крылова С.В., Шушарина Л.Я., Кривецкий А.В., Артамонов А.В., Ермакова Е.В., Заец Т.Я., Клачкова Л.Б., Герасименко Т.Ю., Бардина Н.В., Ракова-Ваулина Т.С.',
            title:
              'Реабилитация и ведение больных с полушарным инсультом в свете новой концепции патогенеза постинсультного двигательного дефицита. Ж."Кремлевская медицина. Клинический вестник", 2001г., №2, стр 34-37.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=kremlin-med_02-01.doc',
            img: {
              type: 'word',
              src: 'word.png',
            },
          },
          {
            authors:
              'Васильев А.С., Васильева В.В., Шмырев В.И., Олейникова Е.Н.',
            title:
              'Мануальная коррекция лимфостаза нижней конечности на фоне беременности. Клиническое наблюдение. – Бюллетень №10 Московского профессионального объединения мануальных терапевтов. Москва, октябрь 2008г., - с. 21-22.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=limf-berem-manual.doc',
            img: {
              type: 'word',
              src: 'word.png',
            },
          },
          {
            authors:
              'Васильев А.С., Васильева В.В., Шмырев В.И., Федоров Г.Г.,Олейникова Е.Н.',
            title:
              'Особенности ведения пациентов с постторакотомическими болевыми синдромами на поздних сроках после операции. Материалы всероссийского научного форума по восстановительной медицине, лечебной физкультуре, курортологии, спортивной медицине и физиотерапии «РеаСпоМед 2008» 27 - 29 февраля 2008 г., Москва, с. 40-41.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=reaspomed_08-40.pdf',
            img: {
              type: 'pdf',
              src: 'pdf.gif',
            },
          },
          {
            authors:
              'Васильев А.С., Васильева В.В., Шмырев В.И., Олейникова Е.Н., Новикова Л.А.',
            title:
              'Торакалгии у пациентов с посторакотомическим синдромом на поздних сроках после операции. – Шестая Межрегиональная научно-практическая конференция, посвящённая смежным вопросам неврологии и психиатрии. Новосибирск, Томск 27–28 мая 2009 года. Статьи и тезисы. – с.72.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=NMGU-72.pdf',
            img: {
              type: 'pdf',
              src: 'pdf.gif',
            },
          },
          {
            authors: 'Васильев А., Минушкина Л.',
            title:
              'Антигипертензивная терапия и профилактика инсультов. Ж. Врач., №12, 2010. - с. 42-45.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Vrach_12-10_42.pdf',
            img: {
              type: 'pdf',
              src: 'pdf.gif',
            },
          },
          {
            authors: 'Васильев А.С., Шмырев В.И., Васильева В.В.',
            title:
              'Комплексное лечение нейропатического болевого синдрома у лиц, перенсших ампутации конечностей и травмы периферических нервов. – Ежегодные Давиденковские чтения. Актуальные проблемы клинической неврологии: материалы Всероссийской юбилейной научно-практической конференции: / Под ред. проф. Жулева Н.М.– СПб.: Изд-во «Человек и его здоровье», 2009, с. 175.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=lobzin_thez175.pdf',
            img: {
              type: 'pdf',
              src: 'pdf.gif',
            },
          },
          {
            authors: 'Васильева В.В., Васильев А.С., Шмырев В.И.',
            title:
              'О функциональном подходе к оценке рентгенограмм в практической деятельности мануального терапевта. Материалы всероссийского научного форума по восстановительной медицине, лечебной физкультуре, курортологии, спортивной медицине и физиотерапии «РеаСпоМед 2008» 27 - 29 февраля 2008 г., Москва, с. 41.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=reaspomed_08-41.pdf',
            img: {
              type: 'pdf',
              src: 'pdf.gif',
            },
          },
          {
            authors: 'Васильева В., Шмырев В., Васильев А.',
            title:
              'Мышечно-тонический дисбаланс у детей первых недель и месяцев жизни. Ж. Врач. 2010г., №1, – с. 8-10.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Vrach_01-10.pdf',
            img: {
              type: 'pdf',
              src: 'pdf.gif',
            },
          },
        ],
      },
      {
        letter: 'Г',
        publications: [
          {
            authors: 'Гапонова Н.И., Абдрахманов В.Р., Абдрахманов Ш.В.',
            title:
              'Болевой синдром, обусловленный остеохондрозом грудного отдела позвоночника: оптимизация лечения комбинацией лорноксикама и актовегина. Ж. Современная ревматология, 2008, №2, с. 71-72.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=sovrem_revm-02-08-71.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Гапонова Н.И., Абдрахманов В.Р., Абдрахманов Ш.В.',
            title:
              'Вертеброгенная кардиалгия: рациональная диагностическая и лечебная тактика. Материалы Всероссийской конференции с международным участием «Кардиоваскулярная профилактика и реабилитация 2008». 26-27 мая 2008г. Ж. Кардиоваскулярная терапия и профилактика, 2008; 6(4) Приложение 2. с. 34',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Conf_kardiovaskprof_2008-34.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors:
              'Гладких А.С., Савина Н.М., Кудинова С.П., Байдина О.И., Бугримова М.А., Сидоренко Б.А.',
            title:
              'Течение хронической сердечной недостаточности у пожилых больных при повторных госпитализациях. – Материалы XII Международной научно-практической конференции «Пожилой больной. Качество жизни.», Москва, 1-3 октября 2007г. Тезисы. Ж. Клиническая геронтология. Т.13, №9, 2007г. – с 5.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=kg907-5.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Головюк А.Л., Чернова Т.Г.',
            title: 'Синдром Титце. Ж. Хирургия. 2009г. №10. – с. 65-68.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=HIR_2009_10_15.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
        ],
      },
      {
        letter: 'Д',
        publications: [
          {
            authors: 'Дамулин И.В., Кононенко Е.В.',
            title:
              'Статолокомоторные нарушения у больных с полушарным инсультом. Ж. Клиническая геронтология. 2007г. №8. – с. 42-49.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=kg_08-07.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Дамулин И.В., Кононенко Е.В.',
            title:
              'Постинсультные расстройства: патогенетические и клинические аспекты. Ж. Болезни сердца и сосудов 2007г. №3. – с. 4-9.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=BSS3_03-07.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
        ],
      },
      {
        letter: 'Е',
        publications: [
          {
            authors: 'Евдокимов А.Г., Тополянский В.Д.',
            title:
              'Болезни артерий и вен: справочное руководство для практического врача. – 2-е изд. – М.: Советский спорт, 2001. – 256с (существует издание 2006г, существенно переработанное).',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Evdokimov_AG_Topolyanskij_VD_Bolezni_arterij_i_ven_(2e_izd).zip',
            img: { type: 'ZIP', src: 'pdf.gif' },
          },
        ],
      },
      { letter: 'Ё', publications: [] },
      { letter: 'Ж', publications: [] },
      {
        letter: 'З',
        publications: [
          {
            authors: 'Захаров В.В., Яхно Н.Н.',
            title:
              'Когнитивные расстройства в пожилом и старческом возрасте. Методическое пособие для врачей. Москва, 2005 г. – 71с.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Zaharov_VV_Kogn-narush.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Зубарев А.В.',
            title:
              'Инновационный путь развития лучевой диагностики. Ж. "Кремлевская медицина. Клинический вестник", 2009г., №3, стр 6-7.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Kr-med_03-09_01.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
        ],
      },
      { letter: 'И', publications: [] },
      { letter: 'Й', publications: [] },
      {
        letter: 'К',
        publications: [
          {
            authors: 'Караваева Т.А., Полторак С.В., Поляков А.Ю.',
            title:
              'Применение препарата Ладастен в терапии постинфекционных астенических расстройств. – Русский медицинский журнал. Том 17, №4, 2009г. – с. 276-281.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Karavaeva_Poltorak_Prim-e_Lad_postifekcion_Asten_r-va.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Кузнецов Н.В.',
            title:
              'Болезнь Паркинсона и сосудистый паркинсонизм. Дифференциальная диагностика и лечение. Автореферат диссертации на соискание ученой степени кандидата медицинских наук, Москва – 2009.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Kuznetsov_NV.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors:
              'Кунина О.В., Боброва Л.С., Шмырев В.И., Зинченко Т.Я., Дмитриева Е.Н.',
            title:
              'Оценка малосимптомного течения атеросклероза по данным дуплексного сканирования магистральных артерий головы у пациентов, длительно получавших статины. – Материалы XII Международной научно-практической конференции «Пожилой больной. Качество жизни.», Москва, 1-3 октября 2007г. Тезисы. - Ж. Клиническая геронтология. Т.13, №9, 2007г. – с 9-10.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=kg907-9-10.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Кунина О.В.',
            title:
              'Первичная и вторичная профилактика осложнений атеросклероза магистральных артерий головы. Автореферат диссертации на соискание ученой степени кандидата медицинских наук, Москва – 2009.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Kunina_OV.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
        ],
      },
      {
        letter: 'Л',
        publications: [
          {
            authors: '',
            title:
              'Лазерная терапия в лечебно-реабилитационных и профилактических программах: клинические рекомендации – М., 2015. – 71 с. (предварительная версия).',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=klin_recom_laser_rehab.doc',
            img: { type: 'word', src: 'word.png' },
          },
          {
            authors: 'Лаукарт Е.Б., Шмырев В.И., Васильев А.С.',
            title:
              'Тарзальный туннельный синдром: нейроортопедические особенности и опыт консервативной терапии. – Ежегодные Давиденковские чтения. Актуальные проблемы клинической неврологии: материалы Всероссийской юбилейной научно-практической конференции: / Под ред. проф. Жулева Н.М.– СПб.: Изд-во «Человек и его здоровье», 2009, с. 12-13.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=lobzin_thez12.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Левин О.С.',
            title:
              'Диагностика и лечение диабетической полинейропатии. Ж. Consilium medicum. т.11. №9, 2009г. – с. 75-81.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Consilium9_2009-75.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
        ],
      },
      {
        letter: 'М',
        publications: [
          {
            authors: '',
            title:
              'Магнитотерапия в лечебно-реабилитационных и профилактических программах: клинические рекомендации – М., 2015. – 47 с. (предварительная версия)',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=klin_recom_magnit_rehab.doc',
            img: { type: 'word', src: 'word.png' },
          },
          {
            authors: 'Малюкова Ю.В., Дорофеева Е.В., Алексеева Л.А.',
            title:
              'Пароксизмы фибрилляции предсердий в пожилом и старческом возрасте у пациентов с гипертонической болезнью. – Материалы XII Международной научно-практической конференции «Пожилой больной. Качество жизни.», Москва, 1-3 октября 2007г. Тезисы. - Ж. Клиническая геронтология. Т.13, №9, 2007г. – с 9-10.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=kg907-10.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Масловский Л.В.',
            title:
              'Эпидемиологические, клинико-диагностические и терапевтические аспекты гастроэзофагеальной рефлюксной болезни. Автореферат диссертации на соискание ученой степени доктора медицинских наук. 14.00.05 – Внутренние болезни. - Москва, 2008г. - 46с',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=MaslovskiyLV.doc',
            img: { type: 'word', src: 'word.png' },
          },
          {
            authors: '',
            title:
              'Материалы Межведомственной научно-практической конференции «Актуальные инновационные медицинские технологии в области неврологии и мануальной терапии». Москва, 17 ноября 2010 г. – М., ФГУ «УНМЦ» УД Президента РФ, - 87 с',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Conference_neuro-2010.doc',
            img: { type: 'word', src: 'word.png' },
          },
          {
            authors: '',
            title:
              'Материалы II ежегодной межрегиональной научно-практической конференции с международным участием «Инновационные медицинские технологии в области неврологии и смежных медицинских специальностей». Москва, 21 декабря 2011 г. – М., ФГБУ «УНМЦ» УД Президента РФ, - 81 с',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Conference_neuro-2011(itog).doc',
            img: { type: 'word', src: 'word.png' },
          },
          {
            authors: '',
            title:
              'Материалы III ежегодной научно-практической конференции с международным участием «Инновационные медицинские технологии в области неврологии и смежных медицинских специальностей». Москва, 15 ноября 2012 г. – М., ФГБУ «УНМЦ» УД Президента РФ, - 160 с',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Conference_neuro-2012.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: '',
            title:
              'Материалы IV ежегодной научно-практической конференции с международным участием «Инновационные медицинские технологии в области неврологии и смежных медицинских специальностей». Москва, 13 ноября 2013 г. – М., ФГБУ «УНМЦ» УД Президента РФ, - 200 с',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Conference_neuro-2013_itog.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: '',
            title:
              'Минеральная вода в лечебно-реабилитационных и профилактических программах: клинические рекомендации – М., 2015. – 20 с.(предварительная версия)',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=klin_recom_minvody.doc',
            img: { type: 'word', src: 'word.png' },
          },
          {
            authors: 'Минушкина Л.О.',
            title:
              'Генетические факторы при гипертонической болезни: связь с особенностями течения, развитием осложнений, эффективностью терапии. Автореферат диссертации на соискание ученой степени доктора медицинских наук. 14.00.06 – Кардиология. - Москва, 2008г. - 48с.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=MinushkinaLO.doc',
            img: { type: 'word', src: 'word.png' },
          },
          {
            authors: 'Миронов Н.В., Шмырев В.И., Горяйнова И.И., Миронов И.Н.',
            title:
              'Первичная и вторичная профилактика ишемических инсультов. Методические рекомендации. – М., 2002, - 14с',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Perv_Vtor_insult.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors:
              'Миронов Н.П., Витько Н.К., Тер-Акопян А.В., Тагаев Н.Б., Панков А.С., Денисов Д.Б., Калёнова И.Е.',
            title:
              'Возможности эндоваскулярной хирургии при атеросклеротическом поражении внутренних сонных артерий. Ж. “Диагностическая и интервенционная радиология” том 3, №4 2009г. стр. 42-47.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=DiIR_2009_4_42-47.doc',
            img: { type: 'word', src: 'word.png' },
          },
          {
            authors: 'Миронов Н.П., Соколова Л.П., Борисова Ю.В.',
            title:
              'Нейроэнергокартирование. Оценка функционального состояния мозга при когнитивных нарушениях различной этиологии. Ж."Вестник МЕДСИ", №8 июль-сентябрь 2010. - с. 32-37.',
            link: '',
            img: false,
          },
        ],
      },
      {
        letter: 'Н',
        publications: [
          {
            authors: 'Незнамов Г.Г., Телешова Е.С.',
            title:
              'Результаты сравнительного изучения ноопепта и пирацетама при лечении больных с легкими когнитивными нарушениями при органических заболеваниях головного мозга сосудистого и травматического генеза. – Журнал неврологии и психиатрии, №3, 2008г. – с. 33-42',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Neznamov_GG.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
        ],
      },
      {
        letter: 'О',
        publications: [],
      },
      {
        letter: 'П',
        publications: [
          {
            authors: 'Переверзев И.',
            title:
              'Метаболические нарушения в головном мозге у больных, перенесших инсульт мозжечка. - Ж. Врач, 2010г., №5, - с. 77-79.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Vrach_05-10_77.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors:
              'Преображенский Д.В., Некрасова Н.И., Воробьев П.А., Ермакова Т.А., Вышинская И.Д., Тарыкина Е.В.',
            title:
              'Гемодилюция как одна из причин анемии у госпитализированных больных с хронической сердечной недостаточностью. – Материалы XII Международной научно-практической конференции «Пожилой больной. Качество жизни.», Москва, 1-3 октября 2007г. Тезисы. - Ж. Клиническая геронтология. Т.13, №9, 2007г. – с 43-44',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=kg907-43-44.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: '',
            title:
              'Применение диетического и функционального питания в лечебно-профилактических и реабилитационных программах: клинические рекомендации – М., 2015. – 79 с. (предварительная версия)',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=klin_recom_dieta.docx',
            img: { type: 'word', src: 'word.png' },
          },
          {
            authors: '',
            title:
              'Применение пелоидотерапии в лечебно-профилактических и реабилитационных программах.: клинические рекомендации. – М., 2015. – 31 с.(предварительная версия)',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=klin_recom_peloid.doc',
            img: { type: 'word', src: 'word.png' },
          },
          {
            authors: '',
            title:
              'Применение сероводородных ванн в лечебно-профилактических и реабилитационных программах.: клинические рекомендации – М., 2015. – 34 с. (предварительная версия)',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=klin_recom_serovodorod.doc',
            img: { type: 'word', src: 'word.png' },
          },
        ],
      },
      {
        letter: 'Р',
        publications: [
          {
            authors: 'Ратнер А.Ю.',
            title:
              'Неврология новорожденных: острый период и поздние осложнения. 2-е издание. - М.: Бином, 2005, 368с.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Ratner_A_Yu_Nevrologiya_novorozhdyonnyh_2005.djvu',
            img: { type: 'ZIP', src: 'djvu.jpg' },
          },
          {
            authors: 'Резков Г.И.',
            title:
              'Хронические сосудистые заболевания головного мозга. Методические рекомендации. – М., 2008, 18с.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Rezkov-metodichka2008.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors:
              'Рудас М.С., Панчковская Е.В., Манукова В.А., Насникова И.Ю., Матякин Г.Г., Сергиенко В.Б.',
            title:
              'Возможности позитронно-эмиссионной томографии в выявлении атеросклеротических бляшек у онкологических больных. Ж."Кремлевская медицина. Клинический вестник", 2009г., №3, стр 11-14.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Kr-med_03-09_03.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
        ],
      },
      {
        letter: 'С',
        publications: [
          {
            authors: 'Саблин О.А., Ильчишина Т.А., Ледовская А.А.',
            title:
              'Заболевания желчного пузыря: возможности терапии препаратами урсодезоксихолевой кислоты. Методическое пособие. - СПбю: Абсолют Н, 2013. - 34с',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Sablin-Hepatology.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Сидоренко Б.А. (под редакцией)',
            title:
              'Антитромботическая терапия при мерцательной аритмии. Учебно-методическое пособие. М., 2010. - 86с',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Sidorenko_Antitromb-therapy-pri-aritmii.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: '',
            title:
              'Современные методы климатотерапии в профилактике метеочувствительных заболеваний.: клинические рекомендации – М., 2015. – 41 с.(предварительная версия)',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=klin_recom_climat.doc',
            img: { type: 'word', src: 'word.png' },
          },
          {
            authors: 'Соколова Л.П., Стеблецов С.В., Кислый Н.Д.',
            title:
              'Нарушения сна в клинике внутренних болезней. Ж. Consilium Medicum - 2007г. т.9, №8., с. 98-102.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=07_CM8_23.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Под ред. М.В.Коробова, В.Г.Помникова',
            title:
              'Справочник по медико-социальной экспертизе и реабилитации. - Изд 2-е, испр. и доп.- СПб: Гиппократ, 2005. - 856с.',
            link: '',
            img: false,
          },
        ],
      },
      {
        letter: 'Т',
        publications: [
          {
            authors: 'Тер-Акопян А.В.',
            title:
              'Рентгеноэндоваскулярная хирургия в лечении больных ишемической болезнью сердца в сочетании с мультифокальным атеросклерозом. Автореферат диссертации на соискание ученой степени доктора медицинских наук, Москва – 2008.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Ter-Akopyan_AV.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Триумфов А.В.',
            title:
              'Топическая диагностика заболеваний нервной системы. - МЕДГИЗ Ленинградское отделение. - 1959г.',
            link: '',
            img: false,
          },
        ],
      },
      {
        letter: 'У',
        publications: [],
      },
      {
        letter: 'Ф',
        publications: [],
      },
      {
        letter: 'Х',
        publications: [
          {
            authors: 'Хорошина Л.П., Турьева Л.В.',
            title:
              'Особенности стеатоза печени у пожилих и старых людей с ишемической болезнью сердца // Методические рекомендации. - СПб.: Абсолют Н, 2012. - 44с',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Horoshina-Hepatology.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
        ],
      },
      {
        letter: 'Ц',
        publications: [],
      },
      {
        letter: 'Ч',
        publications: [
          {
            authors: 'Чернышева М.Л., Чернышев А.В.',
            title:
              'Определение основных принципов биоэтики. Ж."Кремлевская медицина. Клинический вестник", 2009г., №2, стр 152-155.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Kr-med_02-09_37.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Чорбинская С., Девяткин А., Васильев А.',
            title:
              'Неспецифическая профилактика ОРВИ в практике врача семейной медицины: препараты эхинацеи. Ж. Врач, №10, 2009, - с. 38-41.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Vrach_10-09.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
        ],
      },
      {
        letter: 'Ш',
        publications: [
          {
            authors: 'Шмырев В.И., Бабенков Н.В.',
            title:
              'Кафедра неврологии и основные этапы развития неврологической службы Главного медицинского управления УД Президента Российской Федерации/ Ж."Кремлевская медицина. Клинический вестник", 2009г., №2, стр 152-155.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Kr-med_04-08_01.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Шмырев В., Васильев А.',
            title:
              'Периферические компоненты постинсультного двигательного пареза и возможности их коррекции с применением мягкотканых мануальных техник. Ж. Врач. №1, 2003г. – с. 22-25.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Vrach_01-03.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Шмырев В.И., Васильев А.С., Васильева В.В.',
            title:
              'Периферические компоненты постинсультного двигательного пареза (клиника, диагностика, коррекция, вопросы патогенеза). – М., 2003. – 152 с',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=postinsulqtnyj_parez.doc',
            img: { type: 'word', src: 'word.png' },
          },
          {
            authors: 'Шмырев В., Васильев А.',
            title:
              'Препарат Галидор в неврологической практике. Ж. Врач, №9, 2009',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Vrach_09-09.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Шмырев В.И, Васильев А.С., Воронцов В.Л., Васильева В.В.',
            title: 'Диабетическая нейропатия.- Ж. Врач. №11, 2009г. – с. 45-51',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Vrach_11-09.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Шмырев В., Васильев А., Васильева В.',
            title:
              'Синдром торакалгии в клинической практике Ж. Врач. №12, 2009г. – с. 66-69',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Vrach_12-09.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Шмырев В.И., Васильев А.С., Морозов С.П.',
            title:
              'Возможности консервативного ведения пациентов с вертебрально-базилярной недостаточностью на амбулаторном этапе. Ж. Фарматека, №12, 2009. - с. 85-90.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Pharmateca_12-09.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Шмырев В.И., Васильев А.С., Морозов С.П.',
            title:
              'Возможности консервативного ведения пациентов с вертебрально-базилярной недостаточностью на современном этапе. Международный неврологический журнал №2 (32), 2010. с. 94-99. (репринт из ж.Фарматека №12,2009)',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=INM-Ukr-2(32)_94-98_2010.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Шмырев В.И., Крыжановский С.М.',
            title:
              'Эффективность ноопепта при лечении умеренных когнитивных расстройств у больных с дисциркуляторной энцефалопатией. Ж. Consilium medicum, 2009 г. – т. 11. №9. с. 37-41.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Consilium_9-09_37.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Шмырев В.И., Кудакова А.М.',
            title:
              'Нарушения некоторых высших функций и расстройства сна в остром периоде острого нарушения мозгового кровообращения и их взаимосвязь. – Ежегодные Давиденковские чтения. Актуальные проблемы клинической неврологии: материалы Всероссийской юбилейной научно-практической конференции: / Под ред. проф. Жулева Н.М.– СПб.: Изд-во «Человек и его здоровье», 2009, с. 167-168.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=lobzin_thez167.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Шмырев В.И., Лаукарт Е.Б., Васильев А.С.',
            title:
              'Клиническая диагностика метатарзалгии Мортона. Ежегодные Давиденковские чтения. Актуальные проблемы клинической неврологии: материалы Всероссийской юбилейной научно-практической конференции: / Под ред. проф. Жулева Н.М.– СПб.: Изд-во «Человек и его здоровье», 2009, с. 25.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=lobzin_thez25.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Шмырев В.И., Морозов С.П., Артамонов А.А.',
            title:
              'Мультиспиральная компьютерная томография в диагностике поражения брахиоцефальных артерий. Ж."Кремлевская медицина. Клинический вестник", 2009г., №2, стр 15-19.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Kr-med_03-09_04.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Шмырев В.И., Переверзев И.В., Миронов Н.В., Мкртчян Н.С.',
            title:
              '"Изменения метаболической активности глюкозы в головном мозге пациентов, перенесших инсульт мозжечка" Актуальные вопросы клинической транспортной медицины, Том 16, 2007г., стр.317-324.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=pereverzev-1.doc',
            img: { type: 'word', src: 'word.png' },
          },
          {
            authors: 'Шмырев В.И., М Рудас.С., Переверзев И.В.',
            title:
              'Метаболические нарушения при инсультах мозжечка (сопоставление с данными позитронно-эмиссионной томографии). Ж."Кремлевская медицина. Клинический вестник", 2009г., №2, стр 152-155.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Kr-med_03-09_02.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Шмырев В.И., Тер-Акопян А.В., Денисов Д.Б.',
            title:
              'Клинико-неврологическое обоснование стентирования у больных с атеросклеротическим поражением брахиоцефальных артерий. – Ежегодные Давиденковские чтения. Актуальные проблемы клинической неврологии: материалы Всероссийской юбилейной научно-практической конференции: / Под ред. проф. Жулева Н.М.– СПб.: Изд-во «Человек и его здоровье», 2009, с. 168-169.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=lobzin_thez168.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
        ],
      },
      {
        letter: 'Щ',
        publications: [],
      },
      {
        letter: 'Э',
        publications: [],
      },
      {
        letter: 'Ю',
        publications: [],
      },
      {
        letter: 'Я',
        publications: [
          {
            authors: 'Язвенко А.В.',
            title:
              'Клинико-метаболическая оценка при церебральных менингиомах. Автореферат диссертации на соискание ученой степени кандидата медицинских наук, Москва – 2009.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Yazvenko_AV.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
          },
          {
            authors: 'Яхно Н.Н., Дамулин И.В., Антоненко Л.М.',
            title:
              'Ноопепт в лечении дисциркуляторной энцефалопатии с умеренными когнитивными нарушениями. – Ж. Лечащий врач, №5, 2009г. – с. 2-6.',
            link: 'http://kremlin-neurology.ru/app/backend/fileDownload.php?FileName=Yahno_Noo_v_lechenii_DE_umer_kogn_r-va.pdf',
            img: { type: 'pdf', src: 'pdf.gif' },
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

<style scoped lang="scss"></style>
