export function mediaQueryIsMobile(): boolean {
  const matchMedia = window.matchMedia("(max-width: 480px)");
  return matchMedia.matches;
}

export function mediaQueryIsTablet(): boolean {
  const matchMedia = window.matchMedia("(max-width: 992px)");
  return matchMedia.matches;
}

export function mediaQueryIsDesktop(): boolean {
  const matchMedia = window.matchMedia("(min-width: 1920px)");
  return matchMedia.matches;
}