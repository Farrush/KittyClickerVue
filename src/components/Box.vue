<template>
        <section class="market">
            <slot></slot>
        </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MarketBox'
})
</script>
<style scoped>
section{
    width:24vw;
    max-height: 100vh;
    height: 100vh;
    border: solid 1px #000;
}
</style>
