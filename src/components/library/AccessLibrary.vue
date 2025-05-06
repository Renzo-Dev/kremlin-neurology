<template>
  <div class="library__access text-center mt-3">
    <h2 class="library__access-title h5">
      Для доступа в приватную библиотеку введите пароль
    </h2>
    <input
      type="password"
      v-model="password"
      class="library__access-input"
      placeholder="Введите пароль"
    />
    <button @click="checkPassword" class="library__access-button">
      Ввести
    </button>
    <p v-if="errorMessage" class="library__access-error">{{ errorMessage }}</p>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const password = ref('')
    const errorMessage = ref('')

    async function checkPassword() {
      // const url = 'http://localhost:5000/auth.php'
      const url = `/app/auth.php`
      console.log(url)

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ password: password.value }),
        })

        const data = await response.json()

        if (response.ok && data.success) {
          await router.push('/privateLibrary')
        } else {
          errorMessage.value = 'Неверный пароль'
        }
      } catch (error) {
        errorMessage.value = 'Ошибка соединения с сервером'
        console.error('Ошибка:', error)
      }
    }

    return {
      checkPassword,
      errorMessage,
      password,
    }
  },
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/components/library/AccessLibrary.scss';
</style>
