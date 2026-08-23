"use strict";

// ─── REFS ───────────────────────────────────────────────────────────────────

const $ = (id) => document.getElementById(id);
const $$ = (sel, ctx = document) => ctx.querySelectorAll(sel);

const R = {
  body:                 document.body,
  sidebar:              $("sidebar"),
  sidebarBackdrop:      $("sidebarBackdrop"),
  sidebarCollapseBtn:   $("sidebarCollapseBtn"),
  sidebarToggleBtn:     $("sidebarToggleBtn"),
  themeCheckbox:        $("themeCheckbox"),
  breadcrumbSection:    $("breadcrumbSection"),
  bioForm:              $("bioForm"),
  apiKey:               $("apiKey"),
  platform:             $("platform"),
  tone:                 $("tone"),
  aesthetic:            $("aesthetic"),
  cardThemeSelect:      $("cardThemeSelect"),
  displayName:          $("displayName"),
  handle:               $("handle"),
  titleLine:            $("titleLine"),
  keywords:             $("keywords"),
  about:                $("about"),
  cta:                  $("cta"),
  location:             $("location"),
  websiteUrl:           $("websiteUrl"),
  githubUrl:            $("githubUrl"),
  twitterUrl:           $("twitterUrl"),
  instagramUrl:         $("instagramUrl"),
  customLinksList:      $("customLinksList"),
  addLinkBtn:           $("addLinkBtn"),
  shareStateBtn:        $("shareStateBtn"),
  exportSize:           $("exportSize"),
  avatarUpload:         $("avatarUpload"),
  generateBtn:          $("generateBtn"),
  generateVariantsBtn:  $("generateVariantsBtn"),
  copyBtn:              $("copyBtn"),
  downloadBtn:          $("downloadBtn"),
  copyBtnCard:          $("copyBtnCard"),
  downloadBtnCard:      $("downloadBtnCard"),
  clearBtn:             $("clearBtn"),
  saveProjectBtn:       $("saveProjectBtn"),
  saveProjectConfirmBtn:$("saveProjectConfirmBtn"),
  clearHistoryBtn:      $("clearHistoryBtn"),
  projectName:          $("projectName"),
  bioOutput:            $("bioOutput"),
  charCount:            $("charCount"),
  statusText:           $("statusText"),
  fontStyles:           $("fontStyles"),
  symbolPalette:        $("symbolPalette"),
  cardThemeTabs:        $("cardThemeTabs"),
  variantsList:         $("variantsList"),
  presetGrid:           $("presetGrid"),
  historyList:          $("historyList"),
  projectsList:         $("projectsList"),
  captureCard:          $("captureCard"),
  previewAvatar:        $("previewAvatar"),
  previewName:          $("previewName"),
  previewHandle:        $("previewHandle"),
  previewTitle:         $("previewTitle"),
  previewBio:           $("previewBio"),
  previewLinks:         $("previewLinks"),
  previewLocation:      $("previewLocation"),
  previewCTA:           $("previewCTA"),
  badgePlatform:        $("badgePlatform"),
  badgeTone:            $("badgeTone"),
  badgeAesthetic:       $("badgeAesthetic"),
  bannerPreset:         $("bannerPreset"),
  bannerBackground:     $("bannerBackground"),
  bannerHeadline:        $("bannerHeadline"),
  bannerSubtitle:        $("bannerSubtitle"),
  bannerAccent:          $("bannerAccent"),
  bannerAlign:           $("bannerAlign"),
  bannerShowAvatar:      $("bannerShowAvatar"),
  bannerShowHandle:      $("bannerShowHandle"),
  captureBanner:         $("captureBanner"),
  bannerAvatar:          $("bannerAvatar"),
  bannerName:            $("bannerName"),
  bannerHeadlinePreview: $("bannerHeadlinePreview"),
  bannerSubtitlePreview: $("bannerSubtitlePreview"),
  bannerHandlePreview:   $("bannerHandlePreview"),
  bannerSizeLabel:       $("bannerSizeLabel"),
  downloadBannerBtn:     $("downloadBannerBtn"),
  resetBannerBtn:        $("resetBannerBtn"),
  undoBtn:               $("undoBtn"),
  redoBtn:               $("redoBtn"),
  networkStatus:         $("networkStatus"),
  qualityChecks:         $("qualityChecks"),
  templateGrid:          $("templateGrid"),
  brandAccent:           $("brandAccent"),
  brandSecondary:        $("brandSecondary"),
  brandTagline:          $("brandTagline"),
  brandCta:              $("brandCta"),
  applyBrandKitBtn:      $("applyBrandKitBtn"),
  exportFilename:        $("exportFilename"),
  exportScale:           $("exportScale"),
  exportTransparent:     $("exportTransparent"),
  exportProjectBtn:      $("exportProjectBtn"),
  importProjectBtn:      $("importProjectBtn"),
  importProjectFile:     $("importProjectFile"),
};

// ─── CONSTANTS ──────────────────────────────────────────────────────────────

const FONTS      = ["clean","serif","mono","editorial","space"];
const CARD_THEMES = ["notion","glass","paper","neon"];
const LS = {
  theme:     "abm2_theme",
  font:      "abm2_font",
  cardTheme: "abm2_card",
  history:   "abm2_history",
  projects:  "abm2_projects",
  sidebar:   "abm2_sidebar",
  apiKey:    "abm2_apikey",
};

const SYMBOLS = [
  "✦","⋆","☾","♡","⚡","⟡","✧","✿",
  "𖤓","☼","༄","→","↝","✩","⭑","•",
  "꒰","꒱","𓆩","𓆪","∞","⌁","❍","☁",
  "⚘","✺","⊹","⁎","✵","❋","◈","⬡",
];

const PLATFORM_PRESETS = [
  { id:"instagram", icon:"📸", name:"Instagram", tone:"Soft",    aesthetic:"Dreamy",       limit:150, hint:"Use emojis, line breaks, aesthetic vibe." },
  { id:"twitter",   icon:"🐦", name:"X / Twitter",tone:"Bold",   aesthetic:"Cyberpunk",    limit:160, hint:"Punchy. One strong line." },
  { id:"tiktok",    icon:"🎵", name:"TikTok",    tone:"Poetic",  aesthetic:"Soft Girl",    limit:150, hint:"Gen Z energy. Trend-aware." },
  { id:"discord",   icon:"💬", name:"Discord",   tone:"Techy",   aesthetic:"Notion",       limit:120, hint:"Short, personality-first." },
  { id:"github",    icon:"🐙", name:"GitHub",    tone:"Minimal", aesthetic:"Clean Founder",limit:160, hint:"Stack, focus, GitHub vibe." },
  { id:"linkedin",  icon:"💼", name:"LinkedIn",  tone:"Minimal", aesthetic:"Clean Founder",limit:220, hint:"Professional, clear value." },
];

const VARIANT_LABELS = ["Minimal", "Poetic", "Bold"];

