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
  .option('-sm, --small', 'output extra debugging')

program.parse(process.argv)
console.log(program.opts());

// .init starts the server
let browserSyncOptions = {}
if (program.noServer == undefined) {
    browserSyncOptions
        .server = (program.server == true) ? '.' : program.server
}

bs.init(browserSyncOptions)

// qrcode.setErrorLevel('Q');
const externalURL = `http://${devip()[0]}:${program.port}`
qrcode.generate(externalURL, {small: true});
console.log(externalURL)

bs.reload("*");
