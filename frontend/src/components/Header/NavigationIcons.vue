<template>
  <!-- Пустой шаблон - компонент только для экспорта иконок -->
</template>

<script>
export default {
  name: 'NavigationIcons',
  components: {
    HomeIcon: {
      template: `
        <g>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </g>
      `,
    },
    EducationIcon: {
      template: `
        <g>
          <path d="M22 10v6" />
          <path d="M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </g>
      `,
    },
    HistoryIcon: {
      template: `
        <g>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12,6 12,12 16,14" />
        </g>
      `,
    },
    ResearchIcon: {
      template: `
        <g>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3s-3-1-3-3a3 3 0 0 1 1-1z" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
          <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
        </g>
      `,
    },
    LibraryIcon: {
      template: `
        <g>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </g>
      `,
    },
    ClientsIcon: {
      template: `
        <g>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </g>
      `,
    },
    ConferencesIcon: {
      template: `
        <g>
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </g>
      `,
    },
    YoungNeurologistsIcon: {
      template: `
        <g>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </g>
      `,
    },
    NewsIcon: {
      template: `
        <g>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </g>
      `,
    },
    ContactsIcon: {
      template: `
        <g>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </g>
      `,
    },
  },
}
</script>
