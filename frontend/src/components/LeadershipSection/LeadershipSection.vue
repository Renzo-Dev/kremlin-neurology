<template>
  <div class="leadership-section">
    <div 
      class="leadership-item" 
      v-for="leader in leaders" 
      :key="leader.id"
    >
      <h3 class="title">{{ leader.title }}</h3>
      <p class="speaker">{{ leader.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeadershipSection',
  props: {
    leaders: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.leadership-section {
  margin: 30px 0;
}

.leadership-item {
  margin-bottom: 25px;
}

.title {
  color: #2c3e50;
  font-size: 1.2em;
  margin-bottom: 10px;
  font-weight: 600;
}

.speaker {
  background: #ecf0f1;
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid #e74c3c;
  font-weight: 500;
  color: #34495e;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .title {
    font-size: 1.1em;
  }
  
  .speaker {
    padding: 12px;
    font-size: 0.95em;
  }
}
</style>
