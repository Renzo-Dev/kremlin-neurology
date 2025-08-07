<template>
  <div class="event-schedule">
    <div class="schedule-item" v-for="event in events" :key="event.id">
      <p class="date">{{ event.date }}</p>
      <div class="presentations">
        <div 
          class="presentation" 
          v-for="presentation in event.presentations" 
          :key="presentation.id"
        >
          <span class="speaker">{{ presentation.speaker }}</span>
          <span class="topic">{{ presentation.topic }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventSchedule',
  props: {
    events: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.event-schedule {
  margin: 20px 0;
}

.schedule-item {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.date {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.presentations {
  display: flex;
  flex-direction: column;
  gap: 12px;
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

@media (max-width: 768px) {
  .presentation {
    padding: 10px;
  }
  
  .speaker, .topic {
    font-size: 0.9em;
  }
}
</style>
