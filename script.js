/* =============================================================
   Lindi's Sweet Bakes — Main JavaScript (script.js)
   Student: Lindiwe Mthethwa | ST10129141
   Module: WEDE5020 — Part 3
   Features:
     - Mobile navigation toggle
     - Sticky header scroll behaviour
     - Accordion (FAQ / product info)
     - Gallery lightbox
     - Dynamic product loading + search/filter
     - Leaflet interactive map (contact page)
     - Scroll-reveal animations
     - Enquiry form validation + quote response
     - Contact form validation + mailto email builder
     - Tabs (products page)
   ============================================================= */

/* ─────────────────────────────────────────────────────────────
   1. DOM READY
───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  initNavigation();
  initStickyHeader();
  initScrollReveal();
  initAccordions();
  initTabs();
  initLightbox();
  initDynamicProducts();
  initProductSearch();
  initEnquiryForm();
  initContactForm();
  initMap();
});

/* ─────────────────────────────────────────────────────────────
   2. MOBILE NAVIGATION
───────────────────────────────────────────────────────────── */
function initNavigation() {
  const burger = document.querySelector('.nav__burger');
  const navLinks = document.querySelector('.nav__links');
  if (!burger || !navLinks) return;

  burger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('nav__links--open');
    burger.setAttribute('aria-expanded', isOpen);
    burger.classList.toggle('nav__burger--open', isOpen);
  });

  // Close nav when a link is clicked (mobile UX)
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('nav__links--open');
      burger.setAttribute('aria-expanded', 'false');
      burger.classList.remove('nav__burger--open');
    });
  });

  // Close nav on outside click
  document.addEventListener('click', function (e) {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('nav__links--open');
      burger.setAttribute('aria-expanded', 'false');
      burger.classList.remove('nav__burger--open');
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   3. STICKY HEADER — adds shadow on scroll
───────────────────────────────────────────────────────────── */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', function () {
    header.classList.toggle('site-header--scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ─────────────────────────────────────────────────────────────
   4. SCROLL-REVEAL ANIMATIONS
   Elements with class .reveal animate in as they enter viewport
───────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const revealEls = document.querySelectorAll(
    '.feature-card, .testimonial-card, .product-card, .section-title, .section-subtitle'
  );

  revealEls.forEach(function (el) {
    el.classList.add('reveal');
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: just show everything
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('reveal--visible');
    });
  }
}

/* ─────────────────────────────────────────────────────────────
   5. ACCORDION
   Usage: wrap items in .accordion; each item needs
   .accordion__header (button) and .accordion__body
───────────────────────────────────────────────────────────── */
function initAccordions() {
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach(function (accordion) {
    const headers = accordion.querySelectorAll('.accordion__header');
    headers.forEach(function (header) {
      header.addEventListener('click', function () {
        const item = header.closest('.accordion__item');
        const body = item.querySelector('.accordion__body');
        const isOpen = item.classList.contains('accordion__item--open');

        // Close all items in this accordion
        accordion.querySelectorAll('.accordion__item').forEach(function (i) {
          i.classList.remove('accordion__item--open');
          i.querySelector('.accordion__header').setAttribute('aria-expanded', 'false');
          const b = i.querySelector('.accordion__body');
          if (b) b.style.maxHeight = null;
        });

        // Open clicked item if it was closed
        if (!isOpen) {
          item.classList.add('accordion__item--open');
          header.setAttribute('aria-expanded', 'true');
          if (body) body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   6. TABS
   Usage: .tabs-nav contains [data-tab="id"] buttons;
   .tab-panel[id] contains content
───────────────────────────────────────────────────────────── */
function initTabs() {
  const tabNavs = document.querySelectorAll('.tabs-nav');
  tabNavs.forEach(function (nav) {
    const buttons = nav.querySelectorAll('[data-tab]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetId = btn.getAttribute('data-tab');
        const container = nav.closest('.tabs-container') || document;

        // Deactivate all buttons
        buttons.forEach(function (b) {
          b.classList.remove('tabs-nav__btn--active');
          b.setAttribute('aria-selected', 'false');
        });

        // Hide all panels
        container.querySelectorAll('.tab-panel').forEach(function (panel) {
          panel.classList.remove('tab-panel--active');
          panel.setAttribute('hidden', '');
        });

        // Activate clicked
        btn.classList.add('tabs-nav__btn--active');
        btn.setAttribute('aria-selected', 'true');
        const targetPanel = container.querySelector('#' + targetId);
        if (targetPanel) {
          targetPanel.classList.add('tab-panel--active');
          targetPanel.removeAttribute('hidden');
        }
      });
    });

    // Activate first tab by default
    if (buttons.length > 0) buttons[0].click();
  });
}

/* ─────────────────────────────────────────────────────────────
   7. GALLERY LIGHTBOX
   Usage: .gallery-grid contains .gallery-item elements
   Each .gallery-item has an <img> with data-full and data-caption
───────────────────────────────────────────────────────────── */
function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length === 0) return;

  // Build lightbox DOM
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Image lightbox');
  lightbox.innerHTML = `
    <div class="lightbox__overlay"></div>
    <div class="lightbox__content">
      <button class="lightbox__close" aria-label="Close lightbox">&times;</button>
      <button class="lightbox__prev" aria-label="Previous image">&#8249;</button>
      <img class="lightbox__img" src="" alt="" />
      <button class="lightbox__next" aria-label="Next image">&#8250;</button>
      <p class="lightbox__caption"></p>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lbImg = lightbox.querySelector('.lightbox__img');
  const lbCaption = lightbox.querySelector('.lightbox__caption');
  const lbClose = lightbox.querySelector('.lightbox__close');
  const lbPrev = lightbox.querySelector('.lightbox__prev');
  const lbNext = lightbox.querySelector('.lightbox__next');
  const lbOverlay = lightbox.querySelector('.lightbox__overlay');

  let currentIndex = 0;
  const items = Array.from(galleryItems);

  function openLightbox(index) {
    currentIndex = index;
    const img = items[index].querySelector('img');
    lbImg.src = img.getAttribute('data-full') || img.src;
    lbImg.alt = img.alt;
    lbCaption.textContent = img.getAttribute('data-caption') || img.alt;
    lightbox.classList.add('lightbox--open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('lightbox--open');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    currentIndex = (currentIndex + dir + items.length) % items.length;
    openLightbox(currentIndex);
  }

  items.forEach(function (item, i) {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function () { openLightbox(i); });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(i); }
    });
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', 'View larger image');
  });

  lbClose.addEventListener('click', closeLightbox);
  lbOverlay.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', function () { navigate(-1); });
  lbNext.addEventListener('click', function () { navigate(1); });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('lightbox--open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}

/* ─────────────────────────────────────────────────────────────
   8. DYNAMIC PRODUCT LOADING
   Renders product cards from JS data array into #products-grid
───────────────────────────────────────────────────────────── */
var PRODUCTS = [
  { id: 1, category: 'cakes', name: 'Classic Vanilla Birthday Cake', price: 'From R350', desc: 'Moist vanilla sponge with buttercream frosting. Customisable tiers and colours.', emoji: '🎂', tags: ['birthday', 'custom', 'vanilla'] },
  { id: 2, category: 'cakes', name: 'Rich Chocolate Celebration Cake', price: 'From R380', desc: 'Dense chocolate layers with ganache and salted caramel drizzle.', emoji: '🍫', tags: ['chocolate', 'celebration', 'ganache'] },
  { id: 3, category: 'cakes', name: 'Elegant Wedding Cake', price: 'From R1 200', desc: 'Multi-tiered fondant wedding cakes designed to match your theme.', emoji: '💍', tags: ['wedding', 'fondant', 'tiered'] },
  { id: 4, category: 'cupcakes', name: 'Vanilla Buttercream Cupcakes', price: 'R18 each / R200 per dozen', desc: 'Light and fluffy cupcakes topped with swirled vanilla buttercream.', emoji: '🧁', tags: ['vanilla', 'cupcakes', 'dozen'] },
  { id: 5, category: 'cupcakes', name: 'Red Velvet Cupcakes', price: 'R22 each / R240 per dozen', desc: 'Vibrant red velvet with cream cheese frosting — a customer favourite.', emoji: '❤️', tags: ['red velvet', 'cream cheese', 'cupcakes'] },
  { id: 6, category: 'breads', name: 'Sourdough Boule', price: 'R65', desc: 'Slow-fermented 24-hour sourdough with crispy crust and chewy crumb.', emoji: '🍞', tags: ['sourdough', 'artisan', 'fresh'] },
  { id: 7, category: 'breads', name: 'Seeded Health Loaf', price: 'R55', desc: 'Packed with sunflower, pumpkin, and sesame seeds. Nutty and nutritious.', emoji: '🌻', tags: ['healthy', 'seeds', 'loaf'] },
  { id: 8, category: 'pastries', name: 'Butter Croissants', price: 'R28 each', desc: 'Flaky, layered all-butter croissants baked fresh every morning.', emoji: '🥐', tags: ['croissant', 'butter', 'fresh'] },
  { id: 9, category: 'pastries', name: 'Cinnamon Danish', price: 'R32 each', desc: 'Spiral cinnamon pastry with icing glaze and a hint of cardamom.', emoji: '🌀', tags: ['cinnamon', 'danish', 'sweet'] },
  { id: 10, category: 'cookies', name: 'Choc-Chip Cookies', price: 'R15 each / R160 per dozen', desc: 'Crispy edges, chewy centres, loaded with dark chocolate chips.', emoji: '🍪', tags: ['chocolate chip', 'cookies', 'classic'] },
  { id: 11, category: 'cookies', name: 'Fudgy Brownies', price: 'R22 each', desc: 'Ultra-fudgy triple-chocolate brownies with a crinkle top.', emoji: '🍫', tags: ['brownie', 'fudgy', 'chocolate'] },
  { id: 12, category: 'cakes', name: 'Carrot & Walnut Cake', price: 'From R320', desc: 'Moist spiced carrot cake with cream cheese frosting and candied walnuts.', emoji: '🥕', tags: ['carrot', 'walnut', 'spiced'] },
];

function initDynamicProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  renderProducts(PRODUCTS);
}

function renderProducts(products) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  if (products.length === 0) {
    grid.innerHTML = '<p class="no-results">No products found. Try a different search or category.</p>';
    return;
  }

  grid.innerHTML = products.map(function (p) {
    return `
      <div class="product-card gallery-item" data-category="${p.category}" data-id="${p.id}">
        <div class="product-card__image">
          <span class="product-card__emoji" aria-hidden="true">${p.emoji}</span>
        </div>
        <div class="product-card__body">
          <span class="product-card__category">${p.category}</span>
          <h3 class="product-card__name">${p.name}</h3>
          <p class="product-card__desc">${p.desc}</p>
          <div class="product-card__footer">
            <span class="product-card__price">${p.price}</span>
            <a href="enquiry.html" class="btn btn--dark btn--sm">Order Now</a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-init lightbox on newly rendered items (if gallery images present)
  initLightbox();
  // Re-init scroll reveal on new cards
  initScrollReveal();
}

/* ─────────────────────────────────────────────────────────────
   9. PRODUCT SEARCH + FILTER
───────────────────────────────────────────────────────────── */
function initProductSearch() {
  const searchInput = document.getElementById('product-search');
  const filterBtns = document.querySelectorAll('[data-filter]');
  if (!searchInput && filterBtns.length === 0) return;

  let activeCategory = 'all';
  let searchTerm = '';

  function applyFilters() {
    var filtered = PRODUCTS.filter(function (p) {
      var matchCat = activeCategory === 'all' || p.category === activeCategory;
      var matchSearch = searchTerm === '' ||
        p.name.toLowerCase().includes(searchTerm) ||
        p.desc.toLowerCase().includes(searchTerm) ||
        p.tags.some(function (t) { return t.includes(searchTerm); });
      return matchCat && matchSearch;
    });
    renderProducts(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchTerm = searchInput.value.toLowerCase().trim();
      applyFilters();
    });
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('filter-btn--active'); });
      btn.classList.add('filter-btn--active');
      activeCategory = btn.getAttribute('data-filter');
      applyFilters();
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   10. ENQUIRY FORM VALIDATION + PRICE RESPONSE
───────────────────────────────────────────────────────────── */
function initEnquiryForm() {
  var form = document.getElementById('enquiry-form');
  if (!form) return;

  // Pricing table (per unit estimates)
  var PRICING = {
    'custom-cake': { base: 350, unit: 'cake', note: 'Price varies by tiers and complexity.' },
    'wedding-cake': { base: 1200, unit: 'cake', note: 'Multi-tier pricing. We will confirm after consultation.' },
    'cupcakes': { base: 18, unit: 'cupcake', note: 'Minimum order: 12 cupcakes.' },
    'artisan-bread': { base: 55, unit: 'loaf', note: 'Prices vary per loaf type.' },
    'pastries': { base: 28, unit: 'pastry', note: 'Mixed assortment available.' },
    'cookies': { base: 15, unit: 'cookie', note: 'Minimum order: 12 cookies.' },
    'brownies': { base: 22, unit: 'brownie', note: 'Cut brownies. Box of 9 available.' },
    'mixed': { base: 20, unit: 'item', note: 'Mixed pricing — we will quote individually.' },
    'other': { base: 0, unit: 'item', note: 'Please describe in the message. We will provide a custom quote.' },
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validateEnquiryForm(form)) return;

    // Build price response
    var productType = form.querySelector('#product-type').value;
    var quantity = parseInt(form.querySelector('#quantity').value, 10);
    var name = form.querySelector('#full-name').value.trim().split(' ')[0];
    var pricing = PRICING[productType] || { base: 0, unit: 'item', note: 'We will quote you directly.' };
    var estimate = pricing.base > 0 ? 'R' + (pricing.base * quantity).toLocaleString() : 'To be confirmed';

    var responseDiv = document.getElementById('form-success');
    responseDiv.innerHTML = `
      <strong>✅ Thank you, ${name}!</strong><br/>
      Your enquiry has been received. Here is a rough estimate based on your selection:<br/><br/>
      <strong>Product:</strong> ${productType.replace(/-/g, ' ')}<br/>
      <strong>Quantity:</strong> ${quantity} ${pricing.unit}${quantity > 1 ? 's' : ''}<br/>
      <strong>Estimated Cost:</strong> ${estimate}<br/>
      <em style="font-size:0.85rem; opacity:0.8;">${pricing.note}</em><br/><br/>
      We will confirm your order and final pricing within <strong>24 hours</strong>. 
      For urgent enquiries, call us on <strong>012 000 0000</strong>.
    `;
    responseDiv.style.display = 'block';
    form.reset();
    responseDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

function validateEnquiryForm(form) {
  var valid = true;

  // Clear previous errors
  form.querySelectorAll('.form-error-msg').forEach(function (el) { el.textContent = ''; });
  form.querySelectorAll('.form-group').forEach(function (el) { el.classList.remove('form-group--error'); });

  function showError(inputId, message) {
    var input = form.querySelector('#' + inputId);
    if (!input) return;
    var group = input.closest('.form-group');
    var errorEl = group ? group.querySelector('.form-error-msg') : null;
    if (group) group.classList.add('form-group--error');
    if (errorEl) errorEl.textContent = message;
    valid = false;
  }

  // Full name
  var name = form.querySelector('#full-name');
  if (!name || name.value.trim().length < 2) {
    showError('full-name', 'Please enter your full name (at least 2 characters).');
  }

  // Email
  var email = form.querySelector('#email');
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.value.trim())) {
    showError('email', 'Please enter a valid email address.');
  }

  // Phone (optional but if filled must be valid SA format)
  var phone = form.querySelector('#phone');
  if (phone && phone.value.trim() !== '') {
    var phoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;
    var cleanPhone = phone.value.replace(/\s/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      var group = phone.closest('.form-group');
      if (group) {
        group.classList.add('form-group--error');
        var errSpan = document.createElement('span');
        errSpan.className = 'form-error-msg';
        errSpan.setAttribute('role', 'alert');
        errSpan.textContent = 'Please enter a valid South African phone number (e.g. 082 000 0000).';
        if (!group.querySelector('.form-error-msg')) group.appendChild(errSpan);
        else group.querySelector('.form-error-msg').textContent = errSpan.textContent;
      }
      valid = false;
    }
  }

  // Product type
  var product = form.querySelector('#product-type');
  if (!product || product.value === '') {
    showError('product-type', 'Please select a product type.');
  }

  // Quantity
  var qty = form.querySelector('#quantity');
  if (!qty || isNaN(parseInt(qty.value, 10)) || parseInt(qty.value, 10) < 1) {
    showError('quantity', 'Please enter a quantity of at least 1.');
  }

  // Event date — must be at least 2 days from now
  var dateInput = form.querySelector('#event-date');
  if (!dateInput || dateInput.value === '') {
    showError('event-date', 'Please select your event or collection date.');
  } else {
    var selected = new Date(dateInput.value);
    var minDate = new Date();
    minDate.setDate(minDate.getDate() + 2);
    minDate.setHours(0, 0, 0, 0);
    if (selected < minDate) {
      showError('event-date', 'Please select a date at least 2 days from today.');
    }
  }

  if (!valid) {
    var firstError = form.querySelector('.form-group--error');
    if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return valid;
}

/* ─────────────────────────────────────────────────────────────
   11. CONTACT FORM VALIDATION + MAILTO EMAIL
───────────────────────────────────────────────────────────── */
function initContactForm() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validateContactForm(form)) return;

    var name = form.querySelector('#contact-name').value.trim();
    var email = form.querySelector('#contact-email').value.trim();
    var phone = form.querySelector('#contact-phone') ? form.querySelector('#contact-phone').value.trim() : '';
    var msgType = form.querySelector('#message-type').value;
    var message = form.querySelector('#message').value.trim();

    var subject = encodeURIComponent('[' + msgType.toUpperCase() + '] Message from ' + name);
    var body = encodeURIComponent(
      'Name: ' + name + '\n' +
      'Email: ' + email + '\n' +
      (phone ? 'Phone: ' + phone + '\n' : '') +
      'Message Type: ' + msgType + '\n\n' +
      'Message:\n' + message + '\n\n' +
      '---\nSent via Lindi\'s Sweet Bakes contact form.'
    );

    var mailtoLink = 'mailto:hello@lindissweetbakes.co.za?subject=' + subject + '&body=' + body;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    var successDiv = document.getElementById('contact-success');
    if (successDiv) {
      successDiv.innerHTML = `
        <strong>✅ Your email client has been opened, ${name.split(' ')[0]}!</strong><br/>
        Your message has been prepared. Please send it from your email app to complete the submission.<br/>
        If your email client did not open, please email us directly at 
        <a href="mailto:hello@lindissweetbakes.co.za">hello@lindissweetbakes.co.za</a>.
      `;
      successDiv.style.display = 'block';
      form.reset();
      successDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

function validateContactForm(form) {
  var valid = true;

  form.querySelectorAll('.form-error-msg').forEach(function (el) { el.textContent = ''; });
  form.querySelectorAll('.form-group').forEach(function (el) { el.classList.remove('form-group--error'); });

  function showError(inputId, message) {
    var input = form.querySelector('#' + inputId);
    if (!input) return;
    var group = input.closest('.form-group');
    var errorEl = group ? group.querySelector('.form-error-msg') : null;
    if (group) group.classList.add('form-group--error');
    if (errorEl) errorEl.textContent = message;
    valid = false;
  }

  var name = form.querySelector('#contact-name');
  if (!name || name.value.trim().length < 2) {
    showError('contact-name', 'Please enter your full name.');
  }

  var email = form.querySelector('#contact-email');
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.value.trim())) {
    showError('contact-email', 'Please enter a valid email address.');
  }

  var msgType = form.querySelector('#message-type');
  if (!msgType || msgType.value === '') {
    showError('message-type', 'Please select a message type.');
  }

  var message = form.querySelector('#message');
  if (!message || message.value.trim().length < 10) {
    showError('message', 'Please enter a message of at least 10 characters.');
  }

  if (!valid) {
    var firstError = form.querySelector('.form-group--error');
    if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return valid;
}

/* ─────────────────────────────────────────────────────────────
   12. LEAFLET INTERACTIVE MAP
   Initialises on pages that have #bakery-map div
───────────────────────────────────────────────────────────── */
function initMap() {
  var mapEl = document.getElementById('bakery-map');
  if (!mapEl) return;
  if (typeof L === 'undefined') return; // Leaflet not loaded

  // Arcadia, Pretoria coordinates
  var lat = -25.7479;
  var lng = 28.1879;

  var map = L.map('bakery-map', { scrollWheelZoom: false }).setView([lat, lng], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  // Custom marker
  var icon = L.divIcon({
    html: '<div class="map-marker">🍰</div>',
    className: '',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  L.marker([lat, lng], { icon: icon })
    .addTo(map)
    .bindPopup(
      '<strong>Lindi\'s Sweet Bakes</strong><br/>12 Honey Lane, Arcadia<br/>Pretoria, 0083<br/><br/>Mon–Sat: 06:00–18:00<br/>📞 012 000 0000',
      { maxWidth: 220 }
    )
    .openPopup();

  // Hatfield Market marker
  L.marker([-25.7530, 28.2300], { icon: icon })
    .addTo(map)
    .bindPopup(
      '<strong>Hatfield Farmers Market</strong><br/>Burnett Street, Hatfield<br/>Saturdays: 07:00–13:00',
      { maxWidth: 220 }
    );
}
