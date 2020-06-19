(function (d, w) {
  const baseSize = 75
  const doc = d.documentElement
  function rem() {
    const width=doc.clientWidth||doc.getBoundingClientRect().width||window.screen.availWidth;
    const scale = width / 750;
    doc.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
  }
  rem()
  w.addEventListener('resize', rem)
})(document, window)