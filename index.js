//╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
//│ *「 INFO BOT 」*
//│➛*Nama Bot* : DEVIL BOTZ
//│➛*Versi* : TermuxX
//│➛*Creator* : DEVIL BOTZ
//│➛*Youtube* : DEVIL BOTZ
//╰┬────────────┈ ⳹
//  │Thanks Semua Nya A I LOVE YOU
//  │JANGAN LUPA SENYUM HARI INI
//  │MARI KEMBANGKAN SC INI SAMA SAMA
//  │BELAJAR ITU MEMANG SULIT TAPI KALO SUNGGUH SUNGGUH PASTI BISA
//  │BIAR KALIAN DI MUDAHKAN REZEKI NYA AMIN
//  │ATAS DOA KALIAN ATAS SEMANGAT SERTA JUJUNGAN KALIAN GW BISA SEPERTI SEKARANG INI
//  │BERSABARLAH KARNA ORANG YANG SABAR AKAN ADA KEMUDAHAN NYA AMIN
//  │Hina Lah Dan Hujat Lah Karena Hinaan Kalian Tidak Akan Berarti bagi Kami
//  ╰─────────────┈ ⳹
//▰▱▰▱▰▱▰▱▰▱▰▰▱▰▱▰▱▰▰▱▰▱▰▱▰
//owner : DEVIL STORE

//NamaBot : DEVILBOTZ

//Version : Mode in TermuxX

//SC ORI : MHANKBARBAR        

//TQTQ : ALL CREATOR BOT             

//TQTO : YANG SUDAH MEMBUAT APIKEY NYA

//Chenel Youtube: DEVIL BOTZ

// JANGAN LUPA  LIKE AND SUBREK KARENA SUBREK DARI KALIAN ADALAH SEMANGATKU

// TAMPA KALIAN GW KAGA ADA ARTINYA OKE BRO

//DISINI KITA ENJOY AJAH JANGAN DI BAWA BAPER NANTI LAPER LAGI
//▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰
//SC ORI MHANKBARBAR
//GW CUMAN RECODE BANG JAN DI BULLY:')
//THANKS TO
//LOLHUMAN
//YogiPw 
//dappauhuy
//MHANKBARBAR lord Mastah
//RESTARTS  TEAM
//Lord Zuan
//DAN CREATOR BOT LAINYA
//▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

//JANGAN DI GANTI YANG ATAS DI GANTI GW ANC

//▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

//AYO DIKIT LAGI KAWAN SEMANGAT 


//BERHENTI MENGEJAR YANG TIDAK PASTI


//JANGAN SEDIH KALO LU TUKANG RECODE SEDIH LAH JIKA ELU SUKA MERENDAHKAN ORANG LAIN



//CUKUP TAU DAN CUKUP DIAM AJAH



// MEMANG DI LUAR SANA BANYAK ORANG ORANG HEBAT TAPI KITA AKAN NUNJUKIN BAHWA KITA JUGA BISA LEBIH HEBAT


//JIKA KALIAN SUKSES PASTI ADA AJAH COBAAN NYA BERARTI KALIAN ITU HEBAT DAN LUAR BIASA 


//JANGAN SEDIH MARI TERSENYUM BERSAMA KARENA SENYUMAN ITU ADALAH TANDA KE BAHAGIAAN
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { developer } = require('./lib/developer')
const { randompict } = require('./lib/randompict')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahraaa.ttf')
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./bahasa')
/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:DEVIL STORE\n' //ganti nama lu! 
            + 'ORG: Owner DEVILBOT;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6288215463787:+62 88215463787\n'  //ganti nomor lu! 
            + 'END:VCARD'

const vcard2 = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:ALDEN STORE\n' //ganti nama lu! 
            + 'ORG: Owner devilbotz;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=62895359893842:+62 895359893824\n'  //ganti nomor lu! 
            + 'END:VCARD'
            
const vcard3 = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:ADI STORE\n' //ganti nama lu! 
            + 'ORG: Owner devilbotz;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6285775632306:+62 85775632306\n'  //ganti nomor lu! 
            + 'END:VCARD'  
            
const vcard4 = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:NUGRAH STORE\n' //ganti nama lu! 
            + 'ORG: Owner devilbotz;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6281257160639:+62 81257160639\n'  //ganti nomor lu! 
            + 'END:VCARD'                      
prefix = '#'
blocked = []
limitawal = 10000000
memberlimit = 1
vr = '*私は静かな人です*'
ve = '*HALO KAK BAGI YANG BLOM TAU ITU OWNER DEVILBOTZ YANG ASLI*'
vo = '*STATUS SELF AKTIF*'
vu = '*BEBAN KELUARGA KE TAG*'
cr = '*LARI ADA WIBU*'
va = '*YAHAHAHAH KE TAG PARAH SIH*'
reply ='*POWORED BY DEVIL STORE*'
FRISLAH ='*Gila Kali Bah*'
/******** OWNER NUMBER**********/
const ownerNumber = ["6288215463787@s.whatsapp.net","62895359893842@s.whatsapp.net","6285775632306@s.whatsapp.net","6281257160639@s.whatsapp.net"]   //ganti nomor lu! 
const pacarNumber = ["6289520758266@s.whatsapp.net"]  //ganti nomor lu!  
/************************************/


/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/kelompok/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/kelompok/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/pengguna/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/pengguna.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const afk = JSON.parse(fs.readFileSync('./lib/afk.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/pengguna/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/pengguna/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/pengguna/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/pengguna/admin.json'))
const bad = JSON.parse(fs.readFileSync('./database/kelompok/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/kelompok/badword.json'))
/*********** END LOAD ***********/


/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
const Exif = require('./lib/exif')
const exif = new Exif()
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/
const client = new WAConnection()
client.version = [2, 2119, 6]
client.logger.level = 'warn'
console.log(banner.string)
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('(+)','white'), color('SUPORT','red'), color('(+)','white'), color(' SQAN CODENYA','aqua'), color('SUBREK YT DEVIL BOTZ','yellow'))
})

	client.on('credentials-updated', () => {
		fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'info!')
	})
	fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
	client.on('connecting', () => {
		start('2', color('[ ! ]Cepat Sqan','aqua'))
	})
	client.on('open', () => {
		success('2', color('[ ! ]Tersambung','red'))
	})
	client.connect({timeoutMs: 30*1000})


client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
teks = `Hai @${num.split('@')[0]}\n◪ Welcome in group:\n├─ ${mdata.subject}\n│\n├─ Intro dulu\n├─ ❏ Nama: \n├─ ❏ Umur: \n├─ ❏ Asal kota: \n├─ ❏ Kelas: \n├─ ❏ Jenis kelamin: \n└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}\nSemoga Betah yaa~~\n${mdata.desc}`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Beban Gc Mengurang 1\nSelamat Tinggal @${num.split('@')[0]} Jan Lupa Kalo Balik Lagi Bawa Martabak`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
            const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
            const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPacar = pacarNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
           const isUrl = (url) => {
           return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    client.sendMessage(from, audio, mp3, {quoted:mek})
		    }
        
        //role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
           
           var prema = 'Free'
			if (!isAdmin) {
				prema = 'Adminban'
			}
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
	}
			//funtion nobadword
			if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! 😠")
                        .then(() => client.groupRemove(from, sender))
                        .then(() => {
                            client.sendMessage(from, `*「 ANTI BADWORD 」*\nDEVIL-Bot akan kick kamu karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => client.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }
			//function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
           return false
       }
     }

    const getPremiumExpired = (sender) => {
		let position = null
		Object.keys(premium).forEach((i) => {
		if (premium[i].id === sender) {
		position = i 
	}
})
		if (position !== null) {
		return premium[position].expired 
	}
} 

const expiredCheck = () => {
		setInterval(() => {
		let position = null
		Object.keys(premium).forEach((i) => {
		if (Date.now() >= premium[i].expired) {
		position = i 
	}
})
		if (position !== null) {
		console.log(`Premium expired: ${premium[position].id}`)
		prem.splice(position, 1)
		fs.writeFileSync('./database/premium.json', JSON.stringify(prem)) 
		}
	}, 1000)
} 
		
		const getAllPremiumUser = () => {
		const array = []
		Object.keys(premium).forEach((i) => {
		array.push(premium[i].id)
	})
		return array 
	}
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 0)
	}
             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
            const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
            const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
             
              switch(command) {
///  MENU MAKER UPDATE BY DEVIL BOTZ
case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (args.length == 0) return reply(`Example: ${prefix + command} WahyuGanss`)
                    ini_txt = args.join(" ")
                  costum('TUNGGU BANG LAGI PROSES!!', text, tescuk, cr)
                  ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=WahyuBotV1&text=${ini_txt}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
case 'crosslogo':
                case 'flowertext':
                case 'silktext':
                case 'flametext':
                case 'glowtext':
                case 'skytext':
                case 'cslogo':
                case 'lithgtext':
                case 'crismes':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} yogi`)
                    txt = args.join(" ")
                    costum('SABAR BRO!!! ', text, tescuk, cr)
                    anu = await fetchJson(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`, {method: 'get'})
                    tod = await getBuffer(anu.result)
                    client.sendMessage(from, tod, image, {caption: 'Nih kak.. *Jangan lupa follow ig Wahyu.Youtube*', quoted: mek})
                  break
case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Wahyu Ganss`)
                    txt1 = args[0]
                    txt2 = args[1]
             costum('SABAR BRO!!! ', text, tescuk, cr)        
              ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=ohayou&text1=${txt1}&text2=${txt2}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} WahyuGanss`)
                    txt1 = args[0]
                    txt2 = args[1]
                  costum('SABAR BRO!!! ', text, tescuk, cr)
                   buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=ohayou&text1=${txt1}&text2=${txt2}`)
                    client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_DEVIL BOT_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
                    break
case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                 costum('SABAR BRO!!! ', text, tescuk, cr)
                  ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=ohayou`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
               costum('SABAR BRO!!! ', text, tescuk, cr)
               ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=ohayou`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                costum('SABAR BRO!!! ', text, tescuk, cr)
   ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=ohayou`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
 // FITUR HEWAN LUCU IMUT GEMES
 /// Fitur Tampa Apikey Gratis  Yo Bro
