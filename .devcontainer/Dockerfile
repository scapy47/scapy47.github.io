# Fedora base image
FROM ubuntu:latest

# Define arguments for username and group if needed
ARG USERNAME=scapy47
ARG USERGROUP=codespace
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN apt update
RUN apt upgrade -y
RUN apt install -y
        \ clang
        \ python-dev
        \ uv
        \ pkg-config 
        \ cairo-devel 
        \ pango-devel
        \ texlive-scheme-full
        \ nodejs
        \ neovim
        \ openssh
    && apt autoclean
    && apt autopurge


RUN groupadd --gid $USER_GID $USERGROUP \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    # Add user to sudoers (optional, but common in dev containers)
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

USER $USERNAME
ENV HOME=/home/$USERNAME

RUN curl -fsSL https://deno.land/install.sh | sh
CMD [ "/bin/bash" ]
