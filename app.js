const contacts = require('./contacts');
const main = async () => {
  const nama = await contacts.tulisPertanyaan('Masukan Nama: ');
  const email = await contacts.tulisPertanyaan('Masukan Email: ');
  const noHp = await contacts.tulisPertanyaan('Masukan No HP: ');
  
  contacts.simpanContact(nama, email, noHp);
}

main();