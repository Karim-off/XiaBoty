import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  if (!/image/g.test(mime)) throw '🔮 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙤 𝙚𝙩𝙞𝙦𝙪𝙚𝙩𝙖 𝙖 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣';
  m.reply('🔮 𝘾𝙤𝙣𝙫𝙞𝙧𝙩𝙞𝙚𝙣𝙙𝙤 𝙞𝙢𝙖𝙜𝙚𝙣 𝙖 𝙙𝙞𝙨𝙚ñ𝙤 𝙖𝙣𝙞𝙢𝙚 , 𝙎𝙚𝙖 𝙥𝙖𝙘𝙞𝙚𝙣𝙩𝙚 𝙚𝙣 𝙡𝙤 𝙦𝙪𝙚 𝙭𝙞𝙖 𝙚𝙣𝙫í𝙖 𝙚𝙡 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤');
  const data = await q.download?.();
  const image = await uploadImage(data);
  try {
    const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
    await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
  } catch (i) {
    try {
      const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
      await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
    } catch (a) {
      try {
        const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
        await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
      } catch (e) {
        throw '🔮 𝙀𝙧𝙧𝙤𝙧 𝙫𝙚𝙧𝙞𝙛𝙞𝙦𝙪𝙚 𝙦𝙪𝙚 𝙚𝙣 𝙡𝙖 𝙞𝙢𝙖𝙜𝙚𝙣 𝙨𝙚𝙖 𝙫𝙞𝙨𝙞𝙗𝙡𝙚 𝙚𝙡 𝙧𝙤𝙨𝙩𝙧𝙤 𝙙𝙚 𝙪𝙣𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖';
      }
    }
  }
};
handler.help = ['toanime'];
handler.tags = ['tools'];
handler.command = /^(jadianime|toanime)$/i;
export default handler;
