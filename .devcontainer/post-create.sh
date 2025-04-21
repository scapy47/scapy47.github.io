#!/bin/bash

sudo apt update && sudo apt upgrade

sudo apt install -y 
         \ clang
         \ neovim

curl -LsSf https://astral.sh/uv/install.sh | sh
sudo apt install build-essential python3-dev libcairo2-dev libpango1.0-dev texlive-full
manim --version

curl -fsSL https://deno.land/install.sh | sh

# ~Manually install NeoVim
mkdir -p ~/.local
cd ~/.local
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim-linux-x86_64.appimage
chmod u+x nvim-linux-x86_64.appimage
./nvim-linux-x86_64.appimage --appimage-extract
mkdir ~/.local/bin
ln -s ~/.local/squashfs-root/AppRun ~/.local/bin/nvim
## configuration
git clone https://github.com/Scapy47/nvim.config.git "${XDG_CONFIG_HOME:-$HOME/.config}"/nvim
