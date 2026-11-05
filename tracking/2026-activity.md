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
| 7 月 | Base44 | 爐石工具收尾（7/7 Early List Validator） |
| 8 月 | Base44 | SVWB Prep Lab |
| 9 月 | GitHub、GPT Sites | 9/25 Next Stop Live；Inside Decision OS 在 GPT Sites 已有 V2（待 GPT 補） |
| 10 月 | GitHub、Cloudflare | 全年高峰：Semantic Weave、Control Room、Inside Decision OS、Research Thread、Observer Engine |
| 11 月 | GitHub、Base44 | Personal Studio、Research Thread v0.2、觀察者協議 |

---

## A. GitHub（Claude 負責）

讀法：`Gabriel-chun` 名下今年有提交的 10 個 repo，包含所有分支，同一個提交只算一次。分支上的提交與合併後的主線提交各算一次，有 PR 的 repo 數字會偏高一點。

| 產品 | repo | 期間 | 活躍天數 | 提交數 | 已知版本 | 線上網址 |
|---|---|---|---|---|---|---|
| Thought Flow v2 | card-game- | 3/1–4/25 | 2 | 71 | v2 | card-game-blue-rho.vercel.app |
| 作品集 V1 | gabriel-chung-portfolio | 6/23 | 1 | 3（不含 11/5 起的整理） | V1 | gabriel-chung-portfolio.vercel.app |
| Next Stop Live | threads-cli-nextstop | 9/25–11/4 | 19 | 777（另有 584 次自動採集） | Signal Deck V0.4、Signal Review V0.5、Trend Tracking V0.2 | next-stop-live.vercel.app |
| Semantic Weave | semantic-weave | 10/9–10/10 | 2 | 52 | V0.1 → V0.7，退回 V0.6 | semantic-weave-studio.gabrielchun336.workers.dev |
| Knock Knock | knock-knock-career-research | 10/11–10/21 | 2 | 34 | V0.1 | — |
| Control Room | control-room | 10/12–11/5 | 13 | 278 | — | 私人 |
| Inside Decision OS | inside-decision-os | 10/13–10/16 | 4 | 479 | 到 V5.2 後停止 | inside-decision-os.gabrielchun336.workers.dev |
| Research Thread | research-thread | 10/21–11/5 | 2 | 33 | v0.1 → v0.2 | research-thread.gabrielchun336.workers.dev |
| Observer Engine | Observer-Engine | 10/30 | 1 | 66 | V0.1 → V0.3 | observer-engine.gabrielchun336.workers.dev |
| Personal Studio | personal-site | 11/4 | 1 | 4 | v2 | personal-studio.gabrielchun336.workers.dev |

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

## C. GPT Sites（GPT 負責，待補）

讀法：由 GPT 依自己的 Sites 與專案紀錄填寫。請沿用同樣的欄位；不知道的留空或寫「推估」。

| 產品 | 網址 | 期間 | 活躍天數 | 版本數／版本號 | 目前狀態 | 確定／推估 |
|---|---|---|---|---|---|---|
| Ideation Landing Room | ideation-landing-room.chungkang.chatgpt.site | | | | | |
| Thought Flow Lab（Profile 07） | thought-flow-lab.chungkang.chatgpt.site | | | | | |
| Inside Decision OS（GPT Site 版） | inside-decision-os.chungkang.chatgpt.site | | | source v147？ | | |
| Competitive Decision Lab | competitive-decision-lab.chungkang.chatgpt.site | | | | | |
| Shadowverse Prep Lab | shadowverse-prep-lab.chungkang.chatgpt.site | | | source v83？ | | |
| Next Stop Live 品牌頁 | next-stop-live.chungkang.chatgpt.site | | | | | |
| （其他 GPT Sites） | | | | | | |

---

## D. 沒有 repo 的部署（Claude 負責，待補）

| 產品 | 網址 | 目前知道的 |
|---|---|---|
| Current State Mapping | current-state-mapping.gabrielchun336.workers.dev | 線上 V0.60；找不到 repo |
| Trace Workroom | trace-workroom.pages.dev | 預計由 Personal Studio 取代 |
| Work Information Support | work-information-support.gabrielchun336.workers.dev | Demo |

下一步：從 Cloudflare 的部署紀錄補上這幾個的期間與部署次數。

---

## 待確認

| # | 問題 | 誰來對 |
|---|---|---|
| 1 | Inside Decision OS 真正的起點：9/29 已有 V2，GPT Site 的 v147 是什麼時候開始的？ | GPT |
| 2 | Shadowverse Prep Lab：GPT Site（v83）與 Base44 的 SVWB Prep Lab（8/5–8/7）哪個先？是同一個產品的兩版嗎？ | GPT ＋ Claude |
| 3 | Thought Flow Lab（GPT Site）與 Base44 的 ThoughtFlow／ThoughtMirror（3–4 月）、GitHub 的 Thought Flow v2（4/25）是什麼關係？ | GPT ＋ Claude |
| 4 | Competitive Decision Lab 的時間：目前從網站內容推估在 6 月 | GPT |
| 5 | 1–2 月真的沒有開發，還是在其他平台？ | 使用者 |
| 6 | Personal Studio 的定位：上層 README 寫「Control Room 的實驗分支」，但 11/5 討論時也提到要當公開寫作站的基礎 | 使用者 |
