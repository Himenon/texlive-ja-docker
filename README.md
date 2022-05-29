# @himenon/pdf-crop-margins

Docker image for: [abarker/pdfCropMargins](https://github.com/abarker/pdfCropMargins)

```bash
docker pull ghcr.io/himenon/pdf-crop-margins

docker run --rm -v $(pwd):/data -w /data ghcr.io/himenon/pdf-crop-margins pdf-crop-margins -v -p 0 -a -6 sample.pdf
```

## for loop oneliner sample

```bash
docker run --rm -v $(pwd):/data -w /data ghcr.io/himenon/pdf-crop-margins bash -c \"ls -1 *.pdf | grep -v \"cropped.pdf\" | xargs -L 1 pdf-crop-margins -v -p 0 -a -6\"
```

## LICENCE

[@himenon/pdf-crop-margins](https://github.com/Himenon/pdf-crop-margins)・MIT
