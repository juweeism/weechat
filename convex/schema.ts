import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export const threads = {
    title: v.string(),
}

export const messages = {
    threadId: v.id('threads'),
    author: v.string(),
    content: v.string(),
}

export default defineSchema({
    threads: defineTable(threads),
    messages: defineTable(messages).index('by_thread_id', ['threadId']),
})
