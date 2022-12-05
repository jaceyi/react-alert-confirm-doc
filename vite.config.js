import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'prismjs',
            {
              languages: ['javascript', 'css', 'typescript', 'tsx', 'bash'],
              plugins: ['line-numbers'],
              theme: 'default',
              css: true
            }
          ]
        ]
      }
    })
  ],
  server: {
    watch: {
      ignored: ['!**/node_modules/react-alert-confirm/lib/**']
    }
  },
  optimizeDeps: {
    include: ['react-alert-confirm'],
    needsInterop: ['react-alert-confirm']
  }
});
