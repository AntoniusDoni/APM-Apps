import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir:"../document/",
  base:"../document/",
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "wails", replacement: path.resolve(__dirname, "wailsjs") },
    ],
  },
})
