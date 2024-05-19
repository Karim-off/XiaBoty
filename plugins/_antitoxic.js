const toxicRegex = /SJADJASDJASJGFHJDFKHGFDJKGDFHKGDaFJKHGDKAHSKIDHUITOAIDXFOKJNFVBNCM,VBNCV,MB6/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[mconn.conn.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 5)) await m.reply('*[❗] ' + `${user.warn == 1 ? `🔮 𝙃𝙤𝙡𝙖 @${m.sender.split`@`[0]}` : `@${m.sender.split`@`[0]}`}, 𝙙𝙚𝙘𝙞𝙧 𝙡𝙖 𝙥𝙖𝙡𝙖𝙗𝙧𝙖 "${isToxic}" 𝙚𝙨𝙩𝙖 𝙥𝙧𝙤𝙝𝙞𝙗𝙞𝙙𝙤 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤. 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼: ${user.warn}/5.` + '*', false, {mentions: [m.sender]});
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`🔮 𝙃𝙤𝙡𝙖 @${m.sender.split`@`[0]}, 𝙨𝙪𝙥𝙚𝙧𝙖𝙨𝙩𝙚 𝙡𝙖𝙨 5 𝙖𝙙𝙫𝙚𝙧𝙩𝙚𝙣𝙘𝙞𝙖𝙨 𝙥𝙤𝙧 𝙡𝙤 𝙦𝙪𝙚 𝙨𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤 𝙥𝙤𝙧 𝙩𝙪 𝙘𝙤𝙢𝙥𝙤𝙧𝙩𝙖𝙢𝙞𝙚𝙣𝙩𝙤.`, false, {mentions: [m.sender]});
    user.banned = true;
    await mconn.conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    // await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}
