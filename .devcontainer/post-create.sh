#!/bin/bash

sudo apt update && sudo apt upgrade -y

sudo apt install -y 
	\ clang

yes | curl -fsSL https://deno.land/install.sh | sh
