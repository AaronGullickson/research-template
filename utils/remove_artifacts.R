######################
# remove_artifacts.R
# 
# This script will remove constructed files from previous runs so that the 
# analysis will not be affected by any artifacts.
######################

# add packages, mostly to have access to the fs package
library(here)
source(here("utils", "check_packages.R"))

# only run this script when the entire project is being rendered
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