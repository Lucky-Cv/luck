let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `βββγπΦΌ π»ππππ’ α΅α΅α΅β»α΄Ήα΄°γβ\nββ${pickRandom(['Que pro π has minado','πβ¨ Genial!! Obtienes','WOW!! eres un(a) gran Minero(a) βοΈ Obtienes','Felicidades!! Ahora tienes','βοΈβοΈβοΈ Obtienes'])}\nβββββΧβΧβΧβΧβββ`
let pp = 'https://i.imgur.com/fj9VfPz.mp4'

let hades= Math.floor(Math.random() * 1000)
global.db.data.users[m.sender].money += hades * 1  
//let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastcoins + 600000
if (new Date - global.db.data.users[m.sender].lastcoins < 600000) throw `*π Vuelva en ${msToTime(time - new Date())} para continuar minando βοΈ*`  

conn.sendHydrated(m.chat, `*${minar} ${hades} πππππ`, wm, pp, md, 'πΆπΈππ·ππ±', null, null, [
['π πππππ πππ', `.minar2`],
['ππππππ πππππππππ', `.minar`],
['ππππππ πππππ', `.minar3`]
], m,)
global.db.data.users[m.sender].lastcoins = new Date * 1  

//m.reply(`*${minar} *${hasil} ππ*`)

}
handler.help = ['minar3']
handler.tags = ['hadea']
handler.command = ['minar3', 'miming3', 'mine3', 'minarhadescoins', 'minarcoins', 'minarhades'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
