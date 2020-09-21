<template>
  <div id="app">
    <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">{{
          $t("meta.title")
        }}</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="lg:flex-grow">
          <router-link
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            to="/"
            >Home</router-link
          >
          <router-link
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            to="/about"
            >About</router-link
          >
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
