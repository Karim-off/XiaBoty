import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`
let url = nexterra[Math.floor(Math.random() * pies.length)]
conn.sendFile(m.chat, url, 'error.jpg', `*🔮 MAPA NEXTERRA🔮*`, m)
//conn.sendButton(m.chat, `🔮 AGENDA SEMANAL 🔮`, author, url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}
handler.help = ['agenda']
handler.tags = ['internet']
handler.command = /^(nexterra|mapanexterra)$/
handler.exp = 50
handler.level = 0
export default handler


global.nexterra = [
"https://cdn.discordapp.com/attachments/1202339620939898981/1212928426982383646/NeXTerra.jpg?ex=6651e1e0&is=66509060&hm=a7ace01dc7a8de0779d99315c5dc12daf7007ba7de5a328b54d0e1b37f21ba95&",
]