/* 
* remove_artifacts.ts
* 
* This script will remove constructed files from previous runs so that the 
* analysis will not be affected by any artifacts.
*/

//only run this script when the entire project is being rendered
if (!Deno.env.get("QUARTO_PROJECT_RENDER_ALL")) {
  Deno.exit();
}

//remove and replace the data_constructed directory
try {
  Deno.removeSync("data/data_constructed", { recursive: true });
  Deno.mkdir("data/data_constructed");
} catch(error) {
  //directory does not exist
  Deno.mkdir("data/data_constructed");
}

//remove the _products directory
try {
  Deno.removeSync("_products", { recursive: true });
} catch(error) {
  //directory does not exist
}