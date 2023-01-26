const fs = require('fs')
const chalk = require('chalk')

//SILAHKAN EDIT SESUKA KALIAN

//SIMPLE MENU
exports.simple = (pushname, ucapanWaktu, namabot, prefix) => {
	return`*Halo Kak ${pushname} 👋*
*${ucapanWaktu}*

Berikut List Menu Yang Tersedia Di *${global.namabot}*

📚 > ${prefix}allmenu
👦 > ${prefix}ownermenu
👥 > ${prefix}groupmenu
📥 > ${prefix}downloadmenu
👤 > ${prefix}anonymousmenu
🔎 > ${prefix}searchmenu
📂 > ${prefix}databasemenu
ℹ️ > ${prefix}infomenu
👯‍♀️ > ${prefix}asupanmenu
🎮 > ${prefix}funmenu
🎰 > ${prefix}gamemenu
☕ > ${prefix}randomsticker
🎡 > ${prefix}randommenu
⛩️ > ${prefix}animemenu
🎨 > ${prefix}makermenu
☕ > ${prefix}othermenu

Gunakan Dengan Bijak 😁
`
}

//LIST MENU
exports.list = (pushname, ucapanWaktu, namabot) => {
	return`*Halo Kak ${pushname} 👋*
*${ucapanWaktu}*

*Berikut List Menu Yang Tersedia Di ${global.namabot}*

*Jika Menemukan Bug Harap Dimaklumi Dan Laporkan Kepada*
*Owner Atau Creator Agar Segera Di Fix 😎*

*Terima Kasih 🙏*
`
}

//MENU OWNER
exports.sowner = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*👦 | OWNER MENU*
⤿☃️ > ${prefix}setmenu
⤿☃️ > ${prefix}join [link]
⤿☃️ > ${prefix}leave
⤿☃️ > ${prefix}self
⤿☃️ > ${prefix}public
⤿☃️ > ${prefix}setppbot
⤿☃️ > ${prefix}block @user
⤿☃️ > ${prefix}unblock @user
⤿☃️ > ${prefix}bc
⤿☃️ > ${prefix}bcgc
`
}

//MENU GRUP
exports.sgrup = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*👥 | GROUP MENU*
⤿☃️ > ${prefix}antilink
⤿☃️ > ${prefix}antiwame
⤿☃️ > ${prefix}antivirtex
⤿☃️ > ${prefix}nsfw
⤿☃️ > ${prefix}event
⤿☃️ > ${prefix}afk [alasan]
⤿☃️ > ${prefix}tagall
⤿☃️ > ${prefix}hidetag
⤿☃️ > ${prefix}linkgroup
⤿☃️ > ${prefix}revoke
⤿☃️ > ${prefix}ephemeral [option]
⤿☃️ > ${prefix}setppgc
⤿☃️ > ${prefix}setname [text]
⤿☃️ > ${prefix}group [option]
⤿☃️ > ${prefix}add @user
⤿☃️ > ${prefix}kick @user
⤿☃️ > ${prefix}promote @user
⤿☃️ > ${prefix}demote @user
`
}

//MENU DOWNLOAD
exports.sdown = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*📥 | DOWNLOAD MENU*
⤿☃️ > ${prefix}tiktok [url]
⤿☃️ > ${prefix}tiktokwm [url]
⤿☃️ > ${prefix}tiktoknowm [url]
⤿☃️ > ${prefix}tiktokaudio [url]
⤿☃️ > ${prefix}instagram [url]
⤿☃️ > ${prefix}twitter [url]
⤿☃️ > ${prefix}facebook [url]
⤿☃️ > ${prefix}ytmp4 [url]
⤿☃️ > ${prefix}ytmp3 [url]
⤿☃️ > ${prefix}play [judul]
⤿☃️ > ${prefix}ytsearch [judul]
⤿☃️ > ${prefix}gitclone
`
}

//MENU SEARCH
exports.ssearch = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*🔎 | SEARCH MENU*
⤿☃️ > ${prefix}pinterest [query]
⤿☃️ > ${prefix}google [query]
⤿☃️ > ${prefix}gimage [query]
⤿☃️ > ${prefix}gcsearch [quary]
`
}

