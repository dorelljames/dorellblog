#!/bin/bash

cd content/blog
for file in ./*
do
    if [[ -f $file ]]; then
        NEW_DIR=$(echo $file | cut -c 14- | cut -d. -f1)
        echo $file
        mkdir -p $NEW_DIR
        mv $file $NEW_DIR/index.md
    fi
done
