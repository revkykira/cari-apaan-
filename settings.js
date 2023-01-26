const fs = require('fs')
const chalk = require('chalk')

//===> ATUR BIAR KALIAN SENENG
global.autoReadGc = true //Ubah Ke false Jika Chat Di Grup Tidak Ingin Di Baca Oleh Bot
global.autoReadAll = false //Ubah Ke true Jika Ingin Seluruh Chat Di Baca Oleh Bot
global.anticall = true //Ubah Ke false Jika Tidak Ingin Bot Blockir Yang Telepon
global.available = false //Ubah Ke false Jika Bot Mu Tidak Ingin Terlihat Online
global.autoTyping = false //Ubah Ke true Jika Ingin Saat Ada Yang Chat Bot Auto Mengetik
global.autoRecord = true //Ubah Ke false Jika Tidak Ingin Saat Ada Yang Chat Bot Auto Merekam
global.prefa = ['','.','/','#']

//===> UBAH DISINI
global.namaowner = 'Clay' //Ganti Jadi Namamu
global.owner = ['6285966393571'] //Kalo Mau Lebih Tambahin Aja
global.nomerowner = '6285966393571' //Owner Utama Istilahnya
global.namabot = 'Clay - Just Clay :)' //Ganti Jadi Nama Botmu
global.packname = 'Clay Alone.' //Sticker Weem
global.author = 'This Created At Clay.' //Sticker Weem
global.linkgroup = '_nothing_' //Ganti Sama Link Gc Mu
global.sessionName = 'session'
global.youtube = 'https://youtube.com/c/Revky' //Ganti Sama Link Yt Mu
global.github = 'https://github.com/R-_nothing_' //Ganti Sama Link Github Mu
global.instagram = 'https://instagram.com/revkyrey' //Ganti Sama Link Ig mu

//===> BACKGROUND SETIAP MENU
global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//===> QUOTES BAGIAN MENU
global.quotes1 = 'Apabila Akal Tidak Sempurna Maka Kurangilah Berbicara. ~Ali Bin Abi Thalib'
global.quotes2 = 'Orang Yang Suka Berkata Jujur Mendapatkan Tiga Hal, Yakni Kepercayaan, Cinta, dan Rasa Hormat. ~Ali Bin Abi Thalib'
global.quotes3 = 'Balas Dendam Terbaik Adalah Menjadikan Dirimu Lebih Baik. ~Ali Bin Abi Thalib'

//===> TIPS BAGIAN MENU
global.tips1 = 'Gunakan Jeda 3 Detik Agar Bot Tidak Mati Akibat Spam 🚀'
global.tips2 = 'Jika Kamu Ingin Bermain RPG Hubungi Admin Untuk Mengaktifkan Fitur RPG ⚔️'
global.tips3 = 'Jika Kamu Ingin Request/Repport Fitur, Cukup Ketik *.req/lapor Laporannya* 👮'
global.tips4 = 'Jika Kamu Sedang Gabut, Kamu Bisa Memainkan Fitur Game Yang Tersedia 🕹️'
global.tips5 = 'Jika Kamu Ingin Mendownload Video Youtube, Cukup Ketik *.ytmp4 <link>* 📥'

//===> EDIT SESUAI KEMAUANMU
global.mess = {
admin: '☕ > *Lu Bukan Admin*',
botAdmin: '✍🏻 > *Bot Bukan Admin*',
owner: '🤴🏻 > *Lu Bukan Owner*',
group: '🏡 > *Khusus Group*',
private: '📝 > *Khusus Private*',
bot: '💻 > *Khusus Bot*',
wait: '⏳ > *Tunggu, Sedang Diproses*',
done: '✅ > *Success !!*',
}

//===> KALO MAU MENYESUAIKAN NAMA FILE FOTO NYA
global.thumb = fs.readFileSync('./media/delxa.jpg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbmp4 = fs.readFileSync('./media/delxa.mp4')
    
//===> INI GAUSAH DIUBAH
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
