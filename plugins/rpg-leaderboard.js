import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
let users = Object.entries(global.db.data.users)
.map(([key, value]) => ({ ...value, jid: key }))
.filter(user => user.jid && user.jid.endsWith('@s.whatsapp.net') && (user.money > 0 || user.limit > 0 || user.exp > 0)); 
let sortedUsers = users.sort((a, b) => (b.money + b.limit + b.exp) - (a.money + a.limit + a.exp)); 
let page = parseInt(args[0]) || 1;
let itemsPerPage = 10;
let totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
page = Math.max(1, Math.min(page, totalPages));
let start = (page - 1) * itemsPerPage;
let end = start + itemsPerPage;
let topUsers = sortedUsers.slice(start, end);
let text = `\`🏆 𝚃𝙰𝙱𝙻𝙰 𝙳𝙴 𝙲𝙻𝙰𝚂𝙸𝙲𝙰𝙲𝙸𝙾𝙽\`\n\n`;
text += topUsers.map(({ jid, money, limit, exp }, i) => {
let tag = `@${jid.replace(/@s\.whatsapp\.net$/, '')}`;
return `*${start + i + 1} ›* ${tag}\n*💎 Diamante:* ${formatNumber(limit)} (${limit.toLocaleString()})\n*🪙 LoliCoins:* ${formatNumber(money)} (${money.toLocaleString()})\n*✨ Exp:* ${formatNumber(exp)} (${exp.toLocaleString()})\n`;
}).join('\n');
text += `\n*• Página:* ${page}/${totalPages}`;
await m.reply(text, null, { mentions: conn.parseMention(text) });
};
handler.help = ['leaderboard', 'lb'];
handler.tags = ['econ'];
handler.command = ['leaderboard', 'lb', 'top'];
handler.register = true;
handler.exp = 3500;

export default handler;

function formatNumber(num) {
    return num >= 1e6 ? (num / 1e6).toFixed(1) + 'M' :
           num >= 1e3 ? (num / 1e3).toFixed(1) + 'k' :
           num.toString();
}