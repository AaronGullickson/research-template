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

// Clean all files from data/data_constructed except README.md
try {
  for await (const entry of Deno.readDir("data/data_constructed")) {
    if (entry.name !== "README.md") {
      const path = `data/data_constructed/${entry.name}`;
      const info = await Deno.lstat(path);
      if (info.isDirectory) {
        await Deno.remove(path, { recursive: true });
      } else {
        await Deno.remove(path);
      }
    }
  }
} catch (error) {
  if (error instanceof Deno.errors.NotFound) {
    // If the directory doesn't exist, create it
    await Deno.mkdir("data/data_constructed", { recursive: true });
  } else {
    throw error;
  }
}


//remove the _products directory
try {
  Deno.removeSync("_products", { recursive: true });
} catch(error) {
  //directory does not exist
}