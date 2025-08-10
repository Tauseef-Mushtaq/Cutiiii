let currentLetterType = '';

// Continuous floating hearts
function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  const hearts = ['💕', '💖', '💗', '💝', '❤️', '💜', '💙', '🧡', '💛', '💚'];
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDelay = Math.random() * 2 + 's';
  heart.style.animationDuration = Math.random() * 4 + 6 + 's';

  document.getElementById('floatingHearts').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

// Continuous floating flowers
function createFloatingFlower() {
  const flower = document.createElement('div');
  flower.className = 'floating-flower';
  const flowers = ['🌸', '🌺', '🌻', '🌷', '🌹', '💐', '🌼', '🌿', '🍀'];
  flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
  flower.style.top = Math.random() * 100 + '%';
  flower.style.animationDelay = Math.random() * 3 + 's';
  flower.style.animationDuration = Math.random() * 6 + 10 + 's';

  document.getElementById('floatingFlowers').appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 16000);
}

// Bouncing soft toys
function createSoftToy() {
  const toy = document.createElement('div');
  toy.className = 'soft-toy';
  const toys = ['🧸', '🐻', '🐰', '🐱', '🦄', '🐶', '🐼', '🐨', '🦊'];
  toy.textContent = toys[Math.floor(Math.random() * toys.length)];
  toy.style.left = Math.random() * 90 + '%';
  toy.style.top = Math.random() * 80 + 10 + '%';
  toy.style.animationDelay = Math.random() * 2 + 's';

  document.getElementById('softToys').appendChild(toy);

  setTimeout(() => {
    toy.remove();
  }, 12000);
}

// Start continuous animations
setInterval(createFloatingHeart, 600);
setInterval(createFloatingFlower, 1800);
setInterval(createSoftToy, 2500);

// Initial elements
for (let i = 0; i < 10; i++) {
  setTimeout(createFloatingHeart, i * 150);
}
for (let i = 0; i < 5; i++) {
  setTimeout(createFloatingFlower, i * 400);
}
for (let i = 0; i < 4; i++) {
  setTimeout(createSoftToy, i * 800);
}

// Letter content
const letterContent = {
  apology: {
    title: 'My Heartfelt Apology 💔',
    subtitle: "I'm sooo sorrrrry for hurting you",
    content: `
                    <p>My wifeyyy</p>
                    <p>I’m writing this because I know I’ve hurt the most important person in my life – you</p>
                    <p>I know I’ve hurt you so much, but please believe me, it was never intentional. You know I get angry quickly and sometimes lose control, saying things I don’t truly mean. I promise, those words never come from my heart. </p>
                    <p>I am deeply sorry for every mistake I’ve made. I apologize from the bottom of my heart. I’m soooo, soooo sorrryyyy. Please don’t take my words in anger to heart 😭.</p>
                    <p>I promise to do better — to listen to you more carefully, to think before I speak, and to always protect your beautiful heart. You deserve nothing but love, respect, and endless happiness.</p>
                    <p>Please forgive me, my cuteee Shagufta. I can’t imagine my life without you — your smile, your laugh, your love. You are my everything, and I will work every day to be a better person for you.</p>
                    <p>I love you more than words can express, and I always will.</p>
                    <div class="signature">Angry Bird is truly sorry 😠💔💕</div>
                `,
    actionText: '💙 Forgive Me',
    effect: '💙🙏',
  },
  love: {
    title: 'All My Love for You 💕',
    subtitle: 'You are my everything, My whole World',
    content: `
                    <p>My beautiful, cutest Shagufta,</p>
                    <p>You know that I loveee youuu soooooo muchhhhhhh more than anything else. I can't explain my loveee for you😭</p>
                    <p>You are sooooooo cuteee - not just your gorgeous face that takes my breath away, but your beautiful soul that shines so bright it lights up my entire world.</p>
                    <p>I love your infectious laugh that makes me smile even on my worst days. I love how you care for me throughout the day . I love your strength, your intelligence, your silly jokes, and the way you make everything better just by being there.</p>
                    <p>You make me want to be the best version of myself. With you, I feel like I can conquer anything. You are my inspiration, my motivation, my greatest blessing.</p>
                    <p>I love how you understand me without words, how you support my dreams, and how you love me even when I'm not perfect. You are my soulmate, my best friend, My Love 💖 ,My forever person.</p>
                    <p>I promise to love you with all my heart, today, tomorrow, and for all the days of my life. You are my everything, my love.</p>
                    <div class="signature">Forever and always yours 💖✨</div>
                `,
    actionText: '💖 Send Love',
    effect: '💖💕💗',
  },
  'hugs-kisses': {
    title: 'Virtual Hugs & Kisses 🤗',
    subtitle: 'Sending you all my affection',
    content: `
                    <p>My hotiii darling,</p>
                    <p>I wish I could wrap you in the biggest, warmest hug right now and never let you go. Since I can't be there physically, I'm sending you all my love through this letter.</p>
                    <p>I miss youuu sooo muchhh i wish you were here right now and i hug you tightly and never let you go😭/p>
                    <p>You deserve all my lovee plz come to mee I miss youuu soo bad> I can't even imagine a day without you</p>
                    <p>Ahhh I hate this distance I just need you😭 InshaAllah we will be togather one day and then no one can separate you from me.</p>
                    <p>I love cuddling with you, feeling your heartbeat against mine, playing with your hair, and whispering sweet things in your ear. You fit perfectly in my arms like you were made for me.</p>
                    <p>Until I can hold you again, please know that you're always in my thoughts, always in my heart, and I'm sending you endless virtual hugs and kisses.</p>
                    <p>You are my cuteee wifeyyyy, my hottiiii, my everything. I can't wait to shower you with real hugs and kisses!</p>
                    <p>🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂</p>
                    <p>💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋</p>
                    <div class="signature">With all my hugs and kisses 🫂💋💕</div>
                `,
    actionText: '💋 Send Hugs & Kisses',
    effect: '🫂💋💕',
  },
};

