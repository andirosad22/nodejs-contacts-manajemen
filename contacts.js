const { constants } = require('buffer');
const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

// Membuat folder data
const dirPath = './data'
if(!fs.existsSync(dirPath)){
  fs.mkdirSync(dirPath);
}
// membuat file contacts json jika blum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
  fs.writeFileSync(dataPath, '[]', 'utf8');
}

const loadContact = () => {
  const file = fs.readFileSync('data/contacts.json', 'utf8');
  const contacts = JSON.parse(file);
  return contacts;
}

const simpanContact = (nama, email, noHp)=>{
  const contact = {nama, email, noHp};
  // const file = fs.readFileSync('data/contacts.json', 'utf8');
  // const contacts = JSON.parse(file);

  const contacts = loadContact();
  //cek duplicat
  const duplicat = contacts.find((contact) => contact.nama === nama || contact.noHp === noHp);
  if(duplicat){
    console.log(chalk.red.inverse('contact sudah terdaftar'));
    return false;
  }

  // cek email
  if(email){
    if(!validator.isEmail(email)){
      console.log(chalk.red.inverse('email tidak falid'));
    return false;
    }
  }
  // cek nomor handphone
  if (!validator.isMobilePhone(noHp, 'id-ID')) {
    console.log(chalk.red.inverse("Nomor Handphone Tidak Valid"));
    return false;
  }
  
  contacts.push(contact);
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
  console.log(chalk.green.inverse("Berhasil menambahkan contact baru"));
}

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.cyan.inverse("===DAFTAR CONTACT==="));
  contacts.forEach((contacts, index) => {
    console.log(`${index + 1}. ${contacts.nama} - ${contacts.noHp}`);
  })
};

const detailContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
  if(!contact){
    console.log(chalk.red.inverse(`${nama} tidak di temukan`));
    return false;
  }
  console.log(chalk.cyan.inverse(`=== ${contact.nama} ===`));
  console.log(`No HP: ${contact.noHp}`);
  if(contact.email){
    console.log(`Email : ${contact.email ? contact.email : '-'}`);
  }
}

const deleteContact = (nama) => {
  const contacts = loadContact();
  const newContacts = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
    );
  if(contacts.length === newContacts.length){
    console.log(chalk.red.inverse(`${nama} tidak di temukan`));
    return false;
  }
  fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));
  console.log(chalk.green.inverse(`Data contact ${nama} berhasil di hapus`));
}

module.exports ={simpanContact, listContact, detailContact, deleteContact};