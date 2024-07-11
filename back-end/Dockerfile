FROM bitnami/node

WORKDIR /app-back-end

COPY package.json ./

COPY bun.lockb ./

RUN npm install -g bun && \
    bun install

COPY . .

EXPOSE 4545

ENTRYPOINT [ "bun" ]
CMD [ "dev" ]