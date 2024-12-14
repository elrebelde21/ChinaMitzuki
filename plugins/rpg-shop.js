const xpperlimit = 750
const handler = async (m, {conn, command, args}) => {
let count = command.replace(/^buy/i, '');
count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
count = Math.max(1, count);
if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
global.db.data.users[m.sender].exp -= xpperlimit * count;
global.db.data.users[m.sender].limit += count;
conn.fakeReply(m.chat, `╔═❖ *ＮＯＴＡ ＤＥ ＰＡＧＯ*
║‣ *Has comprando :* ${count} 💎 
║‣ *Gastado :* ${xpperlimit * count} XP
╚═══════════════`, '0@s.whatsapp.net', `Comprar exitosa 👛`, 'status@broadcast', null, fake)} else conn.fakeReply(m.chat, `⚠  Lo siento, no tienes suficientes *XP* para comprar *${count}* Diamantes💎`, '0@s.whatsapp.net', `Estas pobre no tiene esa cantidad de dinero 🥲`, 'status@broadcast', null, fake)
}
handler.help = ['Buy', 'Buyall'];
handler.tags = ['econ'];
handler.command = ['buy', 'buyall'];
handler.register = true
export default handler;
