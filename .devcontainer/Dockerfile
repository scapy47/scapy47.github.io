# Fedora base image
FROM fedora:42

RUN dnf upgrade
RUN dnf install -y 
        \ clang
        \ python-devel
        \ uv
        \ pkg-config 
        \ cairo-devel 
        \ pango-devel
        \ texlive-scheme-full
        \ nodejs
        \ neovim
        \ openssh
&& dnf clean all

RUN curl -fsSL https://deno.land/install.sh | sh
