/* 
* remove_artifacts.ts
* 
* This script will remove constructed files from previous runs so that the 
* analysis will not be affected by any artifacts.
*/

//remove and replace the data_constructed directory
Deno.removeSync("data/data_constructed", { recursive: true });

//remove the _products directory
Deno.mkdir("data/data_constructed");
Deno.removeSync("_products", { recursive: true });