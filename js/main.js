/* ===== SCHEDULE DATA ===== */
const scheduleData = {
  senin: [
    { time:'08:00', name:'Bodybuilding Pagi', trainer:'Budi Santoso', duration:'90 Min', level:'all' },
    { time:'10:00', name:'Zumba Pagi', trainer:'Dewi Pratiwi', duration:'60 Min', level:'all' },
    { time:'16:00', name:'HIIT Cardio Sore', trainer:'Rizky Firmansyah', duration:'60 Min', level:'inter' },
    { time:'18:00', name:'Yoga & Stretching', trainer:'Sari Wulandari', duration:'60 Min', level:'all' },
    { time:'19:30', name:'Personal Training', trainer:'Budi Santoso', duration:'60 Min', level:'adv' },
  ],
  selasa: [
    { time:'08:00', name:'Yoga & Stretching', trainer:'Sari Wulandari', duration:'60 Min', level:'all' },
    { time:'10:00', name:'HIIT Cardio', trainer:'Rizky Firmansyah', duration:'60 Min', level:'inter' },
    { time:'16:00', name:'Zumba Sore', trainer:'Dewi Pratiwi', duration:'60 Min', level:'all' },
    { time:'18:00', name:'Bodybuilding Malam', trainer:'Budi Santoso', duration:'90 Min', level:'all' },
    { time:'20:00', name:'Personal Training', trainer:'Rizky Firmansyah', duration:'60 Min', level:'adv' },
  ],
  rabu: [
    { time:'08:00', name:'Bodybuilding Pagi', trainer:'Budi Santoso', duration:'90 Min', level:'all' },
    { time:'10:00', name:'Zumba Pagi', trainer:'Dewi Pratiwi', duration:'60 Min', level:'all' },
    { time:'16:00', name:'Yoga & Stretching', trainer:'Sari Wulandari', duration:'60 Min', level:'all' },
    { time:'18:00', name:'HIIT Blast', trainer:'Rizky Firmansyah', duration:'60 Min', level:'inter' },
    { time:'19:30', name:'Personal Training', trainer:'Budi Santoso', duration:'60 Min', level:'adv' },
  ],
  kamis: [
    { time:'08:00', name:'Zumba Pagi', trainer:'Dewi Pratiwi', duration:'60 Min', level:'all' },
    { time:'10:00', name:'HIIT Cardio', trainer:'Rizky Firmansyah', duration:'60 Min', level:'inter' },
    { time:'16:00', name:'Bodybuilding Sore', trainer:'Budi Santoso', duration:'90 Min', level:'all' },
    { time:'18:00', name:'Yoga & Stretching', trainer:'Sari Wulandari', duration:'60 Min', level:'all' },
    { time:'20:00', name:'Personal Training', trainer:'Budi Santoso', duration:'60 Min', level:'adv' },
  ],
  jumat: [
    { time:'08:00', name:'Bodybuilding Pagi', trainer:'Budi Santoso', duration:'90 Min', level:'all' },
    { time:'10:00', name:'Yoga & Stretching', trainer:'Sari Wulandari', duration:'60 Min', level:'all' },
    { time:'16:00', name:'Zumba Sore', trainer:'Dewi Pratiwi', duration:'60 Min', level:'all' },
    { time:'18:00', name:'HIIT Cardio', trainer:'Rizky Firmansyah', duration:'60 Min', level:'inter' },
    { time:'20:00', name:'Personal Training', trainer:'Budi Santoso', duration:'60 Min', level:'adv' },
  ],
  sabtu: [
    { time:'08:00', name:'Bodybuilding Pagi', trainer:'Budi Santoso', duration:'90 Min', level:'all' },
    { time:'10:00', name:'Zumba Party', trainer:'Dewi Pratiwi', duration:'60 Min', level:'all' },
    { time:'13:00', name:'HIIT Cardio', trainer:'Rizky Firmansyah', duration:'60 Min', level:'inter' },
    { time:'15:00', name:'Yoga & Stretching', trainer:'Sari Wulandari', duration:'60 Min', level:'all' },
    { time:'19:00', name:'Personal Training', trainer:'Budi Santoso', duration:'60 Min', level:'adv' },
  ],
  minggu: [
    { time:'08:00', name:'Yoga Pagi', trainer:'Sari Wulandari', duration:'60 Min', level:'all' },
    { time:'10:00', name:'Zumba Weekend', trainer:'Dewi Pratiwi', duration:'60 Min', level:'all' },
    { time:'15:00', name:'Bodybuilding Sore', trainer:'Budi Santoso', duration:'90 Min', level:'all' },
    { time:'17:00', name:'HIIT Cardio', trainer:'Rizky Firmansyah', duration:'60 Min', level:'inter' },
  ],
};

