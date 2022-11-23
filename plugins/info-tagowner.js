let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let krizyn = 'https://telegra.ph/file/cd37b4f991d633caa6306.jpg'
await conn.send3ButtonImg(m.chat, krizyn, "=====『 TAG TERDETEKSI 』=====\n\nAda perlu apa panggil panggil bos saya, kangen yaa 🤪", '📮 Silahkan Pilih Button dibawah ini', 'Group', '.allgc', 'Menu', '.menu', 'Store', '.store', m)
                        
}
handler.customPrefix = /(@+62 853-3383-24402|@+6285338324402|@6285338324402|@085338324402)/i
handler.command = new RegExp

module.exports = handler

//let handler = async (m, { conn }) => {
   //let krizyn = `https://telegra.ph/file/d104b03750d12e9c101d9.jpg`
//let caption = `Ada perlu apa panggil panggil bos saya, kangen yaa 🤪`
 
//conn.send3But( m.chat, wiki, caption, `📮 Silahkan pilih Button dibawah ini`, `Menu`, `.menu`, `Sewa`, `.sewa`, `Group`, `.allgc`, m)
       //}
//handler.customPrefix = /@wiki|@wiki w|Wiki|Wiki W|iki|@Wiki|@Wiki W/i
//handler.command = new RegExp

//module.exports = handler\\
