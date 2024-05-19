const handler = async (m, {conn, text, command, usedPrefix}) => {
  const pp = './src/warn.jpg';
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
  else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const warntext = `🔮 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙚 𝙖 𝙪𝙣𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙤 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤\n\n*—◉ 𝘌𝘫𝘦𝘮𝘱𝘭𝘰:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!who) throw m.reply(warntext, m.chat, {mentions: conn.parseMention(warntext)});
  if (m.mentionedJid.includes(conn.user.jid)) return;
  if (user.warn == 0) throw '🔮 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙩𝙞𝙚𝙣𝙚 0 𝙖𝙙𝙫𝙚𝙧𝙩𝙚𝙣𝙘𝙞𝙖𝙨';
  user.warn -= 1;
  await m.reply(`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `♻️ *@${who.split`@`[0]}*`} 𝙎𝙚 𝙡𝙚 𝙦𝙪𝙞𝙩𝙤 𝙪𝙣𝙖 𝙖𝙙𝙫𝙚𝙧𝙩𝙚𝙣𝙘𝙞𝙖\n*ADVERTENCIAS ${user.warn}/3*`, null, {mentions: [who]});
};
handler.command = /^(unwarn|delwarn|deladvertir|deladvertencia|delwarning)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
