## What is Claude Code?

Sito statico a due pagine che presenta Claude Code e un confronto benchmark tra i principali tool AI per il coding.

---

## Struttura del progetto

```
📁 progetto/
├── index.html        # Home page — descrizione di Claude Code
├── grafici.html      # Pagina grafici — confronto tra AI coding tool
├── style.css         # Foglio di stile condiviso
├── charts.js         # Logica grafici (solo grafici.html)
└── claude-code.png   # Immagine nella home page
```

---

## Pagine

### Home
Presenta Claude Code con un titolo animato e un blocco testo + immagine affiancati.

### Confronto AI
Quattro grafici a barre che confrontano i principali tool AI per il coding su queste metriche:

| Grafico | Metrica |
|---|---|
| SWE-bench Verified | % di bug reali risolti su GitHub |
| Terminal-Bench 2.1 | % task completati da terminale |
| Prezzo mensile | Piano base a pagamento (USD) |
| Context window | Token massimi per sessione |

Tool confrontati: Claude Code, Cursor, GitHub Copilot, Gemini CLI, Codex CLI.
In fondo alla pagina un box evidenzia le limitazioni e i punti critici di Claude Code.

---

## Fonti dati

I dati dei grafici provengono da benchmark pubblici aggiornati a **giugno 2026**:

- **SWE-bench Verified** — [swebench.com](https://swebench.com) · [llm-stats.com](https://llm-stats.com)
- **Terminal-Bench 2.1** — [tbench.ai](https://tbench.ai)
- **Prezzi** — pagine ufficiali dei vendor
- **Context window** — documentazione ufficiale Anthropic, Google, OpenAI

> ⚠ I benchmark AI evolvono rapidamente. Verificare le fonti per i dati più aggiornati.

---

## Tecnologie

- HTML5 e CSS3 puro — nessun framework
- [Chart.js 4.4.1](https://www.chartjs.org/) per i grafici
- Font: Courier New, monospace
- Nessuna dipendenza npm, nessun build step

---


## Autore

Progetto scolastico — 2026
