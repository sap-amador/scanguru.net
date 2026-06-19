/**
 * ScanGuru i18n System v6.2.0
 * FULL SITE — 83 Languages — All Pages
 * 
 * Covers: Homepage, All Modality Pages, Technology, About, Contact, Pilot, Dashboard
 * CDN: https://cdn.jsdelivr.net/gh/sap-amador/scanguru.net@main/scanguru-i18n-v6-full-site.js
 */

const ScanGuruI18n = {
    version: '6.3.0',
    currentLang: 'en',
    coverage: {},
    suggested: null,
    SWITCH_THRESHOLD: 0.6,
    
    languages: {
        en: { name: 'English', native: 'English', flag: '🇺🇸', region: 'Americas', speakers: 1500 },
        af: { name: 'Afrikaans', native: 'Afrikaans', flag: '🇿🇦', region: 'Africa', speakers: 7 },
        am: { name: 'Amharic', native: 'አማርኛ', flag: '🇪🇹', region: 'Africa', speakers: 57 },
        az: { name: 'Azerbaijani', native: 'Azərbaycan', flag: '🇦🇿', region: 'Asia', speakers: 23 },
        bs: { name: 'Bosnian', native: 'Bosanski', flag: '🇧🇦', region: 'Europe', speakers: 3 },
        ca: { name: 'Catalan', native: 'Català', flag: '🇪🇸', region: 'Europe', speakers: 10 },
        gu: { name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳', region: 'Asia', speakers: 56 },
        ha: { name: 'Hausa', native: 'Hausa', flag: '🇳🇬', region: 'Africa', speakers: 80 },
        hy: { name: 'Armenian', native: 'Հայերեն', flag: '🇦🇲', region: 'Asia', speakers: 7 },
        ig: { name: 'Igbo', native: 'Igbo', flag: '🇳🇬', region: 'Africa', speakers: 31 },
        is: { name: 'Icelandic', native: 'Íslenska', flag: '🇮🇸', region: 'Europe', speakers: 0.4 },
        ka: { name: 'Georgian', native: 'ქართული', flag: '🇬🇪', region: 'Asia', speakers: 4 },
        kk: { name: 'Kazakh', native: 'Қазақ', flag: '🇰🇿', region: 'Asia', speakers: 13 },
        km: { name: 'Khmer', native: 'ភាសាខ្មែរ', flag: '🇰🇭', region: 'Asia', speakers: 16 },
        kn: { name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳', region: 'Asia', speakers: 44 },
        ky: { name: 'Kyrgyz', native: 'Кыргызча', flag: '🇰🇬', region: 'Asia', speakers: 5 },
        lo: { name: 'Lao', native: 'ລາວ', flag: '🇱🇦', region: 'Asia', speakers: 7 },
        mg: { name: 'Malagasy', native: 'Malagasy', flag: '🇲🇬', region: 'Africa', speakers: 25 },
        mi: { name: 'Maori', native: 'Māori', flag: '🇳🇿', region: 'Oceania', speakers: 0.2 },
        mk: { name: 'Macedonian', native: 'Македонски', flag: '🇲🇰', region: 'Europe', speakers: 2 },
        ml: { name: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳', region: 'Asia', speakers: 38 },
        mn: { name: 'Mongolian', native: 'Монгол', flag: '🇲🇳', region: 'Asia', speakers: 5 },
        mt: { name: 'Maltese', native: 'Malti', flag: '🇲🇹', region: 'Europe', speakers: 0.5 },
        my: { name: 'Burmese', native: 'မြန်မာ', flag: '🇲🇲', region: 'Asia', speakers: 33 },
        ne: { name: 'Nepali', native: 'नेपाली', flag: '🇳🇵', region: 'Asia', speakers: 16 },
        or: { name: 'Odia', native: 'ଓଡ଼ିଆ', flag: '🇮🇳', region: 'Asia', speakers: 35 },
        pcm: { name: 'Nigerian Pidgin', native: 'Naijá', flag: '🇳🇬', region: 'Africa', speakers: 120 },
        si: { name: 'Sinhala', native: 'සිංහල', flag: '🇱🇰', region: 'Asia', speakers: 17 },
        so: { name: 'Somali', native: 'Soomaali', flag: '🇸🇴', region: 'Africa', speakers: 22 },
        sq: { name: 'Albanian', native: 'Shqip', flag: '🇦🇱', region: 'Europe', speakers: 8 },
        tg: { name: 'Tajik', native: 'Тоҷикӣ', flag: '🇹🇯', region: 'Asia', speakers: 8 },
        tk: { name: 'Turkmen', native: 'Türkmen', flag: '🇹🇲', region: 'Asia', speakers: 7 },
        tl: { name: 'Tagalog', native: 'Tagalog', flag: '🇵🇭', region: 'Asia', speakers: 28 },
        uz: { name: 'Uzbek', native: 'Oʻzbek', flag: '🇺🇿', region: 'Asia', speakers: 34 },
        yo: { name: 'Yoruba', native: 'Yorùbá', flag: '🇳🇬', region: 'Africa', speakers: 46 },
        zu: { name: 'Zulu', native: 'isiZulu', flag: '🇿🇦', region: 'Africa', speakers: 12 },
        zh: { name: 'Chinese', native: '简体中文', flag: '🇨🇳', region: 'Asia', speakers: 1100 },
        hi: { name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳', region: 'Asia', speakers: 600 },
        es: { name: 'Spanish', native: 'Español', flag: '🇪🇸', region: 'Europe', speakers: 550 },
        ar: { name: 'Arabic', native: 'العربية', flag: '🇸🇦', region: 'MENA', speakers: 420, rtl: true },
        fr: { name: 'French', native: 'Français', flag: '🇫🇷', region: 'Europe', speakers: 280 },
        bn: { name: 'Bengali', native: 'বাংলা', flag: '🇧🇩', region: 'Asia', speakers: 270 },
        pt: { name: 'Portuguese', native: 'Português', flag: '🇵🇹', region: 'Europe', speakers: 260 },
        ru: { name: 'Russian', native: 'Русский', flag: '🇷🇺', region: 'Europe', speakers: 250 },
        'pt-BR': { name: 'Portuguese (Brazil)', native: 'Português (Brasil)', flag: '🇧🇷', region: 'Americas', speakers: 210 },
        id: { name: 'Indonesian', native: 'Bahasa Indonesia', flag: '🇮🇩', region: 'Asia', speakers: 200 },
        ur: { name: 'Urdu', native: 'اردو', flag: '🇵🇰', region: 'Asia', speakers: 230, rtl: true },
        de: { name: 'German', native: 'Deutsch', flag: '🇩🇪', region: 'Europe', speakers: 100 },
        ja: { name: 'Japanese', native: '日本語', flag: '🇯🇵', region: 'Asia', speakers: 125 },
        pa: { name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳', region: 'Asia', speakers: 125 },
        fa: { name: 'Persian', native: 'فارسی', flag: '🇮🇷', region: 'MENA', speakers: 110, rtl: true },
        sw: { name: 'Swahili', native: 'Kiswahili', flag: '🇰🇪', region: 'Africa', speakers: 100 },
        vi: { name: 'Vietnamese', native: 'Tiếng Việt', flag: '🇻🇳', region: 'Asia', speakers: 85 },
        ta: { name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳', region: 'Asia', speakers: 85 },
        tr: { name: 'Turkish', native: 'Türkçe', flag: '🇹🇷', region: 'Europe', speakers: 80 },
        te: { name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳', region: 'Asia', speakers: 83 },
        mr: { name: 'Marathi', native: 'मराठी', flag: '🇮🇳', region: 'Asia', speakers: 83 },
        ko: { name: 'Korean', native: '한국어', flag: '🇰🇷', region: 'Asia', speakers: 80 },
        it: { name: 'Italian', native: 'Italiano', flag: '🇮🇹', region: 'Europe', speakers: 65 },
        th: { name: 'Thai', native: 'ไทย', flag: '🇹🇭', region: 'Asia', speakers: 60 },
        pl: { name: 'Polish', native: 'Polski', flag: '🇵🇱', region: 'Europe', speakers: 45 },
        uk: { name: 'Ukrainian', native: 'Українська', flag: '🇺🇦', region: 'Europe', speakers: 40 },
        nl: { name: 'Dutch', native: 'Nederlands', flag: '🇳🇱', region: 'Europe', speakers: 25 },
        ro: { name: 'Romanian', native: 'Română', flag: '🇷🇴', region: 'Europe', speakers: 26 },
        el: { name: 'Greek', native: 'Ελληνικά', flag: '🇬🇷', region: 'Europe', speakers: 13 },
        cs: { name: 'Czech', native: 'Čeština', flag: '🇨🇿', region: 'Europe', speakers: 11 },
        hu: { name: 'Hungarian', native: 'Magyar', flag: '🇭🇺', region: 'Europe', speakers: 13 },
        sv: { name: 'Swedish', native: 'Svenska', flag: '🇸🇪', region: 'Europe', speakers: 10 },
        he: { name: 'Hebrew', native: 'עברית', flag: '🇮🇱', region: 'MENA', speakers: 9, rtl: true },
        da: { name: 'Danish', native: 'Dansk', flag: '🇩🇰', region: 'Europe', speakers: 6 },
        fi: { name: 'Finnish', native: 'Suomi', flag: '🇫🇮', region: 'Europe', speakers: 5.5 },
        no: { name: 'Norwegian', native: 'Norsk', flag: '🇳🇴', region: 'Europe', speakers: 5.5 },
        sk: { name: 'Slovak', native: 'Slovenčina', flag: '🇸🇰', region: 'Europe', speakers: 5 },
        bg: { name: 'Bulgarian', native: 'Български', flag: '🇧🇬', region: 'Europe', speakers: 8 },
        sr: { name: 'Serbian', native: 'Српски', flag: '🇷🇸', region: 'Europe', speakers: 9 },
        hr: { name: 'Croatian', native: 'Hrvatski', flag: '🇭🇷', region: 'Europe', speakers: 6 },
        lt: { name: 'Lithuanian', native: 'Lietuvių', flag: '🇱🇹', region: 'Europe', speakers: 3 },
        sl: { name: 'Slovenian', native: 'Slovenščina', flag: '🇸🇮', region: 'Europe', speakers: 2.5 },
        lv: { name: 'Latvian', native: 'Latviešu', flag: '🇱🇻', region: 'Europe', speakers: 1.5 },
        et: { name: 'Estonian', native: 'Eesti', flag: '🇪🇪', region: 'Europe', speakers: 1.1 },
        ms: { name: 'Malay', native: 'Bahasa Melayu', flag: '🇲🇾', region: 'Asia', speakers: 80 },
        fil: { name: 'Filipino', native: 'Filipino', flag: '🇵🇭', region: 'Asia', speakers: 45 },
        'zh-TW': { name: 'Chinese (Traditional)', native: '繁體中文', flag: '🇹🇼', region: 'Asia', speakers: 25 }
    },
    
    t: function(key, fallback) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                // Fallback to English
                value = this.translations.en;
                for (const k2 of keys) {
                    if (value && typeof value === 'object' && k2 in value) { value = value[k2]; }
                    else { return fallback || key; }
                }
                return value;
            }
        }
        return value || fallback || key;
    },
    
    setLanguage: function(lang, persist) {
        if (persist === undefined) persist = true;
        if (!this.translations[lang]) lang = 'en';
        this.currentLang = lang;
        if (persist) try { localStorage.setItem('scanguru_lang', lang); } catch (e) {}
        document.documentElement.lang = lang;
        const langDef = this.languages[lang];
        if (langDef && langDef.rtl) {
            document.body.classList.add('rtl');
            document.documentElement.dir = 'rtl';
        } else {
            document.body.classList.remove('rtl');
            document.documentElement.dir = 'ltr';
        }
        this.updatePageTranslations();
        this.updateLangButton();
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
        return lang;
    },
    
    updatePageTranslations: function() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translated = this.t(key);
            if (translated && translated !== key) {
                if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                    el.placeholder = translated;
                } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    // Don't change input values
                } else {
                    el.textContent = translated;
                }
            }
        });
        // Also update placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translated = this.t(key);
            if (translated && translated !== key) {
                el.placeholder = translated;
            }
        });
    },
    
    updateLangButton: function() {
        const btn = document.getElementById('langBtn');
        if (!btn) return;
        const langDef = this.languages[this.currentLang];
        if (!langDef) return;
        const flag = btn.querySelector('.lang-flag');
        const code = btn.querySelector('.lang-code');
        if (flag) flag.textContent = langDef.flag;
        if (code) code.textContent = this.currentLang.toUpperCase();
    },
    
    buildDropdown: function() {
        const dropdown = document.getElementById('langDropdown');
        if (!dropdown) return;
        const self = this;
        const opt = function(lang){
            var active = lang.code === self.currentLang;
            var cov = self.coverage[lang.code];
            var partial = (lang.code !== 'en' && cov !== undefined && cov < self.SWITCH_THRESHOLD) ? '<span style="margin-left:auto;font-size:10px;color:#64748B;">· partial</span>' : '';
            return '<div class="lang-option' + (active?' active':'') + '" data-lang="' + lang.code + '" style="display:flex;align-items:center;gap:10px;padding:10px 12px;cursor:pointer;font-size:13px;color:' + (active?'#14B8A6':'#94A3B8') + ';background:' + (active?'rgba(20,184,166,0.15)':'transparent') + ';"><span>' + lang.flag + '</span><span>' + lang.native + '</span>' + partial + '</div>';
        };
        const mk = function(code){ var l = self.languages[code]; return l ? { code: code, name: l.name, native: l.native, flag: l.flag, region: l.region, speakers: l.speakers } : null; };
        const hdr = function(label){ return '<div style="padding:8px 12px;font-size:10px;font-weight:600;color:#64748B;text-transform:uppercase;background:#0F172A;position:sticky;top:0;">' + label + '</div>'; };
        const shown = {};
        let html = '';
        const sugg = ['en'];
        if (self.suggested && self.suggested !== 'en' && self.languages[self.suggested]) sugg.push(self.suggested);
        html += hdr('Suggested');
        sugg.forEach(function(code){ var o = mk(code); if (o) { html += opt(o); shown[code] = 1; } });
        const featured = ['en','es','fr','de','zh','ja','ar','hi'];
        html += hdr('Popular');
        featured.forEach(function(code){ if (shown[code]) return; var o = mk(code); if (o) { html += opt(o); shown[code] = 1; } });
        const regions = {};
        Object.entries(this.languages).forEach(([code, lang]) => {
            if (shown[code]) return;
            if (!regions[lang.region]) regions[lang.region] = [];
            regions[lang.region].push({ code, ...lang });
        });
        const regionOrder = ['Americas', 'Europe', 'Asia', 'MENA', 'Africa', 'Oceania'];
        regionOrder.forEach(region => {
            if (!regions[region]) return;
            html += hdr(region);
            regions[region].sort((a, b) => b.speakers - a.speakers).forEach(lang => { html += opt(lang); });
        });
        dropdown.innerHTML = html;
        dropdown.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', () => {
                this.setLanguage(opt.dataset.lang);
                dropdown.style.display = 'none';
            });
            opt.addEventListener('mouseenter', () => { opt.style.background = 'rgba(20,184,166,0.1)'; opt.style.color = '#F8FAFC'; });
            opt.addEventListener('mouseleave', () => { 
                const isActive = opt.dataset.lang === this.currentLang;
                opt.style.background = isActive ? 'rgba(20,184,166,0.15)' : 'transparent'; 
                opt.style.color = isActive ? '#14B8A6' : '#94A3B8'; 
            });
        });
    },
    
    computeCoverage: function() {
        const en = this.translations.en;
        function countAgainst(e, l) {
            let n = 0;
            for (const k in e) {
                const ev = e[k], lv = l ? l[k] : undefined;
                if (ev && typeof ev === 'object' && !Array.isArray(ev)) {
                    n += countAgainst(ev, (lv && typeof lv === 'object') ? lv : {});
                } else if (lv !== undefined && lv !== null && lv !== '') { n++; }
            }
            return n;
        }
        const denom = countAgainst(en, en) || 1;
        this.coverage = {};
        for (const code in this.translations) {
            this.coverage[code] = code === 'en' ? 1 : countAgainst(en, this.translations[code]) / denom;
        }
        return this.coverage;
    },

    TZ_LANG: {
        'Europe/Athens':'el','Europe/Berlin':'de','Europe/Vienna':'de','Europe/Zurich':'de',
        'Europe/Madrid':'es','Europe/Paris':'fr','Europe/Brussels':'fr','Europe/Rome':'it',
        'Europe/Lisbon':'pt','Europe/Amsterdam':'nl','Europe/Warsaw':'pl','Europe/Prague':'cs',
        'Europe/Budapest':'hu','Europe/Bucharest':'ro','Europe/Stockholm':'sv','Europe/Copenhagen':'da',
        'Europe/Helsinki':'fi','Europe/Moscow':'ru','Europe/Kyiv':'uk','Europe/Istanbul':'tr',
        'Asia/Kolkata':'hi','Asia/Calcutta':'hi','Asia/Dubai':'ar','Asia/Riyadh':'ar','Asia/Qatar':'ar',
        'Asia/Bahrain':'ar','Asia/Kuwait':'ar','Asia/Baghdad':'ar','Africa/Cairo':'ar',
        'Asia/Shanghai':'zh','Asia/Chongqing':'zh','Asia/Taipei':'zh-TW','Asia/Hong_Kong':'zh-TW',
        'Asia/Tokyo':'ja','Asia/Seoul':'ko','Asia/Bangkok':'th','Asia/Ho_Chi_Minh':'vi','Asia/Saigon':'vi',
        'Asia/Jakarta':'id','Asia/Tehran':'fa','Asia/Karachi':'ur','Asia/Dhaka':'bn',
        'America/Sao_Paulo':'pt','America/Mexico_City':'es','America/Bogota':'es','America/Buenos_Aires':'es',
        'America/Lima':'es','America/Santiago':'es'
    },

    detectRegional: function() {
        const self = this;
        const has = function(c){ return (c && self.translations[c]) ? c : null; };
        const list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || navigator.userLanguage || ''];
        for (let i = 0; i < list.length; i++) {
            const loc = list[i];
            if (!loc || /^en\b/i.test(loc)) continue;
            if (/^zh-(TW|HK|Hant)/i.test(loc) && has('zh-TW')) return 'zh-TW';
            const exact = has(loc), base = has(loc.split('-')[0]);
            if (exact) return exact;
            if (base) return base;
        }
        try {
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const c = this.TZ_LANG[tz];
            if (has(c)) return c;
        } catch (e) {}
        return null;
    },

    detectLanguage: function() {
        this.suggested = this.detectRegional();              // always, for the dropdown
        let saved = null;
        try { saved = localStorage.getItem('scanguru_lang'); } catch (e) {}
        if (saved && this.translations[saved]) return saved; // manual choice wins
        const reg = this.suggested;                          // option B: coverage-gated auto-switch
        if (reg && (this.coverage[reg] || 0) >= this.SWITCH_THRESHOLD) return reg;
        return 'en';
    },
    
    getLanguageCount: function() { return Object.keys(this.languages).length; },
    
    init: function() {
        this.computeCoverage();
        const lang = this.detectLanguage();
        this.setLanguage(lang, false);
        this.buildDropdown();
        const btn = document.getElementById('langBtn');
        const dropdown = document.getElementById('langDropdown');
        if (btn && dropdown) {
            btn.addEventListener('click', (e) => { 
                e.stopPropagation(); 
                dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none'; 
            });
            document.addEventListener('click', () => { dropdown.style.display = 'none'; });
        }
        console.log('ScanGuru i18n v' + this.version + ' initialized: ' + lang + ' (' + this.getLanguageCount() + ' languages available)');
    },

    translations: {

// ═══════════════════════════════════════════════════════════════════════════════════════
// ENGLISH - Complete Master (ALL PAGES, ALL SECTIONS)
// ═══════════════════════════════════════════════════════════════════════════════════════
en: {
    // Brand
    brand: { name: 'ScanGuru', tagline: 'AI-Powered Medical Imaging' },
    
    // Navigation
    nav: {
        platform: 'Platform',
        modalities: 'Modalities',
        technology: 'Technology',
        clinical_evidence: 'Clinical Evidence',
        about: 'About Us',
        contact: 'Contact',
        try_free: 'Try It Free',
        apply_pilot: 'Sign Up Free',
        signup: 'Sign Up',
        login: 'Login',
        // Dropdown items
        all_solutions: 'All Solutions',
        chest_xray: 'Chest X-Ray',
        ct_imaging: 'CT Imaging',
        mammography: 'Mammography',
        mri_suite: 'MRI Suite',
        msk_xray: 'MSK X-Ray',
        dental: 'Dental',
        ultrasound: 'Ultrasound',
        pet_scan: 'PET Scan'
    },
    
    // Homepage - Hero Section
    home: {
        badge: 'Free Plan Available',
        title: 'The Complete AI Platform for Medical Imaging',
        subtitle: '50+ pathologies live across 5 imaging modalities — on a roadmap to 400+ across 17.',
        claim_badge: '50+ live · 400+ on the roadmap',
        stat_modalities: '5',
        stat_modalities_label: 'Modalities',
        stat_pathologies: '50+',
        stat_pathologies_label: 'Pathologies',
        stat_languages: '83',
        stat_languages_label: 'Languages',
        stat_accuracy: '85-95%',
        stat_accuracy_label: 'Accuracy',
        cta_pilot: 'Sign Up Free',
        cta_try: 'Try It Free — No Account'
    },
    
    // Trust Bar
    trust_bar: {
        title: 'Trusted by Healthcare Leaders',
        hipaa: 'HIPAA Compliant',
        gdpr: 'GDPR Ready',
        dicom: 'DICOM Compatible',
        hl7: 'HL7/FHIR Integration',
        cloud: 'Cloud & On-Premise',
        soc2: 'SOC 2 Type II',
        iso: 'ISO 27001'
    },
    
    // Modalities Section (Homepage)
    modalities_section: {
        badge: 'Comprehensive Coverage',
        title: 'One Platform, Every Modality',
        subtitle: 'From chest X-rays to advanced CT imaging, our AI covers the full spectrum of diagnostic imaging.',
        view_all: 'View All Modalities',
        // Modality cards
        cxr_title: 'Chest X-Ray',
        cxr_desc: '50+ pathology detection with cardiomegaly scoring',
        ct_title: 'CT Imaging',
        ct_desc: 'Brain hemorrhage, chest nodules, and trauma detection',
        mammo_title: 'Mammography',
        mammo_desc: 'BI-RADS classification and lesion detection',
        mri_title: 'MRI Suite',
        mri_desc: 'Brain, spine, and musculoskeletal analysis',
        msk_title: 'MSK X-Ray',
        msk_desc: 'Fracture detection and bone abnormalities',
        dental_title: 'Dental',
        dental_desc: 'Panoramic and periapical analysis',
        ultrasound_title: 'Ultrasound',
        ultrasound_desc: 'Abdominal and obstetric imaging',
        pet_title: 'PET Scan',
        pet_desc: 'Oncology and metabolic imaging'
    },
    
    // Features Section
    features: {
        badge: 'Why ScanGuru',
        title: 'Built for Clinical Excellence',
        subtitle: 'Enterprise-grade AI that integrates seamlessly into your workflow.',
        // Feature items
        f1_title: 'Multi-Model Ensemble',
        f1_desc: 'Multiple AI models work together for higher accuracy and fewer false positives.',
        f2_title: 'Real-Time Analysis',
        f2_desc: 'Results in under 60 seconds, prioritizing critical findings automatically.',
        f3_title: 'Seamless Integration',
        f3_desc: 'Works with your existing PACS, RIS, and EMR systems via HL7/FHIR.',
        f4_title: 'Audit Trail',
        f4_desc: 'Complete logging and compliance documentation for regulatory requirements.'
    },
    
    // CTA Section
    comparison: {
        badge: 'Why ScanGuru',
        title: 'Comprehensive vs. Point Solutions',
        subtitle: 'See how a unified platform compares to managing multiple specialized vendors.',
        note: 'A unified platform means simpler integration, consistent user experience, lower total cost of ownership, and comprehensive coverage without managing multiple vendor relationships.'
    },
    cta: {
        badge: 'Get Started Today',
        title: 'Ready to Transform Your Imaging Workflow?',
        subtitle: 'Join leading healthcare institutions using ScanGuru for faster, more accurate diagnoses.',
        btn_try: 'Try It Free',
        btn_pilot: 'Sign Up Free',
        btn_contact: 'Contact Sales',
        benefit1: 'Early access to new modalities',
        benefit2: 'Research co-authorship opportunities',
        benefit3: 'Direct product influence'
    },
    
    // Footer
    footer: {
        description: 'AI-powered medical imaging analysis platform trusted by healthcare institutions worldwide.',
        col_platform: 'Platform',
        col_modalities: 'Modalities',
        col_company: 'Company',
        col_resources: 'Resources',
        col_legal: 'Legal',
        // Links
        all_solutions: 'All Solutions',
        technology: 'Technology',
        security: 'Security',
        clinical_evidence: 'Clinical Evidence',
        about: 'About Us',
        careers: 'Careers',
        press: 'Press',
        contact: 'Contact',
        documentation: 'Documentation',
        api_reference: 'API Reference',
        case_studies: 'Case Studies',
        blog: 'Blog',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookie Policy',
        copyright: '© 2026 ScanGuru. All rights reserved.'
    },
    
    // Common UI Elements
    common: {
        loading: 'Loading...',
        save: 'Save',
        cancel: 'Cancel',
        download: 'Download',
        upload: 'Upload',
        search: 'Search',
        next: 'Next',
        back: 'Back',
        close: 'Close',
        yes: 'Yes',
        no: 'No',
        confirm: 'Confirm',
        delete: 'Delete',
        edit: 'Edit',
        view: 'View',
        learn_more: 'Learn More',
        get_started: 'Get Started',
        view_details: 'View Details',
        download_pdf: 'Download PDF',
        pathologies: 'Pathologies',
        sensitivity: 'Sensitivity',
        specificity: 'Specificity',
        analysis_time: 'Analysis Time',
        accuracy: 'Accuracy'
    },
    
    // Form Labels
    form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        organization: 'Organization',
        role: 'Your Role',
        message: 'Message',
        age: 'Age',
        sex: 'Sex',
        sex_male: 'Male',
        sex_female: 'Female',
        submit: 'Submit',
        upload: 'Upload Image',
        select_modality: 'Select Modality',
        scan_generate: 'Scan & Generate PDF'
    },
    
    // Results
    results: {
        critical: 'Critical',
        urgent: 'Urgent',
        routine: 'Routine',
        normal: 'Normal',
        abnormal: 'Abnormal',
        findings: 'Findings',
        confidence: 'Confidence',
        recommendation: 'Recommendation'
    },
    
    // ═══════════════════════════════════════════════════════════════════════════════
    // CHEST X-RAY PAGE
    // ═══════════════════════════════════════════════════════════════════════════════
    cxr: {
        s051: 'Not intended for: autonomous diagnosis · replacing clinical judgment · emergency triage · direct-to-patient use without a clinician · unqualified users · modalities outside the validated list.',
        s050: 'Market-specific regulatory registration in progress — currently offered for Research Use Only.',
        s049: 'Clinician-reviewed decision support.',
        s048: 'Blog',
        s047: 'Case Studies',
        s046: 'API Reference',
        s045: 'Documentation',
        s044: 'Contact',
        s043: 'Press',
        s042: 'Careers',
        s041: 'About Us',
        s040: 'MRI',
        s039: 'Mammography',
        s038: 'CT Brain',
        s037: 'Chest X-Ray',
        s036: 'Security',
        s035: 'Clinical Evidence',
        s034: 'Technology',
        s033: 'All Modalities',
        s032: 'PDF Report Generation',
        s031: 'GradCAM Heatmaps',
        s030: 'Confidence Scoring',
        s029: 'ICD-10 Coding',
        s028: 'Automatic Triage (STAT/URGENT/ROUTINE)',
        s027: 'Integrated Clinical Scoring Systems',
        s026: 'Foreign Body, Subcutaneous Emphysema',
        s025: '2 pathologies',
        s024: 'Other Findings',
        s023: 'ETT Position, Central Line, Pacemaker, Chest Tube, and more',
        s022: '4 pathologies',
        s021: 'Devices & Lines',
        s020: 'Pulmonary Nodule, Lung Mass, Solitary Nodule, Multiple Nodules',
        s019: '4 pathologies',
        s018: 'Nodules & Masses',
        s017: 'Mediastinal Widening, Hilar Enlargement, Mediastinal Mass, and more',
        s016: '5 pathologies',
        s015: 'Mediastinal',
        s014: 'Pleural Effusion, Pneumothorax, Pleural Thickening, Hydropneumothorax, and more',
        s013: '5 pathologies',
        s012: 'Pleural',
        s011: 'Rib Fracture, Clavicle Fracture, Scoliosis, Osteoporosis, and more',
        s010: '7 pathologies',
        s009: 'Skeletal',
        s008: 'Pneumonia, Atelectasis, Consolidation, Emphysema, Pulmonary Edema, and more',
        s007: '15 pathologies',
        s006: 'Pulmonary',
        s005: 'Cardiomegaly, Pericardial Effusion, Enlarged Aortic Arch, Calcified Aorta, and more',
        s004: '8 pathologies',
        s003: 'Cardiac',
        s002: 'CXR Analysis',
        s001: 'EN',
        features_subtitle: 'Comprehensive chest x-ray analysis powered by our ensemble AI architecture',
        features_badge: 'Comprehensive Coverage',
        time_label: 'Processing Time',
        time: '<20s',
        sensitivity_label: 'Sensitivity',
        sensitivity: '92%',
        pathologies_label: 'Pathologies Detected',
        pathologies: '50',
        badge: '🫁 Chest X-Ray Analysis',
        title: 'AI-Powered Chest X-Ray Analysis',
        subtitle: 'Comprehensive CXR analysis detecting 50 pathologies with our 5-model hybrid ensemble. Automated triage, clinical scoring systems, and instant PDF reports.',
        stat1_value: '50+',
        stat1_label: 'Pathologies',
        stat2_value: '94%',
        stat2_label: 'Sensitivity',
        stat3_value: '<30s',
        stat3_label: 'Analysis Time',
        // Challenge section
        challenge_title: 'The Challenge',
        challenge_text: 'Chest X-rays represent the most common diagnostic imaging study, yet radiologist workloads continue to increase while critical findings risk being delayed.',
        // Features
        features_title: '50 Pathologies Detected',
        f1_title: 'Multi-Pathology Detection',
        f1_desc: 'Simultaneous screening for pneumonia, nodules, cardiomegaly, pleural effusion, and 46+ other conditions.',
        f2_title: 'Critical Finding Alerts',
        f2_desc: 'Automatic prioritization of pneumothorax, large effusions, and other urgent findings.',
        f3_title: 'Cardiothoracic Ratio',
        f3_desc: 'Automated CTR measurement with precise cardiac silhouette analysis.',
        f4_title: 'Quality Assessment',
        f4_desc: 'Automatic image quality scoring and positioning verification.',
        // Pathology categories
        path_title: 'Detected Pathologies',
        path_cardiac: 'Cardiac',
        path_pulmonary: 'Pulmonary',
        path_pleural: 'Pleural',
        path_mediastinal: 'Mediastinal',
        path_skeletal: 'Skeletal',
        // CTA
        cta_title: 'Ready to Enhance Your Chest X-Ray Workflow?',
        cta_subtitle: 'See how ScanGuru can help your team detect findings faster.'
    },
    
    // ═══════════════════════════════════════════════════════════════════════════════
    // CT CHEST PAGE
    // ═══════════════════════════════════════════════════════════════════════════════
    ct_chest: {
        badge: 'CT Chest AI',
        title: 'Comprehensive CT Chest Analysis',
        s001: 'Platform',
        s002: 'Modalities',
        s003: 'Clinical Evidence',
        s004: 'About',
        s005: 'EN',
        s006: 'Try It Free',
        s007: 'Sign Up Free',
        s008: 'CT Chest AI',
        s009: 'AI-powered detection of 30+ thoracic pathologies with integrated Lung-RADS and CO-RADS scoring. Lung nodule characterization, COVID-19 patterns, and incidental findings.',
        s010: 'Pathologies',
        s011: 'Sensitivity',
        s012: 'Analysis Time',
        s013: 'Sign Up Free',
        s014: 'View Demo',
        s015: 'Comprehensive Coverage',
        s016: '30+ Pathologies Detected',
        s017: 'Comprehensive ct chest analysis powered by our ensemble AI architecture',
        s018: 'Lung Nodules',
        s019: '5 Pathologies',
        s020: 'Solid',
        s021: 'Ground-glass',
        s022: 'Part-solid',
        s023: 'Calcified',
        s024: 'Perifissural',
        s025: 'Parenchyma',
        s026: '5 Pathologies',
        s027: 'Consolidation',
        s028: 'GGO',
        s029: 'Fibrosis',
        s030: 'Emphysema',
        s031: 'ILD',
        s032: 'Airway',
        s033: '4 Pathologies',
        s034: 'Bronchiectasis',
        s035: 'Wall Thickening',
        s036: 'Mucoid Impaction',
        s037: 'Tracheal',
        s038: 'Pleural',
        s039: '4 Pathologies',
        s040: 'Effusion',
        s041: 'Thickening',
        s042: 'Pneumothorax',
        s043: 'Mass',
        s044: 'Mediastinal',
        s045: '4 Pathologies',
        s046: 'Lymphadenopathy',
        s047: 'Mass',
        s048: 'Aortic Aneurysm',
        s049: 'Pericardial Effusion',
        s050: 'COVID-19',
        s051: '3 Pathologies',
        s052: 'Typical Pattern',
        s053: 'Indeterminate',
        s054: 'Atypical',
        s055: 'Integrated Clinical Scoring Systems',
        s056: 'Lung-RADS (Nodules)',
        s057: 'CO-RADS (COVID)',
        s058: 'Fleischner Criteria',
        s059: 'Free Plan Available',
        s060: 'Ready to Transform Your CT Chest Workflow?',
        s061: 'Join our free plan program and deploy comprehensive ct chest AI at your institution.',
        s062: 'Sign Up Free',
        s063: 'Download Prospectus',
        s064: 'Comprehensive AI medical imaging — 50+ pathologies live across 5 modalities, on a roadmap to 400+ across 17.',
        s065: 'Platform',
        s066: 'All Modalities',
        s067: 'Technology',
        s068: 'Clinical Evidence',
        s069: 'Modalities',
        s070: 'Chest X-Ray',
        s071: 'CT Brain',
        s072: 'Mammography',
        s073: 'Company',
        s074: 'About Us',
        s075: 'Contact',
        s076: 'Get Started',
        s077: '© 2024 ScanGuru. All rights reserved. | HIPAA Compliant | GDPR Compliant | ISO 27001',
        s078: 'Clinician-reviewed decision support.',
        s079: 'Market-specific regulatory registration in progress — currently offered for Research Use Only.',
        s080: 'Not intended for: autonomous diagnosis · replacing clinical judgment · emergency triage · direct-to-patient use without a clinician · unqualified users · modalities outside the validated list.',
        subtitle: 'AI-powered detection of 30+ thoracic pathologies with integrated Lung-RADS and CO-RADS scoring. Lung nodule characterization, COVID-19 patterns, and incidental findings.',
        stat1_value: '30+',
        stat1_label: 'Pathologies',
        stat2_value: '94%',
        stat2_label: 'Sensitivity',
        stat3_value: '<60s',
        stat3_label: 'Analysis Time',
        // Challenge section
        challenge_title: 'The Challenge',
        challenge_text: 'CT chest imaging generates hundreds of slices per study, making comprehensive review time-consuming while critical findings may be missed.',
        // Features
        features_title: 'Capabilities',
        f1_title: 'Lung Nodule Detection',
        f1_desc: 'Automatic detection, measurement, and Lung-RADS classification of pulmonary nodules.',
        f2_title: 'COVID-19 Analysis',
        f2_desc: 'CO-RADS scoring with GGO quantification and disease severity assessment.',
        f3_title: 'Incidental Findings',
        f3_desc: 'Detection of coronary calcification, adrenal nodules, and other incidentals.',
        f4_title: '3D Visualization',
        f4_desc: 'Interactive MPR views with volumetric nodule tracking.',
        // Pathology categories
        path_title: 'Detected Pathologies',
        path_nodules: 'Nodules & Masses',
        path_infection: 'Infection',
        path_airways: 'Airways Disease',
        path_vascular: 'Vascular',
        path_incidental: 'Incidental',
        // CTA
        cta_title: 'Ready to Enhance Your CT Chest Workflow?',
        cta_subtitle: 'See how ScanGuru can help detect lung nodules and critical findings faster.'
    },
    
    // ═══════════════════════════════════════════════════════════════════════════════
    // CT BRAIN PAGE
    // ═══════════════════════════════════════════════════════════════════════════════
    ct_brain: {
        badge: 'CT Brain AI',
        title: 'Advanced CT Brain Analysis',
        s001: 'Platform',
        s002: 'Modalities',
        s003: 'Clinical Evidence',
        s004: 'About',
        s005: 'EN',
        s006: 'Try It Free',
        s007: 'Sign Up Free',
        s008: 'CT Brain AI',
        s009: 'AI-powered detection of 30+ brain pathologies with integrated clinical scoring systems for emergency triage. From hemorrhage to stroke, with Marshall Classification and ASPECTS scoring.',
        s010: 'Pathologies',
        s011: 'Sensitivity',
        s012: 'Analysis Time',
        s013: 'Sign Up Free',
        s014: 'View Demo',
        s015: 'Comprehensive Coverage',
        s016: '30+ Pathologies Detected',
        s017: 'Comprehensive ct brain analysis powered by our ensemble AI architecture',
        s018: 'Hemorrhage',
        s019: '5 Pathologies',
        s020: 'Epidural',
        s021: 'Subdural',
        s022: 'Subarachnoid',
        s023: 'Intraparenchymal',
        s024: 'Intraventricular',
        s025: 'Ischemia/Stroke',
        s026: '5 Pathologies',
        s027: 'Acute Infarct',
        s028: 'Chronic Infarct',
        s029: 'Lacunar',
        s030: 'Watershed',
        s031: 'Hypoxic-Ischemic',
        s032: 'Mass Lesions',
        s033: '5 Pathologies',
        s034: 'Primary Tumor',
        s035: 'Metastases',
        s036: 'Abscess',
        s037: 'Arachnoid Cyst',
        s038: 'Colloid Cyst',
        s039: 'Trauma',
        s040: '4 Pathologies',
        s041: 'Skull Fracture',
        s042: 'Contusion',
        s043: 'Diffuse Axonal Injury',
        s044: 'Pneumocephalus',
        s045: 'Hydrocephalus',
        s046: '3 Pathologies',
        s047: 'Communicating',
        s048: 'Non-communicating',
        s049: 'Normal Pressure (NPH)',
        s050: 'Other',
        s051: '8+ Pathologies',
        s052: 'Cerebral Edema',
        s053: 'Midline Shift',
        s054: 'Herniation',
        s055: 'Atrophy',
        s056: 'Calcifications',
        s057: 'Integrated Clinical Scoring Systems',
        s058: 'Marshall Classification (TBI)',
        s059: 'ASPECTS Score (Stroke)',
        s060: 'ICH Score (Hemorrhage)',
        s061: 'Free Plan Available',
        s062: 'Ready to Transform Your CT Brain Workflow?',
        s063: 'Join our free plan program and deploy comprehensive ct brain AI at your institution.',
        s064: 'Sign Up Free',
        s065: 'Download Prospectus',
        s066: 'Comprehensive AI medical imaging — 50+ pathologies live across 5 modalities, on a roadmap to 400+ across 17.',
        s067: 'Platform',
        s068: 'All Modalities',
        s069: 'Technology',
        s070: 'Clinical Evidence',
        s071: 'Modalities',
        s072: 'Chest X-Ray',
        s073: 'CT Brain',
        s074: 'Mammography',
        s075: 'Company',
        s076: 'About Us',
        s077: 'Contact',
        s078: 'Get Started',
        s079: '© 2024 ScanGuru. All rights reserved. | HIPAA Compliant | GDPR Compliant | ISO 27001',
        s080: 'Clinician-reviewed decision support.',
        s081: 'Market-specific regulatory registration in progress — currently offered for Research Use Only.',
        s082: 'Not intended for: autonomous diagnosis · replacing clinical judgment · emergency triage · direct-to-patient use without a clinician · unqualified users · modalities outside the validated list.',
        subtitle: 'Rapid detection of intracranial hemorrhage, stroke, and traumatic brain injury with automated measurements and critical alerting.',
        stat1_value: '25+',
        stat1_label: 'Pathologies',
        stat2_value: '96%',
        stat2_label: 'Sensitivity',
        stat3_value: '<45s',
        stat3_label: 'Analysis Time',
        // Challenge section
        challenge_title: 'The Challenge',
        challenge_text: 'Time-critical neurological emergencies require rapid and accurate interpretation. Every minute of delay in stroke or hemorrhage detection impacts patient outcomes.',
        // Features
        features_title: 'Capabilities',
        f1_title: 'Hemorrhage Detection',
        f1_desc: 'Identification and classification of epidural, subdural, subarachnoid, intraparenchymal, and intraventricular hemorrhage.',
        f2_title: 'Stroke Analysis',
        f2_desc: 'Early ischemic changes, ASPECTS scoring, and large vessel occlusion detection.',
        f3_title: 'Midline Shift',
        f3_desc: 'Automated measurement of midline deviation with millimeter precision.',
        f4_title: 'Trauma Assessment',
        f4_desc: 'Fracture detection, contusion identification, and herniation risk.',
        // Pathology categories
        path_title: 'Detected Pathologies',
        path_hemorrhage: 'Hemorrhage',
        path_ischemia: 'Ischemia',
        path_trauma: 'Trauma',
        path_mass: 'Mass Effect',
        // CTA
        cta_title: 'Ready to Accelerate Neuroimaging Workflow?',
        cta_subtitle: 'Detect critical brain findings in under 45 seconds.'
    },
    
    // ═══════════════════════════════════════════════════════════════════════════════
    // MAMMOGRAPHY PAGE
    // ═══════════════════════════════════════════════════════════════════════════════
    mammo: {
        badge: 'Mammography AI',
        title: 'Advanced Mammography Analysis',
        s001: 'Platform',
        s002: 'Modalities',
        s003: 'Clinical Evidence',
        s004: 'About',
        s005: 'EN',
        s006: 'Try It Free',
        s007: 'Sign Up Free',
        s008: 'Mammography AI',
        s009: 'AI-powered breast imaging analysis with BI-RADS classification and comprehensive density assessment. Mass characterization, calcification analysis, and asymmetry detection.',
        s010: 'Pathologies',
        s011: 'Sensitivity',
        s012: 'Analysis Time',
        s013: 'Sign Up Free',
        s014: 'View Demo',
        s015: 'Comprehensive Coverage',
        s016: '15+ Pathologies Detected',
        s017: 'Comprehensive mammography analysis powered by our ensemble AI architecture',
        s018: 'Masses',
        s019: '6 Pathologies',
        s020: 'Round',
        s021: 'Oval',
        s022: 'Irregular',
        s023: 'Circumscribed',
        s024: 'Spiculated',
        s025: 'Obscured',
        s026: 'Calcifications',
        s027: '6 Pathologies',
        s028: 'Benign',
        s029: 'Fine Pleomorphic',
        s030: 'Fine Linear',
        s031: 'Grouped',
        s032: 'Segmental',
        s033: 'Asymmetries',
        s034: '3 Pathologies',
        s035: 'Focal',
        s036: 'Global',
        s037: 'Developing',
        s038: 'Architecture',
        s039: '4 Pathologies',
        s040: 'Distortion',
        s041: 'Skin Thickening',
        s042: 'Nipple Retraction',
        s043: 'Axillary Nodes',
        s044: 'Integrated Clinical Scoring Systems',
        s045: 'BI-RADS Categories (0-6)',
        s046: 'Breast Density (A-D)',
        s047: 'Lesion Probability',
        s048: 'Free Plan Available',
        s049: 'Ready to Transform Your Mammography Workflow?',
        s050: 'Join our free plan program and deploy comprehensive mammography AI at your institution.',
        s051: 'Sign Up Free',
        s052: 'Download Prospectus',
        s053: 'Comprehensive AI medical imaging — 50+ pathologies live across 5 modalities, on a roadmap to 400+ across 17.',
        s054: 'Platform',
        s055: 'All Modalities',
        s056: 'Technology',
        s057: 'Clinical Evidence',
        s058: 'Modalities',
        s059: 'Chest X-Ray',
        s060: 'CT Brain',
        s061: 'Mammography',
        s062: 'Company',
        s063: 'About Us',
        s064: 'Contact',
        s065: 'Get Started',
        s066: '© 2024 ScanGuru. All rights reserved. | HIPAA Compliant | GDPR Compliant | ISO 27001',
        s067: 'Clinician-reviewed decision support.',
        s068: 'Market-specific regulatory registration in progress — currently offered for Research Use Only.',
        s069: 'Not intended for: autonomous diagnosis · replacing clinical judgment · emergency triage · direct-to-patient use without a clinician · unqualified users · modalities outside the validated list.',
        subtitle: 'AI-assisted breast cancer screening with BI-RADS classification, density assessment, and lesion characterization.',
        stat1_value: '15+',
        stat1_label: 'Pathologies',
        stat2_value: '92%',
        stat2_label: 'Sensitivity',
        stat3_value: '<45s',
        stat3_label: 'Analysis Time',
        // Features
        f1_title: 'BI-RADS Classification',
        f1_desc: 'Automated BI-RADS 0-6 categorization with supporting findings.',
        f2_title: 'Density Assessment',
        f2_desc: 'ACR density classification (A-D) for risk stratification.',
        f3_title: 'Lesion Detection',
        f3_desc: 'Masses, calcifications, architectural distortion, and asymmetries.',
        f4_title: 'Comparison Tools',
        f4_desc: 'Prior study comparison and interval change detection.',
        cta_title: 'Enhance Your Breast Imaging Program',
        cta_subtitle: 'Improve cancer detection rates with AI-assisted screening.'
    },
    
    // ═══════════════════════════════════════════════════════════════════════════════
    // MRI PAGE
    // ═══════════════════════════════════════════════════════════════════════════════
    mri: {
        badge: 'MRI Suite AI',
        title: 'Comprehensive MRI Analysis Across 6 Body Regions',
        s001: 'Platform',
        s002: 'Modalities',
        s003: 'Clinical Evidence',
        s004: 'About',
        s005: 'EN',
        s006: 'Try It Free',
        s007: 'Sign Up Free',
        s008: 'MRI AI Platform',
        s009: 'AI-powered detection of 100+ pathologies across spine, brain, knee, shoulder, hip, and abdomen. Advanced clinical grading systems with radiologist-quality precision.',
        s010: 'Total Pathologies',
        s011: 'Body Regions',
        s012: 'Sensitivity',
        s013: 'Sign Up Free',
        s014: 'View Demo',
        s015: '6 Body Regions',
        s016: 'Complete MRI Coverage',
        s017: 'Our ensemble AI architecture provides comprehensive analysis across all major MRI applications',
        s018: 'MRI Spine',
        s019: '25+ Pathologies',
        s020: '• Disc herniation & degeneration',
        s021: '• Spinal stenosis',
        s022: '• Nerve compression',
        s023: '• Vertebral fractures',
        s024: 'MRI Brain',
        s025: '20+ Pathologies',
        s026: '• White matter lesions',
        s027: '• Tumors & masses',
        s028: '• Stroke & ischemia',
        s029: '• Atrophy patterns',
        s030: 'MRI Knee',
        s031: '15+ Pathologies',
        s032: '• ACL/PCL/MCL tears',
        s033: '• Meniscal tears',
        s034: '• Cartilage defects',
        s035: '• Bone marrow edema',
        s036: 'MRI Shoulder',
        s037: '12+ Pathologies',
        s038: '• Rotator cuff tears',
        s039: '• Labral tears (SLAP)',
        s040: '• Impingement',
        s041: '• Biceps tendinopathy',
        s042: 'MRI Hip',
        s043: '10+ Pathologies',
        s044: '• Labral tears',
        s045: '• AVN (osteonecrosis)',
        s046: '• FAI morphology',
        s047: '• Stress fractures',
        s048: 'MRI Abdomen',
        s049: '15+ Pathologies',
        s050: '• Liver lesions (LI-RADS)',
        s051: '• Pancreatic masses',
        s052: '• Renal lesions',
        s053: '• Adrenal findings',
        s054: 'Detailed Analysis',
        s055: 'Explore Each Region',
        s056: 'Click on a region to see detailed pathology coverage and clinical scoring systems',
        s057: '🦴 Spine',
        s058: '🧠 Brain',
        s059: '🦵 Knee',
        s060: '💪 Shoulder',
        s061: '🦴 Hip',
        s062: '🫁 Abdomen',
        s063: 'MRI Spine Analysis',
        s064: 'Comprehensive cervical, thoracic, lumbar, and sacral spine assessment with automated Pfirrmann grading and stenosis classification.',
        s065: 'Pathologies',
        s066: 'Sensitivity',
        s067: 'Analysis',
        s068: 'Disc',
        s069: 'Disc Herniation',
        s070: 'Disc',
        s071: 'Disc Bulge',
        s072: 'Disc',
        s073: 'Disc Protrusion',
        s074: 'Disc',
        s075: 'Disc Extrusion',
        s076: 'Disc',
        s077: 'Sequestration',
        s078: 'Disc',
        s079: 'Degeneration',
        s080: 'Stenosis',
        s081: 'Central Stenosis',
        s082: 'Stenosis',
        s083: 'Foraminal Stenosis',
        s084: 'Stenosis',
        s085: 'Lateral Recess',
        s086: 'Vertebral',
        s087: 'Compression Fx',
        s088: 'Vertebral',
        s089: 'Spondylolisthesis',
        s090: 'Vertebral',
        s091: 'Modic Changes',
        s092: 'MRI Brain Analysis',
        s093: 'Advanced neuroimaging analysis for white matter disease, tumors, stroke, and neurodegenerative patterns with Fazekas scoring.',
        s094: 'Pathologies',
        s095: 'Sensitivity',
        s096: 'Analysis',
        s097: 'White Matter',
        s098: 'WM Hyperintensities',
        s099: 'White Matter',
        s100: 'MS Plaques',
        s101: 'White Matter',
        s102: 'Leukoaraiosis',
        s103: 'Mass',
        s104: 'Brain Tumor',
        s105: 'Mass',
        s106: 'Metastasis',
        s107: 'Mass',
        s108: 'Meningioma',
        s109: 'Vascular',
        s110: 'Acute Infarct',
        s111: 'Vascular',
        s112: 'Chronic Infarct',
        s113: 'Vascular',
        s114: 'Microbleeds',
        s115: 'Atrophy',
        s116: 'Global Atrophy',
        s117: 'Atrophy',
        s118: 'Hippocampal',
        s119: 'Other',
        s120: 'Hydrocephalus',
        s121: 'MRI Knee Analysis',
        s122: 'Complete knee joint assessment including ligaments, menisci, cartilage, and bone with automated tear grading.',
        s123: 'Pathologies',
        s124: 'Sensitivity',
        s125: 'Analysis',
        s126: 'Ligament',
        s127: 'ACL Tear',
        s128: 'Ligament',
        s129: 'PCL Tear',
        s130: 'Ligament',
        s131: 'MCL Tear',
        s132: 'Ligament',
        s133: 'LCL Tear',
        s134: 'Meniscus',
        s135: 'Medial Meniscus Tear',
        s136: 'Meniscus',
        s137: 'Lateral Meniscus Tear',
        s138: 'Meniscus',
        s139: 'Meniscal Extrusion',
        s140: 'Cartilage',
        s141: 'Cartilage Defect',
        s142: 'Cartilage',
        s143: 'Chondromalacia',
        s144: 'Bone',
        s145: 'Bone Marrow Edema',
        s146: 'Bone',
        s147: 'Osteochondral Lesion',
        s148: 'Other',
        s149: 'Baker\'s Cyst',
        s150: 'MRI Shoulder Analysis',
        s151: 'Comprehensive rotator cuff, labral, and glenohumeral assessment with tear classification and measurements.',
        s152: 'Pathologies',
        s153: 'Sensitivity',
        s154: 'Analysis',
        s155: 'Rotator Cuff',
        s156: 'Supraspinatus Tear',
        s157: 'Rotator Cuff',
        s158: 'Infraspinatus Tear',
        s159: 'Rotator Cuff',
        s160: 'Subscapularis Tear',
        s161: 'Rotator Cuff',
        s162: 'Tendinopathy',
        s163: 'Labrum',
        s164: 'SLAP Tear',
        s165: 'Labrum',
        s166: 'Bankart Lesion',
        s167: 'Labrum',
        s168: 'Hill-Sachs Lesion',
        s169: 'Biceps',
        s170: 'Biceps Tendinopathy',
        s171: 'Biceps',
        s172: 'Biceps Subluxation',
        s173: 'Other',
        s174: 'Impingement',
        s175: 'Other',
        s176: 'AC Joint OA',
        s177: 'Other',
        s178: 'Bursitis',
        s179: 'MRI Hip Analysis',
        s180: 'Hip joint evaluation including labral pathology, FAI morphology, AVN detection, and cartilage assessment.',
        s181: 'Pathologies',
        s182: 'Sensitivity',
        s183: 'Analysis',
        s184: 'Labrum',
        s185: 'Labral Tear',
        s186: 'Labrum',
        s187: 'Paralabral Cyst',
        s188: 'FAI',
        s189: 'Cam Morphology',
        s190: 'FAI',
        s191: 'Pincer Morphology',
        s192: 'Bone',
        s193: 'AVN (Osteonecrosis)',
        s194: 'Bone',
        s195: 'Stress Fracture',
        s196: 'Bone',
        s197: 'Bone Marrow Edema',
        s198: 'Cartilage',
        s199: 'Cartilage Loss',
        s200: 'Muscle',
        s201: 'Gluteal Tendinopathy',
        s202: 'Other',
        s203: 'Hip Effusion',
        s204: 'MRI Abdomen Analysis',
        s205: 'Comprehensive abdominal MRI with liver LI-RADS integration, pancreatic assessment, and multi-organ evaluation.',
        s206: 'Pathologies',
        s207: 'Sensitivity',
        s208: 'Analysis',
        s209: 'Liver',
        s210: 'Liver Lesion',
        s211: 'Liver',
        s212: 'HCC (LI-RADS)',
        s213: 'Liver',
        s214: 'Hemangioma',
        s215: 'Liver',
        s216: 'FNH',
        s217: 'Liver',
        s218: 'Steatosis',
        s219: 'Pancreas',
        s220: 'Pancreatic Mass',
        s221: 'Pancreas',
        s222: 'IPMN',
        s223: 'Pancreas',
        s224: 'Pancreatitis',
        s225: 'Kidney',
        s226: 'Renal Mass',
        s227: 'Kidney',
        s228: 'Renal Cyst',
        s229: 'Adrenal',
        s230: 'Adrenal Adenoma',
        s231: 'Other',
        s232: 'Lymphadenopathy',
        s233: 'Clinical Integration',
        s234: 'Integrated Scoring Systems',
        s235: 'Automated clinical grading aligned with radiological standards',
        s236: 'Pfirrmann Grading',
        s237: 'Disc degeneration classification (Grade I-V) for spine MRI',
        s238: 'Modic Classification',
        s239: 'Vertebral endplate changes (Type I-III) assessment',
        s240: 'Schizas Grading',
        s241: 'Spinal canal stenosis severity classification',
        s242: 'Fazekas Scale',
        s243: 'White matter hyperintensity burden scoring for brain MRI',
        s244: 'LI-RADS',
        s245: 'Liver Imaging Reporting and Data System for HCC',
        s246: 'MOAKS',
        s247: 'MRI Osteoarthritis Knee Score for joint assessment',
        s248: 'Free Plan Available',
        s249: 'Ready to Transform Your MRI Workflow?',
        s250: 'Join our free plan program and deploy comprehensive MRI AI across all body regions at your institution.',
        s251: 'Sign Up Free',
        s252: 'Download Prospectus',
        s253: 'Comprehensive AI medical imaging — 50+ pathologies live across 5 modalities, on a roadmap to 400+ across 17.',
        s254: 'Platform',
        s255: 'All Modalities',
        s256: 'Technology',
        s257: 'Clinical Evidence',
        s258: 'Modalities',
        s259: 'Chest X-Ray',
        s260: 'CT Brain',
        s261: 'MRI',
        s262: 'Mammography',
        s263: 'Company',
        s264: 'About Us',
        s265: 'Contact',
        s266: 'Get Started',
        s267: '© 2024 ScanGuru. All rights reserved. | HIPAA Compliant | GDPR Compliant | ISO 27001',
        s268: 'Clinician-reviewed decision support.',
        s269: 'Market-specific regulatory registration in progress — currently offered for Research Use Only.',
        s270: 'Not intended for: autonomous diagnosis · replacing clinical judgment · emergency triage · direct-to-patient use without a clinician · unqualified users · modalities outside the validated list.',
        subtitle: 'Multi-sequence AI analysis for brain, spine, and musculoskeletal MRI with automated measurements and structured reporting.',
        stat1_value: '40+',
        stat1_label: 'Pathologies',
        stat2_value: '91%',
        stat2_label: 'Sensitivity',
        stat3_value: '<90s',
        stat3_label: 'Analysis Time',
        // Features
        f1_title: 'Brain MRI',
        f1_desc: 'Tumor detection, MS lesion quantification, and volumetric analysis.',
        f2_title: 'Spine MRI',
        f2_desc: 'Disc herniation, spinal stenosis, and cord compression.',
        f3_title: 'MSK MRI',
        f3_desc: 'Ligament tears, meniscal injuries, and cartilage assessment.',
        f4_title: 'Multi-Sequence',
        f4_desc: 'Analysis across T1, T2, FLAIR, DWI, and contrast sequences.',
        cta_title: 'Transform Your MRI Workflow',
        cta_subtitle: 'Comprehensive MRI analysis across all body regions.'
    },
    
    // ═══════════════════════════════════════════════════════════════════════════════
    // MSK X-RAY PAGE
    // ═══════════════════════════════════════════════════════════════════════════════
    msk: {
        badge: 'MSK X-Ray AI',
        title: 'Advanced Musculoskeletal Analysis',
        s001: 'Platform',
        s002: 'Modalities',
        s003: 'Clinical Evidence',
        s004: 'About',
        s005: 'EN',
        s006: 'Try It Free',
        s007: 'Sign Up Free',
        s008: 'MSK AI',
        s009: 'AI-powered detection of 40+ musculoskeletal pathologies across all major joints and bone structures. Fracture detection, arthritis assessment, and soft tissue analysis.',
        s010: 'Pathologies',
        s011: 'Sensitivity',
        s012: 'Analysis Time',
        s013: 'Sign Up Free',
        s014: 'View Demo',
        s015: 'Comprehensive Coverage',
        s016: '40+ Pathologies Detected',
        s017: 'Comprehensive musculoskeletal analysis powered by our ensemble AI architecture',
        s018: 'Fractures',
        s019: '6 Pathologies',
        s020: 'Long Bone',
        s021: 'Vertebral',
        s022: 'Pelvic',
        s023: 'Stress',
        s024: 'Pathologic',
        s025: 'Avulsion',
        s026: 'Arthritis',
        s027: '5 Pathologies',
        s028: 'Osteoarthritis',
        s029: 'Rheumatoid',
        s030: 'Psoriatic',
        s031: 'Gout',
        s032: 'CPPD',
        s033: 'Bone Lesions',
        s034: '5 Pathologies',
        s035: 'Benign Tumor',
        s036: 'Malignant',
        s037: 'Metastases',
        s038: 'Cyst',
        s039: 'Osteomyelitis',
        s040: 'Joint',
        s041: '5 Pathologies',
        s042: 'Effusion',
        s043: 'Loose Bodies',
        s044: 'Subluxation',
        s045: 'Dislocation',
        s046: 'Ligament',
        s047: 'Soft Tissue',
        s048: '5 Pathologies',
        s049: 'Tendon Tear',
        s050: 'Tendinopathy',
        s051: 'Muscle Strain',
        s052: 'Mass',
        s053: 'Bursitis',
        s054: 'Integrated Clinical Scoring Systems',
        s055: 'Kellgren-Lawrence (OA)',
        s056: 'Fracture Classification',
        s057: 'OMERACT-EULAR',
        s058: 'Free Plan Available',
        s059: 'Ready to Transform Your Musculoskeletal Workflow?',
        s060: 'Join our free plan program and deploy comprehensive musculoskeletal AI at your institution.',
        s061: 'Sign Up Free',
        s062: 'Download Prospectus',
        s063: 'Comprehensive AI medical imaging — 50+ pathologies live across 5 modalities, on a roadmap to 400+ across 17.',
        s064: 'Platform',
        s065: 'All Modalities',
        s066: 'Technology',
        s067: 'Clinical Evidence',
        s068: 'Modalities',
        s069: 'Chest X-Ray',
        s070: 'CT Brain',
        s071: 'Mammography',
        s072: 'Company',
        s073: 'About Us',
        s074: 'Contact',
        s075: 'Get Started',
        s076: '© 2024 ScanGuru. All rights reserved. | HIPAA Compliant | GDPR Compliant | ISO 27001',
        s077: 'Clinician-reviewed decision support.',
        s078: 'Market-specific regulatory registration in progress — currently offered for Research Use Only.',
        s079: 'Not intended for: autonomous diagnosis · replacing clinical judgment · emergency triage · direct-to-patient use without a clinician · unqualified users · modalities outside the validated list.',
        subtitle: 'AI-powered fracture detection and bone abnormality analysis across all skeletal regions with measurement tools.',
        stat1_value: '35+',
        stat1_label: 'Pathologies',
        stat2_value: '93%',
        stat2_label: 'Sensitivity',
        stat3_value: '<30s',
        stat3_label: 'Analysis Time',
        // Features
        f1_title: 'Fracture Detection',
        f1_desc: 'Identification of subtle and occult fractures across all bones.',
        f2_title: 'Joint Analysis',
        f2_desc: 'Arthritis grading, joint space assessment, and alignment.',
        f3_title: 'Bone Lesions',
        f3_desc: 'Detection of lytic lesions, sclerotic changes, and tumors.',
        f4_title: 'Measurements',
        f4_desc: 'Automated angle and distance measurements for surgical planning.',
        cta_title: 'Reduce Missed Fractures',
        cta_subtitle: 'Catch subtle fractures that might be overlooked.'
    },
    
    // ═══════════════════════════════════════════════════════════════════════════════
    // DENTAL PAGE
    // ═══════════════════════════════════════════════════════════════════════════════
    dental: {
        badge: 'Dental AI',
        title: 'Advanced Dental Imaging Analysis',
        s001: 'Platform',
        s002: 'Modalities',
        s003: 'Clinical Evidence',
        s004: 'About',
        s005: 'EN',
        s006: 'Try It Free',
        s007: 'Sign Up Free',
        s008: 'Dental AI',
        s009: 'AI-powered detection of 20+ dental pathologies with comprehensive tooth and bone assessment. Caries detection, periodontal analysis, and endodontic evaluation.',
        s010: 'Pathologies',
        s011: 'Sensitivity',
        s012: 'Analysis Time',
        s013: 'Sign Up Free',
        s014: 'View Demo',
        s015: 'Comprehensive Coverage',
        s016: '20+ Pathologies Detected',
        s017: 'Comprehensive dental analysis powered by our ensemble AI architecture',
        s018: 'Caries',
        s019: '5 Pathologies',
        s020: 'Initial',
        s021: 'Moderate',
        s022: 'Advanced',
        s023: 'Secondary',
        s024: 'Root',
        s025: 'Periodontal',
        s026: '4 Pathologies',
        s027: 'Horizontal Bone Loss',
        s028: 'Vertical',
        s029: 'Furcation',
        s030: 'Abscess',
        s031: 'Periapical',
        s032: '4 Pathologies',
        s033: 'Lesion',
        s034: 'Abscess',
        s035: 'Granuloma',
        s036: 'Cyst',
        s037: 'Endodontic',
        s038: '5 Pathologies',
        s039: 'Root Canal Status',
        s040: 'Filling Quality',
        s041: 'Missed Canal',
        s042: 'Overfill',
        s043: 'Restorative',
        s044: '4 Pathologies',
        s045: 'Assessment',
        s046: 'Overhang',
        s047: 'Open Margin',
        s048: 'Secondary Caries',
        s049: 'Integrated Clinical Scoring Systems',
        s050: 'Caries Severity Index',
        s051: 'Periodontal Staging',
        s052: 'Endodontic Prognosis',
        s053: 'Free Plan Available',
        s054: 'Ready to Transform Your Dental Workflow?',
        s055: 'Join our free plan program and deploy comprehensive dental AI at your institution.',
        s056: 'Sign Up Free',
        s057: 'Download Prospectus',
        s058: 'Comprehensive AI medical imaging — 50+ pathologies live across 5 modalities, on a roadmap to 400+ across 17.',
        s059: 'Platform',
        s060: 'All Modalities',
        s061: 'Technology',
        s062: 'Clinical Evidence',
        s063: 'Modalities',
        s064: 'Chest X-Ray',
        s065: 'CT Brain',
        s066: 'Mammography',
        s067: 'Company',
        s068: 'About Us',
        s069: 'Contact',
        s070: 'Get Started',
        s071: '© 2024 ScanGuru. All rights reserved. | HIPAA Compliant | GDPR Compliant | ISO 27001',
        s072: 'Clinician-reviewed decision support.',
        s073: 'Market-specific regulatory registration in progress — currently offered for Research Use Only.',
        s074: 'Not intended for: autonomous diagnosis · replacing clinical judgment · emergency triage · direct-to-patient use without a clinician · unqualified users · modalities outside the validated list.',
        subtitle: 'AI analysis of panoramic, periapical, and CBCT dental imaging for caries, periodontal disease, and pathology detection.',
        stat1_value: '20+',
        stat1_label: 'Pathologies',
        stat2_value: '91%',
        stat2_label: 'Sensitivity',
        stat3_value: '<20s',
        stat3_label: 'Analysis Time',
        // Features
        f1_title: 'Caries Detection',
        f1_desc: 'Early detection of interproximal and occlusal caries.',
        f2_title: 'Periodontal Analysis',
        f2_desc: 'Bone loss quantification and periodontal staging.',
        f3_title: 'Tooth Numbering',
        f3_desc: 'Automatic tooth identification and FDI notation.',
        f4_title: 'Pathology Detection',
        f4_desc: 'Periapical lesions, cysts, and impacted teeth.',
        cta_title: 'Elevate Your Dental Practice',
        cta_subtitle: 'AI-assisted dental imaging for better patient outcomes.'
    },
    
    // ═══════════════════════════════════════════════════════════════════════════════
    // ULTRASOUND PAGE
    // ═══════════════════════════════════════════════════════════════════════════════
    ultrasound: {
        badge: 'Ultrasound AI',
        title: 'Comprehensive Ultrasound Analysis',
        s001: 'Platform',
        s002: 'Modalities',
        s003: 'Clinical Evidence',
        s004: 'About',
        s005: 'EN',
        s006: 'Try It Free',
        s007: 'Sign Up Free',
        s008: 'Ultrasound AI',
        s009: 'AI-powered ultrasound analysis covering 35+ pathologies across OB/GYN, abdominal, thyroid, vascular, and cardiac applications.',
        s010: 'Pathologies',
        s011: 'Sensitivity',
        s012: 'Analysis Time',
        s013: 'Sign Up Free',
        s014: 'View Demo',
        s015: 'Comprehensive Coverage',
        s016: '35+ Pathologies Detected',
        s017: 'Comprehensive ultrasound analysis powered by our ensemble AI architecture',
        s018: 'OB/GYN',
        s019: '7 Pathologies',
        s020: 'Fetal Biometry',
        s021: 'Growth',
        s022: 'Anomalies',
        s023: 'Placenta',
        s024: 'AFI',
        s025: 'Ovarian',
        s026: 'Fibroid',
        s027: 'Abdominal',
        s028: '7 Pathologies',
        s029: 'Liver Lesion',
        s030: 'Gallstones',
        s031: 'Cholecystitis',
        s032: 'Kidney Stones',
        s033: 'Hydronephrosis',
        s034: 'Thyroid',
        s035: '4 Pathologies',
        s036: 'Nodule',
        s037: 'TI-RADS',
        s038: 'Suspicious Features',
        s039: 'Lymphadenopathy',
        s040: 'Vascular',
        s041: '4 Pathologies',
        s042: 'DVT',
        s043: 'Carotid Stenosis',
        s044: 'AAA Screening',
        s045: 'PVD',
        s046: 'Cardiac',
        s047: '4 Pathologies',
        s048: 'LV Function',
        s049: 'Valve Assessment',
        s050: 'Pericardial Effusion',
        s051: 'Wall Motion',
        s052: 'Integrated Clinical Scoring Systems',
        s053: 'TI-RADS (Thyroid)',
        s054: 'O-RADS (Ovarian)',
        s055: 'Fetal Growth Percentiles',
        s056: 'Free Plan Available',
        s057: 'Ready to Transform Your Ultrasound Workflow?',
        s058: 'Join our free plan program and deploy comprehensive ultrasound AI at your institution.',
        s059: 'Sign Up Free',
        s060: 'Download Prospectus',
        s061: 'Comprehensive AI medical imaging — 50+ pathologies live across 5 modalities, on a roadmap to 400+ across 17.',
        s062: 'Platform',
        s063: 'All Modalities',
        s064: 'Technology',
        s065: 'Clinical Evidence',
        s066: 'Modalities',
        s067: 'Chest X-Ray',
        s068: 'CT Brain',
        s069: 'Mammography',
        s070: 'Company',
        s071: 'About Us',
        s072: 'Contact',
        s073: 'Get Started',
        s074: '© 2024 ScanGuru. All rights reserved. | HIPAA Compliant | GDPR Compliant | ISO 27001',
        s075: 'Clinician-reviewed decision support.',
        s076: 'Market-specific regulatory registration in progress — currently offered for Research Use Only.',
        s077: 'Not intended for: autonomous diagnosis · replacing clinical judgment · emergency triage · direct-to-patient use without a clinician · unqualified users · modalities outside the validated list.',
        subtitle: 'AI-powered analysis for abdominal, obstetric, and vascular ultrasound with automated measurements.',
        stat1_value: '25+',
        stat1_label: 'Pathologies',
        stat2_value: '89%',
        stat2_label: 'Sensitivity',
        stat3_value: '<45s',
        stat3_label: 'Analysis Time',
        // Features
        f1_title: 'Abdominal',
        f1_desc: 'Liver, gallbladder, kidney, and spleen analysis.',
        f2_title: 'Obstetric',
        f2_desc: 'Fetal biometry, anatomy screening, and growth assessment.',
        f3_title: 'Vascular',
        f3_desc: 'Carotid stenosis, DVT detection, and AAA screening.',
        f4_title: 'Measurements',
        f4_desc: 'Automated organ measurements and volume calculations.',
        cta_title: 'Enhance Your Ultrasound Practice',
        cta_subtitle: 'AI assistance for faster, more accurate sonography.'
    },
    
    // ═══════════════════════════════════════════════════════════════════════════════
    // PET SCAN PAGE
    // ═══════════════════════════════════════════════════════════════════════════════
    pet: {
        badge: 'PET Scan AI',
        title: 'Advanced PET/CT Analysis',
        s001: 'Platform',
        s002: 'Modalities',
        s003: 'Clinical Evidence',
        s004: 'About',
        s005: 'EN',
        s006: 'Try It Free',
        s007: 'Sign Up Free',
        s008: 'PET AI',
        s009: 'AI-powered metabolic imaging analysis for oncology staging, treatment response assessment, and disease monitoring. Deauville and PERCIST scoring integration.',
        s010: 'Pathologies',
        s011: 'Sensitivity',
        s012: 'Analysis Time',
        s013: 'Sign Up Free',
        s014: 'View Demo',
        s015: 'Comprehensive Coverage',
        s016: '25+ Pathologies Detected',
        s017: 'Comprehensive pet/ct analysis powered by our ensemble AI architecture',
        s018: 'Staging',
        s019: '4 Pathologies',
        s020: 'Primary Tumor',
        s021: 'Nodal',
        s022: 'Distant Mets',
        s023: 'TNM Support',
        s024: 'Response',
        s025: '5 Pathologies',
        s026: 'Complete',
        s027: 'Partial',
        s028: 'Stable',
        s029: 'Progressive',
        s030: 'PERCIST',
        s031: 'Lymphoma',
        s032: '4 Pathologies',
        s033: 'Deauville',
        s034: 'Interim',
        s035: 'End-of-Treatment',
        s036: 'Relapse',
        s037: 'Lung Cancer',
        s038: '4 Pathologies',
        s039: 'Nodule Characterization',
        s040: 'Mediastinal Staging',
        s041: 'Mets',
        s042: 'Recurrence',
        s043: 'Neuro',
        s044: '3 Pathologies',
        s045: 'Dementia Patterns',
        s046: 'Epilepsy Focus',
        s047: 'Brain Tumor',
        s048: 'Integrated Clinical Scoring Systems',
        s049: 'Deauville 5-Point Scale',
        s050: 'PERCIST Criteria',
        s051: 'SUV Quantification',
        s052: 'Free Plan Available',
        s053: 'Ready to Transform Your PET/CT Workflow?',
        s054: 'Join our free plan program and deploy comprehensive pet/ct AI at your institution.',
        s055: 'Sign Up Free',
        s056: 'Download Prospectus',
        s057: 'Comprehensive AI medical imaging — 50+ pathologies live across 5 modalities, on a roadmap to 400+ across 17.',
        s058: 'Platform',
        s059: 'All Modalities',
        s060: 'Technology',
        s061: 'Clinical Evidence',
        s062: 'Modalities',
        s063: 'Chest X-Ray',
        s064: 'CT Brain',
        s065: 'Mammography',
        s066: 'Company',
        s067: 'About Us',
        s068: 'Contact',
        s069: 'Get Started',
        s070: '© 2024 ScanGuru. All rights reserved. | HIPAA Compliant | GDPR Compliant | ISO 27001',
        s071: 'Clinician-reviewed decision support.',
        s072: 'Market-specific regulatory registration in progress — currently offered for Research Use Only.',
        s073: 'Not intended for: autonomous diagnosis · replacing clinical judgment · emergency triage · direct-to-patient use without a clinician · unqualified users · modalities outside the validated list.',
        subtitle: 'AI-powered oncology and metabolic imaging analysis with SUV quantification and lesion tracking.',
        stat1_value: '20+',
        stat1_label: 'Indications',
        stat2_value: '90%',
        stat2_label: 'Sensitivity',
        stat3_value: '<120s',
        stat3_label: 'Analysis Time',
        // Features
        f1_title: 'Oncology',
        f1_desc: 'Tumor detection, staging, and treatment response assessment.',
        f2_title: 'SUV Analysis',
        f2_desc: 'Automated SUVmax and SUVmean calculations.',
        f3_title: 'Lesion Tracking',
        f3_desc: 'Longitudinal comparison and RECIST measurements.',
        f4_title: 'Multi-Tracer',
        f4_desc: 'FDG, PSMA, and other tracer analysis support.',
        cta_title: 'Optimize Oncology Imaging',
        cta_subtitle: 'Comprehensive PET/CT analysis for better patient care.'
    },
    
    // ═══════════════════════════════════════════════════════════════════════════════
    // TECHNOLOGY PAGE
    // ═══════════════════════════════════════════════════════════════════════════════
    technology: {
        badge: 'Our Technology',
        title: 'Enterprise-Grade AI Architecture',
        subtitle: 'Built on proven deep learning foundations with multi-model ensemble approach for superior accuracy.',
        // Sections
        arch_title: 'Multi-Model Architecture',
        arch_desc: 'Our ensemble approach combines multiple specialized models for each modality, reducing false positives and improving detection rates.',
        integration_title: 'Seamless Integration',
        integration_desc: 'Connect with your existing PACS, RIS, and EMR systems through standard protocols including DICOM, HL7, and FHIR.',
        security_title: 'Enterprise Security',
        security_desc: 'HIPAA-compliant infrastructure with end-to-end encryption, SOC 2 Type II certification, and on-premise deployment options.',
        validation_title: 'Clinical Validation',
        validation_desc: 'Rigorous validation across diverse patient populations with peer-reviewed publications and regulatory clearances.',
        heuristics_title: 'Clinical Heuristics',
        heuristics_desc: 'AI findings enhanced with clinical rules and scoring systems used by practicing radiologists.',
        explainable_title: 'Explainable AI',
        explainable_desc: 'Grad-CAM heatmaps and confidence scores provide transparency into AI reasoning and findings.'
    },
    
    // ═══════════════════════════════════════════════════════════════════════════════
    // ABOUT PAGE
    // ═══════════════════════════════════════════════════════════════════════════════
    about: {
        badge: 'About Us',
        title: 'Transforming Medical Imaging with AI',
        subtitle: 'We are building the future of diagnostic imaging to help radiologists deliver faster, more accurate diagnoses.',
        // Mission
        mission_title: 'Our Mission',
        mission_text: 'To democratize access to expert-level medical imaging analysis, ensuring every patient receives timely and accurate diagnoses regardless of location.',
        // Values
        values_title: 'Our Values',
        v1_title: 'Patient First',
        v1_desc: 'Every decision we make prioritizes patient safety and outcomes.',
        v2_title: 'Clinical Excellence',
        v2_desc: 'We hold ourselves to the highest standards of accuracy and reliability.',
        v3_title: 'Innovation',
        v3_desc: 'We continuously push the boundaries of what AI can achieve in healthcare.',
        v4_title: 'Collaboration',
        v4_desc: 'We work alongside clinicians, not to replace them.',
        // Team
        team_title: 'Our Team',
        team_desc: 'A diverse team of radiologists, AI researchers, and healthcare technologists.'
    },
    
    // ═══════════════════════════════════════════════════════════════════════════════
    // CONTACT PAGE
    // ═══════════════════════════════════════════════════════════════════════════════
    contact: {
        badge: 'Contact Us',
        title: 'Get in Touch',
        subtitle: 'Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.',
        // Form
        form_title: 'Send us a Message',
        form_name: 'Your Name',
        form_email: 'Email Address',
        form_phone: 'Phone Number',
        form_org: 'Organization',
        form_role: 'Your Role',
        form_message: 'How can we help?',
        form_submit: 'Send Message',
        // Info
        info_title: 'Contact Information',
        info_email: 'Email',
        info_phone: 'Phone',
        info_address: 'Address',
        // Offices
        offices_title: 'Our Offices',
        office_us: 'United States',
        office_eu: 'Europe',
        office_asia: 'Asia Pacific'
    },
    
    // ═══════════════════════════════════════════════════════════════════════════════
    // PILOT/SIGNUP PAGE
    // ═══════════════════════════════════════════════════════════════════════════════
    pilot: {
        badge: 'Free Pilot Program',
        title: 'Start Your Free Pilot',
        subtitle: 'Experience the full power of ScanGuru with a no-obligation pilot program tailored to your institution.',
        // Benefits
        benefits_title: 'What You Get',
        b1: 'Full access to all modalities',
        b2: 'Dedicated implementation support',
        b3: 'PACS/RIS integration assistance',
        b4: 'Training for your team',
        b5: 'Custom workflow configuration',
        b6: 'Performance analytics dashboard',
        // Form
        form_title: 'Apply for Pilot',
        form_submit: 'Submit Application',
        // FAQ
        faq_title: 'Frequently Asked Questions',
        faq1_q: 'How long is the pilot program?',
        faq1_a: 'Our standard pilot is 30 days, but we can customize based on your needs.',
        faq2_q: 'Is there any cost for the pilot?',
        faq2_a: 'No, the pilot program is completely free with no obligation.',
        faq3_q: 'What support is included?',
        faq3_a: 'Full technical support, training, and a dedicated success manager.'
    },
    
    // ═══════════════════════════════════════════════════════════════════════════════
    // DASHBOARD (Portal)
    // ═══════════════════════════════════════════════════════════════════════════════
    dashboard: {
        sidebar: { 
            overview: 'Overview', 
            dashboard: 'Dashboard', 
            analytics: 'Analytics', 
            studies: 'Studies', 
            all_studies: 'All Studies', 
            recent: 'Recent', 
            critical: 'Critical', 
            patients: 'Patients', 
            all_patients: 'All Patients', 
            add_patient: 'Add Patient', 
            system: 'System', 
            settings: 'Settings', 
            integrations: 'Integrations', 
            audit_log: 'Audit Log', 
            help: 'Help & Support', 
            logout: 'Log Out' 
        },
        header: { 
            search_placeholder: 'Search patients, studies...', 
            notifications: 'Notifications', 
            help: 'Help', 
            profile: 'Profile' 
        },
        stats: { 
            critical_findings: 'Critical Findings', 
            need_immediate: 'Need immediate attention', 
            pending_review: 'Pending Review', 
            awaiting_radiologist: 'Awaiting radiologist', 
            analyzed_today: 'Analyzed Today', 
            studies_processed: 'Studies processed', 
            total_studies: 'Total Studies', 
            all_time: 'All time', 
            total_patients: 'Total Patients', 
            active_studies: 'Active Studies', 
            this_week: 'This Week' 
        },
        actions: { 
            upload_study: 'Upload Study', 
            new_analysis: 'New Analysis', 
            view_reports: 'View Reports', 
            export_data: 'Export Data', 
            add_patient: 'Add Patient' 
        },
        table: { 
            patient: 'Patient', 
            modality: 'Modality', 
            status: 'Status', 
            ai_analysis: 'AI Analysis', 
            time: 'Time', 
            findings: 'Findings', 
            confidence: 'Confidence', 
            mrn: 'MRN', 
            dob: 'Date of Birth', 
            sex: 'Sex', 
            studies: 'Studies', 
            last_visit: 'Last Visit', 
            actions: 'Actions' 
        },
        status: { 
            critical: 'Critical', 
            urgent: 'Urgent', 
            routine: 'Routine', 
            normal: 'Normal', 
            pending: 'Pending', 
            awaiting_review: 'Awaiting Review', 
            reviewed: 'Reviewed', 
            completed: 'Completed' 
        },
        time: { 
            just_now: 'Just now', 
            minutes_ago: '{n} min ago', 
            hours_ago: '{n}h ago', 
            days_ago: '{n}d ago', 
            today: 'Today', 
            yesterday: 'Yesterday' 
        },
        empty: { 
            no_studies: 'No studies yet', 
            no_patients: 'No patients found', 
            no_results: 'No results match your search' 
        },
        pagination: { 
            showing: 'Showing', 
            of: 'of', 
            results: 'results', 
            previous: 'Previous', 
            next: 'Next' 
        }
    },
    
    // ═══════════════════════════════════════════════════════════════════════════════
    // LOGIN
    // ═══════════════════════════════════════════════════════════════════════════════
    login: {
        brand: { 
            headline: 'Medical Imaging', 
            headline_highlight: 'Intelligence', 
            subtitle: 'Access your dashboard to monitor integrations, view AI analysis results, and manage your radiology workflow.', 
            feature_monitoring: 'Real-time Monitoring', 
            feature_ai: 'AI Analysis Results', 
            feature_pacs: 'PACS/RIS Integration', 
            feature_audit: 'Audit Logs', 
            stat_hospitals: 'Hospitals Connected', 
            stat_studies: 'Studies Analyzed', 
            stat_uptime: 'Uptime SLA' 
        },
        form: { 
            title: 'Sign in to Portal', 
            subtitle: 'Enter your credentials to access your dashboard', 
            email_label: 'Email Address', 
            password_label: 'Password', 
            remember_me: 'Remember me', 
            forgot_password: 'Forgot password?', 
            sign_in: 'Sign In', 
            or_continue: 'or continue with', 
            google_sso: 'Google SSO', 
            saml_sso: 'SAML SSO', 
            no_account: 'Don\'t have an account?', 
            contact_sales: 'Contact Sales' 
        },
        security: { 
            badge: 'Protected by 256-bit SSL encryption • HIPAA Compliant' 
        },
        errors: { 
            invalid_credentials: 'Invalid email or password.', 
            server_error: 'Server error. Please try again.' 
        }
    },
    
    // ═══════════════════════════════════════════════════════════════════════════════
    // PATIENT
    // ═══════════════════════════════════════════════════════════════════════════════
    patient: {
        title: 'Patients', 
        subtitle: 'Manage patient records and view study history', 
        search_placeholder: 'Search by name, MRN...',
        modal: { 
            add_title: 'Add New Patient', 
            edit_title: 'Edit Patient', 
            first_name: 'First Name', 
            last_name: 'Last Name', 
            mrn: 'MRN', 
            dob: 'Date of Birth', 
            sex: 'Sex', 
            sex_male: 'Male', 
            sex_female: 'Female', 
            email: 'Email', 
            phone: 'Phone', 
            notes: 'Notes', 
            save: 'Save Patient', 
            cancel: 'Cancel' 
        },
        detail: { 
            back: 'Back', 
            overview: 'Overview', 
            studies: 'Studies', 
            timeline: 'Timeline', 
            total_studies: 'Total Studies', 
            critical_findings: 'Critical', 
            last_scan: 'Last Scan', 
            new_study: 'New Study', 
            download_report: 'Download Report' 
        },
        info: { 
            age: 'Age', 
            years: 'years', 
            sex: 'Sex', 
            mrn: 'MRN', 
            dob: 'Date of Birth' 
        },
        study_history: { 
            title: 'Study History', 
            no_studies: 'No studies yet for this patient' 
        },
        findings: { 
            title: 'AI Findings Summary', 
            no_findings: 'No AI findings available' 
        }
    },
    // ── Compliance / regulatory wordings (Launch Playbook §1, §4, §5) ──
    // CANONICAL — do not paraphrase. Keep in sync with scanguru-compliance.js.
    legal: {
        decision_support: 'AI output is decision support only, not a medical diagnosis. To be reviewed and confirmed by a qualified clinician before any clinical decision.',
        ruo: 'Market-specific regulatory registration in progress — currently offered for Research Use Only.',
        concise_claim: 'ScanGuru AI is multilingual medical imaging analysis software that helps qualified clinicians interpret radiology and dental imaging studies across 17 modalities in 82 languages. All AI findings are reviewed and confirmed by a clinician before any clinical decision.',
        not_list: 'Not intended for: autonomous diagnosis · replacing clinical judgment · emergency triage · direct-to-patient use without a clinician · unqualified users · modalities outside the validated list.',
        demo_banner: 'Research & educational demonstration only. Not a medical device. Not for diagnosis. AI output must be reviewed by a qualified clinician.',
        interstitial_title: 'Demonstration — please confirm',
        interstitial_body: 'This is a research & educational demonstration. It is not a medical device and is not for diagnosis. Do not use it for real patient decisions. You confirm that you have the right to use any image you upload, and that all AI output must be reviewed by a qualified clinician.',
        interstitial_agree: 'I understand — continue to demo',
        interstitial_decline: 'Cancel',
        watermark: 'DEMONSTRATION — NOT FOR CLINICAL USE',
        acknowledge: 'Acknowledge',
        in_development: 'In development',
        in_development_note: 'This modality is not yet validated for clinical use and is shown for preview only.',
        heal_for_all: 'Heal for All: free access is capped at 50–100 scans/month per verified clinic, with annual eligibility renewal. We may pause new enrollments to keep the program sustainable.'
    },
    // Try It Yourself page (interactive demo / marketing engine)
    'try': {
        nav: { all_modalities: 'All Modalities', quick_tour: 'Quick Tour', sign_up: 'Sign Up Free' },
        lang: { search_ph: 'Search language...' },
        hero: {
            badge1: 'Interactive Demo — No Account Required',
            badge2: 'Perfect for Grant Reviewers',
            title_pre: 'Try', title_post: 'Instantly',
            feat_pathologies: '50+ Pathologies',
            feat_speed: 'Results in Seconds',
            feat_pdf: 'Instant PDF Report',
            feat_hipaa: 'HIPAA Compliant',
            feat_languages: '45 Languages'
        },
        tabs: {
            cxr: 'Chest X-Ray', ct_brain: 'CT Brain', ct_chest: 'CT Chest',
            mammo: 'Mammography', mri: 'MRI', msk: 'MSK X-Ray',
            dental: 'Dental', ultrasound: 'Ultrasound', pet: 'PET/CT',
            pathologies: 'pathologies'
        },
        cases: { title: 'Sample Cases' },
        upload: {
            title: 'Or Upload Your Own Image',
            patient_name: 'Patient Name', name_ph: 'Anonymous',
            age: 'Age',
            sex: 'Sex', sex_male: 'Male', sex_female: 'Female', sex_other: 'Other',
            location: 'Location', location_ph: 'Demo Site',
            drop_text: 'Drag & drop or click to select',
            drop_hint: 'DICOM, PNG, JPG up to 20MB',
            analyze_btn: 'Analyze Image'
        },
        results: {
            title: 'Analysis Results',
            placeholder_text: 'Select a sample case or upload an image',
            placeholder_hint: 'AI analysis results will appear here'
        },
        processing: {
            title: 'Analyzing Image',
            status_uploading: 'Uploading scan...',
            step1: 'Uploading image', step2: 'Running AI models',
            step3: 'Detecting pathologies', step4: 'Generating PDF report'
        },
        footer: { text: '© 2024 ScanGuru. All rights reserved. | HIPAA Compliant | GDPR Compliant | ISO 27001' }
    },
},

