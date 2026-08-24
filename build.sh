#!/bin/bash
rm -r site/*
cd no-upload
npx eleventy --input site-in --output ../site
cd ..
