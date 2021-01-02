<template>
    <div id="app">
        <main class="main-content">
            <section v-if="token">
                <router-view/>
            </section>
            <section v-else>
                <router-view/>
            </section>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {},
        data() {
            return {
                token: localStorage.token
            }
        }
    }
</script>

<style lang="scss">
</style>
