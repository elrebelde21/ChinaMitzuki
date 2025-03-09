import ws from 'ws';
export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender] || {};
let setting = global.db.data.settings[this.user.jid]
const settingsREAD = global.db.data.settings[this.user.jid] || {}
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
const participants = m.isGroup ? (await conn.groupMetadata(m.chat)).participants : [];
const mainBotInGroup = participants.some(p => p.id === global.conn.user.jid);
const primaryBot = chat.primaryBot;
const primaryBotConnected = users.some(conn => conn.user.jid === primaryBot);
const primaryBotInGroup = participants.some(p => p.id === primaryBot);
    
if (!global.db.data.users[m.sender]) global.db.data.users[m.sender] = {};
if (!global.db.data.users[m.sender].mensaje) global.db.data.users[m.sender].mensaje = {};
if (!global.db.data.users[m.sender].mensaje[m.chat]) global.db.data.users[m.sender].mensaje[m.chat] = 0;
global.db.data.users[m.sender].mensaje[m.chat]++;

if (m.isGroup) {
if (primaryBot) {
if (primaryBotConnected && primaryBotInGroup) {
if (this.user.jid !== primaryBot) throw !1; 
}
else if (mainBotInGroup) {
if (this.user.jid !== global.conn.user.jid) throw !1;
}}}

if (m.fromMe) return
if (m.isGroup) return !1
if (!m.message) return !0 
if (["120363297379773397@newsletter", "120363355261011910@newsletter"].includes(m.chat)) return;
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') || m.text.includes('estado') || m.text.includes('code') || m.text.includes('Code') || m.text.includes('bots') || m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('reg') || m.text.includes('verificar') || m.text.includes('Serbot') || m.text.includes('Jadibot') || m.text.includes('jadibot code') || m.text.includes('serbot code') || m.text.includes('jadibot --code') || m.text.includes('serbot --code')) return !0
if (!user.warnPv) user.warnPv = false;

if (setting.antiPrivate && !isOwner && !isROwner) {
if (user.warnPv) {
console.log(`[AntiPrivate]`);
throw !0; 
}

if (!user.warnPv) {
m.reply(`Hola esta prohibido usar los comando al privado del bot, por lo cual seras bloqueado...\nwww.instagram.com/mitzuki_chinita\n\n> _*Para usar mi funciones unirte al  grupo oficial 👇*_\n${[nnn, nnnttt, nnnt].getRandom()}`); 
user.warnPv = true;
throw !0; 
}}

if (m.text && prefixRegex.test(m.text)) {
this.sendPresenceUpdate('composing', m.chat)
this.readMessages([m.key])
        
let usedPrefix = m.text.match(prefixRegex)[0]
let command = m.text.slice(usedPrefix.length).trim().split(' ')[0]
}
}
