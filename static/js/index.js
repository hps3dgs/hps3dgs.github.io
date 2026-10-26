// The rate-distortion chart reports its own height, including in local-file previews
// where reading the iframe's document may be unavailable.
window.addEventListener('message', event => {
  const frame = document.getElementById('rate-distortion-frame');
  if (!frame || event.source !== frame.contentWindow || event.data?.type !== 'rate-distortion:resize') return;
  const height = event.data.height;
  if (typeof height !== 'number' || !Number.isFinite(height) || height <= 0) return;
  const fittedHeight = `${Math.ceil(height) + 16}px`;
  if (frame.style.height !== fittedHeight) frame.style.height = fittedHeight;
});

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.navbar-burger');
  const menu = document.querySelector('.navbar-menu');

  if (burger && menu) {
    burger.addEventListener('click', () => {
      const expanded = burger.classList.toggle('is-active');
      menu.classList.toggle('is-active', expanded);
      burger.setAttribute('aria-expanded', String(expanded));
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      burger.classList.remove('is-active');
      menu.classList.remove('is-active');
      burger.setAttribute('aria-expanded', 'false');
    }));
  }

  // The embedded charts stack on narrow screens and grow when fonts load.
  document.querySelectorAll('.plot-frame:not(#rate-distortion-frame)').forEach(frame => {
    let observer;
    const fit = () => {
      const figure = frame.contentDocument?.querySelector('.figure');
      if (!figure) return;
      const height = Math.ceil(figure.getBoundingClientRect().height) + 4;
      if (frame.style.height !== `${height}px`) frame.style.height = `${height}px`;
    };
    const observe = () => {
      observer?.disconnect();
      const figure = frame.contentDocument?.querySelector('.figure');
      if (!figure) return;
      observer = new ResizeObserver(fit);
      observer.observe(figure);
      fit();
    };
    frame.addEventListener('load', observe);
    if (frame.contentDocument?.readyState === 'complete') observe();
  });
});
