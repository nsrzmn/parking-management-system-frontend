import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
<<<<<<< HEAD
  base: '/parking-management-system-frontend/',
=======
  base: '/parking-management-system-frontend/', // 👈 Add this line
>>>>>>> cfe1df3e6daa6b8127b2b26abd3740023bb50cca
  plugins: [react()],
})

