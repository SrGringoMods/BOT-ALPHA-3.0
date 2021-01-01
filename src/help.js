const help = (prefix) => {
	return `
╔════════════════════
║        🌹𝐀𝐋𝐏𝐇𝐀 𝐁𝐎𝐓🌹
╠════════════════════
║
╠════✪〘 𝗙𝗜𝗚𝗨𝗥𝗜𝗡𝗛𝗔 〙✪═════
║
╠➣ COMANDO: ${prefix}sticker
╠➣ DESC: Converter em figurinha
╠➣ USO: Converter em figurinha\n
║
╠➣ COMANDO: ${prefix}sticker nobg
╠➣ DESC: Imagem em figurinha sem fundo
╠➣ USO:  Enviar imagem com legenda\n
║
╠➣ COMANDO: ${prefix}toimg
╠➣ DESC: Converter figurinha em imagem
╠➣ USO: Figurinha de resposta\n
║
╠➣ COMANDO: ${prefix}tsticker
╠➣ DESC: Converter texto em Figurinha
╠➣ USO: ${prefix}tsticker [seu texto]\n
║
╠═════✪〘 𝗠𝗘𝗠𝗘 〙✪══════
║
╠➣ COMANDO: ${prefix}meme
╠➣ DESC: Imagens aleatórias de meme [english]
╠➣ USO: Apenas envie o comando\n
║
╠➣ COMANDO: ${prefix}memeindo
╠➣ DESC: Imagens aleatórias de meme [indo]
╠➣ USO: Apenas envie o comando\n
║
╠═════✪〘 𝗢𝗨𝗧𝗥𝗢𝗦 〙✪═════  
║
╠➣ COMANDO: ${prefix}gtts
╠➣ DESC: Fazer o bot gravar áudio
╠➣ USO: ${prefix}gtts [cc] [text]\n
╠➣ EXEMPLO: ${prefix}gtts ja On2-chan\n
║
╠➣ COMANDO: ${prefix}loli
╠➣ DESC: Imagens de loli
╠➣ USO: Apenas envie o comando\n
║
╠➣ COMANDO: ${prefix}nsfwloli
╠➣ DESC: Imagens de nsfw loli
╠➣ USO: Apenas envie o comando\n
║
╠➣ COMANDO: ${prefix}url2img
╠➣ DESC: Tirar screenshots da web
╠➣ USO: ${prefix}url2img [tipe] [url]\n
║
╠➣ COMANDO: ${prefix}simi
╠➣ DESC: Sua mensagem será respondida por simi
╠➣ USO: ${prefix}simi [sua mensagem]\n
║
╠➣ COMANDO: ${prefix}ocr
╠➣ DESC: Pegue o texto na foto
╠➣ USO: Enviar imagem com legenda\n
║
╠➣ COMANDO: ${prefix}wait
╠➣ DESC: Procure anime [Que anime é]
╠➣ USO: Enviar imagem com legenda\ n
║
╠➣ COMANDO: *${prefix}setprefix
╠➣ DESC: Substituir prefixo
╠➣ USO: ${prefix}setprefix [text|optional]\n
╠➣ EXEMPLO: ${prefix}setprefix /
╠➣ NOTA: Usado  pelo proprietário do bot\n
║
╠═════✪〘 𝗚𝗥𝗨𝗣𝗢 〙✪═════
║
╠➣ COMANDO: ${prefix}add
╠➣ DESC: Adicionar membro ao grupo
╠➣ USO: ${prefix}add 55xxxxxxxx\n
╠➣ NOTA: Usado quando o bot é admin!\n
║
╠➣ COMANDO: ${prefix}kick
╠➣ DESC: Banir membros do grupo
╠➣ USO: ${prefix}kick @tagmember\n
╠➣ NOTA: Usado quando o bot é admin!\n
║
╠➣ COMANDO: ${prefix}promote
╠➣ DESC: Torna um membro como adm 
╠➣ USO: ${prefix}promote @tagmember\n
╠➣ NOTA: Usado quando o bot é admin! \ n
║
╠➣ COMANDO: ${prefix}demote
╠➣ DESC: Tornar o um adm como membro
╠➣ USO: ${prefix}demote @tagmember\n
╠➣ NOTA: Usado quando o bot é admin!\n
║
╠➣ COMANDO: ${prefix}linkgroup
╠➣ DESC: Enviar o link do grupo
╠➣ USO: Apenas envie o comando
╠➣ NOTA: Usado quando o bot é admin!\n
║
╠➣ COMANDO: ${prefix}tagall
╠➣ DESC: Marca todos do grupo
╠➣ USO: Apenas envie o comando
╠➣ NOTA: Usado se você for um adm do grupo!\n
║
╠➣ COMANDO: ${prefix}simih
╠➣ DESC: Ative o modo simi no grupo
╠➣ ATIVAR: ${prefix}simih 1 para ativar 
╠➣ DESATIVAR: ${prefix}simih 0* para desativar 
╠➣ NOTA: Usado quando você é adm do grupo\n
║
╠════════════════════
║  🌹𝐁𝐘 𝐒𝐑 𝐆𝐑𝐈𝐍𝐆𝐎 𝐌𝐎𝐃𝐃𝐄𝐑🌹
╚════════════════════`
}

exports.help = help
