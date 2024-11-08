const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "check bot online or no.",
    category: "main",
    filename:__filename
},
ansync(conn, mek, m,{from, quoted, body,isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isAdmins, reply}) =>
try{
return await conn.sendMessage(frome,{image:{url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
