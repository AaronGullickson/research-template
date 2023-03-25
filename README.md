
This repository is a template repository for a research project using a [Quarto Project](https://quarto.org/docs/projects/quarto-projects.html) and a [Reproducible Research Workflow](#a-reproducible-research-workflow) geared for open science. This template serves as a good project base for anyone using R as their primarily language for conducting research, but could be retooled for other languages supported by [Quarto](https://quarto.org), like Python and Julia.

## Quickstart

To start an actual research project with this template:

1. Click the green "Use this template" button above to create a new GitHub repository based on this template.
2. From GitHub, change the README file contents to describe your project.
3. Clone the generated repository to your own local machine. I usually do this via RStudio from File > New Project (or the Gelatinous Cube button), and then choose "From Version Control."
4. Change the name of the `research-template.Rproj` file in the local repository to the name of your project.
5. Open the project in RStudio. I usually do this by double-clicking the Rproj file.
6. From RStudio, open the `_quarto.yml` file and change the project title and author information. You can add multiple authors here if you like.
7. Go to `utils/check_packages.R` and add or remove any packages based on what your project requires. Source this file in to make sure you have all the dependencies installed.
8. In the upper right panel of RStudio, go to the Build tab and click "Render project." You will see how quarto runs through the entire project, script by script. Look at the `_products` directory for the output.

You may also want to update the extensions that are included with the project when you start it. To do this type into the Terminal:

```bash
quarto update AaronGullickson/aog-article-quarto
quarto update AaronGullickson/submittable-quarto
```

## A Reproducible Research Workflow

```mermaid
flowchart LR
    A((Raw Data)):::real --> B[Data Organization\nScripts]:::real
    B([Data Organization\nScripts]):::real --> C((Analytical\nData)):::artifact
    C((Analytical\nData)):::artifact --> D([Analysis Scripts]):::real
    C((Analytical\nData)):::artifact --> E([Reproducible Reports]):::real
    E([Reproducible Reports]):::real --> G[Final Products]:::artifact
    E([Reproducible Reports]):::real --> F[Intermediate Output]:::artifact
    D([Analysis Scripts]):::real --> F[Intermediate Output]:::artifact
    classDef real fill:green,color:#fff
    classDef artifact fill:yellow,color:#000
```

<dl>
  <dt>Raw Data</dt>
  <dd>The external data to be analyzed. To ensure reproducibility, these files should never be edited and they should be placed in a dedicated subdirectory for raw data sources.</dd>
  <dt>Data Organization Scripts</dt>
  <dd>Script or scripts that transform/wrangle the original raw data into the analytical data that will actually be analyzed. This process may include recoding, subsetting, imputing missing values, merging, reshaping, etc.</dd>
  <dt>Analytical Data</dt>
  <dd>The product of the data organization scripts. These files will typically be stored in binary format and should be placed in a different location than raw data to avoid confusion.</dd>
  <dt>Analysis Scripts</dt>
  <dd>The scripts that load in the analytical data and perform the analysis which may involve creating tables and figures, summarizing, aggregating, and the creation of models, among other things.</dd>
  <dt>Reproducible Reports</dt>
  <dd>Reports that will generate final products such as research manuscripts, reports, presentations, and posters. These run integrated code to produce consistent results programmatically (e.g. Quarto, R Markdown, or Sweave documents).</dd>
  <dt>Intermediate Output</dt>
  <dd>Output created in the process of analysis. This could include log files, figure images, text output of model results, etc.</dd>
  <dt>Final Products</dt>
  <dd>Final polished products for external audience produced by the reproducible reports. This could include research manuscripts, reports, presentations, or posters.</dd>
</dl>

### What is real about your workflow?

- Everything in green is what is real about your workflow. This includes all of the scripts, reproducible reports, and the raw data.
- Everything in yellow is an artifact produced at a certain point in time by the things that are real (i.e. your scripts and your raw data). 

If your workflow is reproducible then you should be able to delete all of the items in yellow at any time and exactly reproduce them via what is real.