# Card-Maker

## deploy

```tsx
// index.html 에서 base url 추가
<base href="./본인 url">
```

```tsx
// vite.config.ts 도 base, build Limit 추가
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/본인 url/",
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
  },
});
```

build후에 preview로 봤을땐 멀쩡하지만, 실제 배포를 하면 repoName이 깨지는 경우가 있다.

dist만 따로 빼서 저장을 해준다.

```tsx
git add dist -f
```

commit 후 subtree로 child만 저장소에 보내면 해결됨.

```tsx
git commit -m "dist child commit"
```

ex:)

branch: master 여기서 커맨드 작성.

```tsx
git subtree push --prefix dist origin gh-pages
```

## 후에도 gh-pages rejected날때

```
gh-pages 브런치 날리고 다시 위에 작업 동일하게 실행.
```
