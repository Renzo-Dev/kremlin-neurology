<template>
  <div class="event-schedule">
    <div
      class="schedule-item"
      v-for="(event, idx) in events"
      :key="event.id"
    >
      <p
        class="date clickable"
        @click="toggle(idx)"
      >
        {{ event.date }}
        <span class="arrow" :class="{ open: isOpen(idx) }">&#9660;</span>
      </p>
      <transition name="dropdown">
        <div
          class="presentations"
          v-if="isOpen(idx)"
        >
          <div
            class="presentation"
            v-for="presentation in event.presentations"
            :key="presentation.id"
          >
            <span class="speaker">{{ presentation.speaker }}</span>
            <span class="topic">{{ presentation.topic }}</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventSchedule',
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      openIndexes: [],
    };
  },
  methods: {
    toggle(idx) {
      if (this.openIndexes.includes(idx)) {
        this.openIndexes = this.openIndexes.filter(i => i !== idx);
      } else {
        this.openIndexes.push(idx);
      }
    },
    isOpen(idx) {
      return this.openIndexes.includes(idx);
    },
  },
};
</script>

<style scoped>
.event-schedule {
  margin: 20px 0;
}

.schedule-item {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 0;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.date {
  font-weight: 600;
  color: #2c3e50;
  font-size: 1.1em;
  margin-bottom: 0;
  padding: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  transition: background 0.2s;
}
.date.clickable:hover {
  background: #e3eaf2;
}
.arrow {
  margin-left: 10px;
  font-size: 1em;
  transition: transform 0.3s;
}
.arrow.open {
  transform: rotate(180deg);
}

.presentations {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 20px 20px 20px;
}

.presentation {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  background: white;
  border-radius: 6px;
  border-left: 4px solid #3498db;
}

.speaker {
  font-weight: 600;
  color: #34495e;
  font-size: 0.95em;
}

.topic {
  color: #2c3e50;
  font-style: italic;
  line-height: 1.4;
}

/* Dropdown animation */
.dropdown-enter-active, .dropdown-leave-active {
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
}
.dropdown-enter-from, .dropdown-leave-to {
  max-height: 0;
  opacity: 0;
}
.dropdown-enter-to, .dropdown-leave-from {
  max-height: 500px;
  opacity: 1;
}

@media (max-width: 768px) {
  .presentation {
    padding: 10px;
  }
  .speaker,
  .topic {
    font-size: 0.9em;
  }
  .presentations {
    padding: 0 10px 10px 10px;
  }
}
</style>
