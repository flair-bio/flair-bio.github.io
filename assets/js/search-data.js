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
        },{id: "news-new-preprint-structure-aligned-protein-language-model-we-bring-3d-structural-information-into-protein-language-models-via-a-lightweight-post-training-with-can-chen-david-heurtel-depeiges-robert-m-vernon-christopher-james-langmead-and-yoshua-bengio-in-collaboration-with-amgen",
          title: 'New preprint: Structure-Aligned Protein Language Model. We bring 3D structural information into protein...',
          description: "",
          section: "News",},{id: "news-new-preprint-copep-benchmarking-continual-pretraining-for-protein-language-models-a-benchmark-for-studying-how-protein-language-models-can-keep-up-with-new-data-without-retraining-from-scratch-with-darshan-patil-pranshu-malviya-mathieu-reymond-and-sarath-chandar-in-collaboration-with-genentech",
          title: 'New preprint: CoPeP: Benchmarking Continual Pretraining for Protein Language Models. A benchmark for...',
          description: "",
          section: "News",},{id: "news-proud-of-lola-le-breton-who-presented-neobert-a-next-generation-bert-at-iclr-2026-as-part-of-the-tmlr-journal-track-with-john-x-morris-mariam-el-mezouar-and-sarath-chandar",
          title: 'Proud of Lola Le Breton, who presented NeoBERT: A Next Generation BERT at...',
          description: "",
          section: "News",},{id: "news-new-preprint-a-systematic-analysis-of-machine-learning-pipelines-for-robust-antimicrobial-resistance-prediction-we-identify-what-design-choices-matter-for-genomic-antimicrobial-resistance-prediction-with-alex-aselstyne-enamundram-naga-karthik-meriem-el-azami-romain-pogorelcnik-and-sarath-chandar-in-collaboration-with-biomérieux",
          title: 'New preprint: A systematic analysis of machine learning pipelines for robust antimicrobial resistance...',
          description: "",
          section: "News",},{id: "news-new-preprint-high-resolution-dissection-of-concept-acquisition-in-different-families-of-protein-language-models-we-map-where-biological-concepts-emerge-in-esm2-and-amplify-from-physicochemical-properties-to-structure-and-find-that-data-and-compute-matter-more-than-model-size-with-shawn-t-whitfield-tom-marty-robert-m-vernon-christopher-james-langmead-and-dhanya-sridhar-in-collaboration-with-amgen",
          title: 'New preprint: High-resolution dissection of concept acquisition in different families of protein language...',
          description: "",
          section: "News",},];
