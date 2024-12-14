import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
let name = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
if (!canLevelUp(user.level, user.role, user.exp, global.multiplier)) {
let { min, xp, max } = xpRange(user.level, global.multiplier)
return conn.fakeReply(m.chat,  `『 *TUS ESTADISTICAS 🆙* 』

├─ ᰔᩚ *NOMBRE:*  ${name}
├─ ᰔ *XP 🆙:* ${user.exp - min}/${xp}
├─ ᰔ *NIVEL:* ${user.level}
└─ ᰔ *RANGO:* ${user.role}

> Te falta *${max - user.exp}* De *XP* para subir de nivel`, '0@s.whatsapp.net', `Tus estadisticas en tiempo real 🕐`, 'status@broadcast', null, fake)
}
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
if (before !== user.level) {
let teks = `🎊 Felicidades ${conn.getName(m.sender)} bb llegaste a un nuevo nivel:`
let str = `*[ 𝐋𝐄𝐕𝐄𝐋 𝐔𝐏 ]*
        
*ᰔ 𝐍𝐢𝐯𝐞𝐥 𝐚𝐧𝐭𝐞𝐫𝐢𝐨𝐫:* ${before}
*ᰔ 𝐍𝐢𝐯𝐞𝐥 𝐚𝐜𝐭𝐮𝐚𝐥:* ${user.level}
*ᰔ 𝐑𝐚𝐧𝐠𝐨:* ${user.role}

> _*Cuanto mas interactues con los bots, mayor sera tu nivel_*
`.trim()
try {
const img = await levelup(teks, user.level)
conn.sendFile(m.chat, img, 'levelup.jpg', str, m, null, fake)
} catch (e) {
conn.fakeReply(m.chat, str, '13135550002@s.whatsapp.net', `*TUS ESTADISTICAS 🆙*`, 'status@broadcast', null, fake)
//m.reply(str)
}}}
handler.help = ['levelup']
handler.tags = ['econ']
handler.command = ['nivel', 'lvl', 'levelup', 'level'] 
handler.register = true
export default handler