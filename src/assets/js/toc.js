(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var article = document.querySelector('.post-content');
    var tocNav = document.getElementById('toc-nav');

    if (!article || !tocNav) return;

    var headings = article.querySelectorAll('h2, h3');
    if (headings.length < 2) {
      var tocContainer = document.querySelector('.post-toc');
      if (tocContainer) {
        tocContainer.style.display = 'none';
      }
      return;
    }

    var tocList = document.createElement('ul');
    tocList.setAttribute('role', 'list');
    tocList.style.listStyle = 'none';
    tocList.style.paddingLeft = '0';

    headings.forEach(function (heading, index) {
      if (!heading.id) {
        heading.id = 'heading-' + index;
      }

      var li = document.createElement('li');
      li.style.marginBottom = '0.5rem';

      var link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent.replace(/\s*\x23$/, '');
      link.style.textDecoration = 'none';

      if (heading.tagName === 'H3') {
        li.classList.add('toc-h3');
        link.style.paddingLeft = '1rem';
        link.style.fontSize = '0.875rem';
      }

      li.appendChild(link);
      tocList.appendChild(li);

      link.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = heading.id;
        var target = document.getElementById(targetId);

        if (target) {
          var headerOffset = 80;
          var elementPosition = target.getBoundingClientRect().top;
          var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          history.pushState(null, null, '#' + targetId);
        }
      });
    });

    tocNav.innerHTML = '';
    tocNav.appendChild(tocList);

    var details = tocNav.closest('details');
    if (details) {
      var tocLinks = tocNav.querySelectorAll('a');
      var observerOptions = {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0
      };

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            tocLinks.forEach(function (link) {
              link.style.color = '';
              link.style.fontWeight = '';
            });
            var activeLink = tocNav.querySelector('a[href="#' + entry.target.id + '"]');
            if (activeLink) {
              activeLink.style.color = 'var(--orange)';
              activeLink.style.fontWeight = '600';
            }
          }
        });
      }, observerOptions);

      headings.forEach(function (heading) {
        observer.observe(heading);
      });
    }
  });
})();