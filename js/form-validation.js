(function () {
    'use strict';

    /* ── Helpers ── */
    function showError(input, msg) {
        input.classList.add('error');
        input.classList.remove('valid');
        var grp = input.closest('.form-group');
        if (!grp) return;
        var err = grp.querySelector('.field-error');
        if (err) { err.textContent = msg; err.classList.add('visible'); }
    }
    function showValid(input) {
        input.classList.remove('error');
        input.classList.add('valid');
        var grp = input.closest('.form-group');
        if (!grp) return;
        var err = grp.querySelector('.field-error');
        if (err) err.classList.remove('visible');
    }
    function clearState(input) {
        input.classList.remove('error', 'valid');
        var grp = input.closest('.form-group');
        if (!grp) return;
        var err = grp.querySelector('.field-error');
        if (err) err.classList.remove('visible');
    }

    /* ── reCAPTCHA validator
       Reads the widget ID from the global variables set in script.js.
       If grecaptcha isn't loaded yet, allows submission (server will catch it).
    ── */
    function valRecaptcha(errorElementId, widgetId) {
        var errorEl = document.getElementById(errorElementId);

        // If reCAPTCHA library not loaded at all, skip client-side check
        if (typeof grecaptcha === 'undefined' || typeof grecaptcha.getResponse !== 'function') {
            return true;
        }

        var response = '';
        try {
            // widgetId can be 0 (falsy!) so check !== undefined
            response = (widgetId !== undefined && widgetId !== null)
                ? grecaptcha.getResponse(widgetId)
                : grecaptcha.getResponse();
        } catch (e) {
            // Widget not rendered yet — let server handle it
            return true;
        }

        if (!response || response.length === 0) {
            if (errorEl) {
                errorEl.textContent = '⚠️ Please tick "I\'m not a robot" before submitting.';
                errorEl.classList.add('visible');
                errorEl.style.display = 'block';
            }
            return false;
        }

        if (errorEl) {
            errorEl.classList.remove('visible');
            errorEl.style.display = 'none';
        }
        return true;
    }

    /* ── Field validators ── */
    function valName(el, optional) {
        var v = el.value.trim();
        if (!v) { if (optional) { clearState(el); return true; } showError(el, 'Name is required.'); return false; }
        if (v.length < 2)  { showError(el, 'Name must be at least 2 characters.'); return false; }
        if (v.length > 60) { showError(el, 'Name must be under 60 characters.'); return false; }
        showValid(el); return true;
    }
    function valEmail(el) {
        var v = el.value.trim();
        if (!v) { showError(el, 'Email is required.'); return false; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { showError(el, 'Enter a valid email address.'); return false; }
        showValid(el); return true;
    }
    function valPhone(el) {
        var v = el.value.trim();
        if (!v) { clearState(el); return true; } // optional
        if (!/^[0-9]{10}$/.test(v)) { showError(el, 'Phone must be exactly 10 digits.'); return false; }
        showValid(el); return true;
    }
    function valSubject(el) {
        var v = el.value.trim();
        if (!v) { showError(el, 'Subject is required.'); return false; }
        if (v.length < 3)   { showError(el, 'Subject must be at least 3 characters.'); return false; }
        if (v.length > 100) { showError(el, 'Subject must be under 100 characters.'); return false; }
        showValid(el); return true;
    }
    function valSelect(el) {
        if (!el.value) { showError(el, 'Please select an option.'); return false; }
        showValid(el); return true;
    }
    function valMessage(el, min, max) {
        var v = el.value.trim();
        if (!v) { showError(el, 'Message is required.'); return false; }
        if (v.length < min) { showError(el, 'Message must be at least ' + min + ' characters.'); return false; }
        if (v.length > max) { showError(el, 'Message must be under ' + max + ' characters.'); return false; }
        showValid(el); return true;
    }
    function valCareerName(el) {
        var v = el.value.trim();
        if (!v) { showError(el, 'Career name is required.'); return false; }
        if (v.length < 2)  { showError(el, 'Career name must be at least 2 characters.'); return false; }
        if (v.length > 80) { showError(el, 'Career name must be under 80 characters.'); return false; }
        showValid(el); return true;
    }
    function valReason(el) {
        var v = el.value.trim();
        if (!v) { showError(el, 'Please tell us why this career is hatke.'); return false; }
        if (v.length < 10)  { showError(el, 'Please write at least 10 characters.'); return false; }
        if (v.length > 500) { showError(el, 'Keep it under 500 characters.'); return false; }
        showValid(el); return true;
    }

    /* ── Character counter ── */
    function addCounter(el, max) {
        var grp = el.closest('.form-group');
        if (!grp || grp.querySelector('.char-count')) return;
        var c = document.createElement('div');
        c.className = 'char-count';
        grp.appendChild(c);
        function update() {
            var n = el.value.length;
            c.textContent = n + ' / ' + max;
            c.className = 'char-count' +
                (n > max * 0.85 ? ' warning' : '') +
                (n > max ? ' over' : '');
        }
        el.addEventListener('input', update);
        update();
    }

    function liveClear(el) {
        el.addEventListener('input', function () {
            if (el.classList.contains('error')) clearState(el);
        });
    }

    /* ── Contact Form ── */
    function initContact() {
        var form = document.querySelector('form[data-validate="contact"]');
        if (!form || form._validationBound) return;
        form._validationBound = true;

        var name    = form.querySelector('#name');
        var email   = form.querySelector('#email');
        var phone   = form.querySelector('#telephone');
        var subject = form.querySelector('#subject');
        var iam     = form.querySelector('#i_am');
        var message = form.querySelector('#message');
        var banner  = form.querySelector('.form-error-banner');

        if (message) addCounter(message, 1000);

        if (name)    { name.addEventListener('blur',       function () { valName(name); });       liveClear(name); }
        if (email)   { email.addEventListener('blur',      function () { valEmail(email); });     liveClear(email); }
        if (phone)   { phone.addEventListener('blur',      function () { valPhone(phone); });     liveClear(phone); }
        if (subject) { subject.addEventListener('blur',    function () { valSubject(subject); }); liveClear(subject); }
        if (iam)     { iam.addEventListener('change',      function () { valSelect(iam); }); }
        if (message) { message.addEventListener('blur',    function () { valMessage(message, 15, 1000); }); liveClear(message); }

        form.addEventListener('submit', function (e) {
            var ok = true;

            if (name    && !valName(name))               ok = false;
            if (email   && !valEmail(email))             ok = false;
            if (phone   && !valPhone(phone))             ok = false;
            if (subject && !valSubject(subject))         ok = false;
            if (iam     && !valSelect(iam))              ok = false;
            if (message && !valMessage(message, 15, 1000)) ok = false;

            /* Read widget ID at submit time — not at init time */
            var wid = (window.contactRecaptchaWidget !== undefined) ? window.contactRecaptchaWidget : null;
            if (!valRecaptcha('recaptcha-error-contact', wid)) ok = false;

            if (!ok) {
                e.preventDefault();
                if (banner) {
                    banner.textContent = 'Please fix the errors above before submitting.';
                    banner.classList.add('visible');
                }
                var first = form.querySelector('.error');
                if (first) {
                    first.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    var re = document.getElementById('recaptcha-error-contact');
                    if (re) re.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            } else {
                if (banner) banner.classList.remove('visible');
            }
        });
    }

    /* ── Suggestion Form ── */
    function initSuggestion() {
        var form = document.querySelector('form[data-validate="suggestion"]');
        if (!form || form._validationBound) return;
        form._validationBound = true;

        var career    = form.querySelector('#career-name');
        var reason    = form.querySelector('#career-why');
        var suggester = form.querySelector('#suggester-name');
        var banner    = form.querySelector('.form-error-banner');

        if (reason) addCounter(reason, 500);

        if (career)    { career.addEventListener('blur',    function () { valCareerName(career); });                     liveClear(career); }
        if (reason)    { reason.addEventListener('blur',    function () { valReason(reason); });                         liveClear(reason); }
        if (suggester) { suggester.addEventListener('blur', function () { if (suggester.value.trim()) valName(suggester, true); }); liveClear(suggester); }

        form.addEventListener('submit', function (e) {
            var ok = true;

            if (career && !valCareerName(career))   ok = false;
            if (reason && !valReason(reason))       ok = false;
            if (suggester && suggester.value.trim() && !valName(suggester, true)) ok = false;

            /* Read widget ID at submit time */
            var wid = (window.suggestionRecaptchaWidget !== undefined) ? window.suggestionRecaptchaWidget : null;
            if (!valRecaptcha('recaptcha-error-suggestion', wid)) ok = false;

            if (!ok) {
                e.preventDefault();
                if (banner) {
                    banner.textContent = 'Please fix the errors above before submitting.';
                    banner.classList.add('visible');
                }
                var first = form.querySelector('.error');
                if (first) {
                    first.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    var re = document.getElementById('recaptcha-error-suggestion');
                    if (re) re.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            } else {
                if (banner) banner.classList.remove('visible');
            }
        });
    }

    /* Expose so script.js can call after rendering reCAPTCHA */
    window.initContactValidation    = initContact;
    window.initSuggestionValidation = initSuggestion;

    document.addEventListener('DOMContentLoaded', function () {
        initContact();
        initSuggestion();
    });

})();