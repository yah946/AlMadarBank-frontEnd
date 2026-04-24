<template>
    <h1 class="text-5xl font-bold text-blue-600 mb-8">
        Login Page
    </h1>
    <form @submit.prevent="login" class="text-2xl space-y-8">
        <div class="flex flex-col">
            <label for="email">Email</label>
            <input id="email" v-model="email" type="email" required placeholder="example@gmail.com" class="ring focus:outline-none ring-slate-400 rounded focus:ring-blue-200 py-1.5 px-4 pl-4 pr-4 w-lg">
        </div>
        <div class="flex flex-col">
            <label for="password">Password</label>
            <input id="password" v-model="password" type="password" required placeholder="** ** ** **" class="ring focus:outline-none ring-slate-400 rounded focus:ring-blue-200 py-1.5 px-4 pl-4 pr-4 w-lg">
        </div>
        <span v-if="error" class="block text-red-600 text-lg">{{ error }}</span>
        <button class="border py-1.5 hover:bg-slate-100 hover:rounded-lg px-2 cursor-pointer" type="submit" :disabled="loading">
        {{ loading ? 'Loading...' : 'Login' }}
        </button>
    </form>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const router = useRouter()

const login = async () => {
  loading.value = true
  error.value = ''

  try {
    const res = await axios.post('http://127.0.0.1:8000/api/login', {
      email: email.value,
      password: password.value
    })

    const token = res.data.access_token

    localStorage.setItem('token', token)

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    router.push('/accounts')

  } catch (err) {
    error.value = err.response?.data?.message || 'Login failed'
  } finally {
    loading.value = false
  }
}
</script>