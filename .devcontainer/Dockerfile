# Start from a Fedora base image
FROM fedora:39

# Avoid prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Install basic development tools (use dnf instead of apt)
# Update packages first
RUN dnf update -y && \
    dnf install -y git procps-ng curl sudo openssl openssh-clients less iproute vim-minimal && \
    # Add any other Fedora-specific packages you need
    # Example: dnf install -y python3-pip nodejs gcc-c++ make
    # Clean up DNF cache
    dnf clean all && \
    rm -rf /var/cache/dnf/*

# Set up a non-root user (optional but recommended)
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID
RUN groupadd --gid $USER_GID $USERNAME && \
    useradd --uid $USER_UID --gid $USER_GID -m $USERNAME && \
    echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME && \
    chmod 0440 /etc/sudoers.d/$USERNAME

# Switch to the non-root user
USER $USERNAME

# Set the working directory
WORKDIR /home/$USERNAME

# Restore prompt settings (optional)
ENV DEBIAN_FRONTEND=dialog
