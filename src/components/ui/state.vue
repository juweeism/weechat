<script setup lang='ts'>
defineProps<{
    error?: string
    loading?: boolean
}>()
</script>

<template>
    <div>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-else-if="loading">
            loading ...
        </div>
        <div v-else>
            <slot />
        </div>
    </div>
</template>
