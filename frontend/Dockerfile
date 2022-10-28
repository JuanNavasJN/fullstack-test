# Build environment
FROM node:14-alpine as builder

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

# Production environment
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html/
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
