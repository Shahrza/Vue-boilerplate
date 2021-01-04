<template>
    <div id="app">
        <main class="main-content">
            <section v-if="token">
                <app-header/>
                <router-view/>
            </section>
            <section v-else>
                <app-header/>
                <router-view/>
            </section>
        </main>
    </div>
</template>

<script>

// Components
import AppHeader from './components/layout/AppHeader.vue'

    export default {
        name: 'App',
        components: {AppHeader},
        data() {
            return {
                token: localStorage.token
            }
        }
    }
</script>

<style lang="scss">
</style>
