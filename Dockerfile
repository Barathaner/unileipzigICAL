# This Dockerfile builds the React client and API together

# Build step #1: build the React front end
FROM node:latest as build-step
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./client/package.json ./client/package-lock.json ./
COPY ./client/src ./src
COPY ./client/public ./public
RUN npm install
RUN npm run build

# Build step #2: build the API with the client as static files
FROM python:3.9

WORKDIR /app
COPY --from=build-step /app/build ./build
RUN mkdir ./api
COPY ./backend/ ./api/
WORKDIR /app/api
RUN pip3 install -r requirements.txt
ENV FLASK_ENV production
ENV FLASK_DEBUG 0

EXPOSE 3000
CMD ["gunicorn", "-c", "python:config.gunicorn", "server:app"]