document.addEventListener('DOMContentLoaded', () => {
  const div = document.getElementById('eMail');

  div.addEventListener('click', () => {
    const text = Array.from(div.childNodes)
      .filter(node => node.nodeType === Node.TEXT_NODE)
      .map(node => node.textContent)
      .join('')
      .trim();

    navigator.clipboard.writeText(text).then(() => {
      div.classList.add('show-tooltip');
      setTimeout(() => {
        div.classList.remove('show-tooltip');
      }, 1500);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  });

  document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            window.open(card.dataset.link, '_blank');
        });
    });
});

