import pkg from "../package.json"

const scope = pkg.docker.scope;
const imageName = pkg.docker.imageName;

await $`docker build . -t ghcr.io/${scope}/${imageName}:${pkg.version} --no-cache`;
await $`docker tag ghcr.io/${scope}/${imageName}:${pkg.version} ghcr.io/${scope}/${imageName}:latest`;
