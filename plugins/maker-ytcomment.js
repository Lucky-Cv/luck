let handler = async (m, { conn, text }) => {
if (!text) throw 'No Text'
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
username: conn.getName(m.sender)
}), 'error.png', '*Β‘Β‘πΆππ°π²πΈπ°π πΏπΎπ π²πΎπΌπ΄π½ππ°π!!*', m)
}
handler.help = ['ytcomment <comment>']
handler.tags = ['maker'] 
handler.command = /^(ytcomment)$/i
handler.limit = 1
export default handler
