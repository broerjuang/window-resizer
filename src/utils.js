// @flow

const MOBILE_DEFAULT = 450;
const TABLET_DEFAULT = 750;
const DESKTOP_DEFAULT = 1200;

export type BreakPoint = {
  mobile?: number,
  tabet?: number,
  desktop?: number
};

export type Screen = "MOBILE" | "TABLET" | "DESKTOP";

export const DEFAULT_BREAKPOINT = {
  mobile: MOBILE_DEFAULT,
  tablet: TABLET_DEFAULT,
  desktop: DESKTOP_DEFAULT
};

function getCurrentBreakPointType(width: number, breakPoint: ?BreakPoint) {
  if (width <= ((breakPoint && breakPoint.mobile) || MOBILE_DEFAULT)) {
    return "MOBILE";
  } else if (width >= ((breakPoint && breakPoint.desktop) || DESKTOP_DEFAULT)) {
    return "DESKTOP";
  } else {
    return "TABLET";
  }
}

export default getCurrentBreakPointType;
