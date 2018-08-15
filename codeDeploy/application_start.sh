#!/bin/bash

#This Script is exeucted to STart the AppliCTION

cd /usr/project01
pm2 start /usr/project01/bin/www -n www -f
