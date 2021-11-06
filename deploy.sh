#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 打包部署
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
git add .
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git remote add origin git@github.com:huabingtao/vuepress-starter.git
git branch -M main
git push -f git@github.com:huabingtao/vuepress-starter.git main:gh-pages