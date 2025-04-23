#!/bin/bash


sudo apt update && sudo apt upgrade -y

NONINTERACTIVE=1 CI=1 curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh | bash
echo "# brew" >> ~/.bashrc 
echo >> ~/.bashrc 
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.bashrc 
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

sudo apt install -y 
          \ clang

sudo brew install
          \ neovim
          \ deno
          \ uv

git clone https://github.com/Scapy47/nvim.config.git "${XDG_CONFIG_HOME:-$HOME/.config}"/nvim
