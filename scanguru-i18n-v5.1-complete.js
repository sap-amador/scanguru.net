/**
 * ScanGuru i18n System v5.1.0
 * 82 Languages — Marketing + Dashboard Complete
 * 
 * CDN: https://cdn.jsdelivr.net/gh/sap-amador/scanguru.net@main/scanguru-i18n-v5.1-complete.js
 */

const ScanGuruI18n = {
    version: '5.1.0',
    currentLang: 'en',
    
    // 82 Language definitions
    languages: {
        en: { name: 'English', native: 'English', flag: '🇺🇸', region: 'Americas', speakers: 1500 },
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
        pcm: { name: 'Nigerian Pidgin', native: 'Naijá', flag: '🇳🇬', region: 'Africa', speakers: 100 },
        vi: { name: 'Vietnamese', native: 'Tiếng Việt', flag: '🇻🇳', region: 'Asia', speakers: 85 },
        ta: { name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳', region: 'Asia', speakers: 85 },
        tr: { name: 'Turkish', native: 'Türkçe', flag: '🇹🇷', region: 'Europe', speakers: 80 },
        te: { name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳', region: 'Asia', speakers: 83 },
        mr: { name: 'Marathi', native: 'मराठी', flag: '🇮🇳', region: 'Asia', speakers: 83 },
        ko: { name: 'Korean', native: '한국어', flag: '🇰🇷', region: 'Asia', speakers: 80 },
        ms: { name: 'Malay', native: 'Bahasa Melayu', flag: '🇲🇾', region: 'Asia', speakers: 80 },
        ha: { name: 'Hausa', native: 'Hausa', flag: '🇳🇬', region: 'Africa', speakers: 77 },
        it: { name: 'Italian', native: 'Italiano', flag: '🇮🇹', region: 'Europe', speakers: 65 },
        th: { name: 'Thai', native: 'ไทย', flag: '🇹🇭', region: 'Asia', speakers: 60 },
        am: { name: 'Amharic', native: 'አማርኛ', flag: '🇪🇹', region: 'Africa', speakers: 57 },
        gu: { name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳', region: 'Asia', speakers: 56 },
        pl: { name: 'Polish', native: 'Polski', flag: '🇵🇱', region: 'Europe', speakers: 45 },
        kn: { name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳', region: 'Asia', speakers: 45 },
        yo: { name: 'Yoruba', native: 'Yorùbá', flag: '🇳🇬', region: 'Africa', speakers: 45 },
        ig: { name: 'Igbo', native: 'Igbo', flag: '🇳🇬', region: 'Africa', speakers: 45 },
        fil: { name: 'Filipino', native: 'Filipino', flag: '🇵🇭', region: 'Asia', speakers: 45 },
        my: { name: 'Burmese', native: 'မြန်မာဘာသာ', flag: '🇲🇲', region: 'Asia', speakers: 43 },
        uk: { name: 'Ukrainian', native: 'Українська', flag: '🇺🇦', region: 'Europe', speakers: 40 },
        ml: { name: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳', region: 'Asia', speakers: 38 },
        or: { name: 'Odia', native: 'ଓଡ଼ିଆ', flag: '🇮🇳', region: 'Asia', speakers: 38 },
        uz: { name: 'Uzbek', native: "O'zbek", flag: '🇺🇿', region: 'Asia', speakers: 35 },
        ne: { name: 'Nepali', native: 'नेपाली', flag: '🇳🇵', region: 'Asia', speakers: 32 },
        lo: { name: 'Lao', native: 'ລາວ', flag: '🇱🇦', region: 'Asia', speakers: 30 },
        tl: { name: 'Tagalog', native: 'Tagalog', flag: '🇵🇭', region: 'Asia', speakers: 28 },
        zu: { name: 'Zulu', native: 'isiZulu', flag: '🇿🇦', region: 'Africa', speakers: 27 },
        ro: { name: 'Romanian', native: 'Română', flag: '🇷🇴', region: 'Europe', speakers: 26 },
        nl: { name: 'Dutch', native: 'Nederlands', flag: '🇳🇱', region: 'Europe', speakers: 25 },
        'zh-TW': { name: 'Chinese (Traditional)', native: '繁體中文', flag: '🇹🇼', region: 'Asia', speakers: 25 },
        az: { name: 'Azerbaijani', native: 'Azərbaycan', flag: '🇦🇿', region: 'Asia', speakers: 25 },
        mg: { name: 'Malagasy', native: 'Malagasy', flag: '🇲🇬', region: 'Africa', speakers: 25 },
        so: { name: 'Somali', native: 'Soomaali', flag: '🇸🇴', region: 'Africa', speakers: 22 },
        si: { name: 'Sinhala', native: 'සිංහල', flag: '🇱🇰', region: 'Asia', speakers: 17 },
        km: { name: 'Khmer', native: 'ភាសាខ្មែរ', flag: '🇰🇭', region: 'Asia', speakers: 16 },
        kk: { name: 'Kazakh', native: 'Қазақ', flag: '🇰🇿', region: 'Asia', speakers: 15 },
        hu: { name: 'Hungarian', native: 'Magyar', flag: '🇭🇺', region: 'Europe', speakers: 13 },
        el: { name: 'Greek', native: 'Ελληνικά', flag: '🇬🇷', region: 'Europe', speakers: 13 },
        cs: { name: 'Czech', native: 'Čeština', flag: '🇨🇿', region: 'Europe', speakers: 11 },
        sv: { name: 'Swedish', native: 'Svenska', flag: '🇸🇪', region: 'Europe', speakers: 10 },
        ca: { name: 'Catalan', native: 'Català', flag: '🇪🇸', region: 'Europe', speakers: 10 },
        sr: { name: 'Serbian', native: 'Српски', flag: '🇷🇸', region: 'Europe', speakers: 9 },
        he: { name: 'Hebrew', native: 'עברית', flag: '🇮🇱', region: 'MENA', speakers: 9, rtl: true },
        tg: { name: 'Tajik', native: 'Тоҷикӣ', flag: '🇹🇯', region: 'Asia', speakers: 8 },
        bg: { name: 'Bulgarian', native: 'Български', flag: '🇧🇬', region: 'Europe', speakers: 8 },
        sq: { name: 'Albanian', native: 'Shqip', flag: '🇦🇱', region: 'Europe', speakers: 7.5 },
        af: { name: 'Afrikaans', native: 'Afrikaans', flag: '🇿🇦', region: 'Africa', speakers: 7 },
        hy: { name: 'Armenian', native: 'Հայdelays', flag: '🇦🇲', region: 'Europe', speakers: 7 },
        tk: { name: 'Turkmen', native: 'Türkmen', flag: '🇹🇲', region: 'Asia', speakers: 7 },
        mn: { name: 'Mongolian', native: 'Монгол', flag: '🇲🇳', region: 'Asia', speakers: 6 },
        da: { name: 'Danish', native: 'Dansk', flag: '🇩🇰', region: 'Europe', speakers: 6 },
        hr: { name: 'Croatian', native: 'Hrvatski', flag: '🇭🇷', region: 'Europe', speakers: 6 },
        fi: { name: 'Finnish', native: 'Suomi', flag: '🇫🇮', region: 'Europe', speakers: 5.5 },
        no: { name: 'Norwegian', native: 'Norsk', flag: '🇳🇴', region: 'Europe', speakers: 5.5 },
        sk: { name: 'Slovak', native: 'Slovenčina', flag: '🇸🇰', region: 'Europe', speakers: 5 },
        ky: { name: 'Kyrgyz', native: 'Кыргызча', flag: '🇰🇬', region: 'Asia', speakers: 5 },
        ka: { name: 'Georgian', native: 'ქართული', flag: '🇬🇪', region: 'Europe', speakers: 4 },
        lt: { name: 'Lithuanian', native: 'Lietuvių', flag: '🇱🇹', region: 'Europe', speakers: 3 },
        bs: { name: 'Bosnian', native: 'Bosanski', flag: '🇧🇦', region: 'Europe', speakers: 3 },
        sl: { name: 'Slovenian', native: 'Slovenščina', flag: '🇸🇮', region: 'Europe', speakers: 2.5 },
        mk: { name: 'Macedonian', native: 'Македонски', flag: '🇲🇰', region: 'Europe', speakers: 2 },
        lv: { name: 'Latvian', native: 'Latviešu', flag: '🇱🇻', region: 'Europe', speakers: 1.5 },
        et: { name: 'Estonian', native: 'Eesti', flag: '🇪🇪', region: 'Europe', speakers: 1.1 },
        mt: { name: 'Maltese', native: 'Malti', flag: '🇲🇹', region: 'Europe', speakers: 0.5 },
        is: { name: 'Icelandic', native: 'Íslenska', flag: '🇮🇸', region: 'Europe', speakers: 0.4 },
        mi: { name: 'Māori', native: 'Te Reo Māori', flag: '🇳🇿', region: 'Oceania', speakers: 0.2 }
    },
    
    t: function(key, fallback) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
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
    
    setLanguage: function(lang) {
        if (!this.translations[lang]) lang = 'en';
        this.currentLang = lang;
        localStorage.setItem('scanguru_lang', lang);
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
                } else {
                    el.textContent = translated;
                }
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
        const regions = {};
        Object.entries(this.languages).forEach(([code, lang]) => {
            if (!regions[lang.region]) regions[lang.region] = [];
            regions[lang.region].push({ code, ...lang });
        });
        const regionOrder = ['Americas', 'Europe', 'Asia', 'MENA', 'Africa', 'Oceania'];
        let html = '';
        regionOrder.forEach(region => {
            if (!regions[region]) return;
            html += `<div class="lang-region-header">${region}</div>`;
            regions[region].sort((a, b) => b.speakers - a.speakers).forEach(lang => {
                const isActive = lang.code === this.currentLang;
                html += `<div class="lang-option${isActive ? ' active' : ''}" data-lang="${lang.code}"><span>${lang.flag}</span><span>${lang.native}</span></div>`;
            });
        });
        dropdown.innerHTML = html;
        dropdown.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', () => {
                this.setLanguage(opt.dataset.lang);
                dropdown.classList.remove('show');
            });
        });
    },
    
    detectLanguage: function() {
        const saved = localStorage.getItem('scanguru_lang');
        if (saved && this.translations[saved]) return saved;
        try {
            const userStr = sessionStorage.getItem('scanguruUser');
            if (userStr) {
                const user = JSON.parse(userStr);
                if (user.language && this.translations[user.language]) return user.language;
            }
        } catch (e) {}
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang) {
            if (this.translations[browserLang]) return browserLang;
            const base = browserLang.split('-')[0];
            if (this.translations[base]) return base;
        }
        return 'en';
    },
    
    getLanguageCount: function() { return Object.keys(this.languages).length; },
    
    init: function() {
        const lang = this.detectLanguage();
        this.setLanguage(lang);
        this.buildDropdown();
        const btn = document.getElementById('langBtn');
        const dropdown = document.getElementById('langDropdown');
        if (btn && dropdown) {
            btn.addEventListener('click', (e) => { e.stopPropagation(); dropdown.classList.toggle('show'); });
            document.addEventListener('click', () => { dropdown.classList.remove('show'); });
        }
        console.log(`ScanGuru i18n v${this.version} - ${this.getLanguageCount()} languages`);
    },

    translations: {

        // ═══════════════════════════════════════════════════════════════════════════
        // ENGLISH - Complete Master (all keys)
        // ═══════════════════════════════════════════════════════════════════════════
        en: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Platform', modalities: 'Modalities', technology: 'Technology', clinical_evidence: 'Clinical Evidence', about: 'About', contact: 'Contact', try_free: 'Try It Free', apply_pilot: 'Sign Up Free', signup: 'Sign Up', login: 'Login' },
            home: { badge: 'Comprehensive Multi-Modal Platform', title: 'The Complete Medical Imaging AI Platform', subtitle: 'Multi-modal ensemble AI analyzing 400+ pathologies across all major imaging modalities.', stat_modalities: '8+', stat_modalities_label: 'Modalities', stat_pathologies: '400+', stat_pathologies_label: 'Pathologies', stat_languages: '82', stat_languages_label: 'Languages', stat_accuracy: '85-95%', stat_accuracy_label: 'Accuracy', cta_pilot: 'Sign Up Free', cta_try: 'Try It Free — No Account' },
            trust_bar: { hipaa: 'HIPAA Compliant', gdpr: 'GDPR Ready', dicom: 'DICOM Compatible', hl7: 'HL7/FHIR Integration', cloud: 'Cloud & On-Premise' },
            cta: { badge: 'Free Plan Available', title: 'Ready to Transform Your Imaging Workflow?', subtitle: 'Join leading healthcare institutions using ScanGuru.', btn_try: 'Try It Free', btn_pilot: 'Sign Up Free' },
            form: { name: 'Full Name', age: 'Age', sex: 'Sex', sex_male: 'Male', sex_female: 'Female', submit: 'Scan & Generate PDF', upload: 'Upload Image', select_modality: 'Select Modality' },
            results: { critical: 'Critical', warnings: 'Warnings', normal: 'Normal', download_pdf: 'Download PDF', view_details: 'View Details' },
            common: { loading: 'Loading...', save: 'Save', cancel: 'Cancel', download: 'Download', upload: 'Upload', search: 'Search', next: 'Next', back: 'Back', close: 'Close', yes: 'Yes', no: 'No', confirm: 'Confirm', delete: 'Delete', edit: 'Edit' },
            errors: { required: 'This field is required', file_too_large: 'File is too large', try_again: 'Please try again', server_error: 'Server error occurred' },
            dashboard: {
                sidebar: { overview: 'Overview', dashboard: 'Dashboard', analytics: 'Analytics', studies: 'Studies', all_studies: 'All Studies', recent: 'Recent', critical: 'Critical', patients: 'Patients', all_patients: 'All Patients', add_patient: 'Add Patient', system: 'System', settings: 'Settings', integrations: 'Integrations', audit_log: 'Audit Log', help: 'Help & Support', logout: 'Log Out' },
                header: { search_placeholder: 'Search patients, studies...', notifications: 'Notifications', help: 'Help', profile: 'Profile' },
                stats: { critical_findings: 'Critical Findings', need_immediate: 'Need immediate attention', pending_review: 'Pending Review', awaiting_radiologist: 'Awaiting radiologist', analyzed_today: 'Analyzed Today', studies_processed: 'Studies processed', total_studies: 'Total Studies', all_time: 'All time', total_patients: 'Total Patients', active_studies: 'Active Studies', this_week: 'This Week' },
                actions: { upload_study: 'Upload Study', new_analysis: 'New Analysis', view_reports: 'View Reports', export_data: 'Export Data', add_patient: 'Add Patient' },
                table: { patient: 'Patient', modality: 'Modality', status: 'Status', ai_analysis: 'AI Analysis', time: 'Time', findings: 'Findings', confidence: 'Confidence', mrn: 'MRN', dob: 'Date of Birth', sex: 'Sex', studies: 'Studies', last_visit: 'Last Visit', actions: 'Actions' },
                status: { critical: 'Critical', urgent: 'Urgent', routine: 'Routine', normal: 'Normal', pending: 'Pending', awaiting_review: 'Awaiting Review', reviewed: 'Reviewed', completed: 'Completed' },
                time: { just_now: 'Just now', minutes_ago: '{n} min ago', hours_ago: '{n}h ago', days_ago: '{n}d ago', today: 'Today', yesterday: 'Yesterday' },
                modality_widget: { title: 'Modality Breakdown', study: 'study', studies: 'studies' },
                empty: { no_studies: 'No studies yet', no_patients: 'No patients found', no_results: 'No results match your search', no_notifications: 'No new notifications' },
                pagination: { showing: 'Showing', of: 'of', results: 'results', previous: 'Previous', next: 'Next' }
            },
            login: {
                brand: { headline: 'Medical Imaging', headline_highlight: 'Intelligence', subtitle: 'Access your dashboard to monitor integrations, view AI analysis results, and manage your radiology workflow.', feature_monitoring: 'Real-time Monitoring', feature_ai: 'AI Analysis Results', feature_pacs: 'PACS/RIS Integration', feature_audit: 'Audit Logs', stat_hospitals: 'Hospitals Connected', stat_studies: 'Studies Analyzed', stat_uptime: 'Uptime SLA' },
                form: { title: 'Sign in to Portal', subtitle: 'Enter your credentials to access your dashboard', email_label: 'Email Address', email_placeholder: 'you@hospital.org', password_label: 'Password', remember_me: 'Remember me', forgot_password: 'Forgot password?', sign_in: 'Sign In', or_continue: 'or continue with', google_sso: 'Google SSO', saml_sso: 'SAML SSO', no_account: "Don't have an account?", contact_sales: 'Contact Sales', need_help: 'Need help? Contact support' },
                security: { badge: 'Protected by 256-bit SSL encryption • HIPAA Compliant' },
                errors: { invalid_credentials: 'Invalid email or password. Please try again.', server_error: 'Cannot reach the portal API. Please try again later.' }
            },
            patient: {
                title: 'Patients', subtitle: 'Manage patient records and view study history', search_placeholder: 'Search by name, MRN...',
                modal: { add_title: 'Add New Patient', edit_title: 'Edit Patient', first_name: 'First Name', last_name: 'Last Name', mrn: 'MRN (Medical Record Number)', mrn_placeholder: 'Auto-generated if empty', dob: 'Date of Birth', sex: 'Sex', sex_male: 'Male', sex_female: 'Female', sex_other: 'Other', email: 'Email (Optional)', phone: 'Phone (Optional)', notes: 'Notes', save: 'Save Patient', cancel: 'Cancel' },
                detail: { back: 'Back', overview: 'Overview', studies: 'Studies', timeline: 'Timeline', total_studies: 'Total Studies', critical_findings: 'Critical', last_scan: 'Last Scan', new_study: 'New Study', download_report: 'Download Report' },
                info: { age: 'Age', years: 'years', sex: 'Sex', male: 'Male', female: 'Female', mrn: 'MRN', dob: 'Date of Birth', created: 'Created', last_updated: 'Last Updated' },
                study_history: { title: 'Study History', no_studies: 'No studies yet for this patient', view_all: 'View All Studies', view_details: 'View Details' },
                findings: { title: 'AI Findings Summary', no_findings: 'No AI findings available', primary_finding: 'Primary Finding', secondary_findings: 'Secondary Findings', confidence: 'Confidence', recommendation: 'Recommendation' }
            }
        },

        // ═══════════════════════════════════════════════════════════════════════════
        // HINDI - हिन्दी (600M speakers)
        // ═══════════════════════════════════════════════════════════════════════════
        hi: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'प्लेटफॉर्म', modalities: 'मोडैलिटी', technology: 'तकनीक', clinical_evidence: 'नैदानिक साक्ष्य', about: 'हमारे बारे में', contact: 'संपर्क करें', try_free: 'मुफ्त में आज़माएं', apply_pilot: 'मुफ्त साइन अप करें', signup: 'साइन अप', login: 'लॉगिन' },
            home: { badge: 'व्यापक बहु-मोडल प्लेटफॉर्म', title: 'संपूर्ण चिकित्सा इमेजिंग AI प्लेटफॉर्म', subtitle: '400+ पैथोलॉजी का विश्लेषण करने वाला मल्टी-मोडल एन्सेम्बल AI', stat_modalities: '8+', stat_modalities_label: 'मोडैलिटी', stat_pathologies: '400+', stat_pathologies_label: 'पैथोलॉजी', stat_languages: '82', stat_languages_label: 'भाषाएं', stat_accuracy: '85-95%', stat_accuracy_label: 'सटीकता', cta_pilot: 'मुफ्त साइन अप करें', cta_try: 'मुफ्त में आज़माएं' },
            trust_bar: { hipaa: 'HIPAA अनुरूप', gdpr: 'GDPR तैयार', dicom: 'DICOM संगत', hl7: 'HL7/FHIR एकीकरण', cloud: 'क्लाउड और ऑन-प्रिमाइस' },
            cta: { badge: 'मुफ्त प्लान उपलब्ध', title: 'अपने इमेजिंग वर्कफ़्लो को बदलने के लिए तैयार?', btn_try: 'मुफ्त में आज़माएं', btn_pilot: 'मुफ्त साइन अप करें' },
            form: { name: 'पूरा नाम', age: 'आयु', sex: 'लिंग', sex_male: 'पुरुष', sex_female: 'महिला', submit: 'स्कैन करें और PDF बनाएं', upload: 'अपलोड करें', select_modality: 'मोडैलिटी चुनें' },
            results: { critical: 'गंभीर', warnings: 'चेतावनियां', normal: 'सामान्य', download_pdf: 'PDF डाउनलोड करें', view_details: 'विवरण देखें' },
            common: { loading: 'लोड हो रहा है...', save: 'सेव करें', cancel: 'रद्द करें', download: 'डाउनलोड', upload: 'अपलोड', search: 'खोजें', next: 'अगला', back: 'पीछे', close: 'बंद करें', yes: 'हां', no: 'नहीं', confirm: 'पुष्टि करें', delete: 'हटाएं', edit: 'संपादित करें' },
            errors: { required: 'यह फ़ील्ड आवश्यक है', file_too_large: 'फ़ाइल बहुत बड़ी है', try_again: 'कृपया पुनः प्रयास करें', server_error: 'सर्वर त्रुटि हुई' },
            dashboard: {
                sidebar: { overview: 'अवलोकन', dashboard: 'डैशबोर्ड', analytics: 'विश्लेषण', studies: 'अध्ययन', all_studies: 'सभी अध्ययन', recent: 'हाल के', critical: 'गंभीर', patients: 'मरीज़', all_patients: 'सभी मरीज़', add_patient: 'मरीज़ जोड़ें', system: 'सिस्टम', settings: 'सेटिंग्स', integrations: 'एकीकरण', audit_log: 'ऑडिट लॉग', help: 'सहायता और समर्थन', logout: 'लॉग आउट' },
                header: { search_placeholder: 'मरीज़, अध्ययन खोजें...', notifications: 'सूचनाएं', help: 'सहायता', profile: 'प्रोफ़ाइल' },
                stats: { critical_findings: 'गंभीर निष्कर्ष', need_immediate: 'तत्काल ध्यान चाहिए', pending_review: 'समीक्षा लंबित', awaiting_radiologist: 'रेडियोलॉजिस्ट की प्रतीक्षा', analyzed_today: 'आज विश्लेषित', studies_processed: 'अध्ययन संसाधित', total_studies: 'कुल अध्ययन', all_time: 'सभी समय', total_patients: 'कुल मरीज़', active_studies: 'सक्रिय अध्ययन', this_week: 'इस सप्ताह' },
                actions: { upload_study: 'अध्ययन अपलोड करें', new_analysis: 'नया विश्लेषण', view_reports: 'रिपोर्ट देखें', export_data: 'डेटा निर्यात करें', add_patient: 'मरीज़ जोड़ें' },
                table: { patient: 'मरीज़', modality: 'मोडैलिटी', status: 'स्थिति', ai_analysis: 'AI विश्लेषण', time: 'समय', findings: 'निष्कर्ष', confidence: 'विश्वास', mrn: 'MRN', dob: 'जन्म तिथि', sex: 'लिंग', studies: 'अध्ययन', last_visit: 'अंतिम यात्रा', actions: 'कार्रवाई' },
                status: { critical: 'गंभीर', urgent: 'अत्यावश्यक', routine: 'नियमित', normal: 'सामान्य', pending: 'लंबित', awaiting_review: 'समीक्षा की प्रतीक्षा', reviewed: 'समीक्षित', completed: 'पूर्ण' },
                time: { just_now: 'अभी', minutes_ago: '{n} मिनट पहले', hours_ago: '{n} घंटे पहले', days_ago: '{n} दिन पहले', today: 'आज', yesterday: 'कल' },
                modality_widget: { title: 'मोडैलिटी ब्रेकडाउन', study: 'अध्ययन', studies: 'अध्ययन' },
                empty: { no_studies: 'अभी तक कोई अध्ययन नहीं', no_patients: 'कोई मरीज़ नहीं मिला', no_results: 'कोई परिणाम मेल नहीं खाता', no_notifications: 'कोई नई सूचना नहीं' },
                pagination: { showing: 'दिखा रहे हैं', of: 'में से', results: 'परिणाम', previous: 'पिछला', next: 'अगला' }
            },
            login: {
                brand: { headline: 'चिकित्सा इमेजिंग', headline_highlight: 'इंटेलिजेंस', subtitle: 'अपने डैशबोर्ड तक पहुंचें, एकीकरण की निगरानी करें, AI विश्लेषण परिणाम देखें।', feature_monitoring: 'रीयल-टाइम मॉनिटरिंग', feature_ai: 'AI विश्लेषण परिणाम', feature_pacs: 'PACS/RIS एकीकरण', feature_audit: 'ऑडिट लॉग', stat_hospitals: 'अस्पताल जुड़े', stat_studies: 'अध्ययन विश्लेषित', stat_uptime: 'अपटाइम SLA' },
                form: { title: 'पोर्टल में साइन इन करें', subtitle: 'डैशबोर्ड तक पहुंचने के लिए अपनी साख दर्ज करें', email_label: 'ईमेल पता', email_placeholder: 'you@hospital.org', password_label: 'पासवर्ड', remember_me: 'मुझे याद रखें', forgot_password: 'पासवर्ड भूल गए?', sign_in: 'साइन इन करें', or_continue: 'या जारी रखें', google_sso: 'Google SSO', saml_sso: 'SAML SSO', no_account: 'खाता नहीं है?', contact_sales: 'बिक्री से संपर्क करें', need_help: 'सहायता चाहिए? समर्थन से संपर्क करें' },
                security: { badge: '256-बिट SSL एन्क्रिप्शन द्वारा संरक्षित • HIPAA अनुरूप' },
                errors: { invalid_credentials: 'अमान्य ईमेल या पासवर्ड। कृपया पुनः प्रयास करें।', server_error: 'पोर्टल API तक नहीं पहुंच सकते। कृपया बाद में पुनः प्रयास करें।' }
            },
            patient: {
                title: 'मरीज़', subtitle: 'मरीज़ रिकॉर्ड प्रबंधित करें और अध्ययन इतिहास देखें', search_placeholder: 'नाम, MRN से खोजें...',
                modal: { add_title: 'नया मरीज़ जोड़ें', edit_title: 'मरीज़ संपादित करें', first_name: 'पहला नाम', last_name: 'अंतिम नाम', mrn: 'MRN (मेडिकल रिकॉर्ड नंबर)', mrn_placeholder: 'खाली छोड़ने पर स्वचालित', dob: 'जन्म तिथि', sex: 'लिंग', sex_male: 'पुरुष', sex_female: 'महिला', sex_other: 'अन्य', email: 'ईमेल (वैकल्पिक)', phone: 'फ़ोन (वैकल्पिक)', notes: 'नोट्स', save: 'मरीज़ सेव करें', cancel: 'रद्द करें' },
                detail: { back: 'वापस', overview: 'अवलोकन', studies: 'अध्ययन', timeline: 'समयरेखा', total_studies: 'कुल अध्ययन', critical_findings: 'गंभीर', last_scan: 'अंतिम स्कैन', new_study: 'नया अध्ययन', download_report: 'रिपोर्ट डाउनलोड करें' },
                info: { age: 'आयु', years: 'वर्ष', sex: 'लिंग', male: 'पुरुष', female: 'महिला', mrn: 'MRN', dob: 'जन्म तिथि', created: 'बनाया गया', last_updated: 'अंतिम अपडेट' },
                study_history: { title: 'अध्ययन इतिहास', no_studies: 'इस मरीज़ के लिए अभी तक कोई अध्ययन नहीं', view_all: 'सभी अध्ययन देखें', view_details: 'विवरण देखें' },
                findings: { title: 'AI निष्कर्ष सारांश', no_findings: 'कोई AI निष्कर्ष उपलब्ध नहीं', primary_finding: 'प्राथमिक निष्कर्ष', secondary_findings: 'द्वितीयक निष्कर्ष', confidence: 'विश्वास', recommendation: 'अनुशंसा' }
            }
        },

        // Chinese Simplified (1.1B speakers)
        zh: {
            brand: { name: 'ScanGuru' },
            nav: { platform: '平台', modalities: '影像模式', technology: '技术', clinical_evidence: '临床证据', about: '关于我们', contact: '联系我们', try_free: '免费试用', apply_pilot: '免费注册', login: '登录' },
            home: { badge: '全面多模式平台', title: '完整的医学影像AI平台', stat_modalities: '8+', stat_pathologies: '400+', stat_languages: '82', stat_accuracy: '85-95%', cta_pilot: '免费注册', cta_try: '免费试用' },
            trust_bar: { hipaa: 'HIPAA合规', gdpr: 'GDPR就绪', dicom: 'DICOM兼容' },
            form: { name: '全名', age: '年龄', sex: '性别', sex_male: '男', sex_female: '女', submit: '扫描并生成PDF' },
            results: { critical: '危急', warnings: '警告', normal: '正常', download_pdf: '下载PDF' },
            common: { loading: '加载中...', save: '保存', cancel: '取消', download: '下载', search: '搜索', next: '下一步', back: '返回', close: '关闭' },
            dashboard: {
                sidebar: { overview: '概览', dashboard: '仪表板', analytics: '分析', studies: '检查', all_studies: '所有检查', recent: '最近', critical: '危急', patients: '患者', all_patients: '所有患者', add_patient: '添加患者', settings: '设置', logout: '退出登录' },
                stats: { critical_findings: '危急发现', need_immediate: '需要立即关注', pending_review: '待审核', analyzed_today: '今日分析', total_studies: '总检查数', total_patients: '总患者数', this_week: '本周' },
                actions: { upload_study: '上传检查', new_analysis: '新分析', view_reports: '查看报告', add_patient: '添加患者' },
                table: { patient: '患者', modality: '模式', status: '状态', ai_analysis: 'AI分析', time: '时间', findings: '发现', mrn: '病历号', dob: '出生日期', sex: '性别', studies: '检查', actions: '操作' },
                status: { critical: '危急', urgent: '紧急', routine: '常规', normal: '正常', pending: '待处理', reviewed: '已审核', completed: '已完成' },
                time: { just_now: '刚刚', minutes_ago: '{n}分钟前', hours_ago: '{n}小时前', today: '今天', yesterday: '昨天' },
                empty: { no_studies: '暂无检查', no_patients: '未找到患者' },
                pagination: { showing: '显示', of: '/', results: '条结果', previous: '上一页', next: '下一页' }
            },
            login: {
                brand: { headline: '医学影像', headline_highlight: '智能', feature_monitoring: '实时监控', feature_ai: 'AI分析结果', feature_pacs: 'PACS/RIS集成' },
                form: { title: '登录门户', subtitle: '输入您的凭据', email_label: '电子邮箱', password_label: '密码', remember_me: '记住我', forgot_password: '忘记密码？', sign_in: '登录', no_account: '没有账户？', contact_sales: '联系销售' },
                errors: { invalid_credentials: '邮箱或密码无效' }
            },
            patient: {
                title: '患者', subtitle: '管理患者记录并查看检查历史',
                modal: { add_title: '添加新患者', first_name: '名', last_name: '姓', save: '保存患者', cancel: '取消' },
                detail: { back: '返回', overview: '概览', studies: '检查', total_studies: '总检查数', new_study: '新检查', download_report: '下载报告' }
            }
        },

        // Spanish (550M speakers)
        es: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Plataforma', modalities: 'Modalidades', technology: 'Tecnología', clinical_evidence: 'Evidencia Clínica', about: 'Nosotros', contact: 'Contacto', try_free: 'Prueba Gratis', apply_pilot: 'Regístrate Gratis', login: 'Iniciar Sesión' },
            home: { badge: 'Plataforma Multimodal Integral', title: 'La Plataforma Completa de IA para Imágenes Médicas', stat_modalities: '8+', stat_pathologies: '400+', stat_languages: '82', stat_accuracy: '85-95%', cta_pilot: 'Regístrate Gratis', cta_try: 'Prueba Gratis' },
            trust_bar: { hipaa: 'Cumple HIPAA', gdpr: 'Listo para GDPR', dicom: 'Compatible DICOM' },
            form: { name: 'Nombre Completo', age: 'Edad', sex: 'Sexo', sex_male: 'Masculino', sex_female: 'Femenino', submit: 'Escanear y Generar PDF' },
            results: { critical: 'Crítico', warnings: 'Advertencias', normal: 'Normal', download_pdf: 'Descargar PDF' },
            common: { loading: 'Cargando...', save: 'Guardar', cancel: 'Cancelar', download: 'Descargar', search: 'Buscar', next: 'Siguiente', back: 'Atrás', close: 'Cerrar' },
            dashboard: {
                sidebar: { overview: 'Resumen', dashboard: 'Panel', analytics: 'Análisis', studies: 'Estudios', all_studies: 'Todos los Estudios', recent: 'Recientes', critical: 'Críticos', patients: 'Pacientes', all_patients: 'Todos los Pacientes', add_patient: 'Agregar Paciente', settings: 'Configuración', logout: 'Cerrar Sesión' },
                stats: { critical_findings: 'Hallazgos Críticos', need_immediate: 'Requieren atención inmediata', pending_review: 'Pendientes de Revisión', analyzed_today: 'Analizados Hoy', total_studies: 'Total de Estudios', total_patients: 'Total de Pacientes', this_week: 'Esta Semana' },
                actions: { upload_study: 'Subir Estudio', new_analysis: 'Nuevo Análisis', view_reports: 'Ver Informes', add_patient: 'Agregar Paciente' },
                table: { patient: 'Paciente', modality: 'Modalidad', status: 'Estado', ai_analysis: 'Análisis IA', time: 'Hora', findings: 'Hallazgos', mrn: 'NHC', dob: 'Fecha de Nacimiento', sex: 'Sexo', studies: 'Estudios', actions: 'Acciones' },
                status: { critical: 'Crítico', urgent: 'Urgente', routine: 'Rutina', normal: 'Normal', pending: 'Pendiente', reviewed: 'Revisado', completed: 'Completado' },
                empty: { no_studies: 'Sin estudios aún', no_patients: 'No se encontraron pacientes' },
                pagination: { showing: 'Mostrando', of: 'de', results: 'resultados', previous: 'Anterior', next: 'Siguiente' }
            },
            login: {
                form: { title: 'Iniciar Sesión en el Portal', subtitle: 'Ingrese sus credenciales', email_label: 'Correo Electrónico', password_label: 'Contraseña', remember_me: 'Recordarme', forgot_password: '¿Olvidó su contraseña?', sign_in: 'Iniciar Sesión', no_account: '¿No tiene cuenta?', contact_sales: 'Contactar Ventas' },
                errors: { invalid_credentials: 'Correo o contraseña inválidos.' }
            },
            patient: {
                title: 'Pacientes', subtitle: 'Gestione registros de pacientes',
                modal: { add_title: 'Agregar Nuevo Paciente', first_name: 'Nombre', last_name: 'Apellido', save: 'Guardar Paciente', cancel: 'Cancelar' },
                detail: { back: 'Volver', overview: 'Resumen', studies: 'Estudios', total_studies: 'Total de Estudios', new_study: 'Nuevo Estudio', download_report: 'Descargar Informe' }
            }
        },

        // Arabic (420M speakers) - RTL
        ar: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'المنصة', modalities: 'الطرائق', technology: 'التكنولوجيا', clinical_evidence: 'الأدلة السريرية', about: 'عنا', contact: 'اتصل بنا', try_free: 'جرب مجاناً', apply_pilot: 'سجل مجاناً', login: 'تسجيل الدخول' },
            home: { badge: 'منصة شاملة متعددة الوسائط', title: 'منصة الذكاء الاصطناعي الكاملة للتصوير الطبي', stat_modalities: '+8', stat_pathologies: '+400', stat_languages: '82', stat_accuracy: '85-95%', cta_pilot: 'سجل مجاناً', cta_try: 'جرب مجاناً' },
            trust_bar: { hipaa: 'متوافق مع HIPAA', gdpr: 'جاهز لـ GDPR', dicom: 'متوافق مع DICOM' },
            form: { name: 'الاسم الكامل', age: 'العمر', sex: 'الجنس', sex_male: 'ذكر', sex_female: 'أنثى', submit: 'مسح وإنشاء PDF' },
            results: { critical: 'حرج', warnings: 'تحذيرات', normal: 'طبيعي', download_pdf: 'تحميل PDF' },
            common: { loading: 'جاري التحميل...', save: 'حفظ', cancel: 'إلغاء', download: 'تحميل', search: 'بحث', next: 'التالي', back: 'رجوع', close: 'إغلاق' },
            dashboard: {
                sidebar: { overview: 'نظرة عامة', dashboard: 'لوحة التحكم', analytics: 'التحليلات', studies: 'الدراسات', all_studies: 'جميع الدراسات', recent: 'الأخيرة', critical: 'الحرجة', patients: 'المرضى', all_patients: 'جميع المرضى', add_patient: 'إضافة مريض', settings: 'الإعدادات', logout: 'تسجيل الخروج' },
                stats: { critical_findings: 'نتائج حرجة', need_immediate: 'تحتاج اهتمام فوري', pending_review: 'بانتظار المراجعة', analyzed_today: 'تم تحليلها اليوم', total_studies: 'إجمالي الدراسات', total_patients: 'إجمالي المرضى', this_week: 'هذا الأسبوع' },
                actions: { upload_study: 'رفع دراسة', new_analysis: 'تحليل جديد', view_reports: 'عرض التقارير', add_patient: 'إضافة مريض' },
                table: { patient: 'المريض', modality: 'الطريقة', status: 'الحالة', ai_analysis: 'تحليل AI', time: 'الوقت', findings: 'النتائج', mrn: 'رقم السجل الطبي', dob: 'تاريخ الميلاد', sex: 'الجنس', studies: 'الدراسات', actions: 'الإجراءات' },
                status: { critical: 'حرج', urgent: 'عاجل', routine: 'روتيني', normal: 'طبيعي', pending: 'معلق', reviewed: 'تمت المراجعة', completed: 'مكتمل' },
                empty: { no_studies: 'لا توجد دراسات بعد', no_patients: 'لم يتم العثور على مرضى' },
                pagination: { showing: 'عرض', of: 'من', results: 'نتيجة', previous: 'السابق', next: 'التالي' }
            },
            login: {
                form: { title: 'تسجيل الدخول إلى البوابة', subtitle: 'أدخل بيانات اعتمادك', email_label: 'البريد الإلكتروني', password_label: 'كلمة المرور', remember_me: 'تذكرني', forgot_password: 'نسيت كلمة المرور؟', sign_in: 'تسجيل الدخول', no_account: 'ليس لديك حساب؟', contact_sales: 'اتصل بالمبيعات' },
                errors: { invalid_credentials: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.' }
            },
            patient: {
                title: 'المرضى', subtitle: 'إدارة سجلات المرضى',
                modal: { add_title: 'إضافة مريض جديد', first_name: 'الاسم الأول', last_name: 'اسم العائلة', save: 'حفظ المريض', cancel: 'إلغاء' },
                detail: { back: 'رجوع', overview: 'نظرة عامة', studies: 'الدراسات', total_studies: 'إجمالي الدراسات', new_study: 'دراسة جديدة', download_report: 'تحميل التقرير' }
            }
        },

        // French (280M speakers)
        fr: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Plateforme', modalities: 'Modalités', technology: 'Technologie', clinical_evidence: 'Preuves Cliniques', about: 'À Propos', contact: 'Contact', try_free: 'Essai Gratuit', apply_pilot: 'Inscription Gratuite', login: 'Connexion' },
            home: { badge: 'Plateforme Multimodale Complète', title: 'La Plateforme IA Complète pour l\'Imagerie Médicale', cta_pilot: 'Inscription Gratuite', cta_try: 'Essai Gratuit' },
            form: { name: 'Nom Complet', age: 'Âge', sex: 'Sexe', sex_male: 'Homme', sex_female: 'Femme', submit: 'Scanner et Générer PDF' },
            results: { critical: 'Critique', warnings: 'Avertissements', normal: 'Normal', download_pdf: 'Télécharger PDF' },
            common: { loading: 'Chargement...', save: 'Enregistrer', cancel: 'Annuler', download: 'Télécharger', search: 'Rechercher', next: 'Suivant', back: 'Retour', close: 'Fermer' },
            dashboard: {
                sidebar: { overview: 'Aperçu', dashboard: 'Tableau de Bord', analytics: 'Analyses', studies: 'Études', all_studies: 'Toutes les Études', recent: 'Récentes', critical: 'Critiques', patients: 'Patients', all_patients: 'Tous les Patients', add_patient: 'Ajouter un Patient', settings: 'Paramètres', logout: 'Déconnexion' },
                stats: { critical_findings: 'Résultats Critiques', pending_review: 'En Attente de Révision', analyzed_today: 'Analysés Aujourd\'hui', total_studies: 'Total des Études', total_patients: 'Total des Patients', this_week: 'Cette Semaine' },
                table: { patient: 'Patient', modality: 'Modalité', status: 'Statut', ai_analysis: 'Analyse IA', time: 'Heure', findings: 'Résultats', mrn: 'NIP', dob: 'Date de Naissance', sex: 'Sexe', studies: 'Études', actions: 'Actions' },
                status: { critical: 'Critique', urgent: 'Urgent', routine: 'Routine', normal: 'Normal', pending: 'En Attente', reviewed: 'Révisé', completed: 'Terminé' },
                pagination: { showing: 'Affichage', of: 'sur', results: 'résultats', previous: 'Précédent', next: 'Suivant' }
            },
            login: { form: { title: 'Connexion au Portail', email_label: 'Adresse Email', password_label: 'Mot de Passe', remember_me: 'Se souvenir de moi', sign_in: 'Se Connecter' } },
            patient: { title: 'Patients', modal: { add_title: 'Ajouter un Nouveau Patient', first_name: 'Prénom', last_name: 'Nom', save: 'Enregistrer', cancel: 'Annuler' }, detail: { back: 'Retour', overview: 'Aperçu', studies: 'Études', new_study: 'Nouvelle Étude' } }
        },

        // Bengali (270M speakers)
        bn: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'প্ল্যাটফর্ম', modalities: 'মোডালিটি', technology: 'প্রযুক্তি', about: 'আমাদের সম্পর্কে', contact: 'যোগাযোগ', try_free: 'বিনামূল্যে চেষ্টা করুন', login: 'লগইন' },
            home: { title: 'সম্পূর্ণ মেডিকেল ইমেজিং AI প্ল্যাটফর্ম', cta_try: 'বিনামূল্যে চেষ্টা করুন' },
            form: { name: 'পূর্ণ নাম', age: 'বয়স', sex: 'লিঙ্গ', sex_male: 'পুরুষ', sex_female: 'মহিলা', submit: 'স্ক্যান করুন এবং PDF তৈরি করুন' },
            results: { critical: 'জটিল', warnings: 'সতর্কতা', normal: 'স্বাভাবিক', download_pdf: 'PDF ডাউনলোড করুন' },
            common: { loading: 'লোড হচ্ছে...', save: 'সংরক্ষণ', cancel: 'বাতিল', search: 'অনুসন্ধান', next: 'পরবর্তী', back: 'পিছনে' },
            dashboard: {
                sidebar: { overview: 'সংক্ষিপ্ত বিবরণ', dashboard: 'ড্যাশবোর্ড', studies: 'স্টাডি', patients: 'রোগী', settings: 'সেটিংস', logout: 'লগআউট' },
                stats: { critical_findings: 'জটিল ফলাফল', pending_review: 'পর্যালোচনা মুলতুবি', total_studies: 'মোট স্টাডি', total_patients: 'মোট রোগী' },
                table: { patient: 'রোগী', status: 'অবস্থা', time: 'সময়', findings: 'ফলাফল', actions: 'কার্যক্রম' },
                status: { critical: 'জটিল', urgent: 'জরুরি', normal: 'স্বাভাবিক', pending: 'মুলতুবি', completed: 'সম্পন্ন' }
            },
            login: { form: { title: 'পোর্টালে সাইন ইন করুন', email_label: 'ইমেল', password_label: 'পাসওয়ার্ড', sign_in: 'সাইন ইন' } },
            patient: { title: 'রোগী', modal: { add_title: 'নতুন রোগী যোগ করুন', save: 'সংরক্ষণ', cancel: 'বাতিল' }, detail: { back: 'পিছনে', studies: 'স্টাডি' } }
        },

        // Portuguese (260M speakers)
        pt: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Plataforma', modalities: 'Modalidades', technology: 'Tecnologia', about: 'Sobre', contact: 'Contacto', try_free: 'Experimentar Grátis', login: 'Entrar' },
            form: { name: 'Nome Completo', age: 'Idade', sex: 'Sexo', sex_male: 'Masculino', sex_female: 'Feminino', submit: 'Digitalizar e Gerar PDF' },
            results: { critical: 'Crítico', warnings: 'Avisos', normal: 'Normal', download_pdf: 'Transferir PDF' },
            common: { loading: 'A carregar...', save: 'Guardar', cancel: 'Cancelar', search: 'Pesquisar', next: 'Seguinte', back: 'Voltar' },
            dashboard: {
                sidebar: { overview: 'Visão Geral', dashboard: 'Painel', studies: 'Estudos', patients: 'Pacientes', settings: 'Definições', logout: 'Terminar Sessão' },
                stats: { critical_findings: 'Achados Críticos', pending_review: 'Aguardando Revisão', total_studies: 'Total de Estudos', total_patients: 'Total de Pacientes' },
                table: { patient: 'Paciente', status: 'Estado', time: 'Hora', findings: 'Achados', actions: 'Ações' },
                status: { critical: 'Crítico', urgent: 'Urgente', normal: 'Normal', pending: 'Pendente', completed: 'Concluído' }
            },
            login: { form: { title: 'Iniciar Sessão no Portal', email_label: 'Email', password_label: 'Palavra-passe', sign_in: 'Entrar' } },
            patient: { title: 'Pacientes', modal: { add_title: 'Adicionar Novo Paciente', save: 'Guardar', cancel: 'Cancelar' }, detail: { back: 'Voltar', studies: 'Estudos' } }
        },

        // Russian (250M speakers)
        ru: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Платформа', modalities: 'Модальности', technology: 'Технологии', about: 'О нас', contact: 'Контакты', try_free: 'Попробовать бесплатно', login: 'Вход' },
            home: { title: 'Полная AI платформа для медицинской визуализации', cta_try: 'Попробовать бесплатно' },
            form: { name: 'Полное имя', age: 'Возраст', sex: 'Пол', sex_male: 'Мужской', sex_female: 'Женский', submit: 'Сканировать и создать PDF' },
            results: { critical: 'Критический', warnings: 'Предупреждения', normal: 'Норма', download_pdf: 'Скачать PDF' },
            common: { loading: 'Загрузка...', save: 'Сохранить', cancel: 'Отмена', search: 'Поиск', next: 'Далее', back: 'Назад' },
            dashboard: {
                sidebar: { overview: 'Обзор', dashboard: 'Панель', studies: 'Исследования', patients: 'Пациенты', settings: 'Настройки', logout: 'Выход' },
                stats: { critical_findings: 'Критические находки', pending_review: 'Ожидает проверки', total_studies: 'Всего исследований', total_patients: 'Всего пациентов' },
                table: { patient: 'Пациент', status: 'Статус', time: 'Время', findings: 'Находки', actions: 'Действия' },
                status: { critical: 'Критический', urgent: 'Срочный', normal: 'Норма', pending: 'В ожидании', completed: 'Завершено' }
            },
            login: { form: { title: 'Вход в портал', email_label: 'Email', password_label: 'Пароль', sign_in: 'Войти' } },
            patient: { title: 'Пациенты', modal: { add_title: 'Добавить пациента', save: 'Сохранить', cancel: 'Отмена' }, detail: { back: 'Назад', studies: 'Исследования' } }
        },

        // Portuguese Brazil (210M speakers)
        'pt-BR': {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Plataforma', modalities: 'Modalidades', technology: 'Tecnologia', about: 'Sobre', contact: 'Contato', try_free: 'Teste Grátis', login: 'Entrar' },
            form: { name: 'Nome Completo', age: 'Idade', sex: 'Sexo', sex_male: 'Masculino', sex_female: 'Feminino', submit: 'Escanear e Gerar PDF' },
            results: { critical: 'Crítico', warnings: 'Avisos', normal: 'Normal', download_pdf: 'Baixar PDF' },
            common: { loading: 'Carregando...', save: 'Salvar', cancel: 'Cancelar', search: 'Buscar', next: 'Próximo', back: 'Voltar' },
            dashboard: {
                sidebar: { overview: 'Visão Geral', dashboard: 'Painel', studies: 'Exames', patients: 'Pacientes', settings: 'Configurações', logout: 'Sair' },
                stats: { critical_findings: 'Achados Críticos', pending_review: 'Aguardando Revisão', total_studies: 'Total de Exames', total_patients: 'Total de Pacientes' },
                table: { patient: 'Paciente', status: 'Status', time: 'Hora', findings: 'Achados', actions: 'Ações' },
                status: { critical: 'Crítico', urgent: 'Urgente', normal: 'Normal', pending: 'Pendente', completed: 'Concluído' }
            },
            login: { form: { title: 'Entrar no Portal', email_label: 'Email', password_label: 'Senha', sign_in: 'Entrar' } },
            patient: { title: 'Pacientes', modal: { add_title: 'Adicionar Novo Paciente', save: 'Salvar', cancel: 'Cancelar' }, detail: { back: 'Voltar', studies: 'Exames' } }
        },

        // Indonesian (200M speakers)
        id: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Platform', modalities: 'Modalitas', technology: 'Teknologi', about: 'Tentang', contact: 'Kontak', try_free: 'Coba Gratis', login: 'Masuk' },
            form: { name: 'Nama Lengkap', age: 'Usia', sex: 'Jenis Kelamin', sex_male: 'Laki-laki', sex_female: 'Perempuan', submit: 'Pindai dan Buat PDF' },
            results: { critical: 'Kritis', warnings: 'Peringatan', normal: 'Normal', download_pdf: 'Unduh PDF' },
            common: { loading: 'Memuat...', save: 'Simpan', cancel: 'Batal', search: 'Cari', next: 'Selanjutnya', back: 'Kembali' },
            dashboard: {
                sidebar: { overview: 'Ikhtisar', dashboard: 'Dasbor', studies: 'Studi', patients: 'Pasien', settings: 'Pengaturan', logout: 'Keluar' },
                stats: { critical_findings: 'Temuan Kritis', pending_review: 'Menunggu Tinjauan', total_studies: 'Total Studi', total_patients: 'Total Pasien' },
                table: { patient: 'Pasien', status: 'Status', time: 'Waktu', findings: 'Temuan', actions: 'Tindakan' },
                status: { critical: 'Kritis', urgent: 'Mendesak', normal: 'Normal', pending: 'Tertunda', completed: 'Selesai' }
            },
            login: { form: { title: 'Masuk ke Portal', email_label: 'Email', password_label: 'Kata Sandi', sign_in: 'Masuk' } },
            patient: { title: 'Pasien', modal: { add_title: 'Tambah Pasien Baru', save: 'Simpan', cancel: 'Batal' }, detail: { back: 'Kembali', studies: 'Studi' } }
        },

        // Urdu (230M speakers) - RTL
        ur: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'پلیٹ فارم', modalities: 'طریقے', technology: 'ٹیکنالوجی', about: 'ہمارے بارے میں', contact: 'رابطہ', try_free: 'مفت آزمائیں', login: 'لاگ ان' },
            form: { name: 'پورا نام', age: 'عمر', sex: 'جنس', sex_male: 'مرد', sex_female: 'عورت', submit: 'اسکین کریں اور PDF بنائیں' },
            results: { critical: 'نازک', warnings: 'انتباہات', normal: 'نارمل', download_pdf: 'PDF ڈاؤن لوڈ کریں' },
            common: { loading: 'لوڈ ہو رہا ہے...', save: 'محفوظ کریں', cancel: 'منسوخ', search: 'تلاش', next: 'اگلا', back: 'واپس' },
            dashboard: {
                sidebar: { overview: 'جائزہ', dashboard: 'ڈیش بورڈ', studies: 'مطالعات', patients: 'مریض', settings: 'ترتیبات', logout: 'لاگ آؤٹ' },
                stats: { critical_findings: 'نازک نتائج', pending_review: 'جائزہ زیر التواء', total_studies: 'کل مطالعات', total_patients: 'کل مریض' },
                table: { patient: 'مریض', status: 'حیثیت', time: 'وقت', findings: 'نتائج', actions: 'اقدامات' },
                status: { critical: 'نازک', urgent: 'فوری', normal: 'نارمل', pending: 'زیر التواء', completed: 'مکمل' }
            },
            login: { form: { title: 'پورٹل میں سائن ان کریں', email_label: 'ای میل', password_label: 'پاس ورڈ', sign_in: 'سائن ان' } },
            patient: { title: 'مریض', modal: { add_title: 'نیا مریض شامل کریں', save: 'محفوظ کریں', cancel: 'منسوخ' }, detail: { back: 'واپس', studies: 'مطالعات' } }
        },

        // German (100M speakers)
        de: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Plattform', modalities: 'Modalitäten', technology: 'Technologie', about: 'Über uns', contact: 'Kontakt', try_free: 'Kostenlos testen', login: 'Anmelden' },
            form: { name: 'Vollständiger Name', age: 'Alter', sex: 'Geschlecht', sex_male: 'Männlich', sex_female: 'Weiblich', submit: 'Scannen und PDF erstellen' },
            results: { critical: 'Kritisch', warnings: 'Warnungen', normal: 'Normal', download_pdf: 'PDF herunterladen' },
            common: { loading: 'Wird geladen...', save: 'Speichern', cancel: 'Abbrechen', search: 'Suchen', next: 'Weiter', back: 'Zurück' },
            dashboard: {
                sidebar: { overview: 'Übersicht', dashboard: 'Dashboard', studies: 'Studien', patients: 'Patienten', settings: 'Einstellungen', logout: 'Abmelden' },
                stats: { critical_findings: 'Kritische Befunde', pending_review: 'Ausstehende Überprüfung', total_studies: 'Studien gesamt', total_patients: 'Patienten gesamt' },
                table: { patient: 'Patient', status: 'Status', time: 'Zeit', findings: 'Befunde', actions: 'Aktionen' },
                status: { critical: 'Kritisch', urgent: 'Dringend', normal: 'Normal', pending: 'Ausstehend', completed: 'Abgeschlossen' }
            },
            login: { form: { title: 'Portal-Anmeldung', email_label: 'E-Mail', password_label: 'Passwort', sign_in: 'Anmelden' } },
            patient: { title: 'Patienten', modal: { add_title: 'Neuen Patienten hinzufügen', save: 'Speichern', cancel: 'Abbrechen' }, detail: { back: 'Zurück', studies: 'Studien' } }
        },

        // Japanese (125M speakers)
        ja: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'プラットフォーム', modalities: 'モダリティ', technology: 'テクノロジー', about: '会社概要', contact: 'お問い合わせ', try_free: '無料で試す', login: 'ログイン' },
            form: { name: '氏名', age: '年齢', sex: '性別', sex_male: '男性', sex_female: '女性', submit: 'スキャンしてPDFを生成' },
            results: { critical: '重大', warnings: '警告', normal: '正常', download_pdf: 'PDFダウンロード' },
            common: { loading: '読み込み中...', save: '保存', cancel: 'キャンセル', search: '検索', next: '次へ', back: '戻る' },
            dashboard: {
                sidebar: { overview: '概要', dashboard: 'ダッシュボード', studies: '検査', patients: '患者', settings: '設定', logout: 'ログアウト' },
                stats: { critical_findings: '重大な所見', pending_review: 'レビュー待ち', total_studies: '総検査数', total_patients: '総患者数' },
                table: { patient: '患者', status: 'ステータス', time: '時間', findings: '所見', actions: 'アクション' },
                status: { critical: '重大', urgent: '緊急', normal: '正常', pending: '保留中', completed: '完了' }
            },
            login: { form: { title: 'ポータルにサインイン', email_label: 'メールアドレス', password_label: 'パスワード', sign_in: 'サインイン' } },
            patient: { title: '患者', modal: { add_title: '新規患者を追加', save: '保存', cancel: 'キャンセル' }, detail: { back: '戻る', studies: '検査' } }
        },

        // Punjabi (125M speakers)
        pa: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'ਪਲੇਟਫਾਰਮ', modalities: 'ਮੋਡੈਲਿਟੀ', about: 'ਸਾਡੇ ਬਾਰੇ', contact: 'ਸੰਪਰਕ', try_free: 'ਮੁਫ਼ਤ ਅਜ਼ਮਾਓ', login: 'ਲੌਗਇਨ' },
            form: { name: 'ਪੂਰਾ ਨਾਮ', age: 'ਉਮਰ', sex: 'ਲਿੰਗ', sex_male: 'ਮਰਦ', sex_female: 'ਔਰਤ', submit: 'ਸਕੈਨ ਕਰੋ ਅਤੇ PDF ਬਣਾਓ' },
            results: { critical: 'ਗੰਭੀਰ', warnings: 'ਚੇਤਾਵਨੀਆਂ', normal: 'ਆਮ', download_pdf: 'PDF ਡਾਊਨਲੋਡ ਕਰੋ' },
            common: { loading: 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...', save: 'ਸੇਵ ਕਰੋ', cancel: 'ਰੱਦ ਕਰੋ', search: 'ਖੋਜੋ', next: 'ਅਗਲਾ', back: 'ਪਿੱਛੇ' },
            dashboard: {
                sidebar: { overview: 'ਸੰਖੇਪ', dashboard: 'ਡੈਸ਼ਬੋਰਡ', studies: 'ਅਧਿਐਨ', patients: 'ਮਰੀਜ਼', settings: 'ਸੈਟਿੰਗਾਂ', logout: 'ਲੌਗ ਆਊਟ' },
                stats: { critical_findings: 'ਗੰਭੀਰ ਨਤੀਜੇ', pending_review: 'ਸਮੀਖਿਆ ਬਕਾਇਆ', total_studies: 'ਕੁੱਲ ਅਧਿਐਨ', total_patients: 'ਕੁੱਲ ਮਰੀਜ਼' },
                table: { patient: 'ਮਰੀਜ਼', status: 'ਸਥਿਤੀ', time: 'ਸਮਾਂ', findings: 'ਨਤੀਜੇ', actions: 'ਕਾਰਵਾਈਆਂ' },
                status: { critical: 'ਗੰਭੀਰ', urgent: 'ਜ਼ਰੂਰੀ', normal: 'ਆਮ', pending: 'ਬਕਾਇਆ', completed: 'ਪੂਰਾ' }
            },
            login: { form: { title: 'ਪੋਰਟਲ ਵਿੱਚ ਸਾਈਨ ਇਨ ਕਰੋ', email_label: 'ਈਮੇਲ', password_label: 'ਪਾਸਵਰਡ', sign_in: 'ਸਾਈਨ ਇਨ' } },
            patient: { title: 'ਮਰੀਜ਼', modal: { add_title: 'ਨਵਾਂ ਮਰੀਜ਼ ਜੋੜੋ', save: 'ਸੇਵ ਕਰੋ', cancel: 'ਰੱਦ ਕਰੋ' }, detail: { back: 'ਪਿੱਛੇ', studies: 'ਅਧਿਐਨ' } }
        },

        // Persian (110M speakers) - RTL
        fa: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'پلتفرم', modalities: 'روش‌ها', about: 'درباره ما', contact: 'تماس', try_free: 'امتحان رایگان', login: 'ورود' },
            form: { name: 'نام کامل', age: 'سن', sex: 'جنسیت', sex_male: 'مرد', sex_female: 'زن', submit: 'اسکن و ایجاد PDF' },
            results: { critical: 'بحرانی', warnings: 'هشدارها', normal: 'طبیعی', download_pdf: 'دانلود PDF' },
            common: { loading: 'در حال بارگذاری...', save: 'ذخیره', cancel: 'لغو', search: 'جستجو', next: 'بعدی', back: 'قبلی' },
            dashboard: {
                sidebar: { overview: 'نمای کلی', dashboard: 'داشبورد', studies: 'مطالعات', patients: 'بیماران', settings: 'تنظیمات', logout: 'خروج' },
                stats: { critical_findings: 'یافته‌های بحرانی', pending_review: 'در انتظار بررسی', total_studies: 'کل مطالعات', total_patients: 'کل بیماران' },
                table: { patient: 'بیمار', status: 'وضعیت', time: 'زمان', findings: 'یافته‌ها', actions: 'اقدامات' },
                status: { critical: 'بحرانی', urgent: 'فوری', normal: 'طبیعی', pending: 'در انتظار', completed: 'تکمیل شده' }
            },
            login: { form: { title: 'ورود به پورتال', email_label: 'ایمیل', password_label: 'رمز عبور', sign_in: 'ورود' } },
            patient: { title: 'بیماران', modal: { add_title: 'افزودن بیمار جدید', save: 'ذخیره', cancel: 'لغو' }, detail: { back: 'بازگشت', studies: 'مطالعات' } }
        },

        // Korean (80M speakers)
        ko: {
            brand: { name: 'ScanGuru' },
            nav: { platform: '플랫폼', modalities: '모달리티', about: '소개', contact: '연락처', try_free: '무료 체험', login: '로그인' },
            form: { name: '이름', age: '나이', sex: '성별', sex_male: '남성', sex_female: '여성', submit: '스캔 및 PDF 생성' },
            results: { critical: '위험', warnings: '경고', normal: '정상', download_pdf: 'PDF 다운로드' },
            common: { loading: '로딩 중...', save: '저장', cancel: '취소', search: '검색', next: '다음', back: '뒤로' },
            dashboard: {
                sidebar: { overview: '개요', dashboard: '대시보드', studies: '검사', patients: '환자', settings: '설정', logout: '로그아웃' },
                stats: { critical_findings: '위험 소견', pending_review: '검토 대기', total_studies: '총 검사 수', total_patients: '총 환자 수' },
                table: { patient: '환자', status: '상태', time: '시간', findings: '소견', actions: '작업' },
                status: { critical: '위험', urgent: '긴급', normal: '정상', pending: '대기 중', completed: '완료' }
            },
            login: { form: { title: '포털 로그인', email_label: '이메일', password_label: '비밀번호', sign_in: '로그인' } },
            patient: { title: '환자', modal: { add_title: '새 환자 추가', save: '저장', cancel: '취소' }, detail: { back: '뒤로', studies: '검사' } }
        },

        // Swahili (100M speakers)
        sw: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Jukwaa', about: 'Kuhusu', contact: 'Wasiliana', try_free: 'Jaribu Bure', login: 'Ingia' },
            form: { name: 'Jina Kamili', age: 'Umri', sex: 'Jinsia', sex_male: 'Mwanaume', sex_female: 'Mwanamke', submit: 'Changanua na Tengeneza PDF' },
            results: { critical: 'Muhimu', warnings: 'Onyo', normal: 'Kawaida', download_pdf: 'Pakua PDF' },
            common: { loading: 'Inapakia...', save: 'Hifadhi', cancel: 'Ghairi', search: 'Tafuta', next: 'Ifuatayo', back: 'Rudi' },
            dashboard: { sidebar: { dashboard: 'Dashibodi', studies: 'Masomo', patients: 'Wagonjwa', settings: 'Mipangilio', logout: 'Toka' }, stats: { critical_findings: 'Matokeo Muhimu', total_studies: 'Jumla ya Masomo', total_patients: 'Jumla ya Wagonjwa' }, table: { patient: 'Mgonjwa', status: 'Hali', time: 'Wakati', actions: 'Vitendo' }, status: { critical: 'Muhimu', normal: 'Kawaida', completed: 'Imekamilika' } },
            login: { form: { title: 'Ingia kwenye Portal', email_label: 'Barua pepe', password_label: 'Nenosiri', sign_in: 'Ingia' } },
            patient: { title: 'Wagonjwa', modal: { add_title: 'Ongeza Mgonjwa Mpya', save: 'Hifadhi', cancel: 'Ghairi' } }
        },

        // Nigerian Pidgin (100M speakers)
        pcm: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Platform', about: 'About Us', contact: 'Contact', try_free: 'Try Am Free', login: 'Enter' },
            form: { name: 'Full Name', age: 'Age', sex: 'Man or Woman', sex_male: 'Man', sex_female: 'Woman', submit: 'Scan and Make PDF' },
            results: { critical: 'Serious', warnings: 'Warning', normal: 'Normal', download_pdf: 'Download PDF' },
            common: { loading: 'E dey load...', save: 'Save', cancel: 'Cancel', search: 'Find', next: 'Next', back: 'Go Back' },
            dashboard: { sidebar: { dashboard: 'Dashboard', studies: 'Studies', patients: 'Patients', settings: 'Settings', logout: 'Comot' }, stats: { critical_findings: 'Serious Results', total_studies: 'All Studies', total_patients: 'All Patients' }, table: { patient: 'Patient', status: 'Status', time: 'Time', actions: 'Actions' }, status: { critical: 'Serious', normal: 'Normal', completed: 'Done' } },
            login: { form: { title: 'Enter Portal', email_label: 'Email', password_label: 'Password', sign_in: 'Enter' } },
            patient: { title: 'Patients', modal: { add_title: 'Add New Patient', save: 'Save', cancel: 'Cancel' } }
        },

        // Vietnamese (85M speakers)
        vi: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Nền tảng', modalities: 'Phương thức', about: 'Về chúng tôi', contact: 'Liên hệ', try_free: 'Dùng thử miễn phí', login: 'Đăng nhập' },
            form: { name: 'Họ và tên', age: 'Tuổi', sex: 'Giới tính', sex_male: 'Nam', sex_female: 'Nữ', submit: 'Quét và tạo PDF' },
            results: { critical: 'Nghiêm trọng', warnings: 'Cảnh báo', normal: 'Bình thường', download_pdf: 'Tải PDF' },
            common: { loading: 'Đang tải...', save: 'Lưu', cancel: 'Hủy', search: 'Tìm kiếm', next: 'Tiếp', back: 'Quay lại' },
            dashboard: { sidebar: { overview: 'Tổng quan', dashboard: 'Bảng điều khiển', studies: 'Nghiên cứu', patients: 'Bệnh nhân', settings: 'Cài đặt', logout: 'Đăng xuất' }, stats: { critical_findings: 'Phát hiện nghiêm trọng', pending_review: 'Chờ xem xét', total_studies: 'Tổng số nghiên cứu', total_patients: 'Tổng số bệnh nhân' }, table: { patient: 'Bệnh nhân', status: 'Trạng thái', time: 'Thời gian', findings: 'Phát hiện', actions: 'Hành động' }, status: { critical: 'Nghiêm trọng', urgent: 'Khẩn cấp', normal: 'Bình thường', pending: 'Đang chờ', completed: 'Hoàn thành' } },
            login: { form: { title: 'Đăng nhập Portal', email_label: 'Email', password_label: 'Mật khẩu', sign_in: 'Đăng nhập' } },
            patient: { title: 'Bệnh nhân', modal: { add_title: 'Thêm bệnh nhân mới', save: 'Lưu', cancel: 'Hủy' }, detail: { back: 'Quay lại', studies: 'Nghiên cứu' } }
        },

        // Tamil (85M speakers)
        ta: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'தளம்', about: 'எங்களை பற்றி', contact: 'தொடர்பு', try_free: 'இலவசமாக முயற்சிக்கவும்', login: 'உள்நுழை' },
            form: { name: 'முழு பெயர்', age: 'வயது', sex: 'பாலினம்', sex_male: 'ஆண்', sex_female: 'பெண்', submit: 'ஸ்கேன் செய்து PDF உருவாக்கு' },
            results: { critical: 'மிக முக்கியம்', warnings: 'எச்சரிக்கைகள்', normal: 'சாதாரண', download_pdf: 'PDF பதிவிறக்கம்' },
            common: { loading: 'ஏற்றுகிறது...', save: 'சேமி', cancel: 'ரத்து', search: 'தேடு', next: 'அடுத்து', back: 'பின்' },
            dashboard: { sidebar: { dashboard: 'டாஷ்போர்டு', studies: 'ஆய்வுகள்', patients: 'நோயாளிகள்', settings: 'அமைப்புகள்', logout: 'வெளியேறு' }, stats: { critical_findings: 'முக்கிய கண்டுபிடிப்புகள்', total_studies: 'மொத்த ஆய்வுகள்', total_patients: 'மொத்த நோயாளிகள்' }, table: { patient: 'நோயாளி', status: 'நிலை', time: 'நேரம்', actions: 'செயல்கள்' }, status: { critical: 'மிக முக்கியம்', normal: 'சாதாரண', completed: 'முடிந்தது' } },
            login: { form: { title: 'போர்டலில் உள்நுழையவும்', email_label: 'மின்னஞ்சல்', password_label: 'கடவுச்சொல்', sign_in: 'உள்நுழை' } },
            patient: { title: 'நோயாளிகள்', modal: { add_title: 'புதிய நோயாளி சேர்', save: 'சேமி', cancel: 'ரத்து' } }
        },

        // Telugu (83M speakers)
        te: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'ప్లాట్‌ఫారం', about: 'మా గురించి', contact: 'సంప్రదించండి', try_free: 'ఉచితంగా ప్రయత్నించండి', login: 'లాగిన్' },
            form: { name: 'పూర్తి పేరు', age: 'వయస్సు', sex: 'లింగం', sex_male: 'పురుషుడు', sex_female: 'స్త్రీ', submit: 'స్కాన్ చేసి PDF సృష్టించు' },
            results: { critical: 'తీవ్రమైన', warnings: 'హెచ్చరికలు', normal: 'సాధారణ', download_pdf: 'PDF డౌన్‌లోడ్' },
            common: { loading: 'లోడ్ అవుతోంది...', save: 'సేవ్', cancel: 'రద్దు', search: 'వెతకండి', next: 'తదుపరి', back: 'వెనక్కి' },
            dashboard: { sidebar: { dashboard: 'డాష్‌బోర్డ్', studies: 'అధ్యయనాలు', patients: 'రోగులు', settings: 'సెట్టింగ్స్', logout: 'లాగౌట్' }, stats: { critical_findings: 'తీవ్రమైన ఫలితాలు', total_studies: 'మొత్తం అధ్యయనాలు', total_patients: 'మొత్తం రోగులు' }, table: { patient: 'రోగి', status: 'స్థితి', time: 'సమయం', actions: 'చర్యలు' }, status: { critical: 'తీవ్రమైన', normal: 'సాధారణ', completed: 'పూర్తయింది' } },
            login: { form: { title: 'పోర్టల్‌లో సైన్ ఇన్', email_label: 'ఇమెయిల్', password_label: 'పాస్‌వర్డ్', sign_in: 'సైన్ ఇన్' } },
            patient: { title: 'రోగులు', modal: { add_title: 'కొత్త రోగి జోడించు', save: 'సేవ్', cancel: 'రద్దు' } }
        },

        // Marathi (83M speakers)
        mr: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'प्लॅटफॉर्म', about: 'आमच्याबद्दल', contact: 'संपर्क', try_free: 'मोफत वापरून पहा', login: 'लॉगिन' },
            form: { name: 'पूर्ण नाव', age: 'वय', sex: 'लिंग', sex_male: 'पुरुष', sex_female: 'स्त्री', submit: 'स्कॅन करा आणि PDF तयार करा' },
            results: { critical: 'गंभीर', warnings: 'इशारे', normal: 'सामान्य', download_pdf: 'PDF डाउनलोड करा' },
            common: { loading: 'लोड होत आहे...', save: 'सेव्ह करा', cancel: 'रद्द करा', search: 'शोधा', next: 'पुढे', back: 'मागे' },
            dashboard: { sidebar: { dashboard: 'डॅशबोर्ड', studies: 'अभ्यास', patients: 'रुग्ण', settings: 'सेटिंग्ज', logout: 'लॉगआउट' }, stats: { critical_findings: 'गंभीर निष्कर्ष', total_studies: 'एकूण अभ्यास', total_patients: 'एकूण रुग्ण' }, table: { patient: 'रुग्ण', status: 'स्थिती', time: 'वेळ', actions: 'क्रिया' }, status: { critical: 'गंभीर', normal: 'सामान्य', completed: 'पूर्ण' } },
            login: { form: { title: 'पोर्टलमध्ये साइन इन करा', email_label: 'ईमेल', password_label: 'पासवर्ड', sign_in: 'साइन इन' } },
            patient: { title: 'रुग्ण', modal: { add_title: 'नवीन रुग्ण जोडा', save: 'सेव्ह करा', cancel: 'रद्द करा' } }
        },

        // Malay (80M speakers)
        ms: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Platform', about: 'Tentang Kami', contact: 'Hubungi', try_free: 'Cuba Percuma', login: 'Log Masuk' },
            form: { name: 'Nama Penuh', age: 'Umur', sex: 'Jantina', sex_male: 'Lelaki', sex_female: 'Perempuan', submit: 'Imbas dan Jana PDF' },
            results: { critical: 'Kritikal', warnings: 'Amaran', normal: 'Normal', download_pdf: 'Muat Turun PDF' },
            common: { loading: 'Memuatkan...', save: 'Simpan', cancel: 'Batal', search: 'Cari', next: 'Seterusnya', back: 'Kembali' },
            dashboard: { sidebar: { dashboard: 'Papan Pemuka', studies: 'Kajian', patients: 'Pesakit', settings: 'Tetapan', logout: 'Log Keluar' }, stats: { critical_findings: 'Penemuan Kritikal', total_studies: 'Jumlah Kajian', total_patients: 'Jumlah Pesakit' }, table: { patient: 'Pesakit', status: 'Status', time: 'Masa', actions: 'Tindakan' }, status: { critical: 'Kritikal', normal: 'Normal', completed: 'Selesai' } },
            login: { form: { title: 'Log Masuk ke Portal', email_label: 'E-mel', password_label: 'Kata Laluan', sign_in: 'Log Masuk' } },
            patient: { title: 'Pesakit', modal: { add_title: 'Tambah Pesakit Baharu', save: 'Simpan', cancel: 'Batal' } }
        },

        // Hausa (77M speakers)
        ha: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Dandali', about: 'Game da mu', contact: 'Tuntuɓi', try_free: 'Gwada Kyauta', login: 'Shiga' },
            form: { name: 'Sunan cikakke', age: 'Shekaru', sex: 'Jinsi', sex_male: 'Namiji', sex_female: 'Mace', submit: 'Duba kuma ƙirƙiri PDF' },
            results: { critical: 'Mai mahimmanci', warnings: 'Gargadi', normal: 'Al\'ada', download_pdf: 'Sauke PDF' },
            common: { loading: 'Ana lodawa...', save: 'Ajiye', cancel: 'Soke', search: 'Nema', next: 'Na gaba', back: 'Komawa' },
            dashboard: { sidebar: { dashboard: 'Dashboard', studies: 'Nazari', patients: 'Marasa lafiya', settings: 'Saituna', logout: 'Fita' }, stats: { critical_findings: 'Sakamako mai muhimmanci', total_studies: 'Jimlar Nazari', total_patients: 'Jimlar Marasa lafiya' }, table: { patient: 'Mai haƙuri', status: 'Matsayi', time: 'Lokaci', actions: 'Ayyuka' }, status: { critical: 'Mai mahimmanci', normal: 'Al\'ada', completed: 'An gama' } },
            login: { form: { title: 'Shiga Portal', email_label: 'Imel', password_label: 'Kalmar wucewa', sign_in: 'Shiga' } },
            patient: { title: 'Marasa lafiya', modal: { add_title: 'Ƙara sabon mai haƙuri', save: 'Ajiye', cancel: 'Soke' } }
        },

        // Italian (65M speakers)
        it: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Piattaforma', modalities: 'Modalità', about: 'Chi siamo', contact: 'Contatti', try_free: 'Prova Gratis', login: 'Accedi' },
            form: { name: 'Nome Completo', age: 'Età', sex: 'Sesso', sex_male: 'Maschio', sex_female: 'Femmina', submit: 'Scansiona e Genera PDF' },
            results: { critical: 'Critico', warnings: 'Avvisi', normal: 'Normale', download_pdf: 'Scarica PDF' },
            common: { loading: 'Caricamento...', save: 'Salva', cancel: 'Annulla', search: 'Cerca', next: 'Avanti', back: 'Indietro' },
            dashboard: { sidebar: { overview: 'Panoramica', dashboard: 'Dashboard', studies: 'Studi', patients: 'Pazienti', settings: 'Impostazioni', logout: 'Esci' }, stats: { critical_findings: 'Risultati Critici', pending_review: 'In Attesa di Revisione', total_studies: 'Totale Studi', total_patients: 'Totale Pazienti' }, table: { patient: 'Paziente', status: 'Stato', time: 'Ora', findings: 'Risultati', actions: 'Azioni' }, status: { critical: 'Critico', urgent: 'Urgente', normal: 'Normale', pending: 'In attesa', completed: 'Completato' } },
            login: { form: { title: 'Accedi al Portale', email_label: 'Email', password_label: 'Password', sign_in: 'Accedi' } },
            patient: { title: 'Pazienti', modal: { add_title: 'Aggiungi Nuovo Paziente', save: 'Salva', cancel: 'Annulla' }, detail: { back: 'Indietro', studies: 'Studi' } }
        },

        // Thai (60M speakers)
        th: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'แพลตฟอร์ม', about: 'เกี่ยวกับเรา', contact: 'ติดต่อ', try_free: 'ทดลองใช้ฟรี', login: 'เข้าสู่ระบบ' },
            form: { name: 'ชื่อ-นามสกุล', age: 'อายุ', sex: 'เพศ', sex_male: 'ชาย', sex_female: 'หญิง', submit: 'สแกนและสร้าง PDF' },
            results: { critical: 'วิกฤต', warnings: 'คำเตือน', normal: 'ปกติ', download_pdf: 'ดาวน์โหลด PDF' },
            common: { loading: 'กำลังโหลด...', save: 'บันทึก', cancel: 'ยกเลิก', search: 'ค้นหา', next: 'ถัดไป', back: 'กลับ' },
            dashboard: { sidebar: { dashboard: 'แดชบอร์ด', studies: 'การศึกษา', patients: 'ผู้ป่วย', settings: 'ตั้งค่า', logout: 'ออกจากระบบ' }, stats: { critical_findings: 'ผลวิกฤต', total_studies: 'การศึกษาทั้งหมด', total_patients: 'ผู้ป่วยทั้งหมด' }, table: { patient: 'ผู้ป่วย', status: 'สถานะ', time: 'เวลา', actions: 'การดำเนินการ' }, status: { critical: 'วิกฤต', normal: 'ปกติ', completed: 'เสร็จสิ้น' } },
            login: { form: { title: 'เข้าสู่ระบบพอร์ทัล', email_label: 'อีเมล', password_label: 'รหัสผ่าน', sign_in: 'เข้าสู่ระบบ' } },
            patient: { title: 'ผู้ป่วย', modal: { add_title: 'เพิ่มผู้ป่วยใหม่', save: 'บันทึก', cancel: 'ยกเลิก' } }
        },

        // Amharic (57M speakers)
        am: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'መድረክ', about: 'ስለ እኛ', contact: 'ያግኙን', try_free: 'በነጻ ይሞክሩ', login: 'ግባ' },
            form: { name: 'ሙሉ ስም', age: 'ዕድሜ', sex: 'ጾታ', sex_male: 'ወንድ', sex_female: 'ሴት', submit: 'ቃኝ እና PDF ፍጠር' },
            results: { critical: 'ወሳኝ', warnings: 'ማስጠንቀቂያዎች', normal: 'መደበኛ', download_pdf: 'PDF አውርድ' },
            common: { loading: 'በመጫን ላይ...', save: 'አስቀምጥ', cancel: 'ሰርዝ', search: 'ፈልግ', next: 'ቀጣይ', back: 'ተመለስ' },
            dashboard: { sidebar: { dashboard: 'ዳሽቦርድ', studies: 'ጥናቶች', patients: 'ታካሚዎች', settings: 'ቅንብሮች', logout: 'ውጣ' }, stats: { critical_findings: 'ወሳኝ ግኝቶች', total_studies: 'ጠቅላላ ጥናቶች', total_patients: 'ጠቅላላ ታካሚዎች' }, table: { patient: 'ታካሚ', status: 'ሁኔታ', time: 'ጊዜ', actions: 'ድርጊቶች' }, status: { critical: 'ወሳኝ', normal: 'መደበኛ', completed: 'ተጠናቋል' } },
            login: { form: { title: 'ወደ ፖርታል ግባ', email_label: 'ኢሜይል', password_label: 'የይለፍ ቃል', sign_in: 'ግባ' } },
            patient: { title: 'ታካሚዎች', modal: { add_title: 'አዲስ ታካሚ ጨምር', save: 'አስቀምጥ', cancel: 'ሰርዝ' } }
        },

        // Gujarati (56M speakers)
        gu: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'પ્લેટફોર્મ', about: 'અમારા વિશે', contact: 'સંપર્ક', try_free: 'મફત અજમાવો', login: 'લૉગિન' },
            form: { name: 'પૂરું નામ', age: 'ઉંમર', sex: 'જાતિ', sex_male: 'પુરુષ', sex_female: 'સ્ત્રી', submit: 'સ્કેન કરો અને PDF બનાવો' },
            results: { critical: 'ગંભીર', warnings: 'ચેતવણીઓ', normal: 'સામાન્ય', download_pdf: 'PDF ડાઉનલોડ કરો' },
            common: { loading: 'લોડ થઈ રહ્યું છે...', save: 'સેવ કરો', cancel: 'રદ કરો', search: 'શોધો', next: 'આગળ', back: 'પાછળ' },
            dashboard: { sidebar: { dashboard: 'ડેશબોર્ડ', studies: 'અભ્યાસો', patients: 'દર્દીઓ', settings: 'સેટિંગ્સ', logout: 'લૉગઆઉટ' }, stats: { critical_findings: 'ગંભીર તારણો', total_studies: 'કુલ અભ્યાસો', total_patients: 'કુલ દર્દીઓ' }, table: { patient: 'દર્દી', status: 'સ્થિતિ', time: 'સમય', actions: 'ક્રિયાઓ' }, status: { critical: 'ગંભીર', normal: 'સામાન્ય', completed: 'પૂર્ણ' } },
            login: { form: { title: 'પોર્ટલમાં સાઇન ઇન કરો', email_label: 'ઈમેલ', password_label: 'પાસવર્ડ', sign_in: 'સાઇન ઇન' } },
            patient: { title: 'દર્દીઓ', modal: { add_title: 'નવો દર્દી ઉમેરો', save: 'સેવ કરો', cancel: 'રદ કરો' } }
        },

        // Turkish (80M speakers)
        tr: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Platform', modalities: 'Modaliteler', about: 'Hakkımızda', contact: 'İletişim', try_free: 'Ücretsiz Dene', login: 'Giriş' },
            form: { name: 'Ad Soyad', age: 'Yaş', sex: 'Cinsiyet', sex_male: 'Erkek', sex_female: 'Kadın', submit: 'Tara ve PDF Oluştur' },
            results: { critical: 'Kritik', warnings: 'Uyarılar', normal: 'Normal', download_pdf: 'PDF İndir' },
            common: { loading: 'Yükleniyor...', save: 'Kaydet', cancel: 'İptal', search: 'Ara', next: 'İleri', back: 'Geri' },
            dashboard: { sidebar: { overview: 'Genel Bakış', dashboard: 'Gösterge Paneli', studies: 'Çalışmalar', patients: 'Hastalar', settings: 'Ayarlar', logout: 'Çıkış' }, stats: { critical_findings: 'Kritik Bulgular', pending_review: 'İnceleme Bekliyor', total_studies: 'Toplam Çalışma', total_patients: 'Toplam Hasta' }, table: { patient: 'Hasta', status: 'Durum', time: 'Zaman', findings: 'Bulgular', actions: 'İşlemler' }, status: { critical: 'Kritik', urgent: 'Acil', normal: 'Normal', pending: 'Beklemede', completed: 'Tamamlandı' } },
            login: { form: { title: 'Portala Giriş', email_label: 'E-posta', password_label: 'Şifre', sign_in: 'Giriş Yap' } },
            patient: { title: 'Hastalar', modal: { add_title: 'Yeni Hasta Ekle', save: 'Kaydet', cancel: 'İptal' }, detail: { back: 'Geri', studies: 'Çalışmalar' } }
        },

        // Polish (45M speakers)
        pl: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Platforma', about: 'O nas', contact: 'Kontakt', try_free: 'Wypróbuj za darmo', login: 'Zaloguj' },
            form: { name: 'Imię i nazwisko', age: 'Wiek', sex: 'Płeć', sex_male: 'Mężczyzna', sex_female: 'Kobieta', submit: 'Skanuj i generuj PDF' },
            results: { critical: 'Krytyczny', warnings: 'Ostrzeżenia', normal: 'Normalny', download_pdf: 'Pobierz PDF' },
            common: { loading: 'Ładowanie...', save: 'Zapisz', cancel: 'Anuluj', search: 'Szukaj', next: 'Dalej', back: 'Wstecz' },
            dashboard: { sidebar: { dashboard: 'Panel', studies: 'Badania', patients: 'Pacjenci', settings: 'Ustawienia', logout: 'Wyloguj' }, stats: { critical_findings: 'Krytyczne wyniki', total_studies: 'Łączna liczba badań', total_patients: 'Łączna liczba pacjentów' }, table: { patient: 'Pacjent', status: 'Status', time: 'Czas', actions: 'Akcje' }, status: { critical: 'Krytyczny', normal: 'Normalny', completed: 'Zakończony' } },
            login: { form: { title: 'Zaloguj do portalu', email_label: 'Email', password_label: 'Hasło', sign_in: 'Zaloguj' } },
            patient: { title: 'Pacjenci', modal: { add_title: 'Dodaj nowego pacjenta', save: 'Zapisz', cancel: 'Anuluj' } }
        },

        // Kannada (45M speakers)
        kn: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'ವೇದಿಕೆ', about: 'ನಮ್ಮ ಬಗ್ಗೆ', contact: 'ಸಂಪರ್ಕಿಸಿ', try_free: 'ಉಚಿತವಾಗಿ ಪ್ರಯತ್ನಿಸಿ', login: 'ಲಾಗಿನ್' },
            form: { name: 'ಪೂರ್ಣ ಹೆಸರು', age: 'ವಯಸ್ಸು', sex: 'ಲಿಂಗ', sex_male: 'ಪುರುಷ', sex_female: 'ಮಹಿಳೆ', submit: 'ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಮತ್ತು PDF ರಚಿಸಿ' },
            results: { critical: 'ನಿರ್ಣಾಯಕ', warnings: 'ಎಚ್ಚರಿಕೆಗಳು', normal: 'ಸಾಮಾನ್ಯ', download_pdf: 'PDF ಡೌನ್‌ಲೋಡ್' },
            common: { loading: 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...', save: 'ಉಳಿಸಿ', cancel: 'ರದ್ದು', search: 'ಹುಡುಕಿ', next: 'ಮುಂದೆ', back: 'ಹಿಂದೆ' },
            dashboard: { sidebar: { dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್', studies: 'ಅಧ್ಯಯನಗಳು', patients: 'ರೋಗಿಗಳು', settings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು', logout: 'ಲಾಗ್ಔಟ್' }, stats: { critical_findings: 'ನಿರ್ಣಾಯಕ ಫಲಿತಾಂಶಗಳು', total_studies: 'ಒಟ್ಟು ಅಧ್ಯಯನಗಳು', total_patients: 'ಒಟ್ಟು ರೋಗಿಗಳು' }, table: { patient: 'ರೋಗಿ', status: 'ಸ್ಥಿತಿ', time: 'ಸಮಯ', actions: 'ಕ್ರಿಯೆಗಳು' }, status: { critical: 'ನಿರ್ಣಾಯಕ', normal: 'ಸಾಮಾನ್ಯ', completed: 'ಪೂರ್ಣ' } },
            login: { form: { title: 'ಪೋರ್ಟಲ್‌ಗೆ ಸೈನ್ ಇನ್', email_label: 'ಇಮೇಲ್', password_label: 'ಪಾಸ್‌ವರ್ಡ್', sign_in: 'ಸೈನ್ ಇನ್' } },
            patient: { title: 'ರೋಗಿಗಳು', modal: { add_title: 'ಹೊಸ ರೋಗಿಯನ್ನು ಸೇರಿಸಿ', save: 'ಉಳಿಸಿ', cancel: 'ರದ್ದು' } }
        },

        // Yoruba (45M speakers)
        yo: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Pẹpẹ', about: 'Nípa wa', contact: 'Kan si wa', try_free: 'Gbiyanju lọfẹ', login: 'Wọle' },
            form: { name: 'Orukọ kikun', age: 'Ọjọ ori', sex: 'Abo', sex_male: 'Ọkunrin', sex_female: 'Obinrin', submit: 'Ṣayẹwo ati ṣẹda PDF' },
            results: { critical: 'Pataki', warnings: 'Ìkìlọ̀', normal: 'Deede', download_pdf: 'Gba PDF' },
            common: { loading: 'Ń gbéwọlé...', save: 'Fi pamọ́', cancel: 'Fagile', search: 'Ṣàwárí', next: 'Tókàn', back: 'Pada' },
            dashboard: { sidebar: { dashboard: 'Dasibọọdu', studies: 'Ìwádìí', patients: 'Àwọn aláìsàn', settings: 'Àwọn ètò', logout: 'Jade' }, stats: { critical_findings: 'Àwọn àbájáde pàtàkì', total_studies: 'Àpapọ̀ ìwádìí', total_patients: 'Àpapọ̀ àwọn aláìsàn' }, status: { critical: 'Pataki', normal: 'Deede', completed: 'Ti parí' } },
            login: { form: { title: 'Wọlé sí Portal', email_label: 'Ímeèlì', password_label: 'Ọ̀rọ̀ aṣínà', sign_in: 'Wọle' } },
            patient: { title: 'Àwọn aláìsàn', modal: { add_title: 'Fi aláìsàn tuntun kun', save: 'Fi pamọ́', cancel: 'Fagile' } }
        },

        // Igbo (45M speakers)
        ig: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Ikpo okwu', about: 'Maka anyị', contact: 'Kpọtụrụ anyị', try_free: 'Nwale n\'efu', login: 'Banye' },
            form: { name: 'Aha zuru oke', age: 'Afọ', sex: 'Okike', sex_male: 'Nwoke', sex_female: 'Nwanyị', submit: 'Nyochaa ma mepụta PDF' },
            results: { critical: 'Dị oke mkpa', warnings: 'Ịdọ aka na ntị', normal: 'Nkịtị', download_pdf: 'Budata PDF' },
            common: { loading: 'Na-ebu...', save: 'Chekwaa', cancel: 'Kagbuo', search: 'Chọọ', next: 'Ọzọ', back: 'Laghachi' },
            dashboard: { sidebar: { dashboard: 'Dashboard', studies: 'Ọmụmụ', patients: 'Ndị ọrịa', settings: 'Ntọala', logout: 'Pụọ' }, stats: { critical_findings: 'Nchọpụta dị oke mkpa', total_studies: 'Ngụkọta ọmụmụ', total_patients: 'Ngụkọta ndị ọrịa' }, status: { critical: 'Dị oke mkpa', normal: 'Nkịtị', completed: 'Emechara' } },
            login: { form: { title: 'Banye na Portal', email_label: 'Email', password_label: 'Okwuntụghe', sign_in: 'Banye' } },
            patient: { title: 'Ndị ọrịa', modal: { add_title: 'Tinye onye ọrịa ọhụrụ', save: 'Chekwaa', cancel: 'Kagbuo' } }
        },

        // Filipino (45M speakers)
        fil: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Platform', about: 'Tungkol sa amin', contact: 'Makipag-ugnayan', try_free: 'Subukan nang Libre', login: 'Mag-login' },
            form: { name: 'Buong Pangalan', age: 'Edad', sex: 'Kasarian', sex_male: 'Lalaki', sex_female: 'Babae', submit: 'I-scan at Gumawa ng PDF' },
            results: { critical: 'Kritikal', warnings: 'Mga Babala', normal: 'Normal', download_pdf: 'I-download ang PDF' },
            common: { loading: 'Naglo-load...', save: 'I-save', cancel: 'Kanselahin', search: 'Hanapin', next: 'Susunod', back: 'Bumalik' },
            dashboard: { sidebar: { dashboard: 'Dashboard', studies: 'Mga Pag-aaral', patients: 'Mga Pasyente', settings: 'Mga Setting', logout: 'Mag-logout' }, stats: { critical_findings: 'Mga Kritikal na Resulta', total_studies: 'Kabuuang Pag-aaral', total_patients: 'Kabuuang Pasyente' }, status: { critical: 'Kritikal', normal: 'Normal', completed: 'Nakumpleto' } },
            login: { form: { title: 'Mag-sign in sa Portal', email_label: 'Email', password_label: 'Password', sign_in: 'Mag-sign in' } },
            patient: { title: 'Mga Pasyente', modal: { add_title: 'Magdagdag ng Bagong Pasyente', save: 'I-save', cancel: 'Kanselahin' } }
        },

        // Ukrainian (40M speakers)
        uk: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Платформа', about: 'Про нас', contact: 'Контакти', try_free: 'Спробувати безкоштовно', login: 'Увійти' },
            form: { name: 'Повне ім\'я', age: 'Вік', sex: 'Стать', sex_male: 'Чоловіча', sex_female: 'Жіноча', submit: 'Сканувати та створити PDF' },
            results: { critical: 'Критичний', warnings: 'Попередження', normal: 'Норма', download_pdf: 'Завантажити PDF' },
            common: { loading: 'Завантаження...', save: 'Зберегти', cancel: 'Скасувати', search: 'Пошук', next: 'Далі', back: 'Назад' },
            dashboard: { sidebar: { dashboard: 'Панель', studies: 'Дослідження', patients: 'Пацієнти', settings: 'Налаштування', logout: 'Вихід' }, stats: { critical_findings: 'Критичні знахідки', total_studies: 'Всього досліджень', total_patients: 'Всього пацієнтів' }, status: { critical: 'Критичний', normal: 'Норма', completed: 'Завершено' } },
            login: { form: { title: 'Вхід до порталу', email_label: 'Email', password_label: 'Пароль', sign_in: 'Увійти' } },
            patient: { title: 'Пацієнти', modal: { add_title: 'Додати нового пацієнта', save: 'Зберегти', cancel: 'Скасувати' } }
        },

        // Malayalam (38M speakers)
        ml: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'പ്ലാറ്റ്ഫോം', about: 'ഞങ്ങളെക്കുറിച്ച്', contact: 'ബന്ധപ്പെടുക', try_free: 'സൗജന്യമായി പരീക്ഷിക്കുക', login: 'ലോഗിൻ' },
            form: { name: 'മുഴുവൻ പേര്', age: 'പ്രായം', sex: 'ലിംഗം', sex_male: 'പുരുഷൻ', sex_female: 'സ്ത്രീ', submit: 'സ്കാൻ ചെയ്ത് PDF സൃഷ്ടിക്കുക' },
            results: { critical: 'ഗുരുതരമായ', warnings: 'മുന്നറിയിപ്പുകൾ', normal: 'സാധാരണ', download_pdf: 'PDF ഡൗൺലോഡ്' },
            common: { loading: 'ലോഡ് ചെയ്യുന്നു...', save: 'സേവ്', cancel: 'റദ്ദാക്കുക', search: 'തിരയുക', next: 'അടുത്തത്', back: 'പിന്നോട്ട്' },
            dashboard: { sidebar: { dashboard: 'ഡാഷ്ബോർഡ്', studies: 'പഠനങ്ങൾ', patients: 'രോഗികൾ', settings: 'ക്രമീകരണങ്ങൾ', logout: 'ലോഗൗട്ട്' }, stats: { critical_findings: 'ഗുരുതര കണ്ടെത്തലുകൾ', total_studies: 'മൊത്തം പഠനങ്ങൾ', total_patients: 'മൊത്തം രോഗികൾ' }, status: { critical: 'ഗുരുതരമായ', normal: 'സാധാരണ', completed: 'പൂർത്തിയായി' } },
            login: { form: { title: 'പോർട്ടലിൽ സൈൻ ഇൻ ചെയ്യുക', email_label: 'ഇമെയിൽ', password_label: 'പാസ്‌വേഡ്', sign_in: 'സൈൻ ഇൻ' } },
            patient: { title: 'രോഗികൾ', modal: { add_title: 'പുതിയ രോഗിയെ ചേർക്കുക', save: 'സേവ്', cancel: 'റദ്ദാക്കുക' } }
        },

        // Odia (38M speakers)
        or: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'ପ୍ଲାଟଫର୍ମ', about: 'ଆମ ବିଷୟରେ', contact: 'ଯୋଗାଯୋଗ', try_free: 'ମାଗଣା ଚେଷ୍ଟା କରନ୍ତୁ', login: 'ଲଗଇନ୍' },
            form: { name: 'ପୂର୍ଣ୍ଣ ନାମ', age: 'ବୟସ', sex: 'ଲିଙ୍ଗ', sex_male: 'ପୁରୁଷ', sex_female: 'ମହିଳା', submit: 'ସ୍କାନ୍ କରନ୍ତୁ ଏବଂ PDF ତିଆରି କରନ୍ତୁ' },
            results: { critical: 'ଗମ୍ଭୀର', warnings: 'ଚେତାବନୀ', normal: 'ସାଧାରଣ', download_pdf: 'PDF ଡାଉନଲୋଡ୍' },
            common: { loading: 'ଲୋଡ୍ ହେଉଛି...', save: 'ସେଭ୍', cancel: 'ବାତିଲ', search: 'ଖୋଜନ୍ତୁ', next: 'ପରବର୍ତ୍ତୀ', back: 'ପଛକୁ' },
            dashboard: { sidebar: { dashboard: 'ଡ୍ୟାସବୋର୍ଡ', studies: 'ଅଧ୍ୟୟନ', patients: 'ରୋଗୀ', settings: 'ସେଟିଂସ୍', logout: 'ଲଗଆଉଟ୍' }, stats: { critical_findings: 'ଗମ୍ଭୀର ଫଳାଫଳ', total_studies: 'ମୋଟ ଅଧ୍ୟୟନ', total_patients: 'ମୋଟ ରୋଗୀ' }, status: { critical: 'ଗମ୍ଭୀର', normal: 'ସାଧାରଣ', completed: 'ସମ୍ପୂର୍ଣ୍ଣ' } },
            login: { form: { title: 'ପୋର୍ଟାଲରେ ସାଇନ୍ ଇନ୍', email_label: 'ଇମେଲ', password_label: 'ପାସୱାର୍ଡ', sign_in: 'ସାଇନ୍ ଇନ୍' } },
            patient: { title: 'ରୋଗୀ', modal: { add_title: 'ନୂଆ ରୋଗୀ ଯୋଡନ୍ତୁ', save: 'ସେଭ୍', cancel: 'ବାତିଲ' } }
        },

        // Hebrew (9M speakers) - RTL
        he: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'פלטפורמה', about: 'אודות', contact: 'צור קשר', try_free: 'נסה בחינם', login: 'התחבר' },
            form: { name: 'שם מלא', age: 'גיל', sex: 'מין', sex_male: 'זכר', sex_female: 'נקבה', submit: 'סרוק וצור PDF' },
            results: { critical: 'קריטי', warnings: 'אזהרות', normal: 'תקין', download_pdf: 'הורד PDF' },
            common: { loading: 'טוען...', save: 'שמור', cancel: 'בטל', search: 'חפש', next: 'הבא', back: 'חזור' },
            dashboard: { sidebar: { overview: 'סקירה', dashboard: 'לוח בקרה', studies: 'בדיקות', patients: 'מטופלים', settings: 'הגדרות', logout: 'התנתק' }, stats: { critical_findings: 'ממצאים קריטיים', pending_review: 'ממתין לבדיקה', total_studies: 'סה"כ בדיקות', total_patients: 'סה"כ מטופלים' }, table: { patient: 'מטופל', status: 'סטטוס', time: 'זמן', findings: 'ממצאים', actions: 'פעולות' }, status: { critical: 'קריטי', urgent: 'דחוף', normal: 'תקין', pending: 'ממתין', completed: 'הושלם' } },
            login: { form: { title: 'התחבר לפורטל', email_label: 'דוא"ל', password_label: 'סיסמה', sign_in: 'התחבר' } },
            patient: { title: 'מטופלים', modal: { add_title: 'הוסף מטופל חדש', save: 'שמור', cancel: 'בטל' }, detail: { back: 'חזור', studies: 'בדיקות' } }
        },

        // Dutch (25M speakers)
        nl: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Platform', about: 'Over ons', contact: 'Contact', try_free: 'Gratis proberen', login: 'Inloggen' },
            form: { name: 'Volledige naam', age: 'Leeftijd', sex: 'Geslacht', sex_male: 'Man', sex_female: 'Vrouw', submit: 'Scan en genereer PDF' },
            results: { critical: 'Kritiek', warnings: 'Waarschuwingen', normal: 'Normaal', download_pdf: 'PDF downloaden' },
            common: { loading: 'Laden...', save: 'Opslaan', cancel: 'Annuleren', search: 'Zoeken', next: 'Volgende', back: 'Terug' },
            dashboard: { sidebar: { dashboard: 'Dashboard', studies: 'Studies', patients: 'Patiënten', settings: 'Instellingen', logout: 'Uitloggen' }, stats: { critical_findings: 'Kritieke bevindingen', total_studies: 'Totaal studies', total_patients: 'Totaal patiënten' }, status: { critical: 'Kritiek', normal: 'Normaal', completed: 'Voltooid' } },
            login: { form: { title: 'Inloggen op portaal', email_label: 'E-mail', password_label: 'Wachtwoord', sign_in: 'Inloggen' } },
            patient: { title: 'Patiënten', modal: { add_title: 'Nieuwe patiënt toevoegen', save: 'Opslaan', cancel: 'Annuleren' } }
        },

        // Romanian (26M speakers)
        ro: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Platformă', about: 'Despre noi', contact: 'Contact', try_free: 'Încearcă gratuit', login: 'Autentificare' },
            form: { name: 'Nume complet', age: 'Vârstă', sex: 'Sex', sex_male: 'Masculin', sex_female: 'Feminin', submit: 'Scanează și generează PDF' },
            results: { critical: 'Critic', warnings: 'Avertismente', normal: 'Normal', download_pdf: 'Descarcă PDF' },
            common: { loading: 'Se încarcă...', save: 'Salvează', cancel: 'Anulează', search: 'Caută', next: 'Următorul', back: 'Înapoi' },
            dashboard: { sidebar: { dashboard: 'Panou', studies: 'Studii', patients: 'Pacienți', settings: 'Setări', logout: 'Deconectare' }, stats: { critical_findings: 'Rezultate critice', total_studies: 'Total studii', total_patients: 'Total pacienți' }, status: { critical: 'Critic', normal: 'Normal', completed: 'Finalizat' } },
            login: { form: { title: 'Autentificare portal', email_label: 'Email', password_label: 'Parolă', sign_in: 'Autentificare' } },
            patient: { title: 'Pacienți', modal: { add_title: 'Adaugă pacient nou', save: 'Salvează', cancel: 'Anulează' } }
        },

        // Greek (13M speakers)
        el: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Πλατφόρμα', about: 'Σχετικά', contact: 'Επικοινωνία', try_free: 'Δοκιμάστε δωρεάν', login: 'Σύνδεση' },
            form: { name: 'Πλήρες όνομα', age: 'Ηλικία', sex: 'Φύλο', sex_male: 'Άνδρας', sex_female: 'Γυναίκα', submit: 'Σάρωση και δημιουργία PDF' },
            results: { critical: 'Κρίσιμο', warnings: 'Προειδοποιήσεις', normal: 'Φυσιολογικό', download_pdf: 'Λήψη PDF' },
            common: { loading: 'Φόρτωση...', save: 'Αποθήκευση', cancel: 'Ακύρωση', search: 'Αναζήτηση', next: 'Επόμενο', back: 'Πίσω' },
            dashboard: { sidebar: { dashboard: 'Πίνακας', studies: 'Μελέτες', patients: 'Ασθενείς', settings: 'Ρυθμίσεις', logout: 'Αποσύνδεση' }, stats: { critical_findings: 'Κρίσιμα ευρήματα', total_studies: 'Σύνολο μελετών', total_patients: 'Σύνολο ασθενών' }, status: { critical: 'Κρίσιμο', normal: 'Φυσιολογικό', completed: 'Ολοκληρώθηκε' } },
            login: { form: { title: 'Σύνδεση στην πύλη', email_label: 'Email', password_label: 'Κωδικός', sign_in: 'Σύνδεση' } },
            patient: { title: 'Ασθενείς', modal: { add_title: 'Προσθήκη νέου ασθενή', save: 'Αποθήκευση', cancel: 'Ακύρωση' } }
        },

        // Czech (11M speakers)
        cs: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Platforma', about: 'O nás', contact: 'Kontakt', try_free: 'Vyzkoušet zdarma', login: 'Přihlásit' },
            form: { name: 'Celé jméno', age: 'Věk', sex: 'Pohlaví', sex_male: 'Muž', sex_female: 'Žena', submit: 'Skenovat a vytvořit PDF' },
            results: { critical: 'Kritický', warnings: 'Varování', normal: 'Normální', download_pdf: 'Stáhnout PDF' },
            common: { loading: 'Načítání...', save: 'Uložit', cancel: 'Zrušit', search: 'Hledat', next: 'Další', back: 'Zpět' },
            dashboard: { sidebar: { dashboard: 'Panel', studies: 'Studie', patients: 'Pacienti', settings: 'Nastavení', logout: 'Odhlásit' }, stats: { critical_findings: 'Kritické nálezy', total_studies: 'Celkem studií', total_patients: 'Celkem pacientů' }, status: { critical: 'Kritický', normal: 'Normální', completed: 'Dokončeno' } },
            login: { form: { title: 'Přihlášení do portálu', email_label: 'Email', password_label: 'Heslo', sign_in: 'Přihlásit' } },
            patient: { title: 'Pacienti', modal: { add_title: 'Přidat nového pacienta', save: 'Uložit', cancel: 'Zrušit' } }
        },

        // Hungarian (13M speakers)
        hu: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Platform', about: 'Rólunk', contact: 'Kapcsolat', try_free: 'Ingyenes próba', login: 'Bejelentkezés' },
            form: { name: 'Teljes név', age: 'Életkor', sex: 'Nem', sex_male: 'Férfi', sex_female: 'Nő', submit: 'Szkennelés és PDF létrehozása' },
            results: { critical: 'Kritikus', warnings: 'Figyelmeztetések', normal: 'Normál', download_pdf: 'PDF letöltése' },
            common: { loading: 'Betöltés...', save: 'Mentés', cancel: 'Mégse', search: 'Keresés', next: 'Következő', back: 'Vissza' },
            dashboard: { sidebar: { dashboard: 'Irányítópult', studies: 'Vizsgálatok', patients: 'Betegek', settings: 'Beállítások', logout: 'Kijelentkezés' }, stats: { critical_findings: 'Kritikus eredmények', total_studies: 'Összes vizsgálat', total_patients: 'Összes beteg' }, status: { critical: 'Kritikus', normal: 'Normál', completed: 'Befejezett' } },
            login: { form: { title: 'Bejelentkezés a portálra', email_label: 'Email', password_label: 'Jelszó', sign_in: 'Bejelentkezés' } },
            patient: { title: 'Betegek', modal: { add_title: 'Új beteg hozzáadása', save: 'Mentés', cancel: 'Mégse' } }
        },

        // Swedish (10M speakers)
        sv: {
            brand: { name: 'ScanGuru' },
            nav: { platform: 'Plattform', about: 'Om oss', contact: 'Kontakt', try_free: 'Prova gratis', login: 'Logga in' },
            form: { name: 'Fullständigt namn', age: 'Ålder', sex: 'Kön', sex_male: 'Man', sex_female: 'Kvinna', submit: 'Skanna och skapa PDF' },
            results: { critical: 'Kritisk', warnings: 'Varningar', normal: 'Normal', download_pdf: 'Ladda ner PDF' },
            common: { loading: 'Laddar...', save: 'Spara', cancel: 'Avbryt', search: 'Sök', next: 'Nästa', back: 'Tillbaka' },
            dashboard: { sidebar: { dashboard: 'Instrumentpanel', studies: 'Studier', patients: 'Patienter', settings: 'Inställningar', logout: 'Logga ut' }, stats: { critical_findings: 'Kritiska fynd', total_studies: 'Totalt studier', total_patients: 'Totalt patienter' }, status: { critical: 'Kritisk', normal: 'Normal', completed: 'Slutförd' } },
            login: { form: { title: 'Logga in på portalen', email_label: 'E-post', password_label: 'Lösenord', sign_in: 'Logga in' } },
            patient: { title: 'Patienter', modal: { add_title: 'Lägg till ny patient', save: 'Spara', cancel: 'Avbryt' } }
        },

        // Danish, Norwegian, Finnish + remaining Scandinavian/European
        da: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Prøv gratis', login: 'Log ind' }, form: { name: 'Fulde navn', age: 'Alder', sex_male: 'Mand', sex_female: 'Kvinde' }, common: { loading: 'Indlæser...', save: 'Gem', cancel: 'Annuller', search: 'Søg', next: 'Næste', back: 'Tilbage' }, dashboard: { sidebar: { dashboard: 'Dashboard', patients: 'Patienter', settings: 'Indstillinger', logout: 'Log ud' }, status: { critical: 'Kritisk', normal: 'Normal', completed: 'Afsluttet' } }, login: { form: { title: 'Log ind på portal', sign_in: 'Log ind' } }, patient: { title: 'Patienter' } },
        no: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Prøv gratis', login: 'Logg inn' }, form: { name: 'Fullt navn', age: 'Alder', sex_male: 'Mann', sex_female: 'Kvinne' }, common: { loading: 'Laster...', save: 'Lagre', cancel: 'Avbryt', search: 'Søk', next: 'Neste', back: 'Tilbake' }, dashboard: { sidebar: { dashboard: 'Dashboard', patients: 'Pasienter', settings: 'Innstillinger', logout: 'Logg ut' }, status: { critical: 'Kritisk', normal: 'Normal', completed: 'Fullført' } }, login: { form: { title: 'Logg inn på portal', sign_in: 'Logg inn' } }, patient: { title: 'Pasienter' } },
        fi: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Kokeile ilmaiseksi', login: 'Kirjaudu' }, form: { name: 'Koko nimi', age: 'Ikä', sex_male: 'Mies', sex_female: 'Nainen' }, common: { loading: 'Ladataan...', save: 'Tallenna', cancel: 'Peruuta', search: 'Haku', next: 'Seuraava', back: 'Takaisin' }, dashboard: { sidebar: { dashboard: 'Kojelauta', patients: 'Potilaat', settings: 'Asetukset', logout: 'Kirjaudu ulos' }, status: { critical: 'Kriittinen', normal: 'Normaali', completed: 'Valmis' } }, login: { form: { title: 'Kirjaudu portaaliin', sign_in: 'Kirjaudu' } }, patient: { title: 'Potilaat' } },
        is: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Prófaðu ókeypis', login: 'Innskrá' }, form: { name: 'Fullt nafn', age: 'Aldur', sex_male: 'Karl', sex_female: 'Kona' }, common: { loading: 'Hleður...', save: 'Vista', cancel: 'Hætta við', search: 'Leita', next: 'Næsta', back: 'Til baka' }, dashboard: { sidebar: { dashboard: 'Stjórnborð', patients: 'Sjúklingar', logout: 'Útskrá' }, status: { critical: 'Mikilvægt', normal: 'Eðlilegt', completed: 'Lokið' } }, login: { form: { sign_in: 'Innskrá' } }, patient: { title: 'Sjúklingar' } },

        // Slavic languages
        bg: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Опитайте безплатно', login: 'Вход' }, form: { name: 'Пълно име', age: 'Възраст', sex_male: 'Мъж', sex_female: 'Жена' }, common: { loading: 'Зареждане...', save: 'Запази', cancel: 'Отказ', search: 'Търсене', next: 'Напред', back: 'Назад' }, dashboard: { sidebar: { dashboard: 'Табло', patients: 'Пациенти', settings: 'Настройки', logout: 'Изход' }, status: { critical: 'Критичен', normal: 'Нормален', completed: 'Завършен' } }, login: { form: { title: 'Вход в портала', sign_in: 'Вход' } }, patient: { title: 'Пациенти' } },
        sr: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Пробајте бесплатно', login: 'Пријава' }, form: { name: 'Пуно име', age: 'Године', sex_male: 'Мушки', sex_female: 'Женски' }, common: { loading: 'Учитава се...', save: 'Сачувај', cancel: 'Откажи', search: 'Претрага', next: 'Следеће', back: 'Назад' }, dashboard: { sidebar: { dashboard: 'Контролна табла', patients: 'Пацијенти', logout: 'Одјава' }, status: { critical: 'Критично', normal: 'Нормално', completed: 'Завршено' } }, login: { form: { sign_in: 'Пријава' } }, patient: { title: 'Пацијенти' } },
        hr: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Isprobaj besplatno', login: 'Prijava' }, form: { name: 'Puno ime', age: 'Dob', sex_male: 'Muško', sex_female: 'Žensko' }, common: { loading: 'Učitavanje...', save: 'Spremi', cancel: 'Odustani', search: 'Pretraži', next: 'Sljedeće', back: 'Natrag' }, dashboard: { sidebar: { dashboard: 'Nadzorna ploča', patients: 'Pacijenti', logout: 'Odjava' }, status: { critical: 'Kritično', normal: 'Normalno', completed: 'Završeno' } }, login: { form: { sign_in: 'Prijava' } }, patient: { title: 'Pacijenti' } },
        sk: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Vyskúšajte zadarmo', login: 'Prihlásiť' }, form: { name: 'Celé meno', age: 'Vek', sex_male: 'Muž', sex_female: 'Žena' }, common: { loading: 'Načítava sa...', save: 'Uložiť', cancel: 'Zrušiť', search: 'Hľadať', next: 'Ďalej', back: 'Späť' }, dashboard: { sidebar: { dashboard: 'Panel', patients: 'Pacienti', logout: 'Odhlásiť' }, status: { critical: 'Kritický', normal: 'Normálny', completed: 'Dokončené' } }, login: { form: { sign_in: 'Prihlásiť' } }, patient: { title: 'Pacienti' } },
        sl: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Preizkusite brezplačno', login: 'Prijava' }, form: { name: 'Polno ime', age: 'Starost', sex_male: 'Moški', sex_female: 'Ženski' }, common: { loading: 'Nalaganje...', save: 'Shrani', cancel: 'Prekliči', search: 'Iskanje', next: 'Naprej', back: 'Nazaj' }, dashboard: { sidebar: { dashboard: 'Nadzorna plošča', patients: 'Pacienti', logout: 'Odjava' }, status: { critical: 'Kritično', normal: 'Normalno', completed: 'Zaključeno' } }, login: { form: { sign_in: 'Prijava' } }, patient: { title: 'Pacienti' } },
        mk: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Пробајте бесплатно', login: 'Најава' }, form: { name: 'Полно име', age: 'Возраст', sex_male: 'Машко', sex_female: 'Женско' }, common: { loading: 'Се вчитува...', save: 'Зачувај', cancel: 'Откажи', search: 'Барај', next: 'Следно', back: 'Назад' }, dashboard: { sidebar: { dashboard: 'Контролна табла', patients: 'Пациенти', logout: 'Одјава' }, status: { critical: 'Критично', normal: 'Нормално', completed: 'Завршено' } }, login: { form: { sign_in: 'Најава' } }, patient: { title: 'Пациенти' } },
        bs: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Probajte besplatno', login: 'Prijava' }, form: { name: 'Puno ime', age: 'Dob', sex_male: 'Muško', sex_female: 'Žensko' }, common: { loading: 'Učitavanje...', save: 'Spremi', cancel: 'Otkaži', search: 'Pretraži', next: 'Sljedeće', back: 'Nazad' }, dashboard: { sidebar: { dashboard: 'Kontrolna tabla', patients: 'Pacijenti', logout: 'Odjava' }, status: { critical: 'Kritično', normal: 'Normalno', completed: 'Završeno' } }, login: { form: { sign_in: 'Prijava' } }, patient: { title: 'Pacijenti' } },

        // Baltic languages
        lt: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Išbandykite nemokamai', login: 'Prisijungti' }, form: { name: 'Vardas ir pavardė', age: 'Amžius', sex_male: 'Vyras', sex_female: 'Moteris' }, common: { loading: 'Kraunama...', save: 'Išsaugoti', cancel: 'Atšaukti', search: 'Ieškoti', next: 'Toliau', back: 'Atgal' }, dashboard: { sidebar: { dashboard: 'Valdymo skydas', patients: 'Pacientai', logout: 'Atsijungti' }, status: { critical: 'Kritinis', normal: 'Normalus', completed: 'Užbaigta' } }, login: { form: { sign_in: 'Prisijungti' } }, patient: { title: 'Pacientai' } },
        lv: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Izmēģiniet bez maksas', login: 'Pieslēgties' }, form: { name: 'Pilns vārds', age: 'Vecums', sex_male: 'Vīrietis', sex_female: 'Sieviete' }, common: { loading: 'Ielādē...', save: 'Saglabāt', cancel: 'Atcelt', search: 'Meklēt', next: 'Tālāk', back: 'Atpakaļ' }, dashboard: { sidebar: { dashboard: 'Vadības panelis', patients: 'Pacienti', logout: 'Iziet' }, status: { critical: 'Kritisks', normal: 'Normāls', completed: 'Pabeigts' } }, login: { form: { sign_in: 'Pieslēgties' } }, patient: { title: 'Pacienti' } },
        et: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Proovi tasuta', login: 'Logi sisse' }, form: { name: 'Täisnimi', age: 'Vanus', sex_male: 'Mees', sex_female: 'Naine' }, common: { loading: 'Laadimine...', save: 'Salvesta', cancel: 'Tühista', search: 'Otsi', next: 'Järgmine', back: 'Tagasi' }, dashboard: { sidebar: { dashboard: 'Armatuurlaud', patients: 'Patsiendid', logout: 'Logi välja' }, status: { critical: 'Kriitiline', normal: 'Normaalne', completed: 'Lõpetatud' } }, login: { form: { sign_in: 'Logi sisse' } }, patient: { title: 'Patsiendid' } },

        // Other European
        sq: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Provo falas', login: 'Hyr' }, form: { name: 'Emri i plotë', age: 'Mosha', sex_male: 'Mashkull', sex_female: 'Femër' }, common: { loading: 'Po ngarkohet...', save: 'Ruaj', cancel: 'Anulo', search: 'Kërko', next: 'Tjetër', back: 'Kthehu' }, dashboard: { sidebar: { dashboard: 'Paneli', patients: 'Pacientët', logout: 'Dil' }, status: { critical: 'Kritik', normal: 'Normal', completed: 'Përfunduar' } }, login: { form: { sign_in: 'Hyr' } }, patient: { title: 'Pacientët' } },
        mt: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Ipprova b\'xejn', login: 'Idħol' }, form: { name: 'Isem sħiħ', age: 'Età', sex_male: 'Raġel', sex_female: 'Mara' }, common: { loading: 'Qed jitgħabba...', save: 'Issejvja', cancel: 'Ikkanċella', search: 'Fittex', next: 'Li jmiss', back: 'Lura' }, dashboard: { sidebar: { dashboard: 'Dashboard', patients: 'Pazjenti', logout: 'Oħroġ' }, status: { critical: 'Kritiku', normal: 'Normali', completed: 'Lest' } }, login: { form: { sign_in: 'Idħol' } }, patient: { title: 'Pazjenti' } },
        ca: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Prova gratis', login: 'Inicia sessió' }, form: { name: 'Nom complet', age: 'Edat', sex_male: 'Home', sex_female: 'Dona' }, common: { loading: 'Carregant...', save: 'Desa', cancel: 'Cancel·la', search: 'Cerca', next: 'Següent', back: 'Enrere' }, dashboard: { sidebar: { dashboard: 'Tauler', patients: 'Pacients', logout: 'Tanca sessió' }, status: { critical: 'Crític', normal: 'Normal', completed: 'Completat' } }, login: { form: { sign_in: 'Inicia sessió' } }, patient: { title: 'Pacients' } },

        // Caucasian
        ka: { brand: { name: 'ScanGuru' }, nav: { try_free: 'სცადეთ უფასოდ', login: 'შესვლა' }, form: { name: 'სრული სახელი', age: 'ასაკი', sex_male: 'მამრობითი', sex_female: 'მდედრობითი' }, common: { loading: 'იტვირთება...', save: 'შენახვა', cancel: 'გაუქმება', search: 'ძიება', next: 'შემდეგი', back: 'უკან' }, dashboard: { sidebar: { dashboard: 'დაფა', patients: 'პაციენტები', logout: 'გასვლა' }, status: { critical: 'კრიტიკული', normal: 'ნორმალური', completed: 'დასრულებული' } }, login: { form: { sign_in: 'შესვლა' } }, patient: { title: 'პაციენტები' } },
        hy: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Փdelays անվdelays', login: 'Մdelays' }, form: { name: 'Լdelays անdelays', age: 'Տdelays', sex_male: 'Աdelays', sex_female: 'Իdelays' }, common: { loading: 'Բdelays delays...', save: 'Պdelays', cancel: 'Չdelays', search: 'Փdelays', next: 'Հdelays', back: 'Delays' }, dashboard: { sidebar: { dashboard: 'Վdelays', patients: 'Հdelays', logout: 'Դdelays' }, status: { critical: 'Կdelays', normal: 'Նdelays', completed: 'Delays' } }, login: { form: { sign_in: 'Մdeays' } }, patient: { title: 'Delays' } },

        // Central Asian + Turkic
        az: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Pulsuz sınayın', login: 'Daxil ol' }, form: { name: 'Tam ad', age: 'Yaş', sex_male: 'Kişi', sex_female: 'Qadın' }, common: { loading: 'Yüklənir...', save: 'Saxla', cancel: 'Ləğv et', search: 'Axtar', next: 'Növbəti', back: 'Geri' }, dashboard: { sidebar: { dashboard: 'İdarə paneli', patients: 'Xəstələr', logout: 'Çıxış' }, status: { critical: 'Kritik', normal: 'Normal', completed: 'Tamamlandı' } }, login: { form: { sign_in: 'Daxil ol' } }, patient: { title: 'Xəstələr' } },
        uz: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Bepul sinab ko\'ring', login: 'Kirish' }, form: { name: 'To\'liq ism', age: 'Yosh', sex_male: 'Erkak', sex_female: 'Ayol' }, common: { loading: 'Yuklanmoqda...', save: 'Saqlash', cancel: 'Bekor qilish', search: 'Qidirish', next: 'Keyingi', back: 'Orqaga' }, dashboard: { sidebar: { dashboard: 'Boshqaruv paneli', patients: 'Bemorlar', logout: 'Chiqish' }, status: { critical: 'Kritik', normal: 'Normal', completed: 'Tugallandi' } }, login: { form: { sign_in: 'Kirish' } }, patient: { title: 'Bemorlar' } },
        kk: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Тегін байқап көріңіз', login: 'Кіру' }, form: { name: 'Толық аты-жөні', age: 'Жасы', sex_male: 'Ер', sex_female: 'Әйел' }, common: { loading: 'Жүктелуде...', save: 'Сақтау', cancel: 'Болдырмау', search: 'Іздеу', next: 'Келесі', back: 'Артқа' }, dashboard: { sidebar: { dashboard: 'Басқару тақтасы', patients: 'Науқастар', logout: 'Шығу' }, status: { critical: 'Маңызды', normal: 'Қалыпты', completed: 'Аяқталды' } }, login: { form: { sign_in: 'Кіру' } }, patient: { title: 'Науқастар' } },
        ky: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Акысыз сынап көрүңүз', login: 'Кирүү' }, form: { name: 'Толук аты', age: 'Жашы', sex_male: 'Эркек', sex_female: 'Аял' }, common: { loading: 'Жүктөлүүдө...', save: 'Сактоо', cancel: 'Жокко чыгаруу', search: 'Издөө', next: 'Кийинки', back: 'Артка' }, dashboard: { sidebar: { dashboard: 'Башкаруу панели', patients: 'Оорулар', logout: 'Чыгуу' }, status: { critical: 'Критикалык', normal: 'Нормалдуу', completed: 'Аякталды' } }, login: { form: { sign_in: 'Кирүү' } }, patient: { title: 'Оорулар' } },
        tg: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Ройгон санҷед', login: 'Ворид шудан' }, form: { name: 'Номи пурра', age: 'Синну сол', sex_male: 'Мард', sex_female: 'Зан' }, common: { loading: 'Бор мешавад...', save: 'Захира кардан', cancel: 'Бекор кардан', search: 'Ҷустуҷӯ', next: 'Навбатӣ', back: 'Бозгашт' }, dashboard: { sidebar: { dashboard: 'Панели идоракунӣ', patients: 'Беморон', logout: 'Баромадан' }, status: { critical: 'Муҳим', normal: 'Муқаррарӣ', completed: 'Иҷро шуд' } }, login: { form: { sign_in: 'Ворид шудан' } }, patient: { title: 'Беморон' } },
        tk: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Mugt synap görüň', login: 'Girmek' }, form: { name: 'Doly ady', age: 'Ýaşy', sex_male: 'Erkek', sex_female: 'Aýal' }, common: { loading: 'Ýüklenýär...', save: 'Saklamak', cancel: 'Goýbolsun et', search: 'Gözlemek', next: 'Indiki', back: 'Yza' }, dashboard: { sidebar: { dashboard: 'Dolandyryş paneli', patients: 'Näsaglar', logout: 'Çykmak' }, status: { critical: 'Kritiki', normal: 'Adaty', completed: 'Tamamlandy' } }, login: { form: { sign_in: 'Girmek' } }, patient: { title: 'Näsaglar' } },
        mn: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Үнэгүй туршиx', login: 'Нэвтрэх' }, form: { name: 'Бүтэн нэр', age: 'Нас', sex_male: 'Эрэгтэй', sex_female: 'Эмэгтэй' }, common: { loading: 'Ачааллаж байна...', save: 'Хадгалах', cancel: 'Цуцлах', search: 'Хайх', next: 'Дараах', back: 'Буцах' }, dashboard: { sidebar: { dashboard: 'Хяналтын самбар', patients: 'Өвчтөнүүд', logout: 'Гарах' }, status: { critical: 'Ноцтой', normal: 'Хэвийн', completed: 'Дууссан' } }, login: { form: { sign_in: 'Нэвтрэх' } }, patient: { title: 'Өвчтөнүүд' } },

        // Southeast Asian
        my: { brand: { name: 'ScanGuru' }, nav: { try_free: 'အခမဲ့စမ်းသုံးပါ', login: 'ဝင်ရောက်' }, form: { name: 'နာမည်အပြည့်အစုံ', age: 'အသက်', sex_male: 'အမျိုးသား', sex_female: 'အမျိုးသမီး' }, common: { loading: 'ဖွင့်နေသည်...', save: 'သိမ်းဆည်း', cancel: 'ပယ်ဖျက်', search: 'ရှာဖွေ', next: 'နောက်', back: 'နောက်သို့' }, dashboard: { sidebar: { dashboard: 'ဒက်ရ်ဘုတ်', patients: 'လူနာများ', logout: 'ထွက်' }, status: { critical: 'အရေးကြီး', normal: 'ပုံမှန်', completed: 'ပြီးစီး' } }, login: { form: { sign_in: 'ဝင်ရောက်' } }, patient: { title: 'လူနာများ' } },
        km: { brand: { name: 'ScanGuru' }, nav: { try_free: 'សាកល្បងដោយឥតគិតថ្លៃ', login: 'ចូល' }, form: { name: 'ឈ្មោះពេញ', age: 'អាយុ', sex_male: 'ប្រុស', sex_female: 'ស្រី' }, common: { loading: 'កំពុងផ្ទុក...', save: 'រក្សាទុក', cancel: 'បោះបង់', search: 'ស្វែងរក', next: 'បន្ទាប់', back: 'ត្រឡប់' }, dashboard: { sidebar: { dashboard: 'ផ្ទាំងគ្រប់គ្រង', patients: 'អ្នកជំងឺ', logout: 'ចាកចេញ' }, status: { critical: 'សំខាន់', normal: 'ធម្មតា', completed: 'បានបញ្ចប់' } }, login: { form: { sign_in: 'ចូល' } }, patient: { title: 'អ្នកជំងឺ' } },
        lo: { brand: { name: 'ScanGuru' }, nav: { try_free: 'ທົດລອງຟຣີ', login: 'ເຂົ້າສູ່ລະບົບ' }, form: { name: 'ຊື່ເຕັມ', age: 'ອາຍຸ', sex_male: 'ຊາຍ', sex_female: 'ຍິງ' }, common: { loading: 'ກຳລັງໂຫຼດ...', save: 'ບັນທຶກ', cancel: 'ຍົກເລີກ', search: 'ຄົ້ນຫາ', next: 'ຕໍ່ໄປ', back: 'ກັບຄືນ' }, dashboard: { sidebar: { dashboard: 'ແຜງຄວບຄຸມ', patients: 'ຄົນເຈັບ', logout: 'ອອກຈາກລະບົບ' }, status: { critical: 'ສຳຄັນ', normal: 'ປົກກະຕິ', completed: 'ສຳເລັດ' } }, login: { form: { sign_in: 'ເຂົ້າສູ່ລະບົບ' } }, patient: { title: 'ຄົນເຈັບ' } },
        ne: { brand: { name: 'ScanGuru' }, nav: { try_free: 'निःशुल्क प्रयास गर्नुहोस्', login: 'लगइन' }, form: { name: 'पूरा नाम', age: 'उमेर', sex_male: 'पुरुष', sex_female: 'महिला' }, common: { loading: 'लोड हुँदैछ...', save: 'सेभ गर्नुहोस्', cancel: 'रद्द गर्नुहोस्', search: 'खोज्नुहोस्', next: 'अर्को', back: 'पछाडि' }, dashboard: { sidebar: { dashboard: 'ड्यासबोर्ड', patients: 'बिरामीहरू', logout: 'लगआउट' }, status: { critical: 'गम्भीर', normal: 'सामान्य', completed: 'पूरा भयो' } }, login: { form: { sign_in: 'लगइन गर्नुहोस्' } }, patient: { title: 'बिरामीहरू' } },
        si: { brand: { name: 'ScanGuru' }, nav: { try_free: 'නොමිලේ උත්සාහ කරන්න', login: 'පිවිසෙන්න' }, form: { name: 'සම්පූර්ණ නම', age: 'වයස', sex_male: 'පිරිමි', sex_female: 'ගැහැණු' }, common: { loading: 'පූරණය වෙමින්...', save: 'සුරකින්න', cancel: 'අවලංගු කරන්න', search: 'සොයන්න', next: 'ඊළඟ', back: 'ආපසු' }, dashboard: { sidebar: { dashboard: 'උපකරණ පුවරුව', patients: 'රෝගීන්', logout: 'පිටවන්න' }, status: { critical: 'බරපතල', normal: 'සාමාන්ය', completed: 'සම්පූර්ණයි' } }, login: { form: { sign_in: 'පිවිසෙන්න' } }, patient: { title: 'රෝගීන්' } },
        tl: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Subukan nang Libre', login: 'Mag-login' }, form: { name: 'Buong Pangalan', age: 'Edad', sex_male: 'Lalaki', sex_female: 'Babae' }, common: { loading: 'Naglo-load...', save: 'I-save', cancel: 'Kanselahin', search: 'Hanapin', next: 'Susunod', back: 'Bumalik' }, dashboard: { sidebar: { dashboard: 'Dashboard', patients: 'Mga Pasyente', logout: 'Mag-logout' }, status: { critical: 'Kritikal', normal: 'Normal', completed: 'Nakumpleto' } }, login: { form: { sign_in: 'Mag-login' } }, patient: { title: 'Mga Pasyente' } },

        // African languages
        af: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Probeer gratis', login: 'Teken in' }, form: { name: 'Volle naam', age: 'Ouderdom', sex_male: 'Manlik', sex_female: 'Vroulik' }, common: { loading: 'Laai...', save: 'Stoor', cancel: 'Kanselleer', search: 'Soek', next: 'Volgende', back: 'Terug' }, dashboard: { sidebar: { dashboard: 'Dashboard', patients: 'Pasiënte', logout: 'Teken uit' }, status: { critical: 'Kritiek', normal: 'Normaal', completed: 'Voltooi' } }, login: { form: { sign_in: 'Teken in' } }, patient: { title: 'Pasiënte' } },
        zu: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Zama mahhala', login: 'Ngena' }, form: { name: 'Igama eligcwele', age: 'Iminyaka', sex_male: 'Owesilisa', sex_female: 'Owesifazane' }, common: { loading: 'Iyalayisha...', save: 'Londoloza', cancel: 'Khansela', search: 'Sesha', next: 'Okulandelayo', back: 'Emuva' }, dashboard: { sidebar: { dashboard: 'Idashbodi', patients: 'Iziguli', logout: 'Phuma' }, status: { critical: 'Ebalulekile', normal: 'Okujwayelekile', completed: 'Kuqediwe' } }, login: { form: { sign_in: 'Ngena' } }, patient: { title: 'Iziguli' } },
        so: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Si bilaash ah tijaabi', login: 'Gal' }, form: { name: 'Magaca oo buuxa', age: 'Da\'da', sex_male: 'Lab', sex_female: 'Dheddig' }, common: { loading: 'Waa la soo rarayaa...', save: 'Kaydi', cancel: 'Ka noqo', search: 'Raadi', next: 'Xiga', back: 'Dib' }, dashboard: { sidebar: { dashboard: 'Dashboard', patients: 'Bukaanada', logout: 'Ka bax' }, status: { critical: 'Muhiim', normal: 'Caadi', completed: 'La dhammeeyey' } }, login: { form: { sign_in: 'Gal' } }, patient: { title: 'Bukaanada' } },
        mg: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Andramo maimaim-poana', login: 'Hiditra' }, form: { name: 'Anarana feno', age: 'Taona', sex_male: 'Lahy', sex_female: 'Vavy' }, common: { loading: 'Mamorona...', save: 'Tehirizo', cancel: 'Ajanony', search: 'Tadiavo', next: 'Manaraka', back: 'Miverina' }, dashboard: { sidebar: { dashboard: 'Dashboard', patients: 'Marary', logout: 'Mivoaka' }, status: { critical: 'Maika', normal: 'Ara-dalàna', completed: 'Vita' } }, login: { form: { sign_in: 'Hiditra' } }, patient: { title: 'Marary' } },

        // Chinese Traditional + Māori
        'zh-TW': { brand: { name: 'ScanGuru' }, nav: { try_free: '免費試用', login: '登入' }, form: { name: '全名', age: '年齡', sex_male: '男', sex_female: '女' }, common: { loading: '載入中...', save: '儲存', cancel: '取消', search: '搜尋', next: '下一步', back: '返回' }, dashboard: { sidebar: { dashboard: '儀表板', studies: '檢查', patients: '病患', settings: '設定', logout: '登出' }, stats: { critical_findings: '危急發現', total_studies: '總檢查數', total_patients: '總病患數' }, table: { patient: '病患', status: '狀態', time: '時間', actions: '操作' }, status: { critical: '危急', normal: '正常', completed: '已完成' } }, login: { form: { title: '登入門戶', email_label: '電子郵件', password_label: '密碼', sign_in: '登入' } }, patient: { title: '病患', modal: { add_title: '新增病患', save: '儲存', cancel: '取消' } } },
        mi: { brand: { name: 'ScanGuru' }, nav: { try_free: 'Whakamātau kore utu', login: 'Takiuru' }, form: { name: 'Ingoa katoa', age: 'Pakeke', sex_male: 'Tāne', sex_female: 'Wahine' }, common: { loading: 'E uta ana...', save: 'Tiaki', cancel: 'Whakakore', search: 'Rapu', next: 'Panuku', back: 'Hoki' }, dashboard: { sidebar: { dashboard: 'Papatohu', patients: 'Tūroro', logout: 'Takiputa' }, status: { critical: 'Tino', normal: 'Noa', completed: 'Kua oti' } }, login: { form: { sign_in: 'Takiuru' } }, patient: { title: 'Tūroro' } }

    } // End of translations
}; // End of ScanGuruI18n

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ScanGuruI18n.init());
} else {
    ScanGuruI18n.init();
}

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScanGuruI18n;
}
