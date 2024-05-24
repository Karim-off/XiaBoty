import {toDataURL} from 'qrcode';
const handler = async (m, {text, conn}) => {
  if (!text) throw `🔮 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙩𝙚𝙭𝙩𝙤 𝙦𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙖 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧 𝙚𝙣 𝙌𝙧`;
  conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), {scale: 8}), 'qrcode.png', '¯\\_(ツ)_/¯', m);
};
handler.help = ['', 'code'].map((v) => 'qr' + v + ' <teks>');
handler.tags = ['tools'];
handler.command = /^qr(code)?$/i;
export default handler;
