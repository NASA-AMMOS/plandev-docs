#!/bin/bash
# Script to generate PNG diagrams from PlantUML files

set -e

# Check if plantuml is installed
if ! command -v plantuml &> /dev/null; then
    echo "Error: plantuml is not installed."
    echo ""
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo "On macOS, install it with:"
        echo "  brew install plantuml"
    elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]] || [[ "$OSTYPE" == "win32" ]]; then
        echo "On Windows, install it with:"
        echo "  choco install plantuml"
        echo "  # or download from https://plantuml.com/download"
    else
        echo "On Linux, install it with your package manager:"
        echo "  sudo apt install plantuml    # Debian/Ubuntu"
        echo "  sudo dnf install plantuml    # Fedora"
        echo "  sudo pacman -S plantuml      # Arch"
    fi
    exit 1
fi

# Get the repo root directory
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Find all .puml files and generate PNGs
echo "Scanning for PlantUML files..."
PUML_FILES=$(find "$REPO_ROOT" -name "*.puml" -type f)

if [[ -z "$PUML_FILES" ]]; then
    echo "No .puml files found."
    exit 0
fi

COUNT=0
for puml_file in $PUML_FILES; do
    echo "Generating PNG for: $puml_file"
    # Generate PNG in the same directory as the .puml file
    plantuml -tpng "$puml_file"
    COUNT=$((COUNT + 1))
done

echo ""
echo "Done! Generated $COUNT PNG diagram(s)."
