import type { UserConfig } from 'vite'

export default {
    base: '/webapp/com.example.vite/',
    build: {
        outDir: 'build/resources/main/static',
    },
} satisfies UserConfig