FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY index.html .
COPY main.js .

# 複製自訂 nginx 設定
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
