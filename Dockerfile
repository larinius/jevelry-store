FROM node:16-alpine as build
WORKDIR /

COPY ./package*.json ./
RUN npm install --omit=dev

COPY ./ ./

RUN npm run build

FROM nginx:1.16.0-alpine
COPY /nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /build /usr/share/nginx/html
COPY --from=build /public /usr/share/nginx/html/public
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]