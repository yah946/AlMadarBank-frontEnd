<template>
  <div class="space-y-12">

    <!-- Header -->
    <section class="text-center py-12">
      <h1 class="text-4xl font-bold text-blue-600">Careers at E-Bank</h1>
      <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
        Join our team and help shape the future of digital banking. We’re looking for passionate people who want to make an impact.
      </p>
    </section>

    <!-- Why Join Us -->
    <section class="grid md:grid-cols-3 gap-6 text-center">
      <div class="p-6 shadow rounded-2xl">
        <h3 class="text-xl font-semibold mb-2">Innovative Work</h3>
        <p class="text-gray-600">
          Work with modern technologies and build secure financial solutions.
        </p>
      </div>

      <div class="p-6 shadow rounded-2xl">
        <h3 class="text-xl font-semibold mb-2">Growth Opportunities</h3>
        <p class="text-gray-600">
          Learn, grow, and advance your career with continuous support.
        </p>
      </div>

      <div class="p-6 shadow rounded-2xl">
        <h3 class="text-xl font-semibold mb-2">Flexible Environment</h3>
        <p class="text-gray-600">
          Enjoy a healthy work-life balance with flexible schedules.
        </p>
      </div>
    </section>

    <!-- Job Listings -->
    <section class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold mb-6">Open Positions</h2>

      <div class="space-y-4">

        <div class="p-5 border rounded-xl flex justify-between items-center">
          <div>
            <h3 class="font-semibold">Frontend Developer</h3>
            <p class="text-gray-500 text-sm">Remote • Full-time</p>
          </div>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Apply
          </button>
        </div>

        <div class="p-5 border rounded-xl flex justify-between items-center">
          <div>
            <h3 class="font-semibold">Backend Developer</h3>
            <p class="text-gray-500 text-sm">Remote • Full-time</p>
          </div>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Apply
          </button>
        </div>

        <div class="p-5 border rounded-xl flex justify-between items-center">
          <div>
            <h3 class="font-semibold">Customer Support Agent</h3>
            <p class="text-gray-500 text-sm">On-site • Full-time</p>
          </div>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Apply
          </button>
        </div>

      </div>
    </section>

    <!-- Application Form -->
    <section class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold mb-4">Apply Now</h2>

      <form class="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          class="w-full px-4 py-3 border rounded-xl"
        />

        <input
          type="email"
          placeholder="Email Address"
          class="w-full px-4 py-3 border rounded-xl"
        />

        <select class="w-full px-4 py-3 border rounded-xl">
          <option>Select Position</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Customer Support Agent</option>
        </select>

        <textarea
          rows="4"
          placeholder="Tell us about yourself..."
          class="w-full px-4 py-3 border rounded-xl"
        ></textarea>

        <button
          type="submit"
          class="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
        >
          Submit Application
        </button>
      </form>
    </section>

  </div>
</template>