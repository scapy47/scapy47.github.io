# Fedora base image
FROM fedora:42

# Define arguments for username and group if needed
ARG USERNAME=scapy47
ARG USERGROUP=codespace
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN dnf upgrade -y --refresh
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


RUN groupadd --gid $USER_GID $USERGROUP \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    # Add user to sudoers (optional, but common in dev containers)
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

RUN ssh-keygen -A \ 
    && mkdir -p /home/$USERNAME/.ssh \
    && touch /home/$USERNAME/.ssh/authorized_keys \
    && chmod 700 /home/$USERNAME/.ssh \
    && chmod 600 /home/$USERNAME/.ssh/authorized_keys \
    && chown -R $USERNAME:$USERGROUP /home/$USERNAME/.ssh \
    && echo "PubkeyAuthentication yes" >> /etc/ssh/sshd_config \
    && echo "PasswordAuthentication no" >> /etc/ssh/sshd_config \
    && echo "PermitRootLogin prohibit-password" >> /etc/ssh/sshd_config \
    && echo "UsePAM yes" >> /etc/ssh/sshd_config
RUN systemctl enable sshd \ 
    && systemctl start sshd

USER $USERNAME
ENV HOME=/home/$USERNAME

RUN curl -fsSL https://deno.land/install.sh | sh
CMD [ "/bin/bash" ]