const BANNER_PRESETS = {
  github:    { w: 1280, h: 640, label: "1280 × 640 px", bg: "midnight" },
  linkedin: { w: 1584, h: 396, label: "1584 × 396 px", bg: "aurora" },
  x:        { w: 1500, h: 500, label: "1500 × 500 px", bg: "sunset" },
  youtube:  { w: 2560, h: 1440, label: "2560 × 1440 px", bg: "midnight" },
  portfolio: { w: 1600, h: 600, label: "1600 × 600 px", bg: "paper" },
};
const BANNER_BACKGROUNDS = ["midnight", "aurora", "paper", "sunset", "plain"];
const PROJECT_SCHEMA_VERSION = 2;
const MAX_UNDO_STEPS = 40;
const TEMPLATES = [
  { id: "midnight-builder", name: "Midnight Builder", description: "Dark, focused, and technical.", card: "neon", font: "mono", background: "midnight", accent: "#a99bff" },
  { id: "quiet-editorial", name: "Quiet Editorial", description: "Warm paper with a refined voice.", card: "paper", font: "editorial", background: "paper", accent: "#b56a45" },
  { id: "aurora-creator", name: "Aurora Creator", description: "Soft glow for creative profiles.", card: "glass", font: "space", background: "aurora", accent: "#65e6cc" },
  { id: "clean-founder", name: "Clean Founder", description: "Crisp, direct, and professional.", card: "notion", font: "clean", background: "plain", accent: "#4f7cff" },
];

// Custom (extra) link slots beyond the fixed four. Each slot has a label + URL.
const MAX_CUSTOM_LINKS = 4;
const LS_CUSTOM_LINKS = "abm2_custom_links";

function loadCustomLinks() {
  return lsJSON(LS_CUSTOM_LINKS, []).slice(0, MAX_CUSTOM_LINKS);
}

function applyCustomLinks(links) {
  R.customLinksList.innerHTML = links.slice(0, MAX_CUSTOM_LINKS)
    .map((l) => `
      <div class="custom-link-row">
        <input type="text" data-cl-label placeholder="Label" value="${escAttr(l.label || "")}" />
        <input type="url"  data-cl-url    placeholder="https://..." value="${escAttr(l.url || "")}" />
        <button class="link-row-delete" data-cl-del aria-label="Remove link">×</button>
      </div>
    `)
    .join("");
}

// Persist every row (including partially filled ones) so nothing is lost mid-type.
function gatherCustomLinksRaw() {
  return [...$$(".custom-link-row", R.customLinksList)].map((row) => ({
    label: row.querySelector("[data-cl-label]").value.trim(),
    url: row.querySelector("[data-cl-url]").value.trim(),
  })).slice(0, MAX_CUSTOM_LINKS);
}
function gatherCustomLinks() {
  return gatherCustomLinksRaw().filter((l) => l.label && l.url);
}

function renderCustomLinks() {
  R.customLinksList.innerHTML = loadCustomLinks()
    .map((l, i) => `
      <div class="custom-link-row">
        <input type="text" data-cl-label placeholder="Label" value="${escAttr(l.label)}" />
        <input type="url"  data-cl-url    placeholder="https://..." value="${escAttr(l.url)}" />
        <button class="link-row-delete" data-cl-del data-idx="${i}" aria-label="Remove link">×</button>
      </div>
    `)
    .join("");
}

function saveCustomLinksLS() {
  lsSet(LS_CUSTOM_LINKS, JSON.stringify(gatherCustomLinksRaw()));
}

R.customLinksList.addEventListener("input", () => { saveCustomLinksLS(); updatePreview(); });
R.customLinksList.addEventListener("change", () => { saveCustomLinksLS(); updatePreview(); });
R.customLinksList.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-cl-del]");
  if (btn) {
    btn.closest(".custom-link-row").remove();
    saveCustomLinksLS();
    updatePreview();
  }
});
R.addLinkBtn.addEventListener("click", () => {
  if (gatherCustomLinksRaw().length >= MAX_CUSTOM_LINKS) {
    setStatus(`Max ${MAX_CUSTOM_LINKS} extra links.`, "error");
    return;
  }
  const row = document.createElement("div");
  row.className = "custom-link-row";
  row.innerHTML = `
    <input type="text" data-cl-label placeholder="Label" />
    <input type="url"  data-cl-url    placeholder="https://..." />
    <button class="link-row-delete" data-cl-del aria-label="Remove link">×</button>
  `;
  R.customLinksList.appendChild(row);
  saveCustomLinksLS();
  row.querySelector("[data-cl-label]").focus();
});

// ─── STATE ──────────────────────────────────────────────────────────────────

const state = {
  theme:       "dark",
  font:        "clean",
  cardTheme:   "notion",
  history:     [],
  projects:    [],
  avatarData:  "",
  activeField: null,
  sidebarCollapsed: false,
  banner: {
    preset: "github", background: "midnight", headline: "Building the future, one idea at a time.",
    subtitle: "AI builder · designer · open source", accent: "#a99bff", align: "left",
    showAvatar: true, showHandle: true,
  },
  brandKit: { accent: "#a99bff", secondary: "#65e6cc", tagline: "", cta: "" },
  exportSettings: { filename: "", scale: "2", transparent: true },
  undoStack: [],
  redoStack: [],
  historyTimer: null,
  historyMute: false,
};

// ─── BOOT ────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  loadPrefs();
  buildSymbols();
  buildPresets();
  bindAll();
  applyTheme(state.theme);
  setFont(state.font);
  setCardTheme(state.cardTheme);
  renderCustomLinks();
  loadShareState();
  renderHistory();
  renderProjects();
  updatePreview();
  bindBanner();
  bindBrandKit();
  renderBanner();
  renderTemplates();
  renderQualityChecks();
  bindNetworkStatus();
  resetUndoHistory();
  setStatus("Ready.");
  if (state.sidebarCollapsed) collapseSidebar(true);
});

// ─── PREFS ───────────────────────────────────────────────────────────────────

function loadPrefs() {
  const t = ls(LS.theme);
  const f = ls(LS.font);
  const c = ls(LS.cardTheme);
  const h = lsJSON(LS.history, []);
  const p = lsJSON(LS.projects, []);
  const s = ls(LS.sidebar);
  const exportSettings = lsJSON("abm2_export_settings", null);
  if (exportSettings && typeof exportSettings === "object") state.exportSettings = { ...state.exportSettings, ...exportSettings };

  if (t === "light" || t === "dark") state.theme = t;
  if (FONTS.includes(f)) state.font = f;
  if (CARD_THEMES.includes(c)) state.cardTheme = c;
  state.history  = h.slice(0, 5);
  state.projects = p;
  state.sidebarCollapsed = s === "1";
  R.themeCheckbox.checked = state.theme === "dark";

  // Restore previously saved Groq API key so it isn't lost between visits.
  // It never leaves this device (localStorage only).
  const savedKey = ls(LS.apiKey);
  if (savedKey) { R.apiKey.value = savedKey; }
  R.apiKey.addEventListener("input", () => lsSet(LS.apiKey, R.apiKey.value.trim()));
  bindExportSettings();
}

// ─── BIND ────────────────────────────────────────────────────────────────────

