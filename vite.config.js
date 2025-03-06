import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true, // ブラウザを自動的に開く
    host: true, // すべてのネットワークインターフェースでリッスン
  },
});
