import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let res = await fetch("https://api.zacros.my.id/randomtext/fml")
let json = await res.json()
let { result } = json
conn.reply(m.chat, `βγπΦΌ π»ππππ’α΅α΅α΅β»α΄Ήα΄°γ\nββπ ${result}\nβββββΧ`, m)}
handler.command = /^(frasetest)$/i
handler.limit = 1
export default handler