function bindAll() {
  R.sidebarCollapseBtn.addEventListener("click", () => collapseSidebar(!state.sidebarCollapsed));
  R.sidebarToggleBtn.addEventListener("click", () => collapseSidebar(!state.sidebarCollapsed));
  R.themeCheckbox.addEventListener("change", () => applyTheme(R.themeCheckbox.checked ? "dark" : "light"));

  // Sidebar nav
  document.querySelectorAll(".sidebar-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll(".sidebar-link").forEach((l) => l.classList.remove("is-active"));
      link.classList.add("is-active");
      const section = link.dataset.section;
      R.breadcrumbSection.textContent = link.querySelector(".nav-label")?.textContent || "";
      scrollToSection(section);
    });
  });

  R.bioForm.addEventListener("submit", handleGenerate);
  R.generateVariantsBtn.addEventListener("click", handleGenerateVariants);
  R.copyBtn.addEventListener("click", copyBio);
  R.copyBtnCard.addEventListener("click", copyBio);
  R.downloadBtn.addEventListener("click", downloadCard);
  R.downloadBtnCard.addEventListener("click", downloadCard);
  R.clearBtn.addEventListener("click", clearForm);
  R.clearHistoryBtn.addEventListener("click", clearHistory);
  R.saveProjectBtn.addEventListener("click", promptSaveProject);
  R.saveProjectConfirmBtn.addEventListener("click", saveProject);

  // Banner builder controls
  [R.bannerPreset, R.bannerBackground, R.bannerHeadline, R.bannerSubtitle, R.bannerAccent, R.bannerAlign, R.bannerShowAvatar, R.bannerShowHandle]
    .forEach((field) => field.addEventListener("input", syncBannerFromControls));
  [R.bannerPreset, R.bannerBackground, R.bannerAlign, R.bannerShowAvatar, R.bannerShowHandle]
    .forEach((field) => field.addEventListener("change", syncBannerFromControls));
  R.downloadBannerBtn.addEventListener("click", downloadBanner);
  R.resetBannerBtn.addEventListener("click", resetBanner);
  R.undoBtn.addEventListener("click", undo);
  R.redoBtn.addEventListener("click", redo);
  R.exportProjectBtn.addEventListener("click", exportProjectBackup);
  R.importProjectBtn.addEventListener("click", () => R.importProjectFile.click());
  R.importProjectFile.addEventListener("change", importProjectBackup);
  R.applyBrandKitBtn.addEventListener("click", applyBrandKit);
  [R.brandAccent, R.brandSecondary, R.brandTagline, R.brandCta].forEach((field) => field.addEventListener("input", saveBrandKit));
  [R.exportFilename, R.exportScale, R.exportTransparent].forEach((field) => field.addEventListener("input", saveExportSettings));
  [R.exportScale, R.exportTransparent].forEach((field) => field.addEventListener("change", saveExportSettings));
  document.addEventListener("keydown", handleUndoShortcut);
  window.addEventListener("online", updateNetworkStatus);
  window.addEventListener("offline", updateNetworkStatus);

  // Font chips
  R.fontStyles.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-font]");
    if (btn) setFont(btn.dataset.font);
  });

  // Card theme tabs
  R.cardThemeTabs.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-card-theme]");
    if (btn) setCardTheme(btn.dataset.cardTheme);
  });

  // Card theme select (in form)
  R.cardThemeSelect.addEventListener("change", () => setCardTheme(R.cardThemeSelect.value));

  // Live preview fields
  [
    R.platform, R.tone, R.aesthetic, R.displayName, R.handle,
    R.titleLine, R.keywords, R.about, R.cta, R.location,
    R.websiteUrl, R.githubUrl, R.twitterUrl, R.instagramUrl, R.bioOutput,
    R.bannerHeadline, R.bannerSubtitle
  ].forEach((f) => {
    f.addEventListener("input", () => { updatePreview(); queueUndoSnapshot(); });
    f.addEventListener("change", () => { updatePreview(); queueUndoSnapshot(); });
  });

  // Track active field for symbol insertion
  const textInputs = [
    R.displayName, R.handle, R.titleLine, R.keywords,
    R.about, R.cta, R.location, R.websiteUrl,
    R.githubUrl, R.twitterUrl, R.instagramUrl, R.bioOutput,
  ];
  textInputs.forEach((f) => {
    f.addEventListener("focus", () => (state.activeField = f));
    f.addEventListener("click", () => (state.activeField = f));
  });

  // History delegation
  R.historyList.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-haction]");
    if (!btn) return;
    const idx = Number(btn.dataset.idx);
    if (btn.dataset.haction === "use") {
      R.bioOutput.value = state.history[idx] || "";
      updatePreview();
      setStatus("Bio loaded from history.", "ok");
    }
    if (btn.dataset.haction === "del") {
      state.history.splice(idx, 1);
      saveHistoryLS();
      renderHistory();
    }
  });

  // Projects delegation
  R.projectsList.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-paction]");
    if (!btn) return;
    const idx = Number(btn.dataset.idx);
    if (btn.dataset.paction === "load")    loadProject(idx);
    if (btn.dataset.paction === "delete")  deleteProject(idx);
    if (btn.dataset.paction === "duplicate") duplicateProject(idx);
    if (btn.dataset.paction === "rename")   renameProject(idx);
    if (btn.dataset.paction === "favorite") toggleFavoriteProject(idx);
  });

  R.templateGrid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-template]");
    if (btn) applyTemplate(btn.dataset.template);
  });

  // Variant delegation
  R.variantsList.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-vaction]");
    if (!btn) return;
    const idx = Number(btn.dataset.idx);
    const texts = $$(".variant-text", R.variantsList);
    const text = texts[idx]?.textContent || "";
    if (btn.dataset.vaction === "use") {
      R.bioOutput.value = text;
      updatePreview();
      addHistory(text);
      setStatus("Variant loaded.", "ok");
    }
    if (btn.dataset.vaction === "copy") {
      navigator.clipboard.writeText(text).then(() => setStatus("Variant copied.", "ok")).catch(() => {});
    }
  });

  // Avatar upload
  R.avatarUpload.addEventListener("change", handleAvatar);
}

// ─── SIDEBAR ─────────────────────────────────────────────────────────────────

function collapseSidebar(collapsed) {
  state.sidebarCollapsed = collapsed;
  R.sidebar.classList.toggle("collapsed", collapsed);
  // On mobile the sidebar is a fixed overlay; show the backdrop so tapping
  // outside closes it (the overlay otherwise has no close affordance).
  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  R.sidebarBackdrop.classList.toggle("is-open", isMobile && !collapsed);
  lsSet(LS.sidebar, collapsed ? "1" : "0");
}

R.sidebarBackdrop.addEventListener("click", () => collapseSidebar(true));

// Settings > API Key row: jump to the API key field so the row actually does something.
const apiKeySetting = $("apiKeySetting");
function openApiKeyField() {
  R.apiKey.focus();
  R.apiKey.scrollIntoView({ behavior: "smooth", block: "center" });
}
apiKeySetting.addEventListener("click", openApiKeyField);
apiKeySetting.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openApiKeyField(); } });

function scrollToSection(section) {
  const el = document.querySelector(`[data-block="${section}"]`) || document.getElementById(`section-${section}`);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── THEME ───────────────────────────────────────────────────────────────────

function applyTheme(theme) {
  state.theme = theme;
  R.body.dataset.theme = theme;
  R.themeCheckbox.checked = theme === "dark";
  lsSet(LS.theme, theme);
}

// ─── FONT ────────────────────────────────────────────────────────────────────

function setFont(key) {
  if (!FONTS.includes(key)) return;
  state.font = key;

  FONTS.forEach((f) => {
    R.bioOutput.classList.remove(`font-${f}`);
    R.captureCard.classList.remove(`font-${f}`);
  });
  R.bioOutput.classList.add(`font-${key}`);
  R.captureCard.classList.add(`font-${key}`);

  $$("[data-font]", R.fontStyles).forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.font === key);
  });

  lsSet(LS.font, key);
}

