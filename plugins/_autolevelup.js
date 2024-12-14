//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
 let ppch = await conn.profilePictureUrl(who, 'image').catch(_ => imageUrl.getRandom()) 
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
if (!chat.autolevelup) return !0
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier))
user.level++
user.role = global.rpg.role(user.level).name
if (before !== user.level) {
    
conn.reply(m.chat, [`*「 FELICIDADES LEVEL UP 🆙🥳 」*\n\nFelicidades subiste de nivel sigue asi 👏\n\n*• NIVEL:* ${before} ⟿ ${user.level}\n*• RANGO:* ${user.role}\n\n_*Para ver tu XP en tiempo real coloca el comando #level*_`, `@${m.sender.split`@`[0]} Ohhh pa has alcanzado el siguiente nivel\n*• NIVEL:* ${before} ⟿ ${user.level}\n\n_*Para ver quien es esta el top coloca el comando #lb*_`, `Que pro @${m.sender.split`@`[0]} has alcanzado un nuevo nivel 🙌\n\n*• Nuevo nivel:* ${user.level}\n*• Nivel anterior:* ${before}\n`].getRandom(), m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: ' 💫 𝐒𝐮𝐩𝐞𝐫 𝐁𝐨𝐭 𝐃𝐞 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 🥳 ', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})  

let niv = `*${m.pushName || 'Anónimo'}* Obtiene un nuevo nivel 🥳

*• Nivel anterior:* ${before} 
*• Nivel actúal :* ${user.level}
*• Rol:* ${user.role}
*• Bot:* ${wm}`
let nivell = `*${m.pushName || 'Anónimo'} Haz subido un nuevo nivel 🥳*

> _*• NIVEL:* ${before} ⟿ ${user.level}_`
let nivelll = `🥳 ${m.pushName || 'Anónimo'} Que pro Acaba de alcanzar un nuevo nivel 🥳

*• Nivel:* ${before} ⟿ ${user.level}
*• Rango:* ${user.role}
*• Bot:* ${wm}`
await conn.sendMessage(global.ch.ch1, { text: [niv, nivell, nivelll].getRandom(), contextInfo: {
externalAdReply: {
title: "【 🔔 Notificación General 🔔 】",
body: '¡Haz subido de nivel 🥳!',
thumbnailUrl: ppch, 
sourceUrl: redes.getRandom(),
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
}}		

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = { role: '🏅',
level: '⬆️'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}, 
role(level) {
level = parseInt(level)
if (isNaN(level)) return { name: '', level: '' }
//este código hace que config.js sea un código más comprensible
const roles = [
  // Novato/a Levels
  { name: 'Novato/a V', level: 0 },
  { name: 'Novato/a IV', level: 4 },
  { name: 'Novato/a III', level: 8 },
  { name: 'Novato/a II', level: 12 },
  { name: 'Novato/a I', level: 16 },

  // Aprendiz Levels
  { name: 'Aprendiz V', level: 20 },
  { name: 'Aprendiz IV', level: 24 },
  { name: 'Aprendiz III', level: 28 },
  { name: 'Aprendiz II', level: 32 },
  { name: 'Aprendiz I', level: 36 },

  // Explorador/a Levels
  { name: 'Explorador/a V', level: 40 },
  { name: 'Explorador/a IV', level: 44 },
  { name: 'Explorador/a III', level: 48 },
  { name: 'Explorador/a II', level: 52 },
  { name: 'Explorador/a I', level: 56 },

  // Maestro/a Levels
  { name: 'Maestro/a V', level: 60 },
  { name: 'Maestro/a IV', level: 64 },
  { name: 'Maestro/a III', level: 68 },
  { name: 'Maestro/a II', level: 72 },
  { name: 'Maestro/a I', level: 76 },

  // Metal Tiers (Iron, Plata, Oro)
  { name: 'Hierro V', level: 80 },
  { name: 'Hierro IV', level: 84 },
  { name: 'Hierro III', level: 88 },
  { name: 'Hierro II', level: 92 },
  { name: 'Hierro I', level: 96 },
  { name: 'Plata V', level: 100 },
  { name: 'Plata IV', level: 104 },
  { name: 'Plata III', level: 108 },
  { name: 'Plata II', level: 112 },
  { name: 'Plata I', level: 116 },
  { name: 'Oro V', level: 120 },
  { name: 'Oro IV', level: 124 },
  { name: 'Oro III', level: 128 },
  { name: 'Oro II', level: 132 },
  { name: 'Oro I', level: 136 },

  // Legend & Fantasy Levels
  { name: 'Legendario/a V', level: 140 },
  { name: 'Legendario/a IV', level: 144 },
  { name: 'Legendario/a III', level: 148 },
  { name: 'Legendario/a II', level: 152 },
  { name: 'Legendario/a I', level: 156 },
  { name: 'Necromante V', level: 160 },
  { name: 'Necromante IV', level: 164 },
  { name: 'Necromante III', level: 168 },
  { name: 'Necromante II', level: 172 },
  { name: 'Necromante I', level: 176 },

  // Masters and Cosmic Tiers
  { name: 'Gran Maestro V', level: 200 },
  { name: 'Gran Maestro IV', level: 204 },
  { name: 'Gran Maestro III', level: 208 },
  { name: 'Gran Maestro II', level: 212 },
  { name: 'Gran Maestro I', level: 216 },
  { name: 'Inmortal V', level: 220 },
  { name: 'Inmortal IV', level: 224 },
  { name: 'Inmortal III', level: 228 },
  { name: 'Inmortal II', level: 232 },
  { name: 'Inmortal I', level: 236 },

  // Mythical Levels
  { name: 'Néfilim V', level: 260 },
  { name: 'Néfilim IV', level: 264 },
  { name: 'Néfilim III', level: 268 },
  { name: 'Néfilim II', level: 272 },
  { name: 'Néfilim I', level: 276 },
  { name: 'Ascendido V', level: 300 },
  { name: 'Ascendido IV', level: 304 },
  { name: 'Ascendido III', level: 308 },
  { name: 'Ascendido II', level: 312 },
  { name: 'Ascendido I', level: 316 },

  // Divine Tiers
  { name: 'Éter V', level: 340 },
  { name: 'Éter IV', level: 344 },
  { name: 'Éter III', level: 348 },
  { name: 'Éter II', level: 352 },
  { name: 'Éter I', level: 356 },
  { name: 'Eterno/a V', level: 380 },
  { name: 'Eterno/a IV', level: 384 },
  { name: 'Eterno/a III', level: 388 },
  { name: 'Eterno/a II', level: 392 },
  { name: 'Eterno/a I', level: 396 },
];

return role.reverse().find(role => level >= role.level)
}}
