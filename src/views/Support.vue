<template>
  <div class="space-y-10">

    <!-- Header -->
    <section class="text-center py-10">
      <h1 class="text-4xl font-bold text-blue-600">Support Center</h1>
      <p class="mt-3 text-gray-600">
        We're here to help. Find answers or contact our support team.
      </p>
    </section>

    <!-- Search Bar -->
    <section class="max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search for help..."
        class="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </section>

    <!-- FAQs -->
    <section class="max-w-3xl mx-auto space-y-4">
      <h2 class="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

      <div class="p-4 border rounded-xl">
        <h3 class="font-semibold">How do I reset my password?</h3>
        <p class="text-gray-600 mt-1">
          Go to the login page and click on "Forgot Password", then follow the instructions.
        </p>
      </div>

      <div class="p-4 border rounded-xl">
        <h3 class="font-semibold">How can I transfer money?</h3>
        <p class="text-gray-600 mt-1">
          Navigate to the Transfers section, enter recipient details, and confirm the transaction.
        </p>
      </div>

      <div class="p-4 border rounded-xl">
        <h3 class="font-semibold">Is my data secure?</h3>
        <p class="text-gray-600 mt-1">
          Yes, we use advanced encryption and security measures to protect your data.
        </p>
      </div>
    </section>

    <!-- Contact Options -->
    <section class="grid md:grid-cols-3 gap-6 text-center">
      <div class="p-6 shadow rounded-2xl">
        <h3 class="text-xl font-semibold mb-2">Live Chat</h3>
        <p class="text-gray-600 mb-4">
          Chat with our support team in real time.
        </p>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          Start Chat
        </button>
      </div>

      <div class="p-6 shadow rounded-2xl">
        <h3 class="text-xl font-semibold mb-2">Email Support</h3>
        <p class="text-gray-600 mb-4">
          Send us an email and we'll respond within 24 hours.
        </p>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          Contact Us
        </button>
      </div>

      <div class="p-6 shadow rounded-2xl">
        <h3 class="text-xl font-semibold mb-2">Phone Support</h3>
        <p class="text-gray-600 mb-4">
          Call our support team for urgent issues.
        </p>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          Call Now
        </button>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold mb-4">Send Us a Message</h2>

      <form class="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          class="w-full px-4 py-3 border rounded-xl"
        />
        <input
          type="email"
          placeholder="Your Email"
          class="w-full px-4 py-3 border rounded-xl"
        />
        <textarea
          rows="4"
          placeholder="Describe your issue..."
          class="w-full px-4 py-3 border rounded-xl"
        ></textarea>

        <button
          type="submit"
          class="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
        >
          Submit Request
        </button>
      </form>
    </section>

  </div>
</template>