#!/bin/bash

sudo apt update && sudo apt upgrade -y

sudo apt install -y 
	\ clang

yes | curl -fsSL https://deno.land/install.sh | sh

echo "Setting up Homebrew directories..."
mkdir -p /home/linuxbrew/.linuxbrew/bin
ln -s /home/linuxbrew/.linuxbrew/Homebrew/bin/brew /home/linuxbrew/.linuxbrew/bin/brew

echo "Adding Homebrew to shell environment..."
{
  echo '# Homebrew setup'
  echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"'
} >> ~/.bashrc

eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

echo "Updating Homebrew..."
brew update --force --quiet

echo "Securing permissions..."
chmod -R go-w "$(brew --prefix)/share/zsh"

echo "Homebrew installation complete!"
brew --version
