document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        el.classList.add('in-view');
        var items = el.querySelectorAll('[data-animate]');
        items.forEach(function (node, i) {
          var hasDelay = node.style.getPropertyValue('--delay');
          if (!hasDelay) {
            node.style.setProperty('--delay', (i * 0.07) + 's');
          }
        });
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.15 });
  sections.forEach(function (el) { observer.observe(el); });

  var toggle = document.querySelector('.menu-toggle');
  var headerEl = document.querySelector('header');
  var navLinks = document.querySelectorAll('header nav a');
  if (toggle && headerEl) {
    toggle.addEventListener('click', function () {
      var isOpen = headerEl.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (headerEl.classList.contains('open')) {
          headerEl.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && headerEl.classList.contains('open')) {
        headerEl.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900 && headerEl.classList.contains('open')) {
        headerEl.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
