import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`
let url = bermuda[Math.floor(Math.random() * pies.length)]
conn.sendFile(m.chat, url, 'error.jpg', `*🔮 MAPA BERMUDA 🔮*`, m)
//conn.sendButton(m.chat, `🔮 AGENDA SEMANAL 🔮`, author, url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}
handler.help = ['mapa']
handler.tags = ['internet']
handler.command = /^(bermuda|mapabermuda)$/
handler.exp = 50
handler.level = 0
export default handler


global.bermuda = [
"https://cdn.discordapp.com/attachments/1202339620939898981/1212926255805104168/fd5625b0f4f04149e343aea1045cb17d.jpg?ex=6651dfda&is=66508e5a&hm=a6af8f8815fe03b4d71b3249612af6c0fbb0e1eb3632fe86063d9394e8b97f5a&",
]