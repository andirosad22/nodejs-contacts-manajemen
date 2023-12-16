const { constants } = require('buffer');
const fs = require('fs');
const Readline = require('readline');

const rl = Readline.createInterface({
  input : process.stdin,
  output: process.stdout,
});

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

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });   
  });
};

const simpanContact = (nama, email, noHp)=>{
  const contact = {nama, email, noHp};
  const file = fs.readFileSync('data/contacts.json', 'utf8');

  const contacts = JSON.parse(file);
  contacts.push(contact);
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
  console.log("berhasil menginputkan data nama dan no HP");
  rl.close;
}

module.exports ={tulisPertanyaan, simpanContact};