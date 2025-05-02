# Giai đoạn build
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json và package-lock.json trước để tận dụng layer caching
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build ứng dụng React
RUN npm run build

# Giai đoạn production
FROM nginx:alpine

# Copy build từ giai đoạn builder vào thư mục phục vụ của Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Copy cấu hình Nginx tùy chỉnh (nếu cần)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Mở cổng 80
EXPOSE 80

# Khởi động Nginx
CMD ["nginx", "-g", "daemon off;"]