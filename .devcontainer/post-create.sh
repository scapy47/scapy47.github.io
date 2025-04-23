#!/bin/bash

sudo apt update && sudo apt upgrade -y

sudo apt install -y 
	\ clang

NONINTERACTIVE=1 CI=1 curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh | bash

sudo brew install
	\ neovim
        \ deno
	\ uv

git clone https://github.com/Scapy47/nvim.config.git "${XDG_CONFIG_HOME:-$HOME/.config}"/nvim
