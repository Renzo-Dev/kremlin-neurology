<template>
  <div id="flag">
    <div class="wave2"></div>
    <div class="wave3"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
// ADD MEDIA
$--flag-min-width: 90px;
$--flag-min-height: 90px;

#flag {
  position: relative;
  top: 0;
  left: 0;
  border-radius: 300px;
  background-color: #fff;
  overflow: hidden;
  min-width: $--flag-min-width;
  min-height: $--flag-min-height;

  .wave2,
  .wave3 {
    left: -50%;
    position: absolute;
    width: 200%;
    height: 200%;
    border-radius: 45%;
    animation: wave 10s linear infinite;
  }

  .wave2 {
    top: 30%;
    background-color: blue;
  }

  .wave3 {
    top: 66%;
    background-color: red;
  }
}

@keyframes wave {
  100% {
    transform: rotate(360deg);
  }
}
</style>
