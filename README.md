# Gabriel Chung — 作品集封存／重構中  
# Gabriel Chung — Portfolio Archive / Rebuild in Progress

這個 repository 保存了第一版產品設計作品集，也開始收納目前用來重構新版作品集的研究檔案。  
This repository preserves the first version of my product-design portfolio and now also contains the research archive used to rebuild the next version.

## 目前狀態  
## Current Status

- **Portfolio V1（2026 年 6 月）：已凍結。** 由 Base44 產生的網站與原始程式碼保留作為歷史證據。  
  **Portfolio V1 (June 2026): frozen.** The Base44-generated site and its original code are preserved as historical evidence.

- **舊 Vercel 部署：** 不再視為正式的主要作品集。歷史網址為 `gabriel-chung-portfolio.vercel.app`。  
  **Legacy Vercel deployment:** no longer treated as the canonical portfolio. Historical URL: `gabriel-chung-portfolio.vercel.app`.

- **Personal Site / Personal Studio：** 現在視為 Control Room 發展過程中的實驗分支，而不是新版 Portfolio 的正式替代品。  
  **Personal Site / Personal Studio:** now treated as a Control Room-related experiment / branch, not the canonical replacement portfolio.

- **下一版作品集：** 將在這個 repository 內重新整理，並逐步從目前的專案、研究與歷史原型中抽取正式案例。  
  **Next version:** will be rebuilt in this repository by reorganizing current projects, research, and historical prototypes into selected public case studies.

V1 的介面與程式碼會繼續保留，並與後續重構內容清楚區分。  
The V1 interface and codebase will remain preserved and clearly separated from later reconstruction work.

## 為什麼保留 V1  
## Why Keep V1

第一版作品集記錄了我當時對自己工作的早期理解：**為混亂、未整理的人類思考設計可被理解與使用的系統。**  
The first portfolio captured an early framing of my work: **designing systems that make messy, unstructured human thinking understandable and usable.**

當時的案例已經開始處理：  
Its early cases already explored:

- 自然語言與想法整理工作流  
  natural-language / ideation workflows
- 卡牌遊戲中的推理、判斷與複盤  
  card-game reasoning and review
- 從研究走向產品與輸出的工作流程  
  research-to-product workflows

後來的 Control Room、Global Project Overview、Research Thread、Semantic Weave，以及各種領域型研究工具，很多都可以追溯到這一版作品集裡已經出現的問題。  
Later projects — including Control Room, Global Project Overview, Research Thread, Semantic Weave, and domain-specific research tools — grew from questions already visible in this first version.

## 歷史研究檔案  
## Historical Research Archive

```text
archive/
└── gpt-site-research/
    ├── README.md
    ├── research-sequence-v1.md
    └── portfolio-reference-notes.md
```

這一區記錄了一段以 GPT 對話協助快速產品原型與研究的時期，包括：  
This archive documents a period of GPT-assisted product prototyping and research, including:

- Capture / Craft / Publish（IdeaFlow）
- Thought Flow / Transcript research
- Inside Decision OS
- Competitive Decision / Shadowverse research
- 後來逐步發展出的 Research Thread、Semantic Weave、GPO 與 Control Room  
  the later transition toward Research Thread, Semantic Weave, GPO, and Control Room

這個 archive **不是要宣稱每一個歷史原型現在仍是獨立產品**。它的用途是保存設計問題如何演化，並作為重建 Portfolio 時的研究材料。  
This archive **does not claim that every historical prototype remains an active standalone product**. Its purpose is to preserve the evolution of the design questions and provide source material for rebuilding the portfolio.

## 工作追蹤（2026）  
## Activity Tracking (2026)

```text
tracking/
├── README.md          做法、分工與資料格式 / method, division of labor, format
└── 2026-activity.md   各平台的期間、天數與迭代次數 / periods, active days, iteration counts
```

`archive/` 記錄「為什麼做、學到什麼」；`tracking/` 只記錄 **時間、次數、版本與網址**。  
`archive/` records why things were built and what was learned; `tracking/` records only **dates, counts, versions and URLs**.

依「誰讀得到」分工：**GPT** 負責 GPT Sites 與 GPT 專案紀錄；**Claude** 負責 GitHub、Cloudflare／Vercel 部署與 Base44。  
Split by access: **GPT** covers GPT Sites and GPT project history; **Claude** covers GitHub, Cloudflare / Vercel deployments and Base44.

## 重構原則  
## Rebuild Principles

