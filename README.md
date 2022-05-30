# @himenon/texlive-ja

Docker image for: [abarker/pdfCropMargins](https://github.com/abarker/pdfCropMargins)

```bash
docker pull ghcr.io/himenon/texlive-ja

docker run --rm -v $(pwd):/data -w /data ghcr.io/himenon/texlive-ja texlive-ja -v -p 0 -a -6 sample.pdf
```

## for loop oneliner sample

```bash
docker run --rm -v $(pwd):/data -w /data ghcr.io/himenon/texlive-ja bash -c \"ls -1 *.pdf | grep -v \"cropped.pdf\" | xargs -L 1 texlive-ja -v -p 0 -a -6\"
```

## LICENCE

[@himenon/texlive-ja](https://github.com/Himenon/texlive-ja)・MIT

## Inspired

- https://github.com/wtsnjp/texlive-ja
