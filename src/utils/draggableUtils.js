export function getControlPosition(e) {
  return offsetXYFromParentOf(e);
}

export function offsetXYFromParentOf(evt) {
  const offsetParent = evt.target.offsetParent || document.body;
  const offsetParentRect = evt.offsetParent === document.body ? {left: 0, top: 0} : offsetParent.getBoundingClientRect();
  const x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
  const y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;
  return {x, y};
}

export function createCoreData(lastX, lastY, x, y) {
  const isStart = !isNum(lastX);
  if (isStart) {
    return {
      deltaX: 0, deltaY: 0,
      lastX: x, lastY: y,
      x: x, y: y
    };
  } else {
    return {
      deltaX: x - lastX, deltaY: y - lastY,
      lastX: lastX, lastY: lastY,
      x: x, y: y
    };
  }
}


function isNum(num)  {
  return typeof num === 'number' && !isNaN(num);
}

