#!/usr/bin/env node
let qrcode = require('qrcode-terminal');
let bs = require("browser-sync").create();
let devip = require('dev-ip');

const commander = require('commander');

const program = new commander.Command();

program
    .option('-p, --port <number>', 'port', 3000)
    .option('-ns, --no-server', 'Stop the server from running')
    .option('-s, --server <path>', 'Run a Local server (uses your cwd as the web root) [BrowserSync Option]', '.')
    .option('-b, --big', 'Use a big QR code')

program.parse(process.argv)
// .init starts the server
let browserSyncOptions = {}
if (program.noServer == undefined) {
    browserSyncOptions.server = (program.server == true) ? '.' : program.server
    browserSyncOptions.port = program.port

    bs.init(browserSyncOptions)
}

const externalURL = `http://${devip()[0]}:${program.port}`
qrcode.generate(externalURL, {small: !program.big});

if (program.noServer == undefined) bs.reload("*");