// ─── CARD THEME ──────────────────────────────────────────────────────────────

function setCardTheme(key) {
  if (!CARD_THEMES.includes(key)) return;
  state.cardTheme = key;

  CARD_THEMES.forEach((t) => R.captureCard.classList.remove(`theme-${t}`));
  R.captureCard.classList.add(`theme-${key}`);
  R.cardThemeSelect.value = key;

  $$("[data-card-theme]", R.cardThemeTabs).forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.cardTheme === key);
  });

  lsSet(LS.cardTheme, key);
}

// ─── SYMBOLS ─────────────────────────────────────────────────────────────────

function buildSymbols() {
  R.symbolPalette.innerHTML = SYMBOLS.map(
    (s) => `<button class="symbol-btn" type="button" data-sym="${esc(s)}">${esc(s)}</button>`
  ).join("");

  R.symbolPalette.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-sym]");
    if (btn) insertSym(btn.dataset.sym);
  });
}

function insertSym(sym) {
  const target = state.activeField || R.bioOutput;
  if (!target) return;

  const s = target.selectionStart || 0;
  const e2 = target.selectionEnd || 0;
  target.value = target.value.slice(0, s) + sym + target.value.slice(e2);
  target.focus();
  target.selectionStart = target.selectionEnd = s + sym.length;
  target.dispatchEvent(new Event("input", { bubbles: true }));
}

// ─── PRESETS ─────────────────────────────────────────────────────────────────

function buildPresets() {
  R.presetGrid.innerHTML = PLATFORM_PRESETS.map(
    (p) => `
      <div class="preset-card" data-preset="${p.id}" role="button" tabindex="0">
        <span class="preset-icon">${p.icon}</span>
        <span class="preset-name">${p.name}</span>
        <span class="preset-meta">${p.limit} chars · ${p.tone}</span>
      </div>
    `
  ).join("");

  R.presetGrid.addEventListener("click", (e) => {
    const card = e.target.closest("[data-preset]");
    if (!card) return;
    applyPreset(card.dataset.preset);
  });

  // Keyboard activation for preset cards (role="button" + tabindex="0")
  R.presetGrid.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest("[data-preset]");
      if (card) {
        e.preventDefault();
        applyPreset(card.dataset.preset);
      }
    }
  });
}

function applyPreset(id) {
  const preset = PLATFORM_PRESETS.find((p) => p.id === id);
  if (!preset) return;

  R.platform.value  = preset.name;
  R.tone.value      = preset.tone;
  R.aesthetic.value = preset.aesthetic;
  updatePreview();
  setStatus(`Preset loaded: ${preset.name}`, "ok");
}

// ─── GENERATE SINGLE ─────────────────────────────────────────────────────────

async function handleGenerate(e) {
  e.preventDefault();

  const key = R.apiKey.value.trim();
  if (!key) { setStatus("Paste a Groq API key first.", "error"); R.apiKey.focus(); return; }

  R.generateBtn.disabled = true;
  setStatus("Generating...");

  try {
    const bio = await callGroq(key, buildPrompt(R.tone.value));
    if (!bio) throw new Error("Empty response.");
    R.bioOutput.value = bio;
    updatePreview();
    addHistory(bio);
    setStatus("Bio generated.", "ok");
  } catch (err) {
    console.error(err);
    setStatus("Generation failed — check your key or open console.", "error");
  } finally {
    R.generateBtn.disabled = false;
  }
}

// ─── GENERATE VARIANTS ───────────────────────────────────────────────────────

async function handleGenerateVariants() {
  const key = R.apiKey.value.trim();
  if (!key) { setStatus("Paste a Groq API key first.", "error"); R.apiKey.focus(); return; }

  R.generateVariantsBtn.disabled = true;
  setStatus("Generating 3 variants...");
  R.variantsList.innerHTML = `<div class="variant-empty">⟡ Generating 3 styles…</div>`;

  const tones = ["Minimal", "Poetic", "Bold"];

  try {
    const results = await Promise.all(
      tones.map((tone) => callGroq(key, buildPrompt(tone)).catch(() => `(failed for ${tone} style)`))
    );

    R.variantsList.innerHTML = results
      .map((text, i) => `
        <div class="variant-card">
          <span class="variant-label">${VARIANT_LABELS[i]}</span>
          <p class="variant-text">${esc(text)}</p>
          <div class="variant-actions">
            <button class="ghost-btn small" data-vaction="use" data-idx="${i}">Use this</button>
            <button class="ghost-btn small" data-vaction="copy" data-idx="${i}">Copy</button>
          </div>
        </div>
      `)
      .join("");

    setStatus("3 variants ready.", "ok");
  } catch (err) {
    console.error(err);
    setStatus("Variant generation failed.", "error");
  } finally {
    R.generateVariantsBtn.disabled = false;
  }
}

// ─── GROQ API ────────────────────────────────────────────────────────────────

async function callGroq(apiKey, prompt) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      temperature: 0.95,
      max_tokens: 200,
      messages: [
        {
          role: "system",
          content:
            "You write stylish, platform-ready bios. Return only the final bio as plain text. No quotes, no labels, no bullet points, no commentary.",
        },
        { role: "user", content: prompt },
      ],
    }),
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg.slice(0, 250));
  }

  const data = await res.json();
  return cleanBio(data?.choices?.[0]?.message?.content || "");
}

// ─── PROMPT ──────────────────────────────────────────────────────────────────

function buildPrompt(tone) {
  const platform  = R.platform.value;
  const aesthetic = R.aesthetic.value;
  const name      = R.displayName.value.trim();
  const handle    = R.handle.value.trim();
  const title     = R.titleLine.value.trim();
  const keywords  = R.keywords.value.trim();
  const about     = R.about.value.trim();
  const cta       = R.cta.value.trim();
  const location  = R.location.value.trim();
  const limit     = charLimit(platform);

  return [
    `Write one bio for ${platform}.`,
    `Tone: ${tone}.`,
    `Aesthetic: ${aesthetic}.`,
    `Char limit: ${limit}.`,
    name     ? `Name: ${name}.`               : "",
    handle   ? `Handle: ${handle}.`           : "",
    title    ? `Identity: ${title}.`          : "",
    keywords ? `Keywords: ${keywords}.`       : "",
    about    ? `Context: ${about}.`           : "",
    cta      ? `CTA: ${cta}.`                 : "",
    location ? `Location: ${location}.`       : "",
    "Rules: single bio only; 0–2 symbols max; no hashtags; polished, original, platform-native."
  ].filter(Boolean).join("\n");
}

function charLimit(platform) {
  return { "Instagram":150, "X / Twitter":160, "TikTok":150, "Discord":120, "GitHub":160, "LinkedIn":220 }[platform] || 160;
}

