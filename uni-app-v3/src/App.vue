<script>
    import {
        onLaunch,
        onShow,
        onHide
    } from 'vue'
    export default {
        setup() {
            onLaunch(() => console.log('App Launch Vue3'))
            onShow(() => console.log('App Show'))
            onHide(() => console.log('App Hide'))
        }
    }
</script>

<style>
    /*每个页面公共css */
</style>
