/* =============================================
   CTRL+LEARNBG — Main JavaScript
   ============================================= */

// ---- Particles Background ----
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], animId;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function Particle() {
    this.reset = function() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.r  = Math.random() * 1.5 + 0.3;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '59,130,246' : '139,92,246';
    };
    this.reset();
  }

  function init() {
    resize();
    const count = Math.min(Math.floor((W * H) / 12000), 100);
    particles = Array.from({ length: count }, () => new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(59,130,246,${0.08 * (1 - dist/100)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    drawConnections();
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.fill();
    });
    animId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => { resize(); });
  init();
  animate();
})();

// ---- Navbar ----
(function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      const isOpen = mobileNav.classList.contains('open');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
    // Close on link click
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
  });
})();

// ---- Tabs ----
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById('tab-' + target);
      if (panel) panel.classList.add('active');
    });
  });
}

// ---- Scroll Reveal ----
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

// ---- Task Answer Toggle ----
function initTaskToggles() {
  document.querySelectorAll('.task-answer-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const ans = btn.nextElementSibling;
      if (ans && ans.classList.contains('task-answer')) {
        ans.classList.toggle('show');
        btn.textContent = ans.classList.contains('show') ? '🙈 Скрий отговора' : '💡 Покажи отговора';
      }
    });
  });
}

// ---- Quiz Engine ----
function initQuiz(questions, containerId) {
  const container = document.getElementById(containerId);
  if (!container || !questions || !questions.length) return;

  let current = 0;
  let score = 0;
  let answered = false;

  function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  function renderQuestion() {
    if (current >= questions.length) {
      showResult();
      return;
    }
    answered = false;
    const q = questions[current];
    const progress = ((current) / questions.length * 100).toFixed(0);

    let optionsHTML = '';
    if (q.type === 'mc') {
      const opts = q.shuffle !== false ? shuffle(q.options) : q.options;
      const letters = ['А', 'Б', 'В', 'Г'];
      opts.forEach((opt, i) => {
        optionsHTML += `
          <button class="option-btn" data-value="${opt}" onclick="checkAnswer(this, '${q.correct}', '${containerId}')">
            <span class="opt-letter">${letters[i]}</span>
            ${opt}
          </button>`;
      });
    } else if (q.type === 'text') {
      optionsHTML = `
        <input type="text" class="text-answer" id="text-ans-${containerId}" placeholder="Въведи отговора си..." onkeydown="if(event.key==='Enter') checkTextAnswer('${q.correct}', '${containerId}')">
        <div style="margin-top:0.75rem;">
          <button class="btn btn-outline btn-sm" onclick="checkTextAnswer('${q.correct}', '${containerId}')">✅ Провери</button>
        </div>`;
    } else if (q.type === 'tf') {
      optionsHTML = `
        <button class="option-btn" data-value="Вярно" onclick="checkAnswer(this, '${q.correct}', '${containerId}')">
          <span class="opt-letter">А</span>Вярно ✅
        </button>
        <button class="option-btn" data-value="Грешно" onclick="checkAnswer(this, '${q.correct}', '${containerId}')">
          <span class="opt-letter">Б</span>Грешно ❌
        </button>`;
    }

    container.innerHTML = `
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${progress}%"></div></div>
      <div class="quiz-meta">
        <span class="quiz-counter">Въпрос ${current + 1} от ${questions.length}</span>
        <span class="quiz-score-badge">⭐ ${score} точки</span>
      </div>
      <div class="question-card">
        <span class="question-type-label">${q.type === 'mc' ? '▣ МНОЖЕСТВЕН ИЗБОР' : q.type === 'tf' ? '◎ ВЯРНО / ГРЕШНО' : '✎ СВОБОДЕН ОТГОВОР'}</span>
        <p class="question-text">${q.question}</p>
        <div class="options-grid">${optionsHTML}</div>
        <div class="quiz-feedback" id="fb-${containerId}"></div>
      </div>
      <div class="quiz-nav">
        <button class="btn btn-outline btn-sm" onclick="skipQuestion('${containerId}')" id="skip-${containerId}">Пропусни →</button>
        <button class="btn btn-primary" onclick="nextQuestion('${containerId}')" id="next-${containerId}" style="display:none">Следващ →</button>
      </div>`;
  }

  window[`quizState_${containerId}`] = { questions, current: () => current, setCurrent: v => current = v, score: () => score, setScore: v => score = v, render: renderQuestion };

  renderQuestion();
}

