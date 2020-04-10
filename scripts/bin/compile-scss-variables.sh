#!/bin/bash
set -e

cd "$(dirname "$0")/../.."

test -d ./docs/_sass

./scripts/bin/generate-scss-variables-file.js > ./docs/_sass/variables.scss
./scripts/bin/generate-data-class-names-file.js > ./docs/_data/className.json
