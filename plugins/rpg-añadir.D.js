// creditos a https://github.com/FG98F
import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[βππππβ] π΄ππΈπππ΄ππ° π° ππ½ ππππ°ππΈπΎ π²πΎπ½ π΄π» @πππ*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*[βππππβ] πΈπ½πΆππ΄ππ° π»π° π²π°π½ππΈπ³π°π³ π³π΄ π³πΈπ°πΌπ°π½ππ΄π πππ΄ π³π΄ππ΄π° π°π½Μπ°π³πΈπ*'
if (isNaN(txt)) throw '*[βππππβ] ππΈπΌπ±πΎπ»πΎ π½πΎ π°π³πΌπΈππΈπ³πΎ, ππΎπ»πΎ π½ππΌπ΄ππΎπ!*'
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw '*[βππππβ] π΄π» π½ππΌπ΄ππΎ πΌπΈπ½πΈπΌπΎ π³π΄ π³πΈπ°πΌπ°π½ππ΄π πΏπ°ππ° π°π½Μπ°π³πΈπ π΄π π·*'
let users = global.db.data.users
users[who].limit += dmt
m.reply(`
βββββββββββββββ
βββ‘ *π π°π½Μπ°π³πΈπ³πΎ*
ββ *πππππ:* ${dmt}
βββββββββββββββ`)
}
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['aΓ±adirdiamantes'] 
handler.rowner = true
export default handler
