const fs = require('fs')
const chalk = require('chalk')

//SILAHKAN EDIT SESUKA KALIAN

//SIMPLE MENU
exports.simple = (pushname, ucapanWaktu, namabot, prefix) => {
	return`*Halo Kak ${pushname} đ*
*${ucapanWaktu}*

Berikut List Menu Yang Tersedia Di *${global.namabot}*

đ > ${prefix}allmenu
đĻ > ${prefix}ownermenu
đĨ > ${prefix}groupmenu
đĨ > ${prefix}downloadmenu
đ¤ > ${prefix}anonymousmenu
đ > ${prefix}searchmenu
đ > ${prefix}databasemenu
âšī¸ > ${prefix}infomenu
đ¯ââī¸ > ${prefix}asupanmenu
đŽ > ${prefix}funmenu
đ° > ${prefix}gamemenu
â > ${prefix}randomsticker
đĄ > ${prefix}randommenu
âŠī¸ > ${prefix}animemenu
đ¨ > ${prefix}makermenu
â > ${prefix}othermenu

Gunakan Dengan Bijak đ
`
}

//LIST MENU
exports.list = (pushname, ucapanWaktu, namabot) => {
	return`*Halo Kak ${pushname} đ*
*${ucapanWaktu}*

*Berikut List Menu Yang Tersedia Di ${global.namabot}*

*Jika Menemukan Bug Harap Dimaklumi Dan Laporkan Kepada*
*Owner Atau Creator Agar Segera Di Fix đ*

*Terima Kasih đ*
`
}

//MENU OWNER
exports.sowner = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đĻ | OWNER MENU*
â¤ŋâī¸ > ${prefix}setmenu
â¤ŋâī¸ > ${prefix}join [link]
â¤ŋâī¸ > ${prefix}leave
â¤ŋâī¸ > ${prefix}self
â¤ŋâī¸ > ${prefix}public
â¤ŋâī¸ > ${prefix}setppbot
â¤ŋâī¸ > ${prefix}block @user
â¤ŋâī¸ > ${prefix}unblock @user
â¤ŋâī¸ > ${prefix}bc
â¤ŋâī¸ > ${prefix}bcgc
`
}

//MENU GRUP
exports.sgrup = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đĨ | GROUP MENU*
â¤ŋâī¸ > ${prefix}antilink
â¤ŋâī¸ > ${prefix}antiwame
â¤ŋâī¸ > ${prefix}antivirtex
â¤ŋâī¸ > ${prefix}nsfw
â¤ŋâī¸ > ${prefix}event
â¤ŋâī¸ > ${prefix}afk [alasan]
â¤ŋâī¸ > ${prefix}tagall
â¤ŋâī¸ > ${prefix}hidetag
â¤ŋâī¸ > ${prefix}linkgroup
â¤ŋâī¸ > ${prefix}revoke
â¤ŋâī¸ > ${prefix}ephemeral [option]
â¤ŋâī¸ > ${prefix}setppgc
â¤ŋâī¸ > ${prefix}setname [text]
â¤ŋâī¸ > ${prefix}group [option]
â¤ŋâī¸ > ${prefix}add @user
â¤ŋâī¸ > ${prefix}kick @user
â¤ŋâī¸ > ${prefix}promote @user
â¤ŋâī¸ > ${prefix}demote @user
`
}

//MENU DOWNLOAD
exports.sdown = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đĨ | DOWNLOAD MENU*
â¤ŋâī¸ > ${prefix}tiktok [url]
â¤ŋâī¸ > ${prefix}tiktokwm [url]
â¤ŋâī¸ > ${prefix}tiktoknowm [url]
â¤ŋâī¸ > ${prefix}tiktokaudio [url]
â¤ŋâī¸ > ${prefix}instagram [url]
â¤ŋâī¸ > ${prefix}twitter [url]
â¤ŋâī¸ > ${prefix}facebook [url]
â¤ŋâī¸ > ${prefix}ytmp4 [url]
â¤ŋâī¸ > ${prefix}ytmp3 [url]
â¤ŋâī¸ > ${prefix}play [judul]
â¤ŋâī¸ > ${prefix}ytsearch [judul]
â¤ŋâī¸ > ${prefix}gitclone
`
}

//MENU SEARCH
exports.ssearch = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đ | SEARCH MENU*
â¤ŋâī¸ > ${prefix}pinterest [query]
â¤ŋâī¸ > ${prefix}google [query]
â¤ŋâī¸ > ${prefix}gimage [query]
â¤ŋâī¸ > ${prefix}gcsearch [quary]
`
}

