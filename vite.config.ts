import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  base:'/card-maker',
  plugins: [react(), tsconfigPaths()],
  build: {
    assetsInlineLimit: 0,
  },
})

