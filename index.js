#!/usr/bin/env node
let qrcode = require('qrcode-terminal');
let bs = require("browser-sync").create();
let devIp = require('dev-ip');

// .init starts the server
bs.init({
    server: "."
});

/*
 * NOTE: Here we're just adding a text QR code to prove it's possible
 */
qrcode.generate(`http://${devIp()[0]}:3000`, {small: true});


// Now call methods on bs instead of the
// main browserSync module export
bs.reload("*"); // NOTE: Here I chose to reload everything`