case 'fox':  
                   if (isBanned) return reply(ind.baned())
                    if (!isRegistered) return reply(ind.noregis())
			       await limitAdd(sender)	
                   costum('SABAR BRO!!! ', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'dog':  
                   if (isBanned) return reply(ind.baned())
                    if (!isRegistered) return reply(ind.noregis())
			       await limitAdd(sender)	
                   costum('SABAR BRO!!! ', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'cat':  
                   if (isBanned) return reply(ind.baned())
                    if (!isRegistered) return reply(ind.noregis())
			       await limitAdd(sender)	
                   costum('SABAR BRO!!! ', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'panda':  
                   if (isBanned) return reply(ind.baned())
                    if (!isRegistered) return reply(ind.noregis())
			       await limitAdd(sender)	
                   costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'panda1':  
                   if (isBanned) return reply(ind.baned())
                    if (!isRegistered) return reply(ind.noregis())
			       await limitAdd(sender)	
                   costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'bird':  
                   if (isBanned) return reply(ind.baned())
                    if (!isRegistered) return reply(ind.noregis())
			       await limitAdd(sender)	
                   costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'koala':  
                   if (isBanned) return reply(ind.baned())
                    if (!isRegistered) return reply(ind.noregis())
			       await limitAdd(sender)	
                   costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
// MENU JAWA AND SUNDA NIH BOS
// Fitur By Riu Cuman Comot Gw
case 'latinkejawa': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Makan`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/latinkejawa?text=${gatauda}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.message)
					break
case 'jawakelatin': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: ꦲꦭꦺꦴ`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/jawakelatin?text=${gatauda}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.message)
					break
		        case 'latinkesunda': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Makan`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/latinkesunda?text=${gatauda}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.message)
					break
			    case 'sundakelatin': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Awas ada sunda`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/sundakelatin?text=${gatauda}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.message)
					break
// MENU SOUND LAGU SEDIH DAN DJ
case 'home':
const home = fs.readFileSync('./mp3/home.mp3')
client .sendMessage(from, home, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'nengdesah':
const neng = fs.readFileSync('./mp3/desahan4.mp3')
client .sendMessage(from, neng, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'susu':
const su = fs.readFileSync('./mp3/susu.mp3')
client .sendMessage(from, su, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beb':
const beb = fs.readFileSync('./mp3/syg.mp3')
client .sendMessage(from, beb, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'gettingold':
const getting = fs.readFileSync('./mp3/gettingold.mp3')
client.sendMessage(from, getting, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad':
const sad1 = fs.readFileSync('./mp3/sad.mp3')
client .sendMessage(from, sad1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad2':
const sad2 = fs.readFileSync('./mp3/sad2.mp3')
client .sendMessage(from, sad2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad3':
const sad3 = fs.readFileSync('./mp3/sad3.mp3')
client .sendMessage(from, sad3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
const sad4 = fs.readFileSync('./mp3/sad4.mp3')
client .sendMessage(from, sad4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic':
const tetik = fs.readFileSync('./mp3/aeshtetic.mp3')
client .sendMessage(from, tetik, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic2':
const tetik2 = fs.readFileSync('./mp3/aeshtetic2.mp3')
client .sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic3':
const tetik3 = fs.readFileSync('./mp3/aeshtetic3.mp3')
client .sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic4':
const tetik4 = fs.readFileSync('./mp3/aeshtetic4.mp3')
client .sendMessage(from, tetik4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'allnight':
const allnight = fs.readFileSync('./mp3/allnight.mp3')
client .sendMessage(from, allnight, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'lucas':
const lucas = fs.readFileSync('./mp3/lucas.mp3')
client .sendMessage(from, lucas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sowell':
const well = fs.readFileSync('./mp3/sowell.mp3')
client .sendMessage(from, well, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'wanna':
const wanna = fs.readFileSync('./mp3/wanna.mp3')
client .sendMessage(from, wanna, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'up':
const ups = fs.readFileSync('./mp3/up.mp3')
client .sendMessage(from, ups, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yourskin':
const skin = fs.readFileSync('./mp3/yourskin.mp3')
client .sendMessage(from, skin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'cutmeoff':
const moff = fs.readFileSync('./mp3/cutmeoff.mp3')
client .sendMessage(from, moff, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beautiful':
const ful = fs.readFileSync('./mp3/beautiful.mp3')
client .sendMessage(from, ful, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinggame':
const gam = fs.readFileSync('./mp3/loosinggame.mp3')
client .sendMessage(from, gam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinginterest':
const rest = fs.readFileSync('./mp3/loosinginterest.mp3')
client .sendMessage(from, rest, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'playdate':
const date = fs.readFileSync('./mp3/playdate.mp3')
client .sendMessage(from, date, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yasin':
yasin = fs.readFileSync('mp3/yasin.mp3')
client.sendMessage(from, yasin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'arrahman':
arrahman = fs.readFileSync('mp3/arrahman.mp3')
client.sendMessage(from, arrahman, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
const kursi = fs.readFileSync('./mp3/ayatkursi2.mp3')
client.sendMessage(from, kursi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
const tilawah = fs.readFileSync('./mp3/tilawah.mp3')
client.sendMessage(from, tilawah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawatnabi':
const nabi = fs.readFileSync('./mp3/sholawatnabi.mp3')
client.sendMessage(from, nabi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('./mp3/ngaji.mp3')
client.sendMessage(from, ngaji1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('./mp3/ngaji2.mp3')
client.sendMessage(from, ngaji2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./mp3/iri.mp3');
client.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('./mp3/pale.mp3')
client.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'hallo':
const hallo = fs.readFileSync('./mp3/hallo.mp3')
client.sendMessage(from, hallo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'magic':
const magic = fs.readFileSync('mp3/magic.mp3')
client.sendMessage(from, magic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'menyukaiku':
const menyukaiku = fs.readFileSync('mp3/menyukaiku.mp3')
client.sendMessage(from, menyukaiku, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('./mp3/sound.mp3')
client.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./mp3/sound1.mp3');
client.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./mp3/sound2.mp3');
client.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./mp3/sound3.mp3');
client.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./mp3/sound4.mp3');
client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./mp3/sound5.mp3');
client.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./mp3/sound6.mp3');
client.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./mp3/sound7.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break									
case 'sound8':
delapan = fs.readFileSync('./mp3/sound8.mp3');
client.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./mp3/sound9.mp3');
client.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./mp3/sound10.mp3');
client.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('./mp3/sound11.mp3');
client.sendMessage(from, sebelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('./mp3/sound12.mp3');
client.sendMessage(from, duabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
tigabelas = fs.readFileSync('./mp3/sound13.mp3');
client.sendMessage(from, tigabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
empatbelas = fs.readFileSync('./mp3/sound14.mp3');
client.sendMessage(from, empatbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
limabelas = fs.readFileSync('./mp3/sound15.mp3');
client.sendMessage(from, limabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
enambelas = fs.readFileSync('./mp3/sound16.mp3');
client.sendMessage(from, enambelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
tujuhbelas = fs.readFileSync('./mp3/sound17.mp3');
client.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound118':
delapanbelas = fs.readFileSync('./mp3/sound18.mp3');
client.sendMessage(from, delapanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
sembilanbelas = fs.readFileSync('./mp3/sound19.mp3');
client.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duapuluh = fs.readFileSync('./mp3/sound20.mp3');
client.sendMessage(from, duapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
duasatu = fs.readFileSync('./mp3/sound21.mp3');
client.sendMessage(from, duasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duadua = fs.readFileSync('./mp3/sound22.mp3');
client.sendMessage(from, duadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duatiga = fs.readFileSync('./mp3/sound23.mp3');
client.sendMessage(from, duatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
duaempat = fs.readFileSync('./mp3/sound24.mp3');
client.sendMessage(from, duaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dualima = fs.readFileSync('./mp3/sound25.mp3');
client.sendMessage(from, dualima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
duaenam = fs.readFileSync('./mp3/sound26.mp3');
client.sendMessage(from, duaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
duatujuh = fs.readFileSync('./mp3/sound27.mp3');
client.sendMessage(from, duatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
duadelapan = fs.readFileSync('./mp3/sound28.mp3');
client.sendMessage(from, duadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
duasembilan = fs.readFileSync('./mp3/sound29.mp3');
client.sendMessage(from, duasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
tigapuluh = fs.readFileSync('./mp3/sound30.mp3');
client.sendMessage(from, tigapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
tigasatu = fs.readFileSync('./mp3/sound31.mp3');
client.sendMessage(from, tigasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound32':
tigadua = fs.readFileSync('./mp3/sound32.mp3');
client.sendMessage(from, tigadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound33':
tigatiga = fs.readFileSync('./mp3/sound33.mp3');
client.sendMessage(from, tigatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound34':
tigaempat = fs.readFileSync('./mp3/sound34.mp3');
client.sendMessage(from, tigaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
client.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
client.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound36':
tigaenam = fs.readFileSync('./mp3/sound36.mp3');
client.sendMessage(from, tigaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound37':
tigatujuh = fs.readFileSync('./mp3/sound37.mp3');
client.sendMessage(from, tigatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound38':
tigadelapan = fs.readFileSync('./mp3/sound38.mp3');
client.sendMessage(from, tigadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound39':
tigasembilan = fs.readFileSync('./mp3/sound39.mp3');
client.sendMessage(from, tigasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound40':
empatpuluh = fs.readFileSync('./mp3/sound40.mp3');
client.sendMessage(from, empatpuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound41':
empatsatu = fs.readFileSync('./mp3/sound41.mp3');
client.sendMessage(from, empatsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound42':
empatdua = fs.readFileSync('./mp3/sound42.mp3');
client.sendMessage(from, empatdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound43':
empattiga = fs.readFileSync('./mp3/sound43.mp3');
client.sendMessage(from, empattiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound44':
empatempat = fs.readFileSync('./mp3/sound44.mp3');
client.sendMessage(from, empatempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound45':
empatlima = fs.readFileSync('./mp3/sound45.mp3');
client.sendMessage(from, empatlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound46':
empatenam = fs.readFileSync('./mp3/sound46.mp3');
client.sendMessage(from, empatenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound47':
empattujuh = fs.readFileSync('./mp3/sound47.mp3');
client.sendMessage(from, empattujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound48':
empatdelapan = fs.readFileSync('./mp3/sound48.mp3');
client.sendMessage(from, empatdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound49':
empatsembilan = fs.readFileSync('./mp3/sound49.mp3');
client.sendMessage(from, empatsembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound50':
limapuluh = fs.readFileSync('./mp3/sound50.mp3');
client.sendMessage(from, limapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound51':
limasatu = fs.readFileSync('./mp3/Kecewa.mp3');
client.sendMessage(from, limasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound52':
limadua = fs.readFileSync('./mp3/Jarak.mp3');
client.sendMessage(from, limadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound53':
limatiga = fs.readFileSync('./mp3/Bisa.mp3');
client.sendMessage(from, limatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound54':
limaempat = fs.readFileSync('./mp3/Disini.mp3');
client.sendMessage(from, limaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound55':
limalima = fs.readFileSync('./mp3/Batu.mp3');
client.sendMessage(from, limalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'desah':
delapansatu = fs.readFileSync('./mp3/desah.mp3');
client.sendMessage(from, delapansatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound56':
limaenam = fs.readFileSync('./mp3/Adanya.mp3');
client.sendMessage(from, limaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound57':
limatujuh = fs.readFileSync('./mp3/Pelangi.mp3');
client.sendMessage(from, limatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound58':
limadelapan = fs.readFileSync('./mp3/sound58.mp3');
client.sendMessage(from, limadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound59':
limasembilan = fs.readFileSync('./mp3/sound59.mp3');
client.sendMessage(from, limasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound60':
enampuluh = fs.readFileSync('./mp3/sound60.mp3');
client.sendMessage(from, enampuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound61':
enamsatu = fs.readFileSync('./mp3/sound61.mp3');
client.sendMessage(from, enamsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound62':
enamdua = fs.readFileSync('./mp3/sound62.mp3');
client.sendMessage(from, enamdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound63':
enamtiga = fs.readFileSync('./mp3/sound63.mp3');
client.sendMessage(from, enamtiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound64':
enamempat = fs.readFileSync('./mp3/sound64.mp3');
client.sendMessage(from, enamempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound65':
enamlima = fs.readFileSync('./mp3/chruch.mp3');
client.sendMessage(from, enamlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound66':
enamenam = fs.readFileSync('./mp3/gemes.mp3');
client.sendMessage(from, enamenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound67':
enamtujuh = fs.readFileSync('./mp3/hujan.mp3');
client.sendMessage(from, enamtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound68':
enamdelapan = fs.readFileSync('./mp3/Masih.mp3');
client.sendMessage(from, enamdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sasageyo':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
lima = fs.readFileSync('./mp3/Sasageyo.mp3');
client.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'ganteng':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
lapan = fs.readFileSync('./mp3/ganteng.mp3');
client.sendMessage(from, lapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'gatal':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
bilan = fs.readFileSync('./mp3/gatal.mp3');
client.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'cemen':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
puluh = fs.readFileSync('./mp3/alay.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break		     
// MENU REPLAY AUDIO ATAU VN ORANG
// UPDATE BY DEVIK BOTZ
//GEMES MEGUBAH SUARA JADI IMUT
case 'gemes':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						riu = fs.readFileSync(ran)
					client.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
//Tempo Mengubah Suara Lebih Dering
case 'tempo':           
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:99999999999})
						fs.unlinkSync(ran)
					})
				break
//nightcore Mengubah Suara Jadi Nada Rendah
case 'nightcore':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
						fs.unlinkSync(ran)
					   })
				       break
//fast Mengubah Suara Bernada Sedeng
case 'fast':
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			     media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break
//tupai Mengubah Suara Jadi  Lucu Lucu Gimana 
case 'tupai':
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
//Gemuk Bersuara Besar Dan Dengung
case 'gemok':
				costum('SABAR BRO!!! ', text, tescuk, cr)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
//bass Bernada Besar Dan Getar
case 'bass':                 
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
//ghost  Bernada Serem Dan Menakutkan
case 'ghost':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
                    fs.unlinkSync(ran)
				    })
		            break
// JANGAN LUPA LIKE AND COMENT
case 'kontak':
                        tahu = args[0]
                        names = args[1]
                        if (isNaN(tahu)) return reply('Invalid phone number'.toUpperCase());
                        vcard = 'BEGIN:VCARD\n'
                                  + 'VERSION:3.0\n'
                                  + `FN:${names}\n`
                                  + `TEL;type=CELL;type=VOICE;waid=${tahu}:${phoneNum('+' + tahu).getNumber('internasional')}\n`
                                  + 'END:VCARD'.trim()
                            client.sendMessage(from, {displayName: names, vcard: vcard}, contact)
                            break
//Case Kontag Bisa  Semua Orang cuman Di Grup
case 'kontag':
           costum('NJIR KENA TAG KAGA TUH', text, tescuk, va)
           var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await client.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG:Bot Wahyu Keren Dong;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${client.user.jid.split('@')[0]}:${client.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				client.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: mek })
				        break
// APA NAMA NIJA MU KAWAN
case 'namaninja': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Akira`)
					costum('SABAR BRO!!! ', text, tescuk, cr)
                    gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ninja?apikey=ohayou&nama=${gatauda}`)
					reply(anu.result)
					break
// TEBAKAN MENU KEREN DEH
case 'tebakbendera':
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=ohayou`, {method: 'get'})
					tebakbender = `*bendera apa ini?*n${anu.result.flag}`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.name, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, tebakbender, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break
case 'tebakgambar':
					if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=ohayou`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.image)
					setTimeout( () => {
					client.sendMessage(from, '*âž¸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagiâ€¦_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_â€¦', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_â€¦', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break  
case 'family100':
          if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				data = fs.readFileSync('./src/family100.js');
                fami = JSON.parse(data);
				ly100 = Math.floor(Math.random() * fami.length);
				randKey = fami[ly100];
				Pertanyaan = randKey.result.soal
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_Waktu Anda Habis_')
					}, 29000)
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
case 'caklontong':
          if (!isRegistered) return reply( ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
				data = fs.readFileSync('./src/caklontong.js');
				cak = JSON.parse(data);
				lontong = Math.floor(Math.random() * cak.length);
				randKey = cak[lontong];
				Pertanyaan = randKey.result.soal
				Jawaban = '\n*'+randKey.result.desc +'*'
					setTimeout( () => {
					client.sendMessage(from, Jawaban, text, {quoted: mek})
					}, 30000)
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s
					client.sendMessage(from, Pertanyaan, text, {quoted: mek})
					await limitAdd(sender) 
				   break
// Menu APIKEY XTeam Ya Bro
//INSYAALLAH  KALO GW ADA APIKEY GW KASIH
case 'suit':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`contoh ${prefix + command} gunting`)
				data = await fetchJson(`https://api.xteam.xyz/game/suit?q=${body.slice(6)}&APIKEY=7415bc4287ad5ca8`)
					if (data.result) return reply(data.result)
					hasil = `Punyamu : *${data.jawabanmu}*\nDEVIL BOTZ : *${data.jawabanbot}*\nHasil : *${data.hasil}*\nPoin : ${data.poin}`
					reply(hasil)
					await limitAdd(sender)
					break
case 'video1':  
                    if (isBanned) return reply(ind.baned())
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/poly?text=${F}&APIKEY=c81b3345e477a0c7`)
                    client.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: mek}) 
                    break
                    case 'video2':  
                    if (isBanned) return reply(ind.baned())
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/bold?text=${F}&APIKEY=7415bc4287ad5ca8`)
                    client.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: mek}) 
                    break
                    case 'video3':  
                    if (isBanned) return reply(ind.baned())
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/glowing?text=${F}&APIKEY=7415bc4287ad5ca8`)
                    client.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: mek}) 
                    break
                    case 'video4':  
                    if (isBanned) return reply(ind.baned())
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/colorful?text=${F}&APIKEY=7415bc4287ad5ca8`)
                    client.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: mek}) 
                    break
                    case 'video5':  
                    if (isBanned) return reply(ind.baned())
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/army?text=${F}&APIKEY=7415bc4287ad5ca8`)
                    client.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: mek}) 
                    break
                    case 'video6':  
                    if (isBanned) return reply(ind.baned())
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/retro?text=${F}&APIKEY=7415bc4287ad5ca8`)
                    client.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: mek}) 
                    break 
case 'tebakangka':  
                    if (isBanned) return reply(ind.baned())
                    F = body.slice(12)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 9`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakangka?q=${F}&APIKEY=7415bc4287ad5ca8`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
// MENU APIKEY VHTEAR YA BRO
//INSYAALLAH  KALO GW ADA APIKEY GW KASIH
case 'hartatata3':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(12)
				costum('SABAR BRO!!! ', text, tescuk, cr)
				bh = await getBuffer(`https://api.vhtear.com/hartatahta?text=${bh}&apikey=beli apikey biar work`)
				client.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
case 'text2gif':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(10)
				costum('SABAR BRO!!! ', text, tescuk, cr)
				bh = await getBuffer(`https://api.vhtear.com/textxgif?text=${bh}&apikey=beli apikey biar work`)
				client.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
case 'logoepep': 
				gatauda = body.slice(9)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Maxim&text=${gatauda}&apikey=RanddyGanz`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep2': 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alok&text=${gatauda}&apikey=beli apikey Biar Work`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep3': 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alvaro&text=${gatauda}&apikey=beli apikey biar work`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep4': 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Caroline&text=${gatauda}&apikey=beli apikey biar work`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep5': 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Kla&text=${gatauda}&apikey=beli apikey biar work`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'gamelogo': 
				gatauda = body.slice(9)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				buffer = await getBuffer(`https://api.vhtear.com/gamelogo?text=${gatauda}&apikey=beli apikey biar work`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'pornlogo': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
			   var gh = body.slice(10)
			  var gbl7 = gh.split("/")[0];
			 var gbl8 = gh.split("/")[1];
				if (args.length < 1) return reply('Teksnya mana um')
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				buffer = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${gbl7}&text2=${gbl8}&apikey=beli apikey biar work`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
//MENU APIKEU leyscoders
//INSYAALLAH  KALO GW ADA APIKEY GW KASIH
case 'honey':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}honey DEVIL BOTZ`)
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				ct = body.slice(6)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/honey?q=${ct}&apikey=OneDayOneCharity`)
				dapuhy = await getBuffer(anu.result.url)
				client.sendMessage(from, dapuhy, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*SELF DEVIL BOT*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/LogooBott.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					break 
case 'whitecube':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}whitecube DEVIL BOTZ`)
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				ct = body.slice(10)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/white-cube?q=${ct}&apikey=`)
				dapuhy = await getBuffer(anu.result.url)
				client.sendMessage(from, dapuhy, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*SELF DEVIL BOT*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/LogooBott.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					break 
				case 'nightsky':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}nightsky DEVIL BOTZ`)
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				ct = body.slice(9)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/night-sky?q=${ct}&apikey=`)
				dapuhy = await getBuffer(anu.result.url)
				client.sendMessage(from, dapuhy, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*SELF DEVIL BOT*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/LogooBott.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					break 
				case 'gradient':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}gradient DEVIL BOTZ`)
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				ct = body.slice(9)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/gradient?q=${ct}&apikey=`)
				dapuhy = await getBuffer(anu.result.url)
				client.sendMessage(from, dapuhy, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*SELF DEVIL BOT*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/LogooBott.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					break 
				case 'goldtext':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}goldtext DEVIL BOTZ`)
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				ct = body.slice(9)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/gold-text?q=${ct}&apikey=`)
				dapuhy = await getBuffer(anu.result.url)
				client.sendMessage(from, dapuhy, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*SELF DEVIL BOT*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/LogooBott.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					break 
				case 'woodenboard':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}woodenboard DEVIL BOTZ`)
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				ct = body.slice(12)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/wooden-board?q=${ct}&apikey=`)
				dapuhy = await getBuffer(anu.result.url)
				client.sendMessage(from, dapuhy, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*SELF DEVIL BOT*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/LogooBott.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					break 
				case 'csgo':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}csgo DEVIL BOTZ`)
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				ct = body.slice(5)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/csgo?q=${ct}&apikey=dappauhuy`)
				dapuhy = await getBuffer(anu.result.url)
				client.sendMessage(from, dapuhy, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*SELF DEVIL BOT*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/LogooBott.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					break 
//HERO ML YO
case 'heroml':
		            if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                     hero = args[0]
                   costum('SABAR LAGI PROSES!!!', text, tescuk, cr)              
                   get_result = await fetchJson(`http://api.lolhuman.xyz/api/heroml/${hero}?apikey=ohayou`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    client.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
                    break
//MENU TRANSLET SUPAYA PINTER
case 'translate':
		            if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=ohayou&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
//MENCARI JUDUL LAGU NYA APA
case 'lirik':
		          if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=ohayou&query=${query}`)
                    reply(get_result.result)
                    break
//Menu Biaya siswa Bisa di Lihat
case 'indbeasiswa':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/indbeasiswa?apikey=ohayou`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
 //inikan Yang Kalian Tunngu Tunggu
 //ASUPAN TAMPA APIKEY YO
case 'asupan':
				client.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				 data = fs.readFileSync('./lib/asupan.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 asupan = await getBuffer(randKey.result)
                 client.sendMessage(from, asupan, video, {quoted: mek, caption: '\`\`\`ASUPAN GAN:V\`\`\`'})
				await limitAdd(sender) 
				break
case 'asupan1':
				client.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				 costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
                 data = fs.readFileSync('./src/asupan.js');
		                 jsonData = JSON.parse(data);
                		 randIndex = Math.floor(Math.random() * jsonData.length);
		                 randKey = jsonData[randIndex];
		                buffer = await getBuffer(randKey.result)
		                client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				break
//MENU BOT PANTUN BUCIN AND GOMBAL
case 'quotesimage':
                case 'faktaunik':
                case 'katabijak':
                case 'bucin':
                costum('SABAR LAGI PROSES!!!', text, tescuk, cr)              
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=ohayou`)
                    reply(get_result.result)
                    break
case 'dilan':
case 'islami':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
                    quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/${command}?apikey=ohayou`)
                    reply(quotedilan.result)
                    break
//NOTE CASE PUNYA DAPPAUHUY
case 'katakatabijak':
                //[❗] case by DappaGanz
				if (!isRegistered) return reply(ind.noregis())
				reply(wait) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/katabijak?apikey=ohayou`) 
				jam = `「 KATA KATA BIJAK 」 :\n\n${anu.result}`
				client.sendMessage(from, jam, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'randompantun':
                //[❗] case by DappaGanz
				if (!isRegistered) return reply(ind.noregis())
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/pantun?apikey=ohayou`) 
				jam = `「 RANDOM PANTUN 」 :\n\n${anu.result}`
				client.sendMessage(from, jam, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'randombucin':
                //[❗] case by DappaGanz
				if (!isRegistered) return reply(ind.noregis())
				lcostum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/bucin?apikey=ohayou`) 
				jam = `「 RANDOM BUCIN 」 :\n\n${anu.result}`
				client.sendMessage(from, jam, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'katakatabucin':
                //[❗] case by DappaGanz
				if (!isRegistered) return reply(ind.noregis())
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/katabucin?apikey=ohayou`) 
				jam = `「 KATA KATA BUCIN 」 :\n\n${anu.result}`
				client.sendMessage(from, jam, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'randomnama':
                //[❗] case by DEVIL BOTZ
				if (!isRegistered) return reply(ind.noregis())
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=ohayou`) 
				jam = `「 NAMA 」 :\n\n${anu.result}`
				client.sendMessage(from, jam, text, {quoted: mek})
				await limitAdd(sender)
				break
/// MENU BERMAIN KALIAN
case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
                   case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
                   case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
               	   case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	   if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			       await limitAdd(sender)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
case 'kapankah':
					// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'apakah':
					// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
		//menu anime keren
case 'naruto': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
                    case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
                    case 'madara': case 'obito': case 'obito': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':                     
                    case 'gon': case 'killua': case 'sagiri': case 'rimuru': case 'natsu': case 'genos': case 'saitama': case 'miku':  
                    client.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=karakter anime ${command} hd`, {method: 'get'})
				    costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    client.sendMessage(from, pok, image, { quoted: mek})
				    break
case 'bagaimanakah':
					// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'rate':
					// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'sangecek':
					// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					client.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'gaycek':
					// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					client.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'lesbicek':
					// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					client.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'gantengcek':
					// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
case 'ewe':
          if (!isRegistered) return reply( ind.noregis())
           ganteng = body.slice(5)
					const ew =['TOBAT KAWAN, INGAT, JANGAN MERUSAK GENERASI GENERASI BANGSA YANG BUKAN JODOH ANDA, KASIHAN YANG JODOH DIA, EHH DAH DI REVIEW AMA ORANG LAIN']
					const we = ew[Math.floor(Math.random() * ew.length)]
					client.sendMessage(from, ''+ganteng+''+ we +'', text, { quoted: mek })
					break
case 'seberapagay':
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
		   teks = body.slice(1)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${teks}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
		   await limitAdd(sender)
		   break
case 'cantikcek':
					// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					client.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'watak':
					// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
				        break
case 'hobby':
					// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
case 'freefire':
                       if (!isRegistered) return reply( ind.noregis())
				  if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} WahyuGanss`)
                    txt = args.join(" ")
                    costum('SEDANG PROSES Subscribe DEVIL BOTZ', text, tescuk, cr)
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=Beli Apikey Biar Work&text=${txt}`)
                    client.sendMessage(from, buffer, image, {caption: 'Nih Dah Jadi', quoted: mek})
                    break
case 'komunis':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  costum('SEDANG PROSES Subscribe DEVIL BOTZ', text, tescuk, cr)
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://zekais-api.herokuapp.com/comunism?url=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
case 'deletepc':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  costum('SEDANG PROSES Subscribe DEVIL BOTZ', text, tescuk, cr)
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://zekais-api.herokuapp.com/delete?url=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
case 'timer':
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break
case 'elang':
		if (!isRegistered) return reply(ind.noregis())
                   costum('SEDANG PROSES Subscribe DEVIL BOTZ', text, tescuk, cr)           
                    query = args.join("elang")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=Beli Apikey Biar Work&query=elang`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
case 'buaya':
		           if (!isRegistered) return reply(ind.noregis())
                   costum('SEDANG PROSES Subscribe DEVIL BOTZ', text, tescuk, cr)        
                    query = args.join("buaya")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=Beli Apikey Biar Work&query=buaya`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                   client.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break 
case 'fakedonald':
                    if (args.length == 0) return reply(`Example: ${prefix + command} WahyuGanss`)
                    ini_txt = args.join(" ")
                    costum('SEDANG PROSES Subscribe DEVIL BOTZ', text, tescuk, cr)           
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=Beli Apikey biar Work&text=${ini_txt}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
case 'tololserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti WahyuGanssツNGAB`)
				ct = body.slice(12)
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=Beli Apikey Biar Work&name=${ct}`)
				client.sendMessage(from, zhain, image, { quoted: mek, caption: 'Nih Dah Jadi' })
				break
case 'translate':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=Beli Apikey Biar Work&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
case 'indbeasiswa':
		            if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/indbeasiswa?apikey=Beli Apikey Biar Work`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'uniform':
					case 'jahy':
					case 'sfwneko':
					case 'cuckold':
					case 'wpnsfwmobile':
					case 'zettairyouiki':
					case 'wpmobile':
					if (!isRegistered) return reply(ind.noregis())
                     if (!isGroup) return reply(ind.groupo())
					qute6 = await getBuffer(`https://api.xteam.xyz/randomimage/${command}?APIKEY=7415bc4287ad5ca8`)
					client.sendMessage(from, qute6, image, { quoted: mek, caption: ':)' })
					break
case 'randomasupan':
				client.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
                   if (!isGroup) return reply(ind.groupo())
					costum('SEDANG PROSES Subscribe DEVIL BOTZ', text, tescuk, cr)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=Beli Apikey Biar Work`)
                    buffer = await getBuffer(get_result.result)
                    client.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
case 'zippyshare':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/zippyshare?apikey=Beli Apikey Biar Work&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
case 'githubstalk':
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=Beli Apikey Biar Work`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.avatar)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
/// FITUR KHUSUS  GRUPN DOANG
case 'nobadword':  // Fix Bug By WahyuYoutube*
                    if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('1 untuk menyalakan, 0 untuk mematikan')
                if (args[0] === '1') {
                if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                  	   reply(`Fitur Badword Enable!`)
              	  } else if (args[0] === '0') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                 	    reply(`Fitur Badword Disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
case 'addbadword':  // Fix Bug By WahyuYoutube*
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                    case 'delbadword':  // Fix Bug By WahyuYoutube*
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                    case 'listbadword':  // Fix Bug By WahyuYoutube*
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                   await reply(lbw)
                    break 
                    case 'getsticker':
				case 'gets':  // Fix Bug By WahyuYoutube
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					break
					case 'stickerlist':
				case 'liststicker':  // Fix Bug By WahyuYoutube
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					case 'addstickeer':  // Fix Bug By WahyuYoutube*
					svst = body.slice(12)
					if (!svst) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/Sticker/${svst}.webp`, delb)
					fs.writeFileSync('./strg/stik.json', JSON.stringify(setiker))
					client.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
				case 'addstik':
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await client.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./strg/stick/${svst}.webp`, delb)
				fs.writeFileSync('./strg/stik.json', JSON.stringify(setiker))
				client.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}stickerlist`, MessageType.text, { quoted: mek })
				break
                case 'addvn':  // Fix Bug By WahyuYoutube
                    svst = body.slice(7)
					if (!svst) return reply('Nama audionya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
					case 'getvn':  // Fix Bug WahyuYoutube*
					 if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
                    namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true})
					break
					case 'listvn':
				case 'vnlist':  // Fix Bug By WahyuYoutube
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
				case 'addimage':  // Fix Bug By WahyuYoutube
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
				case 'getimage':  // Fix Bug By WahyuYoutube
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
				case 'imagelist':
				case 'listimage':  // Fix Bug By WahyuYoutube
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo':  // Fix Bug By WahyuYoutube
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
					break
				case 'getvideo':  // Fix Bug By WahyuYoutube
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'listvideo':
				case 'videolist':  // Fix Bug By WahyuYoutube
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break
					case 'mutual':// Fix Bug By WahyuYoutube
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'next':// Fix Case By Wahyu/ADI⛔
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
case 'transfer':
				// Fix Case By Wahyu/ADI⛔
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!q.includes('|')) return  reply(ind.wrongf())
                		const tujuan = q.substring(0, q.indexOf('|') - 1)
                		const jumblah = q.substring(q.lastIndexOf('|') + 1)
                		if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                		if (jumblah < 5000 ) return reply(`minimal transfer 5000`)
                		if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                		const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                		fee = 0.010 *  jumblah
                		hasiltf = jumblah - fee
                		addKoinUser(tujuantf, hasiltf)
                		confirmATM(sender, jumblah)
                		addKoinUser('6285697662826@s.whatsapp.net', fee)
                		reply(`*「 SUKSES 」*\n\nPengiriman uang telah sukses\nDari : +${sender.split("@")[0]}\nKe : +${tujuan}\njJumlah transfer : ${jumblah}\nPajak : ${fee}`)
                		break
                case 'admin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(7)
				adm.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${admm} `)
				break
                case 'unadmin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(9)
				admin.push(`${adm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${adm} `)
				break
                case 'wakillist':
				client.updatePresence(from, Presence.composing) 
				// Fix Case By Wahyu/ADI⛔
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(7)
				adm.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${admm} `)
				break
				case 'premium':
				if (!isOwner) return reply(ind.ownerb())
				premm = body.slice(9)
				prem.push(`${premm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				reply(`Berhasil menjadi premium wa.me/${premm} `)
				break
		case 'unpremium':
				if (!isOwner) return reply(ind.ownerb())
				premm = body.slice(11)
				prem.splice(`${premm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
				break
                case 'premiuumlist':
				client.updatePresence(from, Presence.composing) 
				// Fix Bug By WahyuYoutube
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": prem}})
				break
                case 'bann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unbann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'ban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'banlist':
				client.updatePresence(from, Presence.composing) 
				// Fix Bug By WahyuYoutube
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				break
		case 'leaderboard':
		case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
					leaderboarduang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal 10 user untuk bisa mengakses database`)
				}
				break
		case 'kalkulator':
				// Fix Bug By WahyuYoutube
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break
		case 'dompet':
				// Fix Bug By WahyuYoutube
 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
		case 'buylimit':
				// Fix Bug By WahyuYoutube
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(10)
				const koinPerlimit = 2000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Admin\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'buypremiumlimit':
				// Fix Bug By WahyuYoutube
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(17)
				const koinpremPerlimit = 500
				const totalprem = koinpremPerlimit * payout
				if ( checkATMuser(sender) <= totalprem) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= totalprem ) {
					confirmATM(sender, totalprem)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Wahyu\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinpremPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'giftlimit': 
				// Fix Bug By WahyuYoutube
                 if (!isRegistered) return reply( ind.noregis())
				if (!isOwner) return reply('*Only Adminban & Owner Kami!*')
				const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                		if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                		if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6283152753417 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(_limit).forEach((i) => {
                            			if(_limit[i].id === cysz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                            	_limit[found].limit -= jmla
                            	const updated = _limit[found]
                            	const result = `Gift kuota limit sukses dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
							*「 GIFT KUOTA LIMIT 」*
							• User : @${updated.id.replace('@s.whatsapp.net','')}
							• Limit: ${limitawal-updated.limit}`
                            	console.log(_limit[found])
                            	fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit));
                            	reply(result)
                        	} else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        	}
               			break
case 'limit':
				// Fix Bug By WahyuYoutube
                 if (!isRegistered) return reply( ind.noregis())
				checkLimit(sender)
				break
case 'setreplyy':
				if (!isAdmin) return reply('*Only Admin bot*')
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'mining':
					// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 1000000000000000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
case 'kodenegara':
					// Fix Case By WAHYU/ADI⛔
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.sendMessage(from, negara(), text)
					await limitAdd(sender)
					break
					case 'del':
		case 'd':
		case 'delete':
					// Fix Case By WAHYU/ADI⛔
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
		case 'level':
					// Fix Case By Wahyu/ADI⛔
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isLevelingOn) return reply(ind.lvlnoon())
					if (!isGroup) return reply(ind.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *LEVEL*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  ├─ ❏ *User XP* : ${userXp}/${requiredXp}\n  └─ ❏ *User Level* : ${userLevel}\n`
					client.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
case 'bcgc':
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers 
					tagss = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
case 'meme':
				  case 'memeindo':
				client.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./src/meme.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 memeall = await getBuffer(randKey.result)
                 client.sendMessage(from, memeall, image, {quoted: mek, caption: '*YT = DEVIL BOTZ*'})
				break
				  case 'sao':
				client.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./src/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 client.sendMessage(from, swordartonline, image, {quoted: mek, caption: 'swort art online\nDEVIL BOTZ'})
				break
				  case 'hsdxd':
				client.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./src/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 client.sendMessage(from, highschooldxd, image, {quoted: mek, caption: '*DEVIL BOTZ*'})
				break
				  case 'lovelive':
				client.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./src/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 client.sendMessage(from, lovelive, image, {quoted: mek, caption: '*DEVIL BOTZ*'})
				break
// Note jangan Salah Gunain
case 'buggc':
if (!isOwner) return reply(ind.ownerb())
if (!isOwner) return reply(ind.ownerb())
await client.toggleDisappearingMessages(from)
reply("yahaha")
break
// Fitur Join Grup Whatsapp
case 'join':
setTimeout( () => {
client.query({json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]})
suksez = `Sukses Gabung Ke Grup!`
client.sendMessage(from, suksez, text,{quoted : mek, contextInfo: { forwardingScore: 100, isForwarded: true}})
}, 20000) // 1000 = 1s,
setTimeout( () => {
reply('Bagus Sekali epribadih')
}, 0) // 1000 = 1s,
break
//Sertifikat  Kemenangan Dan  Kegagalan
case 'fuckboy':
				case 'fuckgirl':
				case 'bucinserti':
				case 'pacarserti':
				case 'goodboy':
				case 'goodgirl':
				case 'badboy':
				case 'badgirl':
				query = args.join(" ")
				cap = `Nama: ${query}`
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
riu = await getBuffer(`http://lolhuman.herokuapp.com/api/${command}?apikey=ohayou&name=${query}`)
				client.sendMessage(from, riu, image, {quoted: mek, contextInfo: { forwardingScore: 1, isForwarded: true}, caption: cap})
				break
case 'spotify':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=ohayou&url=${url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Artists : ${get_result.artists}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Popularity : ${get_result.popularity}\n`
                    txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'spotifysearch':
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=ohayou&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Artists : ${get_result[x].artists}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Preview : ${get_result[x].preview_url}\n\n\n`
                    }
                    reply(txt)
                    break
case 'fbdl':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=ohayou&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    client.sendMessage(from, ini_buffer, video, { quoted: mek})
                    break
case 'igvideo': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(9)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=ohayou&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, video, )
				    break
				case 'igpost': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(8)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=ohayou&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, image, )
				    break
				case 'igtv': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(6)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=ohayou&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, video, )
				    break
/// MENU INFO BOT DEVILBOTZ
case 'snk':
					me = client.user
					uptime = process.uptime()
					teks = `*Syarat & Ketentuan DEVIL.BOT*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
		case 'lpr':
					const bug = body.slice(5)
					if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					
					teks1 = `*[LAPORAN]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug}`
					var options = {
					text: teks1,
					contextInfo: {mentionedJid: [nomor]},
					}
					client.sendMessage('6288215463787@s.whatsapp.net', options, text, {quoted: mek})
					reply('Masalah telah di laporkan ke owner DEVIL-BOT, Laporan palsu atau main² tidak akan ditanggapi.')
					break
		case 'request':
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					
					const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					client.sendMessage('6288215463787@s.whatsapp.net', options, text, {quoted: mek})
					client.sendMessage('6288215463787@s.whatsapp.net', options, text, {quoted: mek})
					client.sendMessage('6288215463787@s.whatsapp.net', options, text, {quoted: mek})
					reply('REQUEST ANDA TELAH SAMPAI KE OWNER DEVIL-BOT, Requests palsu atau main² tidak akan ditanggapi.')
					break
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya,Wangy sekali😗')
					break 
				case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break
//case langgka Nih Bro Notif tapi Ke Tag
case 'notif':
if (!isGroupAdmins) return reply(ind.only.admin)
client.updatePresence(from, Presence.composing)
if (!isRegistered) return reply(ind.noregis())
if (!isGroup) return reply(ind.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await client.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
} 
await client.sendMessage(from, options, text)
break
case 'blocklist': 
					teks = '*This is list of blocked number* :\n'
					for (let block of blocked) {
						teks += `*~>* @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'tagme':
if (!isRegistered) return reply( ind.noregis())
const tagme = {
  text: `@${sender.split("@")[0]} OH BABY DI SINI KAK`,
  contextInfo: {
mentionedJid: [sender]
  }
}
client.sendMessage(from, tagme, text)
break
case 'listonline':
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
case 'infoowner':
		               case 'infodeveloper':
		               case 'infopengembang':
                       if (!isRegistered) return reply( ind.noregis())
				       if (isLimit(sender)) return reply(ind.limitend(pusname))
				const srd = "6285697662826@s.whatsapp.net"
				const bjir = `
╔════ ◤ *Info Developer* ◢
║╔▸ 
║╠ *Nama* : DEVIL STORE
║╠ *Nomer* : KEPO
║╠ *PACAR* : KAGA ADA!?
║╠ *Tag Owner* : @${srd.split("@")[0]}
║╠ *Yutub* : DEVILBOTZ
║╠ *Ig* : @devilstore18
║╚▸
╚════ ◤ *DEVILBOTZ* ◢`
					   client.sendMessage(from, bjir, text, { quoted: mek, contextInfo: {"mentionedJid": [srd], forwardingScore: 1000, isForwarded: true }})
					   break
//CASE TAMBAHAN SENDIRI BY DEVILBOTZ					   
case 'sewabot':
				tres = `
╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 INFO BOT 」*
│➛*Nama Bot* : DEVILBOTZ
│➛*Versi* : V10.0
│➛*Creator* : DEVIL STORE
│➛*Youtube* : DEVIL BOTZ
╰┬────────────┈ ⳹
    │ *「HARGA SEWA 」* 
    │➛ *1 BULAN* : 5K
    │➛ *MANEN* : 15K
    │ *「HARGA SCRIPT 」* 
    │➛ *HARGA SC INI* : KAGA DI JUAL KARENA HASIL RECODE MALU NANTI GW BRO
    │➛ *CARA BIKIN BOT* : AYO MARI KITA SAMA SAMA MENGEMBANGIN BOT INI
    ╰─────────────┈ ⳹
    HUB: wa.me://6288215464787`
    client.sendMessage(from, tres, image, {thumbnail:fs.readFileSync('./src/LogooBott.jpg'), quoted: mek, caption: tres, contextInfo: {forwardingScore: 1000, isForwarded: true}}) 
				break
case 'jasaculik':
            if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                wew = fs.readFileSync(`./src/LogooBott.jpg`)
teks = `*JASA CULIK MEMBER BY DEVIL STORE*

50MEM:2K
100MEM:5K
150MEM:7K
FULL:10K
Chat:wa.me/6288215463787`
                client.sendMessage(from, wew, image, { quoted: mek, caption: teks })
                break
case 'jasahitungpointft':
            if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                wew = fs.readFileSync(`./src/LogooBott.jpg`)
teks = `*MAU OPEN FT TAPI KGK SEMPET NGITUNG POINT? TENANG SAYA SOLUSI NYA*

*MENYEDIAKAN HITUNG POIN FT*
1M:1K
2M:2K
3M:3K
4M:4K
*OPEN JUGA SPECT+POINT TABLE*
1M:2K
2M:4K
3M:6K
4M:8K
*OPEN JASA BUAT CR JUGA DISINI!!!! *
1CR:2K
2CR:4K
3CR:6K
DST..... 

*OPEN JUGA BUAT POSTER FT CLASIC&CS
1POSTER:5K*

*SATU PAKET FT LENGKAP:POSTER+3CR+POINT TABLE+SPECT!!!!!*

*OPEN MURID HITUNG POINT OTOMATIS:5K SAHAJA*

MINAT? BISA CHAT:wa.me/6288215463787
©DEVILSTORE`
                client.sendMessage(from, wew, image, { quoted: mek, caption: teks })
                break	
case 'buatlogojb':
            if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                wew = fs.readFileSync(`./src/LogooBott.jpg`)
teks = `╭≽ *「JASA DESAIN LOGO BY DEVIL STORE」*
*LOGO/VEKTOR

╭≽ *LOGO JB:1K*
╭≽ *LOGO VEKTOR:2K*
╭≽ *LOGO JB BAWA GOPAY:3K*
╭≽ *LOGO COLLAB:4K*
╭≽ *LOGO CHIBI : 4K*

*POSTER*

╭≽ *POSTER TURNAMEN:2K*
╭≽ *POSTER OPEN MEMBER:3K*
╭≽ *POSTER JEBOL SESI:4K*
╭≽ *POSTER JOKI:4K*
╭≽ *POSTER CR:3K*
╭≽ *POSTER JUAL AKUN:4K*


PAYMENT
GOPAY/DANA

SISTEM: PROSES LOGO - TF - DONE

NOTE:JIKA UDH DI BUATIN LOGO SECEPAT NYA TF YA

RAGU? SKIP,TESTI? ADA NGAB TPI MASI DIKIT!

MINAT? CHAT NOMOR DI BAWAH INI!
http://wa.me/6288215463787`
                client.sendMessage(from, wew, image, { quoted: mek, caption: teks })
                break	
case 'suntikig':
            if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                wew = fs.readFileSync(`./src/NugrahStore.jpg`)
teks = `JASA FOLLOWER INSTAGRAM BOT BULE DROP proses masuk fast

-100 FOLLOWER Rp 2k
-500 FOLLOWER Rp 10k
- 1000 FOLLOWER Rp 15k
- 2000 FOLLOWER Rp 25k
-3000 FOLLOWER Rp 37k

----------------------------------------
JASA INSTAGRAM BULE HQ PERMANEN PROMO

-100 FOLLOWER Rp 7ribu
-200FOLLOWER Rp 14ribu
-500 FOLLOWER Rp 40ribu
-1000 FOLLOWER Rp 80ribu
---------------------------------------

PEMBAYARAN  VIA DANA OVO PULSA

Minat hubungin link di bawah ini ya 
👇👇👇👇👇👇👇

https://wa.me/6281257160639`
                client.sendMessage(from, wew, image, { quoted: mek, caption: teks })
                break
case 'suntiktiktok':
            if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                wew = fs.readFileSync(`./src/NugrahStore.jpg`)
teks = `○JASA FOLLOWER TIKTOK 
_________________________
NON DROP FOLLOWER ADA FOTO PROFIL NYA

BONUS VIEW

100 follower = RP 6ribu
200 follower = RP 12ribu
300 follower = RP 18ribu
400 follower = RP 24ribu
500 follower = RP 30ribu
1000 follower = RP 60ribu
----------------------------------------
DROP 

100 FOLLOWER RP= 4ribu
200 FOLLOWER RP= 8ribu
300 FOLLOWER RP= 12ribu
400 FOLLOWER RP= 16ribu
500 FOLLOWER RP= 20ribu
1000 FOLLOWER RP= 40ribu
_________________________
LIKE TIKTOK NON DROP

100 LIKE RP 3ribu
200 LIKE RP 6ribu
300 LIKE RP 9ribu
400 LIKE RP 12ribu
500 LIKE RP 15ribu
1000 LIKE RP 30 ribu
-------------------------------------
VIEW TIKTOK

1000 VIEW RP 700perak
10k VIEW RP 3500ribu
100ribu VIEW RP Rp 12RIBU
----------------------------------------
JASA COMENT 
10 coment Rp 7ribu
20 coment Rp 14ribu 

Proses tergantung antrian biasa masuk follower bertahap 

PEMBAYARAN VIA DANA GOPAY OVO
_________________________
Minat hubungin no yang di bawah ini 
WhatsApp :https://wa.me/+6281257160639`
                client.sendMessage(from, wew, image, { quoted: mek, caption: teks })
                break
case 'jasashare':
            if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                wew = fs.readFileSync(`./src/AdiGanz.jpg`)
teks = `*JASA SHARE MURMER BY ADI JB*

DI SHARE 50+ SEMUA PAKET BISA SHARE FT BISA STORE

*🍂PAKET BIASA*
• 1x  50+ grup : 400p
• 2x 50+ grup : 800P
• 3x 50+ grup : 1K
• 4x 50+ grup : 1.500

• 1x 100+grup :800P
• 2 100+grup :1K
• 3x 100+grup :1.500
• 4x 100+grup :2K

•1x 150+grub :1K
•2x 150+grub :2k
•3x 150+grub :3k
•4x 150+grub :4k

*🍂PAKET PERJAM*
• 1 JAM : 2K
• 2 JAM : 3K
• 3 JAM : 5K
(JEDA 30 DETIK 1x SHARE)

*🍂PAKET PERMENIT*
• 10 MENIT : 2K
• 20 MENIT : 4K
• 30 MENIT : 5K
(JEDA 30 DETIK 1x SHARE)

*🍂PAKET HARIAN 1X24 JAM : 4K*
(Di share setiap 1jam sekali)

*OPEN PAKET SAMPAI FULL SLOT!!*

*PAYMENT :QRIS/GOPAY*


*OPEN MURID SESI BAWA DANA 3K*
DAPAT 30TUTOR
20APN


*KONTAK :https://wa.me/6285775632306`
                client.sendMessage(from, wew, image, { quoted: mek, caption: teks })
                break	
case 'PEMBAYARAN':
            if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                wew = fs.readFileSync(`./src/QRIS.jpg`)
teks = `PEMBAYARAN BISA VIA QRIS/CHAT NO TERTERA`
                client.sendMessage(from, wew, image, { quoted: mek, caption: teks })
                break                																					
case 'sewabot1':
            if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                wew = fs.readFileSync(`./src/LogooBott.jpg`)
teks = `╭ *〔 MAU SEWA〕*
┃ *➣ manen : 15k
┃ *➣ Goplay :
┃ *➣ Gopay : 
┃ *➣ Dana : 
┃ *➣ Ovo : 
┃ *➣ Pulsa : 
╰━━━━━━━━━━━━━━━━━
Chat Owner Bro #owner`
                client.sendMessage(from, wew, image, { quoted: mek, caption: teks })
                break
case 'hidetag':
					// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
costum('MAMPUS KE TAG YAHAHHA', text, tescuk, vu)
var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
                                        case 'profile':

    				client.updatePresence(from, Presence.composing)

				
    				try {

					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

					} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

					}

					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *XP:* ${getLevelingXp(sender)}\n│• *Level:* ${getLevelingLevel(sender)}\n│• *Role:* ${role}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`

					buffer = await getBuffer(ppimg)

					client.sendMessage(from, buffer, image, {quoted: mek, caption: profile})

					break
//MENU ISLAMI DAN ISLAM
case 'alquran':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=ohayou`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
case 'spatrick':
					if (isBanned) return reply(ind.baned())
		if (!isRegistered) return reply(ind.noregis())
				    costum('SABAR BRO!!! ', text, tescuk, cr)
					dppa = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=ohayou`)
					client.sendMessage(from, dppa, sticker, {quoted: mek})
					await limitAdd(sender)
					break
case 'groupinfo':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply( ind.noregis())
                client.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(ind.group)
                ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
		        client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NAME* : *${groupName}*\n*MEMBER* : *${groupMembers.length}*\n*ADMIN* : *${groupAdmins.length}*\n*NSFW : ${nsfw ? 'Aktif' : 'Tidak Aktif'}*\n*Simsimi : ${simih ? 'Aktif' : 'Tidak Aktif'}*\n*Welcome : ${welkom ? 'Aktif' : 'Tidak Aktif'}*\n*DESKRIPSI* : \n*${groupDesc}*`})
                break
case 'tomp3':
		if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply( ind.noregis())
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
					lcostum('SABAR BRO!!! ', text, tescuk, cr)
					encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    medial = await client.downloadAndSaveMediaMessage(encmedial)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
/// CASE AFK LAGI MAINTANCE YA NEXT UPDATE
case 'afk':
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./lib/afk.json", JSON.stringify(afk))
                    ini_txt = "Anda telah afk. "
                    if (alasan != "") {
                        ini_txt += "Dengan alasan " + alasan
                    }
                    reply(ini_txt)
                    break
case 'unafk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('sukess!!?')
                                        var num = mek.participant
                                        const kl7 = {
                                                text: `@${numm.split("@s.whatsapp.net")[0]} *TELAH KEMBALI DARI AFK ${tels}*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        client.sendMessage(from, kl7, text, {quoted: mek})
                                        break
case 'help':
case 'menu':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
               const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const uangku = checkATMuser(sender)
             DEV = fs.readFileSync(`./src/HelpJs.jpg`)
costum('SABAR BRO!!! ', text, tescuk, cr)
wew =`
╔═〘Version TermuxX〙
╠✙PUBLIC :DEVIL BOTZ 
╠✙Nama: ${pushname}
╠✙Nomer: wa.me/${sender.split("@")[0]}
╠✙USER : ${_registered.length}
╠✙Prefix:「  ${prefix}  」
╠✙Duit: Rp.${uangku}.-
╠✙Rank:${role}
╠✙Level:${getLevelingLevel(sender)}
╠✙Xp:${getLevelingXp(sender)}/${reqXp} 
╠✙Total Block Contact:${blocked.length}
└─❋ཻུ۪۪⸙

ʙᴏᴛ : DEVIL BOTZ

ᴜsᴇʀ : ${pushname}

ᴘʀᴇғɪx : #

ᴏᴡɴᴇʀ : 👇

wa.me/KEPO BAT LU
╔══✪〘 UPDATE MENU〙✪══
╠➥${prefix}komunis New
╠➥${prefix}deletepc New
╠➥${prefix}buaya New
╠➥${prefix}tololserti New
╠➥${prefix}translete New
╠➥${prefix}elang New
╠➥${prefix}freefire New
╠➥${prefix}timer New
╠➥${prefix}fakedonald New
╠➥${prefix}randomasupan New
╠➥${prefix}indbeasiswa New
╠➥${prefix}zippyshare New
╠➥${prefix}githubstalk New
╠➥${prefix}jahy New
╠➥${prefix}uniform New
╠➥${prefix}nsfwneko New
╠➥${prefix}cuckold New
╠➥${prefix}wpnsfwmobile New
╠➥${prefix}zettairyouiki New
╠➥${prefix}wpmobile New
╠══✪〘 Stiker MENUI〙✪══
╠➥${prefix}spatrick
╠➥${prefix}sticker
╠➥${prefix}randompatrick
╠➥${prefix}stikergif
╠➥${prefix}takestick
╠➥${prefix}toimg
╠➥${prefix}attp TEKS
╠➥${prefix}attp2 TEKS
╠➥${prefix}attp3 TEKS
╠➥${prefix}attp4 TEKS
╠➥${prefix}attp TEKS
╠➥${prefix}temoji 😊
╠➥${prefix}amongus TEKS
╠══✪〘 Admin MENUI〙✪══
╠➥${prefix}admin
╠➥${prefix}unadmin
╠➥${prefix}wakillist
╠➥${prefix}premium
╠➥${prefix}unpremium
╠➥${prefix}premiuumlist
╠➥${prefix}bann
╠➥${prefix}unbann
╠➥${prefix}banlist
╠➥${prefix}leaderboard
╠➥${prefix}lb
╠➥${prefix}tomp3
╠➥${prefix}fitnah
╠➥${prefix}limit
╠➥${prefix}bug
╠➥${prefix}kalkulator
╠➥${prefix}afk
╠➥${prefix}unafk
╠➥${prefix}dompet
╠➥${prefix}tagme
╠➥${prefix}buylimit
╠➥${prefix}buypremiumlimit
╠➥${prefix}giftlimit
╠══✪〘 OWNER MENU〙✪══
╠➥${prefix}hidetag5
╠➥${prefix}sayang  Tag
╠➥${prefix}bcgc
╠➥${prefix}buggc
╠➥${prefix}setprefix
╠➥${prefix}kick
╠➥${prefix}profile
╠══✪〘 ADMIN MENU〙✪══
╠➥${prefix}nobadword
╠➥${prefix}addbadword
╠➥${prefix}delbadword
╠➥${prefix}listbadword
╠➥${prefix}listonline
╠➥${prefix}linkgc
╠➥${prefix}groupinfo
╠➥${prefix}setppbot
╠➥${prefix}welcome 1/0
╠➥${prefix}antilink 1/0
╠➥${prefix}hidetag
╠➥${prefix}notif TEKS
╠══✪〘 FUN 〙✪══
╠➥${prefix}tebakbendera
╠➥${prefix}tebakgambar
╠➥${prefix}family100
╠➥${prefix}caklontong
╠══✪〘 Download Menu〙✪══
╠➥${prefix}spotify
╠➥${prefix}ytplay
╠➥${prefix}play2
╠➥${prefix}ytmp3
╠➥${prefix}ytmp4
╠➥${prefix}ytmp32
╠➥${prefix}ytmp2
╠➥${prefix}ytaudio
╠➥${prefix}igmp3
╠➥${prefix}ytsearch
╠➥${prefix}spotifysearch
╠➥${prefix}fbdl
╠➥${prefix}igpost
╠➥${prefix}igpost
╠══✪〘 KERANG AJAIB〙✪══
╠➥${prefix}bisakah
╠➥${prefix}kapankah
╠➥${prefix}apakah
╠➥${prefix}bagaimanakah
╠➥${prefix}rate
╠➥${prefix}sangecek
╠➥${prefix}cantikcek
╠➥${prefix}jadian
╠➥${prefix}terganteng
╠➥${prefix}tercantik
╠➥${prefix}gaycek
╠➥${prefix}lesbicek
╠➥${prefix}gantengcek
╠➥${prefix}watak
╠➥${prefix}hobby
╠══✪〘 PEKATAAN 〙✪══
║
╠➥${prefix}cantik
╠➥${prefix}baik
╠➥${prefix}ganteng
╠➥${prefix}haram
╠➥${prefix}jelek
╠➥${prefix}wibu
╠➥${prefix}ewe
╠➥${prefix}bego
╠➥${prefix}babi
╠➥${prefix}pinter
╠➥${prefix}beban
╠➥${prefix}kontol
╠➥${prefix}hebat
╠➥${prefix}jelek
╠➥${prefix}jago
╠➥${prefix}pakboy
╠➥${prefix}sadboy
╠➥${prefix}goblok
╠➥${prefix}jahat
╠➥${prefix}nolep
╠➥${prefix}monyet
╠➥${prefix}anjing
╠➥${prefix}pakgirl
╠➥${prefix}sadgril
║
╠══✪〘 MAKER 〙✪══
║
╠➥${prefix}weglass TEKS
╠➥${prefix}multikolor3d TEKS
╠➥${prefix}waterkolor TEKS
╠➥${prefix}luxurygold TEKS
╠➥${prefix}galxywallpaper TEKS
╠➥${prefix}lighttext TEKS
╠➥${prefix}beautifulflower TEKS
╠➥${prefix}puppycute TEKS
╠➥${prefix}royaltext TEKS
╠➥${prefix}heartshaped TEKS
╠➥${prefix}birthdaycake TEKS
╠➥${prefix}galaxystyle TEKS
╠➥${prefix}hologram3d TEKS
╠➥${prefix}greenneon TEKS
╠➥${prefix}glossychrome TEKS
╠➥${prefix}greenbush TEKS
╠➥${prefix}metallogo TEKS
╠➥${prefix}noeltext TEKS
╠➥${prefix}glittergold TEKS
╠➥${prefix}textcake TEKS
╠➥${prefix}starsnight TEKS
╠➥${prefix}wooden3d TEKS
╠➥${prefix}textbyname TEKS
╠➥${prefix}writegalacy TEKS
╠➥${prefix}galaxybat TEKS
╠➥${prefix}snow3d TEKS
╠➥${prefix}birthdayday TEKS
╠➥${prefix}goldplaybutton TEKS
╠➥${prefix}silverplaybutton TEKS
╠➥${prefix}freefire TEKS
╠➥${prefix}crosslogo TEKS
╠➥${prefix}flowertext TEKS
╠➥${prefix}silktext TEKS
╠➥${prefix}flametext TEKS
╠➥${prefix}glowtext TEKS
╠➥${prefix}skytext TEKS
╠➥${prefix}cslogo TEKS
╠➥${prefix}lithgtext TEKS
╠➥${prefix}crismes TEKS
╠➥${prefix}pornhub TEKS
╠➥${prefix}glitch TEKS
╠➥${prefix}avenger TEKS
╠➥${prefix}space TEKS
╠➥${prefix}ninjalogo TEKS
╠➥${prefix}marvelstudio TEKS
╠➥${prefix}lionlogo TEKS
╠➥${prefix}wolflogo TEKS
╠➥${prefix}steel3d TEKS
╠➥${prefix}wallgravity TEKS
╠➥${prefix}tiktok TEKS
╠➥${prefix}arcade8bit TEKS
╠➥${prefix}battlefield4 TEKS
╠➥${prefix}pubg TEKS
╠➥${prefix}pinterest TEKS
╠➥${prefix}ktp TEKS
║
╠══✪〘 Korea MENU〙✪══
║
╠➥${prefix}bts
╠➥${prefix}exo
║
╠══✪〘 LORD MENU 〙✪══
║
╠➥${prefix}bj 
╠➥${prefix}ero
╠➥${prefix}cum
╠➥${prefix}feet
╠➥${prefix}yuri
╠➥${prefix}trap
╠➥${prefix}lewd
╠➥${prefix}feed
╠➥${prefix}eron
╠➥${prefix}solo
╠➥${prefix}gasm
╠➥${prefix}poke
╠➥${prefix}anal
╠➥${prefix}holo
╠➥${prefix}tits
╠➥${prefix}kuni
╠➥${prefix}kiss
╠➥${prefix}erok
╠➥${prefix}smug
╠➥${prefix}baka
╠➥${prefix}solog
╠➥${prefix}feetg
╠➥${prefix}lewdk
╠➥${prefix}waifu
╠➥${prefix}pussy
╠➥${prefix}femdom
╠➥${prefix}cuddle
╠➥${prefix}hentai
╠➥${prefix}eroyuri
╠➥${prefix}cum_jpg
╠➥${prefix}blowjob
╠➥${prefix}erofeet
╠➥${prefix}holoero
╠➥${prefix}classic
╠➥${prefix}erokemo
╠➥${prefix}fox_gril
╠➥${prefix}futanari
╠➥${prefix}lewdkemo
╠➥${prefix}wallpaper
╠➥${prefix}pussy_jpg
╠➥${prefix}kemonomimi
╠➥${prefix}nsfw_avatar
║
╠══✪〘 NSFW 〙✪══
║
╠➥${prefix}chiisaihentai
╠➥${prefix}trap
╠➥${prefix}blowjob
╠➥${prefix}yaoi
╠➥${prefix}ecchi
╠➥${prefix}hentai
╠➥${prefix}ahegao
╠➥${prefix}hololewd
╠➥${prefix}sideoppai
╠➥${prefix}animefeets
╠➥${prefix}animebooty
╠➥${prefix}animethighss
╠➥${prefix}hentaiparadise
╠➥${prefix}animearmpits
╠➥${prefix}hentaifemdom
╠➥${prefix}lewdanimegirls
╠➥${prefix}biganimetiddies
╠➥${prefix}hentai4everyone
╠➥${prefix}animebellybutton
╠══✪〘LIMIT MENU〙✪══
╠➥${prefix}giftlimit
╠➥${prefix}limit
╠➥${prefix}buylimit
╠➥${prefix}dompet
╠══✪〘 LEXERI〙✪══
╠➥${prefix}base64enc
╠➥${prefix}base64dec
╠➥${prefix}base32enc
╠➥${prefix}base32dec
╠➥${prefix}sha1enc
╠➥${prefix}sha256enc
╠➥${prefix}sha512enc
╠➥${prefix}encbinary
╠➥${prefix}qrcode
╠➥${prefix}encbinary
╠══✪〘 HEWAN〙✪══
╠➥${prefix}fox
╠➥${prefix}dog
╠➥${prefix}cat
╠➥${prefix}panda
╠➥${prefix}panda1
╠➥${prefix}bird
╠➥${prefix}koala
╠═══✪〘 Jawa and Sunda〙✪══
╠➥${prefix}latinkejawa TEKS
╠➥${prefix}jawakelatin TEKS
╠➥${prefix}latinkesunda TEKS
╠➥${prefix}sundakelatin TEKS
╠═══✪〘 Sound Menu〙✪══
╠➥${prefix}iri
╠➥${prefix}desah
╠➥${prefix}nengdesah
╠➥${prefix}pale
╠➥${prefix}playdate
╠➥${prefix}beb
╠➥${prefix}hallo
╠➥${prefix}megic
╠➥${prefix}susu
╠➥${prefix}cemen
╠➥${prefix}menyukaiku
╠➥${prefix}gatal
╠➥${prefix}sasageyo
╠➥${prefix}sound
╠➥${prefix}sound1
╠➥${prefix}sound2
╠➥${prefix}sound3
╠➥${prefix}sound4
╠➥${prefix}sound5
╠➥${prefix}sound6
╠➥${prefix}sound7
╠➥${prefix}sound8
╠➥${prefix}sound9
╠➥${prefix}sound10
╠➥${prefix}sound11
╠➥${prefix}sound12
╠➥${prefix}sound13
╠➥${prefix}sound14
╠➥${prefix}sound15
╠➥${prefix}sound16
╠➥${prefix}sound17
╠➥${prefix}sound18
╠➥${prefix}sound19
╠➥${prefix}sound20
╠➥${prefix}sound21
╠➥${prefix}sound22
╠➥${prefix}sound23
╠➥${prefix}sound24
╠➥${prefix}sound25
╠➥${prefix}sound26
╠➥${prefix}sound27
╠➥${prefix}sound28
╠➥${prefix}sound29
╠➥${prefix}sound30
╠➥${prefix}sound31
╠➥${prefix}sound32
╠➥${prefix}sound33
╠➥${prefix}sound34
╠➥${prefix}sound35
╠➥${prefix}sound36
╠➥${prefix}sound37
╠➥${prefix}sound38
╠➥${prefix}sound39
╠➥${prefix}sound40
╠➥${prefix}sound41
╠➥${prefix}sound42
╠➥${prefix}sound43
╠➥${prefix}sound44
╠➥${prefix}sound45
╠➥${prefix}sound46
╠➥${prefix}sound47
╠➥${prefix}sound48
╠➥${prefix}sound49
╠➥${prefix}sound50
╠➥${prefix}sound51
╠➥${prefix}sound52
╠➥${prefix}sound53
╠➥${prefix}sound54
╠➥${prefix}sound55
╠➥${prefix}sound56
╠➥${prefix}sound57
╠➥${prefix}sound58
╠➥${prefix}sound59
╠➥${prefix}sound60
╠➥${prefix}sound61
╠➥${prefix}sound62
╠➥${prefix}sound63
╠➥${prefix}sound64
╠➥${prefix}sound65
╠➥${prefix}sound66
╠➥${prefix}sound67
╠➥${prefix}sound68
╠══✪〘 AUDIO MENU〙✪══
╠➥${prefix}tupai reply audio
╠➥${prefix}bass reply audio
╠➥${prefix}gemok reply audio
╠➥${prefix}gemes reply audio
╠➥${prefix}fast reply audio
╠➥${prefix}nightcore reply audio
╠➥${prefix}tempo reply audio
╠➥${prefix}ghost reply audio
╠══✪〘 FAST MENU〙✪══
╠➥${prefix}kontak
╠➥${prefix}kontag
╠➥${prefix}translate
╠➥${prefix}meme
╠➥${prefix}cuaca
╠➥${prefix}shopee
╠➥${prefix}memeindo
╠➥${prefix}indbeasiswa
╠➥${prefix}heroml NAMA
╠➥${prefix}namaninja TEKS
╠══✪〘 MENU Xteam〙✪══
╠➥${prefix}suit
╠➥${prefix}video1 TEKS
╠➥${prefix}video2 TEKS
╠➥${prefix}video3 TEKS
╠➥${prefix}video4 TEKS
╠➥${prefix}video5 TESK
╠➥${prefix}video6 TEKS
╠➥${prefix}tebakangka
╠══✪〘 MENU VHtear〙✪══
╠➥${prefix}hartatata3 TEKS
╠➥${prefix}text2gif TEKS
╠➥${prefix}logoepep TEKS
╠➥${prefix}logoepep1 TEKS
╠➥${prefix}logoepep2 TEKS
╠➥${prefix}logoepep3 TEKS
╠➥${prefix}logoepep5 TEKS
╠➥${prefix}gemelogo TEKS
╠══✪〘 MENU leyscoders〙✪══
╠➥${prefix}honey TEKS
╠➥${prefix}whitecube TEKS
╠➥${prefix}nightsky TEKS
╠➥${prefix}gradient TEKS
╠➥${prefix}goldtext TEKS
╠➥${prefix}woodenboard TEKS
╠➥${prefix}csgo TEKS
╠══✪〘 ASUPAN MENU〙✪══
╠➥${prefix}asupan
╠➥${prefix}asupan1
╠══✪〘 MENU BUCIN 〙✪══
╠➥${prefix}dilan
╠➥${prefix}islami
╠➥${prefix}faktaunik
╠➥${prefix}quotesimage
╠➥${prefix}katabijak
╠➥${prefix}bucin
╠➥${prefix}katakatabijak
╠➥${prefix}randompantun
╠➥${prefix}randombucin
╠➥${prefix}katakatabucin
╠➥${prefix}randomnama
╠══✪〘 SERTI BUCIN 〙✪══
╠➥${prefix}fuckboy
╠➥${prefix}fuckgril
╠➥${prefix}bucinserti
╠➥${prefix}pacarserti
╠➥${prefix}goodboy
╠➥${prefix}goodgril
╠➥${prefix}badboy
╠➥${prefix}badgril
╠══✪〘 InfoMENU 〙✪══
╠➥${prefix}info
╠➥${prefix}owner
╠➥${prefix}infoowner
╠➥${prefix}sewabot
╠➥${prefix}sewabot1
╠➥${prefix}jasaculik
╠➥${prefix}jasahitungpoinft
╠➥${prefix}buatlogojb
╠➥${prefix}suntikig
╠➥${prefix}PEMBAYARAN
╠➥${prefix}suntiktiktok
╠➥${prefix}jasashare
╠➥${prefix}snk
╠➥${prefix}daftar
╠➥${prefix}donasi
╠══✪〘 ANIME MENU 〙✪══
╠➥${prefix}sao
╠➥${prefix}lovelive
╠➥${prefix}hsdxd
╠➥${prefix}naruto
╠➥${prefix}mikasa
╠➥${prefix}minato
╠➥${prefix}madara
╠➥${prefix}gon
╠➥${prefix}jiraya
╠➥${prefix}obito
╠➥${prefix}killua
╠➥${prefix}eren
╠➥${prefix}tsunade
╠➥${prefix}sagiri
╠➥${prefix}titan
╠➥${prefix}levi
╠➥${prefix}kiba
╠➥${prefix}tanjiro
╠➥${prefix}rimuru
╠➥${prefix}sakura
╠➥${prefix}boruto
╠➥${prefix}nekuzo
╠➥${prefix}natsu
╠➥${prefix}hinata
╠➥${prefix}sarada
╠➥${prefix}luffy
╠➥${prefix}genos
╠➥${prefix}neji
╠➥${prefix}sasuke
╠➥${prefix}zoro
╠➥${prefix}saitama
╠➥${prefix}sanji 
╠➥${prefix}miku
╠══✪〘 ISLAMI MENU 〙✪══
╠➥${prefix}kisahnabi
╠➥${prefix}alquran
╠➥${prefix}asmaulhusna
╠➥${prefix}jadwalsholat
╠══✪〘 SEVE MENU 〙✪══
╠➥${prefix}addsticker
╠➥${prefix}getsticker
╠➥${prefix}stickerlist
╠➥${prefix}addvideo
╠➥${prefix}getvideo
╠➥${prefix}videolist
╠➥${prefix}getimage
╠➥${prefix}addImage
╠➥${prefix}imagelist
╠➥${prefix}addaudio
╠➥${prefix}getaudio
╠➥${prefix}audiolist
╰┬────────────❋ཻུ۪۪⸙
 ┌┤➤Version : *NODE* . *JS*
 │ • ➤Whatsapp Original
 │ • Scrip ini Hasil Recode
 │ • Recode Dan Sc Ori
 │ • Revence Owner Only
 │ •DEVIL STORE@ 2.0.2.1
 ├┬───────❋ཻུ۪۪⸙
 │ •THANKS TO
 │ •DEVIL BOTZ
 │ •YogiPw
 │ •Akira
 │ •dappauhuy
 │ •Lord Manik
 │ •Fax Botz
 │ •RuRi Botz
 │ •Rimuru Botz
 │ •RAMLAN ID 
 │ •Mastah arifi 
 │ •DEVIL BOTZ
 ╰────────┈❋ཻུ۪۪⸙`
client.sendMessage(from, DEV, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Version:*\n*TermuxX*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/Thumb.jpg')} } }, caption: wew, pushname, reply, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, time })
const pendek = fs.readFileSync('./mp3/Pendek.mp3');
client.sendMessage(from, pendek, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'donasi':
            if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                wew = fs.readFileSync(`./src/LogooBott.jpg`)
costum('MENAMPILKAN MENU', text, tescuk, vr)
teks = `
اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ
“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016
╔════════════════════
║ FIX BUG DEVIL STORE
╠════════════════════
║╭──❉ *DONASI DEVIL BOTZ* ❉─────
║│➸ *OVO*:TIDAK TERSEDIA
║│➸ *DANA*: 089520758266
║│➸ *PULSA*:089520758266
║│➸ *GOPAY*:088215464787
║╰──────────────────
║
║❋ཻུ۪۪⸙ BOT BY DEVIL STORE ❋ཻུ۪۪⸙
═══════════════════`
client.sendMessage(from, wew, image, { quoted: mek, caption: teks })
const jalan = fs.readFileSync('./mp3/Bisa.mp3');
client.sendMessage(from, jalan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
//DAFTAR DULU BAGI PERNGUNA BOT BARU
case 'daftar':
                			if (isRegistered) return  reply(ind.rediregis())
                			if (!q.includes('|')) return  reply(ind.wrongf())
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(20)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                			if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                			if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                					try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
                					veri = sender
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
				        break
//UNTUK FITNAH ORANG DOSA YA BRO
//TAPI KALO FITNAH PAKE BOT YA KAGA TAU
case 'fitnah':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))				
		if (!isGroup) return reply(ind.groupo())                 
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
///Bisa Buat Stiker Berwarna Warna
case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                    if (args.length == 0) return reply(`Example: ${prefix + command} WahyuGanss`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=ohayou&text=${ini_txt}`)
                    client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
// MARI KITA BELANJA DI SHOOPE
case 'shopee':
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    costum('SABAR BRO!!! ', text, tescuk, cr)             
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/shopee?apikey=ohayou&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
// BISA MENDETEKSI CUACAH SEKARANG
case 'cuaca':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    costum('SABAR BRO!!! ', text, tescuk, cr)             
                   get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=ohayou`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    client.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
                    reply(ini_txt)
                    break
// KHUSUS BASE.JSON
case 'base64enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: devil botz`)
					auah = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64enc?text=${auah}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result)
					break
					case 'base64dec': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: devil botz`)
					auah = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64dec?text=${auah}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result)
					break
					case 'base32enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: devil botz`)
					auah = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32enc?text=${auah}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result)
					break
					case 'base32dec': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: devil botz`)
					auah = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32dec?text=${auah}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result)
					break
					case 'sha1enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: DEVIL BOTZ`)
					auah = body.slice(9)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha1?text=${auah}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result.encrypt)
					break
					case 'sha256enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: DEVIL BOTZ`)
					auah = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha256?text=${auah}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result.encrypt)
					break
					case 'sha512enc': 
				  if (!isRegistered) return reply(ind.noregis())
				  if (args.length < 1) return reply(`Contoh: DEVIL BOTZ`)
					auah = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha512?text=${auah}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result.encrypt)
					break
					case 'encbinary':
				   encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: Arya})
					break  
				   case 'decbinary':
				   decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: Arya})
					break
// MENCARI GAMBAR GAMBAR 
case 'pinterest':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    costum('SABAR BRO!!! ', text, tescuk, cr)           
                     ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=ohayou&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                   case 'pinterestdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                   costum('SABAR BRO!!! ', text, tescuk, cr) 
                   ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterestdl?apikey=ohayou&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
//FITUR  DOWNLOADER
case 'ytplay':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
            costum('SABAR BRO!!! ', text, tescuk, cr)       
            get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=ohayou&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek })
                    get_video = await getBuffer(get_result.video[0].link)
                    client.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: mek })
                    break
                case 'play2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                 costum('SABAR BRO!!! ', text, tescuk, cr)
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=ohayou&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    client.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: mek })
                    get_video = await getBuffer(get_result.video)
                    client.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'ytsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
             costum('SABAR BRO!!! ', text, tescuk, cr)       
             get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=ohayou&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'ytmp3':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=kingsboybot&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytmp32':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=ohayou&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytmp2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=ohayou&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    client.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'ytmp4':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=ohayou&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    client.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
case 'igmp3': //proses
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=ohayou&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = audio
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, ini_type, { quoted: mek })
                    break
			case 'ytaudio': //proses
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname)) 
                costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
                anu = await fetchJson(`https://ramlan-api.herokuapp.com/api/yutub/audio?url=${body.slice(8)}&apikey=apiramlan`)
               if (anu.error) return reply(anu.error)
                 infomp3 = ` *YOUTUBE MP3 DOWNLOADER* \n\n* Title:* ${anu.result.title}\n* Filesize:* ${anu.result.filesize}\n* Size:* ${anu.result.size}\n* Video ID:* ${anu.result.videoId}\n* Viewers:* ${anu.result.viewcount}\n*Rating:* ${anu.result.rating}\n\n*TUNGGU SEBENTAR SHIZUKA LAGI KIRIM AUDIO NYA MOHON JANGAN SPAM*`
                buffer = await getBuffer(anu.result.thumb)
                lagu = await getBuffer(anu.result.result)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
                break	
// FITUR JADWAL SHOLAT JADI JANGAN SAMPAI LUPA YA 
// BIAR KAGA LUPA
case 'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=ohayou`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
// ASMAULHUSNA PERNCARIAN
case 'asmaulhusna':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=ohayou`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
// fitur Kisah Nabi Nih Kak Keren Untuk Pengetahuan
case 'kisahnabi':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=ohayou`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
// CASE LANGKA AMONGUS NIH
case 'amongus':
		if (!isRegistered) return reply( ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} WahyuGanss`)
           costum('SABAR LAGI PROSES!!!', text, tescuk, cr)        
           buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=3af90a5d6317457b1f93e921&text=${body.slice(9)}`)
                    client.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
//Case Langka Bisa Buat Ktp Keren Dan kece Habis
case 'ktp':
		if (!isRegistered) return reply( ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} DEVIL BOTZ`)
                  nik = args[0]
                  prov = args[1]
                  kabu = args[2]
                  name = args[3]
                  ttl = args[4]
                  jk = args[5]
                  jl = args[6]
                  rtrw = args[7]
                  lurah = args[8]
                  camat = args[9]
                  agama = args[10]
                  nikah = args[11]
                  kerja = args[12]
                  warga = args[13]
                  until = args[14]
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/ktpmaker?apikey=ohayou&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=https://i.ibb.co/Xb2pZ88/test.jpg`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    break
// menu jodoh Menjodoh Temukan Jodoh anda
case 'jadian':
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			    if (!isRegistered) return reply(ind.noregis())
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
// Siapa Disni Paling Ganteng
case 'terganteng':
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			    if (!isRegistered) return reply(ind.noregis())
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
//SIAPA YANG PALING CANTIK 
case 'tercantik':
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			    if (!isRegistered) return reply(ind.noregis())
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break 
//Fitur Langka Temoji Biasa Pake Emot
case 'temoji':
                    if (isBanned) return reply(ind.baned())
                    if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} `)
                   costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=3af90a5d6317457b1f93e921`)
                    client.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
// fitur Update Keren Stiker Patrik 
// jangan Minta stiker Patrick  Di Bot Dah Ada
//BY CASE DAPPAUHUY
case 'randompatrick':
                    if (isBanned) return reply(ind.baned())
                    if (!isRegistered) return reply(ind.noregis())
			       costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
                   await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/patrick?apikey=ohayou`)
                    client.sendMessage(from, anu, sticker, {quoted:mek})
                    break
// FIRUR ADA YANG EROR JIKA EROR
// LAPOR KETIK #bug
case 'bug':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`Yang mau direport apaan?`)
                     const pesan = body.slice(5)
                      if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        
                       const tekst1 = `*[BUG]*\nNomor : @${nomor.split("@6288215463787s.whatsapp.net")[0]}\nPesan : ${pesan}`
                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('6288215463787@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                    break
// CASE LANGKA PARAH
// KETIK SAYANG BISA DI KICK
case 'sayang':
		if (isLimit(sender)) return reply(ind.limitend(pusname))
	    if (!isRegistered) return reply(ind.noregis())
		if (!isOwner) return reply(ind.ownerb())
		if (!isOwner) return reply(ind.ownerb())
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mencintai :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						 client.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`haii sayang... anu.. @${mentioned[0].split('@')[0]}`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					 client.groupRemove(from, mentioned, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_dah lah gak jadi mending lu mati aja ajg_', text) // ur cods
					}, 20000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_btw aku ada kejutan buat kamu👉👈_', text) // ur cods
					}, 10000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_hwhehe mau gak jadi pacarku??_', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, `_aku sayang kamu..@${mentioned[0].split('@')[0]}_`, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 10s,
					}
					break
// FITUR TAG PALING GG JAIL SEDUNIA
case 'hidetag5':
					if (isBanned) return reply(mess.only.benned)    
				   if (!isOwner) return reply(ind.ownerb())
					
					if (!isGroup) return reply(mess.only.group)
					
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
					break
// Fitur Baru Keren Bro Bisa Colong Stiker
case 'takestick':
						if (!isOwner) return reply(ind.ownerb())
                        if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						const pembawm = body.slice(11)
						if (!pembawm.includes('|')) return await reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						const encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const mediau = await client.downloadAndSaveMediaMessage(encmediau, `./sticker/${sender}`)
                         const packname = pembawm.split('|')[0]
						const author = pembawm.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(ind.error.api)
							client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
// fitur Gg parah 
case 'ocr': 
					// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const mediau = await client.downloadAndSaveMediaMessage(encmediau)
						costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					await limitAdd(sender)
					break
// FITUR BUAT STIKER GIF DAN BIASA BISA
case 'stickergif':
			case 'stikergif':
			case 'sgif':
			case 'stiker': 
			case 'sticker':
			case 's':
				// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						costum('WAIT DI PROSES MOHOM TUNGGU SEBENTAR', text, tescuk, cr)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break
// FITUR KECE NIH BRO UPDATE
// BISA NGOMONG SAMA GOGLE
case 'gtts':
		case 'tts':
				// Fix Case By Wahyu/Gans⛔
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return client.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
		case 'setlimit':
		case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'setlimitt':
		case 'addlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
case 'info':
if (isBanned) return reply('```Lu kebanned kontol```')
    
  me = client.user
  uptime = process.uptime()
  teks = `*‣ Nama bot* : ${me.name}
  ‣ *Nomor Bot* : @${me.jid.split('@')[0]}
  ‣ *Owner* : devil store
  ‣ *Prefix* : [ ${prefix} ]
  ‣ *Total Block Contact* : ${blocked.length}
  ‣ *The bot is active on* : ${kyun(uptime)}
  ‣ *Total User* : ${_registered.length} User
  ‣ *Total Chat* : 1072`
  buffer = await getBuffer(me.imgUrl)
  client.sendMessage(from, buffer, image, {
caption: teks, contextInfo: {
  mentionedJid: [me.jid]}})
  break
case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		case 'setmemlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
					case 'linkgc':
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await client.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				client.sendMessage(from, yeh, text, {quoted: mek})
				await limitAdd(sender)
				break
		case 'jadibot':
					client.sendMessage(from, 'Ada Apa Gerangan Sih Kawan Mau Jadi Bot Kan Kamu Bisa Bikin Sendiri Kawan',MessageType.text, { quoted: mek} )
					break
		case 'self':
costum('SUKSES', text, tescuk, vo)
					break
		case 'bot':
					client.sendMessage(from, 'Iya kak? \nJangan lupa daftar ya kak ^_^"\nJika sudah silahkan berarti sudah terdaftar kak ^_^"',MessageType.text, { quoted: mek} )
					break
		case 'hargaprem':
		case 'hargapremium':
					client.sendMessage(from, 'Level 100 = Free 3 day (premium)\n10k = 30day (premium)',MessageType.text, { quoted: mek} )
					break
		case 'buypremium':
					client.sendMessage(from, 'Ingin membeli premium?\nHarap hubungi kami : wa.me/6288215463787',MessageType.text, { quoted: mek} )
					break
		case 'buypremunlimited':
					
					client.sendMessage(from, 'Selamat kamu sudah berlangganan selamanya 🎉',MessageType.text, { quoted: mek} )
					break
		case 'buyprem30day':
					
					client.sendMessage(from, 'Selamat kamu sudah berlangganan 30 hari',MessageType.text, { quoted: mek} )
					break
		case 'buyprem7day':
					
					client.sendMessage(from, 'Selamat kamu sudah berlangganan 7 hari',MessageType.text, { quoted: mek} )
					break
		case 'test':
					client.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
					break
		case 'piyng':
					client.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
					break
		case 'assalamualaikum':
					client.sendMessage(from, 'Waalaikumusalam',MessageType.text, { quoted: mek} )
					break
		case 'kontol':
					client.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/6285697662826',MessageType.text, { quoted: mek} )
					break

		case 'setingg':
					client.sendMessage(from, 'Chat Owner Ku Chat Spam Kaga Di Tanggain Chat Yang  Sopan Tuh Nomor Nya Bilang Bang Mau Premium Gratis https://api.whatsapp.com/send?phone=6285697662826 Gunakan Dengan SebaiK Baik Nya Oke',MessageType.text, { quoted: mek} )
					break
		case 'ngentod':
					client.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/6285697662826',MessageType.text, { quoted: mek} )
					break
		case 'kntl':
					client.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/6285697662826',MessageType.text, { quoted: mek} )
					break

		case 'wa.me':
		case 'wame':
  					// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
  					if (isLimit(sender)) return reply(ind.limitend(pusname))
  					client.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					client.sendMessage(from, options, text, { quoted: mek } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  					break
		case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`𝘆𝗮𝗵𝗵 @${mentioned[0].split('@')[0]} 𝗷𝗮??𝗮??𝗮𝗻 𝗮𝗱𝗺𝗶𝗻 𝗸𝗮𝗺𝘂 𝘀??𝗱𝗮𝗵 𝗱𝗶 𝗰𝗼𝗽𝗼𝘁🏃`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲?? 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 𝗮𝗻𝗱𝗮 𝗻𝗮𝗶𝗸 𝗺𝗲𝗻??𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿??𝘂𝗽 (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* (+_+)`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
case 'kicktime':
                   if (!isBotGroupAdmins) return reply(ind.badmin())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					client.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('sukses min:D')
					}, 7000)
					setTimeout( () => {
					client.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					client.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					client.sendMessage(from, 'Asikkk Dapet Makanan nihh:D', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah Diterima min:D')
					}, 0)
					break
case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*~>* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
		case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
		case 'blockk':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'leave':
					// Fix Case By Wahyu/Ganss⛔
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Bye cuk🗣', text) // ur cods
					}, 0)
					break
		case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST DEVIL-BOT 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'bcc': 
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST DEVIL BOTZ 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'setpp': 
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   			if (!isBotGroupAdmins) return reply(ind.badmin())
					media = await client.downloadAndSaveMediaMessage(mek)
					await client.updateProfilePicture (from, media)
					reply('*Sukses mengganti icon group*')
					break				
		case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
		case 'grup':
		case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':     
  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
client.sendMessage(from, {displayname: "Jeff", vcard: vcard2}, MessageType.contact, { quoted: mek})
client.sendMessage(from, {displayname: "Jeff", vcard: vcard3}, MessageType.contact, { quoted: mek})
client.sendMessage(from, {displayname: "Jeff", vcard: vcard4}, MessageType.contact, { quoted: mek})
tod = await getBuffer(`./src/HelpJs.jpg`)
                 client.sendMessage(from, tod, image, { quoted: mek, caption: '*INI OWNERKU KU JANGAN DI SPAM *'})
                 break
case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (!isOwner) return reply(ind.ownerb())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻??𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Asek jatah kick, otw kick* 🤭 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`*Asek jatah kick, otw kick* @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
		case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'toimg':
				    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isQuotedSticker) return reply('reply stickernya ngab')
				 reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih ANJING'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
case 'simi':
					if (!isOwner) return reply(ind.ownerb())
					if (!isOwner) return reply(ind.ownerb())
if (args.length < 1) return reply('Textnya mana kak?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
		case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
					break
		case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan ')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('*Fitur nsfw sudah aktif sebelum nya*')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes mengaktifkan mode nsfw di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes menonaktifkan mode nsfw di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
					break
		case 'leveling':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (args[0] === '1') {
					if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
					_leveling.push(from)
					fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvlon())
					} else if (args[0] === '0') {
					_leveling.splice(from, 1)
						fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
						reply(ind.lvloff())
					} else {
						reply(ind.satukos())
					}
					break
		case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'antilink':
                                	if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						client.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
                 case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isAdmin) return reply('*Only Adminban & Owner Kami!*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'eventt':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
		case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('❬ SUCCSESS ❭')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
				case 'wait':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=ohayou`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await getBuffer(get_result.video)
                        txt = `Anilist id : ${get_result.anilist_id}\n`
                        txt += `MAL id : ${get_result.mal_id}\n`
                        txt += `Title Romaji : ${get_result.title_romaji}\n`
                        txt += `Title Native : ${get_result.title_native}\n`
                        txt += `Title English : ${get_result.title_english}\n`
                        txt += `at : ${get_result.at}\n`
                        txt += `Episode : ${get_result.episode}\n`
                        txt += `Eimilarity : ${get_result.similarity}`
                        client.sendMessage(from, ini_video, video, { quoted: mek, caption: txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
				default:
            if (budy.includes(`asalamualaikum`)) {
const Alam = fs.readFileSync('./mp3/salam.mp3');
client.sendMessage(from, Alam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }



		if (budy.includes(`Assalamualaikum`)) {
const Salam = fs.readFileSync('./mp3/salam.mp3');
client.sendMessage(from, Salam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }

        if (budy.includes(`hejjeje`)) {
const sayang = fs.readFileSync('./mp3/Sayang.mp3');
client.sendMessage(from, sayang, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }

       if (budy.includes(`anjijejejjejejejng`)) {
const Vali = fs.readFileSync('./mp3/kasar.mp3');
client.sendMessage(from, Vali, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }


       if (budy.includes(`@6285777064675`)) {
const baby = fs.readFileSync('./sticker/DEVIL');
client.sendMessage(from, baby, MessageType.sticker, {quoted: mek})

                  }
                 
       if (budy.includes(`@6285697662826`)) {
const DEV = fs.readFileSync('./sticker/DEVILBOTZ');
client.sendMessage(from, DEV, MessageType.sticker, {quoted: mek})

                  }


       if (budy.includes(`Bot`)) {
const BOT = fs.readFileSync('./mp3/Bot.mp3');
client.sendMessage(from, BOT, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }

       if (budy.includes(`Halo`)) {
const Hallo = fs.readFileSync('./mp3/AraAra.mp3');
client.sendMessage(from, Hallo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }

        if (budy.includes(`Kontol`)) {
const baka = fs.readFileSync('./mp3/Baka.mp3');
client.sendMessage(from, baka, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})


                  



                  }



		if (budy.includes(`Sayang`)) {

                  reply(`Aku Juga Sayang Kamu Kak😍`)

                  }



		if (budy.includes(`pjjrjendnnnenea`)) {
const Banai = fs.readFileSync('./mp3/kasar.mp3');
client.sendMessage(from, Banai, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }



		if (budy.includes(`saniejeiejenejjge`)) {
const Peli = fs.readFileSync('./mp3/kasar.mp3');
client.sendMessage(from, Peli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }





		if (budy.includes(`gijehebehhehla`)) {
const Mau = fs.readFileSync('./mp3/kasar.mp3');
client.sendMessage(from, Mau, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }



		if (budy.includes(`Bohdjdjdjt`)) {
const apaya = fs.readFileSync('./mp3/Apaya.mp3');
client.sendMessage(from, apaya, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }


		if (budy.includes(`Makasih`)) {

                  reply(`Sama-sama ${pushname}`)

                  }
            
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})