// Open letter function
function openLetter(type) {
  // Show "I Love You" message when switching letters
  if (currentLetterType !== '' && currentLetterType !== type) {
    showLoveMessage();
  }

  currentLetterType = type;
  const envelope = document.getElementById(`envelope-${type}`);
  const header = document.getElementById('letterHeader');
  const title = document.getElementById('letterTitle');
  const subtitle = document.getElementById('letterSubtitle');
  const content = document.getElementById('letterContent');
  const actionBtn = document.getElementById('actionBtn');

  // Open envelope animation
  envelope.classList.add('open');

  // Set letter content
  const letter = letterContent[type];
  title.textContent = letter.title;
  subtitle.textContent = letter.subtitle;
  content.innerHTML = letter.content;
  actionBtn.textContent = letter.actionText;

  // Set header and button colors
  header.className = `letter-header ${type}`;
  actionBtn.className = `letter-btn ${type}`;

  // Show letter
  setTimeout(() => {
    document.getElementById('overlay').classList.add('show');
    document.getElementById('letterContainer').classList.add('show');

    // Start floating effects for hugs-kisses letter
    if (type === 'hugs-kisses') {
      startLetterFloatingEffects();
    } else {
      stopLetterFloatingEffects();
    }
  }, 800);
}

// Close letter function
function closeLetter() {
  document.getElementById('overlay').classList.remove('show');
  document.getElementById('letterContainer').classList.remove('show');

  // Stop floating effects
  stopLetterFloatingEffects();

  setTimeout(() => {
    // Close all envelopes
    document.querySelectorAll('.envelope').forEach((env) => {
      env.classList.remove('open');
    });
  }, 500);
}

// Special effects function
function triggerSpecialEffect() {
  const effect = document.getElementById('specialEffect');
  const letter = letterContent[currentLetterType];

  effect.textContent = letter.effect;
  effect.className = 'special-effect effect-animation';

  // Create particle effects
  createParticleEffect(currentLetterType);

  setTimeout(() => {
    effect.className = 'special-effect';
  }, 3000);
}

// Particle effects
function createParticleEffect(type) {
  const particles = {
    apology: ['💙', '🙏', '💔', '😢', '🤲'],
    love: ['💖', '💕', '💗', '💝', '❤️', '💜', '💙'],
    'hugs-kisses': ['🤗', '💋', '💕', '🫂', '😘', '💖'],
  };

  const particleSet = particles[type];

  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.fontSize = '2rem';
      particle.style.zIndex = '1500';
      particle.style.pointerEvents = 'none';
      particle.textContent =
        particleSet[Math.floor(Math.random() * particleSet.length)];
      particle.style.animation = 'floatUp 4s ease-out forwards';

      document.body.appendChild(particle);

      setTimeout(() => particle.remove(), 4000);
    }, i * 80);
  }
}

// Letter floating effects
let letterFloatingInterval;

function createLetterFloatingEmoji() {
  const container = document.getElementById('letterFloatingEffects');
  if (!container) return;

  const emoji = document.createElement('div');
  emoji.className = 'letter-floating-emoji';
  const emojis = ['🤗', '💋', '😘', '💕', '🫂', '💖', '😍', '🥰'];
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 90 + '%';
  emoji.style.animationDelay = Math.random() * 2 + 's';
  emoji.style.animationDuration = Math.random() * 3 + 4 + 's';

  container.appendChild(emoji);

  setTimeout(() => {
    if (emoji.parentNode) {
      emoji.remove();
    }
  }, 7000);
}

function startLetterFloatingEffects() {
  stopLetterFloatingEffects(); // Clear any existing interval
  letterFloatingInterval = setInterval(createLetterFloatingEmoji, 800);

  // Create initial emojis
  for (let i = 0; i < 5; i++) {
    setTimeout(createLetterFloatingEmoji, i * 200);
  }
}

function stopLetterFloatingEffects() {
  if (letterFloatingInterval) {
    clearInterval(letterFloatingInterval);
    letterFloatingInterval = null;
  }

  // Clear existing floating emojis
  const container = document.getElementById('letterFloatingEffects');
  if (container) {
    container.innerHTML = '';
  }
}

// Show "I Love You" message
function showLoveMessage() {
  const message = document.getElementById('loveMessage');
  message.className = 'love-message show';

  setTimeout(() => {
    message.className = 'love-message';
  }, 3000);
}

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement('script');
      d.innerHTML =
        "window.__CF$cv$params={r:'96cdf2bc64c5e8c7',t:'MTc1NDgxMjcwOC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName('head')[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement('iframe');
    a.height = 1;
    a.width = 1;
    a.style.position = 'absolute';
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = 'none';
    a.style.visibility = 'hidden';
    document.body.appendChild(a);
    if ('loading' !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener('DOMContentLoaded', c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        'loading' !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