// ═══════════════════════════════════════════════════════════════════════════════════════
// GERMAN - Deutsch
// ═══════════════════════════════════════════════════════════════════════════════════════
de: {
        comparison: { badge: 'Warum ScanGuru', title: 'Umfassende Lösung vs. Einzellösungen', subtitle: 'Sehen Sie, wie eine einheitliche Plattform im Vergleich zur Verwaltung mehrerer spezialisierter Anbieter abschneidet.', note: 'Eine einheitliche Plattform bedeutet einfachere Integration, ein konsistentes Benutzererlebnis, geringere Gesamtbetriebskosten und umfassende Abdeckung, ohne mehrere Anbieterbeziehungen verwalten zu müssen.', },
    brand: { name: 'ScanGuru', tagline: 'KI-gestützte medizinische Bildgebung' },
    nav: { platform: 'Plattform', modalities: 'Modalitäten', technology: 'Technologie', clinical_evidence: 'Klinische Evidenz', about: 'Über Uns', contact: 'Kontakt', try_free: 'Kostenlos Testen', apply_pilot: 'Kostenlos Registrieren', login: 'Anmelden', all_solutions: 'Alle Lösungen', chest_xray: 'Thorax-Röntgen', ct_imaging: 'CT-Bildgebung', mammography: 'Mammographie', mri_suite: 'MRT-Suite', msk_xray: 'MSK-Röntgen', dental: 'Dental', ultrasound: 'Ultraschall', pet_scan: 'PET-Scan' },
    home: { badge: 'Kostenloser Plan Verfügbar', title: 'Die Komplette KI-Plattform für Medizinische Bildgebung', subtitle: 'Multi-modale Fusions-KI analysiert 50+ Pathologien in 5 Modalitäten.', stat_modalities: '5', stat_modalities_label: 'Modalitäten', stat_pathologies: '50+', stat_pathologies_label: 'Pathologien', stat_languages: '83', stat_languages_label: 'Sprachen', stat_accuracy: '85-95%', stat_accuracy_label: 'Genauigkeit', cta_pilot: 'Kostenlos Registrieren', cta_try: 'Kostenlos Testen' },
    trust_bar: { iso: 'ISO 27001', title: 'Vertraut von Führenden Gesundheitseinrichtungen', hipaa: 'HIPAA-konform', gdpr: 'DSGVO-bereit', dicom: 'DICOM-kompatibel', hl7: 'HL7/FHIR-Integration', cloud: 'Cloud & On-Premise' },
    modalities_section: { badge: 'Umfassende Abdeckung', title: 'Eine Plattform, Jede Modalität', subtitle: 'Von Thorax-Röntgen bis zu fortgeschrittener CT-Bildgebung deckt unsere KI das gesamte Spektrum ab.', view_all: 'Alle Modalitäten', cxr_title: 'Thorax-Röntgen', cxr_desc: '50+ Pathologie-Erkennung mit Kardiomegalie-Bewertung', ct_title: 'CT-Bildgebung', ct_desc: 'Hirnblutung, Lungenknoten und Trauma-Erkennung', mammo_title: 'Mammographie', mammo_desc: 'BI-RADS-Klassifikation und Läsionserkennung', mri_title: 'MRT-Suite', mri_desc: 'Gehirn-, Wirbelsäulen- und muskuloskelettale Analyse', msk_title: 'MSK-Röntgen', msk_desc: 'Frakturerkennung und Knochenanomalien', dental_title: 'Dental', dental_desc: 'Panorama- und periapikale Analyse', ultrasound_title: 'Ultraschall', ultrasound_desc: 'Abdominale und geburtshilfliche Bildgebung', pet_title: 'PET-Scan', pet_desc: 'Onkologie und metabolische Bildgebung' },
    features: { badge: 'Warum ScanGuru', title: 'Für Klinische Exzellenz Entwickelt', subtitle: 'Enterprise-KI, die sich nahtlos in Ihren Workflow integriert.', f1_title: 'Multi-Modell-Ensemble', f1_desc: 'Mehrere KI-Modelle arbeiten zusammen für höhere Genauigkeit.', f2_title: 'Echtzeit-Analyse', f2_desc: 'Ergebnisse in unter 60 Sekunden mit automatischer Priorisierung.', f3_title: 'Nahtlose Integration', f3_desc: 'Funktioniert mit Ihrem PACS, RIS und EMR via HL7/FHIR.', f4_title: 'Audit-Trail', f4_desc: 'Vollständige Protokollierung für regulatorische Anforderungen.' },
    cta: { benefit1: 'Frühzeitiger Zugang zu neuen Modalitäten', benefit2: 'Möglichkeiten zur Forschungs-Mitautorenschaft', benefit3: 'Direkter Einfluss auf das Produkt', badge: 'Heute Starten', title: 'Bereit, Ihren Bildgebungs-Workflow zu Transformieren?', subtitle: 'Schließen Sie sich führenden Gesundheitseinrichtungen an.', btn_try: 'Kostenlos Testen', btn_pilot: 'Kostenlos Registrieren', btn_contact: 'Vertrieb Kontaktieren' },
    footer: { privacy: 'Datenschutzrichtlinie', terms: 'Nutzungsbedingungen', cookies: 'Cookie-Richtlinie', description: 'KI-gestützte Bildanalyse-Plattform für Gesundheitseinrichtungen weltweit.', col_platform: 'Plattform', col_modalities: 'Modalitäten', col_company: 'Unternehmen', col_resources: 'Ressourcen', col_legal: 'Rechtliches', copyright: '© 2026 ScanGuru. Alle Rechte vorbehalten.' },
    common: { loading: 'Wird geladen...', save: 'Speichern', cancel: 'Abbrechen', download: 'Herunterladen', upload: 'Hochladen', search: 'Suchen', next: 'Weiter', back: 'Zurück', close: 'Schließen', learn_more: 'Mehr Erfahren', get_started: 'Loslegen', view_details: 'Details Anzeigen', download_pdf: 'PDF Herunterladen', pathologies: 'Pathologien', sensitivity: 'Sensitivität', analysis_time: 'Analysezeit' },
    form: { name: 'Vollständiger Name', email: 'E-Mail-Adresse', age: 'Alter', sex: 'Geschlecht', sex_male: 'Männlich', sex_female: 'Weiblich', submit: 'Absenden', upload: 'Bild Hochladen', select_modality: 'Modalität Auswählen', scan_generate: 'Scannen & PDF Erstellen' },
    results: { critical: 'Kritisch', urgent: 'Dringend', routine: 'Routine', normal: 'Normal', abnormal: 'Abnormal', findings: 'Befunde', confidence: 'Konfidenz' },
    cxr: { badge: 'Thorax-Röntgen KI', title: 'Umfassende Thorax-Röntgen-Analyse', subtitle: 'KI-gestützte Erkennung von 50+ thorakalen Pathologien mit integrierter kardiothorakaler Verhältnismessung.', stat1_value: '50+', stat1_label: 'Pathologien', stat2_value: '94%', stat2_label: 'Sensitivität', stat3_value: '<30s', stat3_label: 'Analysezeit', challenge_title: 'Die Herausforderung', challenge_text: 'Thorax-Röntgen ist die häufigste diagnostische Bildgebungsstudie, aber kritische Befunde riskieren verzögert zu werden.', features_title: 'Funktionen', f1_title: 'Multi-Pathologie-Erkennung', f1_desc: 'Gleichzeitiges Screening auf Pneumonie, Knötchen, Kardiomegalie und 46+ weitere Erkrankungen.', f2_title: 'Kritische Befund-Alerts', f2_desc: 'Automatische Priorisierung von Pneumothorax und anderen dringenden Befunden.', f3_title: 'Kardiothorakales Verhältnis', f3_desc: 'Automatisierte CTR-Messung mit präziser Herzsilhouette-Analyse.', f4_title: 'Qualitätsbewertung', f4_desc: 'Automatische Bildqualitätsbewertung und Positionierungsverifizierung.', cta_title: 'Bereit, Ihren Thorax-Röntgen-Workflow zu Verbessern?', cta_subtitle: 'Sehen Sie, wie ScanGuru Ihrem Team helfen kann, Befunde schneller zu erkennen.' },
    ct_chest: { badge: 'CT Thorax KI', title: 'Umfassende CT-Thorax-Analyse', subtitle: 'KI-gestützte Erkennung von 30+ thorakalen Pathologien mit integriertem Lung-RADS und CO-RADS Scoring.', stat1_value: '30+', stat1_label: 'Pathologien', stat2_value: '94%', stat2_label: 'Sensitivität', stat3_value: '<60s', stat3_label: 'Analysezeit', challenge_title: 'Die Herausforderung', challenge_text: 'CT-Thorax-Bildgebung erzeugt Hunderte von Schichten pro Studie, was eine umfassende Überprüfung zeitaufwendig macht.', features_title: 'Funktionen', f1_title: 'Lungenknoten-Erkennung', f1_desc: 'Automatische Erkennung, Messung und Lung-RADS-Klassifikation von Lungenknoten.', f2_title: 'COVID-19-Analyse', f2_desc: 'CO-RADS-Scoring mit GGO-Quantifizierung und Schweregradbewertung.', f3_title: 'Zufallsbefunde', f3_desc: 'Erkennung von Koronarkalk, Nebennierenknötchen und anderen Zufallsbefunden.', f4_title: '3D-Visualisierung', f4_desc: 'Interaktive MPR-Ansichten mit volumetrischer Knötchenverfolgung.', cta_title: 'Bereit, Ihren CT-Thorax-Workflow zu Verbessern?', cta_subtitle: 'Sehen Sie, wie ScanGuru Lungenknoten und kritische Befunde schneller erkennen kann.' },
    ct_brain: { badge: 'CT Gehirn KI', title: 'Umfassende CT-Gehirn-Analyse', subtitle: 'Schnelle Erkennung von intrakraniellen Blutungen, Schlaganfall und Schädel-Hirn-Trauma.', stat1_value: '25+', stat1_label: 'Pathologien', stat2_value: '96%', stat2_label: 'Sensitivität', stat3_value: '<45s', stat3_label: 'Analysezeit', challenge_title: 'Die Herausforderung', challenge_text: 'Zeitkritische neurologische Notfälle erfordern schnelle und genaue Interpretation.', features_title: 'Funktionen', f1_title: 'Blutungserkennung', f1_desc: 'Identifizierung und Klassifizierung von epiduraler, subduraler und anderen Blutungen.', f2_title: 'Schlaganfall-Analyse', f2_desc: 'Frühe ischämische Veränderungen, ASPECTS-Scoring und Großgefäßverschluss.', f3_title: 'Mittellinienverschiebung', f3_desc: 'Automatisierte Messung der Mittellinienabweichung.', f4_title: 'Trauma-Bewertung', f4_desc: 'Frakturerkennung, Kontusionsidentifikation und Herniationsrisiko.', cta_title: 'Bereit, den Neurobildgebungs-Workflow zu Beschleunigen?', cta_subtitle: 'Kritische Hirnbefunde in unter 45 Sekunden erkennen.' },
    mammo: { badge: 'Mammographie KI', title: 'Fortgeschrittene Mammographie-Analyse', subtitle: 'KI-unterstütztes Brustkrebs-Screening mit BI-RADS-Klassifikation und Dichtebewertung.', stat1_value: '15+', stat1_label: 'Pathologien', stat2_value: '92%', stat2_label: 'Sensitivität', stat3_value: '<45s', stat3_label: 'Analysezeit', f1_title: 'BI-RADS-Klassifikation', f1_desc: 'Automatisierte BI-RADS 0-6 Kategorisierung.', f2_title: 'Dichtebewertung', f2_desc: 'ACR-Dichteklassifikation (A-D) für Risikostratifizierung.', cta_title: 'Verbessern Sie Ihr Brustbildgebungsprogramm', cta_subtitle: 'Verbessern Sie die Krebserkennungsraten mit KI-unterstütztem Screening.' },
    mri: { badge: 'MRT-Suite KI', title: 'Umfassende MRT-Analyse', subtitle: 'Multi-Sequenz-KI-Analyse für Gehirn-, Wirbelsäulen- und muskuloskelettale MRT.', stat1_value: '40+', stat1_label: 'Pathologien', stat2_value: '91%', stat2_label: 'Sensitivität', stat3_value: '<90s', stat3_label: 'Analysezeit', cta_title: 'Transformieren Sie Ihren MRT-Workflow', cta_subtitle: 'Umfassende MRT-Analyse für alle Körperregionen.' },
    msk: { badge: 'MSK-Röntgen KI', title: 'Muskuloskelettale Röntgenanalyse', subtitle: 'KI-gestützte Frakturerkennung und Knochenanomalieanalyse.', stat1_value: '35+', stat1_label: 'Pathologien', stat2_value: '93%', stat2_label: 'Sensitivität', stat3_value: '<30s', stat3_label: 'Analysezeit', cta_title: 'Reduzieren Sie Übersehene Frakturen', cta_subtitle: 'Fangen Sie subtile Frakturen, die übersehen werden könnten.' },
    dental: { badge: 'Dental KI', title: 'Umfassende Dental-Bildgebungsanalyse', subtitle: 'KI-Analyse von Panorama-, periapikaler und CBCT-Dentalbildgebung.', stat1_value: '20+', stat1_label: 'Pathologien', stat2_value: '91%', stat2_label: 'Sensitivität', stat3_value: '<20s', stat3_label: 'Analysezeit', cta_title: 'Heben Sie Ihre Zahnarztpraxis an', cta_subtitle: 'KI-unterstützte Dentalbildgebung für bessere Patientenergebnisse.' },
    ultrasound: { badge: 'Ultraschall KI', title: 'Ultraschall-Bildgebungsanalyse', subtitle: 'KI-gestützte Analyse für abdominalen, geburtshilflichen und vaskulären Ultraschall.', stat1_value: '25+', stat1_label: 'Pathologien', stat2_value: '89%', stat2_label: 'Sensitivität', stat3_value: '<45s', stat3_label: 'Analysezeit', cta_title: 'Verbessern Sie Ihre Ultraschallpraxis', cta_subtitle: 'KI-Unterstützung für schnellere, genauere Sonographie.' },
    pet: { badge: 'PET-Scan KI', title: 'PET/CT-Bildgebungsanalyse', subtitle: 'KI-gestützte Onkologie und metabolische Bildgebungsanalyse.', stat1_value: '20+', stat1_label: 'Indikationen', stat2_value: '90%', stat2_label: 'Sensitivität', stat3_value: '<120s', stat3_label: 'Analysezeit', cta_title: 'Optimieren Sie die Onkologie-Bildgebung', cta_subtitle: 'Umfassende PET/CT-Analyse für bessere Patientenversorgung.' },
    technology: { arch_title: 'Multi-Modell-Architektur', arch_desc: 'Unser Ensemble-Ansatz kombiniert mehrere spezialisierte Modelle für jede Modalität, reduziert Fehlalarme und verbessert die Erkennungsraten.', validation_title: 'Klinische Validierung', validation_desc: 'Strenge Validierung über diverse Patientenpopulationen hinweg mit von Fachkollegen geprüften Publikationen und behördlichen Zulassungen.', heuristics_title: 'Klinische Heuristiken', heuristics_desc: 'KI-Befunde, ergänzt durch klinische Regeln und Bewertungssysteme, die von praktizierenden Radiologen verwendet werden.', explainable_title: 'Erklärbare KI', explainable_desc: 'Grad-CAM-Heatmaps und Konfidenzwerte schaffen Transparenz über die KI-Argumentation und -Befunde.', badge: 'Unsere Technologie', title: 'Enterprise-Grade KI-Architektur', subtitle: 'Aufgebaut auf bewährten Deep-Learning-Grundlagen mit Multi-Modell-Ensemble-Ansatz.' },
    about: { badge: 'Über Uns', title: 'Transformation der Medizinischen Bildgebung mit KI', subtitle: 'Wir bauen die Zukunft der diagnostischen Bildgebung.' },
    contact: { badge: 'Kontaktieren Sie Uns', title: 'Kontakt Aufnehmen', subtitle: 'Haben Sie Fragen? Wir würden gerne von Ihnen hören.', form_submit: 'Nachricht Senden' },
    pilot: { badge: 'Kostenloses Pilotprogramm', title: 'Starten Sie Ihr Kostenloses Pilotprojekt', subtitle: 'Erleben Sie die volle Leistung von ScanGuru ohne Verpflichtung.', form_submit: 'Bewerbung Einreichen' },
    dashboard: { sidebar: { overview: 'Übersicht', dashboard: 'Dashboard', analytics: 'Analysen', studies: 'Studien', all_studies: 'Alle Studien', patients: 'Patienten', settings: 'Einstellungen', logout: 'Abmelden' }, stats: { critical_findings: 'Kritische Befunde', pending_review: 'Ausstehende Überprüfung', analyzed_today: 'Heute Analysiert', total_studies: 'Studien Gesamt' }, table: { patient: 'Patient', modality: 'Modalität', status: 'Status', time: 'Zeit', actions: 'Aktionen' }, status: { critical: 'Kritisch', urgent: 'Dringend', normal: 'Normal', completed: 'Abgeschlossen' } },
    login: { brand: { headline: 'Medizinische Bildgebung', headline_highlight: 'Intelligenz' }, form: { title: 'Portal-Anmeldung', email_label: 'E-Mail-Adresse', password_label: 'Passwort', sign_in: 'Anmelden' } },
    patient: { title: 'Patienten', subtitle: 'Patientenakten verwalten', modal: { add_title: 'Neuen Patienten Hinzufügen', save: 'Speichern', cancel: 'Abbrechen' } }
},

