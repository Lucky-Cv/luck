let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let vn = './media/ven.mp3'
let oi = `βββγπΌπ΄π½ππ°πΉπ΄γβ ${pesan}`
let teks = `βββγπππππππ π πππππγβ \n\nβ ${oi}\n\nβ βγπ΄ππΈπππ΄ππ°πγβ \n`
for (let mem of participants) {
teks += `ββ@${mem.id.split('@')[0]}\n`}
teks += `βπΦΌ π»ππππ’ α΅α΅α΅β»α΄Ήα΄°\n\nββββββββββββββββ`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciΓ³n)$/i
handler.limit = 1
handler.admin = true
handler.group = true
export default handler