//MENU ANONYMOUS
exports.sanony = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*👤 | ANONYMOUS MENU*
⤿☃️ > ${prefix}menfess
⤿☃️ > ${prefix}menfesscofirm
`
}

//MENU DATABASE
exports.sdatabase = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*📂 | DATABASE MENU*
⤿☃️ > ${prefix}absen
⤿☃️ > ${prefix}hadir
⤿☃️ > ${prefix}tidakhadir
⤿☃️ > ${prefix}cekabsen
⤿☃️ > ${prefix}hapusabsen
⤿☃️ > ${prefix}setcmd [reply sticker/pesan]
⤿☃️ > ${prefix}delcmd [reply sticker/pesan]
⤿☃️ > ${prefix}listcmd
⤿☃️ > ${prefix}lockcmd
⤿☃️ > ${prefix}addmsg
⤿☃️ > ${prefix}getmsg
⤿☃️ > ${prefix}listmsg
⤿☃️ > ${prefix}delmsg
`
}

//MENU INFORMASI
exports.sinfo = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*ℹ️️ | INFORMASI MENU*
⤿☃️ > ${prefix}infogempa
⤿☃️ > ${prefix}covid
`
}

//MENU ASUPAN
exports.sasupan = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*👯‍♀️ | ASUPAN MENU*
⤿☃️ > ${prefix}asupan
⤿☃️ > ${prefix}notnot
⤿☃️ > ${prefix}justinaxie
⤿☃️ > ${prefix}kayes
⤿☃️ > ${prefix}cecan
⤿☃️ > ${prefix}bocil
⤿☃️ > ${prefix}gheayubi
⤿☃️ > ${prefix}rikagusriani
⤿☃️ > ${prefix}santuy
⤿☃️ > ${prefix}china
⤿☃️ > ${prefix}vietnam
⤿☃️ > ${prefix}thailand
⤿☃️ > ${prefix}indonesia
⤿☃️ > ${prefix}korea
⤿☃️ > ${prefix}japan
⤿☃️ > ${prefix}malaysia
`
}

exports.sfun = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*🎮 | FUN MENU*
⤿☃️ > ${prefix}truth
⤿☃️ > ${prefix}dare
⤿☃️ > ${prefix}bagaimanakah
⤿☃️ > ${prefix}kapankah
⤿☃️ > ${prefix}dimanakah
⤿☃️ > ${prefix}suit [✌️/✊/✋]
⤿☃️ > ${prefix}aduayam [🐤/🐓/🐥/🐣/🦃]
⤿☃️ > ${prefix}suitpvp [tag user]
⤿☃️ > ${prefix}ttt
⤿☃️ > ${prefix}delttt
`
}

//GAME MENU
exports.sgame = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*🎰 | GAME MENU*
⤿☃️ > ${prefix}tebak lagu
⤿☃️ > ${prefix}tebak gambar
⤿☃️ > ${prefix}tebak kata
⤿☃️ > ${prefix}tebak kalimat
⤿☃️ > ${prefix}tebak lirik
⤿☃️ > ${prefix}tebak lontong
⤿☃️ > ${prefix}kuismath
`
}

