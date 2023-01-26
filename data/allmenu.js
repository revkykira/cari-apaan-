const fs = require('fs')
const chalk = require('chalk')

exports.allmenu = (quotes, prefix) => {
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

*👥 | GROUP MENU*
⤿☃️ > ${prefix}antilink
⤿☃️ > ${prefix}antiwame
⤿☃️ > ${prefix}antivirtex
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

*📥 | DOWNLOAD MENU*
⤿☃️ > ${prefix}tiktok [url]
⤿☃️ > ${prefix}tiktokwm [url]
⤿☃️ > ${prefix}tiktoknowm [url]
⤿☃️ > ${prefix}tiktokaudio [url]
⤿☃️ > ${prefix}instagram [url]
⤿☃️ > ${prefix}facebook [url]
⤿☃️ > ${prefix}ytmp4 [url]
⤿☃️ > ${prefix}ytmp3 [url]
⤿☃️ > ${prefix}play [judul]
⤿☃️ > ${prefix}ytsearch [judul]
⤿☃️ > ${prefix}gitclone

*🔎 | SEARCH MENU*
⤿☃️ > ${prefix}pinterest [query]
⤿☃️ > ${prefix}google [query]
⤿☃️ > ${prefix}gimage [query]
⤿☃️ > ${prefix}gcsearch [quary]

*👤 | ANONYMOUS MENU*
⤿☃️ > ${prefix}menfess
⤿☃️ > ${prefix}menfesscofirm

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

*ℹ️️ | INFORMASI MENU*
⤿☃️ > ${prefix}infogempa
⤿☃️ > ${prefix}covid

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

*🎮 | FUN MENU*
⤿☃️ > ${prefix}truth
⤿☃️ > ${prefix}dare
⤿☃️ > ${prefix}bagaimanakah [teks]
⤿☃️ > ${prefix}kapankah [teks]
⤿☃️ > ${prefix}dimanakah [teks]
⤿☃️ > ${prefix}suit [✌️/✊/✋]
⤿☃️ > ${prefix}aduayam [🐥/🐤🐓/🐣/🦃]
⤿☃️ > ${prefix}suitpvp [tag user]
⤿☃️ > ${prefix}ttt
⤿☃️ > ${prefix}delttt

*🎰 | GAME MENU*
⤿☃️ > ${prefix}tebak lagu
⤿☃️ > ${prefix}tebak gambar
⤿☃️ > ${prefix}tebak kata
⤿☃️ > ${prefix}tebak kalimat
⤿☃️ > ${prefix}tebak lirik
⤿☃️ > ${prefix}tebak lontong
⤿☃️ > ${prefix}kuismath

*🖼 | WALLPAPER MENU*
⤿☃️ > ${prefix}art
⤿☃️ > ${prefix}aestatic
⤿☃️ > ${prefix}mountain
⤿☃️ > ${prefix}cyberspace
⤿☃️ > ${prefix}programming
⤿☃️ > ${prefix}technology
⤿☃️ > ${prefix}islamic

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

*⛩️ | ANIME MENU*
⤿☃️ > ${prefix}quotesanime
⤿☃️ > ${prefix}wallpaper
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

*☕ | OTHER MENU*
⤿☃️ > ${prefix}changelog
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
