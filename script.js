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
});
