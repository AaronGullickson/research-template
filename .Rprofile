source("renv/activate.R")

# deal with dependencies on linux where packages need to be built from scratch
if(Sys.info()[["sysname"]] == "Linux") {
  Sys.setenv(DOWNLOAD_STATIC_LIBV8 = "1")
}