// ═══════════════════════════════════════════════════════════════════════════════════════
// SPANISH - Español
// ═══════════════════════════════════════════════════════════════════════════════════════
es: {
        comparison: { badge: 'Por qué ScanGuru', title: 'Solución integral frente a soluciones puntuales', subtitle: 'Vea cómo una plataforma unificada se compara con gestionar múltiples proveedores especializados.', note: 'Una plataforma unificada significa una integración más sencilla, una experiencia de usuario coherente, un menor costo total de propiedad y una cobertura integral sin gestionar múltiples relaciones con proveedores.', },
    brand: { name: 'ScanGuru', tagline: 'Imágenes Médicas con IA' },
    nav: { platform: 'Plataforma', modalities: 'Modalidades', technology: 'Tecnología', clinical_evidence: 'Evidencia Clínica', about: 'Nosotros', contact: 'Contacto', try_free: 'Prueba Gratis', apply_pilot: 'Registro Gratuito', login: 'Iniciar Sesión', all_solutions: 'Todas las Soluciones', chest_xray: 'Radiografía de Tórax', ct_imaging: 'Imágenes CT', mammography: 'Mamografía', mri_suite: 'Suite MRI', msk_xray: 'Radiografía MSK', dental: 'Dental', ultrasound: 'Ultrasonido', pet_scan: 'PET Scan' },
    home: { badge: 'Plan Gratuito Disponible', title: 'La Plataforma Completa de IA para Imágenes Médicas', subtitle: 'IA de fusión multimodal analiza 50+ patologías en 5 modalidades.', stat_modalities: '5', stat_modalities_label: 'Modalidades', stat_pathologies: '50+', stat_pathologies_label: 'Patologías', stat_languages: '83', stat_languages_label: 'Idiomas', stat_accuracy: '85-95%', stat_accuracy_label: 'Precisión', cta_pilot: 'Registro Gratuito', cta_try: 'Prueba Gratis — Sin Cuenta' },
    trust_bar: { iso: 'ISO 27001', title: 'Confiado por Líderes en Salud', hipaa: 'Cumple HIPAA', gdpr: 'Listo para GDPR', dicom: 'Compatible DICOM', hl7: 'Integración HL7/FHIR', cloud: 'Nube y Local' },
    modalities_section: { badge: 'Cobertura Integral', title: 'Una Plataforma, Cada Modalidad', subtitle: 'Desde radiografías de tórax hasta imágenes CT avanzadas, nuestra IA cubre todo el espectro.', view_all: 'Ver Todas las Modalidades', cxr_title: 'Radiografía de Tórax', cxr_desc: 'Detección de 50+ patologías con puntuación de cardiomegalia', ct_title: 'Imágenes CT', ct_desc: 'Hemorragia cerebral, nódulos pulmonares y detección de trauma', mammo_title: 'Mamografía', mammo_desc: 'Clasificación BI-RADS y detección de lesiones', mri_title: 'Suite MRI', mri_desc: 'Análisis de cerebro, columna y musculoesquelético', msk_title: 'Radiografía MSK', msk_desc: 'Detección de fracturas y anomalías óseas', dental_title: 'Dental', dental_desc: 'Análisis panorámico y periapical', ultrasound_title: 'Ultrasonido', ultrasound_desc: 'Imágenes abdominales y obstétricas', pet_title: 'PET Scan', pet_desc: 'Oncología e imágenes metabólicas' },
    features: { badge: 'Por Qué ScanGuru', title: 'Diseñado para Excelencia Clínica', subtitle: 'IA empresarial que se integra perfectamente en su flujo de trabajo.', f1_title: 'Conjunto Multi-Modelo', f1_desc: 'Múltiples modelos de IA trabajan juntos para mayor precisión.', f2_title: 'Análisis en Tiempo Real', f2_desc: 'Resultados en menos de 60 segundos con priorización automática.', f3_title: 'Integración Perfecta', f3_desc: 'Funciona con su PACS, RIS y EMR via HL7/FHIR.', f4_title: 'Auditoría Completa', f4_desc: 'Registro completo para requisitos regulatorios.' },
    cta: { benefit1: 'Acceso anticipado a nuevas modalidades', benefit2: 'Oportunidades de coautoría en investigación', benefit3: 'Influencia directa en el producto', badge: 'Comience Hoy', title: '¿Listo para Transformar su Flujo de Imágenes?', subtitle: 'Únase a instituciones de salud líderes usando ScanGuru.', btn_try: 'Prueba Gratis', btn_pilot: 'Registro Gratuito', btn_contact: 'Contactar Ventas' },
    footer: { privacy: 'Política de Privacidad', terms: 'Términos del Servicio', cookies: 'Política de Cookies', description: 'Plataforma de análisis de imágenes médicas con IA.', col_platform: 'Plataforma', col_modalities: 'Modalidades', col_company: 'Empresa', col_resources: 'Recursos', copyright: '© 2026 ScanGuru. Todos los derechos reservados.' },
    common: { loading: 'Cargando...', save: 'Guardar', cancel: 'Cancelar', download: 'Descargar', search: 'Buscar', next: 'Siguiente', back: 'Atrás', close: 'Cerrar', learn_more: 'Más Información', download_pdf: 'Descargar PDF', pathologies: 'Patologías', sensitivity: 'Sensibilidad', analysis_time: 'Tiempo de Análisis' },
    form: { name: 'Nombre Completo', email: 'Correo Electrónico', age: 'Edad', sex: 'Sexo', sex_male: 'Masculino', sex_female: 'Femenino', submit: 'Enviar', scan_generate: 'Escanear y Generar PDF' },
    results: { critical: 'Crítico', urgent: 'Urgente', normal: 'Normal', findings: 'Hallazgos' },
    cxr: { badge: 'IA Radiografía de Tórax', title: 'Análisis Integral de Radiografía de Tórax', subtitle: 'Detección con IA de 50+ patologías torácicas con medición de relación cardiotorácica integrada.', stat1_value: '50+', stat1_label: 'Patologías', stat2_value: '94%', stat2_label: 'Sensibilidad', stat3_value: '<30s', stat3_label: 'Tiempo de Análisis', challenge_title: 'El Desafío', challenge_text: 'Las radiografías de tórax son el estudio más común, pero los hallazgos críticos corren riesgo de retrasarse.', features_title: 'Capacidades', f1_title: 'Detección Multi-Patología', f1_desc: 'Detección simultánea de neumonía, nódulos, cardiomegalia y 46+ condiciones más.', f2_title: 'Alertas de Hallazgos Críticos', f2_desc: 'Priorización automática de neumotórax y otros hallazgos urgentes.', f3_title: 'Relación Cardiotorácica', f3_desc: 'Medición automatizada de CTR con análisis de silueta cardíaca.', f4_title: 'Evaluación de Calidad', f4_desc: 'Puntuación automática de calidad de imagen.', cta_title: '¿Listo para Mejorar su Flujo de Radiografías?', cta_subtitle: 'Vea cómo ScanGuru puede ayudar a detectar hallazgos más rápido.' },
    ct_chest: { badge: 'IA CT Tórax', title: 'Análisis Integral de CT de Tórax', subtitle: 'Detección con IA de 30+ patologías torácicas con Lung-RADS y CO-RADS integrados.', stat1_value: '30+', stat1_label: 'Patologías', stat2_value: '94%', stat2_label: 'Sensibilidad', stat3_value: '<60s', stat3_label: 'Tiempo de Análisis', challenge_title: 'El Desafío', challenge_text: 'Las imágenes de CT de tórax generan cientos de cortes, haciendo la revisión exhaustiva lenta.', features_title: 'Capacidades', f1_title: 'Detección de Nódulos Pulmonares', f1_desc: 'Detección automática, medición y clasificación Lung-RADS.', f2_title: 'Análisis COVID-19', f2_desc: 'Puntuación CO-RADS con cuantificación de GGO.', f3_title: 'Hallazgos Incidentales', f3_desc: 'Detección de calcificación coronaria y otros incidentales.', f4_title: 'Visualización 3D', f4_desc: 'Vistas MPR interactivas con seguimiento volumétrico.', cta_title: '¿Listo para Mejorar su Flujo de CT?', cta_subtitle: 'Detecte nódulos pulmonares y hallazgos críticos más rápido.' },
    ct_brain: { badge: 'IA CT Cerebral', title: 'Análisis Integral de CT Cerebral', subtitle: 'Detección rápida de hemorragia intracraneal, ACV y trauma cerebral.', stat1_value: '25+', stat1_label: 'Patologías', stat2_value: '96%', stat2_label: 'Sensibilidad', stat3_value: '<45s', stat3_label: 'Tiempo de Análisis', challenge_title: 'El Desafío', challenge_text: 'Las emergencias neurológicas requieren interpretación rápida y precisa.', features_title: 'Capacidades', f1_title: 'Detección de Hemorragia', f1_desc: 'Identificación de hemorragias epidural, subdural y otras.', f2_title: 'Análisis de ACV', f2_desc: 'Cambios isquémicos tempranos y puntuación ASPECTS.', f3_title: 'Desplazamiento de Línea Media', f3_desc: 'Medición automatizada de desviación.', f4_title: 'Evaluación de Trauma', f4_desc: 'Detección de fracturas y contusiones.', cta_title: '¿Listo para Acelerar Neuroimagen?', cta_subtitle: 'Detecte hallazgos cerebrales críticos en menos de 45 segundos.' },
    mammo: { badge: 'IA Mamografía', title: 'Análisis Avanzado de Mamografía', subtitle: 'Detección de cáncer de mama asistida por IA con clasificación BI-RADS.', stat1_value: '15+', stat1_label: 'Patologías', stat2_value: '92%', stat2_label: 'Sensibilidad', stat3_value: '<45s', stat3_label: 'Tiempo de Análisis', cta_title: 'Mejore su Programa de Mama', cta_subtitle: 'Mejore las tasas de detección con IA.' },
    mri: { badge: 'IA Suite MRI', title: 'Análisis Integral de MRI', subtitle: 'Análisis multi-secuencia para cerebro, columna y musculoesquelético.', stat1_value: '40+', stat1_label: 'Patologías', stat2_value: '91%', stat2_label: 'Sensibilidad', stat3_value: '<90s', stat3_label: 'Tiempo de Análisis', cta_title: 'Transforme su Flujo MRI', cta_subtitle: 'Análisis completo de MRI para todas las regiones.' },
    msk: { badge: 'IA Radiografía MSK', title: 'Análisis de Radiografía Musculoesquelética', subtitle: 'Detección de fracturas y anomalías óseas con IA.', stat1_value: '35+', stat1_label: 'Patologías', stat2_value: '93%', stat2_label: 'Sensibilidad', stat3_value: '<30s', stat3_label: 'Tiempo de Análisis', cta_title: 'Reduzca Fracturas Perdidas', cta_subtitle: 'Capture fracturas sutiles que podrían pasarse por alto.' },
    dental: { badge: 'IA Dental', title: 'Análisis Integral de Imágenes Dentales', subtitle: 'Análisis de imágenes panorámicas, periapicales y CBCT.', stat1_value: '20+', stat1_label: 'Patologías', stat2_value: '91%', stat2_label: 'Sensibilidad', stat3_value: '<20s', stat3_label: 'Tiempo de Análisis', cta_title: 'Eleve su Práctica Dental', cta_subtitle: 'Imágenes dentales asistidas por IA.' },
    ultrasound: { badge: 'IA Ultrasonido', title: 'Análisis de Imágenes de Ultrasonido', subtitle: 'Análisis con IA para ultrasonido abdominal, obstétrico y vascular.', stat1_value: '25+', stat1_label: 'Patologías', stat2_value: '89%', stat2_label: 'Sensibilidad', stat3_value: '<45s', stat3_label: 'Tiempo de Análisis', cta_title: 'Mejore su Práctica de Ultrasonido', cta_subtitle: 'Asistencia de IA para sonografía más rápida.' },
    pet: { badge: 'IA PET Scan', title: 'Análisis de Imágenes PET/CT', subtitle: 'Análisis de oncología e imágenes metabólicas con IA.', stat1_value: '20+', stat1_label: 'Indicaciones', stat2_value: '90%', stat2_label: 'Sensibilidad', stat3_value: '<120s', stat3_label: 'Tiempo de Análisis', cta_title: 'Optimice Imágenes Oncológicas', cta_subtitle: 'Análisis completo de PET/CT.' },
    technology: { arch_title: 'Arquitectura multimodelo', arch_desc: 'Nuestro enfoque de conjunto combina múltiples modelos especializados para cada modalidad, reduciendo los falsos positivos y mejorando las tasas de detección.', validation_title: 'Validación clínica', validation_desc: 'Validación rigurosa en diversas poblaciones de pacientes con publicaciones revisadas por pares y autorizaciones regulatorias.', heuristics_title: 'Heurística clínica', heuristics_desc: 'Hallazgos de IA enriquecidos con reglas clínicas y sistemas de puntuación utilizados por radiólogos en ejercicio.', explainable_title: 'IA explicable', explainable_desc: 'Los mapas de calor Grad-CAM y las puntuaciones de confianza aportan transparencia al razonamiento y los hallazgos de la IA.', badge: 'Nuestra Tecnología', title: 'Arquitectura de IA Empresarial', subtitle: 'Construida sobre fundamentos de aprendizaje profundo probados.' },
    about: { badge: 'Nosotros', title: 'Transformando Imágenes Médicas con IA', subtitle: 'Construimos el futuro de las imágenes diagnósticas.' },
    contact: { badge: 'Contáctenos', title: 'Ponerse en Contacto', subtitle: '¿Tiene preguntas? Nos encantaría saber de usted.', form_submit: 'Enviar Mensaje' },
    pilot: { badge: 'Programa Piloto Gratuito', title: 'Inicie su Piloto Gratuito', subtitle: 'Experimente todo el poder de ScanGuru sin compromiso.', form_submit: 'Enviar Solicitud' },
    dashboard: { sidebar: { overview: 'Resumen', dashboard: 'Panel', studies: 'Estudios', patients: 'Pacientes', settings: 'Configuración', logout: 'Cerrar Sesión' }, stats: { critical_findings: 'Hallazgos Críticos', pending_review: 'Revisión Pendiente', total_studies: 'Total de Estudios' }, status: { critical: 'Crítico', normal: 'Normal', completed: 'Completado' } },
    login: { form: { title: 'Iniciar Sesión en Portal', email_label: 'Correo Electrónico', password_label: 'Contraseña', sign_in: 'Iniciar Sesión' } },
    patient: { title: 'Pacientes', modal: { add_title: 'Agregar Nuevo Paciente', save: 'Guardar', cancel: 'Cancelar' } }
},