新版作品集不會只是「我做過哪些網站」的畫廊。  
The new portfolio should not become a gallery of every website I made.

每一個重要案例更希望回答：  
Each selected case should instead show:

1. 我當時正在研究什麼問題？  
   What problem was I investigating?
2. 我做了什麼 prototype，讓問題可以被實際測試？  
   What prototype made the problem testable?
3. 實際使用後出現了什麼證據、摩擦或限制？  
   What evidence, friction, or limitation appeared?
4. 下一次迭代改變了什麼？  
   What changed in the next iteration?
5. 哪些想法最後被保留下來，進入後續系統？  
   Which ideas survived into later systems?


## GPT Sites 盤點與跨工具研究  
## GPT Sites Inventory and Cross-tool Research

盤點基準日：**2026-11-05（Asia/Taipei）**。GPT 依 Sites 平台紀錄查到 **14 個自有網站**，建立於 2026-07-15 至 2026-09-25，合計 362 個儲存版本。  
Snapshot date: **2026-11-05 (Asia/Taipei)**. From Sites platform metadata, GPT found **14 owned Sites**, created between 2026-07-15 and 2026-09-25, with 362 saved versions in total.

- **逐站資料**（日期、版本數、狀態）只維護在 [`tracking/2026-activity.md`](tracking/2026-activity.md) 的 C 表，這裡不再重列。私人站點依公開範圍不列網址。  
  **Per-site data** (dates, version counts, status) is maintained only in table C of [`tracking/2026-activity.md`](tracking/2026-activity.md). Private Sites are listed there without URLs.
- **追蹤做法與分工** 見 [`tracking/README.md`](tracking/README.md)。  
  **Tracking method and division of labor:** see [`tracking/README.md`](tracking/README.md).
- **解讀限制：** 建立日不等於研究起點；最近更新不等於最後一次內容修改；儲存版本數不等於有效迭代、工作量或成效；站名相近不代表已證實的承接關係。  
  **Reading limits:** creation is not the start of the research; last update is not necessarily the last content change; saved versions are not meaningful iterations, effort, or impact; similar names do not establish lineage.

### 從追蹤到案例  
### From Tracking to Cases

`tracking/` 只記錄事實（時間、次數、版本）。要寫成作品集案例時，再補以下欄位，詳細內容放在 `archive/`：  
`tracking/` records facts only (dates, counts, versions). When a project becomes a portfolio case, add the following fields, with details under `archive/`:

1. 當時的問題 / original question
2. 實際修改 / implemented change
3. 測試或使用中的觀察 / test or use observation
4. 保留或改變的想法 / ideas retained or changed
5. 證據位置，以及已確認／推測／待查 / evidence location and confirmed / inferred / open status

比對 GPT Sites 與其他平台的證據時，不能只憑名稱、日期接近或版本數推出承接關係；對不上的地方寫進 `tracking/2026-activity.md` 的「待確認」。  
When comparing GPT Sites with other platforms, names, adjacent dates, or version counts alone cannot establish lineage; record mismatches under "待確認" in `tracking/2026-activity.md`.

### 目前進度  
### Current Status

- GPT：14 個 Sites 的 metadata 與版本清單已完成（C 表）；下一步是核對各版的具體修改。  
  GPT: metadata and version lists for all 14 Sites are complete (table C); next is verifying concrete changes per version.
- Claude：GitHub（10 個 repo、全分支）與 Base44（4 個帳號、46 個 app）已完成（A、B 表）；沒有 repo 的 Cloudflare 部署（D 表）待補。  
  Claude: GitHub (10 repositories, all branches) and Base44 (4 accounts, 46 apps) are complete (tables A and B); Cloudflare deployments without a repository (table D) are pending.
- Portfolio V1 的介面與程式碼維持凍結。目前沒有自動同步或排程。  
  The Portfolio V1 interface and code remain frozen. No automatic synchronization or scheduling is set up.

## 舊版技術備註  
## Legacy Technical Notes

Portfolio V1 目前仍保留 React + Vite + Tailwind 架構，最初由 Base44 產生。  
Portfolio V1 remains a React + Vite + Tailwind application originally generated through Base44.

Base44 時期留下的 authentication / SDK 等程式碼，暫時會和 V1 一起保留，直到新版 Portfolio 的架構正式取代它。  
Base44-era authentication / SDK code will remain with V1 for now, until the rebuilt portfolio formally replaces the old application structure.
