
This repository is a template repository for a research project using a [Quarto Project](https://quarto.org/docs/projects/quarto-projects.html) and a [Reproducible Research Workflow](#a-reproducible-research-workflow) geared for open science. This template serves as a good project base for anyone using R as their primary language for conducting research, but could be retooled for other languages supported by [Quarto](https://quarto.org), like Python and Julia.

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
9. Dump some raw data into into `data/data_raw` and start coding!

You may also want to update the extensions that are included with the project when you start it. To do this type into the Terminal:

```bash
quarto update AaronGullickson/aog-article-quarto
quarto update AaronGullickson/submittable-quarto
```

## A Reproducible Research Workflow

### Three Phases

This workflow assumes that a research project can generally be divided into three distinct phases. These phases are:

<dl>
  <dt>Generating Analytical Data</dt>
  <dd>In this phase, raw data sources are converted into an analytical dataset or datasets that provide the necessary variables and data cleaning for researchers to conduct the research. This step is often called "data cleaning" but can involve many different activities such as recoding variables, imputing missing values, subsetting data, aggregating data, merging two or more data sources, and reshaping data. Regardless of the specific activity, researchers should always **check themselves before they wreck themselves** to ensure none of these procedures create errors. 
 Although sometimes characterized as the "drudgery" phase of analysis, this phase is absolutely critical to a successful data analysis. Moreover, the decisions made at this stage often reflect important conceptual and theoretical issues related to the broader research questions and thus it should not be seen as simple preparatory work for the actual analysis, but in fact, a key part of the overall project itself.</dd>
    <dt>Performing the Analysis</dt>
    <dd>In this phase, the researchers use the constructed analytical data to perform the main analysis. This may include, among other things, exploratory work using data visualizations, the creation of simple statistical summaries, the creation of complex models. In doing this analysis, the researchers may create many data artifacts such as log files, model output, lab notebooks, etc. As I explain below, these artifacts are never the product of the work, and are instead potential sources of danger because some artifacts may not be up to date with the most iteration of a project.</dd>
    <dt>Creating Final Products</dt>
    <dd>The final products of a research project might be a manuscript for journal submission, a research report, a presentation, a poster, etc. In this phase, the output of the previous phase is typically converted into a more public facing document. Traditionally, errors in transcription are a real concern in this phase as researchers translate things like model output to tables in the final products. Additionally, versioning errors can be an issue here because some of the research artifacts from the previous phase may not reflect the most recent iteration of the analytical data.</dd>
</dl>

Importantly, this workflow should be **iterative** as earlier phases are revisited based on extensions or expansions in the project. For example, the researchers may only initially use a few variables and/or observations from the raw data to quickly get a skeleton analysis together with the key variables and models. From this point, they may then go back to the first phase to add in additional variables, observations, deal with missing values, etc. Good programming practices in setting up the structure of the workflow will make this iterative procsess easier later in the project.

### The Principles of a Reproducible Research Workflow

In a reproducible research workflow, we use scripting and reproducible reports to reduce the potential for versioning and transcription errors at each phase of the workflow. This workflow is visualized in the flowchart below.

```mermaid
flowchart LR
    A((Raw Data)):::real --> B[Data Organization\nScripts]:::real
    B([Data Organization\nScripts]):::real --> C((Analytical\nData)):::artifact
    C((Analytical\nData)):::artifact --> D([Analysis Scripts]):::real
    C((Analytical\nData)):::artifact --> E([Reproducible Reports]):::real
    D([Analysis Scripts]):::real -->  F[Intermediate Output]:::artifact
    E([Reproducible Reports]):::real --> G[Final Products]:::artifact
    D([Analysis Scripts]):::real --> E([Reproducible Reports]):::real
    
    classDef real fill:green,color:#fff
    classDef artifact fill:yellow,color:#000
```

<dl>
  <dt>Raw Data</dt>
  <dd>The external data to be analyzed. To ensure reproducibility, these files should never be edited and they should be placed in a dedicated subdirectory used only for raw data sources.</dd>
  <dt>Data Organization Scripts</dt>
  <dd>Script or scripts that transform/wrangle the original raw data into the analytical data that will actually be analyzed. This process may include recoding, subsetting, imputing missing values, merging, reshaping, etc.</dd>
  <dt>Analytical Data</dt>
  <dd>The product of the data organization scripts. These files will typically be stored in binary format and should be placed in a different location than raw data to avoid confusion. The analytical data is an *artifact* and thus a potential source of error.</dd>
  <dt>Analysis Scripts</dt>
  <dd>The scripts that load in the analytical data and perform the analysis which may involve creating tables and figures, summarizing, aggregating, and the creation of models, among other things.</dd>
  <dt>Reproducible Reports</dt>
  <dd>Reports that will generate final products such as research manuscripts, reports, presentations, and posters. These files run integrated code to produce consistent results programmatically (e.g. Quarto, R Markdown, or Sweave documents).</dd>
  <dt>Intermediate Output</dt>
  <dd>Output created in the process of analysis. This could include log files, figure images, text output of model results, etc. All of these files are *artifacts* and thus a potential source of error.</dd>
  <dt>Final Products</dt>
  <dd>Final polished products for external audience produced by the reproducible reports. This could include research manuscripts, reports, presentations, or posters.</dd>
</dl>

Everything shown above in green is the *real* part of your workflow. This includes the raw data, the scripts, and the reproducible reports. The remaining *yellow* parts are artifacts and should be reproducible at any point fom the real part of your workflow. You should feel comfortable deleting the yellow parts at any point because they can be reproduced by the green parts. In fact, you should make it a regular practice to delete all the yellow parts and rerun your analysis from the start on a regular basis to ensure artifacts are not affecting your results.