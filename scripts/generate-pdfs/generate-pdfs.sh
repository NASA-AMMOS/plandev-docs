#!/bin/bash

# This script uses a Docusaurus-based wrapper around the Prince PDF tool to convert our documentation into PDFs.
# See the 'generate-pdfs.yml' workflow file to see how it is called in GH Actions.
# We assume you have Prince installed, and it's on your PATH.
# For more information about Prince see: https://www.princexml.com/

# To more easily build a list of files to include in each PDF you can use the following command:
# npx docusaurus-prince-pdf -u http://localhost:3000/plandev-docs/introduction/
# This will output a .txt index of all files under plandev-docs/introduction.

# Preprocess txt files to resolve the COVER_PAGE placeholder to an absolute file:// path
COVER_PAGE_PATH="file://$(pwd)/static/mgss-cover-page.html"
SCRIPT_DIR="$(dirname "$0")"
TEMP_DIR=$(mktemp -d)

for txt_file in "$SCRIPT_DIR"/*.txt; do
  filename=$(basename "$txt_file")
  sed "s|COVER_PAGE|$COVER_PAGE_PATH|g" "$txt_file" > "$TEMP_DIR/$filename"
done

# Plandev API
npx docusaurus-prince-pdf \
  --pdf-only \
  -u http://localhost:3000/plandev-docs/api/introduction/ \
  -f "$TEMP_DIR/plandev-api.txt" \
  -o pdf/plandev-api.pdf

# Plandev Concept of Operations
npx docusaurus-prince-pdf \
  --pdf-only \
  -u http://localhost:3000/plandev-docs/overview/concept-of-operations/ \
  -f "$TEMP_DIR/plandev-concept-of-operations.txt" \
  -o pdf/plandev-concept-of-operations.pdf

# Plandev Mission Modeling Guide
npx docusaurus-prince-pdf \
  --pdf-only \
  -u http://localhost:3000/plandev-docs/mission-modeling/introduction/ \
  -f "$TEMP_DIR/plandev-mission-modeling-guide.txt" \
  -o pdf/plandev-mission-modeling-guide.pdf

# Plandev Product Guide
npx docusaurus-prince-pdf \
  --pdf-only \
  -u http://localhost:3000/plandev-docs/category/deployment/ \
  -f "$TEMP_DIR/plandev-product-guide.txt" \
  -o pdf/plandev-product-guide.pdf

# Plandev Software Design Document
npx docusaurus-prince-pdf \
  --pdf-only \
  -u http://localhost:3000/plandev-docs/overview/software-design-document/ \
  -f "$TEMP_DIR/plandev-software-design-document.txt" \
  -o pdf/plandev-software-design-document.pdf

# Plandev Users Guide
npx docusaurus-prince-pdf \
  --pdf-only \
  -u http://localhost:3000/plandev-docs/introduction/ \
  -f "$TEMP_DIR/plandev-users-guide.txt" \
  -o pdf/plandev-users-guide.pdf

# Cleanup temp directory
rm -rf "$TEMP_DIR"

