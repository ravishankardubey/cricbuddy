#!/bin/bash

#This Script is exeucted before copying the project

yum -y update

curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
yum -y install nodejs

npm install -g pm2
pm2 update

export app_root-usr/project01
if [ -d "$app_root" ]; then
    rm -rf /usr/project01
    mkdir -p /usr/project01
else
    mkdir -p usr/project01
fi