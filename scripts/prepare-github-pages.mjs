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

const indexPath = path.join(clientRoot, "index.html");
const indexHtml = (await readFile(indexPath, "utf8")).replaceAll(
  'href="/favicon.svg"',
  'href="/Portfolio/favicon.svg"',
);

await writeFile(indexPath, indexHtml);
await copyFile(indexPath, path.join(clientRoot, "404.html"));
await mkdir(clientRoot, { recursive: true });
await writeFile(path.join(clientRoot, ".nojekyll"), "");

console.log("Prepared dist/client for https://ramees903757.github.io/Portfolio/");
