FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu


RUN sudo apt update && sudo apt upgrade -y

RUN sudo apt install -y 
	\ clang

RUN NONINTERACTIVE=1 CI=1 curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh | bash
RUN echo "# brew" >> ~/.bashrc 
    && echo >> ~/.bashrc 
    && echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.bashrc 
    && eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

RUN sudo brew install
              \ neovim
              \ deno
              \ uv
