const meme = (prefix, botName, ownerName) => {
	return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerName}
◪ *SOBRE*
  │
  ├─ ❏ ${prefix}info (Info Del Bot)
  ├─ ❏ ${prefix}blocklist (Lista De Usuarios Bloqueados)
  ├─ ❏ ${prefix}chatlist (Lista De Chat)
  ├─ ❏ ${prefix}ping (Velocidad Del Bot)
  └─ ❏ ${prefix}bugreport (Reportar Bug)
◪ *MEME*
  │
  ├─ ❏ ${prefix}meme
  └─ ❏ ${prefix}memeindo`
}
exports.meme = meme
