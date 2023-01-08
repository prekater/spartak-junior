FROM node:16.13.0
WORKDIR /app
COPY ./package*.json ./
RUN yarn
COPY ./ ./
RUN yarn run build

CMD yarn run start