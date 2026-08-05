/* 234 DISTRICT - Global JavaScript Actions */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. PAGE PRELOADER
  // ==========================================
  const preloader = document.getElementById('preloader');
  const loaderNum = document.getElementById('loader-num');
  const loaderBar = document.getElementById('loader-bar');
  const preloaderLeft = document.getElementById('preloader-left');
  const preloaderRight = document.getElementById('preloader-right');
  document.body.classList.add('scroll-locked');
  
  let currentProgress = 0;
  const loadInterval = setInterval(() => {
    if (currentProgress < 100) {
      currentProgress += Math.floor(Math.random() * 8) + 2;
      if (currentProgress > 100) currentProgress = 100;
      
      if (loaderNum) {
        loaderNum.textContent = currentProgress.toString().padStart(2, '0');
      }
      if (loaderBar) {
        loaderBar.style.width = `${currentProgress}%`;
      }
    } else {
      clearInterval(loadInterval);
      
      // curtains split sliding transition
      setTimeout(() => {
        if (preloaderLeft) preloaderLeft.classList.add('slide-out');
        if (preloaderRight) preloaderRight.classList.add('slide-out');
        if (preloader) preloader.classList.add('loaded');
        
        document.body.classList.remove('scroll-locked');
        
        // Remove preloader from viewport touch flow to prevent blocking mobile swipes
        setTimeout(() => {
          if (preloader) preloader.style.display = 'none';
        }, 1000);
      }, 300);
    }
  }, 35);

  // ==========================================
  // 2. STICKY NAVBAR ON SCROLL
  // ==========================================
  const header = document.querySelector('.main-header');
  const checkScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Run once in case user loads page scrolled down

  // ==========================================
  // 3. DRAWERS TOGLE (Cart, Account, Mobile Menu)
  // ==========================================
  const overlay = document.getElementById('drawer-overlay');
  const drawers = document.querySelectorAll('.drawer');
  const closeBtns = document.querySelectorAll('.drawer-close, #drawer-overlay');

  // Open Drawer Function
  const openDrawer = (drawerId) => {
    const targetDrawer = document.getElementById(drawerId);
    if (!targetDrawer) return;

    // Close any other open drawers first
    drawers.forEach(drawer => drawer.classList.remove('active'));
    
    targetDrawer.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('scroll-locked');
  };

  // Close All Drawers Function
  const closeAllDrawers = () => {
    drawers.forEach(drawer => drawer.classList.remove('active'));
    overlay.classList.remove('active');
    document.body.classList.remove('scroll-locked');
  };

  // Attach Open Events
  document.querySelectorAll('[data-drawer-trigger]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const target = trigger.getAttribute('data-drawer-trigger');
      openDrawer(target);
    });
  });

  // Attach Close Events
  closeBtns.forEach(btn => {
    btn.addEventListener('click', closeAllDrawers);
  });

  // Close mobile menu drawer when any link inside it is clicked
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  if (mobileMenuDrawer) {
    mobileMenuDrawer.querySelectorAll('a').forEach(link => {
      if (link.hasAttribute('data-drawer-trigger')) return;
      link.addEventListener('click', () => {
        closeAllDrawers();
      });
    });
  }

  // Close Drawers on ESC Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDrawers();
    }
  });

  // ==========================================
  // 4. SCROLL TO TOP
  // ==========================================
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================
  // 5. ACCOUNT PANEL TAB SWITCHING (Login vs. Signup)
  // ==========================================
  const toggleToSignup = document.getElementById('toggle-to-signup');
  const toggleToLogin = document.getElementById('toggle-to-login');
  const loginForm = document.getElementById('login-form-wrapper');
  const signupForm = document.getElementById('signup-form-wrapper');
  const accountTitle = document.getElementById('account-drawer-title');

  if (toggleToSignup && toggleToLogin && loginForm && signupForm) {
    toggleToSignup.addEventListener('click', () => {
      loginForm.style.display = 'none';
      signupForm.style.display = 'flex';
      accountTitle.textContent = "Create Account";
    });

    toggleToLogin.addEventListener('click', () => {
      signupForm.style.display = 'none';
      loginForm.style.display = 'flex';
      accountTitle.textContent = "My Account";
    });
  }

  // ==========================================
  // 6. GLOBAL MOCK SEARCH ACTION
  // ==========================================
  const searchBtn = document.getElementById('search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const searchQuery = prompt("Search 234 District collection:");
      if (searchQuery && searchQuery.trim() !== "") {
        alert(`Searching catalog for: "${searchQuery}"\n(This is a mockup search query, filtering the view below...)`);
        
        // Custom search event for home.js to catch
        const searchEvent = new CustomEvent('catalogSearch', { detail: searchQuery.trim().toLowerCase() });
        document.dispatchEvent(searchEvent);
      }
    });
  }

  // ==========================================
  // 7. SIZING MODAL & POLICY HELPERS
  // ==========================================
  const sizeModal = document.getElementById('size-chart-modal');
  const closeSizeModal = document.getElementById('close-size-modal');
  const navSizeGuideTrigger = document.getElementById('nav-size-guide-trigger');

  const openSizeModal = () => {
    if (sizeModal) {
      sizeModal.classList.add('active');
    }
  };

  if (navSizeGuideTrigger) {
    navSizeGuideTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      openSizeModal();
    });
  }

  if (sizeModal && closeSizeModal) {
    closeSizeModal.addEventListener('click', () => {
      sizeModal.classList.remove('active');
    });
    sizeModal.addEventListener('click', (e) => {
      if (e.target === sizeModal) {
        sizeModal.classList.remove('active');
      }
    });
  }

  // Bind close buttons for policy drawers
  document.querySelectorAll('.drawer-close-policy').forEach(btn => {
    btn.addEventListener('click', closeAllDrawers);
  });

  // ==========================================
  // 8. INTERACTIVE STAR REVIEW SYSTEM
  // ==========================================
  const starSelector = document.getElementById('star-rating-selector');
  let selectedRating = 5; // Default value

  if (starSelector) {
    const starBtns = starSelector.querySelectorAll('.star-select-btn');
    
    // Set default visual stars
    starBtns.forEach(btn => btn.classList.add('active'));

    starBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseInt(btn.getAttribute('data-value'));
        selectedRating = val;
        
        starBtns.forEach(s => {
          const sVal = parseInt(s.getAttribute('data-value'));
          if (sVal <= val) {
            s.classList.add('active');
          } else {
            s.classList.remove('active');
          }
        });
      });
    });
  }

  // Handle Form Submission
  const reviewForm = document.getElementById('new-review-form');
  const reviewsList = document.getElementById('reviews-list-target');

  if (reviewForm && reviewsList) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const authorName = document.getElementById('review-author').value.trim();
      const contentText = document.getElementById('review-content').value.trim();

      if (!authorName || !contentText) return;

      // Construct stars elements
      let starsHtml = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= selectedRating) {
          starsHtml += '<span class="review-star full">&#9733;</span>';
        } else {
          starsHtml += '<span class="review-star empty">&#9733;</span>';
        }
      }

      // Format Date
      const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = new Date().toLocaleDateString('en-US', dateOptions);

      // Create Review Card
      const reviewCard = document.createElement('li');
      reviewCard.className = 'review-card animate-in';
      reviewCard.innerHTML = `
        <div class="review-header-info">
          <span class="reviewer-name">${authorName}</span>
          <span class="review-verified-badge">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="vertical-align: middle; margin-right: 4px;"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Verified Buyer
          </span>
          <span class="review-date">${formattedDate}</span>
        </div>
        <div class="review-stars-wrap">
          ${starsHtml}
        </div>
        <p class="review-body-text">${contentText}</p>
      `;

      // Prepend to top of reviews list
      reviewsList.insertBefore(reviewCard, reviewsList.firstChild);

      // Reset Form fields
      reviewForm.reset();
      
      // Reset default stars display
      if (starSelector) {
        starSelector.querySelectorAll('.star-select-btn').forEach(btn => btn.classList.add('active'));
      }
      selectedRating = 5;

      alert("Thank you! Your review has been submitted successfully.");
    });
  }

  // ==========================================
  // 9. ELASTIC CUSTOM CURSOR TRACKING (RAF LERP)
  // ==========================================
  const cursor = document.getElementById('custom-cursor');
  const ring = document.getElementById('custom-ring');

  if (cursor && ring) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const tick = () => {
      // Lerp (Linear Interpolation) for buttery-smooth follower lag
      cursorX += (mouseX - cursorX) * 0.3;
      cursorY += (mouseY - cursorY) * 0.3;
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(tick);
    };

    // Position cursor container fixed to top-left to avoid absolute layout lag
    cursor.style.position = 'fixed';
    cursor.style.top = '0';
    cursor.style.left = '0';
    cursor.style.pointerEvents = 'none';
    
    ring.style.position = 'fixed';
    ring.style.top = '0';
    ring.style.left = '0';
    ring.style.pointerEvents = 'none';

    requestAnimationFrame(tick);

    // Butter-smooth dynamic hover delegation
    document.addEventListener('mouseover', (e) => {
      const interactive = e.target.closest('a, button, select, input, textarea, .lookbook-dot, .qty-btn, .copy-acc-btn, .close-cart, .star-select-btn, .size-select-tag, .size-btn-option, .size-select-btn, [role="button"], .cart-item-remove, .chat-toggle-trigger, .social-capsule-btn, .drawer-close, .modal-close');
      if (interactive) {
        cursor.classList.add('hovered');
        ring.classList.add('hovered');
      }
    });

    document.addEventListener('mouseout', (e) => {
      const interactive = e.target.closest('a, button, select, input, textarea, .lookbook-dot, .qty-btn, .copy-acc-btn, .close-cart, .star-select-btn, .size-select-tag, .size-btn-option, .size-select-btn, [role="button"], .cart-item-remove, .chat-toggle-trigger, .social-capsule-btn, .drawer-close, .modal-close');
      if (interactive) {
        cursor.classList.remove('hovered');
        ring.classList.remove('hovered');
      }
    });

    // Hide cursor when leaving window, show when entering
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      ring.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      if (window.innerWidth > 1024) {
        cursor.style.opacity = '1';
        ring.style.opacity = '1';
      }
    });
  }

  // ==========================================
  // 9B. INTERSECTION OBSERVER SCROLL REVEAL
  // ==========================================
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: "0px 0px -50px 0px"
  });

  document.querySelectorAll('.product-section, .lookbook-section, .journal-section, .marquee-ticker, .hero-slider, .newsletter-section').forEach(sec => {
    sec.classList.add('reveal-on-scroll');
    revealObserver.observe(sec);
  });

  // ==========================================
  // 9C. SMART SHOW/HIDE HEADER ON SCROLL
  // ==========================================
  let lastScrollTop = 0;
  const scrollHeader = document.querySelector('.header');
  
  if (scrollHeader) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 80) {
        scrollHeader.classList.add('header-scrolled');
        if (scrollTop > lastScrollTop) {
          scrollHeader.classList.add('header-hidden');
        } else {
          scrollHeader.classList.remove('header-hidden');
        }
      } else {
        scrollHeader.classList.remove('header-scrolled');
        scrollHeader.classList.remove('header-hidden');
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });
  }

  // ==========================================
  // 9D. SCROLL PROGRESS INDICATOR
  // ==========================================
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress-bar';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (height > 0) {
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    }
  }, { passive: true });

  // ==========================================
  // 9E. BACK TO TOP BUTTON (BOTTOM-LEFT)
  // ==========================================
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (winScroll > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================
  // 10. STICKY CONTACT CHAT WIDGET TOGGLES
  // ==========================================
  const chatToggle = document.getElementById('chat-toggle-trigger');
  const chatClose = document.getElementById('chat-close-trigger');
  const chatCard = document.getElementById('chat-popup-card');

  if (chatToggle && chatClose && chatCard) {
    const openChat = () => {
      chatCard.classList.add('active');
      chatToggle.classList.add('hide');
      chatClose.classList.add('show');
    };

    const closeChat = () => {
      chatCard.classList.remove('active');
      chatToggle.classList.remove('hide');
      chatClose.classList.remove('show');
    };

    chatToggle.addEventListener('click', openChat);
    chatClose.addEventListener('click', closeChat);
  }
});
