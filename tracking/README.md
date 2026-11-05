# 工作追蹤（2026）／ Activity Tracking (2026)

> 狀態：規劃中（v0）。這份 README 說明「怎麼追蹤」，實際數字在 [`2026-activity.md`](2026-activity.md)。
> Status: planning (v0). This README explains *how* we track; the numbers live in [`2026-activity.md`](2026-activity.md).

## 要回答的問題

1. 我今年在哪些地方做了哪些網站／工具？
2. 每一個是什麼時候開始、什麼時候停、中間活躍了幾天？
3. 它大概迭代了幾次（提交數、建置指令數、版本號）？
4. 哪些其實是同一個產品在不同平台、不同帳號上的不同版本？

這份追蹤是 **事實層**：時間、次數、版本、網址。
「這些東西代表什麼、哪些值得寫成案例」是另一層，放在 `archive/` 與之後的案例裡，不混在這裡。

## 分工：誰讀哪裡

這些工作散在好幾個平台，沒有任何一個 AI 看得到全部，所以依「誰讀得到」分工：

| 來源 | 負責 | 讀法 | 迭代的單位 |
|---|---|---|---|
| **GPT Sites**（`*.chungkang.chatgpt.site`）與 GPT 專案對話 | **GPT** | GPT 讀自己的 Sites 與專案紀錄 | 網站版本（例如 source-v147）、重大改版次數 |
| **GitHub**（`Gabriel-chun` 名下所有 repo，含所有分支） | **Claude** | `gh` 讀提交紀錄 | 提交數（另列自動提交） |
| **Cloudflare Workers／Pages、Vercel** | **Claude** | 部署紀錄與線上頁面 | 部署次數、版本號 |
| **Base44**（四個帳號） | **Claude** | 使用者登入後，Claude 只讀 app 清單與建置對話 | 建置指令數、app 數 |

同一個產品常常同時出現在好幾個來源，例如：

- **Inside Decision OS**：GPT Site（source v147）＋ GitHub repo ＋ Cloudflare Worker
- **Shadowverse Prep Lab**：GPT Site（source v83）＋ Base44 的 SVWB Prep Lab
- **Next Stop Live**：GitHub ＋ Vercel ＋ GPT Site 品牌頁

**規則：每個來源各寫各的列，不互相覆蓋。** 合併時用同一個 `product` 名稱把它們接起來，數字分開列，不相加（提交、指令、版本號單位不同）。

## 每一筆紀錄的格式

之後會把表格轉成資料檔：GPT 寫 `tracking/data/gpt-sites.json`，Claude 寫 `tracking/data/github.json` 與 `tracking/data/base44.json`。每一筆長這樣：

```json
{
  "product": "inside-decision-os",
  "platform": "gpt-site",
  "source": "gpt",
  "url": "https://inside-decision-os.chungkang.chatgpt.site/",
  "first": "2026-09-??",
  "last": "2026-10-16",
  "active_days": null,
  "iterations": { "count": 147, "unit": "site_versions" },
  "versions": ["V2", "V5.2"],
  "confidence": "推估",
  "evidence": "source zip 檔名 v147；9/29 Next Stop 對齊 V2",
  "note": "一句話，只寫看得到的事實"
}
```

- `confidence`：有時間戳的寫 **確定**；從檔名、記憶或網站內容推回來的寫 **推估**。
- `active_days`：不知道就留 `null`，不要猜。
- `note`：只寫「發生了什麼」，不寫「代表什麼」。

## 公開範圍（這個 repo 是公開的）

這裡只放 **彙整後** 的資料：產品名、平台、日期、次數、版本號、公開網址。不放：

- 帳號 email（Base44 四個帳號用 A–D 代稱）
- 私人 repo 的提交訊息原文
- 建置對話或 GPT 對話的原文
- 未公開網站的內部畫面

原始紀錄留在私人的地方。

## 步驟

1. **Claude**（已完成第一版）：GitHub 全分支提交與四個 Base44 帳號，整理成 [`2026-activity.md`](2026-activity.md) 的 A、B 兩表。
2. **GPT**：讀這份 README，補 `2026-activity.md` 的 **C 表（GPT Sites）**：每個 Site 的起訖時間、版本數、目前狀態。
3. **一起對帳**：GPT 與 Claude 各讀對方的表，把對不上的地方寫進「待確認」，不要直接改對方的數字。
4. **使用者確認** 待確認項目。
5. **Claude** 把三張表轉成 `tracking/data/*.json`，並更新私人的產品年表；之後再從這裡挑出可以公開的部分，放進新版作品集。

## 和其他資料夾的關係

- `archive/gpt-site-research/`：GPT 時期的研究脈絡（為什麼做、學到什麼）。
- `tracking/`：這裡，時間與次數。
- 兩者互相引用，但不重複寫同一件事。
