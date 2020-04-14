#!/bin/bash
set -e
cd $(dirname "$0")/../..

./scripts/bin/generate-services-file.js > docs/_data/services.json