const levelLabel = { all:'Semua Level', inter:'Intermediate', adv:'Advanced' };
const levelClass = { all:'level-all', inter:'level-inter', adv:'level-adv' };

function renderSchedule(day) { renderScheduleTarget(day, "schedBody"); }
function renderScheduleTarget(day, tbodyId) {
  const rows = scheduleData[day] || [];
  const tbody = document.getElementById(tbodyId || 'schedBody');
  tbody.innerHTML = rows.map(r => `
    <tr class="schedule-row">
      <td><div class="sched-time">${r.time}</div></td>
      <td><div class="sched-name">${r.name}</div></td>
      <td><div class="sched-trainer">${r.trainer}</div></td>
      <td style="font-family:'Barlow Condensed',sans-serif;font-size:15px;">${r.duration}</td>
      <td><span class="sched-level ${levelClass[r.level]}">${levelLabel[r.level]}</span></td>
      <td>
        <button onclick="orderClass('${r.name}','${r.time}')"
          style="background:transparent;border:1px solid #25D366;color:#25D366;
          font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:.1em;
          padding:6px 14px;border-radius:4px;cursor:pointer;text-transform:uppercase;transition:all .2s;"
          onmouseover="this.style.background='#25D366';this.style.color='#fff'"
          onmouseout="this.style.background='transparent';this.style.color='#25D366'">
          <i class="bi bi-whatsapp"></i> Book
        </button>
      </td>
    </tr>
  `).join('');

  if (typeof gsap !== 'undefined') {
    gsap.fromTo('#' + (tbodyId || 'schedBody') + ' tr',
      { opacity:0, y:20 },
      { opacity:1, y:0, stagger:.06, duration:.4, ease:'power2.out' }
    );
  }
}

// Init schedule on DOM ready — handle schedBody (index) & schedBody2 (schedule page)
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('schedBody'))  renderScheduleTarget('senin', 'schedBody');
  if (document.getElementById('schedBody2')) renderScheduleTarget('senin', 'schedBody2');
});

/* ===== WA ORDER ===== */
function orderWA(pkg) {
  const msg = encodeURIComponent(`Halo MuscleMax Mojosari! 💪\nSaya ingin memesan:\n📦 *${pkg}*\n\nMohon info lebih lanjut. Terima kasih!`);
  window.open(`https://wa.me/6282231202288?text=${msg}`, '_blank');
}

function orderClass(name, time) {
  const msg = encodeURIComponent(`Halo MuscleMax Mojosari! 💪\nSaya ingin booking kelas:\n🏋️ *${name}* – Pukul ${time}\n\nMohon konfirmasinya. Terima kasih!`);
  window.open(`https://wa.me/6282231202288?text=${msg}`, '_blank');
}

function sendOrderWA() {
  const name = document.getElementById('f_name').value.trim();
  const wa   = document.getElementById('f_wa').value.trim();
  const prog = document.getElementById('f_program').value;
  const pkg  = document.getElementById('f_pkg').value;
  const msg  = document.getElementById('f_msg').value.trim();

  if (!name || !wa) { alert('Nama dan nomor WA wajib diisi!'); return; }

  const text = `Halo MuscleMax Mojosari! 💪\n\n` +
    `*FORM PENDAFTARAN MEMBER*\n` +
    `👤 Nama: ${name}\n` +
    `📱 WA: ${wa}\n` +
    `🏋️ Program: ${prog || '-'}\n` +
    `📦 Paket: ${pkg || '-'}\n` +
    (msg ? `💬 Pesan: ${msg}\n` : '') +
    `\nMohon diproses. Terima kasih!`;

  window.open(`https://wa.me/6282231202288?text=${encodeURIComponent(text)}`, '_blank');
}

/* ===== NAVBAR SCROLL ===== */
// scroll listener moved to GSAP ScrollTrigger


/* ════════════════════════════════════════════════════════
   ATOLLON-STYLE PREMIUM ANIMATIONS — MUSCLEMAX MOJOSARI
   ════════════════════════════════════════════════════════ */
gsap.registerPlugin(ScrollTrigger, CustomEase, ScrollToPlugin);
ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });

/* ── Custom ease curves ───────────────────────────────── */
CustomEase.create("smooth",   "M0,0 C0.25,0.1 0.25,1 1,1");
CustomEase.create("expo",     "M0,0 C0.16,1 0.3,1 1,1");
CustomEase.create("bounce",   "M0,0 C0.175,0.885 0.32,1.275 1,1");

