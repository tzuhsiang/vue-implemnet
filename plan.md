# 進階應用專案總覽

## 專案目標
- 實作前後端分離應用，左側有藍色 sidebar，包含三個功能（首頁、資料分析、設定）
- 前端：Vue 3（CDN）、Nginx
- 後端：Python Flask
- Docker Compose 一鍵啟動

## 專案結構
- frontend/
  - index.html（含 sidebar 與主畫面切換）
  - main.js（Vue 3 控制）
  - nginx.conf（API 代理）
  - Dockerfile
- backend/
  - app.py（Flask API）
  - requirements.txt
  - Dockerfile
- docker-compose.yml（整合前後端）

## 啟動方式
1. 進入專案根目錄
2. 若有修改 frontend 檔案，請先重建 image：
   ```
   docker compose -f vue-implemnet/docker-compose.yml build --no-cache
   ```
3. 啟動服務：
   ```
   docker compose -f vue-implemnet/docker-compose.yml up -d
   ```
4. 在瀏覽器輸入 http://localhost:8080 開啟前端頁面
5. **請勿用 file:// 開啟 index.html，API 與 sidebar 會失效，必須用 http://localhost:8080**

## 核心套件
- 前端
  - Vue 3（CDN 方式引入）
  - Nginx
- 後端
  - Python 3
  - Flask
- 開發與部署
  - Docker
  - Docker Compose

## 主要功能
- Sidebar 藍色設計，三大功能切換
- 首頁可呼叫後端 API 並顯示回應
- 資料分析、設定頁面可擴充
- Nginx 代理 /api 請求到 Flask

## 開發重點
- 前後端分離專案結構
- Dockerfile 與 docker compose 實作
- Nginx 反向代理 API
- Vue 與 Flask 基本整合

## 歷程紀錄
- 完成 sidebar 與主畫面切換
- 修正 Vue 掛載與 template 結構
- 修正 script 載入方式
- 修正 Docker build cache 問題
- README 與 plan.md 完整記錄操作與說明
