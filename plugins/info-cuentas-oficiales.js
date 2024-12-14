let media = 'https://qu.ax/dcAc.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `\`『 ＣＵＥＮＴＡＳ ＯＦＩＣＩＡＬＥＳ 』\`

\`𝙉𝙪𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙘:\`
> *${bot}*

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 
*💞 IG de 𝕮𝖍𝖎𝖓𝖆 𝕸𝖎𝖙𝖟𝖚𝖐𝖎 💋*
www.instagram.com/mitzuki_chinita

\`『 ᴳᶦᵗᴴᵘᵇ ᵒᶠᶦᶜᶦᵃˡ 』\`   
* *${md}* 

\`『  ᶜᵃⁿᵃˡ ᵈᵉ ᵂʰᵃᵗˢᴬᵖᵖ / ᵘᵖᵈᵃᵗᵉ  』\`   
* *${nna2}* 

\`『  ᵃˢᶦˢᵗᵉⁿᶜᶦᵃ ᵖᵃʳᵃ ᵘˢᵘᵃʳᶦᵒˢ ᶠᵃᶜᵉᵇᵒᵒᵏ 』\`   
* *${fb}* 

\`『  ᵀᶦᵏᵀᵒᵏ 』\`   
* *${tiktok}* 

\`『  ʸᵒᵘᵀᵘᵇᵉ 』\`   
* *${yt}* 

\`『  ᴳʳᵘᵖᵒ ᶠᵃᶜᵉᵇᵒᵒᵏ 』\`   
* *${face}* 

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 
> 『 ⱽᶦˢᶦᵗᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵉⁿˡᵃᶜᵉˢ ᵒᶠᶦᶜᶦᵃˡᵉˢ ᵉⁿ ᵘⁿ ᵘⁿᶦᶜᵒ ˡᵘᵍᵃʳ 』\
> https://atom.bio/lolibot

> _*${wm}*_`
await conn.reply(m.chat, str, fkontak, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})}
//conn.sendFile(m.chat, media, 'loli.mp4', str, fkontak)}
handler.help = ['cuentaoficial']
handler.tags = ['main']
handler.command = /^cuentasoficiales|cuentas|cuentaofc|cuentaoficial$/i
handler.register = true
export default handler
