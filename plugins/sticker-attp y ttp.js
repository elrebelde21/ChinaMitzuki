import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, args, usedPrefix, command }) => { 
let user = global.db.data.users[m.sender]
let f = user.packname || global.packname
let g = (user.packname && user.author ? user.author : (user.packname && !user.author ? '' : global.author))
if (!text) return conn.reply(m.chat, `${mg}𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙩𝙚𝙭𝙩𝙤 𝙨𝙚 𝙘𝙤𝙣𝙫𝙞𝙚𝙧𝙩𝙖 𝙚𝙡 𝙨𝙩𝙞𝙘𝙠𝙚𝙧\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command}* Nuevo Sticker`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})
let teks = encodeURI(text)
conn.fakeReply(m.chat, `Calma crack estoy haciendo tu texto a sticker 👏\n\n> *Esto puede demorar unos minutos*`, '0@s.whatsapp.net', `No haga spam gil`, 'status@broadcast', null, fake)
//m.reply(`Calma crack estoy haciendo tu texto a sticker 👏\n\n> *Esto puede demorar unos minutos*`) 

if (command == 'attp') {
let stiker = await sticker(null,`${global.APIs.fgmods.url}/maker/attp?text=${teks}&apikey=${global.APIs.fgmods.key}`, f, g)
conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: vs, mediaType: 2, sourceUrl: [nna, nn, md, yt].getRandom(), thumbnail: imagen4}}}, { quoted: m })}

if (command == 'ttp') {
let stiker = await sticker(null,`${global.APIs.fgmods.url}/maker/ttp?text=${teks}&apikey=${global.APIs.fgmods.key}`, f, g)
conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: vs, mediaType: 2, sourceUrl: [nna, nn, md, yt].getRandom(), thumbnail: imagen4}}}, { quoted: m })
}
}
handler.help = ['attp'];
handler.tags = ['sticker']
handler.command = /^(attp|ttp|ttp2|ttp3|ttp4|attp2)$/i
handler.register = true
export default handler