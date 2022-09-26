FROM node:16-alpine as build
WORKDIR /

COPY /package.json /package.json
COPY /components /components
COPY /pages /pages
COPY /public /public
COPY /styles /styles
COPY /.env.local /.env.local

RUN npm install --only=prod --omit=dev
RUN npm run build

FROM nginx:1.16.0-alpine
COPY /nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /build /usr/share/nginx/html
COPY --from=build /public /usr/share/nginx/html/public
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]