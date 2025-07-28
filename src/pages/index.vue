<script setup lang="ts">
import { useConvexMutation } from '@convex-vue/core'
import { api } from '~~/convex/_generated/api'

const sendMessage = useConvexMutation(api.chat.sendMessage)
const createThread = useConvexMutation(api.chat.createThread)

async function handleSendMessage(content: string) {
    // create thread
    const threadId = await createThread.mutate({ title: '' })
    if (!threadId) {
        console.error('Failed to create thread')
        return
    }

    // send message
    sendMessage.mutate({ threadId, author: 'user', content })

    await navigateTo({
        name: 'chat',
        query: { id: threadId },
    })
}
</script>

<template>
    <div class="w-full">
        <chat-room :id="null">
            <template #input>
                <chat-input
                    :loading="sendMessage.isLoading"
                    @send="handleSendMessage"
                />
            </template>
        </chat-room>
    </div>
</template>
