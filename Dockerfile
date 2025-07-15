FROM node:18

WORKDIR /app

COPY package.json ./
COPY . .

RUN npm install

# ✅ Ensure log directory exists at runtime
RUN mkdir -p logs

EXPOSE 3000

CMD ["npm", "start"]
