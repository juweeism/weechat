// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
    vue: {
        a11y: true,
    },
    stylistic: {
        indent: 4,
        quotes: 'single',
    },
})