function cleanBio(text) {
  return text.replace(/^["'`]+|["'`]+$/g, "").replace(/\s+/g, " ").trim();
}

// ─── LIVE PREVIEW ────────────────────────────────────────────────────────────

function updatePreview() {
  const name     = R.displayName.value.trim() || "Your Name";
  const handle   = fmtHandle(R.handle.value.trim() || "username");
  const title    = R.titleLine.value.trim() || "Creative builder with a minimal internet presence.";
  const bio      = R.bioOutput.value.trim() || fallbackBio();
  const location = R.location.value.trim() || "📍 Chennai, India";
  const cta      = R.cta.value.trim() || "building cool things daily";

  R.previewName.textContent     = name;
  R.previewHandle.textContent   = handle;
  R.previewTitle.textContent    = title;
  R.previewBio.textContent      = bio;
  R.previewLocation.textContent = location.startsWith("📍") ? location : `📍 ${location}`;
  R.previewCTA.textContent      = cta;
  R.badgePlatform.textContent   = R.platform.value;
  R.badgeTone.textContent       = R.tone.value;
  R.badgeAesthetic.textContent  = R.aesthetic.value;
  R.previewAvatar.src           = state.avatarData || makeAvatar(name);

  renderLinkPills();
  renderBanner();
  updateCharCount();
  renderQualityChecks();
}

function fallbackBio() {
  const kw = R.keywords.value.split(",").map((k) => k.trim()).filter(Boolean).slice(0, 4);
  const ab = R.about.value.trim();
  const ct = R.cta.value.trim();
  const parts = [];
  if (ab) parts.push(ab);
  if (kw.length) parts.push(`✦ ${kw.join(" • ")}`);
  if (ct) parts.push(`— ${ct}`);
  return parts.join("  ") || "Your generated bio will live here. Fill in the fields and hit Generate.";
}

function renderLinkPills() {
  const links = [
    { label: "Website",   url: R.websiteUrl.value.trim() },
    { label: "GitHub",    url: R.githubUrl.value.trim() },
    { label: "X",         url: R.twitterUrl.value.trim() },
    { label: "Instagram", url: R.instagramUrl.value.trim() },
  ].map((l) => ({ ...l, url: safeUrl(l.url) })).filter((l) => l.url);

  // Custom link slots (extra links beyond the fixed four)
  links.push(...gatherCustomLinks().map((l) => ({ label: l.label, url: safeUrl(l.url) })).filter((l) => l.url));

  if (!links.length) {
    R.previewLinks.innerHTML = `<span class="empty-link-pill">Add links to show badges</span>`;
    return;
  }

  R.previewLinks.innerHTML = links
    .map((l) => `<a class="link-pill" href="${escAttr(safeUrl(l.url))}" target="_blank" rel="noopener noreferrer">${esc(l.label)}</a>`)
    .join("");
}

function updateCharCount() {
  const n = R.bioOutput.value.length;
  R.charCount.textContent = `${n} chars`;
}

// ─── AVATAR ──────────────────────────────────────────────────────────────────

function handleAvatar(e) {
  const file = e.target.files?.[0];
  if (!file) { state.avatarData = ""; updatePreview(); return; }
  const reader = new FileReader();
  reader.onload = () => { state.avatarData = reader.result; updatePreview(); };
  reader.readAsDataURL(file);
}

function makeAvatar(name) {
  const initials = name.split(" ").map((p) => p[0] || "").join("").slice(0, 2).toUpperCase() || "AB";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><defs><linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2a2a2a"/><stop offset="100%" stop-color="#0e0e0e"/></linearGradient></defs><rect width="256" height="256" rx="56" fill="url(#g)"/><text x="50%" y="54%" text-anchor="middle" fill="#f0f0ee" font-size="94" font-family="Inter,Arial,sans-serif" font-weight="700">${initials}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// ─── COPY ────────────────────────────────────────────────────────────────────

async function copyBio() {
  const text = R.bioOutput.value.trim();
  if (!text) { setStatus("Nothing to copy.", "error"); return; }
  try {
    await navigator.clipboard.writeText(text);
    setStatus("Bio copied.", "ok");
  } catch {
    R.bioOutput.select();
    document.execCommand("copy");
    setStatus("Bio copied.", "ok");
  }
}

// ─── DOWNLOAD PNG ────────────────────────────────────────────────────────────

// Export size presets. For fixed-size targets the card is rendered into a
// temporary staged wrapper sized to the target aspect, so html2canvas captures
// exactly the output dimensions (no letterboxing).
const EXPORT_SIZES = {
  card:              { w: null,   h: null,   suffix: "" },
  "square-1080":     { w: 1080,   h: 1080,   suffix: "-1080x1080" },
  "story-1080x1920": { w: 1080,   h: 1920,   suffix: "-1080x1920" },
  "banner-1500x500": { w: 1500,   h: 500,    suffix: "-1500x500" },
};

async function downloadCard() {
  try {
    setStatus("Rendering PNG...");
    const sizeKey = R.exportSize.value;
    const target = EXPORT_SIZES[sizeKey] || EXPORT_SIZES.card;
    let canvas;

    // Render the preview card natively (2.5×), then contain-fit it onto the
    // selected target canvas. Pure canvas math — no DOM staging quirks — so
    // the card is never cropped or stretched, whatever the target aspect.
    const scaleFactor = Number(state.exportSettings.scale) || 2;
    const base = await html2canvas(R.captureCard, { backgroundColor: state.exportSettings.transparent ? null : "#ffffff", scale: scaleFactor, useCORS: true, logging: false });

    if (!target.w) {
      canvas = base;
    } else {
      // Contain: scale the base render to fit inside target.w × target.h,
      // centered with transparent padding.
      const scale = Math.min(target.w / base.width, target.h / base.height);
      const dw = Math.round(base.width * scale);
      const dh = Math.round(base.height * scale);
      canvas = document.createElement("canvas");
      canvas.width = target.w;
      canvas.height = target.h;
      const ctx = canvas.getContext("2d");
      if (!state.exportSettings.transparent) { ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, target.w, target.h); }
      ctx.drawImage(base, Math.round((target.w - dw) / 2), Math.round((target.h - dh) / 2), dw, dh);
    }

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `${slugify(state.exportSettings.filename || R.displayName.value.trim() || "aesthetic-bio")}-card${target.suffix}.png`;
    link.click();
    setStatus("PNG downloaded.", "ok");
  } catch (err) {
    console.error(err);
    setStatus("PNG failed. Check console.", "error");
  }
}

// ─── BIO BANNER BUILDER ───────────────────────────────────────────────────────

function bindBanner(loadSaved = true) {
  if (loadSaved) {
    const saved = lsJSON("abm2_banner", null);
    if (saved && typeof saved === "object") state.banner = { ...state.banner, ...saved };
  }
  R.bannerPreset.value = state.banner.preset;
  R.bannerBackground.value = state.banner.background;
  R.bannerHeadline.value = state.banner.headline;
  R.bannerSubtitle.value = state.banner.subtitle;
  R.bannerAccent.value = state.banner.accent;
  R.bannerAlign.value = state.banner.align;
  R.bannerShowAvatar.checked = state.banner.showAvatar;
  R.bannerShowHandle.checked = state.banner.showHandle;
}

function syncBannerFromControls() {
  state.banner = {
    ...state.banner,
    preset: R.bannerPreset.value,
    background: R.bannerBackground.value,
    headline: R.bannerHeadline.value.trim(),
    subtitle: R.bannerSubtitle.value.trim(),
    accent: R.bannerAccent.value,
    align: R.bannerAlign.value,
    showAvatar: R.bannerShowAvatar.checked,
    showHandle: R.bannerShowHandle.checked,
  };
  lsSet("abm2_banner", JSON.stringify(state.banner));
  renderBanner();
}

function renderBanner() {
  if (!R.captureBanner) return;
  const b = state.banner;
  const preset = BANNER_PRESETS[b.preset] || BANNER_PRESETS.github;
  const name = R.displayName.value.trim() || "Your Name";
  const handle = fmtHandle(R.handle.value.trim() || "username");
  const title = R.titleLine.value.trim() || b.subtitle || "AI builder · designer · open source";
  const avatar = state.avatarData || makeAvatar(name);
  const bg = BANNER_BACKGROUNDS.includes(b.background) ? b.background : "midnight";
  const align = ["left", "center", "right"].includes(b.align) ? b.align : "left";

  R.captureBanner.className = `bio-banner banner-bg-${bg} banner-align-${align}`;
  R.captureBanner.style.setProperty("--banner-accent", b.accent || "#a99bff");
  R.bannerName.textContent = name;
  R.bannerHeadlinePreview.textContent = b.headline || "Your next chapter starts here.";
  R.bannerSubtitlePreview.textContent = title;
  R.bannerHandlePreview.textContent = b.showHandle ? handle : "";
  R.bannerAvatar.src = avatar;
  R.bannerAvatar.hidden = !b.showAvatar;
  R.bannerHandlePreview.hidden = !b.showHandle;
  R.bannerSizeLabel.textContent = preset.label;
  R.captureBanner.dataset.width = preset.w;
  R.captureBanner.dataset.height = preset.h;
  R.captureBanner.style.aspectRatio = `${preset.w} / ${preset.h}`;
}

function resetBanner() {
  state.banner = {
    preset: "github", background: "midnight", headline: "Building the future, one idea at a time.",
    subtitle: "AI builder · designer · open source", accent: "#a99bff", align: "left", showAvatar: true, showHandle: true,
  };
  bindBanner(false);
  syncBannerFromControls();
  setStatus("Banner reset.");
}

async function downloadBanner() {
  try {
    const preset = BANNER_PRESETS[state.banner.preset] || BANNER_PRESETS.github;
    setStatus("Rendering banner...");
    const scaleFactor = Number(state.exportSettings.scale) || 2;
    const base = await html2canvas(R.captureBanner, { backgroundColor: state.exportSettings.transparent ? null : "#ffffff", scale: scaleFactor, useCORS: true, logging: false });
    const canvas = document.createElement("canvas");
    canvas.width = preset.w;
    canvas.height = preset.h;
    const ctx = canvas.getContext("2d");
    if (!state.exportSettings.transparent) { ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, preset.w, preset.h); }
    ctx.drawImage(base, 0, 0, preset.w, preset.h);
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `${slugify(state.exportSettings.filename || R.displayName.value.trim() || "bio-builder")}-${state.banner.preset}-banner.png`;
    link.click();
    setStatus("Banner downloaded.", "ok");
  } catch (err) {
    console.error(err);
    setStatus("Banner export failed. Check console.", "error");
  }
}

// ─── CLEAR ───────────────────────────────────────────────────────────────────

function clearForm() {
  R.bioForm.reset();
  state.avatarData = "";
  R.bioOutput.value = "";
  R.platform.value  = "Instagram";
  R.tone.value      = "Minimal";
  R.aesthetic.value = "Notion";
  setCardTheme("notion");
  lsSet(LS_CUSTOM_LINKS, "[]");
  renderCustomLinks();
  updatePreview();
  resetBanner();
  setStatus("Form cleared.");
}

// ─── SHARE STATE ─────────────────────────────────────────────────────────────

// Encode the current setup (excluding the API key and avatar) into a URL so the
// whole form can be restored by anyone opening the link. Everything in the URL
// is validated when decoded, so malformed payloads just fail silently.
function buildSharePayload() {
  return {
    ...gatherForm(),
    avatarData: "", // avatars are too large for a URL — dropped from share links
  };
}

async function shareState() {
  let url;
  try {
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(buildSharePayload()))));
    url = `${window.location.origin}${window.location.pathname}?share=${encoded}`;
  } catch (err) {
    console.error(err);
    setStatus("Share failed — setup too large to encode.", "error");
    return;
  }
  try {
    await navigator.clipboard.writeText(url);
    setStatus("Share link copied to clipboard.", "ok");
  } catch {
    setStatus("Copied to clipboard failed — try again.", "error");
  }
}