/* ── Scroll progress bar ──────────────────────────────── */
ScrollTrigger.create({
  start: 0, end: "max",
  onUpdate: self => {
    document.getElementById('navProgress').style.width = (self.progress * 100) + '%';
  }
});

/* cursor: default */


/* ── Page loader ──────────────────────────────────────── */
(function runLoader() {
  const bar  = document.getElementById('loaderBar');
  const pct  = document.getElementById('loaderPct');
  const logo = document.getElementById('loaderLogo');
  const name = document.getElementById('loaderName');
  const ldr  = document.getElementById('page-loader');

  let p = 0;
  const interval = setInterval(() => {
    p += Math.random() * 14;
    if (p >= 100) { p = 100; clearInterval(interval); startLoaderOut(); }
    bar.style.width = p + '%';
    pct.textContent = Math.floor(p) + '%';
  }, 80);

  // Logo + name appear during load
  gsap.to(logo, { opacity: 1, y: 0, duration: .6, ease: 'expo', delay: .1 });
  gsap.to(name, { opacity: 1, y: 0, duration: .6, ease: 'expo', delay: .3 });

  function startLoaderOut() {
    const tl = gsap.timeline({ onComplete: () => {
        initPageAnimations();
        // Recalculate all ScrollTrigger positions after loader removed
        requestAnimationFrame(() => {
          ScrollTrigger.refresh(true);
          // Clean will-change after load to free GPU memory
          setTimeout(() => {
            document.querySelectorAll('.about-img-main, .hero-bg-layer').forEach(el => {
              el.style.willChange = 'auto';
            });
          }, 2000);
        });
      } });
    tl.to([logo, name, '.loader-bar-wrap', pct], {
        opacity: 0, y: -20, stagger: .06, duration: .5, ease: 'expo'
      })
      .to(ldr, {
        yPercent: -100, duration: .9, ease: 'expo', delay: .1
      });
  }
})();

