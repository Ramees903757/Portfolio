import { access, copyFile, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const clientRoot = path.resolve("dist/client");
const prefixedAssets = path.join(clientRoot, "Portfolio", "_next");
const assets = path.join(clientRoot, "_next");

await access(path.join(clientRoot, "index.html"));
await access(prefixedAssets);

await rm(assets, { force: true, recursive: true });
await rename(prefixedAssets, assets);
await rm(path.join(clientRoot, "Portfolio"), { force: true, recursive: true });

function rewritePublicAssetUrls(contents) {
  return contents
    .replaceAll('"/favicon.svg"', '"/Portfolio/favicon.svg"')
    .replaceAll('\\"/favicon.svg\\"', '\\"/Portfolio/favicon.svg\\"');
}

const indexPath = path.join(clientRoot, "index.html");
const indexHtml = rewritePublicAssetUrls(await readFile(indexPath, "utf8"));

await writeFile(indexPath, indexHtml);
const rscPath = path.join(clientRoot, "index.rsc");
await writeFile(rscPath, rewritePublicAssetUrls(await readFile(rscPath, "utf8")));
await copyFile(indexPath, path.join(clientRoot, "404.html"));
await mkdir(clientRoot, { recursive: true });
await writeFile(path.join(clientRoot, ".nojekyll"), "");

console.log("Prepared dist/client for https://ramees903757.github.io/Portfolio/");
