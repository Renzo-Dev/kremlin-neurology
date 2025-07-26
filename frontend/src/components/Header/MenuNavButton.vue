<template>
  <div class="menu-button-container">
    <i class="bxr bx-menu-wider"></i>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.menu-button-container {
  display: none;
  padding: 5px;
  margin-right: 10px;
  margin-left: 55px;
  align-self: center;
  justify-content: center;

  .bx-menu-wider {
    font-size: 2rem;
    color: var(--h-font-color);
    transition: all 0.2s ease;

    &:active {
      transform: scale(1.5);
      color: #83888d;
    }
  }
}

@media (max-width: 720px) {
  .menu-button-container {
    display: flex;
  }
}

@media (max-width: 440px) {
  .menu-button-container {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
