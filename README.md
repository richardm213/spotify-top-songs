# Spotify Top Songs

## Live Site

https://richardm213.github.io/spotify-top-songs/

## Demo

https://user-images.githubusercontent.com/92076990/195462975-f7c51afd-e689-40e3-8ea8-7da9fce82aa8.mp4

## How to run locally

First, go to https://developer.spotify.com/dashboard and create an app.

<img width="450" alt="Screen Shot 2022-09-17 at 5 14 30 PM" src="https://user-images.githubusercontent.com/92076990/190880524-7c247f1c-58d9-41d7-a4e3-20b8a42376ad.png">

Next, go to the app settings and add http://localhost:8888/callback as a redirect URI.

<img width="355" alt="Screen Shot 2022-09-17 at 5 15 36 PM" src="https://user-images.githubusercontent.com/92076990/190880486-416872d4-ec12-4ff2-b1ae-0d45d2fc971a.png">

Once you clone the repository, cd into the server folder and create an env file with your Spotify app credentials.

```sh
CLIENT_ID=your-client-id
CLIENT_SECRET=your-client-secret
REDIRECT_URI=http://localhost:8888/callback
```

Finally, start up the server and client.

```sh
cd server
npm install
npm run dev
```

```sh
cd client
npm install
npm start
```
