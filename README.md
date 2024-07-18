# mini-hackathon-3

Task 3 for a Mini Hackathon that I took part in over the summer of 2024 (specifications: https://minihackathon.de/itzh/)

# Docker Setup

(WIP)

# Manual Setup

Create a file named `env.js` in the `/src` folder. Paste (and edit as necessarry) the following:

```
const API_KEY = "YOURAPIKEY";
export default API_KEY;
```

Note that this is your API key being sent to the _client_, so please don't run this in production without some kind of modification!

Then, run `npm install`.

Finally, run `npm run dev`. You should be able to access your site at `localhost:5173`.
