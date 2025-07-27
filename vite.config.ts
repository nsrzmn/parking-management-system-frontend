import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/parking-management-system-frontend/',
  plugins: [react()],
})

