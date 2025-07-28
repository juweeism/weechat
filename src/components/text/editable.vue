<script setup lang="ts">
import { templateRef } from '@vueuse/core'

const props = defineProps<{
    text: string
}>()

const emit = defineEmits<{
    update: [newText: string]
}>()

const editable = templateRef<HTMLSpanElement>('editable')
const text = ref<string | undefined>(props.text)
const isEditing = ref(false)


function handleDoubleClick() {
    isEditing.value = true
}

function handleEnter() {
    isEditing.value = false
    emit('update', editable.value?.textContent?.trim())
}

function handleBlur() {
    isEditing.value = false
}
</script>

<template>
    <div ref="editable" :contenteditable="isEditing" @dblclick="handleDoubleClick" @keydown.enter.prevent="handleEnter">
        {{ text }}
    </div>
</template>
