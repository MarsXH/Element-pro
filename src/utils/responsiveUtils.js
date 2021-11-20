
import {cloneLayout, compact, correctBounds} from './grid-utils';

export function getBreakpointFromWidth(breakpoints, width) {
  const sorted = sortBreakpoints(breakpoints);
  let matching = sorted[0];
  for (let i = 1, len = sorted.length; i < len; i++) {
    const breakpointName = sorted[i];
    if (width > breakpoints[breakpointName]) matching = breakpointName;
  }
  return matching;
}

export function getColsFromBreakpoint(breakpoint, cols) {
  if (!cols[breakpoint]) {
    throw new Error("ResponsiveGridLayout: `cols` entry for breakpoint " + breakpoint + " is missing!");
  }
  return cols[breakpoint];
}

export function findOrGenerateResponsiveLayout(orgLayout, layouts, breakpoints, breakpoint, lastBreakpoint, cols, verticalCompact) {
  if (layouts[breakpoint]) return cloneLayout(layouts[breakpoint]);
  let layout = orgLayout;

  const breakpointsSorted = sortBreakpoints(breakpoints);
  const breakpointsAbove = breakpointsSorted.slice(breakpointsSorted.indexOf(breakpoint));
  for (let i = 0, len = breakpointsAbove.length; i < len; i++) {
    const b = breakpointsAbove[i];
    if (layouts[b]) {
      layout = layouts[b];
      break;
    }
  }
  layout = cloneLayout(layout || []);
  return compact(correctBounds(layout, {cols: cols}), verticalCompact);
}

export function generateResponsiveLayout(layout, breakpoints, breakpoint, lastBreakpoint, cols, verticalCompact) {
  
  layout = cloneLayout(layout || []);
  return compact(correctBounds(layout, {cols: cols}), verticalCompact);
}

export function sortBreakpoints(breakpoints) {
  const keys = Object.keys(breakpoints);
  return keys.sort(function(a, b) {
    return breakpoints[a] - breakpoints[b];
  });
}
