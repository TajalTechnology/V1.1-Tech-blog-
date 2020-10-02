FROM node:10.22.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]

#Successfully built 78a70dbc14f3
#Successfully tagged tajalislam/tech-forum:latestok
