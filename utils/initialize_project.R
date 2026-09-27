# initialize_project.R 

# This script will be run whenever the full quarto project is rendered or an
# individual quarto file is rendered. It can also be sourced manually.

# Load libraries ----------------------------------------------------------

library(here)
library(fs)
library(yaml)
library(purrr)
library(stringr)

# Check Package Dependencies ----------------------------------------------

# deal with dependencies on linux where packages need to be built from scratch
if(Sys.info()[["sysname"]] == "Linux") {
  Sys.setenv(DOWNLOAD_STATIC_LIBV8 = "1")
}

# run renv::restore() to check package dependencies in renv.lock
renv::restore(prompt = FALSE)

# Remove Artifacts --------------------------------------------------------

# only remove artifacts on a full project quarto render
if (nzchar(Sys.getenv("QUARTO_PROJECT_RENDER_ALL"))) {

  # remove constructed data but leave README
  dir_ls(here("data", "data_constructed"), recurse = FALSE) |>
    discard(~str_detect(.x, "README.md$")) |>
    file_delete()
  
  # remove existing quarto output directory
  output_dir <- read_yaml(here("_quarto.yml"))$project$`output-dir`
  if(dir_exists(here(output_dir))) {
    dir_delete(here(output_dir))
  }
}