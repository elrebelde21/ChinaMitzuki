//import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let { generateWAMessageFromContent } = (await import(global.baileys)).default 
let handler  = async (m, { conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let texto = `*◄┢┅͜͡✇⟬↯ື ►ஜ۩💥۩ஜ◄ ↯ື⟭✇͜͡┅┧►*

\`𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝘾𝙄𝙊𝙉\`
https://youtu.be/gh5NajZOTA8

> ✨ *Canal de Actualizaciones y novedades sobre el bot*
> *${global.nna}*

> 💛 *Si tienes dudas o necesitas ayuda en el proceso de la instalación puede escribir me a este número (No es Bot el número)*
 
> 📲 ${asistencia}

> ❗ *_Solo para temas de instalación_*

> ───────•••───────

\`✨ 𝙍𝙀𝙌𝙐𝙄𝙎𝙄𝙏𝙊𝙎 𝙋𝘼𝙍𝘼 𝙇𝘼 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝘾𝙄𝙊𝙉 ✨\`

> ✅ _1 GB de almacenamiento_
> ✅ _Aplicación Termux (actualizada)_
> ✅ _Un WhatsApp recomiendo el WhatsApp normal_
> ✅ _Un número virtual (si es ofc mejor)_
> ✅ _2 dispositivos o una PC para escanear_

> ───────•••───────

\`✨ 𝙂𝙄𝙏𝙃𝙐𝘽 > 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊\`
> *_Visita mí repositorio 😸 para más información, si te agrada el Bot apoya me con una ⭐️ ¡Gracias!_*
${md}

> ───────•••───────

\`📌 𝙋𝘼𝙎𝙊 𝙋𝘼𝙍𝘼 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝙀𝙇 𝘽𝙊𝙏 𝙀𝙇 𝙏𝙀𝙍𝙈𝙐𝙓 (𝙊𝙋𝘾𝙄𝙊𝙉 𝟏 𝙂𝙄𝙏𝙃𝙐𝘽)\`

* termux-setup-storage 

* apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/elrebelde21/ChinaMitzuki/master/install.sh | bash

\`📌 𝙊𝙋𝘾𝙄𝙊𝙉: 2 𝘼𝙍𝘾𝙃𝙄𝙑𝙊\`
> *https://youtu.be/i1xjB4bmYCc*

*• Descarga los archivos:*
https://github.com/elrebelde21/ChinaMitzuki/archive/refs/heads/master.zip

* termux-setup-storage

* apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn

* cd storage/downloads/ChinaMitzuki-master/ChinaMitzuki-master 

* yarn install && npm install 

* ls 

* npm start

> ───────•••───────

\`📌 INSTALAR EN SKY-ULTRA-PLUS HOST\`
https://youtu.be/fZbcCLpSH6Y?si=2AFby-LUy5JGKskU

> *Dashboard:*
https://dash.skyultraplus.com

> *Panel:*
https://panel.skyultraplus.com

> *◄┢┅͜͡✇⟬↯ື ►ஜ۩💥۩ஜ◄ ↯ື⟭✇͜͡┅┧►*` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'ʟᴏʟɪʙᴏᴛ-ᴍᴅ', body: null, thumbnail: imagen1, sourceUrl: 'https://youtu.be/gh5NajZOTA8' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.help = ['instalarbot']
handler.tags = ['main']
handler.command = /^(instalarbot)/i
handler.register = true
export default handler