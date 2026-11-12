/* "Privacy choices" link: any <a id="privacychoice"> on the page (content, menu, widget)
   reopens the Cookiebot banner instead of navigating. Delegated on document, so it also
   works for links added after this script runs. Independent of ad-consent-gate.js. */
document.addEventListener('click', function (e) {
	var link = e.target.closest && e.target.closest('#privacychoice');
	if (!link) return;
	e.preventDefault();
	if (window.Cookiebot) { window.Cookiebot.renew(); }
});
