# GPT-side Product Research Sequence — V1

> This is a reconstruction of the **conceptual research sequence**, not a strict day-by-day chronology.

## 0. Starting condition

The recurring input was rarely a clean specification.

It was usually:

- long spoken thoughts;
- unfinished ideas;
- screenshots / links / documents;
- project updates;
- competitive-game observations;
- questions that changed while being discussed.

GPT was useful not because it immediately produced a finished answer, but because conversation could expose a possible structure before the structure was known.

---

## 1. Capture: can raw thought enter without being forced into a form?

### Prototypes / artifacts
- Ideation Landing Room
- Capture / Craft / Publish (IdeaFlow)

### Research question
Can a person capture material first and decide what it is later?

### What was explored
- raw-thought-first input
- quick capture
- lightweight inference for context / type / tags
- tracking material through a possible output pipeline
- related-item / constellation views
- Today Focus and bottleneck surfaces

### What this clarified
The interface should not require perfect categorization before capture.

However, a simple “idea → publish” pipeline is not enough for material whose meaning is still uncertain.

---

## 2. Meaning before summary: can long language preserve its reasoning path?

### Prototypes / artifacts
- Thought Flow
- Profile 07
- Transcript Lab
- Inside Ideation Loop
- AI-Assisted Transcript Structuring & Ambiguity Review

### Research question
What must be preserved before AI summarizes or rewrites a long piece of speech?

### Working pipeline
```text
Raw Transcript
→ Segmentation
→ Ambiguity Detection
→ Meaning Verification
→ Reasoning / Decision Path
→ Structured Review
```

### What this clarified
Useful structure is not only topic classification.

It also includes:
- sequence
- source segment
- ambiguity
- hesitation
- inferred meaning
- confidence
- review state
- usage context

This moved the work from “content cleanup” toward **traceable interpretation**.

---

## 3. From interpretation to an operating model: what becomes formal work?

### Prototype
- Inside Decision OS

### Research question
Once meaning has been extracted, how should it become continuing work without letting AI silently decide what is true?

### Model explored
```text
Capture
→ Draft Version / Draft Item
→ Human Review
→ Formal Record
→ Case / Thread / Decision
→ Output
→ Dispatch
```

### Important design rules
- raw Capture is preserved;
- model output remains a candidate until confirmation;
- Case is a meaning unit, not a project;
- Thread is continuing work across captures;
- Decision requires explicit user confirmation;
- Output must already exist;
- provenance and status history are retained;
- snapshots are projections / portable states, not a second source of truth.

### What this clarified
A complete personal work ontology is possible, but it creates substantial review and maintenance overhead.

This became one reason later tools moved toward smaller, more precise responsibilities.

---

## 4. Domain validation: does the structure survive real decision pressure?

### Prototypes / artifacts
- Competitive Decision Lab
- Shadowverse Prep Lab

### Research question
Can the same ideas work in a domain where evidence changes, repeated practice matters, and judgment remains uncertain?

### What was explored
- deck / archetype records
- environment snapshots
- matchup records
- ladder and practice logs
- daily slices
- notes and uncertainty
- Notion backup / export
- evidence-oriented reading hierarchy

### What this clarified
The system cannot only organize knowledge.

It must also support state changes over time, comparison between current and previous evidence, uncertainty, human judgment, repeated observation and a return to source material.

---

## 5. Multiple prototypes become a navigation problem

### Prototypes / artifacts
- Inside Workspace
- later Control Room

### Research question
What happens when the research itself produces too many tools?

### What this clarified
A layer is needed above individual tools:

- where am I?
- what changed?
- what is still active?
- what is historical?
- which tool owns which problem?

This is the beginning of the move from individual product prototypes toward a system-level observatory.

---

## 6. Decomposition: separate research context from semantic relations

### Later tools
- Research Thread
- Semantic Weave

### Research Thread
A lighter research skeleton:

```text
raw_context
current_frame
evidence_inbox
open_questions
research_notes
```

The focus shifts from “make this a formal work object” to “preserve what I am currently researching and how the understanding is changing.”

### Semantic Weave
A separate investigation into:
- sequence
- context
- association
- evidence
- provenance
- uncertainty
- composition

---

## 7. Meta-observation: use the system to study the system

### Later layer
- Global Project Overview
- Control Room / role continuity

### Research question
Across all these projects, what has actually been happening?

The system begins to support:

```text
What happened recently?
→ What persists across days?
→ Which roles / projects are connected?
→ Which tools are overlapping?
→ What should continue, merge, change or stop?
```

This is the point where product creation begins to turn into **product consolidation**.

---

# Reusable research pattern

Across the projects, the recurring GPT-assisted process can be summarized as:

```text
1. Speak / collect messy material
2. Use conversation to frame the problem
3. Make the frame explicit as a schema, prompt or workflow
4. Turn it into an interactive prototype
5. Use real material
6. Observe ambiguity / friction / missing states
7. Keep provenance and human review
8. Revise the data model
9. Decide whether to extend, split, merge or retire the tool
```

The portfolio should present this as a **research-through-prototyping practice**, not simply as a list of AI-generated websites.
