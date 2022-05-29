import "zx/globals";
import fs from "fs";

const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));

const scope = pkg.docker.scope;
const imageName = pkg.docker.imageName;

await $`docker push ghcr.io/${scope}/${imageName}:${pkg.version}`;
await $`docker push ghcr.io/${scope}/${imageName}:latest`;
