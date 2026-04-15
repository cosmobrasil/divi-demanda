import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const token = env.VITE_EMPRESAQUI_TOKEN || ''

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: token
        ? {
            '/api/empresaqui': {
              target: 'https://www.empresaqui.com.br',
              changeOrigin: true,
              secure: true,
              rewrite: (path) =>
                path.replace(/^\/api\/empresaqui/, `/api/${token}`),
            },
          }
        : undefined,
    },
  }
})
