<p align="center">
  <img src="assets/readme-hero.svg" width="100%" alt="KAMPO — Systems with proof">
</p>

<p align="center">
  <a href="https://velizmurillofrabrizzio-lab.github.io/daruma.github.io/"><strong>Website</strong></a> ·
  <a href="https://velizmurillofrabrizzio-lab.github.io/daruma.github.io/case-study-dispatcher.html"><strong>Case study</strong></a> ·
  <a href="https://velizmurillofrabrizzio-lab.github.io/daruma.github.io/presentation.html"><strong>Company deck</strong></a>
</p>

# KAMPO portfolio

The source for KAMPO's public portfolio: a static, accessible site that presents the studio, its operating model, selected system work and an honest index of public engineering repositories.

## Positioning

KAMPO is a founder-led systems practice directed by **Yosimar**. We explore automation, programmed agents and integrations where decision logic, operational boundaries and system state can be inspected.

The portfolio deliberately distinguishes:

- concept architecture from executable software;
- reference implementations from production systems;
- functional responsibilities from fictitious headcount;
- verified repository contents from future roadmap.

## Information architecture

| Route | Purpose |
| --- | --- |
| [`index.html`](index.html) | Positioning, selected work, repositories, process, capabilities and company structure. |
| [`case-study-dispatcher.html`](case-study-dispatcher.html) | Deep case study covering the problem, architecture, control model, failures and evidence boundary. |
| [`presentation.html`](presentation.html) | Full-screen view of the 17-page KAMPO company presentation. |
| [`404.html`](404.html) | Recovery page for unknown routes. |

## Technical profile

- Static HTML, CSS and small progressive JavaScript; no build step.
- Responsive layouts for desktop, tablet and mobile.
- Semantic landmarks, skip link and reduced-motion support.
- GitHub Actions deployment through the official Pages actions.
- No API keys, analytics trackers or client data.

## Local review

```bash
git clone https://github.com/velizmurillofrabrizzio-lab/daruma.github.io.git
cd daruma.github.io
python -m http.server 8000
```

Open `http://127.0.0.1:8000/`. The Canva embed requires internet access; the rest of the site remains static.

## Publication

The workflow at `.github/workflows/pages.yml` publishes the repository root to GitHub Pages on every push to `main`. In repository settings, Pages must use **GitHub Actions** as its source.

Expected public routes:

- `https://velizmurillofrabrizzio-lab.github.io/daruma.github.io/`
- `https://velizmurillofrabrizzio-lab.github.io/daruma.github.io/case-study-dispatcher.html`
- `https://velizmurillofrabrizzio-lab.github.io/daruma.github.io/presentation.html`

## Content policy

This repository does not claim client outcomes, uptime, test coverage or organizational headcount without public evidence. Project maturity labels are intentional and should remain visible when content changes.

## Public systems lab

- [KAMPO Automation Toolkit](https://github.com/velizmurillofrabrizzio-lab/n8n-automation-toolkit)
- [DARUMA Methodology](https://github.com/velizmurillofrabrizzio-lab/daruma-methodology)
- [KAMPO Messaging Systems](https://github.com/velizmurillofrabrizzio-lab/whatsapp-telegram-bot-factory)
- [KAMPO Data Extraction API](https://github.com/velizmurillofrabrizzio-lab/scraper-api-engine)

---

**KAMPO** — Systems with proof.
