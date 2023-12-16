const { log } = require("console");
const yargs = require('yargs');
const { simpanContact,listContact, detailContact, deleteContact } = require("./contacts");

// yargs.command('add', 'Menambahkan contact baru', ()=>{}, (argv) => {
//   console.log(argv.nama);
// })

// with object 
yargs.command({
  command: 'add',
  describe: 'Menambahkan Contact Baru',
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: 'String',
    },
    email: {
      describe: "Email",
      demandOption: false,
      type: 'String',
    },
    noHp: {
      describe: "Nomer HP",
      demandOption: true,
      type: 'String',
    },
  },
  handler(argv){
    simpanContact(argv.nama, argv.email, argv.noHp);
  }
}).demandCommand();

// menampilkan daftar contact nama dan noHp
yargs.command({
  command: 'list',
  describe: 'Menampilkan list contact',
  handler(){
    listContact();
  }
});

// Menampilkan detail contact
yargs.command({
  command: 'detail',
  describe: 'Menampilkan Detail sebuah contact berdasarkan nama',
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: 'String',
    },
  },
  handler(argv){
    detailContact(argv.nama);
  }
});

// Menghapus contact berdasarkan nama
yargs.command({
  command: 'delete',
  describe: 'Menghapus contact berdasarkan nama',
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: 'String',
    },
  },
  handler(argv){
    deleteContact(argv.nama);
  }
});


yargs.parse();