//RANDOM STICKER
exports.srandoms = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*☕ | RANDOM STICKER*
⤿☃️ > ${prefix}among
⤿☃️ > ${prefix}animegif
⤿☃️ > ${prefix}animestick
⤿☃️ > ${prefix}dadu
⤿☃️ > ${prefix}dinokuning
⤿☃️ > ${prefix}doge
⤿☃️ > ${prefix}kawanspongebob
⤿☃️ > ${prefix}manusialidi
⤿☃️ > ${prefix}mukalu
⤿☃️ > ${prefix}paimon
⤿☃️ > ${prefix}patrick
⤿☃️ > ${prefix}patrickgf
⤿☃️ > ${prefix}rabbit
⤿☃️ > ${prefix}random
⤿☃️ > ${prefix}spongbob
`
}

//GAME MENU
exports.srandom = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*🎡 | RANDOM MENU*
⤿☃️ > ${prefix}fiersa
⤿☃️ > ${prefix}senja
⤿☃️ > ${prefix}bucin
⤿☃️ > ${prefix}pantun
⤿☃️ > ${prefix}puisi
⤿☃️ > ${prefix}gombal
⤿☃️ > ${prefix}galau
⤿☃️ > ${prefix}motivasi
⤿☃️ > ${prefix}quotes
⤿☃️ > ${prefix}katagalau
⤿☃️ > ${prefix}katailham
⤿☃️ > ${prefix}dilan
`
}

//MENU ANIME
exports.sanime = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*⛩️ | ANIME MENU*
⤿☃️ > ${prefix}quotesanime
⤿☃️ > ${prefix}waifu
⤿☃️ > ${prefix}loli
⤿☃️ > ${prefix}cry
⤿☃️ > ${prefix}kill
⤿☃️ > ${prefix}hug
⤿☃️ > ${prefix}pat
⤿☃️ > ${prefix}lick
⤿☃️ > ${prefix}kiss
⤿☃️ > ${prefix}bite
⤿☃️ > ${prefix}yeet
⤿☃️ > ${prefix}neko
⤿☃️ > ${prefix}bully
⤿☃️ > ${prefix}bonk
⤿☃️ > ${prefix}wink
⤿☃️ > ${prefix}poke
⤿☃️ > ${prefix}nom
⤿☃️ > ${prefix}slap
⤿☃️ > ${prefix}smile
⤿☃️ > ${prefix}wave
⤿☃️ > ${prefix}awoo
⤿☃️ > ${prefix}blush
⤿☃️ > ${prefix}smug
⤿☃️ > ${prefix}glomp
⤿☃️ > ${prefix}happy
⤿☃️ > ${prefix}dance
⤿☃️ > ${prefix}cringe
⤿☃️ > ${prefix}cuddle
⤿☃️ > ${prefix}highfive
⤿☃️ > ${prefix}shinobu
⤿☃️ > ${prefix}megumin
⤿☃️ > ${prefix}handhold
`
}

//MAKER MENU
exports.smaker = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*🎨 | MAKER MENU*
⤿☃️ > ${prefix}toimage
⤿☃️ > ${prefix}smeme
⤿☃️ > ${prefix}smeme2
⤿☃️ > ${prefix}sticker
⤿☃️ > ${prefix}tovideo
⤿☃️ > ${prefix}togif
⤿☃️ > ${prefix}tourl
⤿☃️ > ${prefix}emojimix 😎+😂
⤿☃️ > ${prefix}readmore
⤿☃️ > ${prefix}ttp [teks]
⤿☃️ > ${prefix}semoji [emoji]
⤿☃️ > ${prefix}nulisbiasa
⤿☃️ > ${prefix}nuliskanan
⤿☃️ > ${prefix}nuliskiri
⤿☃️ > ${prefix}foliokanan
⤿☃️ > ${prefix}foliokiri
`
}

//OTHER MENU
exports.sother = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*☕ | OTHER MENU*
⤿☃️ > ${prefix}simi [teks]
⤿☃️ > ${prefix}ping
⤿☃️ > ${prefix}owner
⤿☃️ > ${prefix}creator
⤿☃️ > ${prefix}menu / ${prefix}help / ${prefix}?
⤿☃️ > ${prefix}delete
⤿☃️ > ${prefix}sc
⤿☃️ > ${prefix}tqto
⤿☃️ > ${prefix}donasi
⤿☃️ > ${prefix}rules
⤿☃️ > ${prefix}sewabot
⤿☃️ > ${prefix}listgc
⤿☃️ > ${prefix}liston
⤿☃️ > ${prefix}liston
⤿☃️ > ${prefix}report
⤿☃️ > ${prefix}req
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
