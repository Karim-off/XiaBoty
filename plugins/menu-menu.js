import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen1;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━━━━•💌 𝙓𝙞𝙖𝘽𝙤𝙩-𝙈𝘿 💌•━━━━┓
┃╭─────────♡─────────╮
┃│•🔮¡𝙃𝙊𝙇𝘼! @${m.sender.split`@`[0]}
┃╰─────────♡─────────╯
┃│•🔮𝘾𝙍𝙀𝘼𝘿𝙊𝙍/𝘼 
┃│•🔮 wa.me/59168683798
┃│•🔮𝙑𝙀𝙍𝙎𝙄𝙊𝙉 𝘿𝙀𝙇 𝘽𝙊𝙏: 𝟹.𝟸.𝟷
┃│•🔮𝙁𝙀𝘾𝙃𝘼: ${date}
┃│•🔮𝙉𝙄𝙑𝙀𝙇: ${level}
┃│•🔮𝙀𝙓𝙋: ${exp} 
┃│•🔮𝙍𝘼𝙉𝙂𝙊: ${role} 
┃│•🔮𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎: ${limit}
┃│•🔮𝙓𝙄𝘼𝘾𝙊𝙄𝙉𝙎: ${money}
┃│•🔮𝙏𝙊𝙆𝙀𝙉𝙎: ${joincount}
┃│•🔮𝙏𝙄𝙀𝙈𝙋𝙊 𝘼𝘾𝙏: ${uptime}                                            
┗━━━━━━━━•◦ 🤖 ◦•━━━━━━━━┛

 
┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🟢𝙊𝙉/𝙊𝙁𝙁🔴 」
┃╭───────⧟⭑⧟───────•
┃┊🟢.𝘌𝘯𝘢𝘣𝘭𝘦
┃┊🔴.𝘋𝘪𝘴𝘢𝘣𝘭𝘦
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 ❄️𝙂𝙍𝙐𝙋𝙊𝙎❄️ 」
┃╭───────⧟⭑⧟───────•
┃┊❄️.𝘔𝘦𝘯𝘶𝘧𝘧
┃┊❄️.𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴𝘧𝘧 
┃┊❄️.𝘒𝘪𝘤𝘬
┃┊❄️.𝘎𝘳𝘶𝘱𝘰
┃┊❄️.𝘗𝘳𝘰𝘮𝘰𝘵𝘦
┃┊❄️.𝘋𝘦𝘮𝘰𝘵𝘦
┃┊❄️.𝘓𝘪𝘯𝘬
┃┊❄️.𝘛𝘰𝘥𝘰𝘴
┃┊❄️.𝘚𝘦𝘵𝘸𝘦𝘭𝘤𝘰𝘮𝘦 
┃┊❄️.𝘚𝘦𝘵𝘣𝘺𝘦 
┃┊❄️.𝘕𝘰𝘵𝘪𝘧𝘺 
┃┊❄️.𝘍𝘢𝘯𝘵𝘢𝘴𝘮𝘢𝘴 
┃┊❄️.𝘒𝘪𝘤𝘬𝘧𝘢𝘯𝘵𝘢𝘴𝘮𝘢𝘴
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛
 

┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 💥𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀💥 」
┃╭───────⧟⭑⧟───────•
┃┊🗺️.𝘔𝘦𝘯𝘶𝘧𝘧
┃┊🗺️.𝘉𝘦𝘳𝘮𝘶𝘥𝘢
┃┊🗺️.𝘒𝘢𝘭𝘢𝘩𝘢𝘳𝘪
┃┊🗺️.𝘈𝘭𝘱𝘦𝘴
┃┊🗺️.𝘗𝘶𝘳𝘨𝘢𝘵𝘰𝘳𝘪𝘰
┃┊🗺️.𝘕𝘦𝘹𝘵𝘦𝘳𝘳𝘢
┃┊🗺️.𝘈𝘨𝘦𝘯𝘥𝘢𝘴𝘦𝘮𝘢𝘯𝘢𝘭
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🔱𝘽𝙐𝙎𝘾𝘼𝙍 𝙑𝙎🔱 」
┃╭───────⧟⭑⧟───────•
┃┊🔱.𝘉𝘶𝘴𝘤𝘢𝘳𝘷𝘴𝘮𝘢𝘴𝘤
┃┊🔱.𝘉𝘴𝘮𝘢𝘴𝘤
┃┊🔱.𝘉𝘶𝘴𝘤𝘢𝘳𝘷𝘴𝘧𝘦𝘮
┃┊🔱.𝘉𝘴𝘧𝘦𝘮
┃┊🔱.𝘉𝘶𝘴𝘤𝘢𝘳𝘷𝘴𝘮𝘪𝘹𝘵𝘰
┃┊🔱.𝘉𝘴𝘮𝘪𝘹𝘵𝘰
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🧝🏼‍♀️𝙇𝙄𝙎𝙏𝘼𝙎 𝙁𝙀𝙈🧝🏼‍♀️ 」
┃╭───────⧟⭑⧟───────•
┃┊🧝🏼‍♀️.𝘍𝘦𝘮𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘰14
┃┊🧝🏼‍♀️.𝘍𝘦𝘮𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘰16
┃┊🧝🏼‍♀️.𝘍𝘦𝘮𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘰18
┃┊🧝🏼‍♀️.𝘍𝘦𝘮𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘰20
┃┊🧝🏼‍♀️.𝘍𝘦𝘮𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘰22
┃┊🧝🏼‍♀️.𝘍𝘦𝘮𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘰00
┃┊🧝🏼‍♀️.𝘍𝘦𝘮𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘰𝘷𝘴
┃┊🧝🏼‍♀️.𝘍𝘦𝘮𝘷𝘪𝘷𝘪𝘥𝘰14
┃┊🧝🏼‍♀️.𝘍𝘦𝘮𝘷𝘪𝘷𝘪𝘥𝘰16
┃┊🧝🏼‍♀️.𝘍𝘦𝘮𝘷𝘪𝘷𝘪𝘥𝘰18
┃┊🧝🏼‍♀️.𝘍𝘦𝘮𝘷𝘪𝘷𝘪𝘥𝘰20
┃┊🧝🏼‍♀️.𝘍𝘦𝘮𝘷𝘪𝘷𝘪𝘥𝘰22
┃┊🧝🏼‍♀️.𝘍𝘦𝘮𝘷𝘪𝘷𝘪𝘥𝘰00
┃┊🧝🏼‍♀️.𝘍𝘦𝘮𝘷𝘪𝘷𝘪𝘥𝘰𝘷𝘴
┃┊🧝🏼‍♀️.𝘍𝘦𝘮8𝘷𝘴8
┃┊🧝🏼‍♀️.𝘍𝘦𝘮12𝘷𝘴12
┃┊🧝🏼‍♀️.𝘍𝘦𝘮16𝘷𝘴16
┃┊🧝🏼‍♀️.𝘍𝘦𝘮𝘪𝘯𝘵𝘦𝘳𝘯𝘢4
┃┊🧝🏼‍♀️.𝘍𝘦𝘮𝘪𝘯𝘵𝘦𝘳𝘯𝘢6
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 ☮️𝙇𝙄𝙎𝙏𝘼𝙎 𝙈𝘼𝙎𝘾☮️ 」
┃╭───────⧟⭑⧟───────•
┃│🧝🏼.𝘔𝘢𝘴𝘤𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘰14
┃│🧝🏼.𝘔𝘢𝘴𝘤𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘰16
┃│🧝🏼.𝘔𝘢𝘴𝘤𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘰18
┃│☮️.𝘔𝘢𝘴𝘤𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘰20
┃│☮️.𝘔𝘢𝘴𝘤𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘰22
┃│☮️.𝘔𝘢𝘴𝘤𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘰00
┃│☮️.𝘔𝘢𝘴𝘤𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘰𝘷𝘴
┃│☮️.𝘔𝘢𝘴𝘤𝘷𝘪𝘷𝘪𝘥𝘰14
┃│☮️.𝘔𝘢𝘴𝘤𝘷𝘪𝘷𝘪𝘥𝘰16
┃│☮️.𝘔𝘢𝘴𝘤𝘷𝘪𝘷𝘪𝘥𝘰18
┃│☮️.𝘔𝘢𝘴𝘤𝘷𝘪𝘷𝘪𝘥𝘰20
┃│☮️.𝘔𝘢𝘴𝘤𝘷𝘪𝘷𝘪𝘥𝘰22
┃│☮️.𝘔𝘢𝘴𝘤𝘷𝘪𝘷𝘪𝘥𝘰00
┃│☮️.𝘔𝘢𝘴𝘤𝘷𝘪𝘷𝘪𝘥𝘰𝘷𝘴
┃│☮️.𝘔𝘢𝘴𝘤8𝘷𝘴8
┃│☮️.𝘔𝘢𝘴𝘤12𝘷𝘴12
┃│☮️.𝘔𝘢𝘴𝘤16𝘷𝘴16
┃│☮️.𝘔𝘢𝘴𝘤𝘪𝘯𝘵𝘦𝘳𝘯𝘢4
┃│☮️.𝘔𝘢𝘴𝘤𝘪𝘯𝘵𝘦𝘳𝘯𝘢6
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🌀𝙇𝙄𝙉𝙆𝙎/𝘼𝙋𝙆𝙎🌀 」
┃╭───────⧟⭑⧟───────•
┃│🌀.𝘚𝘱𝘢𝘮𝘈𝘱𝘬 /𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱
┃│🌀.𝘚𝘱𝘢𝘮𝘊𝘰𝘮𝘶 /𝘊𝘰𝘮𝘶́𝘯
┃│🌀.𝘚𝘱𝘢𝘮2
┃│🌀.𝘙𝘤𝘶𝘳𝘴𝘰𝘴𝘥𝘻𝘯
┃│🌀.𝘋𝘳𝘪𝘷𝘦𝘴 𝘥𝘻𝘯
┃│🌀.𝘥𝘻𝘯
┃│🌀.𝘈𝘱𝘬𝘦𝘥𝘪𝘵𝘴
┃│🌀.𝘋𝘳𝘪𝘷𝘦𝘦𝘥𝘪𝘵𝘴
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🍭𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎🍭 」
┃╭───────⧟⭑⧟───────•
┃│🍭.𝘚𝘵𝘪𝘤𝘬𝘦𝘳 | 𝘴 𝘪𝘮𝘢𝘨𝘦𝘯 𝘰 𝘷𝘪𝘥𝘦𝘰
┃│🍭.𝘚𝘵𝘪𝘤𝘬𝘦𝘳 | 𝘴 𝘶𝘳𝘭 𝘥𝘦 𝘵𝘪𝘱𝘰 𝘫𝘱𝘨
┃│🍭.𝘌𝘮𝘰𝘫𝘪𝘮𝘪𝘹 😺+😆
┃│🍭.𝘘𝘤
┃│🍭.𝘚𝘤𝘪𝘳𝘤𝘭𝘦 | 𝘤𝘪𝘳𝘤𝘶𝘭𝘰 𝘪𝘮𝘢𝘨𝘦𝘯
┃│🍭.𝘚𝘦𝘮𝘰𝘫𝘪 | 𝘦𝘮𝘰𝘫𝘪 𝘵𝘪𝘱𝘰 𝘦𝘮𝘰𝘫𝘪
┃│🍭.𝘈𝘵𝘵𝘱 𝘵𝘦𝘹𝘵𝘰
┃│🍭.𝘈𝘵𝘵𝘱2 𝘵𝘦𝘹𝘵𝘰
┃│🍭.𝘛𝘵𝘱 𝘵𝘦𝘹𝘵𝘰
┃│🍭.𝘛𝘵𝘱2 𝘵𝘦𝘹𝘵𝘰
┃│🍭.𝘛𝘵𝘱3 𝘵𝘦𝘹𝘵𝘰
┃│🍭.𝘛𝘵𝘱4 𝘵𝘦𝘹𝘵𝘰
┃│🍭.𝘛𝘵𝘱5 𝘵𝘦𝘹𝘵𝘰
┃│🍭.𝘛𝘵𝘱6 𝘵𝘦𝘹𝘵𝘰
┃│🍭.𝘋𝘢𝘥𝘰
┃│🍭.𝘚𝘵𝘪𝘤𝘬𝘦𝘳𝘮𝘢𝘬𝘦𝘳 𝘳𝘦𝘴𝘱𝘰𝘯𝘥𝘦𝘳/𝘪𝘮𝘢𝘨𝘦𝘯
┃│🍭.𝘚𝘵𝘪𝘤𝘬𝘦𝘳𝘧𝘪𝘭𝘵𝘳𝘦𝘳 𝘳𝘦𝘴𝘱𝘰𝘯𝘥𝘦𝘳/𝘪𝘮𝘢𝘨𝘦𝘯
┃│🍭.𝘊𝘴 : 𝘊𝘴2
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🎮𝙅𝙐𝙀𝙂𝙊𝙎🎮 」
┃╭───────⧟⭑⧟───────•
┃│🎮.𝘔𝘢𝘵𝘦𝘴
┃│🎮.𝘗𝘱𝘵𝘵
┃│🎮.𝘗𝘳𝘰𝘴𝘵𝘪𝘵𝘶𝘵𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘗𝘳𝘰𝘴𝘵𝘪𝘵𝘶𝘵𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘎𝘢𝘺2 <@𝘵𝘢𝘨>
┃│🎮.𝘓𝘦𝘴𝘣𝘪𝘢𝘯𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘗𝘢𝘫𝘦𝘳𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘗𝘢𝘫𝘦𝘳𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘗𝘶𝘵𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘗𝘶𝘵𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘔𝘢𝘯𝘤𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘔𝘢𝘯𝘤𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘙𝘢𝘵𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘕𝘦𝘨𝘳𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘕𝘦𝘨𝘳𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘍𝘦𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘍𝘦𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘚𝘪𝘯𝘱𝘰𝘵𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘚𝘪𝘯𝘵𝘦𝘵𝘢𝘴 <@𝘵𝘢𝘨>
┃│🎮.𝘚𝘪𝘯𝘱𝘪𝘵𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘈𝘥𝘰𝘱𝘵𝘢𝘥𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘈𝘥𝘰𝘱𝘵𝘢𝘥𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘓𝘰𝘷𝘦
┃│🎮.𝘓𝘰𝘴10
┃│🎮.𝘚𝘶𝘪𝘵𝘱𝘷𝘱
┃│🎮.𝘚𝘭𝘰𝘵
┃│🎮.𝘚𝘪𝘮𝘴𝘪𝘮𝘪
┃│🎮.𝘎𝘦𝘮𝘪𝘯𝘪
┃│🎮.𝘗𝘳𝘦𝘨𝘶𝘯𝘵𝘢
┃│🎮.𝘊𝘶𝘢𝘯𝘥𝘰
┃│🎮.𝘚𝘩𝘪𝘱5
┃│🎮.𝘈𝘣𝘳𝘢𝘻𝘰
┃│🎮.𝘚𝘩𝘪𝘱2
┃│🎮.𝘍𝘰𝘳𝘮𝘢𝘳𝘱𝘢𝘳𝘦𝘫𝘢
┃│🎮.𝘝𝘦𝘳𝘥𝘢𝘥
┃│🎮.𝘙𝘦𝘵𝘰
┃│🎮.𝘊𝘢𝘯𝘤𝘪𝘰𝘯
┃│🎮.𝘗𝘪𝘴𝘵𝘢
┃│🎮.𝘙𝘶𝘭𝘦𝘵𝘢
┃│🎮.𝘡𝘰𝘥𝘪𝘢𝘤
┃│🎮.𝘖𝘥𝘪𝘰
┃│🎮.𝘚𝘩𝘪𝘱
┃│🎮.𝘚𝘰𝘳𝘵𝘦𝘰
┃│🎮.𝘔𝘪𝘯𝘰𝘷𝘪𝘢
┃│🎮.𝘔𝘪𝘯𝘰𝘷𝘪𝘰
┃│🎮.𝘒𝘤𝘩𝘦𝘳𝘢
┃│🎮.𝘒𝘤𝘩𝘦𝘳𝘰
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🎭𝙄𝙈𝘼𝙂𝙀𝙉𝙀𝙎🎭 」
┃╭───────⧟⭑⧟───────•
┃│🖍️.𝘎𝘰𝘬𝘶
┃│🖍️.𝘝𝘦𝘨𝘦𝘵𝘢
┃│🖍️.𝘓𝘰𝘳𝘢
┃│🖍️.𝘊𝘳7
┃│🖍️.𝘚𝘱𝘪𝘥𝘦𝘳𝘮𝘢𝘯
┃│🖍️.𝘉𝘢𝘵𝘮𝘢𝘯
┃│🖍️.𝘏𝘦𝘭𝘭𝘰𝘬𝘪𝘵𝘺
┃│🖍️.𝘊𝘩𝘢𝘳𝘮𝘢𝘯𝘥𝘦𝘳
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🈴𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎🈴 」
┃╭───────⧟⭑⧟───────•
┃│🈴.𝘗𝘭𝘢𝘺
┃│🈴.𝘗𝘭𝘢𝘺.1
┃│🈴.𝘗𝘭𝘢𝘺2.2
┃│🈴.𝘠𝘵𝘷.2
┃│🈴.𝘠𝘵𝘢.2
┃│🈴.𝘗𝘭𝘢𝘺𝘭𝘪𝘴𝘵
┃│🈴.𝘚𝘱𝘰𝘵𝘪𝘧𝘺
┃│🈴.𝘚𝘱𝘰𝘵𝘪𝘧𝘺𝘥𝘭
┃│🈴.𝘛𝘪𝘬𝘵𝘰𝘬
┃│🈴.𝘐𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮
┃│🈴.𝘔𝘦𝘥𝘪𝘢𝘧𝘪𝘳𝘦
┃│🈴.𝘎𝘥𝘳𝘪𝘷𝘦
┃│🈴.𝘛𝘸𝘪𝘵𝘵𝘦𝘳
┃│🈴.𝘠𝘵𝘢
┃│🈴.𝘠𝘵𝘷
┃│🈴.𝘐𝘮𝘢𝘨𝘦𝘯
┃│🈴.𝘐𝘢𝘪𝘮𝘢𝘨𝘦𝘯
┃│🈴.𝘗𝘪𝘯𝘵𝘦𝘳𝘦𝘴𝘵
┃│🈴.𝘐𝘨𝘴𝘵𝘰𝘳𝘺
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 📍𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍𝙀𝙎📍 」
┃╭───────⧟⭑⧟───────•
┃│📍.𝘛𝘰𝘪𝘮𝘱
┃│📍.𝘛𝘰𝘮𝘱3
┃│📍.𝘛𝘰𝘱𝘵𝘵
┃│📍.𝘛𝘰𝘷𝘪𝘥𝘦𝘰
┃│📍.𝘛𝘵𝘴
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 ♓𝙀𝙁𝙀𝘾𝙏𝙊𝙎/𝙇𝙊𝙂𝙊𝙎♓ 」
┃╭───────⧟⭑⧟───────•
┃│♓.𝘔𝘦𝘯𝘴𝘢𝘫𝘦𝘧𝘢𝘭𝘴𝘰
┃│♓.𝘓𝘰𝘨𝘰𝘴
┃│♓.𝘓𝘰𝘨𝘰𝘤𝘰𝘳𝘢𝘻𝘰𝘯
┃│♓.𝘠𝘵𝘤𝘰𝘮𝘮𝘦𝘯𝘵
┃│♓.𝘏𝘰𝘳𝘯𝘺𝘤𝘢𝘳𝘥
┃│♓.𝘐𝘵𝘴𝘴𝘰𝘴𝘵𝘶𝘱𝘪𝘥
┃│♓.𝘗𝘪𝘹𝘦𝘭𝘢𝘳
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 💌𝙁𝙍𝘼𝙎𝙀𝙎💌 」
┃╭───────⧟⭑⧟───────•
┃│🌹.𝘗𝘪𝘳𝘰𝘱𝘰
┃│🌹.𝘊𝘰𝘯𝘴𝘦𝘫𝘰
┃│🌹.𝘍𝘳𝘢𝘴𝘦𝘳𝘰𝘮𝘢𝘯𝘵𝘪𝘤𝘢
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 ✨𝘽𝙐𝙎𝘾𝘼𝘿𝙊𝙍𝙀𝙎✨ 」
┃╭───────⧟⭑⧟───────•
┃│🔍.𝘟𝘯𝘹𝘹𝘴𝘦𝘢𝘳𝘤𝘩
┃│🔍.𝘎𝘰𝘰𝘨𝘭𝘦
┃│🔍.𝘓𝘦𝘵𝘳𝘢
┃│🔍.𝘞𝘪𝘬𝘪𝘱𝘦𝘥𝘪𝘢
┃│🔍.𝘠𝘵𝘴𝘦𝘢𝘳𝘤𝘩
┃│🔍.𝘗𝘭𝘢𝘺𝘴𝘵𝘰𝘳𝘦
┃│🔍.𝘔𝘦𝘳𝘤𝘢𝘥𝘰𝘭𝘪𝘣𝘳𝘦
┃│🔍.𝘗𝘰𝘳𝘯𝘩𝘶𝘣𝘴𝘦𝘢𝘳𝘤𝘩
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 ☀️𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎☀️ 」
┃╭───────⧟⭑⧟───────•
┃│☀️.𝘊𝘭𝘪𝘮𝘢
┃│☀️.𝘈𝘧𝘬
┃│☀️.𝘖𝘤𝘳
┃│☀️.𝘊𝘢𝘭𝘤
┃│☀️.𝘋𝘦𝘭
┃│☀️.𝘞𝘩𝘢𝘵𝘮𝘶𝘴𝘪𝘤
┃│☀️.𝘘𝘳𝘤𝘰𝘥𝘦
┃│☀️.𝘛𝘳𝘢𝘥𝘶𝘤𝘪𝘳
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 ⭐𝙀𝘾𝙊𝙉𝙊𝙈𝙄𝘼𝙎⭐ 」
┃╭───────⧟⭑⧟───────•
┃│⭐.𝘝𝘦𝘳𝘪𝘧𝘪𝘤𝘢𝘳
┃│⭐.𝘜𝘯𝘳𝘦𝘨
┃│⭐.𝘔𝘪𝘯𝘢𝘳
┃│⭐.𝘉𝘶𝘺
┃│⭐.𝘞𝘰𝘳𝘬
┃│⭐.𝘔𝘦𝘯𝘥𝘪𝘨𝘢𝘳
┃│⭐.𝘛𝘳𝘢𝘯𝘴𝘧𝘦𝘳
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🍂𝙊𝙒𝙉𝙀𝙍𝙎🍂 」
┃╭───────⧟⭑⧟───────•
┃│🍂.𝘑𝘰𝘪𝘯 𝚎𝚗𝚕𝚊𝚌𝚎
┃│🍂.𝘜𝘯𝘦𝘵𝘦 𝚎𝚗𝚕𝚊𝚌𝚎
┃│🍂.𝘋𝘢𝘳𝘥𝘪𝘢𝘮𝘢𝘯𝘵𝘦𝘴 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘋𝘢𝘳𝘹𝘱 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘋𝘢𝘳𝘹𝘪𝘢𝘤𝘰𝘪𝘯𝘴 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘈𝘥𝘥𝘱𝘳𝘦𝘮 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘈𝘥𝘥𝘱𝘳𝘦𝘮2 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘈𝘥𝘥𝘱𝘳𝘦𝘮3 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘈𝘥𝘥𝘱𝘳𝘦𝘮4 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘐𝘥𝘪𝘰𝘮𝘢 | 𝘭𝘢𝘯𝘨𝘶𝘢𝘫𝘦
┃│🍂.𝘊𝘢𝘫𝘢𝘧𝘶𝘦𝘳𝘵𝘦
┃│🍂.𝘊𝘰𝘮𝘶𝘯𝘪𝘤𝘢𝘳|𝚝𝚎𝚡𝚝𝚘
┃│🍂.𝘉𝘳𝘰𝘢𝘥𝘤𝘢𝘴𝘵𝘤𝘩𝘢𝘵|𝚝𝚎𝚡𝚝𝚘
┃│🍂.𝘊𝘰𝘮𝘶𝘯𝘪𝘤𝘢𝘳𝘱𝘷 𝚝𝚎𝚡𝚝𝚘
┃│🍂.𝘉𝘳𝘰𝘢𝘥𝘤𝘢𝘴𝘵𝘨𝘤 𝚝𝚎𝚡𝚝𝚘
┃│🍂.𝘊𝘰𝘮𝘶𝘯𝘪𝘤𝘢𝘳𝘨𝘳𝘶𝘱𝘰𝘴 𝚝𝚎𝚡𝚝𝚘
┃│🍂.𝘉𝘰𝘳𝘳𝘢𝘳𝘵𝘮𝘱
┃│🍂.𝘋𝘦𝘭𝘦𝘹𝘱 @𝚝𝚊𝚐
┃│🍂.𝘋𝘦𝘭𝘰𝘱𝘵𝘪𝘮𝘶𝘴𝘤𝘰𝘪𝘯𝘴 @𝚝𝚊𝚐
┃│🍂.𝘋𝘦𝘭𝘥𝘪𝘢𝘮𝘢𝘯𝘵𝘦𝘴 @𝚝𝚊𝚐
┃│🍂.𝘙𝘦𝘪𝘯𝘪𝘤𝘪𝘢𝘳 | 𝘳𝘦𝘴𝘵𝘢𝘳𝘵
┃│🍂.𝘈𝘤𝘵𝘶𝘢𝘭𝘪𝘻𝘢𝘳 | 𝘶𝘱𝘥𝘢𝘵𝘦
┃│🍂.𝘈𝘥𝘥𝘱𝘳𝘦𝘮 | +𝘱𝘳𝘦𝘮 @𝚝𝚊𝚐
┃│🍂.𝘋𝘦𝘭𝘱𝘳𝘦𝘮 | -𝘱𝘳𝘦𝘮 @𝚝𝚊𝚐
┃│🍂.𝘓𝘪𝘴𝘵𝘢𝘱𝘳𝘦𝘮𝘪𝘶𝘮 | 𝘭𝘪𝘴𝘵𝘱𝘳𝘦𝘮
┃│🍂.𝘈𝘯̃𝘢𝘥𝘪𝘳𝘥𝘪𝘢𝘮𝘢𝘯𝘵𝘦𝘴 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘈𝘯̃𝘢𝘥𝘪𝘳𝘹𝘱 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃│🍂.𝘈𝘯̃𝘢𝘥𝘪𝘳𝘤𝘰𝘪𝘯𝘴 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '🔮 𝙀𝙨𝙩𝙚 𝙢𝙚𝙣𝙪 𝙩𝙞𝙚𝙣𝙚 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙩𝙚𝙧𝙣𝙤 𝙥𝙤𝙧 𝙡𝙤 𝙘𝙪𝙖𝙡 𝙣𝙤 𝙛𝙪𝙚 𝙥𝙤𝙨𝙞𝙗𝙡𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙡𝙤. 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙤 𝙖𝙡 𝙨𝙩𝙖𝙛𝙛.', m);
  }
};
handler.command = /^(menu|menú|memu)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}