function loadShareState() {
  const params = new URLSearchParams(window.location.search);
  const share = params.get("share");
  if (!share) return;

  try {
    const parsed = JSON.parse(decodeURIComponent(escape(atob(share))));
    if (parsed && typeof parsed === "object") applyForm(parsed);
    setStatus("Setup restored from shared link.", "ok");
  } catch {
    console.warn("Share link could not be decoded.");
  }
}

R.shareStateBtn.addEventListener("click", shareState);

// ─── HISTORY ─────────────────────────────────────────────────────────────────

function addHistory(text) {
  if (!text) return;
  state.history = [text, ...state.history.filter((h) => h !== text)].slice(0, 5);
  saveHistoryLS();
  renderHistory();
}

function clearHistory() {
  state.history = [];
  saveHistoryLS();
  renderHistory();
  setStatus("History cleared.");
}

function saveHistoryLS() {
  lsSet(LS.history, JSON.stringify(state.history));
}

function renderHistory() {
  if (!state.history.length) {
    R.historyList.innerHTML = `<li class="history-empty">No bios yet — generate one to save it here.</li>`;
    return;
  }
  R.historyList.innerHTML = state.history
    .map((text, i) => `
      <li class="history-item">
        <div class="history-text">${esc(text)}</div>
        <div class="history-actions">
          <button class="history-action-btn use" data-haction="use" data-idx="${i}">Use</button>
          <button class="history-action-btn"     data-haction="del" data-idx="${i}">Delete</button>
        </div>
      </li>
    `)
    .join("");
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────

function gatherForm() {
  return {
    displayName:  R.displayName.value,
    handle:       R.handle.value,
    platform:     R.platform.value,
    tone:         R.tone.value,
    aesthetic:    R.aesthetic.value,
    titleLine:    R.titleLine.value,
    keywords:     R.keywords.value,
    about:        R.about.value,
    cta:          R.cta.value,
    location:     R.location.value,
    websiteUrl:   R.websiteUrl.value,
    githubUrl:    R.githubUrl.value,
    twitterUrl:   R.twitterUrl.value,
    instagramUrl: R.instagramUrl.value,
    customLinks:  gatherCustomLinks(),
    bioOutput:    R.bioOutput.value,
    cardTheme:    state.cardTheme,
    font:         state.font,
    avatarData:   state.avatarData,
    banner:       state.banner,
    brandKit:     state.brandKit,
    exportSettings: state.exportSettings,
    schemaVersion: PROJECT_SCHEMA_VERSION,
  };
}

function applyForm(data) {
  R.displayName.value  = data.displayName  || "";
  R.handle.value       = data.handle       || "";
  R.platform.value     = data.platform     || "Instagram";
  R.tone.value         = data.tone         || "Minimal";
  R.aesthetic.value    = data.aesthetic    || "Notion";
  R.titleLine.value    = data.titleLine    || "";
  R.keywords.value     = data.keywords     || "";
  R.about.value        = data.about        || "";
  R.cta.value          = data.cta          || "";
  R.location.value     = data.location     || "";
  R.websiteUrl.value   = data.websiteUrl   || "";
  R.githubUrl.value    = data.githubUrl    || "";
  R.twitterUrl.value   = data.twitterUrl   || "";
  R.instagramUrl.value = data.instagramUrl || "";
  applyCustomLinks(data.customLinks || []);
  R.bioOutput.value    = data.bioOutput    || "";
  state.avatarData      = data.avatarData   || "";
  if (data.cardTheme) setCardTheme(data.cardTheme);
  if (data.font) setFont(data.font);
  if (data.banner && typeof data.banner === "object") {
    state.banner = { ...state.banner, ...data.banner };
    bindBanner(false);
  }
  if (data.brandKit && typeof data.brandKit === "object") {
    state.brandKit = { ...state.brandKit, ...data.brandKit };
    bindBrandKit();
  }
  if (data.exportSettings && typeof data.exportSettings === "object") {
    state.exportSettings = { ...state.exportSettings, ...data.exportSettings };
    bindExportSettings();
  }
  updatePreview();
  renderBanner();
  renderQualityChecks();
}

function promptSaveProject() {
  R.projectName.focus();
  scrollToSection("projects");
  setStatus("Enter a project name below to save.");
}

function saveProject() {
  const name = R.projectName.value.trim();
  if (!name) { setStatus("Enter a project name first.", "error"); R.projectName.focus(); return; }

  const project = {
    name,
    date: new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }),
    favorite: false,
    data: gatherForm(),
  };

  state.projects = [project, ...state.projects.filter((p) => p.name !== name)].slice(0, 20);
  lsSet(LS.projects, JSON.stringify(state.projects));
  renderProjects();
  R.projectName.value = "";
  setStatus(`Project "${name}" saved.`, "ok");
}

