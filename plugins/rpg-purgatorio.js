import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`
let url = purgatorio[Math.floor(Math.random() * pies.length)]
conn.sendFile(m.chat, url, 'error.jpg', `*🔮 MAPA PURGATORIO 🔮*`, m)
//conn.sendButton(m.chat, `🔮 AGENDA SEMANAL 🔮`, author, url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}
handler.help = ['mapa']
handler.tags = ['internet']
handler.command = /^(purgatorio|mapapurgatorio)$/
handler.exp = 50
handler.level = 0
export default handler


global.purgatorio = [
"https://cdn.discordapp.com/attachments/1202339620939898981/1212927293802946601/16d40be27a91dfbcc21f485b46c6eb23.jpg?ex=6651e0d1&is=66508f51&hm=d3c8463dbb89fc361c8c1ead5b96493f93731be3ec1d20aa04983a32a4c808fa&",
]