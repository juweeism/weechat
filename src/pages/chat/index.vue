<script setup lang="ts">
import type { Id } from '~~/convex/_generated/dataModel'
import { useConvexMutation, useConvexQuery } from '@convex-vue/core'
import { api } from '~~/convex/_generated/api'

const route = useRoute()

const threadId = computed(() => route.query.id as Id<'threads'>)

const { data: messages, isLoading, error } = useConvexQuery(
    api.chat.getMessagesByID,
    computed(() => {
        return { id: threadId.value }
    }),
)

const { mutate: sendMessage } = useConvexMutation(api.chat.sendMessage)

function handleSendMessage(message: string) {
    sendMessage({
        threadId: threadId.value,
        author: 'user',
        content: message,
    })
}
</script>

<template>
    <chat-room :id="threadId">
        <template #content>
            <chat-content :messages="messages" />
        </template>
        <template #input>
            <chat-input
                @send="handleSendMessage"
            />
        </template>
    </chat-room>
</template>
