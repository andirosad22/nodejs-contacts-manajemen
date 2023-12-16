const { log } = require("console");
const yargs = require('yargs');

// Mengambil argument dari command line
// console.log(process.argv[2]);

console.log(yargs.argv);







// const contacts = require('./contacts');
// const main = async () => {
//   const nama = await contacts.tulisPertanyaan('Masukan Nama: ');
//   const email = await contacts.tulisPertanyaan('Masukan Email: ');
//   const noHp = await contacts.tulisPertanyaan('Masukan No HP: ');
  
//   contacts.simpanContact(nama, email, noHp);
// }

// main();