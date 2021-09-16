FROM node

WORKDIR /pages/_app

COPY . .

RUN npm install

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"