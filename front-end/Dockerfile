FROM bitnami/node

WORKDIR /app-front-end

COPY package.json ./

COPY bun.lockb ./

RUN npm install -g bun && \
    bun install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "bun" ]
CMD [ "dev" ]