//MENU ANONYMOUS
exports.sanony = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đ¤ | ANONYMOUS MENU*
â¤ŋâī¸ > ${prefix}menfess
â¤ŋâī¸ > ${prefix}menfesscofirm
`
}

//MENU DATABASE
exports.sdatabase = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đ | DATABASE MENU*
â¤ŋâī¸ > ${prefix}absen
â¤ŋâī¸ > ${prefix}hadir
â¤ŋâī¸ > ${prefix}tidakhadir
â¤ŋâī¸ > ${prefix}cekabsen
â¤ŋâī¸ > ${prefix}hapusabsen
â¤ŋâī¸ > ${prefix}setcmd [reply sticker/pesan]
â¤ŋâī¸ > ${prefix}delcmd [reply sticker/pesan]
â¤ŋâī¸ > ${prefix}listcmd
â¤ŋâī¸ > ${prefix}lockcmd
â¤ŋâī¸ > ${prefix}addmsg
â¤ŋâī¸ > ${prefix}getmsg
â¤ŋâī¸ > ${prefix}listmsg
â¤ŋâī¸ > ${prefix}delmsg
`
}

//MENU INFORMASI
exports.sinfo = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*âšī¸ī¸ | INFORMASI MENU*
â¤ŋâī¸ > ${prefix}infogempa
â¤ŋâī¸ > ${prefix}covid
`
}

//MENU ASUPAN
exports.sasupan = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đ¯ââī¸ | ASUPAN MENU*
â¤ŋâī¸ > ${prefix}asupan
â¤ŋâī¸ > ${prefix}notnot
â¤ŋâī¸ > ${prefix}justinaxie
â¤ŋâī¸ > ${prefix}kayes
â¤ŋâī¸ > ${prefix}cecan
â¤ŋâī¸ > ${prefix}bocil
â¤ŋâī¸ > ${prefix}gheayubi
â¤ŋâī¸ > ${prefix}rikagusriani
â¤ŋâī¸ > ${prefix}santuy
â¤ŋâī¸ > ${prefix}china
â¤ŋâī¸ > ${prefix}vietnam
â¤ŋâī¸ > ${prefix}thailand
â¤ŋâī¸ > ${prefix}indonesia
â¤ŋâī¸ > ${prefix}korea
â¤ŋâī¸ > ${prefix}japan
â¤ŋâī¸ > ${prefix}malaysia
`
}

exports.sfun = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đŽ | FUN MENU*
â¤ŋâī¸ > ${prefix}truth
â¤ŋâī¸ > ${prefix}dare
â¤ŋâī¸ > ${prefix}bagaimanakah
â¤ŋâī¸ > ${prefix}kapankah
â¤ŋâī¸ > ${prefix}dimanakah
â¤ŋâī¸ > ${prefix}suit [âī¸/â/â]
â¤ŋâī¸ > ${prefix}aduayam [đ¤/đ/đĨ/đŖ/đĻ]
â¤ŋâī¸ > ${prefix}suitpvp [tag user]
â¤ŋâī¸ > ${prefix}ttt
â¤ŋâī¸ > ${prefix}delttt
`
}

//GAME MENU
exports.sgame = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đ° | GAME MENU*
â¤ŋâī¸ > ${prefix}tebak lagu
â¤ŋâī¸ > ${prefix}tebak gambar
â¤ŋâī¸ > ${prefix}tebak kata
â¤ŋâī¸ > ${prefix}tebak kalimat
â¤ŋâī¸ > ${prefix}tebak lirik
â¤ŋâī¸ > ${prefix}tebak lontong
â¤ŋâī¸ > ${prefix}kuismath
`
}

//RANDOM STICKER
exports.srandoms = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*â | RANDOM STICKER*
â¤ŋâī¸ > ${prefix}among
â¤ŋâī¸ > ${prefix}animegif
â¤ŋâī¸ > ${prefix}animestick
â¤ŋâī¸ > ${prefix}dadu
â¤ŋâī¸ > ${prefix}dinokuning
â¤ŋâī¸ > ${prefix}doge
â¤ŋâī¸ > ${prefix}kawanspongebob
â¤ŋâī¸ > ${prefix}manusialidi
â¤ŋâī¸ > ${prefix}mukalu
â¤ŋâī¸ > ${prefix}paimon
â¤ŋâī¸ > ${prefix}patrick
â¤ŋâī¸ > ${prefix}patrickgf
â¤ŋâī¸ > ${prefix}rabbit
â¤ŋâī¸ > ${prefix}random
â¤ŋâī¸ > ${prefix}spongbob
`
}

//GAME MENU
exports.srandom = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đĄ | RANDOM MENU*
â¤ŋâī¸ > ${prefix}fiersa
â¤ŋâī¸ > ${prefix}senja
â¤ŋâī¸ > ${prefix}bucin
â¤ŋâī¸ > ${prefix}pantun
â¤ŋâī¸ > ${prefix}puisi
â¤ŋâī¸ > ${prefix}gombal
â¤ŋâī¸ > ${prefix}galau
â¤ŋâī¸ > ${prefix}motivasi
â¤ŋâī¸ > ${prefix}quotes
â¤ŋâī¸ > ${prefix}katagalau
â¤ŋâī¸ > ${prefix}katailham
â¤ŋâī¸ > ${prefix}dilan
`
}

