#!/bin/bash

sudo apt update && sudo apt upgrade

sudo apt install -y 
         \ clang


yes | curl -LsSf https://astral.sh/uv/install.sh | sh
sudo apt install build-essential python3-dev libcairo2-dev libpango1.0-dev texlive-full
manim --version

yes | curl -fsSL https://deno.land/install.sh | sh