// ═══════════════════════════════════════════════════════════════════════════════════════
// FRENCH - Français
// ═══════════════════════════════════════════════════════════════════════════════════════
fr: {
        comparison: { badge: 'Pourquoi ScanGuru', title: 'Solution complète vs. solutions ponctuelles', subtitle: 'Découvrez comment une plateforme unifiée se compare à la gestion de plusieurs fournisseurs spécialisés.', note: 'Une plateforme unifiée signifie une intégration plus simple, une expérience utilisateur cohérente, un coût total de possession réduit et une couverture complète sans gérer de multiples relations fournisseurs.', },
    brand: { name: 'ScanGuru', tagline: 'Imagerie Médicale par IA' },
    nav: { platform: 'Plateforme', modalities: 'Modalités', technology: 'Technologie', clinical_evidence: 'Preuves Cliniques', about: 'À Propos', contact: 'Contact', try_free: 'Essai Gratuit', apply_pilot: 'Inscription Gratuite', login: 'Connexion', all_solutions: 'Toutes les Solutions', chest_xray: 'Radiographie Thoracique', ct_imaging: 'Imagerie CT', mammography: 'Mammographie', mri_suite: 'Suite IRM', msk_xray: 'Radiographie MSK', dental: 'Dentaire', ultrasound: 'Échographie', pet_scan: 'TEP Scan' },
    home: { badge: 'Plan Gratuit Disponible', title: 'La Plateforme IA Complète pour l\'Imagerie Médicale', subtitle: 'IA de fusion multimodale analysant 50+ pathologies dans 5 modalités.', stat_modalities: '5', stat_modalities_label: 'Modalités', stat_pathologies: '50+', stat_pathologies_label: 'Pathologies', stat_languages: '83', stat_languages_label: 'Langues', stat_accuracy: '85-95%', stat_accuracy_label: 'Précision', cta_pilot: 'Inscription Gratuite', cta_try: 'Essai Gratuit — Sans Compte' },
    trust_bar: { iso: 'ISO 27001', title: 'Approuvé par les Leaders de la Santé', hipaa: 'Conforme HIPAA', gdpr: 'Prêt RGPD', dicom: 'Compatible DICOM', hl7: 'Intégration HL7/FHIR', cloud: 'Cloud et Sur Site' },
    modalities_section: { badge: 'Couverture Complète', title: 'Une Plateforme, Chaque Modalité', subtitle: 'Des radiographies thoraciques à l\'imagerie CT avancée, notre IA couvre tout le spectre.', view_all: 'Voir Toutes les Modalités', cxr_title: 'Radiographie Thoracique', cxr_desc: 'Détection de 50+ pathologies avec score de cardiomégalie', ct_title: 'Imagerie CT', ct_desc: 'Hémorragie cérébrale, nodules pulmonaires et détection de trauma', mammo_title: 'Mammographie', mammo_desc: 'Classification BI-RADS et détection de lésions', mri_title: 'Suite IRM', mri_desc: 'Analyse cérébrale, spinale et musculosquelettique', msk_title: 'Radiographie MSK', msk_desc: 'Détection de fractures et anomalies osseuses', dental_title: 'Dentaire', dental_desc: 'Analyse panoramique et périapicale', ultrasound_title: 'Échographie', ultrasound_desc: 'Imagerie abdominale et obstétrique', pet_title: 'TEP Scan', pet_desc: 'Oncologie et imagerie métabolique' },
    features: { badge: 'Pourquoi ScanGuru', title: 'Conçu pour l\'Excellence Clinique', subtitle: 'IA entreprise qui s\'intègre parfaitement dans votre workflow.', f1_title: 'Ensemble Multi-Modèles', f1_desc: 'Plusieurs modèles IA travaillent ensemble pour une meilleure précision.', f2_title: 'Analyse en Temps Réel', f2_desc: 'Résultats en moins de 60 secondes avec priorisation automatique.', f3_title: 'Intégration Transparente', f3_desc: 'Fonctionne avec votre PACS, RIS et EMR via HL7/FHIR.', f4_title: 'Piste d\'Audit', f4_desc: 'Journalisation complète pour les exigences réglementaires.' },
    cta: { benefit1: 'Accès anticipé aux nouvelles modalités', benefit2: 'Opportunités de co-publication de recherche', benefit3: 'Influence directe sur le produit', badge: 'Commencez Aujourd\'hui', title: 'Prêt à Transformer Votre Workflow d\'Imagerie?', subtitle: 'Rejoignez les institutions de santé leaders utilisant ScanGuru.', btn_try: 'Essai Gratuit', btn_pilot: 'Inscription Gratuite', btn_contact: 'Contacter les Ventes' },
    footer: { privacy: 'Politique de Confidentialité', terms: 'Conditions d\'Utilisation', cookies: 'Politique de Cookies', description: 'Plateforme d\'analyse d\'imagerie médicale par IA.', col_platform: 'Plateforme', col_modalities: 'Modalités', col_company: 'Entreprise', col_resources: 'Ressources', copyright: '© 2026 ScanGuru. Tous droits réservés.' },
    common: { loading: 'Chargement...', save: 'Enregistrer', cancel: 'Annuler', download: 'Télécharger', search: 'Rechercher', next: 'Suivant', back: 'Retour', close: 'Fermer', learn_more: 'En Savoir Plus', download_pdf: 'Télécharger PDF', pathologies: 'Pathologies', sensitivity: 'Sensibilité', analysis_time: 'Temps d\'Analyse' },
    form: { name: 'Nom Complet', email: 'Adresse Email', age: 'Âge', sex: 'Sexe', sex_male: 'Homme', sex_female: 'Femme', submit: 'Soumettre', scan_generate: 'Scanner et Générer PDF' },
    results: { critical: 'Critique', urgent: 'Urgent', normal: 'Normal', findings: 'Résultats' },
    cxr: { badge: 'IA Radiographie Thoracique', title: 'Analyse Complète de Radiographie Thoracique', subtitle: 'Détection IA de 50+ pathologies thoraciques avec mesure du rapport cardiothoracique.', stat1_value: '50+', stat1_label: 'Pathologies', stat2_value: '94%', stat2_label: 'Sensibilité', stat3_value: '<30s', stat3_label: 'Temps d\'Analyse', challenge_title: 'Le Défi', challenge_text: 'Les radiographies thoraciques sont l\'étude la plus courante, mais les découvertes critiques risquent d\'être retardées.', features_title: 'Capacités', f1_title: 'Détection Multi-Pathologie', f1_desc: 'Dépistage simultané de pneumonie, nodules, cardiomégalie et 46+ autres conditions.', f2_title: 'Alertes de Découvertes Critiques', f2_desc: 'Priorisation automatique du pneumothorax et autres découvertes urgentes.', f3_title: 'Rapport Cardiothoracique', f3_desc: 'Mesure automatisée du RCT avec analyse de silhouette cardiaque.', f4_title: 'Évaluation de Qualité', f4_desc: 'Score automatique de qualité d\'image.', cta_title: 'Prêt à Améliorer Votre Workflow de Radiographie?', cta_subtitle: 'Voyez comment ScanGuru peut aider à détecter les découvertes plus rapidement.' },
    ct_chest: { badge: 'IA CT Thorax', title: 'Analyse Complète de CT Thoracique', subtitle: 'Détection IA de 30+ pathologies thoraciques avec Lung-RADS et CO-RADS intégrés.', stat1_value: '30+', stat1_label: 'Pathologies', stat2_value: '94%', stat2_label: 'Sensibilité', stat3_value: '<60s', stat3_label: 'Temps d\'Analyse', cta_title: 'Prêt à Améliorer Votre Workflow CT?', cta_subtitle: 'Détectez les nodules pulmonaires plus rapidement.' },
    ct_brain: { badge: 'IA CT Cérébral', title: 'Analyse Complète de CT Cérébral', subtitle: 'Détection rapide d\'hémorragie intracrânienne, AVC et traumatisme crânien.', stat1_value: '25+', stat1_label: 'Pathologies', stat2_value: '96%', stat2_label: 'Sensibilité', stat3_value: '<45s', stat3_label: 'Temps d\'Analyse', cta_title: 'Prêt à Accélérer la Neuroimagerie?', cta_subtitle: 'Détectez les découvertes cérébrales critiques en moins de 45 secondes.' },
    mammo: { badge: 'IA Mammographie', title: 'Analyse Avancée de Mammographie', subtitle: 'Dépistage du cancer du sein assisté par IA avec classification BI-RADS.', cta_title: 'Améliorez Votre Programme d\'Imagerie Mammaire', cta_subtitle: 'Améliorez les taux de détection avec l\'IA.' },
    mri: { badge: 'IA Suite IRM', title: 'Analyse Complète IRM', subtitle: 'Analyse multi-séquence pour cerveau, colonne et musculosquelettique.', cta_title: 'Transformez Votre Workflow IRM' },
    msk: { badge: 'IA Radiographie MSK', title: 'Analyse de Radiographie Musculosquelettique', subtitle: 'Détection de fractures et anomalies osseuses par IA.', cta_title: 'Réduisez les Fractures Manquées' },
    dental: { badge: 'IA Dentaire', title: 'Analyse Complète d\'Imagerie Dentaire', subtitle: 'Analyse d\'imagerie panoramique, périapicale et CBCT.', cta_title: 'Élevez Votre Cabinet Dentaire' },
    ultrasound: { badge: 'IA Échographie', title: 'Analyse d\'Imagerie Échographique', subtitle: 'Analyse IA pour échographie abdominale, obstétrique et vasculaire.', cta_title: 'Améliorez Votre Pratique d\'Échographie' },
    pet: { badge: 'IA TEP Scan', title: 'Analyse d\'Imagerie TEP/CT', subtitle: 'Analyse d\'oncologie et imagerie métabolique par IA.', cta_title: 'Optimisez l\'Imagerie Oncologique' },
    technology: { arch_title: 'Architecture multi-modèles', arch_desc: 'Notre approche d\'ensemble combine plusieurs modèles spécialisés pour chaque modalité, réduisant les faux positifs et améliorant les taux de détection.', validation_title: 'Validation clinique', validation_desc: 'Validation rigoureuse auprès de populations de patients diverses, avec des publications évaluées par des pairs et des homologations réglementaires.', heuristics_title: 'Heuristiques cliniques', heuristics_desc: 'Résultats de l\'IA enrichis par des règles cliniques et des systèmes de scoring utilisés par les radiologues en exercice.', explainable_title: 'IA explicable', explainable_desc: 'Les cartes thermiques Grad-CAM et les scores de confiance offrent une transparence sur le raisonnement et les résultats de l\'IA.', badge: 'Notre Technologie', title: 'Architecture IA de Niveau Entreprise', subtitle: 'Construite sur des fondations d\'apprentissage profond éprouvées.' },
    about: { badge: 'À Propos', title: 'Transformer l\'Imagerie Médicale avec l\'IA', subtitle: 'Nous construisons l\'avenir de l\'imagerie diagnostique.' },
    contact: { badge: 'Contactez-Nous', title: 'Nous Contacter', subtitle: 'Des questions? Nous aimerions avoir de vos nouvelles.', form_submit: 'Envoyer le Message' },
    pilot: { badge: 'Programme Pilote Gratuit', title: 'Démarrez Votre Pilote Gratuit', subtitle: 'Découvrez toute la puissance de ScanGuru sans engagement.', form_submit: 'Soumettre la Demande' },
    dashboard: { sidebar: { overview: 'Aperçu', dashboard: 'Tableau de Bord', studies: 'Études', patients: 'Patients', settings: 'Paramètres', logout: 'Déconnexion' }, stats: { critical_findings: 'Résultats Critiques', pending_review: 'En Attente de Révision', total_studies: 'Total des Études' }, status: { critical: 'Critique', normal: 'Normal', completed: 'Terminé' } },
    login: { form: { title: 'Connexion au Portail', email_label: 'Adresse Email', password_label: 'Mot de Passe', sign_in: 'Se Connecter' } },
    patient: { title: 'Patients', modal: { add_title: 'Ajouter un Nouveau Patient', save: 'Enregistrer', cancel: 'Annuler' } }
},