//MENU ANIME
exports.sanime = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*âŠī¸ | ANIME MENU*
â¤ŋâī¸ > ${prefix}quotesanime
â¤ŋâī¸ > ${prefix}waifu
â¤ŋâī¸ > ${prefix}loli
â¤ŋâī¸ > ${prefix}cry
â¤ŋâī¸ > ${prefix}kill
â¤ŋâī¸ > ${prefix}hug
â¤ŋâī¸ > ${prefix}pat
â¤ŋâī¸ > ${prefix}lick
â¤ŋâī¸ > ${prefix}kiss
â¤ŋâī¸ > ${prefix}bite
â¤ŋâī¸ > ${prefix}yeet
â¤ŋâī¸ > ${prefix}neko
â¤ŋâī¸ > ${prefix}bully
â¤ŋâī¸ > ${prefix}bonk
â¤ŋâī¸ > ${prefix}wink
â¤ŋâī¸ > ${prefix}poke
â¤ŋâī¸ > ${prefix}nom
â¤ŋâī¸ > ${prefix}slap
â¤ŋâī¸ > ${prefix}smile
â¤ŋâī¸ > ${prefix}wave
â¤ŋâī¸ > ${prefix}awoo
â¤ŋâī¸ > ${prefix}blush
â¤ŋâī¸ > ${prefix}smug
â¤ŋâī¸ > ${prefix}glomp
â¤ŋâī¸ > ${prefix}happy
â¤ŋâī¸ > ${prefix}dance
â¤ŋâī¸ > ${prefix}cringe
â¤ŋâī¸ > ${prefix}cuddle
â¤ŋâī¸ > ${prefix}highfive
â¤ŋâī¸ > ${prefix}shinobu
â¤ŋâī¸ > ${prefix}megumin
â¤ŋâī¸ > ${prefix}handhold
`
}

//MAKER MENU
exports.smaker = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đ¨ | MAKER MENU*
â¤ŋâī¸ > ${prefix}toimage
â¤ŋâī¸ > ${prefix}smeme
â¤ŋâī¸ > ${prefix}smeme2
â¤ŋâī¸ > ${prefix}sticker
â¤ŋâī¸ > ${prefix}tovideo
â¤ŋâī¸ > ${prefix}togif
â¤ŋâī¸ > ${prefix}tourl
â¤ŋâī¸ > ${prefix}emojimix đ+đ
â¤ŋâī¸ > ${prefix}readmore
â¤ŋâī¸ > ${prefix}ttp [teks]
â¤ŋâī¸ > ${prefix}semoji [emoji]
â¤ŋâī¸ > ${prefix}nulisbiasa
â¤ŋâī¸ > ${prefix}nuliskanan
â¤ŋâī¸ > ${prefix}nuliskiri
â¤ŋâī¸ > ${prefix}foliokanan
â¤ŋâī¸ > ${prefix}foliokiri
`
}

//OTHER MENU
exports.sother = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*â | OTHER MENU*
â¤ŋâī¸ > ${prefix}simi [teks]
â¤ŋâī¸ > ${prefix}ping
â¤ŋâī¸ > ${prefix}owner
â¤ŋâī¸ > ${prefix}creator
â¤ŋâī¸ > ${prefix}menu / ${prefix}help / ${prefix}?
â¤ŋâī¸ > ${prefix}delete
â¤ŋâī¸ > ${prefix}sc
â¤ŋâī¸ > ${prefix}tqto
â¤ŋâī¸ > ${prefix}donasi
â¤ŋâī¸ > ${prefix}rules
â¤ŋâī¸ > ${prefix}sewabot
â¤ŋâī¸ > ${prefix}listgc
â¤ŋâī¸ > ${prefix}liston
â¤ŋâī¸ > ${prefix}liston
â¤ŋâī¸ > ${prefix}report
â¤ŋâī¸ > ${prefix}req
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
