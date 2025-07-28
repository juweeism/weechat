<script setup lang="ts">
import type { Doc, Id } from '~~/convex/_generated/dataModel'
import { useConvexMutation } from '@convex-vue/core'
import { api } from '~~/convex/_generated/api'

const props = defineProps<{
    threads?: Doc<'threads'>[]
}>()

const updateThreadTitle = useConvexMutation(api.chat.updateThreadTitle)

function saveEdit(id: Id<'threads'>, newTitle: string) {
    updateThreadTitle.mutate({ id, newTitle })
}
</script>

<template>
    <nav>
        <sidebar-header />
        <div class="flex justify-between">
            <span>threads</span>
            <button class="deleteAllThreads">
                -
            </button>
        </div>
        <ul>
            <li v-for="thread in props.threads" :key="thread._id">
                <nuxt-link :href="`/chat?id=${thread._id}`">
                    <text-editable :text="thread.title || thread._id" @update="(newText) => saveEdit(thread._id, newText)" />
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>
