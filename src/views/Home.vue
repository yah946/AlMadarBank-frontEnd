<template>
  <div class="space-y-10">

    <!-- Hero Section -->
    <section class="text-center py-12">
      <h1 class="text-5xl font-bold text-blue-600">
        Smart E-Banking for Your Future
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Manage your finances anytime, anywhere. Secure, fast, and designed to give you full control over your money.
      </p>

      <div class="mt-6 flex justify-center gap-4">
        <button class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          Get Started
        </button>
        <button class="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50">
          Learn More
        </button>
      </div>
    </section>

    <!-- Features -->
    <section class="grid md:grid-cols-3 gap-6">
      <div class="p-6 shadow rounded-2xl text-center">
        <h2 class="text-xl font-semibold mb-2">Secure Transactions</h2>
        <p class="text-gray-600">
          Advanced encryption keeps your data and money safe at all times.
        </p>
      </div>

      <div class="p-6 shadow rounded-2xl text-center">
        <h2 class="text-xl font-semibold mb-2">24/7 Access</h2>
        <p class="text-gray-600">
          Access your account anytime from anywhere in the world.
        </p>
      </div>

      <div class="p-6 shadow rounded-2xl text-center">
        <h2 class="text-xl font-semibold mb-2">Fast Transfers</h2>
        <p class="text-gray-600">
          Send and receive money instantly with minimal fees.
        </p>
      </div>
    </section>

    <!-- Account Summary Preview -->
    <section class="bg-gray-100 p-8 rounded-2xl">
      <h2 class="text-2xl font-bold mb-4">Your Financial Overview</h2>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded-xl shadow">
          <p class="text-gray-500">Balance</p>
          <h3 class="text-2xl font-bold">$12,450</h3>
        </div>

        <div class="bg-white p-4 rounded-xl shadow">
          <p class="text-gray-500">Savings</p>
          <h3 class="text-2xl font-bold">$8,200</h3>
        </div>

        <div class="bg-white p-4 rounded-xl shadow">
          <p class="text-gray-500">Expenses</p>
          <h3 class="text-2xl font-bold">$2,300</h3>
        </div>
      </div>
    </section>
  </div>
</template>