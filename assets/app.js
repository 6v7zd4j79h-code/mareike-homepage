window.REQUIRED_CODE_ERROR_MESSAGE = 'Wähle bitte einen Ländervorwahl aus.';
  window.LOCALE = 'de';
  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";
  window.REQUIRED_ERROR_MESSAGE = "Dieses Feld darf nicht leer sein. ";
  window.GENERIC_INVALID_MESSAGE = "Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";
  window.INVALID_NUMBER = "Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";
  window.INVALID_DATE = "Bitte gib ein gültiges Datum ein";
  window.REQUIRED_MULTISELECT_MESSAGE = 'Wähle bitte mindestens eine Option aus';
  window.translation = {
    common: {
      selectedList: '{quantity} Liste ausgewählt',
      selectedLists: '{quantity} Listen ausgewählt',
      selectedOption: '{quantity} ausgewählt',
      selectedOptions: '{quantity} ausgewählt',
    }
  };
  var AUTOHIDE = Boolean(0);

(function(){
    // Die Navigation besteht jetzt aus echten Links auf echte Unterseiten.
    // Die frühere Umschaltung per JavaScript wird nicht mehr gebraucht.
    var BASIS = document.body.getAttribute('data-basis') || '';
    function gehZu(name){ location.href = BASIS + (name === 'home' ? '' : name + '/'); }

    // background music: discreet manual toggle, never autoplays
    (function(){
      var music = document.getElementById('bg-music');
      var btn = document.getElementById('bg-music-toggle');
      var iconOff = document.getElementById('bg-music-icon-off');
      var iconOn = document.getElementById('bg-music-icon-on');
      if(!music || !btn) return;
      music.volume = 0.35;
      var playing = false;
      btn.addEventListener('click', function(){
        if(playing){
          music.pause();
          playing = false;
        } else {
          music.play().catch(function(){});
          playing = true;
        }
        btn.classList.toggle('is-playing', playing);
        btn.setAttribute('aria-pressed', playing ? 'true' : 'false');
        btn.setAttribute('aria-label', playing ? 'Hintergrundmusik stumm schalten' : 'Hintergrundmusik abspielen');
        if(iconOff) iconOff.style.display = playing ? 'none' : '';
        if(iconOn) iconOn.style.display = playing ? '' : 'none';
      });
    })();

    // freebie pop-up: appears once per browser session when the visitor scrolls down to the footer
    (function(){
      var overlay = document.getElementById('rfm-popup-overlay');
      if(!overlay) return;
      var alreadyShown = false;
      try{ alreadyShown = sessionStorage.getItem('rfm_popup_shown') === '1'; }catch(e){}

      function openPopup(){
        overlay.classList.add('is-open');
        try{ sessionStorage.setItem('rfm_popup_shown', '1'); }catch(e){}
      }
      function closePopup(){ overlay.classList.remove('is-open'); }

      var closeBtn = document.getElementById('rfm-popup-close');
      var dismissBtn = document.getElementById('rfm-popup-dismiss');
      var ctaBtn = document.getElementById('rfm-popup-cta');
      if(closeBtn){ closeBtn.addEventListener('click', closePopup); }
      if(dismissBtn){ dismissBtn.addEventListener('click', closePopup); }
      if(ctaBtn){
        ctaBtn.addEventListener('click', function(){
          closePopup();
          gehZu('audio-optin');
        });
      }
      overlay.addEventListener('click', function(e){
        if(e.target === overlay){ closePopup(); }
      });
      document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){ closePopup(); }
      });

      if(alreadyShown) return;
      var footerEl = document.querySelector('footer.site');
      if(!footerEl || !('IntersectionObserver' in window)) return;
      var popupObserver = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            openPopup();
            popupObserver.disconnect();
          }
        });
      }, {threshold:0.15});
      popupObserver.observe(footerEl);
    })();

    // scroll reveal: fade/rise elements into place as they enter the viewport
    var revealTargets = Array.prototype.slice.call(document.querySelectorAll(
      '.stack-head, .prose, .pillars .pillar, .offer-row, .split > div, .collage, .stat, .page-hero .script, .page-hero h2, .pull, .strip .cell, .offers .offer'
    ));
    revealTargets.forEach(function(el){ el.classList.add('reveal'); });
    ['.pillars', '.offer-rows', '.stats', '.strip', '.offers'].forEach(function(sel){
      var el = document.querySelector(sel);
      if(el){ el.classList.add('reveal-group'); }
    });

    if('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      }, {threshold:0.14, rootMargin:'0px 0px -40px 0px'});
      revealTargets.forEach(function(el){ io.observe(el); });
    } else {
      revealTargets.forEach(function(el){ el.classList.add('is-in'); });
    }

    // header gains a subtle shadow once the page scrolls
    var siteHeader = document.querySelector('header.site');
    function onScroll(){
      if(siteHeader){ siteHeader.classList.toggle('is-scrolled', window.scrollY > 12); }
    }
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
    if('ResizeObserver' in window){
    } else {
    }
    document.querySelectorAll('[data-goto]').forEach(function(btn){
    });
  })();

