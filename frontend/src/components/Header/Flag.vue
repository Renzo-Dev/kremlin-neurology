<template>
  <div id="flag">
    <div class="wave2"></div>
    <div class="wave3"></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">


#flag {
  align-self: center;
  justify-self: center;
  position: relative;
  top: 0;
  left: 0;
  border-radius: 300px;
  background-color: #fff;
  overflow: hidden;

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


@media (max-width: 1670px) {
  #flag {
    min-width: 90px;
    min-height: 90px;
    max-height: 90px;
  }
}

@media (max-width: 1280px) {
  #flag {
    min-width: 80px;
    min-height: 80px;
    max-height: 80px;
  }
}

@media (max-width: 570px) {
  #flag {
    min-width: 70px;
    min-height: 70px;
    max-height: 70px;
  }
}

@media (max-width: 440px) {
  #flag {
    display: none;
  }
}
@keyframes wave {
  100% {
    transform: rotate(360deg);
  }
}
</style>