window.checkAnswer = function(btn, correct, containerId) {
  const state = window[`quizState_${containerId}`];
  if (!state) return;
  const container = document.getElementById(containerId);
  const allBtns = container.querySelectorAll('.option-btn');
  const fb = document.getElementById('fb-' + containerId);

  allBtns.forEach(b => {
    b.disabled = true;
    if (b.dataset.value === correct) b.classList.add('correct');
  });

  if (btn.dataset.value === correct) {
    btn.classList.add('correct');
    fb.className = 'quiz-feedback correct-fb';
    fb.textContent = '✅ Браво! Верен отговор!';
    state.setScore(state.score() + 1);
  } else {
    btn.classList.add('wrong');
    fb.className = 'quiz-feedback wrong-fb';
    fb.textContent = `❌ Грешно. Верният отговор е: ${correct}`;
  }

  const skip = document.getElementById('skip-' + containerId);
  const next = document.getElementById('next-' + containerId);
  if (skip) skip.style.display = 'none';
  if (next) next.style.display = 'inline-flex';
};

window.checkTextAnswer = function(correct, containerId) {
  const state = window[`quizState_${containerId}`];
  if (!state) return;
  const input = document.getElementById('text-ans-' + containerId);
  const fb = document.getElementById('fb-' + containerId);
  if (!input) return;
  const val = input.value.trim().toLowerCase();
  const correctLower = correct.toLowerCase();
  input.disabled = true;
  if (val === correctLower || correctLower.split('|').some(c => val === c.trim())) {
    fb.className = 'quiz-feedback correct-fb';
    fb.textContent = '✅ Браво! Верен отговор!';
    state.setScore(state.score() + 1);
  } else {
    fb.className = 'quiz-feedback wrong-fb';
    fb.textContent = `❌ Грешно. Верният отговор е: ${correct.split('|')[0]}`;
  }
  const skip = document.getElementById('skip-' + containerId);
  const next = document.getElementById('next-' + containerId);
  if (skip) skip.style.display = 'none';
  if (next) next.style.display = 'inline-flex';
};

window.skipQuestion = function(containerId) {
  const state = window[`quizState_${containerId}`];
  if (!state) return;
  state.setCurrent(state.current() + 1);
  state.render();
};

window.nextQuestion = function(containerId) {
  const state = window[`quizState_${containerId}`];
  if (!state) return;
  state.setCurrent(state.current() + 1);
  state.render();
};

function showResult() { /* overridden per quiz instance */ }

// ---- Generic Quiz Result Renderer ----
function renderQuizResult(container, score, total) {
  const pct = Math.round(score / total * 100);
  let emoji = '😔', msg = 'Не се притеснявай — учи теорията и опитай отново!', title = 'Продължавай напред!';
  if (pct >= 90) { emoji = '🏆'; title = 'Отличен резултат!'; msg = 'Великолепно! Почти перфектен!'; }
  else if (pct >= 70) { emoji = '🎯'; title = 'Много добре!'; msg = 'Добро представяне! Можеш да постигнеш и повече!'; }
  else if (pct >= 50) { emoji = '👍'; title = 'Горе-долу!'; msg = 'Добро начало! Прегледай грешките.'; }

  container.innerHTML = `
    <div class="result-screen">
      <div class="result-emoji">${emoji}</div>
      <h2 class="result-title">${title}</h2>
      <div class="result-score">${score}/${total}</div>
      <p class="result-msg">${pct}% правилни отговори — ${msg}</p>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="location.reload()">🔄 Опитай отново</button>
        <a href="index.html" class="btn btn-outline">🏠 Начало</a>
      </div>
    </div>`;
}

// ---- Stat Counter Animation ----
function animateCounters() {
  document.querySelectorAll('.stat-value[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    let start = 0;
    const dur = 1500;
    const step = dur / 60;
    const inc = target / 60;
    const timer = setInterval(() => {
      start += inc;
      if (start >= target) { start = target; clearInterval(timer); }
      el.textContent = Math.floor(start) + suffix;
    }, step);
  });
}

// ---- Init Everything ----
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initScrollReveal();
  initTaskToggles();

  // Counter animation on stats bar visibility
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { animateCounters(); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(statsBar);
  }
});
