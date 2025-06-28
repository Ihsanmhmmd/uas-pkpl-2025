# 1. Gunakan base image resmi Node.js
FROM node:18-slim

# 2. Set direktori kerja di dalam container
WORKDIR /app

# 3. Salin package.json dan package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Salin sisa kode aplikasi ke dalam direktori kerja
COPY . .

# 6. Buka port yang digunakan aplikasi
EXPOSE 8080

# 7. Perintah untuk menjalankan aplikasi saat container dijalankan
CMD [ "node", "index.js" ]