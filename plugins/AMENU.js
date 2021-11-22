const Amazon = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: Config.TIME_ZONE })
const Language = require('../language');
const Lang = Language.getString('amazone');
const tk = Config.WORKTYPE == 'public' ? false : true

Amazon.addCommand({pattern: 'shashiya', fromMe: tk, desc: Lang.MENU}, (async (message, match) => {
    var time = new Date().toLocaleString('SI', { timeZone: Config.TIME_ZONE }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ᴳᴼᴼᴰ ᴹᴼᴿᴺᴵᴺᴳ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

    var respoimage = await axios.get(`${Config.MENU_LOGO}`, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `        
≛  *W͎A͎ T͎O͎O͎L ͎ K͎I͎T͎ B͎O͎T͎*  ≛
       «───────»
 
 ╭ᷘ─ⷷ─ͮ─ͥ─ᷞ─ᷤ─ⷩ─ᷧ─ᷤ─ⷩ─ͥ─ⷱ─ᷧ☆⇢
 │
 │ ✵⋆  .alexa [All command list]
 │ ✵⋆  .alive [Check bot status]
 │ ✵⋆  .bot [chat with bot]
 │ ✵⋆  .Admin [ for owner ]
 │ ✵⋆  .version [check Version 
 │ ✵⋆  .update [check Update]
 │ ✵⋆  .update now [get update ]
 │ ✵⋆  .restart 
 │
 │ 🧩𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦🧩
 │      ───────
 │ ✵⋆  .attp [text ]
 │ ✵⋆  .sticker
 │ ✵⋆  .photo
 │ ✵⋆  .listp
 │
 │ ✏️𝗧𝗘𝗫𝗧 𝗧𝗢 𝗜𝗠𝗚‍✏️
 │   ───────
 │ ✵⋆  .textimg 
 │ ✵⋆  .prologo (unlimited logos)
 │ ✵⋆  .prologo your Text
 │ ✵⋆  .moretext 
 │ ✵⋆  .ffpack [Free fire Logo pack]
 │ ✵⋆  .ttp [ text ]
 │ ✵⋆  .dttp [ text ]
 │ ✵⋆  .trumpsay [ text ]
 │ ✵⋆  .changesay [ text ]
 │ ✵⋆  .animesay [ text ]
 │ ✵⋆  .meme 
 │ ✵⋆  .listp
 │ ✵⋆  .mmpack
 │
 │ ⬇️𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦⬇️
 │      ────────
 │ ✵⋆  .video [ Yt Link]
 │ ✵⋆  .mp4    [Name]
 │ ✵⋆  .audio  [yt link ]
 │ ✵⋆  .download  [status download]
 │ ✵⋆  .song  [ song name ]
 │ ✵⋆  .dcsong [ song name ]
 │ ✵⋆  .img [ name ]
 │ ✵⋆  .fb  link ]
 │ ✵⋆  .tiktok [ link ]
 │ ✵⋆  .vinsta  [ Insta Video ]
 │ ✵⋆  .pinsta [ Insta Post ]
 │ ✵⋆  .twt [twitter video Link]
 │ ✵⋆  .mediafire
 │
 │🔍𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦🔍
 │     ──────────
 │ ✵⋆  .yt [ topic ]
 │ ✵⋆  .wiki [text ]
 │ ✵⋆  .movie [ movie name ]
 │ ✵⋆  .github [ name ]
 │ ✵⋆  .show [tv series ]
 │ ✵⋆  .weather [ city ]
 │
 │🈂️𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦🈂️
 │  ─────────
 │ ✵⋆  .rename [change Group name]
 │ ✵⋆  .rules    [check rules]
 │ ✵⋆  .info [check details]
 │ ✵⋆  .tagadmin 
 │ ✵⋆  .antispm
 │ ✵⋆  .clear
 │ ✵⋆  .report
 │ ✵⋆  .tagall  
 │ ✵⋆  .ban [ for owner ]
 │ ✵⋆  .add [ for owner ]
 │ ✵⋆  .promote [ for owner ]
 │ ✵⋆  .demote [ for owner ]
 │ ✵⋆  .invite [ for owner ]
 │ ✵⋆  .leave [ for owner ]
 │ ✵⋆  .welcome 
 │ ✵⋆  .goodbye
 │
 │🎨𝗠𝗘𝗗𝗜𝗔 𝗧𝗢𝗢𝗟𝗦🎨
 │      ───────
 │ ✵⋆  .axmedia [25+ tools]
 │ ✵⋆  .tblend
 │ ✵⋆  .ocr [Read Text]
 │ ✵⋆  .mp3 [Video To mp3]
 │ ✵⋆  .ffmpeg [fade in:0:30 ]
 │ ✵⋆  .removebg
 │ ✵⋆  .spdf [convent site to pdf]
 │ ✵⋆  .voicy
 │ ✵⋆  .unvoice [mp3 to voice]
 │
 │⚡️𝗠𝗢𝗥𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗⚡️
 │  ────────
 │ ✵⋆  .scan
 │ ✵⋆  .brdmore
 │ ✵⋆  .rdmore
 │ ✵⋆  .tts
 │ ✵⋆  .gm
 │ ✵⋆  .gn
 │ ✵⋆  .ftext
 │ ✵⋆  .wallpaper
 │ ✵⋆  .anime
 │ ✵⋆  .listanim
 │ ✵⋆  .device
 │ ✵⋆  .currency
 │ ✵⋆  .ss [link ]
 │ ✵⋆  .afk [ bot is online ]
 │ ✵⋆  .short { link ]
 │ ✵⋆  .wame [ get user link ]
 │ ✵⋆  .currency
 │ ✵⋆  .trt { en si }
 │ ✵⋆  .notes
 │ ✵⋆  .save
 │ ✵⋆  .deleteNotes
 │ ✵⋆  .covid  [ covid LK]
 │
 │⚙️𝗕𝗢𝗧 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦⚙️
 │    ───────
 │ ✵⋆  .pp [set profilr pic]
 │ ✵⋆  .autobio on/off [change bio ]
 │ ✵⋆  .whatsblock on [WA link Block]
 │ ✵⋆  .inblock on /off 
 │ ✵⋆  .work public /private
 │ ✵⋆  .setrules
 │ ✵⋆  .setvar
 │ 
 │    
 │©️Asanga Udara
 ╰───────────☆⇢
 
`}) 

 }));