/* ── All page animations (run after loader) ───────────── */
function initPageAnimations() {

  /* ── SPLIT TEXT helper ────────────────────────────────
     Uses SplitType for word/char-level animation          */
  function splitAndAnimate(selector, stagger, delay) {
    document.querySelectorAll(selector).forEach(el => {
      try {
        const split = new SplitType(el, { types: 'words' });
        gsap.set(split.words, { yPercent: 100, opacity: 0 });
        ScrollTrigger.create({
          trigger: el, start: 'top 88%', once: true,
          onEnter: () => {
            gsap.to(split.words, {
              yPercent: 0, opacity: 1,
              stagger: stagger || .06, duration: .7,
              ease: 'expo', delay: delay || 0
            });
          }
        });
      } catch(e) {
        // fallback — just show it
        gsap.set(el, { opacity: 1 });
      }
    });
  }

  /* ── HERO split text ────────────────────────────────── */
  // Hero title — line by line (safer than char-split across newlines)
  const heroLines = gsap.utils.toArray('#heroTitle br').length;
  gsap.set('#heroTitle', { overflow: 'visible' });

  const heroTl = gsap.timeline({ defaults: { ease: 'expo' } });
  heroTl
    .to('#heroEye',    { opacity: 1, x: 0, duration: .8 }, .2)
    .fromTo('#heroTitle', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: .9 }, .4)
    .to('#heroSub',    { opacity: 1, y: 0, duration: .8 }, .85)
    .to('#heroCta',    { opacity: 1, y: 0, duration: .7 }, 1.05)
    .to('#heroStats .stat-item', { opacity: 1, y: 0, stagger: .1, duration: .6 }, 1.15)
    .fromTo('#heroBadge', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: .8, ease: 'bounce' }, .9);

  /* ── Hero parallax bg ───────────────────────────────── */
  gsap.to('#heroBgLayer', {
    yPercent: 22,
    ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  /* ── Section titles — split words ──────────────────── */
  splitAndAnimate('.section-title', .04, 0);

  /* ── Section tags slide in ──────────────────────────── */
  gsap.utils.toArray('.section-tag').forEach(el => {
    gsap.from(el, {
      opacity: 0, x: -20, duration: .6, ease: 'expo',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true }
    });
  });

  /* ── Red line draw ──────────────────────────────────── */
  gsap.utils.toArray('.red-line').forEach(el => {
    gsap.fromTo(el,
      { scaleX: 0, transformOrigin: 'left' },
      { scaleX: 1, duration: .9, ease: 'expo',
        scrollTrigger: { trigger: el, start: 'top 92%', once: true } }
    );
  });

  /* ── About section ──────────────────────────────────── */
  // Image reveal with clip-path
  gsap.from('.about-img-main', {
    clipPath: 'inset(100% 0% 0% 0%)',
    duration: 1.2, ease: 'expo',
    scrollTrigger: { trigger: '.about-img-main', start: 'top 85%', once: true }
  });
  gsap.from('.about-img-accent', {
    clipPath: 'inset(0% 0% 100% 0%)',
    duration: 1.1, ease: 'expo', delay: .3,
    scrollTrigger: { trigger: '.about-img-accent', start: 'top 90%', once: true }
  });

  // Image parallax — gentle
  gsap.to('.about-img-main', {
    yPercent: -6, ease: 'none',
    scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: 2 }
  });

  // About features — gsap.from() is safe (element starts visible, GSAP sets from)
  gsap.utils.toArray('.about-feature').forEach((el, i) => {
    gsap.from(el, {
      opacity: 0, x: -30, duration: .65, ease: 'expo',
      delay: i * .07,
      scrollTrigger: { trigger: el, start: 'top 92%', once: true }
    });
  });

  /* ── Program cards ──────────────────────────────────── */
  gsap.utils.toArray('.program-card').forEach((card, i) => {
    gsap.from(card, {
      opacity: 0, y: 50, duration: .75, ease: 'expo',
      scrollTrigger: { trigger: card, start: 'top 92%', once: true },
      delay: (i % 3) * .08
    });
    // inner image — only on non-mobile for perf
    if (window.innerWidth > 768) {
      const img = card.querySelector('img');
      if (img) gsap.to(img, { scale: 1.06, ease: 'none',
        scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 2.5 }
      });
    }
  });

  /* ── Pricing cards ──────────────────────────────────── */
  gsap.utils.toArray('.pricing-card').forEach((card, i) => {
    gsap.from(card, {
      opacity: 0, y: 40, scale: .96, duration: .75,
      ease: 'expo', delay: i * .1,
      scrollTrigger: { trigger: '#membership .row', start: 'top 92%', once: true }
    });
  });

  /* ── Trainer cards ──────────────────────────────────── */
  gsap.utils.toArray('.trainer-card').forEach((card, i) => {
    gsap.from(card, {
      opacity: 0, y: 40,
      duration: .75, ease: 'expo', delay: i * .08,
      scrollTrigger: { trigger: '#trainers .row', start: 'top 92%', once: true }
    });
  });

  /* ── Gallery items ──────────────────────────────────── */
  gsap.utils.toArray('.gallery-item').forEach((item, i) => {
    gsap.from(item, {
      opacity: 0, y: 30, duration: .7, ease: 'expo', delay: i * .07,
      scrollTrigger: { trigger: '.gallery-grid', start: 'top 92%', once: true }
    });
  });

  /* ── Testimonials ───────────────────────────────────── */
  gsap.utils.toArray('.testimonial-card').forEach((c, i) => {
    gsap.from(c, {
      opacity: 0, y: 30, duration: .7, ease: 'expo', delay: i * .1,
      scrollTrigger: { trigger: '#testimonials .row', start: 'top 92%', once: true }
    });
  });

  /* ── Stats counter ──────────────────────────────────── */
  function animateCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = +el.dataset.count;
      gsap.fromTo({ val: 0 }, { val: target, duration: 2.2, ease: 'expo',
        onUpdate: function() { el.textContent = Math.ceil(this.targets()[0].val) + '+'; }
      });
    });
  }
  ScrollTrigger.create({
    trigger: '#hero', start: 'bottom 60%', once: true, onEnter: animateCounters
  });

  /* ── Booking form reveal ────────────────────────────── */
  gsap.from('.booking-wrap', {
    opacity: 0, y: 40, duration: .9, ease: 'expo',
    scrollTrigger: { trigger: '.booking-wrap', start: 'top 92%', once: true }
  });

  /* ── CTA section ────────────────────────────────────── */
  gsap.from('#cta .cta-title', {
    opacity: 0, y: 40, duration: .9, ease: 'expo',
    scrollTrigger: { trigger: '#cta', start: 'top 92%', once: true }
  });
  gsap.from('#cta .cta-sub, #cta .col-lg-4', {
    opacity: 0, y: 25, stagger: .12, duration: .7, ease: 'expo', delay: .15,
    scrollTrigger: { trigger: '#cta', start: 'top 92%', once: true }
  });

  /* ── FAQ accordion ──────────────────────────────────── */
  gsap.utils.toArray('.accordion-item').forEach((item, i) => {
    gsap.from(item, {
      opacity: 0, y: 25, duration: .6, ease: 'expo', delay: i * .06,
      scrollTrigger: { trigger: item, start: 'top 92%', once: true }
    });
  });

  /* ── Marquee speed up on scroll ─────────────────────── */
  ScrollTrigger.create({
    trigger: '.marquee-wrap', start: 'top bottom', end: 'bottom top',
    onUpdate: self => {
      const speed = 22 - (self.getVelocity() / 300);
      document.querySelector('.marquee-track').style.animationDuration = Math.max(6, speed) + 's';
    }
  });

  /* ── Magnetic buttons ───────────────────────────────── */
  function initMagnetic(selector, strength = 0.4) {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('mousemove', e => {
        const rect  = el.getBoundingClientRect();
        const cx    = rect.left + rect.width  / 2;
        const cy    = rect.top  + rect.height / 2;
        const dx    = (e.clientX - cx) * strength;
        const dy    = (e.clientY - cy) * strength;
        gsap.to(el, { x: dx, y: dy, duration: .35, ease: 'smooth' });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: .6, ease: 'bounce' });
      });
    });
  }
  initMagnetic('.btn-primary-mm', .3);
  initMagnetic('.btn-outline-mm', .3);
  initMagnetic('.btn-wa',         .25);
  initMagnetic('.navbar-logo-img', .2);

  /* ── Navbar reveal on scroll down/up ─────────────────── */
  let lastScroll = 0;
  let navHidden = false;
  ScrollTrigger.create({
    start: 1, onUpdate: self => {
      const curr = self.scroll();
      const nav  = document.getElementById('mainNav');
      const stb  = document.getElementById('scrollTop');
      const delta = curr - lastScroll;

      // Sembunyikan navbar: scroll ke bawah > 80px dari atas, dengan delta > 4px
      if (delta > 4 && curr > 80 && !navHidden) {
        navHidden = true;
        gsap.to(nav, { yPercent: -100, duration: .3, ease: 'power2.in' });
      }
      // Tampilkan navbar: scroll ke atas minimal 8px (threshold)
      else if (delta < -8 && navHidden) {
        navHidden = false;
        gsap.to(nav, { yPercent: 0, duration: .4, ease: 'power2.out' });
      }
      // Tampilkan navbar: sudah kembali ke posisi atas halaman
      else if (curr <= 80 && navHidden) {
        navHidden = false;
        gsap.to(nav, { yPercent: 0, duration: .3, ease: 'power2.out' });
      }
      // Show/hide scroll-to-top with GSAP
      if (curr > 500) {
        if (!stb.classList.contains('visible')) {
          stb.classList.add('visible');
          gsap.fromTo(stb,
            { opacity: 0, scale: .7, y: 20 },
            { opacity: 1, scale: 1,  y: 0, duration: .5, ease: 'back.out(1.7)' }
          );
        }
      } else {
        if (stb.classList.contains('visible')) {
          stb.classList.remove('visible');
          gsap.to(stb, { opacity: 0, scale: .7, y: 16, duration: .35, ease: 'power2.in' });
        }
      }
      lastScroll = curr;
      nav.classList.toggle('scrolled', curr > 60);
    }
  });

  /* ── Smooth anchor scroll ───────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      gsap.to(window, { scrollTo: { y: target, offsetY: 80 }, duration: 1.1, ease: 'expo' });
      // Close navbar on mobile
      const collapse = document.getElementById('navMenu');
      if (collapse.classList.contains('show')) {
        bootstrap.Collapse.getInstance(collapse)?.hide();
      }
    });
  });

  /* ── Scroll top btn ─────────────────────────────────── */
  const stBtn = document.getElementById('scrollTop');
  if (stBtn) stBtn.addEventListener('click', () => {
    gsap.to(window, { scrollTo: 0, duration: 1.1, ease: 'expo' });
  });

  /* ── Generic .reveal — gsap.from() keeps element visible if trigger misses ── */
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.from(el, {
      opacity: 0, y: 40, duration: .8, ease: 'expo',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true }
    });
  });


  /* ── Card micro-interactions ───────────────────────── */
  document.querySelectorAll('.program-card, .trainer-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -8, duration: .35, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0,  duration: .5,  ease: 'elastic.out(1, .6)' });
    });
  });

  document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -10, duration: .4, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0,   duration: .55, ease: 'elastic.out(1, .5)' });
    });
  });

  document.querySelectorAll('.about-feature').forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, { x: 8, duration: .3, ease: 'power2.out' });
    });
    item.addEventListener('mouseleave', () => {
      gsap.to(item, { x: 0, duration: .45, ease: 'elastic.out(1, .6)' });
    });
  });

  /* ── Footer links stagger ───────────────────────────── */
  gsap.from('footer ul li', {
    opacity: 0, x: -15, stagger: .04, duration: .5, ease: 'expo',
    scrollTrigger: { trigger: 'footer', start: 'top 92%', once: true }
  });

  /* ── Subtle section number counter in about ──────────── */
  gsap.from('.stat-item', {
    opacity: 0, y: 30, stagger: .1, duration: .8, ease: 'expo',
    scrollTrigger: { trigger: '.hero-stats', start: 'top 90%', once: true }
  });

  /* ── Trainer img — subtle parallax (batched) ──────── */
  const trainerImgs = gsap.utils.toArray('.trainer-img');
  if (trainerImgs.length) {
    gsap.to(trainerImgs, {
      yPercent: -5, ease: 'none',
      scrollTrigger: { trigger: '#trainers', start: 'top bottom', end: 'bottom top', scrub: 1.5 }
    });
  }

  /* ── Gallery parallax — every other item only ───────── */
  gsap.utils.toArray('.gallery-item:nth-child(odd) img').forEach(img => {
    gsap.to(img, {
      yPercent: -8, ease: 'none',
      scrollTrigger: { trigger: img.closest('.gallery-item'), start: 'top bottom', end: 'bottom top', scrub: 2 }
    });
  });
}


