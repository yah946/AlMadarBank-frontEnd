<template>
    <h1 class="text-2xl font-extrabold text-gray-900 mb-6">Effectuer un virement</h1>

    <form @submit.prevent="submitTransfer()" class="flex flex-col gap-5" method="post">
        <div class="flex flex-col gap-1.5">
            <label class="text-sm font-semibold text-gray-700">Effectuer un virement de:</label>
            <input type="number" placeholder="0.00" v-model="amount"
                class="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all">
        </div>

        <div class="flex flex-col gap-1.5">
            <label class="text-sm font-semibold text-gray-700">Depuis le compte numéro:</label>
            <input type="number" v-model="senderId" placeholder="Saisissez le ID source"
                class="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all">
        </div>

        <div class="flex flex-col gap-1.5">
            <label class="text-sm font-semibold text-gray-700">Vers le compte numéro:</label>
            <input type="text" v-model="receiverRib" placeholder="Saisissez le RIB destinataire"
                class="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all">
        </div>
        <button
            class="cursor-pointer mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-sm active:transform active:scale-[0.99]"
            :disabled="loading">
            {{ loading ? 'Loading...' : 'Valider' }}
        </button>
    </form>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'

const amount = ref('')
const senderId = ref('')
const receiverRib = ref('')

const loading = ref(false)
const error = ref('')
const success = ref('')

const submitTransfer = async () => {
    loading.value = true
    error.value = ''
    success.value = ''

    try {
        const token = localStorage.getItem('token')

        const res = await axios.post('http://127.0.0.1:8000/api/transfers', {
            amount: amount.value,
            id: senderId.value,
            receiver_rib: receiverRib.value
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        success.value = res.data.message || 'Transfer successful'

        // reset form
        amount.value = ''
        senderId.value = ''
        receiverRib.value = ''

    } catch (err) {
        error.value = err.response?.data?.message || 'Transfer failed'
    } finally {
        loading.value = false
    }
}
</script>