function loadProject(idx) {
  const p = state.projects[idx];
  if (!p) return;
  applyForm(p.data);
  setStatus(`Project "${p.name}" loaded.`, "ok");
}

function deleteProject(idx) {
  const p = state.projects[idx];
  if (!p) return;
  state.projects.splice(idx, 1);
  lsSet(LS.projects, JSON.stringify(state.projects));
  renderProjects();
  setStatus("Project deleted.");
}

function renderProjects() {
  if (!state.projects.length) {
    R.projectsList.innerHTML = `<li class="history-empty">No saved projects yet.</li>`;
    return;
  }
  R.projectsList.innerHTML = state.projects
    .map((p, i) => `
      <li class="project-item">
        <div>
          <div class="project-name">${esc(p.name)}</div>
          <div class="project-date">${esc(p.date)}</div>
        </div>
        <div class="project-item-actions">
          <button class="ghost-btn small" data-paction="load" data-idx="${i}">Load</button>
          <button class="ghost-btn small" data-paction="duplicate" data-idx="${i}">Duplicate</button>
          <button class="ghost-btn small" data-paction="rename" data-idx="${i}">Rename</button>
          <button class="ghost-btn small" data-paction="favorite" data-idx="${i}" aria-label="${p.favorite ? "Unfavorite" : "Favorite"} project">${p.favorite ? "★" : "☆"}</button>
          <button class="ghost-btn small" data-paction="delete" data-idx="${i}">Delete</button>
        </div>
      </li>
    `)
    .join("");
}

// ─── PROJECT BACKUPS, HISTORY, TEMPLATES, BRAND KIT, QUALITY ─────────────────

function captureEditorState() {
  return JSON.parse(JSON.stringify(gatherForm()));
}

function resetUndoHistory() {
  state.undoStack = [captureEditorState()];
  state.redoStack = [];
  updateUndoButtons();
}

function queueUndoSnapshot() {
  if (state.historyMute) return;
  clearTimeout(state.historyTimer);
  state.historyTimer = setTimeout(() => {
    const current = captureEditorState();
    const previous = state.undoStack[state.undoStack.length - 1];
    if (JSON.stringify(current) === JSON.stringify(previous)) return;
    state.undoStack.push(current);
    if (state.undoStack.length > MAX_UNDO_STEPS) state.undoStack.shift();
    state.redoStack = [];
    updateUndoButtons();
  }, 250);
}

function undo() {
  if (state.undoStack.length < 2) return;
  const current = state.undoStack.pop();
  state.redoStack.push(current);
  state.historyMute = true;
  applyForm(state.undoStack[state.undoStack.length - 1]);
  state.historyMute = false;
  updateUndoButtons();
  setStatus("Undid last change.", "ok");
}

function redo() {
  if (!state.redoStack.length) return;
  const next = state.redoStack.pop();
  state.undoStack.push(next);
  state.historyMute = true;
  applyForm(next);
  state.historyMute = false;
  updateUndoButtons();
  setStatus("Redid change.", "ok");
}

function updateUndoButtons() {
  if (!R.undoBtn || !R.redoBtn) return;
  R.undoBtn.disabled = state.undoStack.length < 2;
  R.redoBtn.disabled = !state.redoStack.length;
}

function handleUndoShortcut(e) {
  if (!(e.ctrlKey || e.metaKey) || e.key.toLowerCase() !== "z") return;
  e.preventDefault();
  if (e.shiftKey) redo(); else undo();
}

function bindNetworkStatus() { updateNetworkStatus(); }
function updateNetworkStatus() {
  if (!R.networkStatus) return;
  const online = navigator.onLine;
  R.networkStatus.textContent = online ? "Online" : "Offline editing";
  R.networkStatus.classList.toggle("offline", !online);
}

function bindBrandKit() {
  const saved = lsJSON("abm2_brand_kit", null);
  if (saved && typeof saved === "object") state.brandKit = { ...state.brandKit, ...saved };
  R.brandAccent.value = state.brandKit.accent;
  R.brandSecondary.value = state.brandKit.secondary;
  R.brandTagline.value = state.brandKit.tagline;
  R.brandCta.value = state.brandKit.cta;
}

function saveBrandKit() {
  state.brandKit = { accent: R.brandAccent.value, secondary: R.brandSecondary.value, tagline: R.brandTagline.value.trim(), cta: R.brandCta.value.trim() };
  lsSet("abm2_brand_kit", JSON.stringify(state.brandKit));
  queueUndoSnapshot();
}

function applyBrandKit() {
  saveBrandKit();
  state.banner.accent = state.brandKit.accent;
  if (state.brandKit.tagline) state.banner.subtitle = state.brandKit.tagline;
  if (state.brandKit.cta) R.cta.value = state.brandKit.cta;
  bindBanner(false);
  updatePreview();
  queueUndoSnapshot();
  setStatus("Brand kit applied.", "ok");
}

function bindExportSettings() {
  R.exportFilename.value = state.exportSettings.filename || "";
  R.exportScale.value = state.exportSettings.scale || "2";
  R.exportTransparent.checked = state.exportSettings.transparent !== false;
}

