import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdPlugin, { Mode } from "vite-plugin-markdown";
import MarkdownIt from "markdown-it";
import mila from "markdown-it-link-attributes";
import highlightjs from "markdown-it-highlightjs"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdPlugin.plugin({
      mode: [Mode.REACT, Mode.HTML],
      markdownIt: MarkdownIt({
        linkify: true,
        html: true,
        typographer: true,
        breaks: true,
      })
        .use(mila, { attrs: { target: "_blank", rel: "noopener" } })
        .use(highlightjs),
    }),
  ],
  build: {
    assetsInlineLimit: 0
  }
})
