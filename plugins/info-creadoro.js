let handler = async (m, { conn, usedPrefix }) => {
let pp = './src/Lucky.jpg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
βββγπΦΌLucky α΅α΅α΅β»α΄Ήα΄°γβ
ββπΎπ€π£π©πππ©π€ | πΎπ€π£π©πππ©
ββWa.me/34641614021 (BOT) 
ββWa.me/34643694252 (CREADOR)
ββWa.me/15023065534 (CREADOR)
βββββΧβΧβΧβΧβββ
γ€`
let buttonMessage= {
'document': { url: `http://wa.me/34643694252` },
'mimetype': `application/${document}`,
'fileName': `πππ LUCKY π±πΎπ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'http://wa.me/34643694252',
'mediaType': 2,
'previewType': 'pdf',
'title': 'http://wa.me/34643694252',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'LUCKY OFC'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(contacto|owner|creator|propietario|dueΓ±a|dueΓ±o|propietaria|dueΓ±o|creadora|creador)$/i
export default handler

