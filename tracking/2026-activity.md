# 2026 工作活動表 ／ 2026 Activity

> 資料截至 2026-11-05。做法與分工見 [README](README.md)。
> 數字是「開發活動」，不代表投入時間或成果大小。不同表的單位不同，不要相加。

## 一眼看全年

| 月份 | 主要在哪裡 | 發生什麼 |
|---|---|---|
| 1–2 月 | — | 沒有找到開發紀錄 |
| 3 月 | Base44 | 第一個 app（3/1 Sideboard Strategist）；「原話 → 外部 LLM → 貼回結構」在 3/5–3/19 成形 |
| 4 月 | Base44（＋ GitHub 一天） | 思考結構化、敲門、短週期決策；4/25 Thought Flow v2 第一次放上 GitHub |
| 5 月 | Base44 | MTG（DeckCanvas、Sideboard Flow Studio）、SlideMap、Inside Ideation Loop |
| 6 月 | Base44 | 爐石賽事工具；6/23 第一版作品集與 Showcase Edition |
| 7 月 | **GPT Sites**（＋ Base44） | 7/15 Inside Decision OS 建站（之後累積 148 個版本）；7/16 Competitive Decision Lab、Thought Flow / Transcript Lab；7/19 Shadowverse Prep Lab；7/22 Ideation Landing Room；7/24 Inside Workspace；7/30 Thought Flow Profile 07。Base44 只剩 7/7 Early List Validator |
| 8 月 | **GPT Sites**（＋ Base44） | 8/12 VTuber 經紀人投遞作品集；8/25 Riftbound 兩個站。Base44 的 SVWB Prep Lab（8/5–8/7） |
| 9 月 | GPT Sites → GitHub | 9/1 Iteration Lab；9/4 Card Game Journey；9/18 Inside Decision OS Demo；9/25 Next Stop Live 同時在 GitHub 與 GPT Sites 開始 |
| 10 月 | GitHub、Cloudflare | 全年高峰：Semantic Weave、Control Room、Inside Decision OS（repo）、Research Thread、Observer Engine |
| 11 月 | GitHub、Base44 | Personal Studio、Research Thread v0.2、觀察者協議 |

**三個時期**：3–6 月以 Base44 快速試做 → 7–9 月轉到 GPT Sites，少數產品長時間迭代（Inside Decision OS 148 版、Shadowverse Prep Lab 83 版）→ 9 月底起轉到 GitHub 與 Cloudflare。三個平台的數字單位不同（指令、儲存版本、提交），只能比較時間，不能比較大小。

---

## A. GitHub（Claude 負責）

讀法：`Gabriel-chun` 名下今年有提交的 10 個 repo，包含所有分支，同一個提交只算一次。分支上的提交與合併後的主線提交各算一次，有 PR 的 repo 數字會偏高一點。

| 產品 | repo | 期間 | 活躍天數 | 提交數 | 已知版本 | 部署方式 |
|---|---|---|---|---|---|---|
| Thought Flow v2 | card-game- | 3/1–4/25 | 2 | 71 | v2 | Vercel |
| 作品集 V1 | gabriel-chung-portfolio | 6/23 | 1 | 3（不含 11/5 起的整理） | V1 | Vercel（GitHub 自動部署） |
| Next Stop Live | threads-cli-nextstop | 9/25–11/4 | 19 | 777（另有 584 次自動採集） | Signal Deck V0.4、Signal Review V0.5、Trend Tracking V0.2 | Vercel ＋ Cloudflare Worker（GitHub Actions） |
| Semantic Weave | semantic-weave | 10/9–10/10 | 2 | 52 | V0.1 → V0.7，退回 V0.6 | Cloudflare Worker（手動部署） |
| Knock Knock | knock-knock-career-research | 10/11–10/21 | 2 | 34 | V0.1 | Cloudflare Pages（GitHub 自動部署） |
| Control Room | control-room | 10/12–11/5 | 13 | 278 | — | Cloudflare Worker（GitHub 自動部署） |
| Inside Decision OS | inside-decision-os | 10/13–10/16 | 4 | 479 | 到 V5.2 後停止 | Cloudflare Worker（GitHub 自動部署，有登入保護） |
| Research Thread | research-thread | 10/21–11/5 | 2 | 33 | v0.1 → v0.2 | Cloudflare Worker（手動部署腳本） |
| Observer Engine | Observer-Engine | 10/30 | 1 | 66 | V0.1 → V0.3 | Cloudflare Worker（GitHub 自動部署） |
| Personal Studio | personal-site | 11/4 | 1 | 4 | v2 | Cloudflare Worker（GitHub 自動部署） |

