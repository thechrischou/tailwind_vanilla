# Tailwind
- https://tailwindcss.com/
- https://tailwindui.com/
- https://www.tailwindtoolbox.com/

# VS Code plugin 
- Tailwind CSS Explorer
- Tailwind CSS IntelliSense

# build with JIT 
    NODE_ENV=production npx tailwindcss -i ./src/style.css -o ./dist/style/style.css

# Tailwind Config Viewer 
    npx tailwind-config-viewer

# 使用完整的 tailwind.config.js 
查清楚後再去 theme.extend 補充
    npx tailwindcss init --full

# webfont 字體
1. ./src/style.css 加入 import
2. tailwind.config.js 新增 theme.extend.fontFamily，例如 noto_sans_tc: ['Noto Sans TC']
3. html 使用 class "font-noto_sans_tc"，done

# @apply 重複使用樣式 
1. ./src/style.css 加入 自定義樣式
    .btn_primary {
        @apply bg-bootstrap_primary text-white font-bold py-2 px-3 rounded cursor-pointer tracking-widest hover:bg-yellow-400;
    }
2. html 使用 class "btn_primary"，done

#  使用 SVG icon 
1. 前往 https://heroicons.dev/ copy SVG
2. class 直接指定大小、顏色 class="h-12 w-12 text-blue-500"，done