function saveExportSettings() {
  state.exportSettings = { filename: R.exportFilename.value.trim(), scale: R.exportScale.value, transparent: R.exportTransparent.checked };
  lsSet("abm2_export_settings", JSON.stringify(state.exportSettings));
}

function renderTemplates() {
  R.templateGrid.innerHTML = TEMPLATES.map((t) => `
    <button class="template-card" type="button" data-template="${t.id}">
      <span class="template-swatch template-${t.background}" style="--template-accent:${t.accent}"></span>
      <span class="template-name">${esc(t.name)}</span>
      <span class="template-description">${esc(t.description)}</span>
      <span class="template-meta">${esc(t.card)} · ${esc(t.font)}</span>
    </button>`).join("");
}

function applyTemplate(id) {
  const template = TEMPLATES.find((item) => item.id === id);
  if (!template) return;
  setCardTheme(template.card);
  setFont(template.font);
  state.banner.background = template.background;
  state.banner.accent = template.accent;
  bindBanner(false);
  updatePreview();
  queueUndoSnapshot();
  setStatus(`${template.name} template applied.`, "ok");
}

function renderQualityChecks() {
  if (!R.qualityChecks) return;
  const checks = [];
  const bio = R.bioOutput.value.trim();
  const limit = charLimit(R.platform.value);
  if (!bio) checks.push({ type: "info", text: "Generate or write a bio to run quality checks." });
  else if (bio.length > limit) checks.push({ type: "error", text: `Bio is ${bio.length - limit} characters over the ${limit}-character ${R.platform.value} limit.` });
  else checks.push({ type: "ok", text: `Bio fits the ${R.platform.value} limit (${bio.length}/${limit}).` });
  if (!R.displayName.value.trim()) checks.push({ type: "warn", text: "Add a display name so cards and banners feel complete." });
  if (R.handle.value.trim() && !/^@?[a-zA-Z0-9._-]{2,40}$/.test(R.handle.value.trim())) checks.push({ type: "warn", text: "Handle contains unusual characters; check the platform format." });
  const urls = [R.websiteUrl.value, R.githubUrl.value, R.twitterUrl.value, R.instagramUrl.value, ...gatherCustomLinks().map((l) => l.url)];
  if (urls.some((url) => url && !safeUrl(url))) checks.push({ type: "error", text: "One or more links need a valid http:// or https:// URL." });
  if (/\b(gsk_|sk-[A-Za-z0-9])/i.test(`${R.bioOutput.value} ${R.about.value}`)) checks.push({ type: "error", text: "Possible API-key text detected. Remove secrets before sharing or exporting." });
  R.qualityChecks.innerHTML = checks.map((c) => `<div class="quality-item quality-${c.type}"><span aria-hidden="true">${c.type === "ok" ? "✓" : c.type === "error" ? "!" : c.type === "warn" ? "△" : "i"}</span><span>${esc(c.text)}</span></div>`).join("");
}

function projectPayload() {
  return { schemaVersion: PROJECT_SCHEMA_VERSION, exportedAt: new Date().toISOString(), data: captureEditorState() };
}

function exportProjectBackup() {
  const blob = new Blob([JSON.stringify(projectPayload(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${slugify(R.displayName.value.trim() || "bio-builder")}-project.json`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 500);
  setStatus("Project backup exported.", "ok");
}

function normalizeImportedProject(payload) {
  const source = payload?.data && typeof payload.data === "object" ? payload.data : payload;
  if (!source || typeof source !== "object") throw new Error("Invalid project format.");
  if (payload.schemaVersion && Number(payload.schemaVersion) > PROJECT_SCHEMA_VERSION) throw new Error("This backup was created by a newer version.");
  const allowed = captureEditorState();
  const clean = { ...allowed };
  Object.keys(allowed).forEach((key) => { if (Object.prototype.hasOwnProperty.call(source, key)) clean[key] = source[key]; });
  clean.displayName = String(clean.displayName || "").slice(0, 100);
  clean.handle = String(clean.handle || "").slice(0, 80);
  clean.bioOutput = String(clean.bioOutput || "").slice(0, 2000);
  clean.customLinks = Array.isArray(clean.customLinks) ? clean.customLinks.slice(0, MAX_CUSTOM_LINKS) : [];
  return clean;
}

function importProjectBackup(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  if (file.size > 2_000_000) { setStatus("Backup is too large to import.", "error"); e.target.value = ""; return; }
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      const data = normalizeImportedProject(payload);
      state.historyMute = true;
      applyForm(data);
      state.historyMute = false;
      resetUndoHistory();
      setStatus("Project backup imported.", "ok");
    } catch (err) {
      setStatus(err.message || "Backup could not be imported.", "error");
    }
    e.target.value = "";
  };
  reader.readAsText(file);
}

function duplicateProject(idx) {
  const project = state.projects[idx];
  if (!project) return;
  const copy = { ...project, name: `${project.name} copy`, date: new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }), favorite: false, data: JSON.parse(JSON.stringify(project.data)) };
  state.projects = [copy, ...state.projects].slice(0, 20);
  lsSet(LS.projects, JSON.stringify(state.projects));
  renderProjects();
  setStatus("Project duplicated.", "ok");
}

function renameProject(idx) {
  const project = state.projects[idx];
  if (!project) return;
  const name = window.prompt("Rename project", project.name)?.trim();
  if (!name) return;
  project.name = name.slice(0, 80);
  lsSet(LS.projects, JSON.stringify(state.projects));
  renderProjects();
  setStatus("Project renamed.", "ok");
}

function toggleFavoriteProject(idx) {
  const project = state.projects[idx];
  if (!project) return;
  project.favorite = !project.favorite;
  state.projects = [project, ...state.projects.filter((_, i) => i !== idx)].sort((a, b) => Number(b.favorite) - Number(a.favorite));
  lsSet(LS.projects, JSON.stringify(state.projects));
  renderProjects();
}

// ─── STATUS ──────────────────────────────────────────────────────────────────

function setStatus(msg, type = "") {
  R.statusText.textContent = msg;
  R.statusText.className   = "meta-label" + (type === "ok" ? " ok" : type === "error" ? " error" : "");
}

// ─── UTILS ───────────────────────────────────────────────────────────────────

function fmtHandle(v) { return v.startsWith("@") ? v : `@${v}`; }
// Only accept well-formed http(s) URLs. Control characters / whitespace are
// stripped before parsing, then the URL must resolve with an http(s) scheme.
function safeUrl(v) {
  const clean = String(v).split("").filter((ch) => ch.charCodeAt(0) > 0x1F && ch.charCodeAt(0) !== 0x7F).join("").trim();
  if (!clean) return "";
  try {
    const u = new URL(clean);
    if (u.protocol === "http:" || u.protocol === "https:") return u.href;
  } catch { /* Malformed URL — treat as invalid. */ }
  return "";
}
function slugify(t) { return t.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }

function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) =>
    ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c])
  );
}
function escAttr(str) { return esc(str).replace(/`/g, ""); }

function ls(key) { try { return localStorage.getItem(key); } catch { return null; } }
function lsSet(key, val) { try { localStorage.setItem(key, val); } catch { /* Deliberately silent: storage may be full or disabled. */ } }
function lsJSON(key, def) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; } catch { return def; }
}