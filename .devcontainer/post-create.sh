#!/bin/bash

# Clone your Neovim configuration
git clone https://github.com/Scapy47/nvim-config.git "${XDG_CONFIG_HOME:-$HOME/.config}"/nvim && nvim --headless


# Verify installations
node --version
deno --version
python3 --version
manim --version
nvim --version

echo "Neovim Dev Container setup complete!"
