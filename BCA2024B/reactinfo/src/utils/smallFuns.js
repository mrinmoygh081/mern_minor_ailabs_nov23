export const inputOnWheelPrevent = (e) => {
  // Prevent the input value change
  e.target.blur();

  // Prevent the page/container scrolling
  e.stopPropagation();

  // Refocus immediately, on the next tick (after the current     function is done)
  setTimeout(() => {
    e.target.focus();
  }, 0);
};
