(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var codeBlocks = document.querySelectorAll('.code-block');

    codeBlocks.forEach(function (block) {
      var copyButton = block.querySelector('.copy-button');
      if (!copyButton) return;

      copyButton.addEventListener('click', function () {
        var code = block.querySelector('code');
        if (!code) return;

        var textToCopy = code.textContent;

        navigator.clipboard.writeText(textToCopy).then(
          function () {
            copyButton.classList.add('copied');
            copyButton.setAttribute('aria-label', 'Code copied!');

            setTimeout(function () {
              copyButton.classList.remove('copied');
              copyButton.setAttribute('aria-label', 'Copy code to clipboard');
            }, 2000);
          },
          function () {
            var textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();

            try {
              document.execCommand('copy');
              copyButton.classList.add('copied');
              setTimeout(function () {
                copyButton.classList.remove('copied');
              }, 2000);
            } catch (err) {
              console.error('Copy failed:', err);
            }

            document.body.removeChild(textarea);
          }
        );
      });
    });
  });
})();