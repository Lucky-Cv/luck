import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}πππππππ ππ ππππΌπΎπ ππΌπππΏπ πΏπ πππΏππΌππππ.\n\nπππππ πΌ ππΌπππΏ πππΏππΌππππ ππππ.`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
βγπΦΌ αΉππ―πππππ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γ
ββ|β€|οΈ${eg}
ββ|π|π½πΎπΌπ±ππ΄: ${filename}
ββ|π₯|πΏπ΄ππΎ: ${filesizeH}
ββ|π|ππΈπΏπΎ: ${ext}
βββββΧβΧβΧβΧβββ
β _Cargando..._
β°β°β°β±β±β±β±β±β±β³`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'πΆπΈππ·ππ±',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./src/Menu2.jpg"),
sourceUrl: `https://github.com/Yovanihades1212/HADES-BOT-MDV2.git`}}})
  
let info = `ππΌπππ πΌ 150 ππ½ ππ πππππ½ππ πππ ππ ππ πππππ.

ππππΌπππ πππΌπ 150 ππ½ ππΌπ πππ π½π ππππ.`.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['ππππ', '/menu'],
['πππππποΈ', '/estado']
], m,)  
  
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) { 
m.reply(`${fg}ππππππΌ πΌ πππππππΌπ. πΏππ½π πΏπ πππ ππ ππππΌπΎπ ππΌπππΏπ πΏπ πππΏππΌππππ.
ππππΌππ πππ πΌππΌππ. ππππ π½π πΌ ππΌπππΏ πππΏππΌππππ ππππ.`)
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.limit = 3
handler.exp = 100
export default handler

