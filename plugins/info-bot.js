import fs from "fs"
let handler = m => m

handler.all = async function (m) {
let vn = './src/Lucky.jpg'
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: fs.readFileSync('./src/admins.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}}  

if (/^bot$/i.test(m.text)) {
    
conn.sendButton(m.chat, `ยก๐ฌ๐! ๐จ๐๐รญ ๐๐๐๐๐. ๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐ ๐๐ 
๐ฏ๐๐! ๐ฐ'๐ ๐๐๐๐. ๐ฐ ๐๐๐ ๐๐๐๐ ๐`, wm, [['๏ธ๐๐๐๐', `#menu`]], 'conversation', { sendEphemeral: true, quoted: estilo })
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: estiloaudio })   
}
return !0
}
handler.limit = 1
export default handler
