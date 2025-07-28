import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { messages, threads } from './schema'

export const sendMessage = mutation({
    args: messages,
    handler: async (ctx, args) => {
        await ctx.db.insert('messages', args)
    },
})

export const getMessages = query({
    args: {},
    handler: async (ctx) => {
        const messages = await ctx.db.query('messages').order('desc').take(50)

        return messages.reverse()
    },
})

export const getMessagesByID = query({
    args: {
        id: v.id('threads'),
    },
    handler: async (ctx, args) => {
        const messages = await ctx.db.query('messages')
            .withIndex('by_thread_id', q => q.eq('threadId', args.id))
            .collect()

        return messages
    },
})

export const getThreads = query({
    args: {},
    handler: async (ctx) => {
        const threads = await ctx.db.query('threads').order('desc').take(50)

        return threads
    },
})

export const createThread = mutation({
    args: threads,
    handler: async (ctx, args) => {
        const threadId = await ctx.db.insert('threads', args)

        return threadId
    },
})

export const updateThreadTitle = mutation({
    args: {
        id: v.id('threads'),
        newTitle: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, { title: args.newTitle })
        const updatedThread = await ctx.db.get(args.id)

        return updatedThread
    },
})
