/* =============================================
   CTRL+LEARNBG — nav.js
   Инжектира navbar и footer в страниците
   ============================================= */

const NAV_TOPICS = [
  { href: 'topic-1.html', label: '💻 КС' },
  { href: 'topic-2.html', label: '🖥️ ОС' },
  { href: 'topic-3.html', label: '📊 Данни' },
  { href: 'topic-4.html', label: '🌐 Онлайн' },
  { href: 'topic-5.html', label: '🎨 Графика' },
  { href: 'topic-6.html', label: '⚙️ Алгоритми' },
  { href: 'topic-7.html', label: '📝 Word' },
  { href: 'topic-8.html', label: '📈 Excel' },
  { href: 'topic-9.html', label: '📊 PowerPoint' },
  { href: 'topic-10.html', label: '🔗 Интернет' },
];

function getRelPrefix() {
  // pages/ subfolder needs ../
  return window.location.pathname.includes('/pages/') ? '../' : '';
}

function buildNav() {
  const pre = getRelPrefix();
  const topicLinks = NAV_TOPICS.map(t =>
    `<li><a href="${pre}pages/${t.href}">${t.label}</a></li>`
  ).join('');

  const mobileLinks = NAV_TOPICS.map(t =>
    `<a href="${pre}pages/${t.href}">${t.label}</a>`
  ).join('');

  return `
  <nav class="navbar" id="navbar">
    <a class="nav-logo" href="${pre}index.html">Ctrl+<span>Learn</span>BG</a>
    <ul class="nav-links">
      <li><a href="${pre}index.html">🏠 Начало</a></li>
      ${topicLinks}
      <li><a href="${pre}pages/mega-test.html">🏆 Мега Тест</a></li>
    </ul>
    <button class="nav-hamburger" id="hamburger" aria-label="Меню">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="nav-mobile" id="nav-mobile">
    <a href="${pre}index.html">🏠 Начало</a>
    ${mobileLinks}
    <a href="${pre}pages/mega-test.html">🏆 Мега Тест</a>
  </div>`;
}

function buildFooter() {
  const pre = getRelPrefix();
  return `
  <footer>
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="brand-name">Ctrl+LearnBG</div>
        <p>Платформа за подготовка за Националната олимпиада по информационни технологии — 5-7 клас. Теория, задачи, тестове и видео уроци.</p>
      </div>
      <div class="footer-col">
        <h4>ТЕМИ</h4>
        <ul>
          ${NAV_TOPICS.map(t => `<li><a href="${pre}pages/${t.href}">${t.label}</a></li>`).join('')}
        </ul>
      </div>
      <div class="footer-col">
        <h4>ПОДГОТОВКА</h4>
        <ul>
          <li><a href="${pre}pages/mega-test.html">🏆 Мега Тест</a></li>
          <li><a href="${pre}index.html#topics">📚 Всички теми</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Ctrl+LearnBG — Подготовка за НОИТ, 5-7 клас</p>
      <p style="color: var(--text-muted); font-size:0.75rem;">Образователна платформа 🎓</p>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav before page-wrapper
  const wrapper = document.querySelector('.page-wrapper');
  if (wrapper) {
    wrapper.insertAdjacentHTML('beforebegin', buildNav());
  }
  // Inject footer at end of page-wrapper
  if (wrapper) {
    wrapper.insertAdjacentHTML('beforeend', buildFooter());
  }

  // Highlight current page
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    if (a.getAttribute('href') && a.getAttribute('href').includes(current)) {
      a.classList.add('active');
    }
  });
});
