<script setup lang="ts">
import { templateRef } from '@vueuse/core'

const emit = defineEmits<{
    (e: 'send', message: string): void
}>()

const threadId = inject('threadId')

const textarea = templateRef<HTMLTextAreaElement>('textarea')

function handleSubmit() {
    emit('send', textarea.value.value)
    clearTextarea()
}

function clearTextarea() {
    textarea.value.value = ''
}
</script>

<template>
    <form class="flex align-start w-full" @submit.prevent="handleSubmit">
        <textarea
            id="chat-box" ref="textarea" name="chat-box" class="flex-1"
            @keydown.enter.exact.prevent="handleSubmit"
            @keydown.enter.shift.exact.prevent="textarea.value += '\n'"
        />
        <button type="submit" class="bg-blue-300">
            send
        </button>
    </form>
</template>
