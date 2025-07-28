import { marked } from 'marked'

export default function useMarkdown() {
    const parseMarkdown = (markdown: string) => {
        marked.parse(markdown)
    }

    return {
        parseMarkdown,
    }
}
