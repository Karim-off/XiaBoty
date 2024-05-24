/*
wa.me/6287815560235
github: https://github.com/Khayz-XD
Instagram: https://instagram.com/kyz_in_here
ini wm gw jan di hapus. yg hapus anak dajal
*/

let handler = async (m, { conn, args }) => {
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  try {
    const data = conn.chats[id].messages
    const online = Object.values(data).map(item => item.key.participant)
    
    const uniqueOnline = online.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    
    conn.reply(m.chat, 'â”Œâ”€ã€” Daftar Online ã€•\n' + uniqueOnline.map(v => 'â”œ @' + v.replace(/@.+/, '')).join('\n') + '\nâ””â”€â”€â”€â”€', m, {
      contextInfo: { mentionedJid: uniqueOnline }
    })
  } catch (e) {
    m.reply('')
  }
}

handler.help = ['listonline']
handler.tags = ['group']
handler.command = /^(liston(line)?)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null

export default handler