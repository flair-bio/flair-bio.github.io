---
layout: page
permalink: /publications/
title: Publications
description: ""
nav: true
nav_order: 2
---

{% include bib_search.liquid %}

<h2>FLAIR Lab Publications</h2>

<div class="publications">

{% bibliography --group_by none -q @*[group=lab] %}

</div>

<h2>External Collaborations</h2>

<div class="publications">

{% bibliography --group_by none -q @*[group=collab] %}

</div>
