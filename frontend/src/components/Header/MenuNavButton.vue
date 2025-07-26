<template>
  <div class="menu-button-container">
    <div class="button">Панель навигации</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.menu-button-container {
  display: none;
  position: absolute;
  width: 100%;
  top: 98px;
  left: 0;
  height: 60px;
  padding: 5px 0 0 0;
  z-index: 1001;
  //background-color: red;
  background-color: transparent;
  align-self: center;
  justify-content: center;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d3e5fc;
    color: #000000;
    padding: 14px 28px;
    border-radius: 12px;
    font-size: 18px;
    border: none;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .button:hover {
    transform: translateY(-2px);
  }

  .button:active {
    transform: scale(0.97);
  }
}

@media (max-width: 1170px) {
  .menu-button-container {
    display: flex;
    top: 98px;
  }
}

@media (max-width: 1123px) {
  .menu-button-container {
    top: 120px;
  }
}

@media (max-width: 950px) {
  .menu-button-container {
    top: 110px;
  }
}

@media (max-width: 634px) {
  .menu-button-container {
    top: 130px;
  }
}

@media (max-width: 572px) {
  .menu-button-container {
    top: 150px;
  }
}

@media (max-width: 464px) {
  .menu-button-container {
    top: 170px;
  }
}
</style>
