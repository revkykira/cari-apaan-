/**
  ꕥ Boleh Reupload, Asal Izin + Cantumin Channel Ori
  ꕥ No Enc? Recode Sndiri, atau beli di Ryuuka Botz
  ꕥ Cek https://github.com/DikaArdnt/
  
  ꕥ Thanks To :
  ꕥ My God
  ꕥ Dika Arndt (Author)
  ꕥ Fatih A
  ꕥ Nurutomo
  ꕥ Mhankbarbar
  ꕥ Ryuuka Team (Recode)
  ꕥ Penyedia Module
  ꕥ Penyedia Api
  ꕥ User Delxa
**/  

  require('./settings')
  const { default: makeWAdelxaet, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
  const fs = require('fs')
  const util = require('util')
  const chalk = require('chalk')
  const { exec, spawn, execSync } = require("child_process")
  const axios = require('axios')
  const { fromBuffer } = require('file-type')
  const path = require('path')
  const os = require('os')
  const speed = require('performance-now')
  const { performance } = require('perf_hooks')
  const { pinterest, wallpaper, wikimedia } = require('./lib/scraper')
  const { bytesToSize, TelegraPh, UploadFileUgu, webp2mp4File } = require('./lib/uploader')
  const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('./lib/myfunc')
  const fetch = require('node-fetch')
  const yts = require('yt-search');
  const ffmpeg = require('fluent-ffmpeg')
  const moment = require('moment-timezone')
  const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
  const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
  const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
  const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
  const hour_now = moment().format('HH:mm:ss') 
  const { EmojiAPI } = require("emoji-api");
  const emoji = new EmojiAPI()
  const { color, RyuuLog } = require('./lib/color')
  const similarity = require('similarity')
  const qrcode = require('qrcode')
  
  //Module Apikey
  const xfar = require('xfarr-api');
  const hxz = require("hxz-api");
  const ra = require("ra-api");
  const kotz = require("kotz-api");
  const bochil = require("@bochilteam/scraper")
  
  a = '```'

  // DATABASE JSON
  const database = require('./src/database.json')
  
  // DATABASE JS
  const { rules } = require('./data/rules.js')
  const { donasi } = require('./data/donasi.js')
  const { sewa } = require('./data/sewa.js')
  const { allmenu } = require(`./data/allmenu.js`)
  const { sdatabase, smenu, simple, list, sowner, srandoms, sanony, sgrup, sdown, ssearch, sasupan, sfun, sanime, smaker, sother, sgame, sinfo, snulis, srandom } = require('./data/simple.js')
  const { wrongFormat, notNum, notLink, fiturOff, fiturError, kataKasar, addUser, kickUser, proMote, deMote, namaGrup, epOn, epOff } = require('./data/confat.js')
  
  // DATABASE GAME MENU
  global.db = JSON.parse(fs.readFileSync('./src/database.json'))
  if (global.db) global.db = {
  sticker: {},
  database: {},
  game: {},
  others: {},
  users: {},
  chats: {},
  settings: {},
  ...(global.db || {})
  }
  let tebaklagu = db.game.tebaklagu = []
  let _family100 = db.game.family100 = []
  let kuismath = db.game.math = []
  let tebakgambar = db.game.tebakgambar = []
  let tebakkata = db.game.tebakkata = []
  let caklontong = db.game.lontong = []
  let caklontong_desk = db.game.lontong_desk = []
  let tebakkalimat = db.game.kalimat = []
  let tebaklirik = db.game.lirik = []
  let tebaktebakan = db.game.tebakan = []
  let absen = db.others.absen = []

  //Module Exports
  module.exports = delxa = async (delxa, m, chatUpdate, store) => {
  try {
  var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
  var budy = (typeof m.text == 'string' ? m.text : '')
  var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
  const isCmd = body.startsWith(prefix)
  const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
  const args = body.trim().split(/ +/).slice(1)
  const pushname = m.pushName || "No Name"
  const botNumber = delxa.user.id ? delxa.user.id.split(":")[0]+"@s.whatsapp.net" : delxa.user.id
  const isCreator = [delxa.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
  const itsMe = m.sender == delxa.user.id ? true : false
  const text = q = args.join(" ")
  const quoted = m.quoted ? m.quoted : m
  const mime = (quoted.msg || quoted).mimetype || ''
  const isMedia = /image|video|sticker|audio/.test(mime)
  const from = m.key.remoteJid
  const { type, quotedMsg, mentioned, now, fromMe } = m
  const more = String.fromCharCode(8206)
  const readmore = more.repeat(4001)

  // 🗿 Function Group
  const isGroup = m.key.remoteJid.endsWith('@g.us')
  const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
  const groupMetadata = m.isGroup ? await delxa.groupMetadata(m.chat).catch(e => {}) : ''
  const groupName = m.isGroup ? groupMetadata.subject : ''
  const participants = m.isGroup ? await groupMetadata.participants : ''
  const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
  const groupOwner = m.isGroup ? groupMetadata.owner : ''
  const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
  const isGroupAdmins = m.isGroup ? groupOwner.includes(m.sender) || groupAdmins.includes(m.sender) : false
  const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  const isNumber = x => typeof x === 'number' && !isNaN(x)
  
  const isImage = (type == 'imageMessage')
  const isVideo = (type == 'videoMessage')
  const isSticker = (type == 'stickerMessage')
  const isQuotedMsg = (type == 'extendedTextMessage')
  const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
  const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
  const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
  const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
  const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
  
  //Background
  let picaks = [bg1,bg2,bg3,bg4]
  let picak = picaks[Math.floor(Math.random() * picaks.length)]
  let tipsz = [tips1, tips2, tips3, tips4, tips5]
  let tips = tipsz[Math.floor(Math.random() * tipsz.length)]
  let quote = [quotes1, quotes2, quotes3]
  let quotes = quote[Math.floor(Math.random() * quote.length)]
  
  // 🗿 Function Waktu
  const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
  if(time2 < "23:59:00"){ var ucapanWaktu = 'Selamat Malam 🌌 Dan Selamat Beristirahat 🛏️' }
  if(time2 < "19:00:00"){ var ucapanWaktu = 'Selamat Petang 🌆 Dan Selamat Bersantai 🛋️' }
  if(time2 < "18:00:00"){ var ucapanWaktu = 'Selamat Sore 🌇 Dan Selamat Bersantai ☕' }
  if(time2 < "15:00:00"){ var ucapanWaktu = 'Selamat Siang 🏞 Dan Selamat Beraktifitas 💼' }
  if(time2 < "11:00:00"){ var ucapanWaktu = 'Selamat Pagi 🌅 Dan Selamat Beraktifitas 🤝' } 
  if(time2 < "05:00:00"){ var ucapanWaktu = 'Selamat Malam 🏙 Dan Selamat Beristirahat 😪' }
  if(time2 < "23:59:00"){ var ucapanWaktu1 = 'Selamat Malam 🌌' }
  if(time2 < "19:00:00"){ var ucapanWaktu1 = 'Selamat Petang 🌆' }
  if(time2 < "18:00:00"){ var ucapanWaktu1 = 'Selamat Sore 🌇' }
  if(time2 < "15:00:00"){ var ucapanWaktu1 = 'Selamat Siang 🏞' }
  if(time2 < "11:00:00"){ var ucapanWaktu1 = 'Selamat Pagi 🌅' }
  if(time2 < "05:00:00"){ var ucapanWaktu1 = 'Selamat Malam 🏙' }

  //FAKE FAKE AN
  const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': global.thumb, thumbnail: global.thumb,sendEphemeral: true}}}
  const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":global.namaowner, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': global.namaowner, 'jpegThumbnail': global.thumb}}}
  const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: global.thumb, surface: 200, message: global.namaowner, orderTitle: 'FATIHmek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
  const replygrup = (teks) => {delxa.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${ucapanWaktu1} ${pushname}`,"body": `Group Official`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": global.thumb,"sourceUrl": global.linkgroup}}}, { quoted: m})}   
  const replyvid = (teks) => {delxa.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply":{"title": `${ucapanWaktu1} ${pushname}`,"body": global.namaowner,"previewType": "PHOTO","thumbnail": thumb, "sourceUrl": global.webme}}}, {quoted: m})}
  let replyacak = [replygrup, replyvid]
  let reply = replyacak[Math.floor(Math.random() * replyacak.length)]

  //Database
  try {
  let users = global.db.users[m.sender]
  if (typeof users !== 'object') global.db.users[m.sender] = {}
  if (users) {
  if (!isNumber(users.afkTime)) users.afkTime = -1
  if (!('banned' in users)) users.banned = false
  if (!('afkReason' in users)) users.afkReason = ''
  
  } else global.db.users[m.sender] = {
  afkTime: -1,
  banned: false,
  afkReason: '',
  }

  //Anti Anti
  let chats = global.db.chats[m.chat]
  if (typeof chats !== 'object') global.db.chats[m.chat] = {}
  if (chats) {
  if (!('mute' in chats)) chats.mute = false
  if (!('antilink' in chats)) chats.antilink = false
  if (!('antiwame' in chats)) chats.antiwame = false
  if (!('antivirtex' in chats)) chats.antivirtex = false
  if (!('nsfw' in chats)) chats.nsfw = false
  if (!('event' in chats)) chats.event = false
  } else global.db.chats[m.chat] = {
  mute: false,
  antilink: false,
  antiwame: false,
  antivirtex: false,
  nsfw: false, 
  event: false
  }
  
  let settings = global.db.settings[botNumber]
  if (typeof settings !== 'object') global.db.settings[botNumber] = {}
  if (settings) {
  if (!('anticall' in settings)) settings.anticall = false
  } else global.db.settings[botNumber] = {
  anticall: false
  }
  } catch (err) {
  console.error(err)
  }
  
  for (let jid of mentionUser) {
  let user = global.db.users[jid]
  if (!user) continue
  let afkTime = user.afkTime
  if (!afkTime || afkTime < 0) continue
  let reason = user.afkReason || ''
  reply(`${a}Jangan Tag Dia!\nKarena Dia Sedang AFK ${reason ? '\nAlasan : ' + reason : 'Alasan : Nothing'}\nSelama ${clockString(new Date - afkTime)}${a}`.trim())}
  if (db.users[m.sender].afkTime > -1) {
  let user = global.db.users[m.sender]
  reply(`*Kamu berhenti AFK ${user.afkReason ? 'setelah ' + user.afkReason : ''}*\n*Selama ${clockString(new Date - user.afkTime)}*`.trim())
  user.afkTime = -1
  user.afkReason = ''
  }

  // Respon Cmd with media
  if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
  let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
  let { text, mentionedJid } = hash
  let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
  userJid: delxa.user.id,
  quoted: m.quoted && m.quoted.fakeObj
  })
  messages.key.fromMe = areJidsSameUser(m.sender, delxa.user.id)
  messages.key.id = m.key.id
  messages.pushName = m.pushName
  if (m.isGroup) messages.participant = m.sender
  let msg = {
  ...chatUpdate,
  messages: [proto.WebMessageInfo.fromObject(messages)],
  type: 'append'
  }
  delxa.ev.emit('messages.upsert', msg)
  }
		
  if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebaklagu[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  await delxa.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: '🎵 > TEBAK LAGU' }, type: 1 }], `🎵 | *Tebak Lagu*\n\n*Jawaban :* Benar ☑️`, 'Tekan Button Dibawah Ini Untuk Bermain Lagi', m)
  delete tebaklagu[m.sender.split('@')[0]]
  } else reply('*Maaf Kak Jawabanmu Salah 😢*')
  }

  if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = kuismath[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  await m.reply(`*Kuis Matematika*\n\n*Jawaban :* Benar ☑️`)
  delete kuismath[m.sender.split('@')[0]]
  } else reply('*Maaf Kak Jawabanmu Salah 😢*')
  }

  if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebakgambar[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  await delxa.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: '🖼 > TEBAK GAMBAR' }, type: 1 }], `🖼 | *Tebak Gambar*\n\n*Jawaban :* Benar ☑️`, 'Tekan Button Dibawah Ini Untuk Bermain Lagi', m)
  delete tebakgambar[m.sender.split('@')[0]]
  } else reply('*Maaf Kak Jawabanmu Salah 😢*')
  }

  if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = caklontong[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  await delxa.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: '👤 > CAK LONTONG' }, type: 1 }], `👤 | *Cak Lontong*\n\n*Jawaban :* Benar ☑️`, 'Tekan Button Dibawah Ini Untuk Bermain Lagi', m)
  delete caklontong[m.sender.split('@')[0]]
  } else reply('*Maaf Kak Jawaban Salah 😢*')
  }

  if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebakkata[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  await delxa.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: '✏️ > TEBAK KATA️' }, type: 1 }], `✏️ | *Tebak Kata*\n\n*Jawaban :* Benar ☑️`, 'Tekan Button Dibawah Ini Untuk Bermain Lagi', m)
  delete tebakkata[m.sender.split('@')[0]]
  } else reply('*Maaf Kak Jawaban Salah 😢*')
  }
  
  if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebakkalimat[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  await delxa.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: '📜 > TEBAK KALIMAT' }, type: 1 }], `📜 | *Tebak Kalimat*\n\n*Jawaban :* Benar ☑️`, 'Tekan Button Dibawah Ini Untuk Bermain Lagi', m)
  delete tebakkalimat[m.sender.split('@')[0]]
  } else reply('*Maaf Kak Jawaban Salah 😢*')
  }

  if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebaklirik[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  await delxa.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: '🎤 > TEBAK LIRIK‍' }, type: 1 }], `🎤 | *Tebak Lirik*\n\n*📜 : Jawaban :* Benar ☑️`, 'Tekan Button Dibawah Ini Untuk Bermain Lagi', m)
  delete tebaklirik[m.sender.split('@')[0]]
  } else reply('*Maaf Kak Jawabanmu Salah 😢*')
  }
  
  if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebaktebakan[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  await delxa.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: '🕹 > TEBAK TEBAKAN️' }, type: 1 }], `🕹 | *Tebak Tebakan*\n\n📜 : *Jawaban :* Benar ☑️\n*🎁 > Hadiah :* 5000 EXP`, 'Tekan Button Dibawah Ini Untuk Bermain Lagi', m)
  delete tebaktebakan[m.sender.split('@')[0]]
  } else reply('*Maaf Kak Jawabanmu Salah 😢*')
  }
  
  //TicTacToe
  this.game = this.game ? this.game : {}
  let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
  if (room) {
  let ok
  let isWin = !1
  let isTie = !1
  let isSurrender = !1
  // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
  if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
  isSurrender = !/^[1-9]$/.test(m.text)
  if (m.sender !== room.game.currentTurn) { // nek wayahku
  if (!isSurrender) return !0
  }
  if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
  m.reply({
  '-3': 'Game telah berakhir',
  '-2': 'Invalid',
  '-1': 'Posisi Invalid',
  0: 'Posisi Invalid',
  }[ok])
  return !0
  }
  if (m.sender === room.game.winner) isWin = true
  else if (room.game.board === 511) isTie = true
  let arr = room.game.render().map(v => {
  return {
  X: '❌',
  O: '⭕',
  1: '1️⃣',
  2: '2️⃣',
  3: '3️⃣',
  4: '4️⃣',
  5: '5️⃣',
  6: '6️⃣',
  7: '7️⃣',
  8: '8️⃣',
  9: '9️⃣',
  }[v]
  })
  if (isSurrender) {
  room.game._currentTurn = m.sender === room.game.playerX
  isWin = true
  }
  let winner = isSurrender ? room.game.currentTurn : room.game.winner
  let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
  if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
  room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
  if (room.x !== room.o) await delxa.sendText(room.x, str, m, { mentions: parseMention(str) } )
  await delxa.sendText(room.o, str, m, { mentions: parseMention(str) } )
  if (isTie || isWin) {
  delete this.game[room.id]
  }
  }
  
  //Suit PvP
  this.suit = this.suit ? this.suit : {}
  let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
  if (roof) {
  let win = ''
  let tie = false
  if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
  if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
  delxa.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
  delete this.suit[roof.id]
  return !0
  }
  roof.status = 'play'
  roof.asal = m.chat
  clearTimeout(roof.waktu)
  //delete roof[roof.id].waktu
  delxa.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${itsMe}`, m, { mentions: [roof.p, roof.p2] })
  if (!roof.pilih) delxa.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
  if (!roof.pilih2) delxa.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
  roof.waktu_milih = setTimeout(() => {
  if (!roof.pilih && !roof.pilih2) delxa.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
  else if (!roof.pilih || !roof.pilih2) {
  win = !roof.pilih ? roof.p2 : roof.p
  delxa.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
  }
  delete this.suit[roof.id]
  return !0
  }, roof.timeout)
  }
  let jwb = m.sender == roof.p
  let jwb2 = m.sender == roof.p2
  let g = /gunting/i
  let b = /batu/i
  let k = /kertas/i
  let reg = /^(gunting|batu|kertas)/i
  if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
  roof.pilih = reg.exec(m.text.toLowerCase())[0]
  roof.text = m.text
  reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
  if (!roof.pilih2) delxa.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
  }
  if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
  roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
  roof.text2 = m.text
  reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
  if (!roof.pilih) delxa.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
  }
  let stage = roof.pilih
  let stage2 = roof.pilih2
  if (roof.pilih && roof.pilih2) {
  clearTimeout(roof.waktu_milih)
  if (b.test(stage) && g.test(stage2)) win = roof.p
  else if (b.test(stage) && k.test(stage2)) win = roof.p2
  else if (g.test(stage) && k.test(stage2)) win = roof.p
  else if (g.test(stage) && b.test(stage2)) win = roof.p2
  else if (k.test(stage) && b.test(stage2)) win = roof.p
  else if (k.test(stage) && g.test(stage2)) win = roof.p2
  else if (stage == stage2) tie = true
  delxa.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang 🏆\n` : ` Kalah 😣\n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang 🏆\n` : ` Kalah 😣\n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
  delete this.suit[roof.id]
  }
  }
	
  // 🗿 Bot Status
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
  return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
  }, { speed: 0, total: 0, times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }})
  
  // Antilink
  if (db.chats[m.chat].antilink) {
  if (budy.match(`chat.whatsapp.com`)) {
  reply(`Link Grup Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  let gclink = (`https://chat.whatsapp.com/`+await delxa.groupInviteCode(m.chat))
  let isLinkThisGc = new RegExp(gclink, 'i')
  let isgclink = isLinkThisGc.test(m.text)
  if (isgclink) return reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
  if (isGroupAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
  if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
  delxa.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
  
  // Antiwame
  if (db.chats[m.chat].antiwame) {
  if (budy.match(`wa.me`)) {
  reply(`Link Wame Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (isGroupAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
  if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
  delxa.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
  if (db.chats[m.chat].antiwame) {
  if (budy.match(`http://wa.me`)) {
  reply(`Link Wame Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (isGroupAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
  if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
  delxa.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
  if (db.chats[m.chat].antiwame) {
  if (budy.match(`https://wa.me`)) {
  reply(`Link Wame Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (isGroupAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
  if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
  delxa.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
  
  //Antivirtex
  if (db.chats[m.chat].antivirtex) {
  if (budy.length > 3500) {
  m.reply('Tandai telah dibaca\n'.repeat(300))
  reply(`Virtex Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  delxa.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }

  // FUNCTION ANTI CALL
  if (global.anticall) {
  if (db.settings[botNumber].anticall) {
  delxa.ws.on('CB:call', async (json) => {
  const callerId = json.content[0].attrs['call-creator']
  if (json.content[0].tag == 'offer') {
  var pa7rick = await delxa.sendContact(callerId, global.owner)
  delxa.sendMessage(callerId, { text: `Sistem otomatis block!\nJangan menelpon bot!\nSilahkan Hubungi Owner Untuk Dibuka !`}, { quoted : pa7rick })
  await sleep(8000)
  await delxa.updateBlockStatus(callerId, "block")
  }
  })
  }
  }
  
  function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
  }

  //🗿 Public & Self
  if (!delxa.public) {
  if (!m.key.fromMe && !isCreator) return
  }
  
  // 🗿 Push Message To Console
  if (m.message) {
  console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m DELXA \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
  }
  
  //Auto Read All
  if (global.autoReadAll) { if (m.chat) { delxa.sendReadReceipt(m.chat, m.sender, [m.key.id]) }}
  if (global.autoRecord) { if (m.chat) { delxa.sendPresenceUpdate('recording', m.chat) }}
  if (global.autoTyping) { if (m.chat) { delxa.sendPresenceUpdate('composing', m.chat) }}
  if (global.available) { if (m.chat) { delxa.sendPresenceUpdate('available', m.chat) }}
  
  //Update Database
  setInterval(() => {
  fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
  }, 60 * 1000)
   
  const sendFileFromUrl = async (from, url, caption, mek, men) => {
  let mime = '';
  let res = await axios.head(url)
  mime = res.headers['content-type']
  if (mime.split("/")[1] === "gif") {
  return delxa.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
  }
  let type = mime.split("/")[0]+"Message"
  if(mime === "application/pdf"){
  return delxa.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: mek })
  }
  if(mime.split("/")[0] === "image"){
  return delxa.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
  }
  if(mime.split("/")[0] === "video"){
  return delxa.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
  }
  if(mime.split("/")[0] === "audio"){
  return delxa.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mp4'}, {quoted: m })
  }
  }
  const sendButton = (type, from, text, buttons, men, quoted, options) => { 
  if (type == 'image') {
  delxa.sendMessage(from, { caption: text, image: options ? options : global.thumb, buttons: buttons, headerType: 'IMAGE', mentions: men }, {quoted: m})
  } else if (type == 'document') {
  delxa.sendMessage(from, { caption: text, document: options ? options : fs.readFileSync(doc), buttons: buttons, headerType: 'DOCUMENT', mentions: men }, {quoted: m})
  } else if (type == 'video') {
  if (options === undefined || options === null) return reply('illegal method, chat owner bot')
  delxa.sendMessage(from, { caption: text, video: options, buttons: buttons, headerType: 'VIDEO', mentions: men }, {quoted: m})
  } else if (type == 'location') {
  delxa.sendMessage(from, { caption: text, location: { jpegthumb: options ? options : global.thumb }, buttons: buttons, headerType: 'LOCATION', mentions: men })
  } else if (type == 'text') {
  delxa.sendMessage(from, { caption: text, buttons: buttons, headerType: 'TEXT', mentions: men }, {quoted: m})
  } else {
  reply('invalid type, please contact the owner bot')
  }
  }
  
  //Get Pp User
  try {
  ppuse = await delxa.profilePictureUrl(m.sender, 'image')
  } catch {
  ppuse = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  let ppuser = await getBuffer(ppuse)
  
  abtn = `${ucapanWaktu1} Kak *${pushname}*\n\n`
  
  //Random Nomer
  function randomNomor(min, max = null) {
  if (max !== null) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
  return Math.floor(Math.random() * min) + 1
  }
  }
  
  switch(command) {
  
  //Maker Menu
  case 'emoji':case 'semoji':
  if (!q) return reply(`Example : ${prefix + command} 😂`)
  reply(mess.wait)
  hex2 = args.join(' ') 
  let sem = [0,1,2,3,4,5,6,7,8,9,10,11]
  let semoji = sem[Math.floor(Math.random() * sem.length)]
  emoji.get(`${hex2}`).then(emoji => {
  teks = `${emoji.images[semoji].url}`
  delxa.sendImageAsSticker(m.chat, teks, m, { packname: global.packname, author: global.author })
  })
  break
  case 'swm': case 'wm': case 'take': {
  if (!quoted) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  if (!text) return reply(`Kirim perintah ${prefix + command} packname|author`)
  if (!text.includes('|')) return reply(`Kirim perintah ${prefix + command} packname|author`)
  reply (mess.wait)
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await delxa.sendImageAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  let media = await quoted.download()
  let encmedia = await delxa.sendVideoAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
  await fs.unlinkSync(encmedia)
  } else {
  reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  }
  }
  break
  
  // CASE GAME MENU
  case 'trut':
  case 'truth': {
  var data = await fetchJson(`https://api.dhamzxploit.my.id/api/truth`)
  imgtruth = await getBuffer(picak+'Truth')
  let buttons = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: '🏡 > Back Menu'}, type: 1}, 
  {buttonId: `${prefix}truth`, buttonText: {displayText: '🔄 > Truth'}, type: 1}
  ]
  let buttonMessage = {
  image: imgtruth,
  jpegThumbnail: imgtruth,
  caption: data.result,
  footer: `© ${global.namaowner}`,
  buttons: buttons,
  headerType: 4,
  }
  delxa.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
  break
  case 'dare': {
  var data = await fetchJson(`https://api.dhamzxploit.my.id/api/dare`)
  imgdare = await getBuffer(picak+'Dare')
  let buttons = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: '🏡 > Back Menu'}, type: 1}, 
  {buttonId: `${prefix}dare`, buttonText: {displayText: '🔄 > dare'}, type: 1}
  ]
  let buttonMessage = {
  image: imgdare,
  jpegThumbnail: imgdare,
  caption: data.result,
  footer: `© ${global.namaowner}`,
  buttons: buttons,
  headerType: 4,
  }
  delxa.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
  break
  case 'bagaimanakah':
  if (!text) return reply('Yang Lu Mau Tanyain Apaan?')
  const bagai = ['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Yo Ndak Tau, Kok Tanya Saia']
  const gaimana = bagai[Math.floor(Math.random() * bagai.length)]
  reply(gaimana)
  break
  case 'kapankah':
  if (!text) return reply('Yang Lu Mau Tanyain Apaan?')
  const kapan = ['1 Hari Lagi','1 Minggu Lagi','1 Tahun Lagi','1 Abad Lagi','Tidak Akan Pernah','Hmmm...','Tidak Ada']
  const kah = kapan[Math.floor(Math.random() * kapan.length)]
  reply(kah)
  break
  case 'apakah':
  if (!text) return reply('Yang Lu Mau Tanyain Apaan?')
  const apakah = ['Tidak Akan Pernah','Tidak Mungkin','Imposible','Ngarep 🤣','Sudahi Halumu Mari Membabu Bersamaku','Hmmm...']
  const apkah = apakah[Math.floor(Math.random() * apakah.length)]
  reply(apkah)
  break
  case 'suit':
  if (!m.isGroup) return reply(mess.group)
  if (args.length < 1) return reply('Pilih Lah Emoticon Dibawah Ini Untuk Memainkannya :\n✌️ ✊ ✋')
  if (args[0] === '✌️' ) {
  gun = ["*Kamu Memilih :* ✌️\n*Bot Memilih :* ✋\n*Hasil :* Kamu Menang 😔","*Kamu Memilih :* ✌️\n*Bot Memilih :* ✊\n*Hasil :* Kamu Kalah 🙂","*Kamu Memilih :* ✌️\n*Bot Memilih :* ✌️\n*Hasil* Kita Seri 😏"]
  ting = gun[Math.floor(Math.random() * gun.length)]
  reply(ting)
  } else if (args[0] === '✊') {
  ba = ["*Kamu Memilih :* ✊\n*Bot Memilih :* ✌️\n*Hasil :* Kamu Menang 😔","*Kamu Memilih :* ✊\*Bot Memilih :* ✋\n*Hasil :* Kamu Kalah 🙂","*Kamu Memilih :* ✊\n*Bot Memilih :* ✊\n*Hasil :* Kita Seri 😏"]
  tu = ba[Math.floor(Math.random() * ba.length)]
  reply(tu)
  } else if (args[0] === '✋') {
  ker = ["*Kamu Memilih :* ✋\n*Bot Memilih :* ✊\n*Hasil :* Kamu Menang 😁","*Kamu Memilih :* ✋\n*Bot Memilih :* ✌️\n*Hasil :* Kamu Kalah 🙂","*Kamu Memilih :* ✋\n*Bot Memilih :* ✋\n*Hasil :* Kita Seri 😏"]
  tas = ker[Math.floor(Math.random() * ker.length)]
  reply(tas)
  } else {
  reply('Pilih Lah Emoticon Tangan Untuk Memainkannya')
  }
  break
  case 'aduayam':
  if (!m.isGroup) return reply(mess.group)
  if (args.length < 1) return reply('Pilih Lah Emoticon Ayam Untuk Memainkannya')
  if (args[0] === '🐤' ) {
  kontol = ["*Ayam Yang Kamu Gunakan :* 🐤\n*Ayam Yang Bot Gunakan :* 🐣\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Menang 😔","*Ayam Yang Kamu Gunakan :* 🐤\n*Ayam Yang Bot Gunakan :* 🐥\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Kalah 🙂","*Ayam Yang Kamu Gunakan :* 🐤\n*Ayam Yang Bot Gunakan :* 🐤\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kita Seri 😏"]
  kon = kontol[Math.floor(Math.random() * kontol.length)]
  reply(kon)
  } else if (args[0] === '🐣') {
  memek = ["*Ayam Yang Kamu Gunakan :* 🐣\n*Ayam Yang Bot Gunakan :* 🐥\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Menang 😔","*Ayam Yang Kamu Gunakan :* 🐣\n*Ayam Yang Bot Gunakan :* 🐥\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Kalah 🙂","*Ayam Yang Kamu Gunakan :* 🐣\n*Ayam Yang Bot Gunakan :* 🐣\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kita Seri 😏"]
  mek = memek[Math.floor(Math.random() * memek.length)]
  reply(mek)
  } else if (args[0] === '🐓') {
  jem = ["*Ayam Yang Kamu Gunakan :* 🐓\n*Ayam Yang Bot Gunakan :* 🐥\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Menang 😁","*Ayam Yang Kamu Gunakan :* 🐓\n*Ayam Yang Bot Gunakan :* 🦃\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Kalah 🙂","*Ayam Yang Kamu Gunakan :* 🐓\n*Ayam Yang Bot Gunakan :* 🐓\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kita Seri 😏"]
  jembut = jem[Math.floor(Math.random() * jem.length)]
  reply(jembut)
  } else if (args[0] === '🦃') {
  jem = ["*Ayam Yang Kamu Gunakan :* 🦃\n*Ayam Yang Bot Gunakan :* 🐥\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Menang 😁","*Ayam Yang Kamu Gunakan :* ??\n*Ayam Yang Bot Gunakan :* 🐓\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Menang 🙂","*Ayam Yang Kamu Gunakan :* 🦃\n*Ayam Yang Bot Gunakan :* 🐣\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Menang 🗿"]
  jembut = jem[Math.floor(Math.random() * jem.length)]
  reply(jembut)
  } else {
  reply('Pilih Lah Emoticon Ayam Untuk Memainkannya')
  }
  break
  
  //Anime Menu
  case 'couple': case 'ppcouple': {
  reply(mess.wait)
  let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
  let random = anu[Math.floor(Math.random() * anu.length)]
  delxa.sendMessage(m.chat, { image: { url: random.male }, caption: `Ini Yang Cowok Kak ${pushname}` }, { quoted: m })
  delxa.sendMessage(m.chat, { image: { url: random.female }, caption: `Ini Yang Cewek Kak ${pushname}` }, { quoted: m })
  }
  break
  case 'waifu': case 'loli':
  reply(mess.wait)
  axios.get(`https://api.waifu.pics/sfw/waifu`)
  .then(({data}) => {
  sendFileFromUrl(m.chat, data.url, mess.done, m)
  })
  break
  case 'cry': case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'waifu':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
  reply(mess.wait)
  axios.get(`https://api.waifu.pics/sfw/${command}`)
  .then(({data}) => {
  sendFileFromUrl(m.chat, data.url, mess.done, m)
  })
  break
 
  case 'list': case 'command':
  const sections = [
  {
  title: "📖 | All Menu Bot",
  rows: [
  {title: "📜 > All Menu", rowId: "allmenu", description: `Menampilkan Seluruh Menu ${global.namabot}`}
  ]
  },
  {
  title: `🏡 | List Menu ${global.namabot}`,
  rows: [
  {title: "👤 > Owner Menu", rowId: "ownermenu", description: `Untuk Menampilkan Menu Khusus Owner`},
  {title: "👥 > Group Menu", rowId: "groupmenu", description: `Untuk Menampilkan Menu Khusus Group`}, 
  {title: "📥 > Download Menu", rowId: "downloadmenu", description: `Untuk Menampilkan Menu Khusus Download`},
  {title: "🕵🏻 > Anonymous Menu", rowId: "anonymousmenu", description: `Untuk Menampilkan Menu Khusus Anonymous`},
  {title: "📁 > Database Menu", rowId: "databasemenu", description: `Untuk Menampilkan Menu Database`},
  {title: "🔎 > Search Menu", rowId: "searchmenu", description: `Untuk Menampilkan Menu Search`},
  {title: "🖨 > Maker Menu", rowId: "makermenu", description: `Untuk Menampilkan Menu Maker`},
  {title: "🗓 > Informasi Menu️", rowId: "infomenu", description: `Untuk Menampilkan Menu Informasi`},
  {title: "🖼 > Random Sticker Menu", rowId: "stickermenu", description: `Untuk Menampilkan Menu Random Sticker`},
  {title: "👩🏻 > Asupan Menu", rowId: "asupanmenu", description: `Untuk Menampilkan Menu Asupan`},
  {title: "🎯 > Fun Menu", rowId: "funmenu", description: `Untuk Menampilkan Menu Fun`},
  {title: "🎮 > Game Menu", rowId: "gamemenu", description: `Untuk Menampilkan Menu Game`},
  {title: "🎩 > Random Menu", rowId: "randomenu", description: `Untuk Menampilkan Menu Random`},
  {title: "⛩️ > Anime Menu️", rowId: "animemenu", description: `Untuk Menampilkan Menu Anime`},
  {title: "🔦 > Other Menu️", rowId: "othermenu", description: `Untuk Menampilkan Menu Other`}
  ]
  },
  {
  title: "🏕 | Information Creators",
  rows: [
  {title: "✍🏻 > Contributors", rowId: "tqto", description: `Ucapan Terima Kasih Kepada Constributor`},
  {title: "🗂 > Script", rowId: "sc", description: `Menampilkan Sumber Script ${global.namabot}`}, 
  {title: "👑 > Creator", rowId: "creator", description: `Menampilkan Kontak Creator ${global.namabot}`}
  ]
  }
  ]
  delxa.sendListMsg(m.chat, list(pushname, ucapanWaktu, namabot), '© Credit By RyuukaBotz', '', `📜 > Click Here !`, sections, m)
  break
  case 'menu': case 'help':
  let txtmenu = `*${ucapanWaktu1} ${pushname}*\n*☃️ For Your Info :* ${global.namabot} Adalah Hasil Recode Ryuuka Team Menggunakan Base Dari Dika Ardnt (Hisoka Morou)\n\n*🥅 Tips :* ${tips}\n`
  imgmenu = global.thumb
  let buttonMessagee = {
  'document':{'url':'https://youtube.com/c/RyuukaBotz'},
  'mimetype':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'fileName':`© ${global.namaowner}`,
  'fileLength':'999999999999999',
  'pageCount':'505',
  'contextInfo':{
  'externalAdReply':{
  'showAdAttribution':true, 
  'mediaType':1,
  'previewType':'pdf',
  'title':`${ucapanWaktu}`,
  'thumbnail':imgmenu,
  'renderLargerThumbnail': true,
  'sourceUrl':'https://youtube/c/RyuukaBotz'}},
  'caption':txtmenu,
  'footer':`© ${global.namaowner}`,
  'buttons':[
  {'buttonId':'allmenu','buttonText':{'displayText':'🗃 > All Menu'},'type':1},
  {'buttonId':'donasi','buttonText':{'displayText':'💸 > Donasi'},'type':1}, 
  {'buttonId':'bot','buttonText':{'displayText':'💻 > Informasi Bot'},'type':1},
  ],
  'headerType':6}
  await delxa.sendMessage(from, buttonMessagee, { quoted:ftroli })
  break  
  
  // CASE RULES
  case 'rules': case 'ruls': {
  imgrules = await getBuffer(picak+'Rules')
  let buttons = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: '🏡 > Back Menu'}, type: 1}
  ]
  let buttonMessage = {
  image: imgrules,
  jpegThumbnail: imgrules,
  caption: rules(),
  footer: `© ${global.namaowner}`,
  buttons: buttons,
  headerType: 4,
  }
  delxa.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
  break
  
  // CASE INFO BOT
  case 'listpc': {
  if (!isCreator) return reply(mess.owner)
  let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
  let tekslist = `*🔒 | LIST PERSONAL CHAT*\n\n`
  tekslist += `*📱 | Total Chat :* ${anu.length} Chat\n\n`
  for (let i of anu) {
  let nama = store.messages[i].array[0].pushName
  tekslist += `📛 > *Nama :* ${nama}\n`
  tekslist += `👤 > *User :* @${i.split('@')[0]}\n`
  tekslist += `🔗 > *Link Chat :* https://wa.me/${i.split('@')[0]}\n\n`
  tekslist += `──────────────────────\n\n`
  }
  delxa.sendTextWithMentions(m.chat, tekslist, m)
  }
  break
  case 'listgc': {
  let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
  let tekslistgc = `👥 | *LIST GROUP CHAT*\n\n`
  tekslistgc += `📱 | Total Group : ${anu.length} Group\n\n`
  for (let e of anu) {
  let metadata = await delxa.groupMetadata(e)
  tekslistgc += `📛 > *Nama :* ${metadata.subject}\n`
  tekslistgc += `👤 > *Owner Grup :* @${metadata.owner.split('@')[0]}\n`
  tekslistgc += `🌱 > *ID :* ${metadata.id}\n`
  tekslistgc += `⏳ > *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
  tekslistgc += `👥 > *Member :* ${metadata.participants.length}\n\n`
  tekslistgc += `──────────────────────\n\n`
  }
  delxa.sendTextWithMentions(m.chat, tekslistgc, m)
  }
  break
  case 'listonline': case 'liston': {
  if(!m.isGroup) reply(mess.group)
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  let online = [...Object.keys(store.presences[id]), botNumber]
  delxa.sendText(m.chat, '⏰ | List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
  }
  break
  
  //CASE absen
  case 'absen': {
  if (!m.isGroup) return reply(mess.group)
  if (!isGroupAdmins) return reply(mess.admin)
  if (m.chat in absen) throw `_Masih ada absen di chat ini!_\n\n*${prefix}hapusabsen* - untuk menghapus absen`
  if (!text) throw `Masukkan Alasan Melakukan absen, Example: *${prefix + command} Pagi Hari*`
  m.reply(`absen dimulai!\n\n*${prefix}hadir* - untuk ya\n*${prefix}tidakhadir* - untuk tidak\n*${prefix}cekabsen* - untuk mengecek absen\n*${prefix}hapusabsen* - untuk menghapus absen`)
  absen[m.chat] = [q, [], []]
  await sleep(1000)
  hadir = absen[m.chat][1]
  tidakhadir = absen[m.chat][2]
  teks_absen = `*ABSEN IN THE DAY 🌤️*

*Alasan :* ${absen[m.chat][0]}

┌〔 *Member Hadir* 〕
│ 
├ *Hadir :* ${absen[m.chat][1].length}
│
│ 
└────

┌〔 *Member Tidak Hadir* 〕
│ 
├ *Tidak Hadir :* ${absen[m.chat][2].length}
│
│ 
└────

*${prefix}hapusabsen* - untuk menghapus absen`
  let buttonsabsen = [{buttonId: `hadir`, buttonText: {displayText: 'HADIR 🏅'}, type: 1},{buttonId: `tidakhadir`, buttonText: {displayText: 'TIDAK HADIR 📝'}, type: 1}]
  let buttonMessageabsen = {
  text: teks_absen,
  footer: 'Jika Button Tidak Muncul Ketik Hadir/Tidakhadir',
  buttons: buttonsabsen,
  headerType: 1
  }
  delxa.sendMessage(m.chat, buttonMessageabsen)
  }
  break
  case 'hadir': {
  if (!m.isGroup) return reply(mess.group)
  if (!(m.chat in absen)) throw `_*Tidak ada absen digrup ini!*_\n\n*${prefix}absen* - untuk memulai absen`
  isabsen = absen[m.chat][1].concat(absen[m.chat][2])
  wasabsen = isabsen.includes(m.sender)
  if (wasabsen) throw 'Kamu Sudah absen'
  absen[m.chat][1].push(m.sender)
  menabsen = absen[m.chat][1].concat(absen[m.chat][2])
  teks_absen = `*ABSEN IN THE DAY 🌤️*

*Alasan :* ${absen[m.chat][0]}

┌〔 *Member Hadir* 〕
│ 
├ *Hadir :* ${absen[m.chat][1].length}
${absen[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 *Member Tidak Hadir* 〕
│ 
├ *Tidak Hadir :* ${absen[m.chat][2].length}
${absen[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusabsen* - untuk menghapus absen`
  let buttonshadir = [{buttonId: `hadir`, buttonText: {displayText: 'HADIR 🏅'}, type: 1},{buttonId: `tidakhadir`, buttonText: {displayText: 'TIDAK HADIR 📝'}, type: 1}]
  let buttonMessagehadir = {
  text: teks_absen,
  footer: 'Jika Button Tidak Muncul Ketik Hadir/Tidakhadir',
  buttons: buttonshadir,
  headerType: 1,
  mentions: menabsen
  }
  delxa.sendMessage(m.chat, buttonMessagehadir)
  }
  break
  case 'tidakhadir': {
  if (!m.isGroup) return reply(mess.group)
  if (!(m.chat in absen)) throw `_*Tidak ada absen digrup ini!*_\n\n*${prefix}absen* - untuk memulai absen`
  isabsen = absen[m.chat][1].concat(absen[m.chat][2])
  wasabsen = isabsen.includes(m.sender)
  if (wasabsen) throw 'Kamu Sudah absen'
  absen[m.chat][2].push(m.sender)
  menabsen = absen[m.chat][1].concat(absen[m.chat][2])
  teks_absen = `*ABSEN IN THE DAY 🌤️*

*Alasan :* ${absen[m.chat][0]}

┌〔 *Member Hadir* 〕
│ 
├ *Hadir :* ${absen[m.chat][1].length}
${absen[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 *Member Tidak Hadir* 〕
│ 
├ *Tidak Hadir :* ${absen[m.chat][2].length}
${absen[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusabsen* - untuk menghapus absen`
  let buttonstidakhadir = [{buttonId: `hadir`, buttonText: {displayText: 'HADIR 🏅'}, type: 1},{buttonId: `tidakhadir`, buttonText: {displayText: 'TIDAK HADIR 📝'}, type: 1}]
  let buttonMessagetidakhadir = {
  text: teks_absen,
  footer: 'Jika Button Tidak Muncul Ketik Hadir/Tidakhadir',
  buttons: buttonstidakhadir,
  headerType: 1,
  mentions: menabsen
  }
  delxa.sendMessage(m.chat, buttonMessagetidakhadir)
  }
  break
  case 'cekabsen':
  if (!m.isGroup) return reply(mess.group)
  if (!(m.chat in absen)) throw `_*Tidak ada absen digrup ini!*_\n\n*${prefix}absen* - untuk memulai absen`
  teks_absen = `*ABSEN IN THE DAY 🌤️*

*Alasan :* ${absen[m.chat][0]}

┌〔 *Member Hadir* 〕
│ 
├ Total: ${hadir.length}
${absen[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 *Member Tidak Hadir* 〕
│ 
├ Total: ${tidakhadir.length}
${absen[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusabsen* - untuk menghapus absen


global.namaowner
`
  delxa.sendTextWithMentions(m.chat, teks_absen, m)
  break
  case 'deleteabsen': case'delabsen': case 'hapusabsen': {
  if (!m.isGroup) return reply(mess.group)
  if (!isGroupAdmins) return reply(mess.admin)
  if (!(m.chat in absen)) throw `_*Tidak ada absen digrup ini!*_\n\n*${prefix}absen* - untuk memulai absen`
  delete absen[m.chat]
  m.reply('Berhasil Menghapus Sesi absen Di Grup Ini')
  }
  break
  
  // CASE DONASI
  case 'donasi': {
  imgdonasi = global.donasi
  let buttons = [
  {buttonId: `${prefix}owner`, buttonText: {displayText: '🤴🏻 > Owner'}, type: 1}
  ]
  let buttonMessage = {
  image: imgdonasi,
  jpegThumbnail: imgdonasi,
  caption: donasi(),
  footer: `© ${global.namaowner}`,
  buttons: buttons,
  headerType: 4,
  }
  delxa.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
  break

  // CASE SEWA BOT
  case 'sewabot': {
  imgsewa = await getBuffer(picak+'Sewa Bot')
  let buttons = [
  {buttonId: `${prefix}owner`, buttonText: {displayText: '🤴🏻 > Owner'}, type: 1}
  ]
  let buttonMessage = {
  image: imgsewa,
  jpegThumbnail: imgsewa,
  caption: sewa(),
  footer: `© ${global.namaowner}`,
  buttons: buttons,
  headerType: 4,
  }
  delxa.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
  break
  
  // CASE OWNER MENU
  case 'join': {
  if (!isCreator) return reply(mess.owner)
  if (!text) throw 'Masukkan Link Group!'
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
  reply(mess.wait)
  let result = args[0].split('https://chat.whatsapp.com/')[1]
  await delxa.groupAcceptInvite(result).then((res) => reply(mess.done)).catch((err) => reply(fiturError(prefix)))
  }
  break
  case 'leave': {
  if (!isCreator) return reply(mess.owner)
  await delxa.groupLeave(m.chat).then((res) => reply('Sayonara 👋\nSulit Di Kontrol Semoga Hari Kalian Mengontol')).catch((err) => reply(fiturError()))
  }
  break
  case 'block': {
  if (!isCreator) return reply(mess.owner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await delxa.updateBlockStatus(users, 'block').then((res) => reply(mess.done)).catch((err) => reply(fiturError(prefix)))
  }
  break
  case 'unblock': {
  if (!isCreator) return reply(mess.owner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await delxa.updateBlockStatus(users, 'unblock').then((res) => reply(mess.done)).catch((err) => reply(fiturError(prefix)))
  }
  break
  case 'setppbot': {
  if (!isCreator) return reply(mess.owner)
  if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
  if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
  if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
  let media = await delxa.downloadAndSaveMediaMessage(quoted)
  await delxa.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
  reply(mess.done)
  }
  break
  case 'public': {
  if (!isCreator && !m.key.fromMe) return reply(mess.owner)
  delxa.public = true
  reply('Sukses Mengubah Mode Bot Menjadi Publik')
  }
  break
  case 'self': {
  if (!isCreator && !m.key.fromMe) return reply(mess.owner)
  delxa.self = false
  reply('Sukses Mengubah Mode Bot Menjadi Self')
  }
  break
  case 'eval': {
  if (!isCreator && !m.key.fromMe) return reply(mess.owner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return reply(bang)
  }
  try {
  reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  reply(String(e))
  }
  }
  break
  case 'anticall':
  if (!isCreator) return reply(mess.owner)
  if (args[0] === "on") {
  if (db.settings[botNumber].anticall) return reply(`Sudah Aktif Sebelumnya`)
  db.settings[botNumber].anticall = true
  reply(`Anticall Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.settings[botNumber].anticall) return reply(`Sudah Nonaktif Sebelumnya`)
  db.settings[botNumber].anticall = false
  reply(`Anticall Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsanticall = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON ⚡' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF ⚰️' }, type: 1 }
  ]
  await delxa.sendButtonText(m.chat, buttonsanticall, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, ftroli)
  }
  break
  case 'setcmd': {
  if (!m.quoted) throw 'Reply Pesan!'
  if (!m.quoted.fileSha256) throw 'SHA256 Hash Tidak Ditemukan ❎'
  if (!text) throw `Untuk Command Apa?`
  let hash = m.quoted.fileSha256.toString('base64')
  if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎'
  global.db.sticker[hash] = {
  text,
  mentionedJid: m.mentionedJid,
  creator: m.sender,
  at: + new Date,
  locked: false,
  }
  reply(mess.done)
  }
  break
  case 'delcmd': {
  let hash = m.quoted.fileSha256.toString('base64')
  if (!hash) throw `Tidak ada hash`
  if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎'    
  delete global.db.sticker[hash]
  reply(mess.done)
  }
  break
  case 'listcmd': {
  let teks = `*List Hash 🚀*
Info: *bold* hash is Locked 🔒

*Hash ☕ :*
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
  delxa.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
  }
  break
  case 'lockcmd': {
  if (!isCreator) return reply(mess.owner)
  if (!m.quoted) throw 'Reply Pesan!'
  if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
  let hash = m.quoted.fileSha256.toString('base64')
  if (!(hash in global.db.sticker)) throw 'Hash not found in database'
  global.db.sticker[hash].locked = !/^un/i.test(command)
  reply(mess.done)
  }
  break
  case 'addmsg': {
  if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
  if (!text) throw `Example : ${prefix + command} nama file`
  let msgs = global.db.database
  if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
  msgs[text.toLowerCase()] = quoted.fakeObj
 reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
   
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
  }
  break
  case 'getmsg': {
  if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
  let msgs = global.db.database
  if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
  delxa.copyNForward(m.chat, msgs[text.toLowerCase()], true)
  }
  break
  case 'listmsg': {
  let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
  let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
  let teks = 'LIST DATABASE 📂\n\n'
  for (let i of seplit) {
  teks += `📛 *Name :* ${i.nama}\n🚀 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
  }
  reply(teks)
  }
  break
  case 'delmsg': case 'deletemsg': {
  let msgs = global.db.database
  if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
  delete msgs[text.toLowerCase()]
  reply(`Berhasil menghapus '${text}' dari list pesan`)
  }
  break
  case 'bc': case 'broadcast': case 'bcall': {
  if (!isCreator && !m.key.fromMe) return reply(mess.owner)
  if (!text) throw `Text mana?\n\nExample : ${prefix + command} ${global.namaowner}`
  let anu = await store.chats.all().map(v => v.id)
  let getGroups = await delxa.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anuan = groups.map(v => v.id)
  reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let yoi of anu && anuan) {
  await sleep(1500)
  let txt = `*Broadcast ${global.namabot}*\n\n${text}`
  delxa.sendText(yoi, txt, fkontak)
  }
  reply('Sukses Broadcast')
  }
  break
  
  // CASE GROUP MENU
  case 'afk': {
  if (!m.isGroup) return reply(mess.group)
  let user = global.db.users[m.sender]
  user.afkTime = + new Date
  user.afkReason = text
  reply(`*${m.pushName} Sekarang Afk ${text ? 'Karena ' + text : 'Nothing'}*`)
  }
  break  
  case 'antilink':
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].antilink) return reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].antilink = true
  reply(`Antilink Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antilink) return reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].antilink = false
  reply(`Antilink Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON ⚡' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF ⚰️' }, type: 1 }
  ]
  await delxa.sendButtonText(m.chat, buttonsantilink, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, ftroli)
  }
  break
  case 'antiwame':
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].antiwame) return reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].antiwame = true
  reply(`Antiwame Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antiwame) return reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].antiwame = false
  reply(`Antiwame Berhasil Di Nonaktifkan !`)
  } else {
  let buttonswame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON ⚡' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF ⚰️' }, type: 1 }
  ]
  await delxa.sendButtonText(m.chat, buttonswame, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, ftroli)
  }
  break
  case 'antivirtex':
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].antivirtex) return reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].antivirtex = true
  reply(`Antivirtex Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antivirtex) return reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].antivirtex = false
  reply(`Antivirtex Berhasil Di Nonaktifkan !`)
  } else {
  let buttonspirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON ⚡' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF ⚰️' }, type: 1 }
  ]
  await delxa.sendButtonText(m.chat, buttonspirtex, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, ftroli)
  }
  break
  case 'kick': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (!m.quoted && !text) return reply('Tag Orang Yang Mau Di Kick!!')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await delxa.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(kickUser())).catch((err) => reply(fiturError(prefix)))
  }
  break
  case 'add': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (!m.quoted && !text) return reply('Yang mau di add siapa??')
  if (args[0].startsWith('08')) return reply('Gunakan kode negara 62 Gan')
  let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await delxa.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(addUser())).catch((err) => reply(fiturError(prefix)))
  }
  break
  case 'promote': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (!m.quoted && !text) return reply('Tag Orang Yang Mau Di Promote!!')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await delxa.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(proMote())).catch((err) => reply(fiturError(prefix)))
  }
  break
  case 'demote': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (!m.quoted && !text) return reply('Tag Orang Yang Mau Di Demote!!')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await delxa.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(deMote())).catch((err) => reply(fiturError(prefix)))
  }
  break
  case 'setname': case 'setsubject': case 'setnamagc':{
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (!text) throw 'Text nya Mana?'
  await delxa.groupUpdateSubject(m.chat, text).then((res) => reply(namaGrup(text))).catch((err) => reply(fiturError(prefix)))
  }
  break
  case 'linkgroup': case 'linkgc': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  let response = await delxa.groupInviteCode(m.chat)
  delxa.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
  }
  break 
  case 'revoke':
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  await delxa.groupRevokeInvite(from)
  .then( res => {
  reply(`Sukses menyetel tautan undangan grup ini`)
  }).catch(() => reply(fiturError()))
  break
  case 'tagall': case 'infoall':
  if (!m.isGroup) return reply(mess.group)
  if (!isGroupAdmins) return reply(mess.admin)
  let tekss = `*PENGUMUMAN 📢*\n\n*Pesan : ${q ? q : 'Nothing'}*\n\n`
  for (let mem of participants) {
  tekss += `🌱 @${mem.id.split('@')[0]}\n`
  }
  tekss += `\n*${global.namaowner}*`
  delxa.sendMessage(m.chat, { text: tekss, mentions: participants.map(a => a.id) }, { quoted: m })
  break
  case 'hidetag':
  if (!m.isGroup) return reply(mess.group)
  if (!isGroupAdmins) return reply(mess.admin)
  delxa.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)})
  break
  case 'setppgroup': case 'setppgrup': case 'setppgc': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
  if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
  if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
  let media = await delxa.downloadAndSaveMediaMessage(quoted)
  await delxa.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
  reply(mess.done)
  }
  break
  case 'ephemeral': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (!text) throw 'Masukkan value enable/disable'
  if (args[0] === 'enable') {
  await delxa.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(epOn())).catch((err) => reply(fiturError(prefix)))
  } else if (args[0] === 'disable') {
  await delxa.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(epOff())).catch((err) => reply(fiturError(prefix)))
  }
  }
  break
  case 'group': case 'grup': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (args[0] === 'tutup'){
  await delxa.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
  } else if (args[0] === 'buka'){
  await delxa.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
  } else {
  let buttonsgroup = [
  { buttonId: `${command} buka`, buttonText: { displayText: 'BUKA ⚡' }, type: 1 },
  { buttonId: `${command} tutup`, buttonText: { displayText: 'TUTUP ⚰️' }, type: 1 }
  ]
  await delxa.sendButtonText(m.chat, buttonsgroup, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} buka/tutup`, ftroli)
  }
  }
  break

  // CASE MAKER MENU
  case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stikerin': {
  if (!quoted) throw `Reply Video/Image Dengan Caption ${prefix + command}`
  reply(mess.wait)
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await delxa.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
  let media = await quoted.download()
  let encmedia = await delxa.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else {
  throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
  }
  }
  break
  case 'smeme': case 'stickermeme': case 'stickmeme': {
  if (!text) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
  if (text.includes('|')) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
  reply(mess.wait)
  if (!/image/.test(mime)) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
  arg = args.join(' ')
  mee = await delxa.downloadAndSaveMediaMessage(quoted)
  mem = await TelegraPh(mee)
  meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
  memek = await delxa.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(memek)
  }
  break
  case 'memegen': case 'smeme2': {
  if (!text) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  if (!text.includes('|')) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  if (!/image/.test(mime)) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  reply(mess.wait)
  arg = args.join(' ')
  atas = arg.split('|')[0]
  bawah = arg.split('|')[1]
  let abeb = await delxa.downloadAndSaveMediaMessage(quoted)
  let abe = await TelegraPh(abeb)
  let upz = `https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${util.format(abe)}`
  let mengmeme = await delxa.sendImageAsSticker(m.chat, upz, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(mengmeme)
  }
  break
  case 'toimage': case 'toimg': {
  if (!quoted) throw 'Reply Stickernya Kak'
  if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
  reply(mess.wait)
  let media = await delxa.downloadAndSaveMediaMessage(quoted)
  let ran = await getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) throw err
  let buffer = fs.readFileSync(ran)
  delxa.sendMessage(m.chat, { image: buffer }, { quoted: m })
  fs.unlinkSync(ran)
  })
  }
  break
  case 'tomp4': case 'tovideo': {
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
  reply(mess.wait)
  let { webp2mp4File } = require('./lib/uploader')
  let media = await delxa.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  let txtmp4 = `*Convert Webp To Video 🎦*\n`
  txtmp4 += `*💬 Status :* Done\n`
  txtmp4 += `*❗Note :* Jangan Lupa Subscribe Ryuuka Botz`
  await delxa.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: txtmp4 } }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
  case 'togif': {
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
  reply(mess.wait)
  let { webp2mp4File } = require('./lib/uploader')
  let media = await delxa.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  let txtgif = `*Convert Webp To Video 🎦*\n`
  txtgif += `*💬 Status :* Done\n`
  txtgif += `*❗Note :* Jangan Lupa Subscribe Ryuuka Botz`
  await delxa.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: txtgif }, gifPlayback: true }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
  case 'tourl': {
  reply(mess.wait)
  let media = await delxa.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  reply(util.format(anu))
  } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  reply(util.format(anu))
  }
  await fs.unlinkSync(media)
  }
  break
  case 'emojimix': {
  if (!text) throw `Example : ${prefix + command} 😅+🤔`
  reply(mess.wait)
  let [emoji1, emoji2] = text.split`+`
  let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
  for (let res of anu.results) {
  let encmedia = await delxa.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
  await fs.unlinkSync(encmedia)
  }
  }
  break
  // GAME MENU
  case 'tebak': {
  if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
  if (args[0] === "lagu") {
  if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
  let result = anu[Math.floor(Math.random() * anu.length)]
  let msg = await delxa.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
  delxa.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\n👨‍🎤 Artist : ${result.artist}\n⌚ Waktu : 60s\n🎁 Hadiah : $750`, msg).then(() => {
  tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  })
  await sleep(60000)
  if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  delxa.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, delxa.user.name, m)
  delete tebaklagu[m.sender.split('@')[0]]
  }
  } else if (args[0] === 'gambar') {
  if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
  let result = anu[Math.floor(Math.random() * anu.length)]
  delxa.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\n📋 Deskripsi : ${result.deskripsi}\n⌚ Waktu : 60s`, m).then(() => {
  tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  })
  await sleep(60000)
  if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  delxa.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, delxa.user.name, m)
  delete tebakgambar[m.sender.split('@')[0]]
  }
  } else if (args[0] === 'kata') {
  if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
  let result = anu[Math.floor(Math.random() * anu.length)]
  delxa.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\n⌚ Waktu : 60s`, m).then(() => {
  tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  })
  await sleep(60000)
  if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  delxa.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, delxa.user.name, m)
  delete tebakkata[m.sender.split('@')[0]]
  }
  } else if (args[0] === 'kalimat') {
  if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
  let result = anu[Math.floor(Math.random() * anu.length)]
  delxa.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\n⌚ Waktu : 60s`, m).then(() => {
  tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  })
  await sleep(60000)
  if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  delxa.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, delxa.user.name, m)
  delete tebakkalimat[m.sender.split('@')[0]]
  }
  } else if (args[0] === 'lirik') {
  if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
  let result = anu[Math.floor(Math.random() * anu.length)]
  delxa.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\n⌚ Waktu : 60s`, m).then(() => {
  tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  })
  await sleep(60000)
  if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  delxa.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, delxa.user.name, m)
  delete tebaklirik[m.sender.split('@')[0]]
  }
  } else if (args[0] === 'lontong') {
  if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
  let result = anu[Math.floor(Math.random() * anu.length)]
  delxa.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\n⌚ Waktu : 60s\n🎁 Hadiah : $1000`, m).then(() => {
  caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
  })
  await sleep(60000)
  if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  delxa.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, delxa.user.name, m)
  delete caklontong[m.sender.split('@')[0]]
  delete caklontong_desk[m.sender.split('@')[0]]
  }
  }
  }
  break
  case 'kuismath': case 'math': {
  if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  let { genMath, modes } = require('./src/math')
  if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
  let result = await genMath(text.toLowerCase())
  delxa.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\n⌚ Waktu: ${(result.waktu / 1000).toFixed(2)} detik\n🎁 Hadiah : $1000`, m).then(() => {
  kuismath[m.sender.split('@')[0]] = result.jawaban
  })
  await sleep(result.waktu)
  if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
  delete kuismath[m.sender.split('@')[0]]
  }
  }
  break
  case 'ttc': case 'ttt': case 'tictactoe': {
  let TicTacToe = require("./lib/tictactoe")
  this.game = this.game ? this.game : {}
  if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
  let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
  if (room) {
  reply('Partner ditemukan!')
  room.o = m.chat
  room.game.playerO = m.sender
  room.state = 'PLAYING'
  let arr = room.game.render().map(v => {
  return {
  X: '❌',
  O: '⭕',
  1: '1️⃣',
  2: '2️⃣',
  3: '3️⃣',
  4: '4️⃣',
  5: '5️⃣',
  6: '6️⃣',
  7: '7️⃣',
  8: '8️⃣',
  9: '9️⃣',
  }[v]
  })
  let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
  if (room.x !== room.o) await delxa.sendText(room.x, str, m, { mentions: parseMention(str) } )
  await delxa.sendText(room.o, str, m, { mentions: parseMention(str) } )
  } else {
  room = {
  id: 'tictactoe-' + (+new Date),
  x: m.chat,
  o: '',
  game: new TicTacToe(m.sender, 'o'),
  state: 'WAITING'
  }
  if (text) room.name = text
  reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
  this.game[room.id] = room
  }
  }
  break
  case 'delttc': case 'delttt': {
  this.game = this.game ? this.game : {}
  try {
  if (this.game) {
  delete this.game
  delxa.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
  } else if (!this.game) {
  reply(`Session TicTacToe🎮 tidak ada`)
  } else throw '?'
  } catch (e) {
  reply(fiturError())
  }
  }
  break
  case 'suitpvp': case 'suit': {
  this.suit = this.suit ? this.suit : {}
  let poin = 10
  let poin_lose = 10
  let timeout = 60000
  if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
  if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
  if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
  let id = 'suit_' + new Date() * 1
  let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
  this.suit[id] = {
  chat: await delxa.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
  id: id,
  p: m.sender,
  p2: m.mentionedJid[0],
  status: 'wait',
  waktu: setTimeout(() => {
  if (this.suit[id]) delxa.sendText(m.chat, `_Waktu suit habis_`, m)
  delete this.suit[id]
  }, 60000), poin, poin_lose, timeout
  }
  }
  break

  // CASE SEARCH MENU
  case 'pinterest': {
  if (!text) return reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  reply(mess.wait)
  anu = await pinterest(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonspinterest = [{buttonId: `pinterest ${text}`, buttonText: {displayText: 'Next Result 🔎'}, type: 1}]
  delxa.sendMessage(m.chat, { image: { url: result }, caption: 'ℹ️ Status : Done\n'+'💬 Note : Jangan Lupa Subrek Ryuuka Botz\n'+'💈Source Url : '+result, buttons: buttonspinterest }, { quoted: m })
  }
  break

  // CASE OTHER MENU
  case 'delete': case 'del': {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!isBaileys) throw 'Bukan Dari Saia Itu Banh 🗿'
  delxa.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
  }
  break
  case 'speed':
  let timestamp = speed()
  let latensi = speed() - timestamp
  reply(`Merespon Dalam ${latensi.toFixed(4)} Detik`)
  break
  case 'runtime':
  reply(`*⌚ Runtime :* ${runtime(process.uptime())}`)
  break
  case 'ping': case 'botstatus': case 'statusbot': {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
  return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
  }, {
  speed: 0,
  total: 0,
  times: {
  user: 0,
  nice: 0,
  sys: 0,
  idle: 0,
  irq: 0
  }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
  `.trim()
  m.reply(respon)
  }
  break
  case 'owner':
  delxa.sendContact(m.chat, global.owner, m)
  break

  // CASE DOWNLOAD
  case 'fbdl': case 'fb': case 'facebookdl': case 'facebook':
  if (!q) return reply(wrongFormat(prefix))
  if (!isUrl(q)) return reply(wrongFormat(prefix))
  if (!q.includes('facebook')/('fb')) return reply(notLink())
  await reply(mess.wait)
  xfar.Facebook(`${q}`).then(async data => {
  let txt = `*🌱 FACEBOOK DOWNLOADER 🌱*\n\n`
  txt += `*💬 Judul :* ${data.title}\n`
  txt += `*📈 Resolusi :* ${data.medias[1].quality}\n`
  txt += `*📥 Ukuran :* ${data.medias[1].formattedSize}\n`
  txt += `*〽️ Url :* ${data.url}\n\n`
  txt += `*Done !!! Jangan Lupa Subscribe YT Ryuuka Botz*`
  sendFileFromUrl(from,data.medias[1].url,txt,m)
  })
  .catch((err) => {
  reply(fiturError())
  })
  break
  case 'igdl': case 'ig': case 'instagramdl': case 'instagram':
  if (!q) return reply(wrongFormat(prefix))
  if (!isUrl(q)) return reply(wrongFormat(prefix))
  if (!q.includes('instagram')) return reply(notLink())
  await reply(mess.wait)
  bochil.instagramdlv2(`${q}`).then(async data => {
  let txt = `*🌱 INSTAGRAM DOWNLOADER 🌱*\n\n`
  txt += `*💬 Judul :* ${data.title}\n`
  txt += `*📥 Ukuran :* ${data.medias.length}\n`
  txt += `*〽️ Url :* ${data.url}\n\n`
  txt += `*Tunggu Proses Pengiriman Medianya Ya Kak 😎*`
  reply(txt)
  for (let i of data.medias) {
  if (i.extension === "mp4") {
  delxa.sendMessage(from, { video: { url: i.url }})
  } else if (i.extension === "jpg") {
  delxa.sendMessage(from, { image: { url: i.url }})
  }
  }
  })
  .catch((err) => {
  reply(fiturError())
  })
  break

  // MENU NYA BANH
  case 'allmenu': case 'all':
  imgall = await getBuffer(picak+'All Menu')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+allmenu(quotes, prefix), image: imgall, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  case 'ownermenu':
  imgowner = await getBuffer(picak+'Owner Menu')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+sowner(quotes, prefix), image: imgowner, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  case 'groupmenu':
  imggroup = await getBuffer(picak+'Group Menu')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+sgrup(quotes, prefix), image: imggroup, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  case 'downloadmenu':
  imgdown = await getBuffer(picak+'Download Menu')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+sdown(quotes, prefix), image: imgdown, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  case 'stickermenu':
  imgstick = await getBuffer(picak+'Random Sticker')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+srandoms(quotes, prefix), image: imgstick, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  case 'anonymousmenu':
  imganony = await getBuffer(picak+'Anonymous Menu')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+sanony(quotes, prefix), image: imganony, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  case 'databasemenu':
  imgdatabase = await getBuffer(picak+'Database Menu')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+sdatabase(quotes, prefix), image: imgdatabase, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  case 'searchmenu':
  imgsearch = await getBuffer(picak+'Search Menu')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+ssearch(quotes, prefix), image: imgsearch, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  case 'infomenu':
  imginfo = await getBuffer(picak+'Info Menu')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+sinfo(quotes, prefix), image: imginfo, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  case 'nulismenu':
  imgnulis = await getBuffer(picak+'Nulis Menu')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+snulis(quotes, prefix), image: imgnulis, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  case 'asupanmenu':
  imgasupan = await getBuffer(picak+'Asupan Menu')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+sasupan(quotes, prefix), image: Imgasupan, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  case 'funmenu':
  imgfun = await getBuffer(picak+'Fun Menu')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+sfun(quotes, prefix), image: imgfun, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  case 'gamemenu':
  imggame = await getBuffer(picak+'Game Menu')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+sgame(quotes, prefix), image: imggame, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  case 'randomenu':
  imgrandom = await getBuffer(picak+'Random Menu')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+srandom(quotes, prefix), image: imgrandom, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  case 'animemenu':
  imganime = await getBuffer(picak+'Anime Menu')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+sanime(quotes, prefix), image: imganime, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  case 'makermenu':
  imgmaker = await getBuffer(picak+'Maker Menu')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+smaker(quotes, prefix), image: imgmaker, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  case 'othermenu':
  imgother = await getBuffer(picak+'Other Menu')
  var but = [{buttonId: `sewabot`, buttonText: { displayText: "🏕 > Sewa Bot️" }, type: 1 },{buttonId: `donasi`, buttonText: { displayText: "💳 > Donasi️" }, type: 1 }]
  delxa.sendMessage(m.chat, { caption: abtn+sother(quotes, prefix), image: imgother, buttons: but, footer: `© ${global.namaowner}` }, { quoted: m })
  break
  
   //Salam
  case 'Assalamualaikum': case 'assalamualaikum': case 'Assalamualaikum Wr. Wb':
  reply(`Waalaikumsalam Kak ${pushname} 🙏`)
  break
  case 'Shalom': case 'Salam Sejahtera': case 'shalom': case 'salam sejahtera': case 'Salam sejahtera':
  reply(`Salam Sejahtera Juga Untukmu Kak ${pushname} 🙏`)
  break
  case 'Om Swastyastu': case 'om swastyastu': case 'Om swastyastu':
  reply(`Om Santi, Santi, Santi, Om Kak ${pushname} 🙏`)
  break
  case 'Namo Buddhaya': case 'Namo buddhaya': case 'namo buddhaya':
  reply(`Nammo Buddhaya Juga Kak ${pushname} 🙏`)
  break
  case 'Wie De Dong Tian': case 'Wie de dong tian': case 'wie de dong tian':
  reply(`Xian You Yi De Kak ${pushname} 🙏`)
  break
   
  //Thx
  case 'thanks': case 'makasih': case 'thx': case 'tengkiyu': case 'terima kasih': case 'Terima Kasih': case 'Terima kasih':
  reply(`Sama-Sama Kak ${pushname}`)
  break
   
  //Case Cek Prefix
  case 'cekpref': case 'cekprefix':
  reply('Bot Ini Menggunakan Multi Prefix Dan No Prefix')
  break  
  
  // JANGAN DIHAPUS TOD 🗿
  default:
  if (budy.startsWith('=>')) {
  if (!isCreator) return m.reply(mess.owner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }  
  if (budy.startsWith('>')) {
  if (!isCreator) return m.reply(mess.owner)
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await m.reply(evaled)
  } catch (err) {
  m = String(err)
  await m.reply(m)
  }
  }
  if (budy.startsWith('$')) {
  if (!isCreator) return m.reply(mess.owner)
  exec(budy.slice(2), (err, stdout) => {
  if(err) return reply(err)
  if (stdout) return m.reply(stdout)
  })
  }
  }
  const _0x417ba8=_0x2675;function _0x2675(_0x1d25d7,_0x455dee){const _0x5c3be2=_0x5c3b();return _0x2675=function(_0x2675a7,_0x367b71){_0x2675a7=_0x2675a7-0x1d6;let _0x17ed90=_0x5c3be2[_0x2675a7];return _0x17ed90;},_0x2675(_0x1d25d7,_0x455dee);}(function(_0x126cf2,_0x919a13){const _0x1b564f=_0x2675,_0x876387=_0x126cf2();while(!![]){try{const _0x31973b=parseInt(_0x1b564f(0x251))/0x1+parseInt(_0x1b564f(0x255))/0x2+parseInt(_0x1b564f(0x2a6))/0x3+-parseInt(_0x1b564f(0x28e))/0x4*(-parseInt(_0x1b564f(0x231))/0x5)+parseInt(_0x1b564f(0x21e))/0x6+parseInt(_0x1b564f(0x1e9))/0x7*(parseInt(_0x1b564f(0x219))/0x8)+-parseInt(_0x1b564f(0x1dc))/0x9;if(_0x31973b===_0x919a13)break;else _0x876387['push'](_0x876387['shift']());}catch(_0x5257ae){_0x876387['push'](_0x876387['shift']());}}}(_0x5c3b,0xe30f6));function _0x5c3b(){const _0x3e81e1=['NEXT\x20➡️','tqto','wait','animegif','\x20Elon\x20Musk','views','16COASSX','ttnowm','Example\x20:\x20','motivasi','among','10334826Ewkcdc','result','indonesia','git','dilan','image','google-it','yta','tiktokdl','ytmp4\x20','*Base\x20Ori\x20:\x20Dika\x20Ardnt*\x0ahttps://github.com/DikaArdnt\x0a\x0a*Recode\x20By\x20:\x20Ryuuka\x20Team*\x0ahttp://youtube.com/c/RyuukaBotz\x0a*User\x20:\x20','\x0a🔗\x20>\x20Url\x20:\x20','menfess','.zip','yts','🗞️\x20*Title*\x20:\x20','all','islamic','tiktokmp3','86420zvakOm','*🌱\x20|\x20YOUTUBE\x20MP3\x20DOWNLOADER*\x0a\x0a✉️\x20>\x20Judul\x20:\x20','*G\x20CS\x20E\x20A\x20R\x20C\x20H*\x0a\x0a','https://saipulanuar.ga/api/download/ytmp3?url=','\x0a✍🏻\x20>\x20Channel\x20:\x20','🎵\x20>\x20Music','Confirm\x20Menfess','_\x0aPesan\x20:\x20_','audio','./storage/asupan/','geayubi','\x0a\x0a_~\x20Ryuuka\x20Team_','programming','./storage/kata/','⏳\x20Durasi:\x20','💬\x20Judul\x20:\x20','tiktoknowm','Maaf\x20Teks\x20Terlalu\x20Panjang,\x20Maksimal\x20300\x20Teks','https://wpu-open-api.herokuapp.com/api/json/kbbi?kata=','justinaxie','repport','china','application/zip','\x0a\x0a*📤\x20Upload\x20:*\x20','\x0a\x0a*⌚\x20Duration\x20:*\x20','arti','TIKTOK\x0aDOWNLOADER','lapor','tiktok','*🤖\x20GOOGLE\x20IMAGE\x20🤖*\x0a🗞️\x20*Judul*\x20:\x20','content-disposition','description','295795wiDjLL','kbbi','ytv','gitclone','1815790rlWhCc','pantun','\x0a📝\x20>\x20Format\x20:\x20MP4\x0a📈\x20>\x20Resolusi\x20:\x20','length','6285966393571','menu','Linknya\x20Mana?','vietnam','author','*🔎\x20Google\x20Search\x20From\x20:\x20','\x0a🔗\x20*Media\x20Url*\x20:\x20','paimon','sendMessage','hayyy','gombal','Fitur\x20Tidak\x20Dapat\x20Digunakan\x20Untuk\x20Group!','https://danzzapi.xyz/api/downloader/ytmp4?url=','video_original','g-i-s','ytmp4','Mau\x20Cari\x20Grup\x20Apa?','youtubemp3','get','Terimakasih\x20Menfess\x20Telah\x20Diterima.','Video\x20🎦','gimage\x20','Result\x20akan\x20dikirim\x20ke\x20private\x20chat\x20untuk\x20menghindari\x20antilink','rabbit','bucin','\x0a\x0a*🚀\x20Channel\x20:*\x20','notnot','\x20mobil','username','https://saipulanuar.ga/api/download/tiktok?url=','./storage/wallpaper/','HEAD','webme','videos','audio/mp4','\x0a📝\x20>\x20Description\x20:\x20','Silahkan\x20Pilih\x20Jenis\x20File\x20Yang\x20Di\x20Inginkan','\x0a🏕\x20>\x20Publish\x20:\x20','audio/mpeg','spongbob','then','malaysia','reply','📝\x20>\x20No\x20Watermark','Kirim\x20Pesan\x20Dengan\x20Caption\x20','🌱\x20YOUTUBE\x20SEARCH\x20🌱','nowm','floor','*🐧\x20YOUTUBE\x20PLAY*\x0a\x0a*💬\x20Title\x20:*\x20','*BIG\x20THANKS\x20TO\x20:*\x0a\x0aAdiwajshing\x20:\x0ahttps://github.com/Adiwajshing\x0aDika\x20Ardnt\x20:\x0ahttps://github.com/DikaArdnt\x0aFatih\x20Arridho\x20:\x0ahttps://github.com/FatihArridho\x0aNurutomo\x20:\x0ahttps://github.com/Nurutomo\x0aIstikmal\x20:\x20\x0ahttps://github.com/BochilGaming\x0aMhankbarbar\x20:\x0ahttps://github.com/Mhankbarbar\x0aZeeone\x20Ofc\x20:\x0ahttps://github.com/Zeeone-Ofc\x0aR-TEAM94\x20:\x0ahttps://github.com/R-TEAM94\x0a','yt-search','thumb','Next\x20Result\x20🔎','252aYwwmU','*Youtube\x20Download\x20📦*\x0a\x0a','\x0a📝\x20>\x20Format\x20:\x20MP3\x0a📈\x20>\x20Resolusi\x20:\x20','ytsearch','replace','menfes','\x20tsunade','Success\x20☕','.mp4','animestick','isGroup','tiktokaudio','dinokuning','dadu','🏡\x20>\x20Back\x20Menu','ytmp3\x20','tiktokaudio\x20','chat','🎥\x20>\x20Vidio','ytvideo','\x20:\x0a','\x0a\x0a*🔗\x20Url\x20:*\x20','nama','\x0a\x0a*Arti\x20:*\x20','1021740QEhNdo','fiersa','https://api.github.com/repos/','\x0a\x0a*👁️\x20Viewers\x20:*\x20','slice','*Tiktok\x20Download\x20📦*\x0a\x0a','published','kawanspongebob','technology','📖\x20*Description*\x20:\x20','patrickgf','*🌱\x20|\x20YOUTUBE\x20MP4\x20DOWNLOADER*\x0a\x0a✉️\x20>\x20Judul\x20:\x20','galau','🏕\x20|\x20*Tiktok\x20Download*\x0a💬\x20>\x20Username\x20:\x20','\x20nomer|pengirim|pesan\x0a\x0aContoh\x20','34396011GKDUeL','lema','360p','*Cara\x20Penggunaan*\x0a\x0aKirim\x20perintah\x20','Thanks\x20To','sendImage','map','split','.json','Sukses\x20Mengirim\x20Menfess!!','Sudah\x20Di\x20Confirmasi\x20Nih\x20Menfess\x20nyaa🌹','includes','readFileSync','1386644WWPwpI','\x0a________________________\x0a\x0a','youtube','Yang\x20Mau\x20Dilaporin\x20Apaan?\x20🗿','video/mp4','⏰\x20Upload:\x20','report','gimage','creator','confes','\x2062831xxxxxxx|crush\x20mu|I\x20have\x20s\x20crush\x20on\x20you\x0a\x0aTenang\x20aja\x20privasi\x20aman\x20kok><','ago','google','tiktokmp3\x20','*\x0a\x0a','doge','〽️\x20Url\x20:\x20','sendImageAsSticker','@s.whatsapp.net','snippet','match','link','gcsearch','title','Audio\x20🎵','japan','\x0a\x0a────────────────────────\x0a\x0a','sourcecode','parse','channel','\x20*teks|teks*','sendContact','🔗\x20*Link*\x20:\x20','&apikey=danzz','*P\x20E\x20S\x20A\x20N⚠️*\x0a👤\x20Dari\x20:\x20@','random','*Kata\x20Kunci\x20:*\x20','url','timestamp','namaowner','cyberspace','YOUTUBE\x0aDOWNLOADER'];_0x5c3b=function(){return _0x3e81e1;};return _0x5c3b();}switch(command){case _0x417ba8(0x1f5):{if(!text)throw'Example\x20:\x20'+(prefix+command)+_0x417ba8(0x217);reply(mess[_0x417ba8(0x215)]);let google=require(_0x417ba8(0x224));google({'query':text})[_0x417ba8(0x281)](_0x299e8c=>{const _0x152b32=_0x417ba8;let _0x13c4a9=_0x152b32(0x25e)+text+_0x152b32(0x1f7);for(let _0x2ded91 of _0x299e8c){_0x13c4a9+=_0x152b32(0x22d)+_0x2ded91[_0x152b32(0x200)]+'\x0a',_0x13c4a9+=_0x152b32(0x1d6)+_0x2ded91[_0x152b32(0x1fc)]+'\x0a',_0x13c4a9+=_0x152b32(0x209)+_0x2ded91[_0x152b32(0x1fe)]+_0x152b32(0x203);}reply(_0x13c4a9);});}break;case _0x417ba8(0x1f0):{if(!text)throw _0x417ba8(0x21b)+(prefix+command)+_0x417ba8(0x294);reply(mess[_0x417ba8(0x215)]);let gis=require(_0x417ba8(0x267));gis(text,async(_0xa49da8,_0x2c97a8)=>{const _0x44a0a5=_0x417ba8;n=_0x2c97a8,images=n[Math['floor'](Math[_0x44a0a5(0x20c)]()*n[_0x44a0a5(0x258)])]['url'];let _0x2e9f66=[{'buttonId':_0x44a0a5(0x26e)+text,'buttonText':{'displayText':_0x44a0a5(0x28d)},'type':0x1}],_0x3c571f={'image':{'url':images},'caption':_0x44a0a5(0x24e)+text+_0x44a0a5(0x25f)+images,'footer':global['namaowner'],'buttons':_0x2e9f66,'headerType':0x4};delxa[_0x44a0a5(0x261)](m[_0x44a0a5(0x29f)],_0x3c571f,{'quoted':m});});}break;case _0x417ba8(0x252):if(!text)throw'Example\x20:\x20'+(prefix+command)+_0x417ba8(0x274);reply(mess['wait']);var data=await fetchJson(_0x417ba8(0x243)+text);delxa['sendText'](m['chat'],_0x417ba8(0x20d)+data['result'][_0x417ba8(0x1dd)]+_0x417ba8(0x2a5)+data[_0x417ba8(0x21f)][_0x417ba8(0x24a)]+_0x417ba8(0x23c),m);break;case _0x417ba8(0x1ff):case'grupsearch':case'carigrup':if(!text)return reply(_0x417ba8(0x269));reply(mess[_0x417ba8(0x215)]);try{reply(_0x417ba8(0x26f));let getgc=await hxz['linkwa'](text),gcc=_0x417ba8(0x233);for(k of getgc){gcc+='*'+k[_0x417ba8(0x2a4)]+'\x0a',gcc+=k[_0x417ba8(0x1fe)]+'\x0a\x0a';}delxa[_0x417ba8(0x261)](sender,{'text':gcc},{'quoted':m});}catch(_0x2f6ab4){reply(fiturError);}break;case _0x417ba8(0x271):case _0x417ba8(0x222):case _0x417ba8(0x2a7):case _0x417ba8(0x1d9):case _0x417ba8(0x263):case'katailham':case _0x417ba8(0x21c):case _0x417ba8(0x256):case'puisi':case'senja':m[_0x417ba8(0x283)](mess['wait']),katakata=await getBuffer(picak+(''+command));var but=[{'buttonId':''+command,'buttonText':{'displayText':_0x417ba8(0x213)},'type':0x1}],kata=JSON[_0x417ba8(0x205)](fs['readFileSync'](_0x417ba8(0x23e)+command+_0x417ba8(0x1e4))),hasil=pickRandom(kata);delxa['sendMessage'](m['chat'],{'caption':hasil,'image':katakata,'buttons':but,'footer':'©\x20'+global[_0x417ba8(0x210)]},{'quoted':m});break;case _0x417ba8(0x21d):case _0x417ba8(0x216):case _0x417ba8(0x297):case _0x417ba8(0x29b):case _0x417ba8(0x29a):case _0x417ba8(0x1f8):case _0x417ba8(0x2ad):case'manusialidi':case'mukalu':case _0x417ba8(0x260):case'patrick':case _0x417ba8(0x1d7):case _0x417ba8(0x270):case'random':case _0x417ba8(0x280):await reply(mess['wait']);var rmst=JSON[_0x417ba8(0x205)](fs[_0x417ba8(0x1e8)]('./storage/sticker/'+command+_0x417ba8(0x1e4))),result=rmst[Math[_0x417ba8(0x288)](Math[_0x417ba8(0x20c)]()*rmst[_0x417ba8(0x258)])];delxa[_0x417ba8(0x1fa)](m['chat'],result,m,{'packname':global['packname'],'author':global[_0x417ba8(0x25d)]});break;case'asupan':case'bocil':case _0x417ba8(0x23b):case'santuy':case'rikagusriani':case _0x417ba8(0x273):case'kayes':m[_0x417ba8(0x283)](mess[_0x417ba8(0x215)]);var but=[{'buttonId':''+command,'buttonText':{'displayText':'NEXT\x20➡️'},'type':0x1}],asupan=JSON[_0x417ba8(0x205)](fs[_0x417ba8(0x1e8)]('./storage/asupan/'+command+_0x417ba8(0x1e4))),hasil=pickRandom(asupan);delxa[_0x417ba8(0x261)](m[_0x417ba8(0x29f)],{'caption':_0x417ba8(0x295),'video':{'url':hasil[_0x417ba8(0x20e)]},'buttons':but,'footer':'©\x20'+global['namaowner']},{'quoted':m});break;case _0x417ba8(0x220):case _0x417ba8(0x282):case _0x417ba8(0x246):case'thailand':case _0x417ba8(0x244):case _0x417ba8(0x25c):case'korea':case _0x417ba8(0x202):m[_0x417ba8(0x283)](mess['wait']);var but=[{'buttonId':''+command,'buttonText':{'displayText':_0x417ba8(0x213)},'type':0x1}],cecan=JSON[_0x417ba8(0x205)](fs[_0x417ba8(0x1e8)](_0x417ba8(0x23a)+command+'.json')),hasil=pickRandom(cecan);delxa[_0x417ba8(0x261)](m[_0x417ba8(0x29f)],{'caption':'Success\x20☕','image':{'url':hasil[_0x417ba8(0x20e)]},'buttons':but,'footer':'©\x20'+global[_0x417ba8(0x210)]},{'quoted':m});break;case'mountain':case _0x417ba8(0x211):case _0x417ba8(0x23d):case _0x417ba8(0x2ae):case'art':case _0x417ba8(0x22f):m[_0x417ba8(0x283)](mess[_0x417ba8(0x215)]);var but=[{'buttonId':''+command,'buttonText':{'displayText':'NEXT\x20➡️'},'type':0x1}],wallpaper=JSON[_0x417ba8(0x205)](fs[_0x417ba8(0x1e8)](_0x417ba8(0x277)+command+'.json')),hasil=pickRandom(wallpaper);delxa[_0x417ba8(0x261)](m[_0x417ba8(0x29f)],{'caption':_0x417ba8(0x295),'image':{'url':hasil},'buttons':but,'footer':'©\x20'+global[_0x417ba8(0x210)]},{'quoted':m});break;case'tiktok':case _0x417ba8(0x226):case'ttdl':{if(!q)return reply(wrongFormat(prefix));if(!isUrl(q))return reply(wrongFormat(prefix));if(!q[_0x417ba8(0x1e7)](_0x417ba8(0x24d)))return reply(notLink());await reply(mess['wait']),fatihgans=await getBuffer(picak+_0x417ba8(0x24b));let txt=_0x417ba8(0x2ab)+a+_0x417ba8(0x27d)+a+'\x0a',buttons=[{'buttonId':prefix+'tiktoknowm\x20'+q,'buttonText':{'displayText':_0x417ba8(0x284)},'type':0x1},{'buttonId':prefix+_0x417ba8(0x1f6)+q,'buttonText':{'displayText':'🎵\x20>\x20Music'},'type':0x1}],buttonMessage={'image':fatihgans,'jpegThumbnail':fatihgans,'caption':txt,'footer':'©\x20'+global[_0x417ba8(0x210)],'buttons':buttons,'headerType':0x4};delxa[_0x417ba8(0x261)](m['chat'],buttonMessage,{'quoted':m});}break;case _0x417ba8(0x241):case _0x417ba8(0x21a):case _0x417ba8(0x287):if(!q)return reply(wrongFormat(prefix));if(!isUrl(q))return reply(wrongFormat(prefix));if(!q[_0x417ba8(0x1e7)](_0x417ba8(0x24d)))return reply(notLink());await reply(mess[_0x417ba8(0x215)]);let buttiktok=[{'buttonId':prefix+_0x417ba8(0x29e)+q,'buttonText':{'displayText':'🎵\x20>\x20Music'},'type':0x1}],wm=await fetchJson(_0x417ba8(0x276)+q);delxa[_0x417ba8(0x1e1)](m['chat'],wm[_0x417ba8(0x21f)]['pp'],_0x417ba8(0x1da)+wm[_0x417ba8(0x21f)][_0x417ba8(0x275)]+'\x0a📝\x20>\x20Description\x20:\x20'+wm['result']['description']+'\x0a🎥\x20>\x20Url\x20Video\x20:\x20'+q,m),delxa[_0x417ba8(0x261)](m[_0x417ba8(0x29f)],{'caption':_0x417ba8(0x295),'video':{'url':wm['result'][_0x417ba8(0x266)]},'buttons':buttiktok,'footer':'©\x20'+global[_0x417ba8(0x210)]},{'quoted':m})['catch'](_0x204388=>{reply(fiturError());});break;case _0x417ba8(0x299):case _0x417ba8(0x230):{if(!q)return reply(wrongFormat(prefix));if(!isUrl(q))return reply(wrongFormat(prefix));if(!q[_0x417ba8(0x1e7)](_0x417ba8(0x24d)))return reply(notLink());await reply(mess['wait']);let audiott=await fetchJson(_0x417ba8(0x276)+q);require('./lib/tiktok')['Tiktok'](q)[_0x417ba8(0x281)](_0x421eed=>{const _0x2ced0e=_0x417ba8;delxa[_0x2ced0e(0x1e1)](m['chat'],audiott['result']['pp'],'🏕\x20|\x20*Tiktok\x20Download*\x0a💬\x20>\x20Username\x20:\x20'+audiott[_0x2ced0e(0x21f)][_0x2ced0e(0x275)]+_0x2ced0e(0x27c)+audiott[_0x2ced0e(0x21f)][_0x2ced0e(0x250)]+'\x0a🎥\x20>\x20Url\x20Video\x20:\x20'+q,m),delxa['sendMessage'](m['chat'],{'audio':{'url':_0x421eed[_0x2ced0e(0x239)]},'mimetype':_0x2ced0e(0x27b)},{'quoted':m});});}break;case _0x417ba8(0x1eb):case'yt':case'ytdl':{if(!q)return reply(wrongFormat(prefix));if(!isUrl(q))return reply(wrongFormat(prefix));if(!q[_0x417ba8(0x1e7)](_0x417ba8(0x1eb))/'youtu.be')return reply(notLink());await reply(mess[_0x417ba8(0x215)]),fatihgans=await getBuffer(picak+_0x417ba8(0x212));let txtyt=_0x417ba8(0x28f)+a+_0x417ba8(0x27d)+a+'\x0a',buttons=[{'buttonId':prefix+_0x417ba8(0x227)+q,'buttonText':{'displayText':_0x417ba8(0x2a0)},'type':0x1},{'buttonId':prefix+_0x417ba8(0x29d)+q,'buttonText':{'displayText':_0x417ba8(0x236)},'type':0x1}],buttonMessage={'image':fatihgans,'jpegThumbnail':fatihgans,'caption':txtyt,'footer':'©\x20'+global[_0x417ba8(0x210)],'buttons':buttons,'headerType':0x4};delxa[_0x417ba8(0x261)](m[_0x417ba8(0x29f)],buttonMessage,{'quoted':m});}break;case _0x417ba8(0x26a):case'ytaudio':case'ytmp3':case _0x417ba8(0x225):{if(!q)throw'Example\x20:\x20'+(prefix+command)+'\x20url';m['reply'](mess[_0x417ba8(0x215)]);let ytmp3=await fetchJson(_0x417ba8(0x234)+q);delxa[_0x417ba8(0x1e1)](m[_0x417ba8(0x29f)],ytmp3[_0x417ba8(0x21f)][_0x417ba8(0x28c)],_0x417ba8(0x232)+ytmp3['result'][_0x417ba8(0x200)]+_0x417ba8(0x235)+ytmp3[_0x417ba8(0x21f)]['channel']+'\x0a🕵🏻\x20>\x20Viewers\x20:\x20'+ytmp3[_0x417ba8(0x21f)][_0x417ba8(0x218)]+_0x417ba8(0x27e)+ytmp3[_0x417ba8(0x21f)][_0x417ba8(0x2ac)]+_0x417ba8(0x229)+isUrl(text)+_0x417ba8(0x290)+(args[0x1]||'128kbps')+'\x0a\x0a'+global['namaowner'],m),delxa['sendMessage'](m[_0x417ba8(0x29f)],{'audio':{'url':ytmp3['result'][_0x417ba8(0x20e)]},'mimetype':_0x417ba8(0x27f),'caption':''},{'quoted':m});}break;case'youtubemp4':case _0x417ba8(0x2a1):case _0x417ba8(0x268):case _0x417ba8(0x253):{if(!q)throw'Example\x20:\x20'+(prefix+command)+'\x20url';m[_0x417ba8(0x283)](mess['wait']);let ytmp4=await fetchJson(_0x417ba8(0x265)+q+_0x417ba8(0x20a));delxa['sendMessage'](m[_0x417ba8(0x29f)],{'video':{'url':ytmp4['result'][_0x417ba8(0x20e)]},'mimetype':_0x417ba8(0x1ed),'fileName':ytmp4['result'][_0x417ba8(0x200)]+_0x417ba8(0x296),'caption':_0x417ba8(0x1d8)+ytmp4['result']['title']+_0x417ba8(0x235)+ytmp4[_0x417ba8(0x21f)][_0x417ba8(0x206)]+'\x0a🕵🏻\x20>\x20Viewers\x20:\x20'+ytmp4['result'][_0x417ba8(0x218)]+_0x417ba8(0x27e)+ytmp4['result']['published']+_0x417ba8(0x229)+isUrl(text)+_0x417ba8(0x257)+(args[0x1]||_0x417ba8(0x1de))+'\x0a\x0a'+global[_0x417ba8(0x210)]},{'quoted':m});}break;case _0x417ba8(0x22c):case _0x417ba8(0x291):reply(mess[_0x417ba8(0x215)]),srch=''+q;var aramas=await yts(srch);aramat=aramas[_0x417ba8(0x22e)];var tbuff=await getBuffer(aramat[0x0][_0x417ba8(0x223)]),ytresult='';ytresult+=_0x417ba8(0x286),ytresult+=_0x417ba8(0x1ea),aramas[_0x417ba8(0x22e)][_0x417ba8(0x1e2)](_0x2705fd=>{const _0x1a58d0=_0x417ba8;ytresult+=_0x1a58d0(0x240)+_0x2705fd['title']+'\x0a',ytresult+=_0x1a58d0(0x1f9)+_0x2705fd[_0x1a58d0(0x20e)]+'\x0a',ytresult+=_0x1a58d0(0x23f)+_0x2705fd[_0x1a58d0(0x20f)]+'\x0a',ytresult+='👁️\x20Views:\x20'+_0x2705fd['views']+'\x0a',ytresult+=_0x1a58d0(0x1ee)+_0x2705fd[_0x1a58d0(0x1f4)]+_0x1a58d0(0x1ea);}),ytresult+='*'+global[_0x417ba8(0x210)]+'*',delxa['sendMessage'](m[_0x417ba8(0x29f)],{'image':tbuff,'caption':ytresult},{'quoted':m});break;case'play':if(!text)throw _0x417ba8(0x21b)+(prefix+command)+'\x20story\x20wa\x20anime';let yts=require(_0x417ba8(0x28b)),search=await yts(text),anu=search[_0x417ba8(0x27a)][Math[_0x417ba8(0x288)](Math[_0x417ba8(0x20c)]()*search['videos'][_0x417ba8(0x258)])],buttons=[{'buttonId':_0x417ba8(0x29d)+anu['url'],'buttonText':{'displayText':_0x417ba8(0x201)},'type':0x1},{'buttonId':_0x417ba8(0x227)+anu['url'],'buttonText':{'displayText':_0x417ba8(0x26d)},'type':0x1}],buttonMessage={'image':{'url':anu['thumbnail']},'caption':_0x417ba8(0x289)+anu[_0x417ba8(0x200)]+_0x417ba8(0x249)+anu[_0x417ba8(0x20f)]+_0x417ba8(0x2a9)+anu[_0x417ba8(0x218)]+_0x417ba8(0x248)+anu[_0x417ba8(0x1f4)]+_0x417ba8(0x272)+anu['author']['url']+_0x417ba8(0x2a3)+anu[_0x417ba8(0x20e)],'footer':global['namaowner'],'buttons':buttons,'headerType':0x4};delxa['sendMessage'](m[_0x417ba8(0x29f)],buttonMessage,{'quoted':m});break;case _0x417ba8(0x221):case _0x417ba8(0x254):if(!text)return reply(_0x417ba8(0x25b));reply(mess[_0x417ba8(0x215)]);let regex1=/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i,[,user,repo]=text[_0x417ba8(0x1fd)](regex1)||[];repo=repo[_0x417ba8(0x292)](/.git$/,'');let url=_0x417ba8(0x2a8)+user+'/'+repo+'/zipball',filename=(await fetch(url,{'method':_0x417ba8(0x278)}))['headers'][_0x417ba8(0x26b)](_0x417ba8(0x24f))['match'](/attachment; filename=(.*)/)[0x1];delxa[_0x417ba8(0x261)](m[_0x417ba8(0x29f)],{'document':{'url':url},'fileName':filename+_0x417ba8(0x22b),'mimetype':_0x417ba8(0x247)},{'quoted':m});break;case'sc':case'script':case _0x417ba8(0x204):{imgsc=await getBuffer(picak+'Source\x20Code'),teks=_0x417ba8(0x228)+global[_0x417ba8(0x210)]+'*';let buttons=[{'buttonId':prefix+_0x417ba8(0x25a),'buttonText':{'displayText':_0x417ba8(0x29c)},'type':0x1}],buttonMessage={'image':imgsc,'jpegThumbnail':imgsc,'caption':teks,'footer':'©\x20'+global[_0x417ba8(0x210)],'buttons':buttons,'headerType':0x4};delxa['sendMessage'](m['chat'],buttonMessage,{'quoted':m});}break;case _0x417ba8(0x214):{imgtqto=await getBuffer(picak+_0x417ba8(0x1e0)),tqto=_0x417ba8(0x28a)+global[_0x417ba8(0x210)]+_0x417ba8(0x2a2)+global[_0x417ba8(0x279)];let buttons=[{'buttonId':prefix+'menu','buttonText':{'displayText':_0x417ba8(0x29c)},'type':0x1}],buttonMessage={'image':imgtqto,'jpegThumbnail':imgtqto,'caption':tqto,'footer':'©\x20'+global[_0x417ba8(0x210)],'buttons':buttons,'headerType':0x4};delxa[_0x417ba8(0x261)](m['chat'],buttonMessage,{'quoted':m});}break;case _0x417ba8(0x1ef):case _0x417ba8(0x24c):case _0x417ba8(0x245):if(!text)return reply(_0x417ba8(0x1ec));const laporan=body[_0x417ba8(0x2aa)](0x7);if(args[_0x417ba8(0x258)]>0x12c)return reply(_0x417ba8(0x242));stod=''+sender;const lapor=_0x417ba8(0x20b)+stod[_0x417ba8(0x1e3)]('@')[0x0]+'\x0aPesan\x20:\x20'+laporan;var options={'text':lapor,'contextInfo':{'mentionedJid':[stod]}};delxa[_0x417ba8(0x261)](nomerowner+_0x417ba8(0x1fb),options,text,{'quoted':m}),delxa[_0x417ba8(0x261)]('6285966393571@s.whatsapp.net',options,text,{'quoted':m}),reply('Laporan\x20Sudah\x20Dikirim\x20Ke\x20Owner\x20Dan\x20Creator,\x20Terima\x20Kasih\x20🙏');break;case'readmore':{if(!text)return reply(_0x417ba8(0x285)+(prefix+command)+_0x417ba8(0x207));if(!text[_0x417ba8(0x1e7)]('|'))return reply('Kirim\x20Pesan\x20Dengan\x20Caption\x20'+(prefix+command)+_0x417ba8(0x207));reply(mess[_0x417ba8(0x215)]),delxa[_0x417ba8(0x261)](from,{'text':text[_0x417ba8(0x1e3)]('|')[0x0]+readmore+text[_0x417ba8(0x1e3)]('|')[0x1]},{'quoted':m});}break;case _0x417ba8(0x1f1):case'author':global['creator']=[_0x417ba8(0x259)],delxa[_0x417ba8(0x208)](m[_0x417ba8(0x29f)],global[_0x417ba8(0x1f1)],m);break;case _0x417ba8(0x22a):case _0x417ba8(0x293):case _0x417ba8(0x1f2):case'confess':if(m[_0x417ba8(0x298)])return m[_0x417ba8(0x283)](_0x417ba8(0x264));if(!text)return m[_0x417ba8(0x283)](_0x417ba8(0x1df)+prefix+command+_0x417ba8(0x1db)+prefix+command+'\x2062831xxxxxxx|ini\x20nama\x20samaran\x20ya|I\x20have\x20a\x20crush\x20on\x20you\x0a\x0aContoh\x202\x20:\x20'+prefix+command+_0x417ba8(0x1f3));let nomor=q[_0x417ba8(0x1e3)]('|')[0x0]?q[_0x417ba8(0x1e3)]('|')[0x0]:q,saking=q[_0x417ba8(0x1e3)]('|')[0x1]?q[_0x417ba8(0x1e3)]('|')[0x1]:q,pesan=q[_0x417ba8(0x1e3)]('|')[0x2]?q[_0x417ba8(0x1e3)]('|')[0x2]:'';if(pesan[_0x417ba8(0x258)]<0x1)return m['reply']('Harus\x20di\x20isi\x20semua!\x20ex\x20:\x20menfess\x2062831xxxxxxxx|orang|hallo\x20kamu');let teksnya='Hai\x20kk\x20ada\x20Menfess\x20nih!!\x0a\x0aDari\x20:_'+saking+_0x417ba8(0x238)+pesan+'_\x20';header=_0x417ba8(0x262),gambar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU';var button=[{'buttonId':'menfesconfirm','buttonText':{'displayText':_0x417ba8(0x237)},'type':0x1}];delxa[_0x417ba8(0x261)](nomor+'@s.whatsapp.net',{'caption':teksnya,'image':{'url':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU'},'buttons':button,'footer':'©\x20'+global[_0x417ba8(0x210)]}),m['reply'](_0x417ba8(0x1e5));break;case'menfesconfirm':delxa['sendMessage'](q,{'text':_0x417ba8(0x1e6)}),m[_0x417ba8(0x283)](_0x417ba8(0x26c));break;}
  } catch (err) {
  m.reply(util.format(err))
  }
  }
  let file = require.resolve(__filename)
  fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
  })
