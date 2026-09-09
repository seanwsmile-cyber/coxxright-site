# COxxright Production

屯門 24 小時鼓房／琴室／Band 房／錄音 landing。

Grok 預覽同呢個 repo 會一齊跟。改完之後用 `coxxright-namecheap.zip` 上傳去 Namecheap（同之前做法一樣）。

## 邊度改

| 想改 | 檔案 |
|---|---|
| 價錢、文案、FAQ、WhatsApp、會員 | [`src/data/content.ts`](src/data/content.ts) |
| 版面 | [`src/components/site.tsx`](src/components/site.tsx) |
| 顏色／字 | [`src/styles.css`](src/styles.css) |
| 相片／logo | [`public/`](public/) |

## 上 coxxright.com（Namecheap）

1. 下載 [`coxxright-namecheap.zip`](./coxxright-namecheap.zip)
2. Namecheap File Manager 開 `public_html`
3. 解壓／上傳 zip 入面全部檔（`index.html`、`assets/`、`media/`、logo、favicon、`.htaccess`）
4. 覆蓋舊檔就得

唔使裝 Node。zip 已經係 build 好嘅 static 網站。

## 本機睇（optional）

```bash
npm install
npm run dev
```