// ═══════════════════════════════════════════════════════════════════════════════════════
// HINDI - हिन्दी
// ═══════════════════════════════════════════════════════════════════════════════════════
hi: {
    brand: { name: 'ScanGuru', tagline: 'AI-संचालित मेडिकल इमेजिंग' },
    nav: { platform: 'प्लेटफ़ॉर्म', modalities: 'मोडैलिटीज़', technology: 'तकनीक', clinical_evidence: 'क्लिनिकल साक्ष्य', about: 'हमारे बारे में', contact: 'संपर्क', try_free: 'मुफ्त आज़माएं', apply_pilot: 'मुफ्त साइन अप करें', login: 'लॉगिन', all_solutions: 'सभी समाधान', chest_xray: 'छाती का एक्स-रे', ct_imaging: 'CT इमेजिंग', mammography: 'मैमोग्राफी', mri_suite: 'MRI सुइट', msk_xray: 'MSK एक्स-रे', dental: 'डेंटल', ultrasound: 'अल्ट्रासाउंड', pet_scan: 'PET स्कैन' },
    home: { badge: 'मुफ्त प्लान उपलब्ध', title: 'मेडिकल इमेजिंग के लिए संपूर्ण AI प्लेटफ़ॉर्म', subtitle: 'मल्टी-मोडल फ्यूजन AI 5 मोडैलिटीज़ में 50+ पैथोलॉजीज़ का विश्लेषण करता है।', stat_modalities: '5', stat_modalities_label: 'मोडैलिटीज़', stat_pathologies: '50+', stat_pathologies_label: 'पैथोलॉजीज़', stat_languages: '83', stat_languages_label: 'भाषाएं', stat_accuracy: '85-95%', stat_accuracy_label: 'सटीकता', cta_pilot: 'मुफ्त साइन अप करें', cta_try: 'मुफ्त आज़माएं — कोई खाता नहीं' },
    trust_bar: { title: 'स्वास्थ्य नेताओं द्वारा विश्वसनीय', hipaa: 'HIPAA अनुपालन', gdpr: 'GDPR तैयार', dicom: 'DICOM संगत', hl7: 'HL7/FHIR इंटीग्रेशन', cloud: 'क्लाउड और ऑन-प्रिमाइस' },
    modalities_section: { badge: 'व्यापक कवरेज', title: 'एक प्लेटफ़ॉर्म, हर मोडैलिटी', subtitle: 'छाती के एक्स-रे से लेकर उन्नत CT इमेजिंग तक, हमारा AI पूरे स्पेक्ट्रम को कवर करता है।', view_all: 'सभी मोडैलिटीज़ देखें', cxr_title: 'छाती का एक्स-रे', cxr_desc: 'कार्डियोमेगाली स्कोरिंग के साथ 50+ पैथोलॉजी डिटेक्शन', ct_title: 'CT इमेजिंग', ct_desc: 'ब्रेन हेमरेज, चेस्ट नोड्यूल्स और ट्रॉमा डिटेक्शन', mammo_title: 'मैमोग्राफी', mammo_desc: 'BI-RADS क्लासिफिकेशन और लेसियन डिटेक्शन', mri_title: 'MRI सुइट', mri_desc: 'ब्रेन, स्पाइन और मस्कुलोस्केलेटल विश्लेषण', msk_title: 'MSK एक्स-रे', msk_desc: 'फ्रैक्चर डिटेक्शन और बोन असामान्यताएं', dental_title: 'डेंटल', dental_desc: 'पैनोरामिक और पेरीएपिकल विश्लेषण', ultrasound_title: 'अल्ट्रासाउंड', ultrasound_desc: 'एब्डोमिनल और प्रसूति इमेजिंग', pet_title: 'PET स्कैन', pet_desc: 'ऑन्कोलॉजी और मेटाबॉलिक इमेजिंग' },
    features: { badge: 'ScanGuru क्यों', title: 'क्लिनिकल उत्कृष्टता के लिए बनाया गया', subtitle: 'एंटरप्राइज़-ग्रेड AI जो आपके वर्कफ़्लो में सहजता से इंटीग्रेट होता है।', f1_title: 'मल्टी-मॉडल एन्सेम्बल', f1_desc: 'उच्च सटीकता के लिए कई AI मॉडल एक साथ काम करते हैं।', f2_title: 'रियल-टाइम विश्लेषण', f2_desc: 'ऑटो प्रायोरिटाइज़ेशन के साथ 60 सेकंड से कम में परिणाम।', f3_title: 'सहज इंटीग्रेशन', f3_desc: 'HL7/FHIR के माध्यम से आपके PACS, RIS और EMR के साथ काम करता है।', f4_title: 'ऑडिट ट्रेल', f4_desc: 'रेगुलेटरी आवश्यकताओं के लिए पूर्ण लॉगिंग।' },
    cta: { badge: 'आज ही शुरू करें', title: 'अपने इमेजिंग वर्कफ़्लो को बदलने के लिए तैयार हैं?', subtitle: 'ScanGuru का उपयोग करने वाली प्रमुख स्वास्थ्य संस्थाओं में शामिल हों।', btn_try: 'मुफ्त आज़माएं', btn_pilot: 'मुफ्त साइन अप करें', btn_contact: 'सेल्स से संपर्क करें' },
    footer: { description: 'AI-संचालित मेडिकल इमेजिंग विश्लेषण प्लेटफ़ॉर्म।', col_platform: 'प्लेटफ़ॉर्म', col_modalities: 'मोडैलिटीज़', col_company: 'कंपनी', col_resources: 'संसाधन', copyright: '© 2026 ScanGuru. सर्वाधिकार सुरक्षित।' },
    common: { loading: 'लोड हो रहा है...', save: 'सेव करें', cancel: 'रद्द करें', download: 'डाउनलोड', search: 'खोजें', next: 'अगला', back: 'पीछे', close: 'बंद करें', learn_more: 'और जानें', download_pdf: 'PDF डाउनलोड करें', pathologies: 'पैथोलॉजीज़', sensitivity: 'सेंसिटिविटी', analysis_time: 'विश्लेषण समय' },
    form: { name: 'पूरा नाम', email: 'ईमेल पता', age: 'उम्र', sex: 'लिंग', sex_male: 'पुरुष', sex_female: 'महिला', submit: 'सबमिट करें', scan_generate: 'स्कैन करें और PDF बनाएं' },
    results: { critical: 'गंभीर', urgent: 'तत्काल', normal: 'सामान्य', findings: 'निष्कर्ष' },
    cxr: { badge: 'छाती एक्स-रे AI', title: 'व्यापक छाती एक्स-रे विश्लेषण', subtitle: 'इंटीग्रेटेड कार्डियोथोरेसिक अनुपात माप के साथ 50+ थोरेसिक पैथोलॉजीज़ का AI-संचालित डिटेक्शन।', stat1_value: '50+', stat1_label: 'पैथोलॉजीज़', stat2_value: '94%', stat2_label: 'सेंसिटिविटी', stat3_value: '<30s', stat3_label: 'विश्लेषण समय', challenge_title: 'चुनौती', challenge_text: 'छाती एक्स-रे सबसे आम डायग्नोस्टिक इमेजिंग स्टडी है, लेकिन गंभीर निष्कर्षों में देरी का जोखिम रहता है।', features_title: 'क्षमताएं', f1_title: 'मल्टी-पैथोलॉजी डिटेक्शन', f1_desc: 'न्यूमोनिया, नोड्यूल्स, कार्डियोमेगाली और 46+ अन्य स्थितियों की एक साथ स्क्रीनिंग।', f2_title: 'क्रिटिकल फाइंडिंग अलर्ट', f2_desc: 'न्यूमोथोरैक्स और अन्य तत्काल निष्कर्षों की ऑटोमैटिक प्रायोरिटाइज़ेशन।', f3_title: 'कार्डियोथोरेसिक अनुपात', f3_desc: 'सटीक कार्डियक सिल्हूट विश्लेषण के साथ ऑटोमेटेड CTR माप।', f4_title: 'क्वालिटी असेसमेंट', f4_desc: 'ऑटोमैटिक इमेज क्वालिटी स्कोरिंग।', cta_title: 'अपने छाती एक्स-रे वर्कफ़्लो को बेहतर बनाने के लिए तैयार हैं?', cta_subtitle: 'देखें कि ScanGuru आपकी टीम को तेज़ी से निष्कर्ष पहचानने में कैसे मदद कर सकता है।' },
    ct_chest: { badge: 'CT चेस्ट AI', title: 'व्यापक CT चेस्ट विश्लेषण', subtitle: 'इंटीग्रेटेड Lung-RADS और CO-RADS स्कोरिंग के साथ 30+ थोरेसिक पैथोलॉजीज़ का AI-संचालित डिटेक्शन।', stat1_value: '30+', stat1_label: 'पैथोलॉजीज़', stat2_value: '94%', stat2_label: 'सेंसिटिविटी', stat3_value: '<60s', stat3_label: 'विश्लेषण समय', cta_title: 'अपने CT चेस्ट वर्कफ़्लो को बेहतर बनाने के लिए तैयार हैं?', cta_subtitle: 'लंग नोड्यूल्स और क्रिटिकल फाइंडिंग्स को तेज़ी से पहचानें।' },
    ct_brain: { badge: 'CT ब्रेन AI', title: 'व्यापक CT ब्रेन विश्लेषण', subtitle: 'इंट्राक्रैनियल हेमरेज, स्ट्रोक और ट्रॉमैटिक ब्रेन इंजरी का तेज़ डिटेक्शन।', stat1_value: '25+', stat1_label: 'पैथोलॉजीज़', stat2_value: '96%', stat2_label: 'सेंसिटिविटी', stat3_value: '<45s', stat3_label: 'विश्लेषण समय', cta_title: 'न्यूरोइमेजिंग वर्कफ़्लो को तेज़ करने के लिए तैयार हैं?', cta_subtitle: '45 सेकंड से कम में क्रिटिकल ब्रेन फाइंडिंग्स पहचानें।' },
    mammo: { badge: 'मैमोग्राफी AI', title: 'उन्नत मैमोग्राफी विश्लेषण', subtitle: 'BI-RADS क्लासिफिकेशन के साथ AI-असिस्टेड ब्रेस्ट कैंसर स्क्रीनिंग।', cta_title: 'अपने ब्रेस्ट इमेजिंग प्रोग्राम को बेहतर बनाएं' },
    mri: { badge: 'MRI सुइट AI', title: 'व्यापक MRI विश्लेषण', subtitle: 'ब्रेन, स्पाइन और मस्कुलोस्केलेटल MRI के लिए मल्टी-सीक्वेंस AI विश्लेषण।', cta_title: 'अपने MRI वर्कफ़्लो को बदलें' },
    msk: { badge: 'MSK एक्स-रे AI', title: 'मस्कुलोस्केलेटल एक्स-रे विश्लेषण', subtitle: 'AI-संचालित फ्रैक्चर डिटेक्शन और बोन असामान्यता विश्लेषण।', cta_title: 'मिस्ड फ्रैक्चर कम करें' },
    dental: { badge: 'डेंटल AI', title: 'व्यापक डेंटल इमेजिंग विश्लेषण', subtitle: 'पैनोरामिक, पेरीएपिकल और CBCT डेंटल इमेजिंग का AI विश्लेषण।', cta_title: 'अपनी डेंटल प्रैक्टिस को ऊंचा उठाएं' },
    ultrasound: { badge: 'अल्ट्रासाउंड AI', title: 'अल्ट्रासाउंड इमेजिंग विश्लेषण', subtitle: 'एब्डोमिनल, ऑब्स्टेट्रिक और वैस्कुलर अल्ट्रासाउंड के लिए AI-संचालित विश्लेषण।', cta_title: 'अपनी अल्ट्रासाउंड प्रैक्टिस को बेहतर बनाएं' },
    pet: { badge: 'PET स्कैन AI', title: 'PET/CT इमेजिंग विश्लेषण', subtitle: 'AI-संचालित ऑन्कोलॉजी और मेटाबॉलिक इमेजिंग विश्लेषण।', cta_title: 'ऑन्कोलॉजी इमेजिंग को ऑप्टिमाइज़ करें' },
    technology: { badge: 'हमारी तकनीक', title: 'एंटरप्राइज़-ग्रेड AI आर्किटेक्चर', subtitle: 'सिद्ध डीप लर्निंग फाउंडेशन पर बनाया गया।' },
    about: { badge: 'हमारे बारे में', title: 'AI के साथ मेडिकल इमेजिंग को बदलना', subtitle: 'हम डायग्नोस्टिक इमेजिंग का भविष्य बना रहे हैं।' },
    contact: { badge: 'संपर्क करें', title: 'संपर्क में रहें', subtitle: 'प्रश्न हैं? हम आपसे सुनना पसंद करेंगे।', form_submit: 'संदेश भेजें' },
    pilot: { badge: 'मुफ्त पायलट प्रोग्राम', title: 'अपना मुफ्त पायलट शुरू करें', subtitle: 'बिना किसी दायित्व के ScanGuru की पूरी शक्ति का अनुभव करें।', form_submit: 'आवेदन सबमिट करें' },
    dashboard: { sidebar: { overview: 'अवलोकन', dashboard: 'डैशबोर्ड', studies: 'स्टडीज़', patients: 'मरीज़', settings: 'सेटिंग्स', logout: 'लॉगआउट' }, stats: { critical_findings: 'गंभीर निष्कर्ष', pending_review: 'समीक्षा लंबित', total_studies: 'कुल स्टडीज़', total_patients: 'कुल मरीज़' }, table: { patient: 'मरीज़', status: 'स्थिति', time: 'समय', actions: 'कार्रवाई' }, status: { critical: 'गंभीर', urgent: 'तत्काल', normal: 'सामान्य', completed: 'पूर्ण' } },
    login: { brand: { headline: 'मेडिकल इमेजिंग', headline_highlight: 'इंटेलिजेंस' }, form: { title: 'पोर्टल में साइन इन करें', email_label: 'ईमेल पता', password_label: 'पासवर्ड', sign_in: 'साइन इन करें' } },
    patient: { title: 'मरीज़', subtitle: 'मरीज़ रिकॉर्ड प्रबंधित करें', modal: { add_title: 'नया मरीज़ जोड़ें', first_name: 'पहला नाम', last_name: 'अंतिम नाम', save: 'सेव करें', cancel: 'रद्द करें' }, detail: { back: 'वापस', studies: 'स्टडीज़' } }
},

// ═══════════════════════════════════════════════════════════════════════════════════════
// CHINESE SIMPLIFIED - 简体中文
// ═══════════════════════════════════════════════════════════════════════════════════════
zh: {
    brand: { name: 'ScanGuru', tagline: 'AI医学影像' },
    nav: { platform: '平台', modalities: '模态', technology: '技术', clinical_evidence: '临床证据', about: '关于我们', contact: '联系我们', try_free: '免费试用', apply_pilot: '免费注册', login: '登录', all_solutions: '所有解决方案', chest_xray: '胸部X光', ct_imaging: 'CT成像', mammography: '乳腺摄影', mri_suite: 'MRI套件', msk_xray: 'MSK X光', dental: '牙科', ultrasound: '超声波', pet_scan: 'PET扫描' },
    home: { badge: '免费计划可用', title: '完整的医学影像AI平台', subtitle: '多模态融合AI在5种模态中分析50+种病理。', stat_modalities: '5', stat_modalities_label: '模态', stat_pathologies: '50+', stat_pathologies_label: '病理', stat_languages: '83', stat_languages_label: '语言', stat_accuracy: '85-95%', stat_accuracy_label: '准确率', cta_pilot: '免费注册', cta_try: '免费试用 — 无需账户' },
    trust_bar: { title: '受医疗领导者信赖', hipaa: 'HIPAA合规', gdpr: 'GDPR就绪', dicom: 'DICOM兼容', hl7: 'HL7/FHIR集成', cloud: '云端和本地' },
    modalities_section: { badge: '全面覆盖', title: '一个平台，所有模态', subtitle: '从胸部X光到高级CT成像，我们的AI覆盖整个诊断影像范围。', view_all: '查看所有模态', cxr_title: '胸部X光', cxr_desc: '50+病理检测与心脏肿大评分', ct_title: 'CT成像', ct_desc: '脑出血、肺结节和创伤检测', mammo_title: '乳腺摄影', mammo_desc: 'BI-RADS分类和病变检测', mri_title: 'MRI套件', mri_desc: '脑、脊柱和肌肉骨骼分析', msk_title: 'MSK X光', msk_desc: '骨折检测和骨骼异常', dental_title: '牙科', dental_desc: '全景和根尖周分析', ultrasound_title: '超声波', ultrasound_desc: '腹部和产科成像', pet_title: 'PET扫描', pet_desc: '肿瘤学和代谢成像' },
    features: { badge: '为何选择ScanGuru', title: '为临床卓越而构建', subtitle: '企业级AI无缝集成到您的工作流程。', f1_title: '多模型集成', f1_desc: '多个AI模型协同工作以提高准确性。', f2_title: '实时分析', f2_desc: '60秒内出结果，自动优先处理关键发现。', f3_title: '无缝集成', f3_desc: '通过HL7/FHIR与您的PACS、RIS和EMR配合使用。', f4_title: '审计追踪', f4_desc: '满足监管要求的完整日志记录。' },
    cta: { badge: '立即开始', title: '准备好改变您的影像工作流程了吗？', subtitle: '加入使用ScanGuru的领先医疗机构。', btn_try: '免费试用', btn_pilot: '免费注册', btn_contact: '联系销售' },
    footer: { description: 'AI驱动的医学影像分析平台。', col_platform: '平台', col_modalities: '模态', col_company: '公司', col_resources: '资源', copyright: '© 2026 ScanGuru. 保留所有权利。' },
    common: { loading: '加载中...', save: '保存', cancel: '取消', download: '下载', search: '搜索', next: '下一步', back: '返回', close: '关闭', learn_more: '了解更多', download_pdf: '下载PDF', pathologies: '病理', sensitivity: '敏感性', analysis_time: '分析时间' },
    form: { name: '全名', email: '电子邮件', age: '年龄', sex: '性别', sex_male: '男', sex_female: '女', submit: '提交', scan_generate: '扫描并生成PDF' },
    results: { critical: '危急', urgent: '紧急', normal: '正常', findings: '发现' },
    cxr: { badge: '胸部X光AI', title: '全面的胸部X光分析', subtitle: 'AI驱动检测50+种胸部病理，集成心胸比测量。', stat1_value: '50+', stat1_label: '病理', stat2_value: '94%', stat2_label: '敏感性', stat3_value: '<30s', stat3_label: '分析时间', challenge_title: '挑战', challenge_text: '胸部X光是最常见的诊断影像检查，但关键发现存在延误风险。', features_title: '功能', f1_title: '多病理检测', f1_desc: '同时筛查肺炎、结节、心脏肿大等46+种疾病。', f2_title: '关键发现警报', f2_desc: '自动优先处理气胸和其他紧急发现。', f3_title: '心胸比', f3_desc: '自动CTR测量与精确心脏轮廓分析。', f4_title: '质量评估', f4_desc: '自动图像质量评分。', cta_title: '准备好提升您的胸部X光工作流程了吗？', cta_subtitle: '看看ScanGuru如何帮助您更快地检测发现。' },
    ct_chest: { badge: 'CT胸部AI', title: '全面的CT胸部分析', subtitle: 'AI驱动检测30+种胸部病理，集成Lung-RADS和CO-RADS评分。', stat1_value: '30+', stat1_label: '病理', stat2_value: '94%', stat2_label: '敏感性', stat3_value: '<60s', stat3_label: '分析时间', cta_title: '准备好提升您的CT胸部工作流程了吗？', cta_subtitle: '更快地检测肺结节和关键发现。' },
    ct_brain: { badge: 'CT脑部AI', title: '全面的CT脑部分析', subtitle: '快速检测颅内出血、中风和创伤性脑损伤。', stat1_value: '25+', stat1_label: '病理', stat2_value: '96%', stat2_label: '敏感性', stat3_value: '<45s', stat3_label: '分析时间', cta_title: '准备好加速神经影像工作流程了吗？', cta_subtitle: '在45秒内检测关键脑部发现。' },
    mammo: { badge: '乳腺摄影AI', title: '高级乳腺摄影分析', subtitle: 'AI辅助乳腺癌筛查与BI-RADS分类。', cta_title: '提升您的乳腺影像项目' },
    mri: { badge: 'MRI套件AI', title: '全面的MRI分析', subtitle: '脑、脊柱和肌肉骨骼MRI的多序列AI分析。', cta_title: '改变您的MRI工作流程' },
    msk: { badge: 'MSK X光AI', title: '肌肉骨骼X光分析', subtitle: 'AI驱动的骨折检测和骨骼异常分析。', cta_title: '减少漏诊骨折' },
    dental: { badge: '牙科AI', title: '全面的牙科影像分析', subtitle: '全景、根尖周和CBCT牙科影像的AI分析。', cta_title: '提升您的牙科诊所' },
    ultrasound: { badge: '超声波AI', title: '超声波影像分析', subtitle: '腹部、产科和血管超声的AI驱动分析。', cta_title: '提升您的超声波实践' },
    pet: { badge: 'PET扫描AI', title: 'PET/CT影像分析', subtitle: 'AI驱动的肿瘤学和代谢影像分析。', cta_title: '优化肿瘤学影像' },
    technology: { badge: '我们的技术', title: '企业级AI架构', subtitle: '建立在经过验证的深度学习基础上。' },
    about: { badge: '关于我们', title: '用AI改变医学影像', subtitle: '我们正在构建诊断影像的未来。' },
    contact: { badge: '联系我们', title: '取得联系', subtitle: '有问题吗？我们很乐意听取您的意见。', form_submit: '发送消息' },
    pilot: { badge: '免费试点项目', title: '开始您的免费试点', subtitle: '无义务体验ScanGuru的全部功能。', form_submit: '提交申请' },
    dashboard: { sidebar: { overview: '概览', dashboard: '仪表板', studies: '检查', patients: '患者', settings: '设置', logout: '退出' }, stats: { critical_findings: '危急发现', pending_review: '待审核', total_studies: '总检查数', total_patients: '总患者数' }, status: { critical: '危急', normal: '正常', completed: '已完成' } },
    login: { form: { title: '登录门户', email_label: '电子邮件', password_label: '密码', sign_in: '登录' } },
    patient: { title: '患者', modal: { add_title: '添加新患者', save: '保存', cancel: '取消' } }
},

// ═══════════════════════════════════════════════════════════════════════════════════════
// ARABIC - العربية (RTL)
// ═══════════════════════════════════════════════════════════════════════════════════════
ar: {
    brand: { name: 'ScanGuru', tagline: 'التصوير الطبي بالذكاء الاصطناعي' },
    nav: { platform: 'المنصة', modalities: 'الطرائق', technology: 'التكنولوجيا', clinical_evidence: 'الأدلة السريرية', about: 'من نحن', contact: 'اتصل بنا', try_free: 'جرب مجاناً', apply_pilot: 'سجل مجاناً', login: 'تسجيل الدخول', all_solutions: 'جميع الحلول', chest_xray: 'أشعة الصدر', ct_imaging: 'التصوير المقطعي', mammography: 'تصوير الثدي', mri_suite: 'جناح الرنين المغناطيسي', msk_xray: 'أشعة العضلات والعظام', dental: 'طب الأسنان', ultrasound: 'الموجات فوق الصوتية', pet_scan: 'مسح PET' },
    home: { badge: 'خطة مجانية متاحة', title: 'المنصة الكاملة للتصوير الطبي بالذكاء الاصطناعي', subtitle: 'ذكاء اصطناعي متعدد الوسائط يحلل أكثر من 50 مرض في 5 طرائق.', stat_modalities: '5', stat_modalities_label: 'طرائق', stat_pathologies: '50+', stat_pathologies_label: 'أمراض', stat_languages: '83', stat_languages_label: 'لغة', stat_accuracy: '85-95%', stat_accuracy_label: 'الدقة', cta_pilot: 'سجل مجاناً', cta_try: 'جرب مجاناً — بدون حساب' },
    trust_bar: { title: 'موثوق من قادة الرعاية الصحية', hipaa: 'متوافق مع HIPAA', gdpr: 'جاهز لـ GDPR', dicom: 'متوافق مع DICOM', hl7: 'تكامل HL7/FHIR', cloud: 'سحابي ومحلي' },
    modalities_section: { badge: 'تغطية شاملة', title: 'منصة واحدة، كل الطرائق', subtitle: 'من أشعة الصدر إلى التصوير المقطعي المتقدم، يغطي ذكاؤنا الاصطناعي الطيف الكامل.', view_all: 'عرض جميع الطرائق', cxr_title: 'أشعة الصدر', cxr_desc: 'كشف أكثر من 50 مرضاً مع تقييم تضخم القلب', ct_title: 'التصوير المقطعي', ct_desc: 'كشف نزيف الدماغ والعقيدات الرئوية والصدمات', mammo_title: 'تصوير الثدي', mammo_desc: 'تصنيف BI-RADS وكشف الآفات', mri_title: 'جناح الرنين المغناطيسي', mri_desc: 'تحليل الدماغ والعمود الفقري والعضلات والعظام', msk_title: 'أشعة العضلات والعظام', msk_desc: 'كشف الكسور وتشوهات العظام', dental_title: 'طب الأسنان', dental_desc: 'تحليل بانورامي وحول الذروة', ultrasound_title: 'الموجات فوق الصوتية', ultrasound_desc: 'تصوير البطن والتوليد', pet_title: 'مسح PET', pet_desc: 'الأورام والتصوير الأيضي' },
    features: { badge: 'لماذا ScanGuru', title: 'مصمم للتميز السريري', subtitle: 'ذكاء اصطناعي مؤسسي يندمج بسلاسة في سير عملك.', f1_title: 'مجموعة متعددة النماذج', f1_desc: 'نماذج ذكاء اصطناعي متعددة تعمل معاً لدقة أعلى.', f2_title: 'تحليل في الوقت الفعلي', f2_desc: 'نتائج في أقل من 60 ثانية مع أولوية تلقائية.', f3_title: 'تكامل سلس', f3_desc: 'يعمل مع PACS و RIS و EMR عبر HL7/FHIR.', f4_title: 'مسار التدقيق', f4_desc: 'تسجيل كامل للمتطلبات التنظيمية.' },
    cta: { badge: 'ابدأ اليوم', title: 'مستعد لتحويل سير عمل التصوير الخاص بك؟', subtitle: 'انضم إلى مؤسسات الرعاية الصحية الرائدة.', btn_try: 'جرب مجاناً', btn_pilot: 'سجل مجاناً', btn_contact: 'اتصل بالمبيعات' },
    footer: { description: 'منصة تحليل التصوير الطبي بالذكاء الاصطناعي.', col_platform: 'المنصة', col_modalities: 'الطرائق', col_company: 'الشركة', col_resources: 'الموارد', copyright: '© 2026 ScanGuru. جميع الحقوق محفوظة.' },
    common: { loading: 'جاري التحميل...', save: 'حفظ', cancel: 'إلغاء', download: 'تحميل', search: 'بحث', next: 'التالي', back: 'رجوع', close: 'إغلاق', learn_more: 'اعرف المزيد', download_pdf: 'تحميل PDF', pathologies: 'الأمراض', sensitivity: 'الحساسية', analysis_time: 'وقت التحليل' },
    form: { name: 'الاسم الكامل', email: 'البريد الإلكتروني', age: 'العمر', sex: 'الجنس', sex_male: 'ذكر', sex_female: 'أنثى', submit: 'إرسال', scan_generate: 'مسح وإنشاء PDF' },
    results: { critical: 'حرج', urgent: 'عاجل', normal: 'طبيعي', findings: 'النتائج' },
    cxr: { badge: 'أشعة الصدر بالذكاء الاصطناعي', title: 'تحليل شامل لأشعة الصدر', subtitle: 'كشف بالذكاء الاصطناعي لأكثر من 50 مرضاً صدرياً مع قياس نسبة القلب والصدر.', stat1_value: '50+', stat1_label: 'أمراض', stat2_value: '94%', stat2_label: 'الحساسية', stat3_value: '<30s', stat3_label: 'وقت التحليل', challenge_title: 'التحدي', challenge_text: 'أشعة الصدر هي الدراسة التشخيصية الأكثر شيوعاً، لكن النتائج الحرجة معرضة للتأخير.', features_title: 'القدرات', f1_title: 'كشف متعدد الأمراض', f1_desc: 'فحص متزامن للالتهاب الرئوي والعقيدات وتضخم القلب و46+ حالة أخرى.', f2_title: 'تنبيهات النتائج الحرجة', f2_desc: 'أولوية تلقائية لاسترواح الصدر والنتائج العاجلة الأخرى.', f3_title: 'نسبة القلب والصدر', f3_desc: 'قياس CTR آلي مع تحليل دقيق لظل القلب.', f4_title: 'تقييم الجودة', f4_desc: 'تقييم جودة الصورة التلقائي.', cta_title: 'مستعد لتحسين سير عمل أشعة الصدر؟', cta_subtitle: 'شاهد كيف يمكن لـ ScanGuru مساعدة فريقك في الكشف بشكل أسرع.' },
    ct_chest: { badge: 'التصوير المقطعي للصدر بالذكاء الاصطناعي', title: 'تحليل شامل للتصوير المقطعي للصدر', subtitle: 'كشف بالذكاء الاصطناعي لأكثر من 30 مرضاً صدرياً مع Lung-RADS و CO-RADS.', stat1_value: '30+', stat1_label: 'أمراض', stat2_value: '94%', stat2_label: 'الحساسية', stat3_value: '<60s', stat3_label: 'وقت التحليل', cta_title: 'مستعد لتحسين سير عمل التصوير المقطعي للصدر؟', cta_subtitle: 'اكتشف العقيدات الرئوية والنتائج الحرجة بشكل أسرع.' },
    ct_brain: { badge: 'التصوير المقطعي للدماغ بالذكاء الاصطناعي', title: 'تحليل شامل للتصوير المقطعي للدماغ', subtitle: 'كشف سريع للنزيف داخل الجمجمة والسكتة الدماغية وإصابات الدماغ.', stat1_value: '25+', stat1_label: 'أمراض', stat2_value: '96%', stat2_label: 'الحساسية', stat3_value: '<45s', stat3_label: 'وقت التحليل', cta_title: 'مستعد لتسريع سير عمل التصوير العصبي؟', cta_subtitle: 'اكتشف نتائج الدماغ الحرجة في أقل من 45 ثانية.' },
    mammo: { badge: 'تصوير الثدي بالذكاء الاصطناعي', title: 'تحليل متقدم لتصوير الثدي', subtitle: 'فحص سرطان الثدي بمساعدة الذكاء الاصطناعي مع تصنيف BI-RADS.', cta_title: 'حسّن برنامج تصوير الثدي الخاص بك' },
    mri: { badge: 'جناح الرنين المغناطيسي بالذكاء الاصطناعي', title: 'تحليل شامل للرنين المغناطيسي', subtitle: 'تحليل متعدد التسلسلات للدماغ والعمود الفقري والعضلات والعظام.', cta_title: 'حوّل سير عمل الرنين المغناطيسي' },
    msk: { badge: 'أشعة العضلات والعظام بالذكاء الاصطناعي', title: 'تحليل أشعة العضلات والعظام', subtitle: 'كشف الكسور وتحليل تشوهات العظام بالذكاء الاصطناعي.', cta_title: 'قلل الكسور المفقودة' },
    dental: { badge: 'طب الأسنان بالذكاء الاصطناعي', title: 'تحليل شامل لتصوير الأسنان', subtitle: 'تحليل بالذكاء الاصطناعي للتصوير البانورامي وحول الذروة و CBCT.', cta_title: 'ارتقِ بعيادة الأسنان الخاصة بك' },
    ultrasound: { badge: 'الموجات فوق الصوتية بالذكاء الاصطناعي', title: 'تحليل الموجات فوق الصوتية', subtitle: 'تحليل بالذكاء الاصطناعي للموجات فوق الصوتية البطنية والتوليدية والوعائية.', cta_title: 'حسّن ممارسة الموجات فوق الصوتية' },
    pet: { badge: 'مسح PET بالذكاء الاصطناعي', title: 'تحليل تصوير PET/CT', subtitle: 'تحليل الأورام والتصوير الأيضي بالذكاء الاصطناعي.', cta_title: 'حسّن تصوير الأورام' },
    technology: { badge: 'تقنيتنا', title: 'بنية ذكاء اصطناعي مؤسسية', subtitle: 'مبنية على أسس التعلم العميق المثبتة.' },
    about: { badge: 'من نحن', title: 'تحويل التصوير الطبي بالذكاء الاصطناعي', subtitle: 'نحن نبني مستقبل التصوير التشخيصي.' },
    contact: { badge: 'اتصل بنا', title: 'تواصل معنا', subtitle: 'هل لديك أسئلة؟ يسعدنا أن نسمع منك.', form_submit: 'إرسال الرسالة' },
    pilot: { badge: 'برنامج تجريبي مجاني', title: 'ابدأ التجربة المجانية', subtitle: 'اختبر قوة ScanGuru الكاملة بدون التزام.', form_submit: 'تقديم الطلب' },
    dashboard: { sidebar: { overview: 'نظرة عامة', dashboard: 'لوحة التحكم', studies: 'الدراسات', patients: 'المرضى', settings: 'الإعدادات', logout: 'تسجيل الخروج' }, stats: { critical_findings: 'نتائج حرجة', pending_review: 'في انتظار المراجعة', total_studies: 'إجمالي الدراسات', total_patients: 'إجمالي المرضى' }, status: { critical: 'حرج', urgent: 'عاجل', normal: 'طبيعي', completed: 'مكتمل' } },
    login: { form: { title: 'تسجيل الدخول للبوابة', email_label: 'البريد الإلكتروني', password_label: 'كلمة المرور', sign_in: 'تسجيل الدخول' } },
    patient: { title: 'المرضى', modal: { add_title: 'إضافة مريض جديد', save: 'حفظ', cancel: 'إلغاء' } }
},