**合計**：1,797 次提交（另有 584 次自動採集），10 月佔 1,525 次。

---

## B. Base44（Claude 負責）

讀法：四個 Base44 帳號（A–D）共 46 個 app，依主題合成 9 條線。「指令」是在建置對話裡送出的訊息數，包含請它修錯的訊息。只有帳號 A 有逐則時間；其他帳號只知道哪幾天有指令。同一個點子常在不同帳號各做一份，算作同一條線的不同版本。

| 產品線 | 期間 | 活躍天數 | app 數 | 指令數 | 帳號 | 包含的 app（指令數） |
|---|---|---|---|---|---|---|
| 思考結構化 | 3/5–4/10 | 10 | 11 | 42 | ABC | Cafe Mode Sticky Inbox（5）、Thoughtful (Coffee Shop Mode)（6）、FlowState（5）、ThoughtFlow（5）、Find Boundary Lab（2）、Stone Boundary Lab（3）、Boundary (Find your boundary)（1）、Cognos（4）、Cognos（5）、ThoughtFlow (Thinking Interface)（1）、ThoughtMirror（5） |
| 競技卡牌：MTG | 3/1–5/25 | 8 | 5 | 55 | AC | Sideboard Strategist（11）、Deck Thinker（3）、DeckCanvas（25）、Sideboard Flow Studio（15）、Sideboard Insight Builder（1） |
| 競技卡牌：爐石與其他 | 3/19–8/7 | 10 | 7 | 99 | BCD | Meta Pulse（7）、HS Tournament Loop v0（53）、HearthSync Strategy Loop（7）、Card Game Results Lab（10）、LadderStats（3）、Early List Validator（5）、SVWB Prep Lab（14） |
| 求職定位：敲門 | 4/6–4/10 | 2 | 4 | 17 | ACD | V0 knock（5）、敲門 / Knock Knock（3）、敲門 / Knock Knock（5）、敲門 Knock Knock--3（4） |
| 表達與議題探索 | 4/6–4/15 | 4 | 3 | 27 | BD | Perspective（7）、CrossLens（10）、Expression Adapter（10） |
| 短週期決策 | 4/22–4/27 | 3 | 4 | 27 | C | What's Next（4）、Short Cycle Loop (Capture First V2)（7）、Short Cycle Loop (Competitive Decision)（15）、下一步 (NextStep)（1） |
| 決策推理層（Decision Layer → Inside Ideation Loop） | 4/30–9/28 | 9 | 6 | 78 | C | Decision Layer demo1 v0（2）、Decision Layer — Transcription（5）、Inside Ideation Loop（19）、Inside Ideation Loop V2（13）、IdeaFlow（34）、Inside Ideation Loop — Showcase Edition（5） |
| SlideMap | 5/15–5/15 | 1 | 3 | 9 | ABD | SlideMap（3）、SlideMap (V1)（5）、SlideMap (demo build)（1） |
| 作品集與工作 | 6/23–11/5 | 3 | 3 | 13 | CD | Freelance Flow（8）、Reasoning Layer（2）、觀察者協議 (Observer Protocol)（3） |

