import { defineConfig,loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve,join} from 'path';
import eslintPlugin from "vite-plugin-eslint";
import viteCompression from "vite-plugin-compression";
import { readdirSync } from "fs";


const project_pages = {};
const entryPath = resolve(__dirname, "./src/apps");
const entrys = readdirSync(entryPath).reduce((obj, dirname) => {
  obj[dirname] = join(entryPath, dirname);
  return obj;
}, {});

Object.keys(entrys).forEach(pageName => {
  project_pages[pageName] = resolve(__dirname, `src/apps/${pageName}/index.html`);
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let pages = {};
  const env = loadEnv(mode, process.cwd());
  const isDev = mode === "development";

  if (isDev) {
    pages = {...project_pages};
  } else {
    if (env.VITE_APP_MODEL) {
      pages[env.VITE_APP_MODEL] = project_pages[env.VITE_APP_MODEL];
    } else {
      pages = {...project_pages};
    }
  }
  return {
    root: env.VITE_APP_ROOTPATH,
    // base: env.VITE_APP_ROOTPATH,
    plugins: [
      vue(),
      // 增加下面的配置项,这样在运行时就能检查eslint规范
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
        exclude: ['node_modules'],
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: "gzip",
        ext: ".gz",
      })
    ],
    server:{
      host:"0.0.0.0",
      port:3000
    },
    build:{
      rollupOptions:{
        /*input:{
          main: resolve(__dirname,"index.html"),
          chat: resolve(__dirname,"src/apps/chat/index.html")
        }*/
        input:pages,
        output:{
          dir: resolve(__dirname,'./dist')
        }
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    resolve:{
      alias:[
        {
          find:'@',
          replacement: resolve(__dirname,"src")
        },
        {
          find:'@chat',
          replacement: resolve(__dirname,"src/apps/chat")
        },
        {
          find:'@admin',
          replacement: resolve(__dirname,"src/apps/admin")
        },
        {
          find:'@client',
          replacement: resolve(__dirname,"src/apps/client")
        }
      ]
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve(
                'src/assets/style/glob.less'
            )}";`,
          },
          javascriptEnabled: true,
        },
      },
    },
  }
});
