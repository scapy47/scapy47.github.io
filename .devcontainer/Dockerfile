# Use the latest Fedora base image
FROM fedora:latest

# Install basic dependencies and Neovim
RUN dnf update -y && \
    dnf install -y \
        git \
        curl \
        unzip \
        sudo \
        gcc \
        gcc-c++ \
        make \
        python3 \
        python3-pip \
        nodejs \
        npm \
        ffmpeg \
        texlive \
        texlive-latex \
        texlive-cm-super \
        texlive-dvisvgm \
        texlive-fonts-extra \
        cairo-devel \
        pkgconf-pkg-config \
        libjpeg-turbo-devel \
        libpng-devel \
        neovim \
        ripgrep \
        fd-find \
        lua \
        && dnf clean all

# Install Deno
RUN curl -fsSL https://deno.land/x/install/install.sh | sh

# Install Python dependencies for Manim
RUN pip3 install --no-cache-dir manim

# Create a non-root user
ARG USERNAME=nvimuser
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN groupadd --gid $USER_GID $USERNAME && \
    useradd --uid $USER_UID --gid $USER_GID -m $USERNAME && \
    echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers.d/$USERNAME && \
    chmod 0440 /etc/sudoers.d/$USERNAME

# Switch to non-root user
USER $USERNAME
WORKDIR /home/$USERNAME/workspace

# Update PATH for Deno and Python user binaries
ENV PATH="/home/$USERNAME/.deno/bin:/home/$USERNAME/.local/bin:$PATH"
