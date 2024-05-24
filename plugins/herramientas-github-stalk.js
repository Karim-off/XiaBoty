import axios from 'axios'
var handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, '*🔮 INGRESE EL NOMBRE DE UN USUARIO DE GIT HUB*', m)
try {
await mensajesEditados(conn, m)
let request = await githubstalk(text) 
let { username, following, followers, type, bio, company, blog, location, email, public_repo, public_gists, profile_pic } = request
let thumb = await (profile_pic)
let gata = `*⬤── 「 𝙂𝙄𝙏𝙃𝙐𝘽 𝙎𝙏𝘼𝙇𝙆 」 ──⬤*
𝙐𝙨𝙪𝙖𝙧𝙞𝙤: ${username}
𝘽𝙞𝙤𝙜𝙧𝙖𝙛𝙞𝙖: ${bio}
𝘾𝙤𝙢𝙥𝙖𝙣𝙞𝙖: ${company}
𝘾𝙤𝙧𝙧𝙚𝙤: ${email}
𝙍𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤𝙨 𝙥𝙪𝙗𝙡𝙞𝙘𝙤𝙨: ${public_repo}
𝙎𝙚𝙜𝙪𝙞𝙙𝙤𝙧: ${followers}
𝙎𝙞𝙜𝙪𝙞𝙙𝙤𝙧𝙚𝙨: ${following}
𝙐𝙗𝙞𝙘𝙖𝙘𝙞𝙤𝙣: ${location}`
await conn.sendFile(m.chat, logogit, 'githubstalk.jpg', gata, m)
} catch (e) {
await conn.sendMessage(m.chat, {text: `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, edit: key})
console.log(`❗❗ 𝙀𝙨𝙩𝙖 𝙁𝙖𝙡𝙡𝙖𝙣𝙙𝙤 𝙚𝙡 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.help = ['githubstalk'].map(v => v + ' <query>')
handler.tags = ['internet']
handler.command = /^(githubstalk)$/i

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function githubstalk(user) {
    return new Promise((resolve, reject) => {
        axios.get('https://api.github.com/users/'+user)
        .then(({ data }) => {
            let hasil = {
                username: data.login,
                nickname: data.name,
                bio: data.bio,
                id: data.id,
                nodeId: data.node_id,
                profile_pic: data.avatar_url,
                url: data.html_url,
                type: data.type,
                admin: data.site_admin,
                company: data.company,
                blog: data.blog,
                location: data.location,
                email: data.email,
                public_repo: data.public_repos,
                public_gists: data.public_gists,
                followers: data.followers,
                following: data.following,
                ceated_at: data.created_at,
                updated_at: data.updated_at
            }
            resolve(hasil)
        })
    })
}