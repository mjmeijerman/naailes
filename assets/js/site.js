/* Alleen de mobiele menuknop en externe links. Verder is de site statisch HTML. */
(function () {
  var links = document.querySelectorAll('a[href]');
  Array.prototype.forEach.call(links, function (link) {
    var href = link.getAttribute('href') || '';
    if (!/^https?:\/\//i.test(href)) return;
    if (link.hostname === window.location.hostname) return;
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
})();
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });

  nav.addEventListener('click', function (event) {
    if (event.target.tagName === 'A' && window.innerWidth < 896) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }
  });
})();
