#!/bin/bash

# Clone your Neovim configuration
git clone https://github.com/Scapy47/nvim-config.git "${XDG_CONFIG_HOME:-$HOME/.config}"/nvim && nvim --headless -c 'autocmd User PackerComplete quitall' -c 'PackerSync'

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

# Set up a sample Manim project
mkdir -p /home/nvimuser/workspace/src/manim
echo "from manim import *\n\nclass SquareToCircle(Scene):\n    def construct(self):\n        circle = Circle()\n        square = Square()\n        self.play(Create(square))\n        self.play(Transform(square, circle))\n        self.wait()" > /home/nvimuser/workspace/src/manim/example.py

# Ensure Neovim config permissions
sudo chown -R nvimuser:nvimuser /home/nvimuser/.config/nvim

echo "Neovim Dev Container setup complete!"
