const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚁𝙴𝙿𝙾𝚁𝚃𝙴*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} el comando ${usedPrefix}play no manda nada*`;
  if (text.length < 10) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝙳𝙴 𝙼𝙸𝙽𝙸𝙼𝙾 𝟷0 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂!*`;
  if (text.length > 1000) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝙳𝙴 𝙼𝙰𝚇𝙸𝙼𝙾 𝟷000 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂!*`;
  const teks = `*❒═════[𝐑𝐄𝐏𝐎𝐑𝐓𝐄]═════❒*\n*┬*\n*├❧ 𝙽𝚄𝙼𝙴𝚁𝙾:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ 𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${text}\n*┴*`;
  conn.reply('59897246324@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('59897246324@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  m.reply(`-ˋˏ ༻🔮 𝙀́𝙓𝙄𝙏𝙊 🔮༺ ˎˊ-\n\n𝘌𝘭 𝘳𝘦𝘱𝘰𝘳𝘵𝘦 𝘢 𝘴𝘪𝘥𝘰 𝘦𝘯𝘷𝘪𝘢𝘥𝘰 𝘢𝘮𝘪 𝘤𝘳𝘦𝘢𝘥𝘰𝘳. 
𝘛𝘦𝘯𝘥𝘳𝘢 𝘶𝘯𝘢 𝘳𝘦𝘴𝘱𝘶𝘦𝘴𝘵𝘢 𝘱𝘳𝘰𝘯𝘵𝘰.
𝘋𝘦 𝘴𝘦𝘳 𝘧𝘢𝘭𝘴𝘰 𝘴𝘦𝘳𝘢 𝘪𝘨𝘯𝘰𝘳𝘢𝘥𝘰 𝘴𝘶 𝘳𝘦𝘱𝘰𝘳𝘵𝘦.`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;
