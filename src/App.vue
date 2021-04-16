<template>
  <div id="app">
    <main class="main-content">
      <section v-if="token">
        <AppHeader />
        <router-view />
        <AppFooter />
      </section>
      <section v-else>
        <router-view />
      </section>
    </main>
  </div>
</template>

<script>
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";

export default {
  name: "App",
  components: { AppHeader, AppFooter },
  data() {
    return {
      token: localStorage.token,
    };
  },
};
</script>

<style lang="scss">
</style>
