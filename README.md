# BSQR

Simple little script that runs [`browser-sync`](https://www.browsersync.io/) & displays a QR code with the external URL.

![BSQR desktop to iPhone QR scan usage GIF](https://media.giphy.com/media/iDxglQkeeLFUjINoR7/giphy.gif)

# Installation

To run once-in-a-while use:

```
npx bsqr
```

If you'll need it a lot install it locally with:

``` bash
npm install -g bsqr
# or
yarn global add bsqr
```

# Options

| Name | Syntax | Default | Description
| --- | --- | --- | --- |
| `port`  | `-p, --port <number>` | `3000` | Port number to use |
| `server` | `-s, --server <path>` | `.` (current directory) | Run a Local server (uses your cwd as the web root) [BrowserSync Option] |
| `noServer` | `-ns, --no-server` | N/A | Stop the server from running, useful if you have your own BrowserSync instance & just want the QR code |
| `big` | `-b, --big` | N/A (so, small) | Use a big QR code |

# Testing

Run:

```
./index.js -s examples/simple
```

to test basic functionality works.
