# COxxright Production — landing

屯門 24 小時鼓房／琴室／Band 房／錄音。Source 同 Namecheap 上傳包一齊放。

## 點上 coxxright.com（Namecheap）

1. 下載 [coxxright-namecheap.zip](./coxxright-namecheap.zip)
2. 解壓
3. Namecheap cPanel → File Manager → `public_html`
4. **清空舊檔**（或至少覆蓋 `index.html`、`assets/`、`media/`）
5. 將 zip 入面全部檔 upload 上去（要見到 `index.html` 喺 `public_html` 根目錄，唔好多重一個 folder）

`namecheap/` 資料夾係同一個內容，用 FTP 嘅人可以直接拖呢個 folder 入面嘅檔。

## 改內容

| 想改 | 檔案 |
|---|---|
| 價錢、文案、FAQ、WhatsApp | [`src/data/content.ts`](src/data/content.ts) |
| 版面 | [`src/components/site.tsx`](src/components/site.tsx) |
| 顏色／字 | [`src/styles.css`](src/styles.css) |

Grok 預覽同呢個 repo 會一齊跟。改完要重新 export zip 先 upload 去 Namecheap。