/* ===== PROGRAM MODAL DATA & LOGIC ===== */
const programData = [
  {
    title: 'Bodybuilding & Mass',
    badge: 'Populer',
    img: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=900&q=85',
    meta: [
      { icon:'bi-clock-fill',     val:'90 Menit',      lbl:'Durasi' },
      { icon:'bi-bar-chart-fill', val:'Semua Level',   lbl:'Level' },
      { icon:'bi-people-fill',    val:'20 Slot/Kelas', lbl:'Kapasitas' },
      { icon:'bi-fire',           val:'High',          lbl:'Intensitas' },
    ],
    desc: 'Program Bodybuilding & Mass Gain dirancang khusus untuk membangun massa otot secara maksimal menggunakan metode hypertrophy training yang telah terbukti secara ilmiah. Program ini menggabungkan latihan compound dan isolation movement dengan progressive overload untuk hasil terbaik. Cocok untuk pemula hingga lifter berpengalaman yang ingin membentuk tubuh ideal.',
    benefits: [
      'Tingkatkan massa otot secara signifikan','Perkuat kekuatan angkat beban',
      'Bentuk definisi otot yang jelas','Program split 4–5 hari/minggu',
      'Panduan nutrisi & suplemen','Evaluasi progress setiap bulan',
      'Teknik angkat yang aman & benar','Variasi latihan anti plateau',
    ],
    schedule: ['Senin 06:00','Senin 17:00','Rabu 06:00','Kamis 17:00','Jumat 06:00','Sabtu 06:00'],
    waMsg: 'Halo MuscleMax! 💪 Saya ingin mendaftar program *Bodybuilding & Mass*. Mohon info lebih lanjut!'
  },
  {
    title: 'HIIT Cardio Blast',
    badge: 'Terlaris',
    img: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=900&q=85',
    meta: [
      { icon:'bi-clock-fill',     val:'60 Menit',        lbl:'Durasi' },
      { icon:'bi-bar-chart-fill', val:'Intermediate',    lbl:'Level' },
      { icon:'bi-people-fill',    val:'25 Slot/Kelas',   lbl:'Kapasitas' },
      { icon:'bi-fire',           val:'Very High',       lbl:'Intensitas' },
    ],
    desc: 'HIIT Cardio Blast adalah program latihan interval intensitas tinggi yang dirancang untuk membakar kalori maksimal dalam waktu singkat. Menggunakan metode Tabata dan circuit training, program ini meningkatkan metabolisme tubuh bahkan setelah latihan selesai (afterburn effect). Ideal bagi kamu yang ingin turun berat badan cepat dan meningkatkan stamina.',
    benefits: [
      'Bakar hingga 600–800 kalori/sesi','Tingkatkan kapasitas kardiovaskular',
      'Percepat metabolisme tubuh','Kurangi lemak perut efektif',
      'Tidak butuh alat khusus','Variasi gerakan yang fun',
      'Afterburn effect 24 jam','Cocok untuk fat loss program',
    ],
    schedule: ['Senin 08:00','Selasa 09:00','Rabu 18:30','Kamis 08:00','Jumat 18:00'],
    waMsg: 'Halo MuscleMax! 💪 Saya ingin mendaftar program *HIIT Cardio Blast*. Mohon info lebih lanjut!'
  },
  {
    title: 'Personal Training',
    badge: 'Premium',
    img: 'https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?w=900&q=85',
    meta: [
      { icon:'bi-clock-fill',     val:'60–90 Menit',     lbl:'Durasi' },
      { icon:'bi-bar-chart-fill', val:'Custom',          lbl:'Level' },
      { icon:'bi-people-fill',    val:'Sesi Privat',     lbl:'Format' },
      { icon:'bi-star-fill',      val:'Premium',         lbl:'Kelas' },
    ],
    desc: 'Sesi Personal Training 1-on-1 memberikan perhatian penuh dari trainer bersertifikat kami yang akan merancang program latihan 100% sesuai kondisi fisik, tujuan, dan jadwal kamu. Tidak ada program yang sama — setiap sesi didesain unik untuk memaksimalkan hasilmu. Cocok untuk semua tujuan: weight loss, muscle gain, rehabilitasi cedera, maupun persiapan kompetisi.',
    benefits: [
      'Program 100% personal & custom','Asesmen fisik awal menyeluruh',
      'Penjadwalan fleksibel sesuai kamu','Koreksi teknik real-time',
      'Konsultasi nutrisi termasuk','Laporan progress berkala',
      'Dukungan motivasi & mental','Akses langsung ke trainer via WA',
    ],
    schedule: ['Fleksibel – sesuai jadwal kamu','Senin–Sabtu: 06:00–21:00','Booking H-1 wajib'],
    waMsg: 'Halo MuscleMax! 💪 Saya tertarik dengan program *Personal Training*. Bisa info jadwal & harga?'
  },
  {
    title: 'Zumba & Aerobik',
    badge: 'Fun',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=85',
    meta: [
      { icon:'bi-clock-fill',     val:'60 Menit',      lbl:'Durasi' },
      { icon:'bi-bar-chart-fill', val:'Semua Level',   lbl:'Level' },
      { icon:'bi-people-fill',    val:'30 Slot/Kelas', lbl:'Kapasitas' },
      { icon:'bi-music-note-beamed', val:'Dance Based',lbl:'Format' },
    ],
    desc: 'Zumba & Aerobik adalah kelas olahraga berbasis tari yang menggabungkan gerakan latin dance dengan latihan kardiovaskular yang efektif. Bersama instruktur energetik kami, kamu akan berolahraga tanpa terasa capek karena musiknya yang seru! Cocok untuk semua usia, tidak perlu bisa menari — yang penting mau bergerak dan menikmati.',
    benefits: [
      'Bakar 400–600 kalori/sesi','Tingkatkan koordinasi tubuh',
      'Kurangi stres & mood booster','Komunitas kelas yang solid',
      'Gerakan variatif tiap sesi','Cocok semua usia',
      'Tidak perlu pengalaman tari','Atmosfer kelas yang fun & energik',
    ],
    schedule: ['Senin 16:00','Selasa 19:00','Kamis 06:00','Jumat 15:00','Sabtu 09:00'],
    waMsg: 'Halo MuscleMax! 💪 Saya ingin mendaftar kelas *Zumba & Aerobik*. Mohon info lebih lanjut!'
  },
  {
    title: 'Functional Fitness',
    badge: 'Baru',
    img: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=900&q=85',
    meta: [
      { icon:'bi-clock-fill',     val:'75 Menit',      lbl:'Durasi' },
      { icon:'bi-bar-chart-fill', val:'Intermediate',  lbl:'Level' },
      { icon:'bi-people-fill',    val:'15 Slot/Kelas', lbl:'Kapasitas' },
      { icon:'bi-fire',           val:'Medium–High',   lbl:'Intensitas' },
    ],
    desc: 'Functional Fitness berfokus pada latihan berbasis pergerakan alami tubuh manusia — mendorong, menarik, mengangkat, melompat, dan berputar. Program ini menggunakan kombinasi kettlebell, resistance band, TRX, dan bodyweight untuk melatih seluruh tubuh secara seimbang. Hasilnya: tubuh lebih kuat, seimbang, dan tahan cedera dalam aktivitas sehari-hari.',
    benefits: [
      'Tingkatkan mobilitas & fleksibilitas','Kuatkan core & stabilitas',
      'Cegah dan rehabilitasi cedera','Latihan full-body yang efisien',
      'Gunakan alat variatif (TRX, KB)','Cocok untuk semua goals',
      'Meningkatkan performa olahraga','Perbaiki postur tubuh',
    ],
    schedule: ['Senin 19:30','Rabu 16:00','Jumat 19:30'],
    waMsg: 'Halo MuscleMax! 💪 Saya ingin mendaftar program *Functional Fitness*. Mohon info lebih lanjut!'
  },
  {
    title: 'Yoga & Stretching',
    badge: 'Relaksasi',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=85',
    meta: [
      { icon:'bi-clock-fill',     val:'60 Menit',     lbl:'Durasi' },
      { icon:'bi-bar-chart-fill', val:'Semua Level',  lbl:'Level' },
      { icon:'bi-people-fill',    val:'20 Slot/Kelas',lbl:'Kapasitas' },
      { icon:'bi-heart-fill',     val:'Low–Medium',   lbl:'Intensitas' },
    ],
    desc: 'Kelas Yoga & Stretching kami menggabungkan teknik yoga Hatha dan Vinyasa dengan deep stretching untuk memulihkan otot, meningkatkan fleksibilitas, dan menjaga keseimbangan mental setelah sesi latihan berat. Dipandu oleh instruktur bersertifikat, kelas ini cocok sebagai recovery day maupun rutinitas mandiri untuk menjaga kesehatan holistik tubuh dan pikiran.',
    benefits: [
      'Tingkatkan fleksibilitas tubuh','Pemulihan otot pasca latihan berat',
      'Kurangi nyeri punggung & sendi','Meningkatkan keseimbangan',
      'Teknik pernapasan & meditasi','Reduksi stres & anxiety',
      'Perbaiki kualitas tidur','Cocok semua usia & kondisi',
    ],
    schedule: ['Selasa 06:00','Rabu 10:00','Jumat 09:00','Sabtu 16:00'],
    waMsg: 'Halo MuscleMax! 💪 Saya ingin mendaftar kelas *Yoga & Stretching*. Mohon info lebih lanjut!'
  },
];

