#!/bin/bash
rm -r site/*
cd no-upload
npx eleventy
cd ..
