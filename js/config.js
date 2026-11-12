// ============================================================
// config.js — the only file you need to edit
// Everything on the page comes from here.
// ============================================================

const CONFIG = {

  // ----------------------------------------------------------
  // IDENTITY
  // ----------------------------------------------------------
  username:     "Monkey",          // name on the card
  nameTooltip:  "🙈🙉🙊", // shown on hover over the name 
  tabTitle:     "@Chango says hi",         // browser tab text
  entryText:    "[ @Monkey ]",// text on the entry screen
  views:        "4.9K",            // view counter, top-right
  POB:     "90304",          // pin line under the badges

  // ----------------------------------------------------------
  // FILES — put them in assets/ with these names (URLs work too)
  // ----------------------------------------------------------
  avatar:           "assets/avatar.jpg",
  avatarDecoration: "assets/decoration.png",  // "" to disable
  backgroundVideo:  "assets/background.mp4",
  customCursor:     "assets/cursor.png",      // "" for the normal cursor

  backgroundVideoOnIOS: true,                  // false = iPhone/iPad show no video
  backgroundImage:  "assets/background.webp",    // "" for none — GIF/WebP/JPG, used when the video is off

  // ----------------------------------------------------------
  // BIO — leave "" for no bio line
  // ----------------------------------------------------------
  bio: "",

  // ----------------------------------------------------------
  // TAGS (the small pills under the bio)
  // Add or remove lines freely.
  // ----------------------------------------------------------
  tags: [
    { label: "C++ / MALWARE", emoji: "🪤" },
    { label: "Gn 2:2-3",      emoji: "✟" },
  ],

  // ----------------------------------------------------------
  // BADGES — emoji + colour, or use "img: "assets/badges/x.png"
  // Add or remove lines freely.
  // ----------------------------------------------------------
  badges: [
    { label: "Gambler",           emoji: "฿", color: "#00870B" },
    { label: "⁷",      emoji: "Ⅶ", color: "#46BFF2" },
    { label: "Trending",          emoji: "🌟", color: "#FCEC14" },
    { label: "Verified",  emoji: "√", color: "#23A835" },
    { label: "Exploit.in",       emoji: "♕", color: "#FC0808" },
    { label: "UUID:1",         emoji: "🥇", color: "#F5B916" },
  ],

  // ----------------------------------------------------------
  // LINKS — copy a line to add another one
  //   icon: instagram | telegram | github | bitcoin | tiktok |
  //         spotify | x | discord | youtube
  //   (or point "icon" at your own image: icon: "assets/icons/x.png")
  // ----------------------------------------------------------
  links: [
    { name: "Instagram", icon: "instagram", url: "https://instagram.com/Callbluff",   color: "#3b82f6" },
    { name: "Instagram", icon: "instagram", url: "https://instagram.com/Killapacc",   color: "#3b82f6" },
    { name: "Telegram",  icon: "telegram",  url: "https://t.me/C42LA",                color: "#3b82f6" },
    { name: "GitHub",    icon: "github",    url: "https://github.com/yourname",       color: "#3b82f6" },
  ],
  linkSize: "40px",

  // ----------------------------------------------------------
  // MUSIC — your song goes in assets/song.mp3
  // Add more tracks by copying a line, then next/prev will work.
  // ----------------------------------------------------------
  tracks: [
    {
      title:  "TEAM",
      artist: "GoGettaKb",
      cover:  "assets/cover.jpg",
      src:    "assets/song.mp3",   // <-- YOUR SONG FILE
      url:    "",                  // optional link on the title
    },
  ],
  volume:    0.35,
  autoplay:  true,   // starts on the entry click

  // ----------------------------------------------------------
  // LOOK
  // ----------------------------------------------------------
  accent:        "#ffffff",
  cardMaxWidth:  505,
  tilt:          true,
  tiltIntensity: 12,
  snowfall:      true,
  cursorTrail:   true,
  hideScrollbar: true,

};
