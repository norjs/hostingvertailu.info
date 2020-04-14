#!/bin/bash
set -e
cd $(dirname "$0")/../..

./scripts/bin/compile-scss-variables.sh
./scripts/bin/compile-services.sh