function openProgram(idx) {
  const d = programData[idx];
  const overlay = document.getElementById('progModal');

  document.getElementById('pm-img').src   = d.img;
  document.getElementById('pm-img').alt   = d.title;
  document.getElementById('pm-badge').textContent  = d.badge;
  document.getElementById('pm-title').textContent  = d.title;
  document.getElementById('pm-desc').textContent   = d.desc;

  // Meta chips
  document.getElementById('pm-meta').innerHTML = d.meta.map(m => `
    <div class="prog-meta-chip">
      <i class="bi ${m.icon}"></i>
      <div><span class="val">${m.val}</span><span class="lbl">${m.lbl}</span></div>
    </div>
  `).join('');

  // Benefits
  document.getElementById('pm-benefits').innerHTML = d.benefits.map(b =>
    `<li><i class="bi bi-check-circle-fill"></i> ${b}</li>`
  ).join('');

  // Schedule
  document.getElementById('pm-sched').innerHTML = d.schedule.map(s =>
    `<span class="prog-day-chip"><i class="bi bi-calendar3"></i> ${s}</span>`
  ).join('');

  // WA button
  const waUrl = 'https://wa.me/6282231202288?text=' + encodeURIComponent(d.waMsg);
  document.getElementById('pm-wa-btn').href = waUrl;

  // Open
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // GSAP entrance
  gsap.fromTo('#pm-meta .prog-meta-chip',
    { opacity:0, y:16 },
    { opacity:1, y:0, stagger:.07, duration:.4, ease:'power2.out', delay:.25 }
  );
  gsap.fromTo('#pm-benefits li',
    { opacity:0, x:-14 },
    { opacity:1, x:0, stagger:.05, duration:.35, ease:'power2.out', delay:.35 }
  );
  gsap.fromTo('.prog-day-chip',
    { opacity:0, scale:.85 },
    { opacity:1, scale:1, stagger:.06, duration:.3, ease:'back.out(1.4)', delay:.45 }
  );
}

function closeProgModal(e, force) {
  if (force || (e && e.target === document.getElementById('progModal'))) {
    const overlay = document.getElementById('progModal');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Close on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeProgModal(null, true);
});


// Make schedule tabs work on all pages
document.addEventListener('click', function(e) {
  const link = e.target.closest('#schedTab .nav-link, #schedTab2 .nav-link');
  if (link) {
    e.preventDefault();
    const tabParentId = link.closest('#schedTab') ? '#schedTab' : '#schedTab2';
    const bodyId = tabParentId === '#schedTab' ? 'schedBody' : 'schedBody2';
    document.querySelectorAll(tabParentId + ' .nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    renderScheduleTarget(link.dataset.day, bodyId);
  }
});
