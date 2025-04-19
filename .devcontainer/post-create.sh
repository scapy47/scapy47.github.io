#!/bin/bash

# Clone your Neovim configuration
git clone https://github.com/Scapy47/nvim-config.git "${XDG_CONFIG_HOME:-$HOME/.config}"/nvim && nvim --headless

# Install common LSP servers (adjust based on your config's needs)
npm install -g typescript-language-server # For TypeScript/JavaScript
pip3 install --user pyright # For Python
# Deno LSP (denols) is built into Deno, already installed

# Verify installations
node --version
deno --version
python3 --version
manim --version
nvim --version

echo "Neovim Dev Container setup complete!"
