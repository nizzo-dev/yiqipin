import { defineConfig } from 'vite'
import uniMod from '@dcloudio/vite-plugin-uni'

const uni = typeof uniMod === 'function' ? uniMod : uniMod.default

export default defineConfig({
  plugins: [uni()],
})
