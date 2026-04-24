<template>
    <div class="flex flex-wrap">
        <div v-for="account in accounts" key:="account.id"
            class="max-w-sm mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
                <div class="flex justify-between items-start mb-8">
                    <span class="text-white/80 text-xs font-semibold uppercase tracking-wider">{{account.id}}:{{account.type.name}}</span>
                    <svg class="w-8 h-8 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v4z" />
                    </svg>
                </div>

                <div class="space-y-1">
                    <p class="text-white/70 text-[10px] uppercase font-bold tracking-widest">RIB / Account Number</p>
                    <p class="text-white text-lg font-mono tracking-widest">
                        {{account.rib}}
                    </p>
                </div>
            </div>

            <div class="p-6 space-y-6">
                <div class="flex justify-between items-center">
                    <div>
                        <p class="text-sm text-gray-500 font-medium">Available Balance</p>
                        <p class="text-3xl font-bold text-gray-900">{{ account.balance }} Dh</p>
                    </div>
                    <div class="bg-green-100 p-2 rounded-full">
                        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                </div>

                <div class="border-t border-gray-100"></div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span class="text-xs text-gray-400 font-medium">Created on</span>
                    </div>
                    <span class="text-sm text-gray-700 font-semibold italic">{{new Date(account.created_at).toLocaleDateString()}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const accounts = ref([])
const loading = ref(false)
const error = ref('')

const getAccounts = async () => {
  loading.value = true
  error.value = ''

  try {
    const token = localStorage.getItem('token')

    const res = await axios.get('http://127.0.0.1:8000/api/accounts', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    accounts.value = res.data.data
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to load accounts'
  } finally {
    loading.value = false
  }
}
onMounted(() => {
  getAccounts()
})
</script>