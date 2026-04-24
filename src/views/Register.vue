<template>
    <h1 class="text-5xl font-bold text-blue-600 mb-8">
        Register Page
    </h1>

    <form class="text-2xl space-y-8" action="" method="post">
        <div class="grid grid-cols-2">
            <div>
                <label for="first_name">First Name</label>
                <input id="first_name" name="first_name" type="text" required placeholder="Mohamed" class="ring focus:outline-none ring-slate-400 rounded focus:ring-blue-200 py-1.5 px-4 pl-4 pr-4 w-lg">
                <span class="hidden text-red-600 text-lg">erorr expalf</span>
            </div>
            <div>
                <label for="last_name">Last Name</label>
                <input id="last_name" name="last_name" type="text" required placeholder="El Habib" class="ring focus:outline-none ring-slate-400 rounded focus:ring-blue-200 py-1.5 px-4 pl-4 pr-4 w-lg">
                <span class="hidden text-red-600 text-lg">erorr expalf</span>
            </div>
        </div>
        <div class="grid grid-cols-2">
            <div>
                <label for="cin">National Identity Card</label>
                <input id="cin" name="cin" type="text" required placeholder="V00000" class="ring focus:outline-none ring-slate-400 rounded focus:ring-blue-200 py-1.5 px-4 pl-4 pr-4 w-lg">
                <span class="hidden text-red-600 text-lg">erorr expalf</span>
            </div>
            <div>
                <label for="date_of_birth">Date Of Birth</label>
                <input id="date_of_birth" name="date_of_birth" type="date" required class="ring focus:outline-none ring-slate-400 rounded focus:ring-blue-200 py-1.5 px-4 pl-4 pr-4 w-lg">
                <span class="hidden text-red-600 text-lg">erorr expalf</span>
            </div>
        </div>
        <div class="grid grid-cols-2">
            <div>
                <label for="username">username</label>
                <input id="username" name="username" type="text" required placeholder="mohamed_123" class="ring focus:outline-none ring-slate-400 rounded focus:ring-blue-200 py-1.5 px-4 pl-4 pr-4 w-lg">
                <span class="hidden text-red-600 text-lg">erorr expalf</span>
            </div>
            <div>
                <label for="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="mohamed_el_habib_234@elmadar.com" class="ring focus:outline-none ring-slate-400 rounded focus:ring-blue-200 py-1.5 px-4 pl-4 pr-4 w-lg">
                <span class="hidden text-red-600 text-lg">erorr expalf</span>
            </div>
        </div>
        <div class="grid grid-cols-2">
            <div>
                <label for="password">Password</label>
                <input id="password" name="password" type="password" required placeholder="** ** ** **" class="ring focus:outline-none ring-slate-400 rounded focus:ring-blue-200 py-1.5 px-4 pl-4 pr-4 w-lg">
                <span class="hidden text-red-600 text-lg">erorr expalf</span>
            </div>
            <div>
                <label for="password_confirmation">Confirm Password</label>
                <input id="password_confirmation" name="password_confirmation" type="password" required placeholder="** ** ** **" class="ring focus:outline-none ring-slate-400 rounded focus:ring-blue-200 py-1.5 px-4 pl-4 pr-4 w-lg">
                <span class="hidden text-red-600 text-lg">erorr expalf</span>
            </div>
        </div>
    </form>
</template>