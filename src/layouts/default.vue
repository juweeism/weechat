<script setup lang="ts">
import { useConvexQuery } from '@convex-vue/core'
import { api } from '~~/convex/_generated/api'

const { data: threads } = useConvexQuery(api.chat.getThreads, {})
</script>

<template>
    <div class="flex w-full h-full">
        <sidebar-base>
            <sidebar-content :threads="threads" />
        </sidebar-base>
        <div class="flex justify-center w-full h-full">
            <slot />
        </div>
    </div>
</template>
