// ============================================================
// script.js — page logic
// You don't need to edit this file. Everything lives in config.js
// ============================================================

// Built-in icons (SVG paths). Add your own key here to reuse it.
const ICONS = {
  instagram: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
  telegram:  "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
  github:    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  bitcoin:   "M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z",
  tiktok:    "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  spotify:   "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z",
  x:         "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  discord:   "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1278 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189m7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189",
  youtube:   "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
};

document.addEventListener("DOMContentLoaded", () => {

  document.title = CONFIG.tabTitle || CONFIG.username;
  if (CONFIG.hideScrollbar) document.documentElement.classList.add("no-scrollbar");

  document.documentElement.style.setProperty("--accent", CONFIG.accent || "#ffffff");
  document.documentElement.style.setProperty("--card-max-width", (CONFIG.cardMaxWidth || 505) + "px");
  document.documentElement.style.setProperty("--link-size", CONFIG.linkSize || "40px");

  // ----------------------------------------------------------
  // Header content
  // ----------------------------------------------------------
  document.getElementById("entry-text").textContent = CONFIG.entryText;
  document.getElementById("views-count").textContent = CONFIG.views;
  document.getElementById("name-inner").textContent = CONFIG.username;
  document.getElementById("name-tooltip").textContent = CONFIG.nameTooltip || "";
  document.getElementById("location-text").textContent = CONFIG.location || "";
  document.getElementById("bio").textContent = CONFIG.bio || "";

  // ----------------------------------------------------------
  // Avatar + decoration
  // ----------------------------------------------------------
  const avatar = document.getElementById("avatar");
  avatar.src = CONFIG.avatar;
  // if the file is missing, stay on the built-in gradient disc
  avatar.addEventListener("error", () => avatar.removeAttribute("src"));

  const decoration = document.getElementById("avatar-decoration");
  if (CONFIG.avatarDecoration) {
    decoration.src = CONFIG.avatarDecoration;
    decoration.addEventListener("error", () => { decoration.style.display = "none"; });
  } else {
    decoration.style.display = "none";
  }

  // ----------------------------------------------------------
  // Badges
  // ----------------------------------------------------------
  const badgesEl = document.getElementById("badges");
  (CONFIG.badges || []).forEach((badge) => {
    const span = document.createElement("span");
    span.className = "badge";
    span.style.color = badge.color || "#ffffff";

    const tip = document.createElement("span");
    tip.className = "tooltip";
    tip.textContent = badge.label || "";

    if (badge.img) {
      const img = document.createElement("img");
      img.src = badge.img;
      img.alt = badge.label || "";
      span.appendChild(img);
    } else {
      span.appendChild(document.createTextNode(badge.emoji || "★"));
    }

    span.appendChild(tip);
    badgesEl.appendChild(span);
  });

  // ----------------------------------------------------------
  // Tag pills
  // ----------------------------------------------------------
  const tagsEl = document.getElementById("tags");
  (CONFIG.tags || []).forEach((tag) => {
    const pill = document.createElement("span");
    pill.className = "tag";

    if (tag.emoji) {
      const icon = document.createElement("span");
      icon.className = "tag-icon";
      icon.textContent = tag.emoji;
      pill.appendChild(icon);
    }

    pill.appendChild(document.createTextNode(tag.label));
    tagsEl.appendChild(pill);
  });

  // ----------------------------------------------------------
  // Links — icon is either a built-in name or a file path
  // ----------------------------------------------------------
  const linksEl = document.getElementById("links");
  (CONFIG.links || []).forEach((link) => {
    if (!link || !link.url) return;

    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.title = link.name || "";
    a.style.color = link.color || "#3b82f6";

    const isFile = /[\/.]/.test(link.icon || "");
    if (isFile) {
      const img = document.createElement("img");
      img.className = "link-img";
      img.src = link.icon;
      img.alt = link.name || "";
      a.appendChild(img);
    } else {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("class", "link-icon");
      svg.setAttribute("aria-label", link.name || "");
      svg.setAttribute("role", "img");
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("fill", "currentColor");
      path.setAttribute("d", ICONS[link.icon] || ICONS.github);
      svg.appendChild(path);
      a.appendChild(svg);
    }

    linksEl.appendChild(a);
  });

  // ----------------------------------------------------------
  // Background video + custom cursor
  // ----------------------------------------------------------
  // Background video. It can fail in three different ways, and they all
  // look identical (black screen): the file is named differently than the
  // config says, the file exists but the browser cannot decode it (an
  // iPhone .mov / HEVC clip, for example), or the browser blocked autoplay.
  // So: try the configured name plus the usual extensions, retry playback
  // on the first click, and say clearly in the console what was tried.
  const video = document.getElementById("bg-video");
  video.muted = true;
  video.playsInline = true;
  video.setAttribute("playsinline", "");
  video.preload = "auto";

  const wantedVideo = CONFIG.backgroundVideo || "";
  const videoBase = wantedVideo.replace(/\.[^./\\]+$/, "");
  const videoCandidates = wantedVideo
    ? [...new Set([wantedVideo, videoBase + ".mp4", videoBase + ".webm", videoBase + ".mov", videoBase + ".m4v"])]
    : [];
  let videoIndex = 0;

  function playVideo() {
    const p = video.play();
    if (p && p.catch) p.catch(() => {}); // blocked: retried on a click
  }

  function tryNextVideo() {
    videoIndex += 1;
    if (videoIndex >= videoCandidates.length) {
      video.style.display = "none";
      console.warn(
        "[background-video] nothing playable found. Looked for: " + videoCandidates.join(", ") +
        ". Put the clip at " + (wantedVideo || "assets/background.mp4") +
        " with that exact name, saved as an H.264 MP4 (or WebM) rather than .mov/HEVC."
      );
      return;
    }
    video.src = videoCandidates[videoIndex];
    video.load();
    playVideo();
  }

  video.addEventListener("error", tryNextVideo);
  video.addEventListener("playing", () => { video.style.display = ""; });

    if (useVideo) {
    video.src = wantedVideo;
    playVideo();
  } else {
    video.removeAttribute("src");
    video.style.display = "none";
  }

  // Image background (GIF, WebP, JPG) for whenever the video isn't used —
  // iOS, or no video file. An animated GIF plays as a plain image on iOS,
  // with no player and nothing that can take over the screen.
  if (CONFIG.backgroundImage && !useVideo) {
    const bg = document.createElement("div");
    bg.id = "bg-image";
    bg.style.backgroundImage = `url("${CONFIG.backgroundImage}")`;
    document.body.appendChild(bg);

    const probe = new Image();
    probe.onerror = () => console.warn(
      "[background-image] " + CONFIG.backgroundImage +
      " did not load, so the background stays plain black."
    );
    probe.src = CONFIG.backgroundImage;
  }

  // Autoplay can be refused until the page has been touched; the entry
  // screen click counts, and this catches it wherever it happens.
  ["click", "pointerdown", "keydown", "touchstart"].forEach((evt) => {
    window.addEventListener(evt, () => {
      if (video.style.display !== "none" && video.paused) playVideo();
    }, { passive: true });
  });

  // Custom cursor. Browsers silently ignore a cursor image that fails to
  // load or is bigger than 32x32 (they just show the normal arrow), so we
  // load it first, shrink it when needed, and warn in the console if the
  // file is missing instead of failing quietly.
  if (CONFIG.customCursor) {
    const cursorBase = CONFIG.customCursor.replace(/\.[^./\\]+$/, "");
    const cursorCandidates = [...new Set([
      CONFIG.customCursor, cursorBase + ".png", cursorBase + ".gif", cursorBase + ".cur",
      cursorBase + ".jpg", cursorBase + ".jpeg", cursorBase + ".webp",
    ])];
    let cursorIndex = 0;

    const tryNextCursor = () => {
      cursorIndex += 1;
      if (cursorIndex >= cursorCandidates.length) {
        console.warn(
          "[cursor] could not load " + cursorCandidates.join(" / ") +
          ", so the normal cursor stays. Drop the image in assets/ with that exact name (32x32 px or smaller works best)."
        );
        return;
      }
      loadCursor(cursorCandidates[cursorIndex]);
    };

    const loadCursor = (path) => {
      const img = new Image();
      img.onload = () => {
        const MAX = 32;
        let src = path;
        if (img.naturalWidth > MAX || img.naturalHeight > MAX) {
          // browsers ignore oversized cursor images, so shrink it first
          try {
            const scale = MAX / Math.max(img.naturalWidth, img.naturalHeight);
            const c = document.createElement("canvas");
            c.width  = Math.max(1, Math.round(img.naturalWidth  * scale));
            c.height = Math.max(1, Math.round(img.naturalHeight * scale));
            c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
            src = c.toDataURL("image/png");
          } catch (_) { src = path; }
        }
        const style = document.createElement("style");
        style.textContent = `* { cursor: url("${src}") 0 0, auto !important; }`;
        document.head.appendChild(style);
      };
      img.onerror = tryNextCursor;
      img.src = path;
    };

    loadCursor(cursorCandidates[0]);
  }

  // ----------------------------------------------------------
  // Music player
  // ----------------------------------------------------------
  const audio       = document.getElementById("audio");
  const cover       = document.getElementById("track-cover");
  const titleEl     = document.getElementById("track-title");
  const artistEl    = document.getElementById("track-artist");
  const timeCurrent = document.getElementById("time-current");
  const timeTotal   = document.getElementById("time-total");
  const progress    = document.getElementById("progress");
  const progressFill= document.getElementById("progress-fill");
  const playIcon    = document.getElementById("play-icon");
  const pauseIcon   = document.getElementById("pause-icon");

  const tracks = CONFIG.tracks || [];
  let current  = 0;

  function fmt(sec) {
    if (!isFinite(sec) || sec < 0) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m + ":" + String(s).padStart(2, "0");
  }

  function loadTrack(index, autoplay) {
    if (!tracks.length) return;
    current = (index + tracks.length) % tracks.length;
    const t = tracks[current];

    audio.src = t.src;
    audio.volume = typeof CONFIG.volume === "number" ? CONFIG.volume : 0.35;
    cover.src = t.cover || "";
    cover.onerror = () => cover.removeAttribute("src");
    titleEl.textContent = t.title || "unknown track";
    artistEl.textContent = t.artist || "";
    titleEl.href = t.url || "#";
    timeCurrent.textContent = "0:00";
    timeTotal.textContent = "0:00";
    progressFill.style.width = "0%";

    if (autoplay) audio.play().catch(() => {});
  }

  function setPlaying(isPlaying) {
    playIcon.style.display  = isPlaying ? "none" : "block";
    pauseIcon.style.display = isPlaying ? "block" : "none";
    document.getElementById("play-btn").setAttribute("aria-label", isPlaying ? "Pause track" : "Play track");
  }

  if (tracks.length) {
    loadTrack(0, false);

    document.getElementById("play-btn").addEventListener("click", () => {
      if (audio.paused) audio.play().catch(() => {});
      else audio.pause();
    });
    document.getElementById("prev-btn").addEventListener("click", () => loadTrack(current - 1, true));
    document.getElementById("next-btn").addEventListener("click", () => loadTrack(current + 1, true));

    audio.addEventListener("play",  () => setPlaying(true));
    audio.addEventListener("pause", () => setPlaying(false));

    audio.addEventListener("loadedmetadata", () => {
      timeTotal.textContent = fmt(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      timeCurrent.textContent = fmt(audio.currentTime);
      const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
      progressFill.style.width = pct + "%";
    });

    progress.addEventListener("click", (e) => {
      const rect = progress.getBoundingClientRect();
      if (!audio.duration) return;
      audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
    });
  }

  // ----------------------------------------------------------
  // Entry click — start everything
  // ----------------------------------------------------------
  const entryScreen = document.getElementById("entry-screen");
  const card = document.getElementById("card");
  let entered = false;

  function enter() {
    if (entered) return;
    entered = true;

    entryScreen.classList.add("hidden");
    card.classList.add("revealed");

    if (CONFIG.autoplay && tracks.length) audio.play().catch(() => {});

    card.style.transform = "translateY(0)";
  }

    // iOS can swallow a plain click, so listen for the touch itself as well.
  // enter() ignores repeats, so firing twice is harmless.
  ["click", "pointerdown", "touchstart"].forEach((evt) => {
    entryScreen.addEventListener(evt, enter, { passive: true });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") enter();
  });

  // ----------------------------------------------------------
  // Volume button — mutes audio + video together
  // ----------------------------------------------------------
  const volumeBtn = document.getElementById("volume-btn");
  volumeBtn.addEventListener("click", () => {
    const muting = !audio.muted;
    audio.muted = muting;
    video.muted = muting;
    volumeBtn.style.opacity = muting ? "0.45" : "1";
  });

  // ----------------------------------------------------------
  // 3D tilt
  // ----------------------------------------------------------
  if (CONFIG.tilt) {
    const intensity = CONFIG.tiltIntensity || 10;
    card.classList.add("tilting");

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform =
        `perspective(1000px) rotateX(${(-y * intensity).toFixed(2)}deg) rotateY(${(x * intensity).toFixed(2)}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  }

  // ----------------------------------------------------------
  // Effects
  // ----------------------------------------------------------
  if (CONFIG.snowfall)    initLogoRain();
  if (CONFIG.cursorTrail) initCursorTrail();
});


// ============================================================
// FALLING LANGUAGE LOGOS
// ============================================================
function initLogoRain() {
  const canvas = document.getElementById("snow-canvas");
  const ctx = canvas.getContext("2d");

  // The official language logos, embedded as data URIs (from Devicon, MIT
  // licensed) so nothing is downloaded at runtime and no file can go
  // missing. Every logo is a 128x128 SVG, so drawImage can scale it to the
  // tile size directly.
  const LOGOS = [
    { name: "Python",   src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48bGluZWFyR3JhZGllbnQgaWQ9InB5dGhvbi1vcmlnaW5hbC1hIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjcwLjI1MiIgeTE9IjEyMzcuNDc2IiB4Mj0iMTcwLjY1OSIgeTI9IjExNTEuMDg5IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC41NjMgMCAwIC0uNTY4IC0yOS4yMTUgNzA3LjgxNykiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzVBOUZENCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwNjk5OCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJweXRob24tb3JpZ2luYWwtYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMDkuNDc0IiB5MT0iMTA5OC44MTEiIHgyPSIxNzMuNjIiIHkyPSIxMTQ5LjUzNyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguNTYzIDAgMCAtLjU2OCAtMjkuMjE1IDcwNy44MTcpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNGRkQ0M0IiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkU4NzMiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjcHl0aG9uLW9yaWdpbmFsLWEpIiBkPSJNNjMuMzkxIDEuOTg4Yy00LjIyMi4wMi04LjI1Mi4zNzktMTEuOCAxLjAwNy0xMC40NSAxLjg0Ni0xMi4zNDYgNS43MS0xMi4zNDYgMTIuODM3djkuNDExaDI0LjY5M3YzLjEzN0gyOS45NzdjLTcuMTc2IDAtMTMuNDYgNC4zMTMtMTUuNDI2IDEyLjUyMS0yLjI2OCA5LjQwNS0yLjM2OCAxNS4yNzUgMCAyNS4wOTYgMS43NTUgNy4zMTEgNS45NDcgMTIuNTE5IDEzLjEyNCAxMi41MTloOC40OTFWNjcuMjM0YzAtOC4xNTEgNy4wNTEtMTUuMzQgMTUuNDI2LTE1LjM0aDI0LjY2NWM2Ljg2NiAwIDEyLjM0Ni01LjY1NCAxMi4zNDYtMTIuNTQ4VjE1LjgzM2MwLTYuNjkzLTUuNjQ2LTExLjcyLTEyLjM0Ni0xMi44MzctNC4yNDQtLjcwNi04LjY0NS0xLjAyNy0xMi44NjYtMS4wMDh6TTUwLjAzNyA5LjU1N2MyLjU1IDAgNC42MzQgMi4xMTcgNC42MzQgNC43MjEgMCAyLjU5My0yLjA4MyA0LjY5LTQuNjM0IDQuNjktMi41NiAwLTQuNjMzLTIuMDk3LTQuNjMzLTQuNjktLjAwMS0yLjYwNCAyLjA3My00LjcyMSA0LjYzMy00LjcyMXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTAuMjYpIi8+PHBhdGggZmlsbD0idXJsKCNweXRob24tb3JpZ2luYWwtYikiIGQ9Ik05MS42ODIgMjguMzh2MTAuOTY2YzAgOC41LTcuMjA4IDE1LjY1NS0xNS40MjYgMTUuNjU1SDUxLjU5MWMtNi43NTYgMC0xMi4zNDYgNS43ODMtMTIuMzQ2IDEyLjU0OXYyMy41MTVjMCA2LjY5MSA1LjgxOCAxMC42MjggMTIuMzQ2IDEyLjU0NyA3LjgxNiAyLjI5NyAxNS4zMTIgMi43MTMgMjQuNjY1IDAgNi4yMTYtMS44MDEgMTIuMzQ2LTUuNDIzIDEyLjM0Ni0xMi41NDd2LTkuNDEySDYzLjkzOHYtMy4xMzhIMTAwLjk1YzcuMTc2IDAgOS44NTItNS4wMDUgMTIuMzQ4LTEyLjUxOSAyLjU3OC03LjczNSAyLjQ2Ny0xNS4xNzQgMC0yNS4wOTYtMS43NzQtNy4xNDUtNS4xNjEtMTIuNTIxLTEyLjM0OC0xMi41MjFoLTkuMjY4ek03Ny44MDkgODcuOTI3YzIuNTYxIDAgNC42MzQgMi4wOTcgNC42MzQgNC42OTIgMCAyLjYwMi0yLjA3NCA0LjcxOS00LjYzNCA0LjcxOS0yLjU1IDAtNC42MzMtMi4xMTctNC42MzMtNC43MTkgMC0yLjU5NSAyLjA4My00LjY5MiA0LjYzMy00LjY5MnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTAuMjYpIi8+PHJhZGlhbEdyYWRpZW50IGlkPSJweXRob24tb3JpZ2luYWwtYyIgY3g9IjE4MjUuNjc4IiBjeT0iNDQ0LjQ1IiByPSIyNi43NDMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCAtLjI0IC0xLjA1NSAwIDUzMi45NzkgNTU3LjU3NikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNCOEI4QjgiIHN0b3Atb3BhY2l0eT0iLjQ5OCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzdGN0Y3RiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48cGF0aCBvcGFjaXR5PSIuNDQ0IiBmaWxsPSJ1cmwoI3B5dGhvbi1vcmlnaW5hbC1jKSIgZD0iTTk3LjMwOSAxMTkuNTk3YzAgMy41NDMtMTQuODE2IDYuNDE2LTMzLjA5MSA2LjQxNi0xOC4yNzYgMC0zMy4wOTItMi44NzMtMzMuMDkyLTYuNDE2IDAtMy41NDQgMTQuODE1LTYuNDE3IDMzLjA5Mi02LjQxNyAxOC4yNzUgMCAzMy4wOTEgMi44NzIgMzMuMDkxIDYuNDE3eiIvPjwvc3ZnPg==" },
    { name: "C++",      src: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDA1OTljIiBkPSJNMTE4Ljc2NiA5NS44MmMuODktMS41NDMgMS40NDEtMy4yOCAxLjQ0MS00Ljg0M1YzNi43OGMwLTEuNTU4LS41NS0zLjI5Ny0xLjQ0MS00Ljg0bC01NS4zMiAzMS45NFptMCAwIi8+PHBhdGggZmlsbD0iIzAwNDQ4MiIgZD0ibTY4LjM2IDEyNi41ODYgNDYuOTMzLTI3LjA5NGMxLjM1Mi0uNzgxIDIuNTgyLTIuMTI5IDMuNDczLTMuNjcybC01NS4zMi0zMS45NEw4LjEyIDk1LjgyYy44OSAxLjU0MyAyLjEyMSAyLjg5IDMuNDczIDMuNjcybDQ2LjkzMyAyNy4wOTRjMi43MDMgMS41NjIgNy4xMyAxLjU2MiA5LjgzMiAwWm0wIDAiLz48cGF0aCBmaWxsPSIjNjU5YWQyIiBkPSJNMTE4Ljc2NiAzMS45NDFjLS44OTEtMS41NDYtMi4xMjEtMi44OTQtMy40NzMtMy42NzFMNjguMzU5IDEuMTcyYy0yLjcwMy0xLjU2My03LjEyOS0xLjU2My05LjgzMiAwTDExLjU5NCAyOC4yN0M4Ljg5IDI5LjgyOCA2LjY4IDMzLjY2IDYuNjggMzYuNzh2NTQuMTk2YzAgMS41NjIuNTUgMy4zIDEuNDQxIDQuODQzTDYzLjQ0NSA2My44OFptMCAwIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTYzLjQ0NSAyNi4wMzVjLTIwLjg2NyAwLTM3Ljg0MyAxNi45NzctMzcuODQzIDM3Ljg0NHMxNi45NzYgMzcuODQ0IDM3Ljg0MyAzNy44NDRjMTMuNDY1IDAgMjYuMDI0LTcuMjQ3IDMyLjc3LTE4LjkxTDc5Ljg0IDczLjMzNWMtMy4zOCA1Ljg0LTkuNjYgOS40NjUtMTYuMzk1IDkuNDY1LTEwLjQzMyAwLTE4LjkyMi04LjQ4OC0xOC45MjItMTguOTIyIDAtMTAuNDM0IDguNDktMTguOTIyIDE4LjkyMi0xOC45MjIgNi43MyAwIDEzLjAxNyAzLjYyOSAxNi4zOSA5LjQ2NWwxNi4zOC05LjQ3N2MtNi43NS0xMS42NjQtMTkuMzA1LTE4LjkxLTMyLjc3LTE4Ljkxek05Mi44OCA1Ny41N3Y0LjIwN2gtNC4yMDd2NC4yMDNoNC4yMDd2NC4yMDdoNC4yMDNWNjUuOThoNC4yMDN2LTQuMjAzaC00LjIwM1Y1Ny41N0g5Mi44OHptMTUuNzY2IDB2NC4yMDdoLTQuMjA0djQuMjAzaDQuMjA0djQuMjA3aDQuMjA3VjY1Ljk4aDQuMjAzdi00LjIwM2gtNC4yMDNWNTcuNTdoLTQuMjA3eiIvPjwvc3ZnPg==" },
    { name: "C#",       src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48cGF0aCBmaWxsPSIjOUI0Rjk2IiBkPSJNMTE1LjQgMzAuN0w2Ny4xIDIuOWMtLjgtLjUtMS45LS43LTMuMS0uNy0xLjIgMC0yLjMuMy0zLjEuN2wtNDggMjcuOWMtMS43IDEtMi45IDMuNS0yLjkgNS40djU1LjdjMCAxLjEuMiAyLjQgMSAzLjVsMTA2LjgtNjJjLS42LTEuMi0xLjUtMi4xLTIuNC0yLjd6Ii8+PHBhdGggZmlsbD0iIzY4MjE3QSIgZD0iTTEwLjcgOTUuM2MuNS44IDEuMiAxLjUgMS45IDEuOWw0OC4yIDI3LjljLjguNSAxLjkuNyAzLjEuNyAxLjIgMCAyLjMtLjMgMy4xLS43bDQ4LTI3LjljMS43LTEgMi45LTMuNSAyLjktNS40VjM2LjFjMC0uOS0uMS0xLjktLjYtMi44bC0xMDYuNiA2MnoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNODUuMyA3Ni4xQzgxLjEgODMuNSA3My4xIDg4LjUgNjQgODguNWMtMTMuNSAwLTI0LjUtMTEtMjQuNS0yNC41czExLTI0LjUgMjQuNS0yNC41YzkuMSAwIDE3LjEgNSAyMS4zIDEyLjVsMTMtNy41Yy02LjgtMTEuOS0xOS42LTIwLTM0LjMtMjAtMjEuOCAwLTM5LjUgMTcuNy0zOS41IDM5LjVzMTcuNyAzOS41IDM5LjUgMzkuNWMxNC42IDAgMjcuNC04IDM0LjItMTkuOGwtMTIuOS03LjZ6TTk3IDY2LjJsLjktNC4zaC00LjJ2LTQuN2g1LjFMMTAwIDUxaDQuOWwtMS4yIDYuMWgzLjhsMS4yLTYuMWg0LjhsLTEuMiA2LjFoMi40djQuN2gtMy4zbC0uOSA0LjNoNC4ydjQuN2gtNS4xbC0xLjIgNmgtNC45bDEuMi02aC0zLjhsLTEuMiA2aC00LjhsMS4yLTZoLTIuNHYtNC43SDk3em00LjggMGgzLjhsLjktNC4zaC0zLjhsLS45IDQuM3oiLz48L3N2Zz4=" },
    { name: "JavaScript", src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48cGF0aCBmaWxsPSIjRjBEQjRGIiBkPSJNMS40MDggMS40MDhoMTI1LjE4NHYxMjUuMTg1SDEuNDA4eiIvPjxwYXRoIGZpbGw9IiMzMjMzMzAiIGQ9Ik0xMTYuMzQ3IDk2LjczNmMtLjkxNy01LjcxMS00LjY0MS0xMC41MDgtMTUuNjcyLTE0Ljk4MS0zLjgzMi0xLjc2MS04LjEwNC0zLjAyMi05LjM3Ny01LjkyNi0uNDUyLTEuNjktLjUxMi0yLjY0Mi0uMjI2LTMuNjY1LjgyMS0zLjMyIDQuNzg0LTQuMzU1IDcuOTI1LTMuNDAzIDIuMDIzLjY3OCAzLjkzOCAyLjIzNyA1LjA5MyA0LjcyNCA1LjQwMi0zLjQ5OCA1LjM5MS0zLjQ3NSA5LjE2My01Ljg3OS0xLjM4MS0yLjE0MS0yLjExOC0zLjEyOS0zLjAyMi00LjA0NS0zLjI0OS0zLjYyOS03LjY3Ni01LjQ5OC0xNC43NTYtNS4zNTVsLTMuNjg4LjQ3N2MtMy41MzQuODkzLTYuOTAyIDIuNzQ4LTguODc3IDUuMjM1LTUuOTI2IDYuNzI0LTQuMjM2IDE4LjQ5MiAyLjk3NSAyMy4zMzUgNy4xMDQgNS4zMzIgMTcuNTQgNi41NDUgMTguODczIDExLjUzMSAxLjI5NyA2LjEwNC00LjQ4NiA4LjA4LTEwLjIzNCA3LjM3OC00LjIzNi0uODgxLTYuNTkyLTMuMDM0LTkuMTM5LTYuOTQ5LTQuNjg4IDIuNzEzLTQuNjg4IDIuNzEzLTkuNTA4IDUuNDg1IDEuMTQzIDIuNDk5IDIuMzQ0IDMuNjMgNC4yNiA1Ljc5NSA5LjA2OCA5LjE5OCAzMS43NiA4Ljc0NiAzNS44My01LjE3Ni4xNjUtLjQ3OCAxLjI2MS0zLjY2Ni4zOC04LjU4MXpNNjkuNDYyIDU4Ljk0M0g1Ny43NTNsLS4wNDggMzAuMjcyYzAgNi40MzguMzMzIDEyLjM0LS43MTQgMTQuMTQ5LTEuNzEzIDMuNTU4LTYuMTUyIDMuMTE3LTguMTc1IDIuNDI3LTIuMDU5LTEuMDEyLTMuMTA2LTIuNDUxLTQuMzE5LTQuNDg1LS4zMzMtLjU4NC0uNTgzLTEuMDM2LS42NjctMS4wNzFsLTkuNTIgNS44M2MxLjU4MyAzLjI0OSAzLjkxNSA2LjA2OSA2LjkwMiA3LjkwMSA0LjQ2MiAyLjY3OCAxMC40NTkgMy40OTkgMTYuNzMxIDIuMDU5IDQuMDgyLTEuMTg5IDcuNjA0LTMuNjUyIDkuNDQ4LTcuNDAxIDIuNjY2LTQuOTE1IDIuMDk0LTEwLjg2NCAyLjA3LTE3LjQ0NC4wNi0xMC43MzUuMDAxLTIxLjQ2OC4wMDEtMzIuMjM3eiIvPjwvc3ZnPg==" },
    { name: "PowerShell", src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSI5Ni4zMDYiIHgyPSIyNS40NTQiIHkxPSIzNS4xNDQiIHkyPSI5OC40MzEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAxMjgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjYTljOGZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzdlNmZmIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjIgMTEwLjVjLTEuNyAwLTMuMS0uNy00LjEtMS45LTEtMS4yLTEuMy0yLjktLjktNC42bDE4LjYtODAuNWMuOC0zLjQgNC02IDcuNC02aDkyLjZjMS43IDAgMy4xLjcgNC4xIDEuOSAxIDEuMiAxLjMgMi45LjkgNC42bC0xOC42IDgwLjVjLS44IDMuNC00IDYtNy40IDZINy4yeiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuOCIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjI1LjMzNiIgeDI9Ijk0LjU2OSIgeTE9Ijk4LjMzIiB5Mj0iMzYuODQ3IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTI4KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzJkNDY2NCIvPjxzdG9wIG9mZnNldD0iLjE2OSIgc3RvcC1jb2xvcj0iIzI5NDA1YiIvPjxzdG9wIG9mZnNldD0iLjQ0NSIgc3RvcC1jb2xvcj0iIzFlMmY0MyIvPjxzdG9wIG9mZnNldD0iLjc5IiBzdG9wLWNvbG9yPSIjMGMxMzFiIi8+PHN0b3Agb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI2IpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjAuMyAxOC41SDI4LjVjLTIuOSAwLTUuNyAyLjMtNi40IDUuMkwzLjcgMTA0LjNjLS43IDIuOSAxLjEgNS4yIDQgNS4yaDkxLjhjMi45IDAgNS43LTIuMyA2LjQtNS4ybDE4LjQtODAuNWMuNy0yLjktMS4xLTUuMy00LTUuM3oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGZpbGw9IiMyQzU1OTEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTY0LjIgODguM2gyMi4zYzIuNiAwIDQuNyAyLjIgNC43IDQuOXMtMi4xIDQuOS00LjcgNC45SDY0LjJjLTIuNiAwLTQuNy0yLjItNC43LTQuOXMyLjEtNC45IDQuNy00Ljl6TTc4LjcgNjYuNWMtLjQuOC0xLjIgMS42LTIuNiAyLjZMMzQuNiA5OC45Yy0yLjMgMS42LTUuNSAxLTcuMy0xLjQtMS43LTIuNC0xLjMtNS43LjktNy4zbDM3LjQtMjcuMXYtLjZsLTIzLjUtMjVjLTEuOS0yLTEuNy01LjMuNC03LjQgMi4yLTIgNS41LTIgNy40IDBsMjguMiAzMGMxLjcgMS45IDEuOCA0LjUuNiA2LjR6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03Ny42IDY1LjVjLS40LjgtMS4yIDEuNi0yLjYgMi42TDMzLjYgOTcuOWMtMi4zIDEuNi01LjUgMS03LjMtMS40LTEuNy0yLjQtMS4zLTUuNy45LTcuM2wzNy40LTI3LjF2LS42bC0yMy41LTI1Yy0xLjktMi0xLjctNS4zLjQtNy40IDIuMi0yIDUuNS0yIDcuNCAwbDI4LjIgMzBjMS43IDEuOCAxLjggNC40LjUgNi40ek02My41IDg3LjhoMjIuM2MyLjYgMCA0LjcgMi4xIDQuNyA0LjYgMCAyLjYtMi4xIDQuNi00LjcgNC42SDYzLjVjLTIuNiAwLTQuNy0yLjEtNC43LTQuNiAwLTIuNiAyLjEtNC42IDQuNy00LjZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" },
    { name: "HTML5",    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48cGF0aCBmaWxsPSIjRTQ0RDI2IiBkPSJNMTkuMDM3IDExMy44NzZMOS4wMzIgMS42NjFoMTA5LjkzNmwtMTAuMDE2IDExMi4xOTgtNDUuMDE5IDEyLjQ4eiIvPjxwYXRoIGZpbGw9IiNGMTY1MjkiIGQ9Ik02NCAxMTYuOGwzNi4zNzgtMTAuMDg2IDguNTU5LTk1Ljg3OEg2NHoiLz48cGF0aCBmaWxsPSIjRUJFQkVCIiBkPSJNNjQgNTIuNDU1SDQ1Ljc4OEw0NC41MyAzOC4zNjFINjRWMjQuNTk5SDI5LjQ4OWwuMzMgMy42OTIgMy4zODIgMzcuOTI3SDY0em0wIDM1Ljc0M2wtLjA2MS4wMTctMTUuMzI3LTQuMTQtLjk3OS0xMC45NzVIMzMuODE2bDEuOTI4IDIxLjYwOSAyOC4xOTMgNy44MjYuMDYzLS4wMTd6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTYzLjk1MiA1Mi40NTV2MTMuNzYzaDE2Ljk0N2wtMS41OTcgMTcuODQ5LTE1LjM1IDQuMTQzdjE0LjMxOWwyOC4yMTUtNy44Mi4yMDctMi4zMjUgMy4yMzQtMzYuMjMzLjMzNS0zLjY5NmgtMy43MDh6bTAtMjcuODU2djEzLjc2MmgzMy4yNDRsLjI3Ni0zLjA5Mi42MjgtNi45NzguMzI5LTMuNjkyeiIvPjwvc3ZnPg==" },
  ];

  // decode them all once, up front
  LOGOS.forEach((logo) => {
    const img = new Image();
    img.src = logo.src;
    logo.img = img;
  });

  let tiles = [];

  function resize() {
    canvas.width  = innerWidth;
    canvas.height = innerHeight;
  }

  function spawn(startY) {
    return {
      logo: LOGOS[Math.floor(Math.random() * LOGOS.length)],
      x: Math.random() * canvas.width,
      y: typeof startY === "number" ? startY : -70,
      size: 26 + Math.random() * 16,            // 26-42 px
      speed: 8 + Math.random() * 10,            // px per second: slow
      drift: (Math.random() - 0.5) * 5,         // sideways, px per second
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.15 + Math.random() * 0.25,
      angle: (Math.random() - 0.5) * 0.3,
      spin: (Math.random() - 0.5) * 0.05,
      baseAlpha: 0.6 + Math.random() * 0.35,
    };
  }

  function create() {
    const count = Math.min(26, Math.max(10, Math.round(innerWidth / 60)));
    tiles = [];
    for (let i = 0; i < count; i++) {
      tiles.push(spawn(Math.random() * canvas.height * 0.6));
    }
  }

  function drawLogo(t, alpha) {
    const img = t.logo.img;
    if (!img || !img.complete || !img.naturalWidth) return; // still decoding

    const s = t.size;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(t.x, t.y);
    ctx.rotate(t.angle);
    ctx.drawImage(img, -s / 2, -s / 2, s, s);
    ctx.restore();
  }

  const cardEl = document.getElementById("card");
  let last = performance.now();

  function draw(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // logos fade away as they near the middle of the screen and start
    // again at the top, so the profile card always stays readable
      // logos fade out slowly as they near the middle of the screen, then
    // start again at the top. A long fade zone = no popping.
    const middle = canvas.height * 0.5;
    const fadeFrom = canvas.height * 0.16;   // full brightness above this
    const fadeSpan = Math.max(1, middle - fadeFrom);

    // fade out near the card too, so it never cuts a logo off abruptly
    const card = cardEl ? cardEl.getBoundingClientRect() : null;
    const cardFade = 60;                     // px of softening around it

    // 0 at the edge, 1 well away: smooth, no sudden jumps
    const smooth = (u) => u * u * (3 - 2 * u);

    tiles.forEach((t, i) => {
      t.y += t.speed * dt;
      t.sway += t.swaySpeed * dt;
      t.x += (t.drift + Math.sin(t.sway) * 6) * dt;
      t.angle += t.spin * dt;

      if (t.x < -80) t.x = canvas.width + 60;
      else if (t.x > canvas.width + 80) t.x = -60;

      if (t.y > middle) {
        tiles[i] = spawn(-70 - Math.random() * 140);
        return;
      }

            let alpha = t.baseAlpha;

      // long, eased fade toward the middle of the screen
      if (t.y > fadeFrom) {
        const k = Math.min(1, (t.y - fadeFrom) / fadeSpan);
        alpha *= 1 - smooth(k);
      }

      // eased fade around the card, instead of a hard cut
      if (card) {
        const dx = Math.max(card.left - t.x, 0, t.x - card.right);
        const dy = Math.max(card.top - t.y, 0, t.y - card.bottom);
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < cardFade) alpha *= smooth(d / cardFade);
      }

      if (alpha <= 0.01) return;

      drawLogo(t, alpha);
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  resize();
  create();
  addEventListener("resize", () => { resize(); create(); });
  requestAnimationFrame(draw);
}


// ============================================================
// CURSOR TRAIL (stardust)
// ============================================================
function initCursorTrail() {
  const canvas = document.getElementById("cursor-canvas");
  const ctx = canvas.getContext("2d");
  let sparks = [];
  let mx = -999, my = -999, lx = -999, ly = -999;

  function resize() {
    canvas.width  = innerWidth;
    canvas.height = innerHeight;
  }

  document.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; });

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (mx !== lx || my !== ly) {
      for (let i = 0; i < 3; i++) {
        sparks.push({
          x: mx + (Math.random() - 0.5) * 8,
          y: my + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 0.9,
          vy: (Math.random() - 0.5) * 0.9,
          size: 1 + Math.random() * 2,
          life: 1,
        });
      }
      lx = mx; ly = my;
    }

    sparks.forEach((s) => {
      s.x += s.vx;
      s.y += s.vy;
      s.life -= 0.03;

      ctx.globalAlpha = Math.max(s.life, 0);
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "#ffffff";
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(s.x, s.y, Math.max(s.size * s.life, 0.2), 0, Math.PI * 2);
      ctx.fill();
    });

    sparks = sparks.filter((s) => s.life > 0);
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    requestAnimationFrame(draw);
  }

  resize();
  addEventListener("resize", resize);
  requestAnimationFrame(draw);
}