// ============================================================
// Darstellung anpassen: Schrift, Kontrast, Bewegung.
// Die Auswahl bleibt im Browser der Besucherin gespeichert,
// es wird nichts uebertragen. Eingebaut am 18.09.2026.
// ============================================================
(function(){
  var SCHLUESSEL = 'rfm-ansicht';
  var wurzel = document.documentElement;
  var knopf  = document.getElementById('ansicht-toggle');
  var panel  = document.getElementById('ansicht-panel');
  if(!knopf || !panel) return;

  var standard = { schrift:'normal', kontrast:'aus', bewegung:'normal' };

  function lesen(){
    try{
      var roh = localStorage.getItem(SCHLUESSEL);
      if(!roh) return Object.assign({}, standard);
      return Object.assign({}, standard, JSON.parse(roh));
    }catch(e){ return Object.assign({}, standard); }
  }
  function schreiben(w){
    try{ localStorage.setItem(SCHLUESSEL, JSON.stringify(w)); }catch(e){}
  }

  function anwenden(w){
    ['schrift','kontrast','bewegung'].forEach(function(art){
      var wert = w[art];
      if(wert && wert !== standard[art]) wurzel.setAttribute('data-'+art, wert);
      else wurzel.removeAttribute('data-'+art);
      panel.querySelectorAll('[data-'+art+']').forEach(function(b){
        b.setAttribute('aria-pressed', b.getAttribute('data-'+art) === wert ? 'true' : 'false');
      });
    });
  }

  var wahl = lesen();
  anwenden(wahl);

  panel.querySelectorAll('button[data-schrift], button[data-kontrast], button[data-bewegung]').forEach(function(b){
    b.addEventListener('click', function(){
      ['schrift','kontrast','bewegung'].forEach(function(art){
        if(b.hasAttribute('data-'+art)) wahl[art] = b.getAttribute('data-'+art);
      });
      anwenden(wahl);
      schreiben(wahl);
    });
  });

  function oeffnen(auf){
    panel.hidden = !auf;
    knopf.setAttribute('aria-expanded', auf ? 'true' : 'false');
    if(auf){
      var erster = panel.querySelector('button');
      if(erster) erster.focus();
    }
  }
  knopf.addEventListener('click', function(){ oeffnen(panel.hidden); });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !panel.hidden){ oeffnen(false); knopf.focus(); }
  });
  document.addEventListener('click', function(e){
    if(panel.hidden) return;
    if(!panel.contains(e.target) && !knopf.contains(e.target)) oeffnen(false);
  });
})();

// ============================================================
// Laufband anhalten. Bewegter Text muss sich stoppen lassen,
// sonst ist er fuer manche Menschen nicht lesbar.
// ============================================================
(function(){
  var band  = document.getElementById('laufband');
  var knopf = document.getElementById('laufband-pause');
  if(!band || !knopf) return;
  var pfad = {
    pause: '<rect x="2" y="1.5" width="3" height="9"></rect><rect x="7" y="1.5" width="3" height="9"></rect>',
    weiter: '<path d="M3 1.5 L10 6 L3 10.5 Z"></path>'
  };
  knopf.addEventListener('click', function(){
    var jetztPausiert = band.classList.toggle('pausiert');
    knopf.setAttribute('aria-pressed', jetztPausiert ? 'true' : 'false');
    knopf.setAttribute('aria-label', jetztPausiert ? 'Laufband weiterlaufen lassen' : 'Laufband anhalten');
    knopf.querySelector('svg').innerHTML = jetztPausiert ? pfad.weiter : pfad.pause;
  });
  // beim Darueberfahren und beim Anspringen mit der Tastatur anhalten
  band.addEventListener('mouseenter', function(){ band.classList.add('pausiert'); });
  band.addEventListener('mouseleave', function(){
    if(knopf.getAttribute('aria-pressed') !== 'true') band.classList.remove('pausiert');
  });
  band.addEventListener('focusin',  function(){ band.classList.add('pausiert'); });
  band.addEventListener('focusout', function(){
    if(knopf.getAttribute('aria-pressed') !== 'true') band.classList.remove('pausiert');
  });
})();
