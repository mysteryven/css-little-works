import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';


export default defineConfig({
    plugins: [
        react(),
        Pages({
            dirs: 'src/pages'
        }),
        vanillaExtractPlugin()
    ]
})