// ═══════════════════════════════════════════════════════════════════════════════════════
// PORTUGUESE - Português
// ═══════════════════════════════════════════════════════════════════════════════════════
pt: {
    brand: { name: 'ScanGuru' },
    nav: { platform: 'Plataforma', modalities: 'Modalidades', technology: 'Tecnologia', about: 'Sobre', contact: 'Contacto', try_free: 'Experimentar Grátis', apply_pilot: 'Registo Gratuito', login: 'Entrar' },
    home: { badge: 'Plano Gratuito Disponível', title: 'A Plataforma Completa de IA para Imagem Médica', subtitle: 'IA de fusão multimodal analisa 50+ patologias em 5 modalidades.', cta_pilot: 'Registo Gratuito', cta_try: 'Experimentar Grátis' },
    trust_bar: { hipaa: 'Conforme HIPAA', gdpr: 'Pronto para RGPD', dicom: 'Compatível DICOM' },
    modalities_section: { badge: 'Cobertura Abrangente', title: 'Uma Plataforma, Todas as Modalidades', view_all: 'Ver Todas as Modalidades', cxr_title: 'Radiografia Torácica', ct_title: 'Imagem CT', mammo_title: 'Mamografia', mri_title: 'Suite MRI', msk_title: 'Radiografia MSK', dental_title: 'Dentário', ultrasound_title: 'Ultrassom', pet_title: 'PET Scan' },
    features: { badge: 'Porquê ScanGuru', title: 'Construído para Excelência Clínica' },
    cta: { badge: 'Comece Hoje', title: 'Pronto para Transformar o Seu Fluxo de Trabalho?', btn_try: 'Experimentar Grátis' },
    common: { loading: 'A carregar...', save: 'Guardar', cancel: 'Cancelar', download: 'Transferir', search: 'Pesquisar', next: 'Seguinte', back: 'Voltar' },
    form: { name: 'Nome Completo', age: 'Idade', sex_male: 'Masculino', sex_female: 'Feminino', submit: 'Enviar' },
    results: { critical: 'Crítico', normal: 'Normal' },
    cxr: { badge: 'IA Radiografia Torácica', title: 'Análise Completa de Radiografia Torácica', cta_title: 'Pronto para Melhorar o Seu Fluxo de Trabalho?' },
    ct_chest: { badge: 'IA CT Torácico', title: 'Análise Completa de CT Torácico' },
    ct_brain: { badge: 'IA CT Cerebral', title: 'Análise Completa de CT Cerebral' },
    mammo: { badge: 'IA Mamografia', title: 'Análise Avançada de Mamografia' },
    mri: { badge: 'IA Suite MRI', title: 'Análise Completa de MRI' },
    msk: { badge: 'IA Radiografia MSK', title: 'Análise de Radiografia Musculoesquelética' },
    dental: { badge: 'IA Dentário', title: 'Análise Completa de Imagem Dentária' },
    ultrasound: { badge: 'IA Ultrassom', title: 'Análise de Imagem de Ultrassom' },
    pet: { badge: 'IA PET Scan', title: 'Análise de Imagem PET/CT' },
    technology: { badge: 'Nossa Tecnologia', title: 'Arquitetura de IA de Nível Empresarial' },
    about: { badge: 'Sobre Nós', title: 'Transformando a Imagem Médica com IA' },
    contact: { badge: 'Contacte-nos', title: 'Entre em Contacto' },
    pilot: { badge: 'Programa Piloto Gratuito', title: 'Inicie o Seu Piloto Gratuito' },
    dashboard: { sidebar: { dashboard: 'Painel', studies: 'Estudos', patients: 'Pacientes', settings: 'Definições', logout: 'Terminar Sessão' }, status: { critical: 'Crítico', normal: 'Normal', completed: 'Concluído' } },
    login: { form: { title: 'Entrar no Portal', sign_in: 'Entrar' } },
    patient: { title: 'Pacientes', modal: { add_title: 'Adicionar Novo Paciente', save: 'Guardar', cancel: 'Cancelar' } }
},

// Portuguese Brazil
'pt-BR': {
    brand: { name: 'ScanGuru' },
    nav: { platform: 'Plataforma', modalities: 'Modalidades', technology: 'Tecnologia', about: 'Sobre', contact: 'Contato', try_free: 'Teste Grátis', apply_pilot: 'Cadastro Gratuito', login: 'Entrar' },
    home: { badge: 'Plano Gratuito Disponível', title: 'A Plataforma Completa de IA para Imagem Médica', subtitle: 'IA de fusão multimodal analisa 50+ patologias em 5 modalidades.', cta_pilot: 'Cadastro Gratuito', cta_try: 'Teste Grátis' },
    trust_bar: { hipaa: 'Compatível com HIPAA', gdpr: 'Pronto para LGPD', dicom: 'Compatível com DICOM' },
    modalities_section: { badge: 'Cobertura Abrangente', title: 'Uma Plataforma, Todas as Modalidades', cxr_title: 'Raio-X de Tórax', ct_title: 'Imagem de TC', mammo_title: 'Mamografia', mri_title: 'Suite de RM', msk_title: 'Raio-X MSK', dental_title: 'Odontológico', ultrasound_title: 'Ultrassom', pet_title: 'PET Scan' },
    features: { badge: 'Por Que ScanGuru', title: 'Construído para Excelência Clínica' },
    cta: { badge: 'Comece Hoje', title: 'Pronto para Transformar Seu Fluxo de Trabalho?', btn_try: 'Teste Grátis' },
    common: { loading: 'Carregando...', save: 'Salvar', cancel: 'Cancelar', download: 'Baixar', search: 'Buscar', next: 'Próximo', back: 'Voltar' },
    form: { name: 'Nome Completo', age: 'Idade', sex_male: 'Masculino', sex_female: 'Feminino', submit: 'Enviar' },
    results: { critical: 'Crítico', normal: 'Normal' },
    cxr: { badge: 'IA Raio-X de Tórax', title: 'Análise Completa de Raio-X de Tórax' },
    ct_chest: { badge: 'IA TC de Tórax', title: 'Análise Completa de TC de Tórax' },
    ct_brain: { badge: 'IA TC de Crânio', title: 'Análise Completa de TC de Crânio' },
    dashboard: { sidebar: { dashboard: 'Painel', studies: 'Exames', patients: 'Pacientes', settings: 'Configurações', logout: 'Sair' }, status: { critical: 'Crítico', normal: 'Normal', completed: 'Concluído' } },
    login: { form: { title: 'Entrar no Portal', sign_in: 'Entrar' } },
    patient: { title: 'Pacientes', modal: { add_title: 'Adicionar Novo Paciente', save: 'Salvar', cancel: 'Cancelar' } }
},

// ═══════════════════════════════════════════════════════════════════════════════════════
// REMAINING LANGUAGES - Essential Keys with Full Page Coverage
// ═══════════════════════════════════════════════════════════════════════════════════════

// Japanese - 日本語
ja: {
    nav: { platform: 'プラットフォーム', modalities: 'モダリティ', technology: 'テクノロジー', about: '会社概要', contact: 'お問い合わせ', try_free: '無料で試す', apply_pilot: '無料登録', login: 'ログイン' },
    home: { badge: '無料プランあり', title: '医療画像のための完全なAIプラットフォーム', subtitle: 'マルチモーダル融合AIが5つのモダリティで50以上の病理を分析。', cta_pilot: '無料登録', cta_try: '無料で試す' },
    trust_bar: { title: '医療リーダーから信頼されています', hipaa: 'HIPAA準拠', gdpr: 'GDPR対応' },
    modalities_section: { badge: '包括的なカバレッジ', title: '1つのプラットフォーム、すべてのモダリティ', view_all: 'すべてのモダリティを見る', cxr_title: '胸部X線', ct_title: 'CT画像', mammo_title: 'マンモグラフィー', mri_title: 'MRIスイート', msk_title: 'MSK X線', dental_title: '歯科', ultrasound_title: '超音波', pet_title: 'PETスキャン' },
    features: { badge: 'なぜScanGuruか', title: '臨床的卓越性のために構築', f1_title: 'マルチモデルアンサンブル', f2_title: 'リアルタイム分析', f3_title: 'シームレスな統合', f4_title: '監査証跡' },
    cta: { badge: '今すぐ始める', title: '画像ワークフローを変革する準備はできていますか？', btn_try: '無料で試す', btn_pilot: '無料登録' },
    footer: { copyright: '© 2026 ScanGuru. All rights reserved.' },
    common: { loading: '読み込み中...', save: '保存', cancel: 'キャンセル', download: 'ダウンロード', search: '検索', next: '次へ', back: '戻る' },
    cxr: { badge: '胸部X線AI', title: '包括的な胸部X線分析', cta_title: '胸部X線ワークフローを強化する準備はできていますか？' },
    ct_chest: { badge: 'CT胸部AI', title: '包括的なCT胸部分析' },
    ct_brain: { badge: 'CT脳AI', title: '包括的なCT脳分析' },
    mammo: { badge: 'マンモグラフィーAI', title: '高度なマンモグラフィー分析' },
    mri: { badge: 'MRIスイートAI', title: '包括的なMRI分析' },
    msk: { badge: 'MSK X線AI', title: '筋骨格系X線分析' },
    dental: { badge: '歯科AI', title: '包括的な歯科画像分析' },
    ultrasound: { badge: '超音波AI', title: '超音波画像分析' },
    pet: { badge: 'PETスキャンAI', title: 'PET/CT画像分析' },
    technology: { badge: '当社の技術', title: 'エンタープライズグレードAIアーキテクチャ' },
    about: { badge: '会社概要', title: 'AIで医療画像を変革' },
    contact: { badge: 'お問い合わせ', title: 'ご連絡ください' },
    pilot: { badge: '無料パイロットプログラム', title: '無料パイロットを開始' },
    dashboard: { sidebar: { dashboard: 'ダッシュボード', studies: '検査', patients: '患者', settings: '設定', logout: 'ログアウト' }, status: { critical: '重大', normal: '正常' } },
    login: { form: { title: 'ポータルにサインイン', sign_in: 'サインイン' } },
    patient: { title: '患者', modal: { add_title: '新しい患者を追加', save: '保存', cancel: 'キャンセル' } }
},

// Korean - 한국어
ko: {
    nav: { platform: '플랫폼', modalities: '모달리티', technology: '기술', about: '회사 소개', contact: '연락처', try_free: '무료 체험', apply_pilot: '무료 등록', login: '로그인' },
    home: { badge: '무료 플랜 이용 가능', title: '의료 영상을 위한 완전한 AI 플랫폼', subtitle: '멀티모달 융합 AI가 5개 모달리티에서 50개 이상의 병리를 분석합니다.', cta_pilot: '무료 등록', cta_try: '무료 체험' },
    trust_bar: { title: '의료 리더들의 신뢰', hipaa: 'HIPAA 준수', gdpr: 'GDPR 준비' },
    modalities_section: { badge: '포괄적인 커버리지', title: '하나의 플랫폼, 모든 모달리티', view_all: '모든 모달리티 보기', cxr_title: '흉부 X선', ct_title: 'CT 영상', mammo_title: '유방촬영술', mri_title: 'MRI 스위트', msk_title: 'MSK X선', dental_title: '치과', ultrasound_title: '초음파', pet_title: 'PET 스캔' },
    features: { badge: 'ScanGuru를 선택하는 이유', title: '임상 우수성을 위해 구축', f1_title: '멀티모델 앙상블', f2_title: '실시간 분석', f3_title: '원활한 통합', f4_title: '감사 추적' },
    cta: { badge: '오늘 시작하세요', title: '영상 워크플로우를 혁신할 준비가 되셨나요?', btn_try: '무료 체험', btn_pilot: '무료 등록' },
    common: { loading: '로딩 중...', save: '저장', cancel: '취소', download: '다운로드', search: '검색', next: '다음', back: '뒤로' },
    cxr: { badge: '흉부 X선 AI', title: '포괄적인 흉부 X선 분석', cta_title: '흉부 X선 워크플로우를 개선할 준비가 되셨나요?' },
    ct_chest: { badge: 'CT 흉부 AI', title: '포괄적인 CT 흉부 분석' },
    ct_brain: { badge: 'CT 뇌 AI', title: '포괄적인 CT 뇌 분석' },
    mammo: { badge: '유방촬영 AI', title: '고급 유방촬영 분석' },
    mri: { badge: 'MRI 스위트 AI', title: '포괄적인 MRI 분석' },
    msk: { badge: 'MSK X선 AI', title: '근골격계 X선 분석' },
    dental: { badge: '치과 AI', title: '포괄적인 치과 영상 분석' },
    ultrasound: { badge: '초음파 AI', title: '초음파 영상 분석' },
    pet: { badge: 'PET 스캔 AI', title: 'PET/CT 영상 분석' },
    technology: { badge: '우리의 기술', title: '엔터프라이즈급 AI 아키텍처' },
    about: { badge: '회사 소개', title: 'AI로 의료 영상 혁신' },
    contact: { badge: '연락처', title: '연락하기' },
    pilot: { badge: '무료 파일럿 프로그램', title: '무료 파일럿 시작' },
    dashboard: { sidebar: { dashboard: '대시보드', studies: '검사', patients: '환자', settings: '설정', logout: '로그아웃' }, status: { critical: '위험', normal: '정상' } },
    login: { form: { title: '포털 로그인', sign_in: '로그인' } },
    patient: { title: '환자', modal: { add_title: '새 환자 추가', save: '저장', cancel: '취소' } }
},

// Italian - Italiano
it: {
    nav: { platform: 'Piattaforma', modalities: 'Modalità', technology: 'Tecnologia', about: 'Chi Siamo', contact: 'Contatti', try_free: 'Prova Gratis', apply_pilot: 'Registrati Gratis', login: 'Accedi' },
    home: { badge: 'Piano Gratuito Disponibile', title: 'La Piattaforma AI Completa per l\'Imaging Medico', subtitle: 'IA a fusione multimodale analizza 50+ patologie in 5 modalità.', cta_pilot: 'Registrati Gratis', cta_try: 'Prova Gratis' },
    trust_bar: { title: 'Affidabile dai Leader Sanitari', hipaa: 'Conforme HIPAA', gdpr: 'Pronto GDPR' },
    modalities_section: { badge: 'Copertura Completa', title: 'Una Piattaforma, Ogni Modalità', view_all: 'Vedi Tutte le Modalità', cxr_title: 'Radiografia Toracica', ct_title: 'Imaging CT', mammo_title: 'Mammografia', mri_title: 'Suite MRI', msk_title: 'Radiografia MSK', dental_title: 'Dentale', ultrasound_title: 'Ecografia', pet_title: 'PET Scan' },
    features: { badge: 'Perché ScanGuru', title: 'Costruito per l\'Eccellenza Clinica', f1_title: 'Ensemble Multi-Modello', f2_title: 'Analisi in Tempo Reale', f3_title: 'Integrazione Senza Soluzione di Continuità', f4_title: 'Traccia di Audit' },
    cta: { badge: 'Inizia Oggi', title: 'Pronto a Trasformare il Tuo Workflow di Imaging?', btn_try: 'Prova Gratis', btn_pilot: 'Registrati Gratis' },
    common: { loading: 'Caricamento...', save: 'Salva', cancel: 'Annulla', download: 'Scarica', search: 'Cerca', next: 'Avanti', back: 'Indietro' },
    cxr: { badge: 'IA Radiografia Toracica', title: 'Analisi Completa della Radiografia Toracica', cta_title: 'Pronto a Migliorare il Tuo Workflow?' },
    ct_chest: { badge: 'IA CT Torace', title: 'Analisi Completa CT Torace' },
    ct_brain: { badge: 'IA CT Cerebrale', title: 'Analisi Completa CT Cerebrale' },
    mammo: { badge: 'IA Mammografia', title: 'Analisi Avanzata Mammografia' },
    mri: { badge: 'IA Suite MRI', title: 'Analisi Completa MRI' },
    msk: { badge: 'IA Radiografia MSK', title: 'Analisi Radiografia Muscoloscheletrica' },
    dental: { badge: 'IA Dentale', title: 'Analisi Completa Imaging Dentale' },
    ultrasound: { badge: 'IA Ecografia', title: 'Analisi Imaging Ecografico' },
    pet: { badge: 'IA PET Scan', title: 'Analisi Imaging PET/CT' },
    technology: { badge: 'La Nostra Tecnologia', title: 'Architettura AI Enterprise-Grade' },
    about: { badge: 'Chi Siamo', title: 'Trasformare l\'Imaging Medico con l\'IA' },
    contact: { badge: 'Contattaci', title: 'Mettiti in Contatto' },
    pilot: { badge: 'Programma Pilota Gratuito', title: 'Inizia il Tuo Pilota Gratuito' },
    dashboard: { sidebar: { dashboard: 'Dashboard', studies: 'Studi', patients: 'Pazienti', settings: 'Impostazioni', logout: 'Esci' }, status: { critical: 'Critico', normal: 'Normale' } },
    login: { form: { title: 'Accedi al Portale', sign_in: 'Accedi' } },
    patient: { title: 'Pazienti', modal: { add_title: 'Aggiungi Nuovo Paziente', save: 'Salva', cancel: 'Annulla' } }
},

// Turkish - Türkçe
tr: {
    nav: { platform: 'Platform', modalities: 'Modaliteler', technology: 'Teknoloji', about: 'Hakkımızda', contact: 'İletişim', try_free: 'Ücretsiz Dene', apply_pilot: 'Ücretsiz Kaydol', login: 'Giriş' },
    home: { badge: 'Ücretsiz Plan Mevcut', title: 'Tıbbi Görüntüleme için Eksiksiz AI Platformu', subtitle: 'Çok modlu füzyon AI 5 modalitede 50+ patolojiyi analiz eder.', cta_pilot: 'Ücretsiz Kaydol', cta_try: 'Ücretsiz Dene' },
    trust_bar: { title: 'Sağlık Liderleri Tarafından Güvenilir', hipaa: 'HIPAA Uyumlu', gdpr: 'KVKK Hazır' },
    modalities_section: { badge: 'Kapsamlı Kapsam', title: 'Tek Platform, Her Modalite', view_all: 'Tüm Modaliteleri Gör', cxr_title: 'Göğüs Röntgeni', ct_title: 'BT Görüntüleme', mammo_title: 'Mamografi', mri_title: 'MR Paketi', msk_title: 'MSK Röntgen', dental_title: 'Diş', ultrasound_title: 'Ultrason', pet_title: 'PET Tarama' },
    features: { badge: 'Neden ScanGuru', title: 'Klinik Mükemmellik için Tasarlandı', f1_title: 'Çoklu Model Topluluğu', f2_title: 'Gerçek Zamanlı Analiz', f3_title: 'Sorunsuz Entegrasyon', f4_title: 'Denetim İzi' },
    cta: { badge: 'Bugün Başla', title: 'Görüntüleme İş Akışınızı Dönüştürmeye Hazır mısınız?', btn_try: 'Ücretsiz Dene', btn_pilot: 'Ücretsiz Kaydol' },
    common: { loading: 'Yükleniyor...', save: 'Kaydet', cancel: 'İptal', download: 'İndir', search: 'Ara', next: 'İleri', back: 'Geri' },
    cxr: { badge: 'Göğüs Röntgeni AI', title: 'Kapsamlı Göğüs Röntgeni Analizi', cta_title: 'İş Akışınızı Geliştirmeye Hazır mısınız?' },
    ct_chest: { badge: 'BT Göğüs AI', title: 'Kapsamlı BT Göğüs Analizi' },
    ct_brain: { badge: 'BT Beyin AI', title: 'Kapsamlı BT Beyin Analizi' },
    mammo: { badge: 'Mamografi AI', title: 'Gelişmiş Mamografi Analizi' },
    mri: { badge: 'MR Paketi AI', title: 'Kapsamlı MR Analizi' },
    msk: { badge: 'MSK Röntgen AI', title: 'Kas-İskelet Röntgen Analizi' },
    dental: { badge: 'Diş AI', title: 'Kapsamlı Diş Görüntüleme Analizi' },
    ultrasound: { badge: 'Ultrason AI', title: 'Ultrason Görüntüleme Analizi' },
    pet: { badge: 'PET Tarama AI', title: 'PET/BT Görüntüleme Analizi' },
    technology: { badge: 'Teknolojimiz', title: 'Kurumsal Düzey AI Mimarisi' },
    about: { badge: 'Hakkımızda', title: 'AI ile Tıbbi Görüntülemeyi Dönüştürüyoruz' },
    contact: { badge: 'İletişim', title: 'İletişime Geçin' },
    pilot: { badge: 'Ücretsiz Pilot Program', title: 'Ücretsiz Pilotunuzu Başlatın' },
    dashboard: { sidebar: { dashboard: 'Panel', studies: 'Çalışmalar', patients: 'Hastalar', settings: 'Ayarlar', logout: 'Çıkış' }, status: { critical: 'Kritik', normal: 'Normal' } },
    login: { form: { title: 'Portala Giriş', sign_in: 'Giriş Yap' } },
    patient: { title: 'Hastalar', modal: { add_title: 'Yeni Hasta Ekle', save: 'Kaydet', cancel: 'İptal' } }
},

// Russian - Русский
ru: {
    nav: { platform: 'Платформа', modalities: 'Модальности', technology: 'Технология', about: 'О нас', contact: 'Контакты', try_free: 'Попробовать бесплатно', apply_pilot: 'Бесплатная регистрация', login: 'Войти' },
    home: { badge: 'Бесплатный план доступен', title: 'Полная AI-платформа для медицинской визуализации', subtitle: 'Мультимодальный ИИ анализирует 50+ патологий в 5 модальностях.', cta_pilot: 'Бесплатная регистрация', cta_try: 'Попробовать бесплатно' },
    trust_bar: { title: 'Доверие лидеров здравоохранения', hipaa: 'Соответствие HIPAA', gdpr: 'Готовность к GDPR' },
    modalities_section: { badge: 'Полный охват', title: 'Одна платформа, все модальности', view_all: 'Все модальности', cxr_title: 'Рентген грудной клетки', ct_title: 'КТ-визуализация', mammo_title: 'Маммография', mri_title: 'МРТ', msk_title: 'МСК рентген', dental_title: 'Стоматология', ultrasound_title: 'УЗИ', pet_title: 'ПЭТ-сканирование' },
    features: { badge: 'Почему ScanGuru', title: 'Создан для клинического совершенства', f1_title: 'Мультимодельный ансамбль', f2_title: 'Анализ в реальном времени', f3_title: 'Бесшовная интеграция', f4_title: 'Аудиторский след' },
    cta: { badge: 'Начните сегодня', title: 'Готовы трансформировать рабочий процесс?', btn_try: 'Попробовать бесплатно', btn_pilot: 'Бесплатная регистрация' },
    common: { loading: 'Загрузка...', save: 'Сохранить', cancel: 'Отмена', download: 'Скачать', search: 'Поиск', next: 'Далее', back: 'Назад' },
    cxr: { badge: 'ИИ рентген грудной клетки', title: 'Комплексный анализ рентгена грудной клетки', cta_title: 'Готовы улучшить рабочий процесс?' },
    ct_chest: { badge: 'ИИ КТ грудной клетки', title: 'Комплексный анализ КТ грудной клетки' },
    ct_brain: { badge: 'ИИ КТ головного мозга', title: 'Комплексный анализ КТ головного мозга' },
    mammo: { badge: 'ИИ маммография', title: 'Расширенный анализ маммографии' },
    mri: { badge: 'ИИ МРТ', title: 'Комплексный анализ МРТ' },
    msk: { badge: 'ИИ МСК рентген', title: 'Анализ костно-мышечного рентгена' },
    dental: { badge: 'ИИ стоматология', title: 'Комплексный анализ стоматологических снимков' },
    ultrasound: { badge: 'ИИ УЗИ', title: 'Анализ УЗИ' },
    pet: { badge: 'ИИ ПЭТ-сканирование', title: 'Анализ ПЭТ/КТ' },
    technology: { badge: 'Наша технология', title: 'Архитектура ИИ корпоративного уровня' },
    about: { badge: 'О нас', title: 'Трансформация медицинской визуализации с ИИ' },
    contact: { badge: 'Контакты', title: 'Свяжитесь с нами' },
    pilot: { badge: 'Бесплатная пилотная программа', title: 'Начните бесплатный пилот' },
    dashboard: { sidebar: { dashboard: 'Панель', studies: 'Исследования', patients: 'Пациенты', settings: 'Настройки', logout: 'Выйти' }, status: { critical: 'Критический', normal: 'Нормальный' } },
    login: { form: { title: 'Вход в портал', sign_in: 'Войти' } },
    patient: { title: 'Пациенты', modal: { add_title: 'Добавить пациента', save: 'Сохранить', cancel: 'Отмена' } }
},

// Vietnamese - Tiếng Việt
vi: {
    nav: { platform: 'Nền tảng', modalities: 'Phương thức', technology: 'Công nghệ', about: 'Về chúng tôi', contact: 'Liên hệ', try_free: 'Dùng thử miễn phí', apply_pilot: 'Đăng ký miễn phí', login: 'Đăng nhập' },
    home: { badge: 'Gói miễn phí có sẵn', title: 'Nền tảng AI hoàn chỉnh cho Hình ảnh Y tế', subtitle: 'AI đa phương thức phân tích hơn 50 bệnh lý trên 5 phương thức.', cta_pilot: 'Đăng ký miễn phí', cta_try: 'Dùng thử miễn phí' },
    trust_bar: { title: 'Được tin tưởng bởi các nhà lãnh đạo y tế' },
    modalities_section: { badge: 'Bao phủ toàn diện', title: 'Một nền tảng, mọi phương thức', view_all: 'Xem tất cả', cxr_title: 'X-quang ngực', ct_title: 'CT', mammo_title: 'Nhũ ảnh', mri_title: 'MRI', msk_title: 'X-quang MSK', dental_title: 'Nha khoa', ultrasound_title: 'Siêu âm', pet_title: 'PET Scan' },
    features: { badge: 'Tại sao chọn ScanGuru', title: 'Xây dựng cho sự xuất sắc lâm sàng' },
    cta: { badge: 'Bắt đầu ngay', title: 'Sẵn sàng chuyển đổi quy trình làm việc?', btn_try: 'Dùng thử miễn phí' },
    common: { loading: 'Đang tải...', save: 'Lưu', cancel: 'Hủy', download: 'Tải xuống', search: 'Tìm kiếm', next: 'Tiếp', back: 'Quay lại' },
    cxr: { badge: 'AI X-quang ngực', title: 'Phân tích X-quang ngực toàn diện' },
    ct_chest: { badge: 'AI CT ngực', title: 'Phân tích CT ngực toàn diện' },
    ct_brain: { badge: 'AI CT não', title: 'Phân tích CT não toàn diện' },
    mammo: { badge: 'AI Nhũ ảnh', title: 'Phân tích nhũ ảnh nâng cao' },
    mri: { badge: 'AI MRI', title: 'Phân tích MRI toàn diện' },
    msk: { badge: 'AI X-quang MSK', title: 'Phân tích X-quang cơ xương' },
    dental: { badge: 'AI Nha khoa', title: 'Phân tích hình ảnh nha khoa' },
    ultrasound: { badge: 'AI Siêu âm', title: 'Phân tích hình ảnh siêu âm' },
    pet: { badge: 'AI PET Scan', title: 'Phân tích hình ảnh PET/CT' },
    technology: { badge: 'Công nghệ', title: 'Kiến trúc AI cấp doanh nghiệp' },
    about: { badge: 'Về chúng tôi', title: 'Chuyển đổi hình ảnh y tế với AI' },
    contact: { badge: 'Liên hệ', title: 'Liên hệ với chúng tôi' },
    pilot: { badge: 'Chương trình thí điểm miễn phí', title: 'Bắt đầu thí điểm miễn phí' },
    dashboard: { sidebar: { dashboard: 'Bảng điều khiển', studies: 'Nghiên cứu', patients: 'Bệnh nhân', settings: 'Cài đặt', logout: 'Đăng xuất' }, status: { critical: 'Nguy cấp', normal: 'Bình thường' } },
    login: { form: { title: 'Đăng nhập Portal', sign_in: 'Đăng nhập' } },
    patient: { title: 'Bệnh nhân', modal: { add_title: 'Thêm bệnh nhân mới', save: 'Lưu', cancel: 'Hủy' } }
},