**合計**：46 個 app、367 次指令，期間 3/1–8/7；11/5 又新建一個（觀察者協議）。

> 決策推理層的 9/28、作品集與工作的 11/5，是後來回去修改或新建，主要開發期在 4/30–7/16。

---

## C. GPT Sites（GPT 負責）

查核日：2026-11-05（Asia/Taipei）。依 Sites `list_sites` 的 `created_at`、`updated_at`、`status`、存取設定，以及逐站完整分頁的 `list_site_versions` 填寫，共 14 個 Site。私人站點依 tracking README 的公開範圍不列網址。

**期間欄是「專案建立 → 最近專案 metadata 更新」的觀測區間，不是已確認的開發起訖或停止日。** `updated_at` 不一定代表內容修改或部署。日期均轉為臺北日期。版本數已逐筆列舉核對，與最新序號一致；儲存版本不一定部署，也不等於重大改版次數。產品的 V2／V5.2 等語意版本不能直接等同 Site v2／v148。

版本清單未提供逐版建立時間戳，因此無法計算活躍天數，留空（轉成 JSON 時用 `null`）。`active` 是平台專案狀態，不能解讀為仍持續開發。未讀取完整歷史對話，不據此補寫修改內容。

| 產品 | 網址 | 期間 | 活躍天數 | 版本數／版本號 | 目前狀態 | 確定／推估 |
|---|---|---|---|---|---|---|
| Inside Decision OS | 私人（不列網址） | 2026-07-15–2026-10-14 | | 148 個儲存版本；v1–v148 | active；僅本人；有部署網址，開發是否停止待確認 | 確定（metadata／版本清單）；開發起訖待確認 |
| Competitive Decision Lab | [competitive-decision-lab.chungkang.chatgpt.site](https://competitive-decision-lab.chungkang.chatgpt.site) | 2026-07-16–2026-10-20 | | 7 個儲存版本；v1–v7 | active；公開；有部署網址，開發是否停止待確認 | 確定（metadata／版本清單）；開發起訖待確認 |
| Thought Flow / Transcript Lab | 私人（不列網址） | 2026-07-16–2026-07-17 | | 9 個儲存版本；v1–v9 | active；僅本人；有部署網址，開發是否停止待確認 | 確定（metadata／版本清單）；開發起訖待確認 |
| Shadowverse Prep Lab | 私人（不列網址） | 2026-07-19–2026-10-12 | | 83 個儲存版本；v1–v83 | active；僅本人；有部署網址，開發是否停止待確認 | 確定（metadata／版本清單）；開發起訖待確認 |
| Ideation Landing Room | 私人（不列網址） | 2026-07-22–2026-07-24 | | 11 個儲存版本；v1–v11 | active；僅本人；有部署網址，開發是否停止待確認 | 確定（metadata／版本清單）；開發起訖待確認 |
| Inside Workspace | 私人（不列網址） | 2026-07-24–2026-08-12 | | 7 個儲存版本；v1–v7 | active；僅本人；有部署網址，開發是否停止待確認 | 確定（metadata／版本清單）；開發起訖待確認 |
| Thought Flow Profile 07 | [thought-flow-profile-07.chungkang.chatgpt.site](https://thought-flow-profile-07.chungkang.chatgpt.site) | 2026-07-30–2026-10-13 | | 19 個儲存版本；v1–v19 | active；公開；有部署網址，開發是否停止待確認 | 確定（metadata／版本清單）；開發起訖待確認 |
| VTuber 經紀人投遞作品集 | [vtuber-manager-portfolio.chungkang.chatgpt.site](https://vtuber-manager-portfolio.chungkang.chatgpt.site) | 2026-08-12–2026-08-13 | | 22 個儲存版本；v1–v22 | active；公開；有部署網址，開發是否停止待確認 | 確定（metadata／版本清單）；開發起訖待確認 |
| Riftbound Scenario 2.0 Reviewer Demo | 私人（不列網址） | 2026-08-25–2026-08-25 | | 4 個儲存版本；v1–v4 | active；僅本人；有部署網址，開發是否停止待確認 | 確定（metadata／版本清單）；開發起訖待確認 |
| Riftbound Scenario Organizer | [riftbound-scenario-organizer.chungkang.chatgpt.site](https://riftbound-scenario-organizer.chungkang.chatgpt.site) | 2026-08-25–2026-10-12 | | 4 個儲存版本；v1–v4 | active；公開；有部署網址，開發是否停止待確認 | 確定（metadata／版本清單）；開發起訖待確認 |
| Iteration Lab | 私人（不列網址） | 2026-09-01–2026-10-08 | | 26 個儲存版本；v1–v26 | active；僅本人；有部署網址，開發是否停止待確認 | 確定（metadata／版本清單）；開發起訖待確認 |
| Card Game Journey｜卡牌遊戲歷程 | 私人（不列網址） | 2026-09-04–2026-09-04 | | 7 個儲存版本；v1–v7 | active；僅本人；有部署網址，開發是否停止待確認 | 確定（metadata／版本清單）；開發起訖待確認 |
| Inside Decision OS Demo | [inside-decision-os-demo.chungkang.chatgpt.site](https://inside-decision-os-demo.chungkang.chatgpt.site) | 2026-09-18–2026-09-18 | | 5 個儲存版本；v1–v5 | active；公開；有部署網址，開發是否停止待確認 | 確定（metadata／版本清單）；開發起訖待確認 |
| Next Stop Live（品牌頁） | [next-stop-live.chungkang.chatgpt.site](https://next-stop-live.chungkang.chatgpt.site) | 2026-09-25–2026-10-27 | | 10 個儲存版本；v1–v10 | active；公開；有部署網址，開發是否停止待確認 | 確定（metadata／版本清單）；開發起訖待確認 |

**對帳提醒：** Thought Flow / Transcript Lab（v9）和 Thought Flow Profile 07（v19）是兩個不同的 Site，不能合成一筆。Inside Decision OS 的 source v147 是歷史版本線索，目前完整清單還有 v148；Shadowverse Prep Lab 的清單確認含 v83。跨平台產品是否相同及承接方向，仍需來源比對，先不合併計數。

---

## D. 沒有 repo 的 Cloudflare Workers（Claude 負責）

讀法：Cloudflare 帳號裡共 15 個 Workers，其中 8 個找不到對應的 GitHub repo，是從本機直接部署的。期間是 Worker 的建立日到最近一次部署（臺北日期），不等於實際開發起訖。依公開範圍，這裡不列網址。

| Worker | 屬於哪個產品 | 期間 | 目前狀態 |
|---|---|---|---|
| current-state-mapping | Current State Mapping | 10/6–10/12 | 公開可開啟；線上 V0.60 |
| content-research-demo | Content Research／Work Method（Personal Studio 案例） | 10/6–10/13 | 公開可開啟 |
| work-support-demo | Work Method Demo | 10/6–10/7 | 公開可開啟 |
| work-information-support | Work Information Support（Personal Studio 案例） | 10/8–10/13 | 公開可開啟 |
| inside-decision-os-v4-preview | Inside Decision OS 4.0 Constellation 預覽 | 10/14 | 公開可開啟 |
| inside-decision-os-v52-preview | Inside Decision OS V5.2 預覽 | 10/16–10/17 | 有登入保護 |
| nextstop-collector-watchdog | Next Stop 採集監看 | 10/3 | 背景程式，沒有頁面 |
| nextstop-public-preview | Next Stop Live 公開頁預覽 | 10/27 | 公開可開啟 |

**已移除**：Trace Workroom（Cloudflare Pages）已經無法連線，確認拿掉。

**和 GitHub 的串接**（15 個 Workers 中有 repo 的 7 個）：

| 串接方式 | Workers |
|---|---|
| GitHub push 後由 Cloudflare 自動部署 | personal-studio、control-room、inside-decision-os、observer-engine |
| GitHub Actions 部署 | threads-cli-nextstop |
| 有 repo，但從本機手動部署 | research-thread、semantic-weave-studio |
| Cloudflare Pages（不是 Worker） | knock-knock-career-research |

---

## 待確認

| # | 問題 | 誰來對 |
|---|---|---|
| 1 | ~~Inside Decision OS 真正的起點~~ → GPT Site 7/15 建立（已回覆，見下方） | GPT |
| 2 | Shadowverse Prep Lab：GPT Site（v83）與 Base44 的 SVWB Prep Lab（8/5–8/7）哪個先？是同一個產品的兩版嗎？ | GPT ＋ Claude |
| 3 | Thought Flow Lab（GPT Site）與 Base44 的 ThoughtFlow／ThoughtMirror（3–4 月）、GitHub 的 Thought Flow v2（4/25）是什麼關係？ | GPT ＋ Claude |
| 4 | ~~Competitive Decision Lab 的時間~~ → GPT Site 7/16 建立；6 月是研究素材的時間（已回覆） | GPT |
| 5 | 1–2 月真的沒有開發，還是在其他平台？ | 使用者 |
| 6 | Personal Studio 的定位：上層 README 寫「Control Room 的實驗分支」，但 11/5 討論時也提到要當公開寫作站的基礎 | 使用者 |

### GPT 回覆待確認 1–4（2026-11-05）

1. **Inside Decision OS 起點：部分確認。** Sites 專案建立於 **2026-07-15 23:14:47（Asia/Taipei）**，目前可確認的 Site 起點早於 9/29。完整儲存清單為 v1–v148，確實含 v147；但清單沒有逐版建立時間戳，**v147 的確切日期留空**，也不能把專案建立日當作 v147 日期。「9/29 已有 V2」是待核對的產品語意版本線索，不能與 Site 序號混用。專案最近 metadata 更新為 10/14；這不能證明 v147 當日產生，也不能代表整個產品真正的研究起點。
2. **Shadowverse Prep Lab 先後：日期可確認，產品關係未確認。** GPT Site 建立於 **2026-07-19**，早於 B 表列出的 Base44 SVWB Prep Lab **8/5–8/7**；此先後比較以 B 表資料為前提，沒有重算或修改 B 表。GPT Site 完整儲存清單為 v1–v83。同屬 Shadowverse 備賽工具可作為關聯線索；是否同一產品的兩版、是否搬移原始碼，以及延續方向，仍須雙方原始資料或使用者確認，**目前不確定**。
3. **Thought Flow 的關係：分站已確認，跨平台承接僅推估。** GPT 的 Thought Flow / Transcript Lab 建立於 **2026-07-16**（v1–v9）；Thought Flow Profile 07 是另一站，建立於 **2026-07-30**（v1–v19）。就 A、B 表的日期而言，兩站都晚於 Base44 ThoughtFlow／ThoughtMirror（3–4 月）和 GitHub Thought Flow v2（4/25）。名稱與既有 archive 的逐字稿／思考整理研究提供同一研究脈絡的線索（**推估**），尚無足夠證據認定直接移植、改名或版本繼承，不合併產品或數字。
4. **Competitive Decision Lab 日期：Site 起點可確認。** 專案建立於 **2026-07-16 02:38:08（Asia/Taipei；UTC 為 7/15）**，最近 metadata 更新為 **2026-10-20**，完整儲存清單為 v1–v7。「6 月」目前只能保留為網站內容指涉的研究／素材時間推估，不能作為這個 GPT Site 的建立日期。更早的原型、研究起點與實際活躍天數仍未知。

以上回答只補 C 表及對帳意見；A、B、D 表與全年總覽未改動。未能取得的歷史對話、逐版日期與跨平台關係保留待查。
