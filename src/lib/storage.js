// localStorage helpers for bookmarks, theme and calculator settings.

export const BOOKMARKS_KEY = "mushuk_olami_bookmarks";
export const CALC_KEY = "mushuk_olami_calc";
export const THEME_KEY = "mushuk_olami_theme";

export function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function isBookmarked(id) {
  return getBookmarks().some((b) => b.id === id);
}

export function toggleBookmark(item) {
  const list = getBookmarks();
  const idx = list.findIndex((b) => b.id === item.id);
  if (idx >= 0) {
    list.splice(idx, 1);
  } else {
    list.push(item);
  }
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("bookmarks-changed"));
  return idx < 0;
}

export function getCalcSettings() {
  try {
    return JSON.parse(localStorage.getItem(CALC_KEY) || "null") || null;
  } catch {
    return null;
  }
}

export function saveCalcSettings(settings) {
  localStorage.setItem(CALC_KEY, JSON.stringify(settings));
}

export function getStoredTheme() {
  return localStorage.getItem(THEME_KEY) || "light";
}

export function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  localStorage.setItem(THEME_KEY, theme);
}