// Indonesian - Bahasa Indonesia
id: {
    nav: { platform: 'Platform', modalities: 'Modalitas', technology: 'Teknologi', about: 'Tentang Kami', contact: 'Kontak', try_free: 'Coba Gratis', apply_pilot: 'Daftar Gratis', login: 'Masuk' },
    home: { badge: 'Paket Gratis Tersedia', title: 'Platform AI Lengkap untuk Pencitraan Medis', subtitle: 'AI fusi multimodal menganalisis 50+ patologi dalam 5 modalitas.', cta_pilot: 'Daftar Gratis', cta_try: 'Coba Gratis' },
    trust_bar: { title: 'Dipercaya oleh Pemimpin Kesehatan' },
    modalities_section: { badge: 'Cakupan Komprehensif', title: 'Satu Platform, Semua Modalitas', view_all: 'Lihat Semua', cxr_title: 'X-Ray Dada', ct_title: 'CT Imaging', mammo_title: 'Mamografi', mri_title: 'MRI Suite', msk_title: 'MSK X-Ray', dental_title: 'Gigi', ultrasound_title: 'Ultrasound', pet_title: 'PET Scan' },
    features: { badge: 'Mengapa ScanGuru', title: 'Dibangun untuk Keunggulan Klinis' },
    cta: { badge: 'Mulai Hari Ini', title: 'Siap Mengubah Alur Kerja Anda?', btn_try: 'Coba Gratis' },
    common: { loading: 'Memuat...', save: 'Simpan', cancel: 'Batal', download: 'Unduh', search: 'Cari', next: 'Lanjut', back: 'Kembali' },
    cxr: { badge: 'AI X-Ray Dada', title: 'Analisis X-Ray Dada Komprehensif' },
    ct_chest: { badge: 'AI CT Dada', title: 'Analisis CT Dada Komprehensif' },
    ct_brain: { badge: 'AI CT Otak', title: 'Analisis CT Otak Komprehensif' },
    mammo: { badge: 'AI Mamografi', title: 'Analisis Mamografi Lanjutan' },
    mri: { badge: 'AI MRI Suite', title: 'Analisis MRI Komprehensif' },
    msk: { badge: 'AI MSK X-Ray', title: 'Analisis X-Ray Muskuloskeletal' },
    dental: { badge: 'AI Gigi', title: 'Analisis Pencitraan Gigi Komprehensif' },
    ultrasound: { badge: 'AI Ultrasound', title: 'Analisis Pencitraan Ultrasound' },
    pet: { badge: 'AI PET Scan', title: 'Analisis Pencitraan PET/CT' },
    technology: { badge: 'Teknologi Kami', title: 'Arsitektur AI Tingkat Perusahaan' },
    about: { badge: 'Tentang Kami', title: 'Mengubah Pencitraan Medis dengan AI' },
    contact: { badge: 'Hubungi Kami', title: 'Hubungi Kami' },
    pilot: { badge: 'Program Pilot Gratis', title: 'Mulai Pilot Gratis Anda' },
    dashboard: { sidebar: { dashboard: 'Dasbor', studies: 'Studi', patients: 'Pasien', settings: 'Pengaturan', logout: 'Keluar' }, status: { critical: 'Kritis', normal: 'Normal' } },
    login: { form: { title: 'Masuk ke Portal', sign_in: 'Masuk' } },
    patient: { title: 'Pasien', modal: { add_title: 'Tambah Pasien Baru', save: 'Simpan', cancel: 'Batal' } }
},

// Thai - ไทย
th: {
    nav: { platform: 'แพลตฟอร์ม', modalities: 'โมดาลิตี้', technology: 'เทคโนโลยี', about: 'เกี่ยวกับเรา', contact: 'ติดต่อ', try_free: 'ทดลองฟรี', apply_pilot: 'ลงทะเบียนฟรี', login: 'เข้าสู่ระบบ' },
    home: { badge: 'แผนฟรีพร้อมใช้งาน', title: 'แพลตฟอร์ม AI ครบวงจรสำหรับการถ่ายภาพทางการแพทย์', subtitle: 'AI แบบหลายโหมดวิเคราะห์โรคมากกว่า 50 ชนิดใน 5 โมดาลิตี้', cta_pilot: 'ลงทะเบียนฟรี', cta_try: 'ทดลองฟรี' },
    modalities_section: { badge: 'ครอบคลุมทั้งหมด', title: 'แพลตฟอร์มเดียว ทุกโมดาลิตี้', cxr_title: 'เอกซเรย์ทรวงอก', ct_title: 'CT', mammo_title: 'แมมโมแกรม', mri_title: 'MRI', dental_title: 'ทันตกรรม', ultrasound_title: 'อัลตราซาวด์', pet_title: 'PET Scan' },
    common: { loading: 'กำลังโหลด...', save: 'บันทึก', cancel: 'ยกเลิก', download: 'ดาวน์โหลด', search: 'ค้นหา', next: 'ถัดไป', back: 'กลับ' },
    cxr: { badge: 'AI เอกซเรย์ทรวงอก', title: 'การวิเคราะห์เอกซเรย์ทรวงอกที่ครอบคลุม' },
    ct_chest: { badge: 'AI CT ทรวงอก', title: 'การวิเคราะห์ CT ทรวงอกที่ครอบคลุม' },
    ct_brain: { badge: 'AI CT สมอง', title: 'การวิเคราะห์ CT สมองที่ครอบคลุม' },
    mammo: { badge: 'AI แมมโมแกรม', title: 'การวิเคราะห์แมมโมแกรมขั้นสูง' },
    mri: { badge: 'AI MRI', title: 'การวิเคราะห์ MRI ที่ครอบคลุม' },
    dental: { badge: 'AI ทันตกรรม', title: 'การวิเคราะห์ภาพทันตกรรมที่ครอบคลุม' },
    dashboard: { sidebar: { dashboard: 'แดชบอร์ด', studies: 'การศึกษา', patients: 'ผู้ป่วย', settings: 'ตั้งค่า', logout: 'ออกจากระบบ' }, status: { critical: 'วิกฤต', normal: 'ปกติ' } },
    login: { form: { title: 'เข้าสู่ระบบพอร์ทัล', sign_in: 'เข้าสู่ระบบ' } },
    patient: { title: 'ผู้ป่วย', modal: { add_title: 'เพิ่มผู้ป่วยใหม่', save: 'บันทึก', cancel: 'ยกเลิก' } }
},

// Polish - Polski
pl: {
    nav: { platform: 'Platforma', modalities: 'Modalności', technology: 'Technologia', about: 'O nas', contact: 'Kontakt', try_free: 'Wypróbuj za darmo', apply_pilot: 'Zarejestruj się za darmo', login: 'Zaloguj' },
    home: { badge: 'Darmowy plan dostępny', title: 'Kompletna platforma AI dla obrazowania medycznego', subtitle: 'Wielomodalna fuzja AI analizuje ponad 50 patologii w 5 modalnościach.', cta_pilot: 'Zarejestruj się za darmo', cta_try: 'Wypróbuj za darmo' },
    modalities_section: { badge: 'Kompleksowy zasięg', title: 'Jedna platforma, każda modalność', cxr_title: 'RTG klatki piersiowej', ct_title: 'Obrazowanie CT', mammo_title: 'Mammografia', mri_title: 'Pakiet MRI', msk_title: 'RTG MSK', dental_title: 'Stomatologia', ultrasound_title: 'USG', pet_title: 'PET Scan' },
    common: { loading: 'Ładowanie...', save: 'Zapisz', cancel: 'Anuluj', download: 'Pobierz', search: 'Szukaj', next: 'Dalej', back: 'Wstecz' },
    cxr: { badge: 'AI RTG klatki piersiowej', title: 'Kompleksowa analiza RTG klatki piersiowej' },
    ct_chest: { badge: 'AI CT klatki piersiowej', title: 'Kompleksowa analiza CT klatki piersiowej' },
    ct_brain: { badge: 'AI CT mózgu', title: 'Kompleksowa analiza CT mózgu' },
    dashboard: { sidebar: { dashboard: 'Panel', studies: 'Badania', patients: 'Pacjenci', settings: 'Ustawienia', logout: 'Wyloguj' }, status: { critical: 'Krytyczny', normal: 'Normalny' } },
    login: { form: { title: 'Logowanie do portalu', sign_in: 'Zaloguj się' } },
    patient: { title: 'Pacjenci', modal: { add_title: 'Dodaj nowego pacjenta', save: 'Zapisz', cancel: 'Anuluj' } }
},

// Dutch - Nederlands
nl: {
    nav: { platform: 'Platform', modalities: 'Modaliteiten', technology: 'Technologie', about: 'Over ons', contact: 'Contact', try_free: 'Gratis proberen', apply_pilot: 'Gratis registreren', login: 'Inloggen' },
    home: { badge: 'Gratis plan beschikbaar', title: 'Het complete AI-platform voor medische beeldvorming', subtitle: 'Multimodale fusie-AI analyseert 50+ pathologieën in 5 modaliteiten.', cta_pilot: 'Gratis registreren', cta_try: 'Gratis proberen' },
    modalities_section: { badge: 'Uitgebreide dekking', title: 'Eén platform, elke modaliteit', cxr_title: 'Thoraxfoto', ct_title: 'CT-beeldvorming', mammo_title: 'Mammografie', mri_title: 'MRI Suite', dental_title: 'Tandheelkunde', ultrasound_title: 'Echografie', pet_title: 'PET-scan' },
    common: { loading: 'Laden...', save: 'Opslaan', cancel: 'Annuleren', download: 'Downloaden', search: 'Zoeken', next: 'Volgende', back: 'Terug' },
    cxr: { badge: 'AI Thoraxfoto', title: 'Uitgebreide thoraxfoto-analyse' },
    ct_chest: { badge: 'AI CT Thorax', title: 'Uitgebreide CT-thoraxanalyse' },
    ct_brain: { badge: 'AI CT Hersenen', title: 'Uitgebreide CT-hersenanalyse' },
    dashboard: { sidebar: { dashboard: 'Dashboard', studies: 'Onderzoeken', patients: 'Patiënten', settings: 'Instellingen', logout: 'Uitloggen' }, status: { critical: 'Kritiek', normal: 'Normaal' } },
    login: { form: { title: 'Inloggen op portal', sign_in: 'Inloggen' } },
    patient: { title: 'Patiënten', modal: { add_title: 'Nieuwe patiënt toevoegen', save: 'Opslaan', cancel: 'Annuleren' } }
},

// Hebrew - עברית (RTL)
he: {
    nav: { platform: 'פלטפורמה', modalities: 'מודליטיות', technology: 'טכנולוגיה', about: 'אודותינו', contact: 'צור קשר', try_free: 'נסה בחינם', apply_pilot: 'הרשמה חינם', login: 'התחברות' },
    home: { badge: 'תוכנית חינמית זמינה', title: 'פלטפורמת AI מלאה להדמיה רפואית', subtitle: 'AI רב-מודלי מנתח למעלה מ-50 פתולוגיות ב-5 מודליטיות.', cta_pilot: 'הרשמה חינם', cta_try: 'נסה בחינם' },
    modalities_section: { badge: 'כיסוי מקיף', title: 'פלטפורמה אחת, כל מודליטי', cxr_title: 'צילום חזה', ct_title: 'הדמיית CT', mammo_title: 'ממוגרפיה', mri_title: 'MRI', dental_title: 'שיניים', ultrasound_title: 'אולטרסאונד', pet_title: 'PET סריקת' },
    common: { loading: 'טוען...', save: 'שמור', cancel: 'בטל', download: 'הורד', search: 'חפש', next: 'הבא', back: 'חזור' },
    cxr: { badge: 'AI צילום חזה', title: 'ניתוח מקיף של צילום חזה' },
    ct_chest: { badge: 'AI CT חזה', title: 'ניתוח מקיף של CT חזה' },
    ct_brain: { badge: 'AI CT מוח', title: 'ניתוח מקיף של CT מוח' },
    dashboard: { sidebar: { dashboard: 'לוח בקרה', studies: 'בדיקות', patients: 'מטופלים', settings: 'הגדרות', logout: 'התנתק' }, status: { critical: 'קריטי', normal: 'תקין' } },
    login: { form: { title: 'התחברות לפורטל', sign_in: 'התחבר' } },
    patient: { title: 'מטופלים', modal: { add_title: 'הוסף מטופל חדש', save: 'שמור', cancel: 'בטל' } }
},

// Persian/Farsi - فارسی (RTL)
fa: {
    nav: { platform: 'پلتفرم', modalities: 'مودالیتی‌ها', technology: 'فناوری', about: 'درباره ما', contact: 'تماس', try_free: 'رایگان امتحان کنید', apply_pilot: 'ثبت‌نام رایگان', login: 'ورود' },
    home: { badge: 'طرح رایگان موجود است', title: 'پلتفرم کامل هوش مصنوعی برای تصویربرداری پزشکی', subtitle: 'هوش مصنوعی چند وجهی بیش از 50 پاتولوژی را در 5 مودالیتی تحلیل می‌کند.', cta_pilot: 'ثبت‌نام رایگان', cta_try: 'رایگان امتحان کنید' },
    modalities_section: { badge: 'پوشش جامع', title: 'یک پلتفرم، همه مودالیتی‌ها', cxr_title: 'اشعه ایکس قفسه سینه', ct_title: 'تصویربرداری CT', mammo_title: 'ماموگرافی', mri_title: 'MRI', dental_title: 'دندانپزشکی', ultrasound_title: 'اولتراسوند', pet_title: 'اسکن PET' },
    common: { loading: 'در حال بارگذاری...', save: 'ذخیره', cancel: 'لغو', download: 'دانلود', search: 'جستجو', next: 'بعدی', back: 'برگشت' },
    cxr: { badge: 'هوش مصنوعی اشعه ایکس قفسه سینه', title: 'تحلیل جامع اشعه ایکس قفسه سینه' },
    ct_chest: { badge: 'هوش مصنوعی CT قفسه سینه', title: 'تحلیل جامع CT قفسه سینه' },
    ct_brain: { badge: 'هوش مصنوعی CT مغز', title: 'تحلیل جامع CT مغز' },
    dashboard: { sidebar: { dashboard: 'داشبورد', studies: 'مطالعات', patients: 'بیماران', settings: 'تنظیمات', logout: 'خروج' }, status: { critical: 'بحرانی', normal: 'طبیعی' } },
    login: { form: { title: 'ورود به پورتال', sign_in: 'ورود' } },
    patient: { title: 'بیماران', modal: { add_title: 'افزودن بیمار جدید', save: 'ذخیره', cancel: 'لغو' } }
},

// Urdu - اردو (RTL)
ur: {
    nav: { platform: 'پلیٹ فارم', modalities: 'طریقے', technology: 'ٹیکنالوجی', about: 'ہمارے بارے میں', contact: 'رابطہ', try_free: 'مفت آزمائیں', apply_pilot: 'مفت رجسٹر کریں', login: 'لاگ ان' },
    home: { badge: 'مفت پلان دستیاب', title: 'میڈیکل امیجنگ کے لیے مکمل AI پلیٹ فارم', subtitle: 'ملٹی موڈل AI 5 طریقوں میں 50+ پیتھالوجیز کا تجزیہ کرتا ہے۔', cta_pilot: 'مفت رجسٹر کریں', cta_try: 'مفت آزمائیں' },
    modalities_section: { badge: 'جامع کوریج', title: 'ایک پلیٹ فارم، ہر طریقہ', cxr_title: 'سینے کا ایکسرے', ct_title: 'CT امیجنگ', mammo_title: 'میموگرافی', mri_title: 'MRI سویٹ', dental_title: 'دانتوں', ultrasound_title: 'الٹراساؤنڈ', pet_title: 'PET سکین' },
    common: { loading: 'لوڈ ہو رہا ہے...', save: 'محفوظ کریں', cancel: 'منسوخ', download: 'ڈاؤن لوڈ', search: 'تلاش', next: 'اگلا', back: 'واپس' },
    cxr: { badge: 'سینے کا ایکسرے AI', title: 'جامع سینے کا ایکسرے تجزیہ' },
    ct_chest: { badge: 'CT چیسٹ AI', title: 'جامع CT چیسٹ تجزیہ' },
    ct_brain: { badge: 'CT برین AI', title: 'جامع CT برین تجزیہ' },
    dashboard: { sidebar: { dashboard: 'ڈیش بورڈ', studies: 'مطالعات', patients: 'مریض', settings: 'ترتیبات', logout: 'لاگ آؤٹ' }, status: { critical: 'تنقیدی', normal: 'نارمل' } },
    login: { form: { title: 'پورٹل میں سائن ان کریں', sign_in: 'سائن ان' } },
    patient: { title: 'مریض', modal: { add_title: 'نیا مریض شامل کریں', save: 'محفوظ کریں', cancel: 'منسوخ' } }
},

// Bengali - বাংলা
bn: {
    nav: { platform: 'প্ল্যাটফর্ম', modalities: 'মোডালিটি', technology: 'প্রযুক্তি', about: 'আমাদের সম্পর্কে', contact: 'যোগাযোগ', try_free: 'বিনামূল্যে চেষ্টা করুন', apply_pilot: 'বিনামূল্যে নিবন্ধন', login: 'লগইন' },
    home: { badge: 'বিনামূল্যে প্ল্যান উপলব্ধ', title: 'মেডিকেল ইমেজিংয়ের জন্য সম্পূর্ণ AI প্ল্যাটফর্ম', subtitle: 'মাল্টি-মোডাল ফিউশন AI ৮টি মোডালিটিতে ৪০০+ প্যাথলজি বিশ্লেষণ করে।', cta_pilot: 'বিনামূল্যে নিবন্ধন', cta_try: 'বিনামূল্যে চেষ্টা করুন' },
    modalities_section: { badge: 'ব্যাপক কভারেজ', title: 'এক প্ল্যাটফর্ম, প্রতিটি মোডালিটি', cxr_title: 'বুকের এক্স-রে', ct_title: 'CT ইমেজিং', mammo_title: 'ম্যামোগ্রাফি', mri_title: 'MRI স্যুট', dental_title: 'দন্ত', ultrasound_title: 'আল্ট্রাসাউন্ড', pet_title: 'PET স্ক্যান' },
    common: { loading: 'লোড হচ্ছে...', save: 'সংরক্ষণ', cancel: 'বাতিল', download: 'ডাউনলোড', search: 'অনুসন্ধান', next: 'পরবর্তী', back: 'পিছনে' },
    cxr: { badge: 'বুকের এক্স-রে AI', title: 'ব্যাপক বুকের এক্স-রে বিশ্লেষণ' },
    ct_chest: { badge: 'CT চেস্ট AI', title: 'ব্যাপক CT চেস্ট বিশ্লেষণ' },
    ct_brain: { badge: 'CT ব্রেইন AI', title: 'ব্যাপক CT ব্রেইন বিশ্লেষণ' },
    dashboard: { sidebar: { dashboard: 'ড্যাশবোর্ড', studies: 'স্টাডিজ', patients: 'রোগী', settings: 'সেটিংস', logout: 'লগআউট' }, status: { critical: 'জটিল', normal: 'স্বাভাবিক' } },
    login: { form: { title: 'পোর্টালে সাইন ইন', sign_in: 'সাইন ইন' } },
    patient: { title: 'রোগী', modal: { add_title: 'নতুন রোগী যোগ করুন', save: 'সংরক্ষণ', cancel: 'বাতিল' } }
},

// Tamil - தமிழ்
ta: {
    nav: { platform: 'தளம்', modalities: 'முறைமைகள்', technology: 'தொழில்நுட்பம்', about: 'எங்களைப் பற்றி', contact: 'தொடர்பு', try_free: 'இலவசமாக முயற்சிக்கவும்', apply_pilot: 'இலவச பதிவு', login: 'உள்நுழை' },
    home: { badge: 'இலவச திட்டம் கிடைக்கும்', title: 'மருத்துவ இமேஜிங்கிற்கான முழுமையான AI தளம்', subtitle: 'மல்டி-மோடல் ஃபியூஷன் AI 5 முறைமைகளில் 50+ நோய்களை பகுப்பாய்வு செய்கிறது.', cta_pilot: 'இலவச பதிவு', cta_try: 'இலவசமாக முயற்சிக்கவும்' },
    modalities_section: { badge: 'விரிவான கவரேஜ்', title: 'ஒரு தளம், ஒவ்வொரு முறைமையும்', cxr_title: 'மார்பு எக்ஸ்-ரே', ct_title: 'CT இமேஜிங்', mammo_title: 'மேமோகிராபி', mri_title: 'MRI தொகுப்பு', dental_title: 'பல்', ultrasound_title: 'அல்ட்ராசவுண்ட்', pet_title: 'PET ஸ்கேன்' },
    common: { loading: 'ஏற்றுகிறது...', save: 'சேமி', cancel: 'ரத்து', download: 'பதிவிறக்கு', search: 'தேடு', next: 'அடுத்து', back: 'பின்' },
    cxr: { badge: 'மார்பு எக்ஸ்-ரே AI', title: 'விரிவான மார்பு எக்ஸ்-ரே பகுப்பாய்வு' },
    ct_chest: { badge: 'CT மார்பு AI', title: 'விரிவான CT மார்பு பகுப்பாய்வு' },
    ct_brain: { badge: 'CT மூளை AI', title: 'விரிவான CT மூளை பகுப்பாய்வு' },
    dashboard: { sidebar: { dashboard: 'டாஷ்போர்டு', studies: 'ஆய்வுகள்', patients: 'நோயாளிகள்', settings: 'அமைப்புகள்', logout: 'வெளியேறு' }, status: { critical: 'முக்கியமான', normal: 'இயல்பான' } },
    login: { form: { title: 'போர்ட்டலில் உள்நுழை', sign_in: 'உள்நுழை' } },
    patient: { title: 'நோயாளிகள்', modal: { add_title: 'புதிய நோயாளி சேர்', save: 'சேமி', cancel: 'ரத்து' } }
},

// Telugu - తెలుగు
te: {
    nav: { platform: 'ప్లాట్‌ఫారమ్', modalities: 'మోడాలిటీలు', technology: 'సాంకేతికత', about: 'మా గురించి', contact: 'సంప్రదించండి', try_free: 'ఉచితంగా ప్రయత్నించండి', apply_pilot: 'ఉచిత నమోదు', login: 'లాగిన్' },
    home: { badge: 'ఉచిత ప్లాన్ అందుబాటులో ఉంది', title: 'వైద్య ఇమేజింగ్ కోసం పూర్తి AI ప్లాట్‌ఫారమ్', subtitle: 'మల్టీ-మోడల్ ఫ్యూజన్ AI 5 మోడాలిటీలలో 50+ పాథాలజీలను విశ్లేషిస్తుంది.', cta_pilot: 'ఉచిత నమోదు', cta_try: 'ఉచితంగా ప్రయత్నించండి' },
    modalities_section: { badge: 'సమగ్ర కవరేజ్', title: 'ఒక ప్లాట్‌ఫారమ్, ప్రతి మోడాలిటీ', cxr_title: 'ఛాతీ ఎక్స్-రే', ct_title: 'CT ఇమేజింగ్', mammo_title: 'మామోగ్రఫీ', mri_title: 'MRI సూట్', dental_title: 'దంత', ultrasound_title: 'అల్ట్రాసౌండ్', pet_title: 'PET స్కాన్' },
    common: { loading: 'లోడ్ అవుతోంది...', save: 'సేవ్', cancel: 'రద్దు', download: 'డౌన్‌లోడ్', search: 'వెతకండి', next: 'తదుపరి', back: 'వెనుకకు' },
    cxr: { badge: 'ఛాతీ ఎక్స్-రే AI', title: 'సమగ్ర ఛాతీ ఎక్స్-రే విశ్లేషణ' },
    dashboard: { sidebar: { dashboard: 'డాష్‌బోర్డ్', studies: 'స్టడీలు', patients: 'రోగులు', settings: 'సెట్టింగ్‌లు', logout: 'లాగ్‌అవుట్' }, status: { critical: 'క్లిష్టమైన', normal: 'సాధారణ' } },
    login: { form: { title: 'పోర్టల్‌లో సైన్ ఇన్', sign_in: 'సైన్ ఇన్' } },
    patient: { title: 'రోగులు', modal: { add_title: 'కొత్త రోగిని జోడించు', save: 'సేవ్', cancel: 'రద్దు' } }
},

// Marathi - मराठी
mr: {
    nav: { platform: 'प्लॅटफॉर्म', modalities: 'मोडॅलिटीज', technology: 'तंत्रज्ञान', about: 'आमच्याबद्दल', contact: 'संपर्क', try_free: 'मोफत वापरून पहा', apply_pilot: 'मोफत नोंदणी', login: 'लॉगिन' },
    home: { badge: 'मोफत प्लॅन उपलब्ध', title: 'वैद्यकीय इमेजिंगसाठी संपूर्ण AI प्लॅटफॉर्म', subtitle: 'मल्टी-मोडल फ्यूजन AI 5 मोडॅलिटीजमध्ये 50+ पॅथॉलॉजीजचे विश्लेषण करते.', cta_pilot: 'मोफत नोंदणी', cta_try: 'मोफत वापरून पहा' },
    modalities_section: { badge: 'व्यापक कव्हरेज', title: 'एक प्लॅटफॉर्म, प्रत्येक मोडॅलिटी', cxr_title: 'छातीचा एक्स-रे', ct_title: 'CT इमेजिंग', mammo_title: 'मॅमोग्राफी', mri_title: 'MRI सूट', dental_title: 'दंत', ultrasound_title: 'अल्ट्रासाउंड', pet_title: 'PET स्कॅन' },
    common: { loading: 'लोड होत आहे...', save: 'जतन करा', cancel: 'रद्द करा', download: 'डाउनलोड', search: 'शोधा', next: 'पुढे', back: 'मागे' },
    cxr: { badge: 'छातीचा एक्स-रे AI', title: 'सर्वसमावेशक छातीचा एक्स-रे विश्लेषण' },
    dashboard: { sidebar: { dashboard: 'डॅशबोर्ड', studies: 'अभ्यास', patients: 'रुग्ण', settings: 'सेटिंग्ज', logout: 'लॉगआउट' }, status: { critical: 'गंभीर', normal: 'सामान्य' } },
    login: { form: { title: 'पोर्टलमध्ये साइन इन करा', sign_in: 'साइन इन' } },
    patient: { title: 'रुग्ण', modal: { add_title: 'नवीन रुग्ण जोडा', save: 'जतन करा', cancel: 'रद्द करा' } }
},

// Swahili - Kiswahili
sw: {
    nav: { platform: 'Jukwaa', modalities: 'Njia', technology: 'Teknolojia', about: 'Kuhusu Sisi', contact: 'Wasiliana', try_free: 'Jaribu Bure', apply_pilot: 'Jiandikishe Bure', login: 'Ingia' },
    home: { badge: 'Mpango wa Bure Unapatikana', title: 'Jukwaa Kamili la AI kwa Picha za Matibabu', subtitle: 'AI ya mchanganyiko inachunguza pathologies 50+ katika njia 5.', cta_pilot: 'Jiandikishe Bure', cta_try: 'Jaribu Bure' },
    modalities_section: { badge: 'Ufunikaji Kamili', title: 'Jukwaa Moja, Kila Njia', cxr_title: 'X-Ray ya Kifua', ct_title: 'CT Imaging', mammo_title: 'Mamografia', mri_title: 'MRI Suite', dental_title: 'Meno', ultrasound_title: 'Ultrasound', pet_title: 'PET Scan' },
    common: { loading: 'Inapakia...', save: 'Hifadhi', cancel: 'Ghairi', download: 'Pakua', search: 'Tafuta', next: 'Ifuatayo', back: 'Rudi' },
    cxr: { badge: 'AI X-Ray ya Kifua', title: 'Uchambuzi Kamili wa X-Ray ya Kifua' },
    dashboard: { sidebar: { dashboard: 'Dashibodi', studies: 'Masomo', patients: 'Wagonjwa', settings: 'Mipangilio', logout: 'Ondoka' }, status: { critical: 'Muhimu', normal: 'Kawaida' } },
    login: { form: { title: 'Ingia kwenye Portal', sign_in: 'Ingia' } },
    patient: { title: 'Wagonjwa', modal: { add_title: 'Ongeza Mgonjwa Mpya', save: 'Hifadhi', cancel: 'Ghairi' } }
},

// Ukrainian - Українська  
uk: {
    nav: { platform: 'Платформа', modalities: 'Модальності', technology: 'Технологія', about: 'Про нас', contact: 'Контакти', try_free: 'Спробувати безкоштовно', apply_pilot: 'Безкоштовна реєстрація', login: 'Увійти' },
    home: { badge: 'Безкоштовний план доступний', title: 'Повна AI-платформа для медичної візуалізації', subtitle: 'Мультимодальний ШІ аналізує 50+ патологій у 5 модальностях.', cta_pilot: 'Безкоштовна реєстрація', cta_try: 'Спробувати безкоштовно' },
    modalities_section: { badge: 'Повне покриття', title: 'Одна платформа, усі модальності', cxr_title: 'Рентген грудної клітки', ct_title: 'КТ-візуалізація', mammo_title: 'Мамографія', mri_title: 'МРТ', dental_title: 'Стоматологія', ultrasound_title: 'УЗД', pet_title: 'ПЕТ-сканування' },
    common: { loading: 'Завантаження...', save: 'Зберегти', cancel: 'Скасувати', download: 'Завантажити', search: 'Пошук', next: 'Далі', back: 'Назад' },
    cxr: { badge: 'ШІ рентген грудної клітки', title: 'Комплексний аналіз рентгену грудної клітки' },
    dashboard: { sidebar: { dashboard: 'Панель', studies: 'Дослідження', patients: 'Пацієнти', settings: 'Налаштування', logout: 'Вийти' }, status: { critical: 'Критичний', normal: 'Нормальний' } },
    login: { form: { title: 'Вхід до порталу', sign_in: 'Увійти' } },
    patient: { title: 'Пацієнти', modal: { add_title: 'Додати пацієнта', save: 'Зберегти', cancel: 'Скасувати' } }
},

