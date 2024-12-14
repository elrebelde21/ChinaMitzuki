let media = 'https://qu.ax/dcAc.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `\`『 ＣＵＥＮＴＡＳ ＯＦＩＣＩＡＬＥＳ 』\`

\`${wm}\`
> *${bot}*

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 
*💞 iG de la creadora 𝕮𝖍𝖎𝖓𝖆 𝕸𝖎𝖙𝖟𝖚𝖐𝖎 💋*
www.instagram.com/mitzuki_chinita

\`『 ɢɪᴛʜᴜʙ ᴏғɪᴄɪᴀʟ 』\`   
* *${md}* 

\`『  ᴄᴀɴᴀʟ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ / ᴜᴘᴅᴀᴛᴇ 』\`   
* *${nna2}* 

\`『  ᴀsɪsᴛᴇɴᴄɪᴀ ᴘᴀʀᴀ ᴜsᴜᴀʀɪᴏs / sᴏʟɪᴄɪᴛᴀ ᴛᴜ ʙᴏᴛ ᴘᴇʀsᴏɴᴀʟɪᴢᴀᴅᴏ 』\`   
* *${fb}* 

\`『  ᴛɪᴋᴛᴏᴋ 』\`   
* *${tiktok}* 

\`『  ʏᴏᴜᴛᴜʙᴇ 』\`   
* *${yt}* 

\`『  ɢʀᴜᴘᴏ ғᴀᴄᴇʙᴏᴏᴋ 』\`   
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
