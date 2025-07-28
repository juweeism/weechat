<script setup lang="ts">
import { marked } from 'marked'

const props = defineProps<{
    markdown: string
}>()

const parsedMarkdown = computed(() => {
    return marked.parse(props.markdown)
})
</script>

<template>
    <p>
        {{ parsedMarkdown }}
    </p>
</template>