// Remaining languages with essential keys
cs: { nav: { try_free: 'Vyzkoušet zdarma', login: 'Přihlásit' }, home: { badge: 'Bezplatný plán k dispozici', title: 'Kompletní AI platforma pro lékařské zobrazování', cta_try: 'Vyzkoušet zdarma' }, modalities_section: { cxr_title: 'RTG hrudníku', ct_title: 'CT zobrazování' }, common: { loading: 'Načítání...', save: 'Uložit', cancel: 'Zrušit' }, cxr: { badge: 'AI RTG hrudníku', title: 'Komplexní analýza RTG hrudníku' }, dashboard: { sidebar: { dashboard: 'Panel', patients: 'Pacienti', logout: 'Odhlásit' }, status: { critical: 'Kritický', normal: 'Normální' } }, login: { form: { sign_in: 'Přihlásit se' } }, patient: { title: 'Pacienti' } },
sk: { nav: { try_free: 'Vyskúšať zadarmo', login: 'Prihlásiť' }, home: { badge: 'Bezplatný plán k dispozícii', title: 'Kompletná AI platforma pre lekárske zobrazovanie', cta_try: 'Vyskúšať zadarmo' }, modalities_section: { cxr_title: 'RTG hrudníka', ct_title: 'CT zobrazovanie' }, common: { loading: 'Načítava sa...', save: 'Uložiť', cancel: 'Zrušiť' }, cxr: { badge: 'AI RTG hrudníka', title: 'Komplexná analýza RTG hrudníka' }, dashboard: { sidebar: { dashboard: 'Panel', patients: 'Pacienti', logout: 'Odhlásiť' } }, login: { form: { sign_in: 'Prihlásiť sa' } }, patient: { title: 'Pacienti' } },
hu: { nav: { try_free: 'Próbálja ki ingyen', login: 'Bejelentkezés' }, home: { badge: 'Ingyenes terv elérhető', title: 'Teljes AI platform orvosi képalkotáshoz', cta_try: 'Próbálja ki ingyen' }, modalities_section: { cxr_title: 'Mellkas röntgen', ct_title: 'CT képalkotás' }, common: { loading: 'Betöltés...', save: 'Mentés', cancel: 'Mégse' }, cxr: { badge: 'AI mellkas röntgen', title: 'Átfogó mellkas röntgen elemzés' }, dashboard: { sidebar: { dashboard: 'Irányítópult', patients: 'Betegek', logout: 'Kijelentkezés' } }, login: { form: { sign_in: 'Bejelentkezés' } }, patient: { title: 'Betegek' } },
ro: { nav: { try_free: 'Încearcă gratuit', login: 'Autentificare' }, home: { badge: 'Plan gratuit disponibil', title: 'Platforma AI completă pentru imagistică medicală', cta_try: 'Încearcă gratuit' }, modalities_section: { cxr_title: 'Radiografie toracică', ct_title: 'Imagistică CT' }, common: { loading: 'Se încarcă...', save: 'Salvează', cancel: 'Anulează' }, cxr: { badge: 'AI Radiografie toracică', title: 'Analiză completă a radiografiei toracice' }, dashboard: { sidebar: { dashboard: 'Panou', patients: 'Pacienți', logout: 'Deconectare' } }, login: { form: { sign_in: 'Autentificare' } }, patient: { title: 'Pacienți' } },
bg: { nav: { try_free: 'Опитайте безплатно', login: 'Вход' }, home: { badge: 'Наличен безплатен план', title: 'Пълна AI платформа за медицинска образна диагностика', cta_try: 'Опитайте безплатно' }, modalities_section: { cxr_title: 'Рентген на гръден кош', ct_title: 'CT образна диагностика' }, common: { loading: 'Зареждане...', save: 'Запази', cancel: 'Отказ' }, cxr: { badge: 'AI Рентген на гръден кош', title: 'Цялостен анализ на рентген на гръден кош' }, dashboard: { sidebar: { dashboard: 'Табло', patients: 'Пациенти', logout: 'Изход' } }, login: { form: { sign_in: 'Вход' } }, patient: { title: 'Пациенти' } },
el: { nav: { try_free: 'Δοκιμάστε δωρεάν', login: 'Σύνδεση' }, home: { badge: 'Διαθέσιμο δωρεάν πλάνο', title: 'Πλήρης πλατφόρμα AI για ιατρική απεικόνιση', cta_try: 'Δοκιμάστε δωρεάν' }, modalities_section: { cxr_title: 'Ακτινογραφία θώρακα', ct_title: 'Απεικόνιση CT' }, common: { loading: 'Φόρτωση...', save: 'Αποθήκευση', cancel: 'Ακύρωση' }, cxr: { badge: 'AI Ακτινογραφία θώρακα', title: 'Πλήρης ανάλυση ακτινογραφίας θώρακα' }, dashboard: { sidebar: { dashboard: 'Πίνακας', patients: 'Ασθενείς', logout: 'Αποσύνδεση' } }, login: { form: { sign_in: 'Σύνδεση' } }, patient: { title: 'Ασθενείς' } },
sr: { nav: { try_free: 'Пробајте бесплатно', login: 'Пријава' }, home: { badge: 'Бесплатан план доступан', title: 'Комплетна AI платформа за медицинско снимање', cta_try: 'Пробајте бесплатно' }, modalities_section: { cxr_title: 'Рендген грудног коша', ct_title: 'CT снимање' }, common: { loading: 'Учитавање...', save: 'Сачувај', cancel: 'Откажи' }, cxr: { badge: 'AI Рендген грудног коша', title: 'Свеобухватна анализа рендгена грудног коша' }, dashboard: { sidebar: { dashboard: 'Контролна табла', patients: 'Пацијенти', logout: 'Одјава' } }, login: { form: { sign_in: 'Пријави се' } }, patient: { title: 'Пацијенти' } },
hr: { nav: { try_free: 'Isprobajte besplatno', login: 'Prijava' }, home: { badge: 'Besplatni plan dostupan', title: 'Potpuna AI platforma za medicinsko snimanje', cta_try: 'Isprobajte besplatno' }, modalities_section: { cxr_title: 'Rendgen prsnog koša', ct_title: 'CT snimanje' }, common: { loading: 'Učitavanje...', save: 'Spremi', cancel: 'Odustani' }, dashboard: { sidebar: { dashboard: 'Nadzorna ploča', patients: 'Pacijenti', logout: 'Odjava' } }, login: { form: { sign_in: 'Prijavi se' } }, patient: { title: 'Pacijenti' } },
sl: { nav: { try_free: 'Preizkusite brezplačno', login: 'Prijava' }, home: { badge: 'Na voljo brezplačen načrt', title: 'Popolna AI platforma za medicinsko slikanje', cta_try: 'Preizkusite brezplačno' }, common: { loading: 'Nalaganje...', save: 'Shrani', cancel: 'Prekliči' }, dashboard: { sidebar: { dashboard: 'Nadzorna plošča', patients: 'Pacienti', logout: 'Odjava' } }, login: { form: { sign_in: 'Prijava' } }, patient: { title: 'Pacienti' } },
lt: { nav: { try_free: 'Išbandykite nemokamai', login: 'Prisijungti' }, home: { badge: 'Nemokamas planas prieinamas', title: 'Pilna AI platforma medicininiam vaizdavimui', cta_try: 'Išbandykite nemokamai' }, common: { loading: 'Kraunama...', save: 'Išsaugoti', cancel: 'Atšaukti' }, dashboard: { sidebar: { dashboard: 'Prietaisų skydelis', patients: 'Pacientai', logout: 'Atsijungti' } }, login: { form: { sign_in: 'Prisijungti' } }, patient: { title: 'Pacientai' } },
lv: { nav: { try_free: 'Izmēģiniet bez maksas', login: 'Pieteikties' }, home: { badge: 'Pieejams bezmaksas plāns', title: 'Pilna AI platforma medicīniskai attēlveidošanai', cta_try: 'Izmēģiniet bez maksas' }, common: { loading: 'Ielādē...', save: 'Saglabāt', cancel: 'Atcelt' }, dashboard: { sidebar: { dashboard: 'Vadības panelis', patients: 'Pacienti', logout: 'Iziet' } }, login: { form: { sign_in: 'Pieteikties' } }, patient: { title: 'Pacienti' } },
et: { nav: { try_free: 'Proovige tasuta', login: 'Logi sisse' }, home: { badge: 'Tasuta plaan saadaval', title: 'Täielik AI platvorm meditsiiniliseks pildistamiseks', cta_try: 'Proovige tasuta' }, common: { loading: 'Laadimine...', save: 'Salvesta', cancel: 'Tühista' }, dashboard: { sidebar: { dashboard: 'Juhtpaneel', patients: 'Patsiendid', logout: 'Logi välja' } }, login: { form: { sign_in: 'Logi sisse' } }, patient: { title: 'Patsiendid' } },
sv: { nav: { try_free: 'Prova gratis', login: 'Logga in' }, home: { badge: 'Gratis plan tillgänglig', title: 'Den kompletta AI-plattformen för medicinsk bildbehandling', cta_try: 'Prova gratis' }, modalities_section: { cxr_title: 'Lungröntgen', ct_title: 'CT-bildbehandling' }, common: { loading: 'Laddar...', save: 'Spara', cancel: 'Avbryt' }, cxr: { badge: 'AI Lungröntgen', title: 'Omfattande lungröntgenanalys' }, dashboard: { sidebar: { dashboard: 'Instrumentpanel', patients: 'Patienter', logout: 'Logga ut' } }, login: { form: { sign_in: 'Logga in' } }, patient: { title: 'Patienter' } },
da: { nav: { try_free: 'Prøv gratis', login: 'Log ind' }, home: { badge: 'Gratis plan tilgængelig', title: 'Den komplette AI-platform til medicinsk billedbehandling', cta_try: 'Prøv gratis' }, modalities_section: { cxr_title: 'Røntgen af brystkassen', ct_title: 'CT-billeddannelse' }, common: { loading: 'Indlæser...', save: 'Gem', cancel: 'Annuller' }, dashboard: { sidebar: { dashboard: 'Kontrolpanel', patients: 'Patienter', logout: 'Log ud' } }, login: { form: { sign_in: 'Log ind' } }, patient: { title: 'Patienter' } },
no: { nav: { try_free: 'Prøv gratis', login: 'Logg inn' }, home: { badge: 'Gratis plan tilgjengelig', title: 'Den komplette AI-plattformen for medisinsk bildebehandling', cta_try: 'Prøv gratis' }, modalities_section: { cxr_title: 'Røntgen av brystet', ct_title: 'CT-avbildning' }, common: { loading: 'Laster...', save: 'Lagre', cancel: 'Avbryt' }, dashboard: { sidebar: { dashboard: 'Kontrollpanel', patients: 'Pasienter', logout: 'Logg ut' } }, login: { form: { sign_in: 'Logg inn' } }, patient: { title: 'Pasienter' } },
fi: { nav: { try_free: 'Kokeile ilmaiseksi', login: 'Kirjaudu' }, home: { badge: 'Ilmainen suunnitelma saatavilla', title: 'Täydellinen AI-alusta lääketieteelliseen kuvantamiseen', cta_try: 'Kokeile ilmaiseksi' }, modalities_section: { cxr_title: 'Rintakehän röntgen', ct_title: 'TT-kuvantaminen' }, common: { loading: 'Ladataan...', save: 'Tallenna', cancel: 'Peruuta' }, dashboard: { sidebar: { dashboard: 'Hallintapaneeli', patients: 'Potilaat', logout: 'Kirjaudu ulos' } }, login: { form: { sign_in: 'Kirjaudu sisään' } }, patient: { title: 'Potilaat' } },
ms: { nav: { try_free: 'Cuba Percuma', login: 'Log Masuk' }, home: { badge: 'Pelan Percuma Tersedia', title: 'Platform AI Lengkap untuk Pengimejan Perubatan', cta_try: 'Cuba Percuma' }, modalities_section: { cxr_title: 'X-Ray Dada', ct_title: 'Pengimejan CT' }, common: { loading: 'Memuatkan...', save: 'Simpan', cancel: 'Batal' }, dashboard: { sidebar: { dashboard: 'Papan Pemuka', patients: 'Pesakit', logout: 'Log Keluar' } }, login: { form: { sign_in: 'Log Masuk' } }, patient: { title: 'Pesakit' } },
fil: { nav: { try_free: 'Subukan nang Libre', login: 'Mag-login' }, home: { badge: 'Libreng Plano Available', title: 'Kumpletong AI Platform para sa Medical Imaging', cta_try: 'Subukan nang Libre' }, modalities_section: { cxr_title: 'Chest X-Ray', ct_title: 'CT Imaging' }, common: { loading: 'Naglo-load...', save: 'I-save', cancel: 'Kanselahin' }, dashboard: { sidebar: { dashboard: 'Dashboard', patients: 'Mga Pasyente', logout: 'Mag-logout' } }, login: { form: { sign_in: 'Mag-sign In' } }, patient: { title: 'Mga Pasyente' } },
'zh-TW': { nav: { try_free: '免費試用', login: '登入' }, home: { badge: '免費方案可用', title: '完整的醫學影像AI平台', cta_try: '免費試用' }, modalities_section: { cxr_title: '胸部X光', ct_title: 'CT影像' }, common: { loading: '載入中...', save: '儲存', cancel: '取消' }, cxr: { badge: '胸部X光AI', title: '全面的胸部X光分析' }, dashboard: { sidebar: { dashboard: '儀表板', patients: '患者', logout: '登出' } }, login: { form: { sign_in: '登入' } }, patient: { title: '患者' } },
pa: { nav: { try_free: 'ਮੁਫ਼ਤ ਅਜ਼ਮਾਓ', login: 'ਲੌਗਇਨ' }, home: { badge: 'ਮੁਫ਼ਤ ਯੋਜਨਾ ਉਪਲਬਧ', title: 'ਮੈਡੀਕਲ ਇਮੇਜਿੰਗ ਲਈ ਪੂਰਾ AI ਪਲੇਟਫਾਰਮ', cta_try: 'ਮੁਫ਼ਤ ਅਜ਼ਮਾਓ' }, common: { loading: 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...', save: 'ਸੇਵ ਕਰੋ', cancel: 'ਰੱਦ ਕਰੋ' }, dashboard: { sidebar: { dashboard: 'ਡੈਸ਼ਬੋਰਡ', patients: 'ਮਰੀਜ਼', logout: 'ਲੌਗਆਊਟ' } }, login: { form: { sign_in: 'ਸਾਈਨ ਇਨ' } }, patient: { title: 'ਮਰੀਜ਼' } },
gu: { nav: { try_free: 'મફત અજમાવો', login: 'લૉગિન' }, home: { badge: 'મફત પ્લાન ઉપલબ્ધ', title: 'મેડિકલ ઇમેજિંગ માટે સંપૂર્ણ AI પ્લેટફોર્મ', cta_try: 'મફત અજમાવો' }, common: { loading: 'લોડ થઈ રહ્યું છે...', save: 'સેવ કરો', cancel: 'રદ કરો' }, dashboard: { sidebar: { dashboard: 'ડેશબોર્ડ', patients: 'દર્દીઓ', logout: 'લૉગઆઉટ' } }, login: { form: { sign_in: 'સાઇન ઇન' } }, patient: { title: 'દર્દીઓ' } },
kn: { nav: { try_free: 'ಉಚಿತವಾಗಿ ಪ್ರಯತ್ನಿಸಿ', login: 'ಲಾಗಿನ್' }, home: { badge: 'ಉಚಿತ ಯೋಜನೆ ಲಭ್ಯವಿದೆ', title: 'ವೈದ್ಯಕೀಯ ಇಮೇಜಿಂಗ್‌ಗಾಗಿ ಸಂಪೂರ್ಣ AI ಪ್ಲಾಟ್‌ಫಾರ್ಮ್', cta_try: 'ಉಚಿತವಾಗಿ ಪ್ರಯತ್ನಿಸಿ' }, common: { loading: 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...', save: 'ಉಳಿಸಿ', cancel: 'ರದ್ದುಮಾಡಿ' }, dashboard: { sidebar: { dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್', patients: 'ರೋಗಿಗಳು', logout: 'ಲಾಗ್‌ಔಟ್' } }, login: { form: { sign_in: 'ಸೈನ್ ಇನ್' } }, patient: { title: 'ರೋಗಿಗಳು' } },
ml: { nav: { try_free: 'സൗജന്യമായി പരീക്ഷിക്കുക', login: 'ലോഗിൻ' }, home: { badge: 'സൗജന്യ പ്ലാൻ ലഭ്യമാണ്', title: 'മെഡിക്കൽ ഇമേജിംഗിനുള്ള പൂർണ്ണ AI പ്ലാറ്റ്‌ഫോം', cta_try: 'സൗജന്യമായി പരീക്ഷിക്കുക' }, common: { loading: 'ലോഡ് ചെയ്യുന്നു...', save: 'സേവ് ചെയ്യുക', cancel: 'റദ്ദാക്കുക' }, dashboard: { sidebar: { dashboard: 'ഡാഷ്ബോർഡ്', patients: 'രോഗികൾ', logout: 'ലോഗൗട്ട്' } }, login: { form: { sign_in: 'സൈൻ ഇൻ' } }, patient: { title: 'രോഗികൾ' } },
or: { nav: { try_free: 'ମାଗଣାରେ ଚେଷ୍ଟା କରନ୍ତୁ', login: 'ଲଗଇନ୍' }, home: { badge: 'ମାଗଣା ଯୋଜନା ଉପಲବ୍ଧ', title: 'ମେଡିକାଲ ଇମେଜିଂ ପାଇଁ ସମ୍ପୂର୍ଣ AI ପ୍ଲାଟଫର୍ମ', cta_try: 'ମାଗଣାରେ ଚେଷ୍ଟା କରନ୍ତୁ' }, common: { loading: 'ଲୋଡ ହେଉଛି...', save: 'ସେଭ କରନ୍ତୁ', cancel: 'ବାତିଲ' }, dashboard: { sidebar: { patients: 'ରୋଗୀ', logout: 'ଲଗଆଉଟ' } }, login: { form: { sign_in: 'ସାଇନ ଇନ' } }, patient: { title: 'ରୋଗୀ' } },
si: { nav: { try_free: 'නොමිලේ උත්සාහ කරන්න', login: 'පිවිසුම' }, home: { badge: 'නොමිලේ සැලැස්ම ලබා ගත හැක', title: 'වෛද්‍ය රූපකරණය සඳහා සම්පූර්ණ AI වේදිකාව', cta_try: 'නොමිලේ උත්සාහ කරන්න' }, common: { loading: 'පූරණය වෙමින්...', save: 'සුරකින්න', cancel: 'අවලංගු කරන්න' }, dashboard: { sidebar: { patients: 'රෝගීන්', logout: 'පිටවීම' } }, login: { form: { sign_in: 'පිවිසෙන්න' } }, patient: { title: 'රෝගීන්' } },
ne: { nav: { try_free: 'निःशुल्क प्रयास गर्नुहोस्', login: 'लगइन' }, home: { badge: 'निःशुल्क योजना उपलब्ध', title: 'मेडिकल इमेजिङको लागि पूर्ण AI प्लेटफर्म', cta_try: 'निःशुल्क प्रयास गर्नुहोस्' }, common: { loading: 'लोड हुँदैछ...', save: 'सेभ गर्नुहोस्', cancel: 'रद्द गर्नुहोस्' }, dashboard: { sidebar: { patients: 'बिरामी', logout: 'लगआउट' } }, login: { form: { sign_in: 'साइन इन' } }, patient: { title: 'बिरामी' } },
my: { nav: { try_free: 'အခမဲ့စမ်းကြည့်ပါ', login: 'ဝင်ရောက်ရန်' }, home: { badge: 'အခမဲ့အစီအစဉ်ရရှိနိုင်ပါသည်', title: 'ဆေးပုံရိပ်အတွက် ပြည့်စုံသော AI Platform' }, common: { loading: 'ဖွင့်နေသည်...', save: 'သိမ်းဆည်းရန်', cancel: 'ပယ်ဖျက်ရန်' }, dashboard: { sidebar: { patients: 'လူနာများ', logout: 'ထွက်ရန်' } }, login: { form: { sign_in: 'ဝင်ရောက်ရန်' } }, patient: { title: 'လူနာများ' } },
km: { nav: { try_free: 'សាកល្បងដោយឥតគិតថ្លៃ', login: 'ចូល' }, home: { badge: 'គម្រោងឥតគិតថ្លៃ', title: 'វេទិកា AI ពេញលេញសម្រាប់រូបភាពវេជ្ជសាស្ត្រ' }, common: { loading: 'កំពុងផ្ទុក...', save: 'រក្សាទុក', cancel: 'បោះបង់' }, dashboard: { sidebar: { patients: 'អ្នកជំងឺ', logout: 'ចេញ' } }, login: { form: { sign_in: 'ចូល' } }, patient: { title: 'អ្នកជំងឺ' } },
lo: { nav: { try_free: 'ທົດລອງໃຊ້ຟຣີ', login: 'ເຂົ້າສູ່ລະບົບ' }, home: { badge: 'ແຜນຟຣີມີໃຫ້', title: 'ແພລດຟອມ AI ທີ່ສົມບູນສຳລັບການຖ່າຍພາບທາງການແພດ' }, common: { loading: 'ກຳລັງໂຫລດ...', save: 'ບັນທຶກ', cancel: 'ຍົກເລີກ' }, dashboard: { sidebar: { patients: 'ຄົນເຈັບ', logout: 'ອອກຈາກລະບົບ' } }, login: { form: { sign_in: 'ເຂົ້າສູ່ລະບົບ' } }, patient: { title: 'ຄົນເຈັບ' } },
ka: { nav: { try_free: 'სცადეთ უფასოდ', login: 'შესვლა' }, home: { badge: 'უფასო გეგმა ხელმისაწვდომია', title: 'სრული AI პლატფორმა სამედიცინო გამოსახულებისთვის' }, common: { loading: 'იტვირთება...', save: 'შენახვა', cancel: 'გაუქმება' }, dashboard: { sidebar: { patients: 'პაციენტები', logout: 'გასვლა' } }, login: { form: { sign_in: 'შესვლა' } }, patient: { title: 'პაციენტები' } },
hy: { nav: { try_free: 'Փdelays անվdelays', login: 'Մdelays անdelays' }, home: { badge: 'Անdelays delays delays', title: 'Ամdelays AI delays delays delays delays' }, common: { loading: 'Բdelays delays...', save: 'Պdelays delays', cancel: 'Չdelays delays' }, dashboard: { sidebar: { patients: 'Հdelay', logout: 'Delays' } }, login: { form: { sign_in: 'Մุ นื' } }, patient: { title: 'Հdelay' } },
az: { nav: { try_free: 'Pulsuz Sınayın', login: 'Daxil ol' }, home: { badge: 'Pulsuz plan mövcuddur', title: 'Tibbi Görüntüləmə üçün Tam AI Platforması' }, common: { loading: 'Yüklənir...', save: 'Saxla', cancel: 'Ləğv et' }, dashboard: { sidebar: { patients: 'Xəstələr', logout: 'Çıxış' } }, login: { form: { sign_in: 'Daxil ol' } }, patient: { title: 'Xəstələr' } },
kk: { nav: { try_free: 'Тегін сынап көру', login: 'Кіру' }, home: { badge: 'Тегін жоспар қолжетімді', title: 'Медициналық бейнелеу үшін толық AI платформасы' }, common: { loading: 'Жүктелуде...', save: 'Сақтау', cancel: 'Болдырмау' }, dashboard: { sidebar: { patients: 'Науқастар', logout: 'Шығу' } }, login: { form: { sign_in: 'Кіру' } }, patient: { title: 'Науқастар' } },
uz: { nav: { try_free: 'Bepul sinab ko\'ring', login: 'Kirish' }, home: { badge: 'Bepul reja mavjud', title: 'Tibbiy tasvirlash uchun to\'liq AI platformasi' }, common: { loading: 'Yuklanmoqda...', save: 'Saqlash', cancel: 'Bekor qilish' }, dashboard: { sidebar: { patients: 'Bemorlar', logout: 'Chiqish' } }, login: { form: { sign_in: 'Kirish' } }, patient: { title: 'Bemorlar' } },
ky: { nav: { try_free: 'Акысыз сынап көрүңүз', login: 'Кирүү' }, home: { badge: 'Акысыз план жеткиликтүү', title: 'Медициналык сүрөт үчүн толук AI платформасы' }, common: { loading: 'Жүктөлүүдө...', save: 'Сактоо', cancel: 'Жокко чыгаруу' }, dashboard: { sidebar: { patients: 'Оорулуулар', logout: 'Чыгуу' } }, login: { form: { sign_in: 'Кирүү' } }, patient: { title: 'Оорулуулар' } },
tg: { nav: { try_free: 'Ройгон санҷед', login: 'Воридшавӣ' }, home: { badge: 'Нақшаи ройгон дастрас аст', title: 'Платформаи пурраи AI барои тасвирбардории тиббӣ' }, common: { loading: 'Бор шуда истодааст...', save: 'Захира кардан', cancel: 'Бекор кардан' }, dashboard: { sidebar: { patients: 'Беморон', logout: 'Баромадан' } }, login: { form: { sign_in: 'Воридшавӣ' } }, patient: { title: 'Беморон' } },
tk: { nav: { try_free: 'Mugt synap görüň', login: 'Girmek' }, home: { badge: 'Mugt meýilnama bar', title: 'Lukmançylyk şekillendirmesi üçin doly AI platformasy' }, common: { loading: 'Ýüklenýär...', save: 'Sakla', cancel: 'Ýatyr' }, dashboard: { sidebar: { patients: 'Näsaglar', logout: 'Çykmak' } }, login: { form: { sign_in: 'Girmek' } }, patient: { title: 'Näsaglar' } },
mn: { nav: { try_free: 'Үнэгүй туршиж үзэх', login: 'Нэвтрэх' }, home: { badge: 'Үнэгүй төлөвлөгөө боломжтой', title: 'Эмнэлгийн дүрслэлд зориулсан бүрэн AI платформ' }, common: { loading: 'Ачааллаж байна...', save: 'Хадгалах', cancel: 'Цуцлах' }, dashboard: { sidebar: { patients: 'Өвчтөнүүд', logout: 'Гарах' } }, login: { form: { sign_in: 'Нэвтрэх' } }, patient: { title: 'Өвчтөнүүд' } },
af: { nav: { try_free: 'Probeer gratis', login: 'Teken in' }, home: { badge: 'Gratis plan beskikbaar', title: 'Die volledige AI-platform vir mediese beeldvorming' }, common: { loading: 'Laai...', save: 'Stoor', cancel: 'Kanselleer' }, dashboard: { sidebar: { patients: 'Pasiënte', logout: 'Teken uit' } }, login: { form: { sign_in: 'Teken in' } }, patient: { title: 'Pasiënte' } },
zu: { nav: { try_free: 'Zama mahhala', login: 'Ngena' }, home: { badge: 'Uhlelo lwamahhala luyatholakala', title: 'I-platform ephelele ye-AI yokuthwebula kwezokwelapha' }, common: { loading: 'Iyalayisha...', save: 'Gcina', cancel: 'Khansela' }, dashboard: { sidebar: { patients: 'Iziguli', logout: 'Phuma' } }, login: { form: { sign_in: 'Ngena ngemvume' } }, patient: { title: 'Iziguli' } },
yo: { nav: { try_free: 'Gbiyanju ọfẹ', login: 'Wọle' }, home: { badge: 'Ero ọfẹ wa', title: 'Pẹpẹ AI pipe fun aworan iṣoogun' }, common: { loading: 'N ṣafikun...', save: 'Fi pamọ', cancel: 'Fagilee' }, dashboard: { sidebar: { patients: 'Àwọn aláìsàn', logout: 'Jade' } }, login: { form: { sign_in: 'Wọle' } }, patient: { title: 'Àwọn aláìsàn' } },
ig: { nav: { try_free: 'Nwalee n\'efu', login: 'Banye' }, home: { badge: 'Atụmatụ efu dị', title: 'Ikpo okwu AI zuru oke maka onyonyo ahụike' }, common: { loading: 'Na-ebu...', save: 'Chekwaa', cancel: 'Kagbuo' }, dashboard: { sidebar: { patients: 'Ndị ọrịa', logout: 'Pụọ' } }, login: { form: { sign_in: 'Banye' } }, patient: { title: 'Ndị ọrịa' } },
ha: { nav: { try_free: 'Gwada kyauta', login: 'Shiga' }, home: { badge: 'Shirin kyauta akwai', title: 'Cikakken dandali na AI don hoton likitanci' }, common: { loading: 'Ana lodawa...', save: 'Ajiye', cancel: 'Soke' }, dashboard: { sidebar: { patients: 'Marasa lafiya', logout: 'Fita' } }, login: { form: { sign_in: 'Shiga' } }, patient: { title: 'Marasa lafiya' } },
am: { nav: { try_free: 'በነጻ ይሞክሩ', login: 'ግባ' }, home: { badge: 'ነጻ ዕቅድ ይገኛል', title: 'ለሕክምና ምስል ሙሉ AI መድረክ' }, common: { loading: 'በመጫን ላይ...', save: 'አስቀምጥ', cancel: 'ሰርዝ' }, dashboard: { sidebar: { patients: 'ታካሚዎች', logout: 'ውጣ' } }, login: { form: { sign_in: 'ግባ' } }, patient: { title: 'ታካሚዎች' } },
so: { nav: { try_free: 'Bilaash tijaabi', login: 'Gal' }, home: { badge: 'Qorshe bilaash ah ayaa la heli karaa', title: 'Platform AI buuxa ee sawir caafimaadka' }, common: { loading: 'Waa la rarayo...', save: 'Kaydi', cancel: 'Jooji' }, dashboard: { sidebar: { patients: 'Bukaanka', logout: 'Ka bax' } }, login: { form: { sign_in: 'Gal' } }, patient: { title: 'Bukaanka' } },
mg: { nav: { try_free: 'Andramo maimaim-poana', login: 'Midira' }, home: { badge: 'Misy drafitra maimaim-poana', title: 'Platform AI feno ho an\'ny sary fitsaboana' }, common: { loading: 'Mirakitra...', save: 'Tehirizo', cancel: 'Hanafoana' }, dashboard: { sidebar: { patients: 'Marary', logout: 'Hivoaka' } }, login: { form: { sign_in: 'Midira' } }, patient: { title: 'Marary' } },
mt: { nav: { try_free: 'Ipprova b\'xejn', login: 'Idħol' }, home: { badge: 'Pjan b\'xejn disponibbli', title: 'Pjattaforma AI sħiħa għal imaging mediku' }, common: { loading: 'Qed jillowdja...', save: 'Issejvja', cancel: 'Ikkanċella' }, dashboard: { sidebar: { patients: 'Pazjenti', logout: 'Oħroġ' } }, login: { form: { sign_in: 'Idħol' } }, patient: { title: 'Pazjenti' } },
is: { nav: { try_free: 'Prófaðu ókeypis', login: 'Innskrá' }, home: { badge: 'Ókeypis áætlun í boði', title: 'Heill AI vettvangur fyrir læknisfræðilega myndatöku' }, common: { loading: 'Hleður...', save: 'Vista', cancel: 'Hætta við' }, dashboard: { sidebar: { patients: 'Sjúklingar', logout: 'Útskrá' } }, login: { form: { sign_in: 'Skrá inn' } }, patient: { title: 'Sjúklingar' } },
sq: { nav: { try_free: 'Provoni falas', login: 'Hyrje' }, home: { badge: 'Plani falas i disponueshëm', title: 'Platforma e plotë AI për imazherinë mjekësore' }, common: { loading: 'Po ngarkohet...', save: 'Ruaj', cancel: 'Anulo' }, dashboard: { sidebar: { patients: 'Pacientët', logout: 'Dilni' } }, login: { form: { sign_in: 'Hyni' } }, patient: { title: 'Pacientët' } },
mk: { nav: { try_free: 'Пробајте бесплатно', login: 'Најава' }, home: { badge: 'Бесплатен план достапен', title: 'Целосна AI платформа за медицинско снимање' }, common: { loading: 'Се вчитува...', save: 'Зачувај', cancel: 'Откажи' }, dashboard: { sidebar: { patients: 'Пациенти', logout: 'Одјава' } }, login: { form: { sign_in: 'Најава' } }, patient: { title: 'Пациенти' } },
bs: { nav: { try_free: 'Isprobajte besplatno', login: 'Prijava' }, home: { badge: 'Besplatan plan dostupan', title: 'Potpuna AI platforma za medicinsko snimanje' }, common: { loading: 'Učitavanje...', save: 'Sačuvaj', cancel: 'Otkaži' }, dashboard: { sidebar: { patients: 'Pacijenti', logout: 'Odjava' } }, login: { form: { sign_in: 'Prijavi se' } }, patient: { title: 'Pacijenti' } },
ca: { nav: { try_free: 'Prova gratuïta', login: 'Iniciar sessió' }, home: { badge: 'Pla gratuït disponible', title: 'La plataforma AI completa per a imatges mèdiques' }, common: { loading: 'Carregant...', save: 'Desar', cancel: 'Cancel·lar' }, dashboard: { sidebar: { patients: 'Pacients', logout: 'Tancar sessió' } }, login: { form: { sign_in: 'Iniciar sessió' } }, patient: { title: 'Pacients' } },
tl: { nav: { try_free: 'Subukan nang libre', login: 'Mag-login' }, home: { badge: 'Libreng plano available', title: 'Kumpletong AI platform para sa medical imaging' }, common: { loading: 'Naglo-load...', save: 'I-save', cancel: 'Kanselahin' }, dashboard: { sidebar: { patients: 'Mga pasyente', logout: 'Mag-logout' } }, login: { form: { sign_in: 'Mag-sign in' } }, patient: { title: 'Mga pasyente' } },
pcm: { nav: { try_free: 'Try am free', login: 'Login' }, home: { badge: 'Free plan dey', title: 'Complete AI platform for medical imaging' }, common: { loading: 'E dey load...', save: 'Save am', cancel: 'Cancel' }, dashboard: { sidebar: { patients: 'Patients', logout: 'Logout' } }, login: { form: { sign_in: 'Sign in' } }, patient: { title: 'Patients' } },
mi: { nav: { try_free: 'Whakamātauria koreutu', login: 'Takiuru' }, home: { badge: 'Mahere koreutu e wātea ana', title: 'Te pae AI mō te whakaata hauora' }, common: { loading: 'E uta ana...', save: 'Tiakina', cancel: 'Whakakore' }, dashboard: { sidebar: { patients: 'Ngā tūroro', logout: 'Takiputa' } }, login: { form: { sign_in: 'Takiuru' } }, patient: { title: 'Ngā tūroro' } }

}
};

// Initialize on DOM ready
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => ScanGuruI18n.init());
    } else {
        ScanGuruI18n.init();
    }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScanGuruI18n;
}
