---
layout: page
title: Home
permalink: /
description: ""
nav: true
nav_order: 0

announcements:
  enabled: true
  scrollable: false
  limit: 5
---

<style>
.post > .post-header { display: none; }
.home-hero { padding: 1rem 0 1.5rem; margin-bottom: 1.25rem; position: relative; overflow: hidden; min-height: 320px; }
.home-eyebrow { font-size: var(--text-sm); font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase; color: var(--flair-purple); margin: 0 0 1rem; position: relative; z-index: 1; }
.home-display { font-size: 2.15rem; font-weight: 600; line-height: 1.15; color: var(--flair-near-black) !important; margin: 0 0 1rem; max-width: 22ch; letter-spacing: -0.01em; position: relative; z-index: 1; }
.home-display em { color: var(--flair-purple); font-style: normal; }
.home-support { font-size: 1.05rem; line-height: 1.55; color: var(--flair-near-black); margin: 0; max-width: 56ch; opacity: 0.85; position: relative; z-index: 1; }
.home-body { font-size: 1rem; line-height: 1.55; color: var(--flair-near-black); margin: 0 0 0.5rem; }
.home-secondary { font-size: var(--text-sm); font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase; color: var(--flair-purple); margin: 2rem 0 0.75rem; display: block; }

.home-decoration {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  transform: none;
  pointer-events: none;
  z-index: 0;
  width: 100%;
  font-family: 'Noto Sans Mono', 'SF Mono', monospace;
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--flair-purple);
  opacity: 0.18;
  letter-spacing: 0.12em;
  white-space: pre-wrap;
  word-break: normal;
  text-align: right;
  overflow: hidden;
  padding: 0.5rem 0;
  -webkit-mask-image: linear-gradient(60deg, transparent 0%, transparent 55%, black 92%, black 100%);
          mask-image: linear-gradient(60deg, transparent 0%, transparent 55%, black 92%, black 100%);
}

@media (max-width: 576px) { .home-display { font-size: 1.7rem; } }
@media (max-width: 768px) { .home-decoration { display: none; } }
</style>

<div class="home-hero">
  <p class="home-eyebrow">FLAIR Lab · Mila &amp; Université de Montréal</p>
  <h2 class="home-display">Machine learning for the <em>language of life</em>.</h2>
  <p class="home-support">We develop methods across the language modeling pipeline for biological sequences such as proteins, genomes, and transcriptomes, with applications in drug discovery.</p>
  <div class="home-decoration" aria-hidden="true">KRDDVYTLDEELPKRVKSRLSKASDMRFDGIFEDKEAIQQSKRQRVINSRYRGDYIEPVIYRAIME
FLDSGYDYKKCIGLKVKPRRGDGLLFYSLFPNGTIDRTSLHGSCPVIKGEKWVATKWIRDQEQHED
AIFQFGGLQRSDPLQRLLLEHGDVVVWGGESRLFYHGIQPLKAGHHPETGDCRYNLTFRQAGSRQY
SFSSGGENPHGVKAVTKGQRCAVALWFTLDPLYRELERIQADEVIAMLDQEHLGPSEMNINPKDEL
NLEQYPEYAQAKPLQCTVKAGEMLYLPSLWFHHVQQSHGCIAVNYWYDMEYDLKYSYYQLLDCLTK
WRLYKPTVHLAREYNVESEDRIGNPTHEFILKPGDLLYFPRGTIHQADTPLGVSYSTHVTISTYQN
PDFGAAIWPKKGTAVFWYNLFRSGEGDYRTRHAACPVLVGCKWVSNKWFHERGNEFLRPCGRTEVD
KSLAFFLCPKGDKVVSPPSELVDDLTPRIYPDFTWPMLLEFTQKHYRADMKTLEAFTNWLLQRKMS
RHRHGARATTSGNRVNLLLWCRSSVFREMKLYQKDFSSWCGECNREKKERQRSTVAATKLVCSFII
FFNPALDARLPLIELPAELAAQARGVTKDPSNPIHALYGENALKSRLRAHPDVAAIHHADLVGTPA
DDTAMELTFRLEPGEAFVVDNTRVLHARKGYSGEGTRWLQGCYADKDGLRSAHDAMCREGVLEAAE
</div>
</div>

<div class="home-news">
  <span class="home-secondary">Recent news</span>
  {% include news.liquid limit=true %}
</div>

<span class="home-secondary">Open positions</span>
<p class="home-body">We are recruiting one PhD student. <a href="/contact/">Get in touch</a>.</p>
