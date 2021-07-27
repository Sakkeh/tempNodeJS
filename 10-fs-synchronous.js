const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync('./content/result-sync-txt','hello world');

// append
writeFileSync(
    './content/result-sync-append-txt',
    'hello world',
    { flag: 'a'});
console.log('done with the task sync')
console.log('starting the next one')