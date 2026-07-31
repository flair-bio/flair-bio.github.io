// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-home",
          title: "Home",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "Whether it&#39;s accelerating computations with GPUs, creating impactful visualizations, or writing memorable papers, these notebooks are designed to be hands-on and immediately useful.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-datasets-amp-models",
          title: "Datasets &amp; Models",
          description: "We believe in open science and every project from the lab is released under the MIT license.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/software/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-new-preprint-copep-benchmarking-continual-pretraining-for-protein-language-models-spanning-a-decade-of-uniprot-updates-and-31-protein-tasks-copep-shows-that-continual-learning-can-leverage-temporal-information-to-outperform-naive-pre-training-at-scale-with-darshan-patil-pranshu-malviya-mathieu-reymond-and-sarath-chandar-in-collaboration-with-genentech",
          title: 'New preprint: CoPeP: Benchmarking Continual Pretraining for Protein Language Models. Spanning a decade...',
          description: "",
          section: "News",},{id: "news-proud-to-see-lola-le-breton-present-neobert-a-next-generation-bert-at-iclr-2026-as-part-of-the-tmlr-journal-track-neobert-brings-modern-architecture-data-and-pre-training-to-encoders-achieving-state-of-the-art-results-on-mteb-with-just-250m-parameters-with-john-x-morris-mariam-el-mezouar-and-sarath-chandar",
          title: 'Proud to see Lola Le Breton present NeoBERT: A Next Generation BERT at...',
          description: "",
          section: "News",},{id: "news-new-preprint-a-systematic-analysis-of-machine-learning-pipelines-for-robust-antimicrobial-resistance-prediction-across-nine-clinically-relevant-species-antibiotic-combinations-choices-such-as-k-mer-length-can-shift-f1-scores-by-over-20-points-while-tree-based-models-remain-robust-and-interpretable-with-alex-aselstyne-enamundram-naga-karthik-meriem-el-azami-romain-pogorelcnik-and-sarath-chandar-in-collaboration-with-biomérieux",
          title: 'New preprint: A systematic analysis of machine learning pipelines for robust antimicrobial resistance...',
          description: "",
          section: "News",},{id: "news-new-preprint-high-resolution-dissection-of-concept-acquisition-in-different-families-of-protein-language-models-layer-by-layer-analysis-of-esm2-and-amplify-maps-a-progression-from-physicochemical-properties-and-motifs-to-secondary-structure-and-domain-level-semantics-revealing-that-data-and-compute-shape-concept-emergence-more-than-model-size-with-shawn-whitfield-tom-marty-robert-vernon-christopher-langmead-and-dhanya-sridhar-in-collaboration-with-amgen",
          title: 'New preprint: High-resolution dissection of concept acquisition in different families of protein language...',
          description: "",
          section: "News",},{id: "news-new-preprint-plm-representations-unlock-metagenomic-space-beyond-homology-pre-training-100-protein-language-models-reveals-how-training-data-controls-the-trade-off-between-evolutionary-calibration-and-structural-modeling-enabling-the-retrieval-and-in-silico-validation-of-diverse-enzyme-candidates-from-billions-of-metagenomic-sequences-with-lola-le-breton-david-heurtel-depeiges-douglas-millar-lara-zetzsche-robert-vernon-christopher-langmead-and-sarath-chandar-in-collaboration-with-amgen",
          title: 'New preprint: pLM representations unlock metagenomic space beyond homology. Pre-training 100 protein language...',
          description: "",
          section: "News",},];
