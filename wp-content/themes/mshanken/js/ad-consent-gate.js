/* ad-consent-gate.js v2: loads Google ads only after the visitor's Cookiebot choice is known
   (Cigar Aficionado and Wine Spectator).
   Accepted marketing cookies and no GPC signal: normal ads (standard gpt.js), AdSense on.
   Declined, no choice yet, GPC, or Cookiebot slow/blocked: Google limited ads (limited-ads gpt.js,
   no ad cookies or identifiers), and AdSense stays paused (Google has no cookieless AdSense mode).

   1) In the page template <head>, REMOVE the hardcoded line
        <script async="async" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" crossorigin="anonymous"></script>
      and any preconnect/dns-prefetch lines for Google ad domains. ADD, before any other ad code:
        <script>
          window.googletag = window.googletag || {cmd: []};
          (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1;   // WS only: pauses AdSense
        </script>
        <script src="/js/ad-consent-gate.js"></script>
      This file then loads gpt.js itself. Site code that uses googletag.cmd.push(...) needs no change:
      it runs as soon as gpt.js loads, so slots defined later on the page load normally.
   2) Do the same anywhere else gpt.js is loaded (for example the WS restaurant search iframe).
   3) Keep the AdSense pause line ahead of every adsbygoogle.js include.
   Note: on a first visit, Accept takes effect from the next page view. */
(function () {
  var loaded = false;

  function load(personalized) {
    if (loaded) return;
    loaded = true;
    var gt = window.googletag = window.googletag || { cmd: [] };
    var s = document.createElement("script");
    s.async = true;
    s.crossOrigin = "anonymous";
    if (personalized) {
      s.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
      var adsense = window.adsbygoogle = window.adsbygoogle || [];   // WS AdSense
      adsense.pauseAdRequests = 0;
    } else {
      // Must run before any site command, so the very first ad request is already limited.
      var privacy = function () {
        googletag.pubads().setPrivacySettings({ limitedAds: true, restrictDataProcessing: true, nonPersonalizedAds: true });
      };
      if (Array.isArray(gt.cmd)) gt.cmd.unshift(privacy); else gt.cmd.push(privacy);
      s.src = "https://pagead2.googlesyndication.com/tag/js/gpt.js";   // limitedAds only works from this URL
    }
    document.head.appendChild(s);
  }

  function decide(marketing) {
    load(marketing === true && navigator.globalPrivacyControl !== true);
  }

  // Returning visitor: Cookiebot's own cookie already holds the answer (also works inside same-site iframes).
  function marketingFromCookie() {
    var m = document.cookie.match(/(?:^|;\s*)CookieConsent=([^;]*)/);
    if (!m) return null;
    var v = m[1];
    try { v = decodeURIComponent(v); } catch (e) {}
    if (/marketing:true/.test(v)) return true;
    if (/marketing:false/.test(v)) return false;
    return null;
  }

  var known = marketingFromCookie();
  if (known !== null) { decide(known); return; }

  window.addEventListener("CookiebotOnConsentReady", function () {
    var c = window.Cookiebot && window.Cookiebot.consent;
    decide(!!(c && c.marketing));
  });
  window.addEventListener("CookiebotOnLoad", function () {
    if (window.Cookiebot && !window.Cookiebot.hasResponse) decide(window.Cookiebot.consent && window.Cookiebot.consent.marketing);   // first visit: opt-out banner counts as opted in, strict banner stays limited until they choose
  });
  setTimeout(function () { load(false); }, 3000);   // Cookiebot slow or blocked: never fall back to personalized ads
})();