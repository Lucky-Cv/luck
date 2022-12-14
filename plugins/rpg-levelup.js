import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
let { role } = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
âââãðÖ¼ Lá´á´á´Ê áµáµáµâ»á´¹á´°ãâ
ââà¹Û£ÛÍ¡ÍÛðð¨ð¥ðà¦à§£Í¡Íá·Ö³á· 
ââNIVEL
âââ¢ Nombre : *${name}*
âââ¢ Nivel : *${user.level}*
âââ¢ XP : *${user.exp - min}/${xp}*
ââTe falta *${max - user.exp}* de *XP* para subir de nivel
âââââ×â×â×â×âââ`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Bien hecho! ${conn.getName(m.sender)} Nivel: ${user.level}`
        let str = `
âââãðÖ¼ Lá´á´á´Ê áµáµáµâ»á´¹á´°ãâ
ââà¹Û£ÛÍ¡ÍÛðð¨ð¥ðà¦à§£Í¡Íá·Ö³á· 
ââà¹LEVEL UP*
ââà¹Nivel anterior : *${before}*
ââà¹Nivel actual : *${user.level}*
ââCuanto mÃ¡s interactÃºes con los bots, mayor serÃ¡ tu nivel_*
âââââ×â×â×â×âââ`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'https://i.imgur.com/AYfkKZB.jpeg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 

export default handler
