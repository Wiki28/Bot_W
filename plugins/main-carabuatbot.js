let fs = require('fs')
let handler = async (m, { conn }) => {
let krizyn = 'https://telegra.ph/file/d104b03750d12e9c101d9.jpg'
let kri = `┌─── 〔 TUTORIAL RUN BOT 〕 ───
❍  UPLOAD SCRIPT BOT KE GITHUB
❍ TUTORIAL UPLOAD ADA DI YOUTUBE
❍ YOUTUBE ADA DI FITUR #SOSMED
❍ ATAU CARI SCRIPT BOT DIGITHUB
❍ SETELAH ITU PENCET FORK DI SCRIPT TERSEBUT
❍ LALU DEPLOY KE HEROKU
❍ SEBELUMNYA GANTI SESSION DULU
❍ GANTI SESSION ADA DI GITHUB
❍ MELALUI WEB REPLIT ATAU APK
❍ SETELAH ITU SAMBUNGKAN HEROKU
❍ KE GITHUB ANDA AGAR DAPAT TERSIMPAN DI HEROKU
❍ SETELAH KALIAN TEKAN ITU
❍ KALIAN TEKAN YANG ADA NAMANYA BRANCH
❍ DISITU ADA DUA PILIHAN
❍ ADA YANG AUTO
❍ DAN ADA JUGA YNG MENUAL
❍ SETELAH KALIAN TEKAN KEDUA NYA
❍ BOT AKAN BERJALAN DENGAN SEMPURNA
❍ SELAMAT MENCOBA MYPREN
`
  conn.send3ButtonImg(m.chat, krizyn, kri, "📮 Silahkan pilih Salah Satu dibawah ini", 'Sosmed', '.sosmed', 'Sewa', '.sewa', 'Menu', '.menu', m) 
}
handler.help = ['carabuatbot']
handler.tags = ['main']
handler.command = /^(cbb|carabuatbot)$/i

module.exports = handler
