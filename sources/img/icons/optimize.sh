#!/bin/sh
# Compress PNG images. Requires https://github.com/oxipng/oxipng
oxipng.exe \
    --opt max \
    --strip safe \
    --alpha \
    --interlace off \
    --zopfli --zi 50 --ziwi 30 \
    --preserve \
    -vv \
    "$1"
