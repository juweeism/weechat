<script setup lang="ts">
import type { Id } from '~~/convex/_generated/dataModel'

const props = defineProps<{
    id: Id<'threads'> | null
}>()

provide('threadId', props.id)
</script>

<template>
    <div class="w-full h-screen relative overflow-y-hidden max-w-3xl">
        <div class="mb-3">
            {{ props.id }}
        </div>
        <div class="h-screen overflow-y-scroll">
            <slot name="content" />
        </div>
        <div class="sticky bottom-0 w-full">
            <slot name="input" />
        </div>
    </div>
</template>
