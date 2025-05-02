# Dockerfile
FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu

# Install essential packages
RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y clang curl git \
    && rm -rf /var/lib/apt/lists/*

# Install Homebrew non-interactively
RUN NONINTERACTIVE=1 CI=1 \
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Add Homebrew to PATH
ENV PATH="/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:${PATH}"

# Install tools via brew
RUN brew install neovim deno uv

# Configure Neovim
RUN git clone https://github.com/Scapy47/nvim.config.git \  
    "${XDG_CONFIG_HOME:-/home/vscode/.config}/nvim"
