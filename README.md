# Gabriel Chung — Portfolio Archive / Rebuild in Progress

This repository contains the frozen first version of my product-design portfolio and the research archive now being used to rebuild it.

## Current status

- **Portfolio V1 (June 2026): frozen.** The Base44-generated site and its original code are preserved as historical evidence.
- **Legacy Vercel deployment:** no longer treated as the canonical portfolio. Historical URL: `gabriel-chung-portfolio.vercel.app`.
- **Personal Site / Personal Studio:** treated as a Control Room-related experiment / branch, not the canonical replacement portfolio.
- **Next version:** will be rebuilt in this repository after the current project and research archive is reorganized.

The V1 interface should remain distinguishable from the later reconstruction work.

## Why keep V1

The first portfolio captured an early framing of the work: designing systems for messy human thinking.

Its early cases already touched:

- natural-language / ideation workflows;
- card-game reasoning and review;
- research-to-product workflows.

Later projects — including Control Room, Global Project Overview, Research Thread, Semantic Weave and domain-specific research tools — grew from problems already visible in that first version.

## Historical research archive

```text
archive/
└── gpt-site-research/
    ├── README.md
    ├── research-sequence-v1.md
    └── portfolio-reference-notes.md
```

The archive documents a GPT-assisted prototyping period that included:

- Capture / Craft / Publish (IdeaFlow)
- Thought Flow / Transcript research
- Inside Decision OS
- Competitive Decision / Shadowverse research
- the later transition toward Research Thread, Semantic Weave, GPO and Control Room

The archive is **not** a claim that every historical prototype is still an active product. It is source material for deciding what belongs in the rebuilt portfolio.

## Rebuild principle

The new portfolio should not be a gallery of every website I made.

It should show:

1. what problem I was investigating;
2. what prototype made the problem testable;
3. what evidence or friction appeared;
4. what changed in the next iteration;
5. which ideas survived into later systems.

## Legacy technical note

Portfolio V1 remains React + Vite + Tailwind and was originally generated through Base44. Base44-era auth / SDK code can remain as part of the frozen implementation until the rebuild replaces the old application structure.
