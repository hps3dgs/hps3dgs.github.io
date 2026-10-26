# Hierarchical Prototype Sharing for 3D Gaussian Splatting Compression of Aerospace Objects

Project page and assets for the current T-ASE manuscript:

**Hierarchical Prototype Sharing for 3D Gaussian Splatting Compression of Aerospace Objects**

The site entry point is `index.html`. This is a buildless static site; no package installation is required.

## Preview

From this directory, run:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/. The chart frames resize automatically on narrow screens.

## Content sources (synchronized 2026-10-26)

- `../../tase/gs-zip.tex`: title, abstract, method, Table `tab:performance` Full rows, Table `tab:comparison`, pose results, and payload transfer estimates.
- `../../tase/fig/plot/THRESH.m` and `plot_ablation_codebook.m`: the fixed data arrays in `static/plots/ablation_curves.html`. Keep these arrays human-reviewable; no experiment JSON is loaded at runtime.
- `../../tase/fig/`: current pipeline, architecture, rate-distortion and trajectory figures, rendered as PNGs in `static/images/paper/`.
- `../../tase/fig/qual/`: the five current input/rendering pairs used by the image-comparison sliders. Their original bytes are preserved.
- `static/images/paper/source-manifest.json`: figure source hashes, output hashes, and dimensions.

The existing Bulma layout and SVG pan/zoom/reset charts are retained. Image sliders also support touch/pointer input and arrow keys. Existing animation files remain in `static/video/`; the page now displays the manuscript's current static comparisons, without attributing new model sizes to earlier animations.

## Interpretation and pending source questions

- Rendering metrics use the same 150 training/reconstruction views per sequence, then average across five sequences. They do not establish held-out novel-view generalization.
- The headline storage ratio is 24.73×. The mean of the five per-scene ratios is 23.96×. Preserve these aggregation definitions and do not recompute ratios from rounded displayed sizes.
- Both ablations share the exact default measurements at nominal tau_r=0.005 and K_m=4096. Proba-2 effective codebook caps are preserved in tooltips and notes.
- The current manuscript gives HAC + Ours storage ratios of 53.61× in `tab:comparison` and 53.95× in the transfer-time discussion. The website reports its consistent 41.10 dB / 0.33 MB results and omits its compression-ratio claim.
- The hybrid's primitive-count and retained-representation description require a separate implementation/provenance check. It is excluded from the explicit-primitive-count chart; the site makes no claim about its internal template/codebook retention.
- Transfer times are estimates at assumed effective payload rates, not measurements of a deployed link. Downstream pose results are limited to the three reported SS-1A cases.
- The paper link remains pending and the anonymous citation is provisional. The existing code and contact destinations are preserved.

This synchronization changes only website files. It does not modify or compile the manuscript, run experiments, commit, push, or deploy.
