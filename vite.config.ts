import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import UnoCSS from 'unocss/vite'


export default defineConfig({
    plugins: [
        react(),
        Pages(),
        UnoCSS(),
    ]
})
