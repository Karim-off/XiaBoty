import {createHash} from 'crypto';
const handler = async function(m, {conn, text, usedPrefix}) {
  const sn = createHash('md5').update(m.sender).digest('hex');
  m.reply(`𝙏𝙪 𝙘𝙤𝙙𝙞𝙜𝙤 𝙙𝙚 𝙨𝙚𝙧𝙞𝙚 𝙚𝙨:

${sn}`.trim());
};
handler.help = ['myns'];
handler.tags = ['xp'];
handler.command = /^(myns|ceksn)$/i;
handler.register = true;
export default handler;
