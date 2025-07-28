<script setup lang="ts">
import type { Doc } from '~~/convex/_generated/dataModel'

const props = defineProps<{
    messages?: Doc<'messages'>[]
}>()
</script>

<template>
    <div>
        <div v-for="m in props.messages" :key="m._id">
            <chat-bubble>
                <text-markdown :markdown="m.content" />
            </chat-bubble>
        </div>
    </div>
</template>
