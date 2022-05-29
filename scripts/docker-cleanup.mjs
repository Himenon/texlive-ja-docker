import pkg from "../package.json"

const scope = pkg.docker.scope;
const imageName = pkg.docker.imageName;

await $`docker rmi ghcr.io/${scope}/${imageName}:${pkg.version}`;
