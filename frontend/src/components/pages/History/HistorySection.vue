<template>
  <div class="history-section">
    <div class="accordion-item">
      <h2 class="accordion-header" :id="`heading${index}`">
        <button
          class="accordion-button"
          :class="{ collapsed: !isOpen }"
          type="button"
          @click="toggleSection"
          :aria-expanded="isOpen"
          :aria-controls="`collapse${index}`"
        >
          <span class="section-title">{{ section.title }}</span>
          <span class="accordion-icon">
            <i class="fas fa-chevron-down" :class="{ rotated: isOpen }"></i>
          </span>
        </button>
      </h2>

      <div
        :id="`collapse${index}`"
        class="accordion-collapse"
        :class="{ show: isOpen }"
        :aria-labelledby="`heading${index}`"
      >
        <div class="accordion-body">
          <div class="content-wrapper">
            <p class="section-content">{{ section.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistorySection',
  props: {
    section: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleSection() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as vr;

.history-section {
  margin-bottom: vr.$spacing-sm;
}

.accordion-item {
  border: none;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
}

.accordion-header {
  margin: 0;
}

.accordion-button {
  width: 100%;
  padding: vr.$spacing-lg;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  border: none;
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  position: relative;

  &:hover {
    background: linear-gradient(135deg, #020617 0%, #0f172a 100%);
    transform: translateY(-1px);
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(15, 23, 42, 0.3);
    outline: none;
  }

  &.collapsed {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  }

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 12px solid rgba(255, 255, 255, 0.9);
    border-radius: 2px;
    flex-shrink: 0;
    transition: all 0.3s ease;
    filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.2));
  }

  &:not(.collapsed)::after {
    transform: rotate(180deg);
  }
}

.section-title {
  flex: 1;
  margin-right: vr.$spacing-md;
}

.accordion-icon {
  display: none;
}

.accordion-collapse {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;

  &.show {
    max-height: 800px;
  }
}

.accordion-body {
  padding: vr.$spacing-md;
  background: white;
  border-top: 1px solid #e9ecef;

  @media (max-width: vr.$breakpoint-sm) {
    max-height: 300px;
    overflow-y: auto;

    // Кастомный скроллбар для мобильных устройств
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 3px;

      &:hover {
        background: #a8a8a8;
      }
    }
  }
}

.content-wrapper {
  max-width: 100%;
}

.section-content {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #334155;
  margin: 0;
  text-align: justify;

  &:first-letter {
    font-size: 1.1em;
    font-weight: 600;
    color: #1e293b;
  }
}

// Responsive Design
@media (max-width: vr.$breakpoint-md) {
  .accordion-button {
    padding: vr.$spacing-md vr.$spacing-lg;
    font-size: 0.95rem;
    min-height: 56px;

    &::after {
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: 10px solid rgba(255, 255, 255, 0.9);
    }
  }

  .accordion-body {
    padding: vr.$spacing-sm vr.$spacing-md;
  }

  .section-content {
    font-size: 0.9rem;
    line-height: 1.5;
  }
}

@media (max-width: vr.$breakpoint-sm) {
  .accordion-button {
    padding: vr.$spacing-sm vr.$spacing-md;
    flex-direction: row;
    align-items: center;
    gap: vr.$spacing-md;
    min-height: 52px;

    &::after {
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 8px solid rgba(255, 255, 255, 0.9);
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    }
  }

  .section-title {
    margin-right: 0;
    flex: 1;
  }
}
</style>
