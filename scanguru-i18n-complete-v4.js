/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * SCANGURU COMPLETE INTERNATIONALIZATION SYSTEM
 * 69 Languages | All Essential UI Strings | RTL Support | English Fallback
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Version: 4.0.0
 * Last Updated: April 2025
 * 
 * WEBFLOW INSTALLATION (since Webflow no longer allows .js in assets):
 * ─────────────────────────────────────────────────────────────────────
 * Option 1: jsDelivr via GitHub (RECOMMENDED)
 *   1. Create a GitHub repo and upload this file
 *   2. Add to Site Settings → Custom Code → Footer:
 *      <script src="https://cdn.jsdelivr.net/gh/YOUR-USERNAME/YOUR-REPO@main/scanguru-i18n.js"></script>
 *
 * Option 2: Cloudflare R2 / AWS S3
 *   1. Upload to your bucket with public read access
 *   2. Add script tag with the bucket URL
 *
 * Option 3: Google Cloud Storage
 *   1. Upload to GCS bucket with public access
 *   2. Use: https://storage.googleapis.com/YOUR-BUCKET/scanguru-i18n.js
 *
 * USAGE:
 * ─────────────────────────────────────────────────────────────────────
 * 1. Add data-i18n="key.subkey" attributes to HTML elements
 * 2. Call ScanGuruI18n.setLanguage('fr') to switch language
 * 3. Use ScanGuruI18n.t('key.subkey') to get translation in JS
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 */

const ScanGuruI18n = {
    currentLang: 'en',
    rtlLanguages: ['ar', 'he', 'fa', 'ur', 'dv'],

    // ═══════════════════════════════════════════════════════════════════════════
    // LANGUAGE METADATA - 69 LANGUAGES
    // ═══════════════════════════════════════════════════════════════════════════
    languages: {
        // Europe (20)
        en: { name: 'English', native: 'English', flag: '🇺🇸', region: 'Europe' },
        de: { name: 'German', native: 'Deutsch', flag: '🇩🇪', region: 'Europe' },
        es: { name: 'Spanish', native: 'Español', flag: '🇪🇸', region: 'Europe' },
        fr: { name: 'French', native: 'Français', flag: '🇫🇷', region: 'Europe' },
        pt: { name: 'Portuguese', native: 'Português', flag: '🇵🇹', region: 'Europe' },
        'pt-BR': { name: 'Portuguese (Brazil)', native: 'Português (Brasil)', flag: '🇧🇷', region: 'Americas' },
        it: { name: 'Italian', native: 'Italiano', flag: '🇮🇹', region: 'Europe' },
        nl: { name: 'Dutch', native: 'Nederlands', flag: '🇳🇱', region: 'Europe' },
        pl: { name: 'Polish', native: 'Polski', flag: '🇵🇱', region: 'Europe' },
        ru: { name: 'Russian', native: 'Русский', flag: '🇷🇺', region: 'Europe' },
        uk: { name: 'Ukrainian', native: 'Українська', flag: '🇺🇦', region: 'Europe' },
        cs: { name: 'Czech', native: 'Čeština', flag: '🇨🇿', region: 'Europe' },
        ro: { name: 'Romanian', native: 'Română', flag: '🇷🇴', region: 'Europe' },
        el: { name: 'Greek', native: 'Ελληνικά', flag: '🇬🇷', region: 'Europe' },
        sr: { name: 'Serbian', native: 'Српски', flag: '🇷🇸', region: 'Europe' },
        sv: { name: 'Swedish', native: 'Svenska', flag: '🇸🇪', region: 'Europe' },
        da: { name: 'Danish', native: 'Dansk', flag: '🇩🇰', region: 'Europe' },
        no: { name: 'Norwegian', native: 'Norsk', flag: '🇳🇴', region: 'Europe' },
        fi: { name: 'Finnish', native: 'Suomi', flag: '🇫🇮', region: 'Europe' },
        hu: { name: 'Hungarian', native: 'Magyar', flag: '🇭🇺', region: 'Europe' },
        // India (15)
        hi: { name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳', region: 'India' },
        bn: { name: 'Bengali', native: 'বাংলা', flag: '🇮🇳', region: 'India' },
        ta: { name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳', region: 'India' },
        te: { name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳', region: 'India' },
        mr: { name: 'Marathi', native: 'मराठी', flag: '🇮🇳', region: 'India' },
        gu: { name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳', region: 'India' },
        kn: { name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳', region: 'India' },
        ml: { name: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳', region: 'India' },
        pa: { name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳', region: 'India' },
        or: { name: 'Odia', native: 'ଓଡ଼ିଆ', flag: '🇮🇳', region: 'India' },
        as: { name: 'Assamese', native: 'অসমীয়া', flag: '🇮🇳', region: 'India' },
        ks: { name: 'Kashmiri', native: 'کٲشُر', flag: '🇮🇳', region: 'India' },
        sd: { name: 'Sindhi', native: 'سنڌي', flag: '🇮🇳', region: 'India' },
        mai: { name: 'Maithili', native: 'मैथिली', flag: '🇮🇳', region: 'India' },
        doi: { name: 'Dogri', native: 'डोगरी', flag: '🇮🇳', region: 'India' },
        // South Asia (5)
        ne: { name: 'Nepali', native: 'नेपाली', flag: '🇳🇵', region: 'SouthAsia' },
        si: { name: 'Sinhala', native: 'සිංහල', flag: '🇱🇰', region: 'SouthAsia' },
        ur: { name: 'Urdu', native: 'اردو', flag: '🇵🇰', region: 'SouthAsia', rtl: true },
        dv: { name: 'Dhivehi', native: 'ދިވެހި', flag: '🇲🇻', region: 'SouthAsia', rtl: true },
        bho: { name: 'Bhojpuri', native: 'भोजपुरी', flag: '🇮🇳', region: 'SouthAsia' },
        // Southeast Asia (10)
        th: { name: 'Thai', native: 'ไทย', flag: '🇹🇭', region: 'SEAsia' },
        vi: { name: 'Vietnamese', native: 'Tiếng Việt', flag: '🇻🇳', region: 'SEAsia' },
        id: { name: 'Indonesian', native: 'Bahasa Indonesia', flag: '🇮🇩', region: 'SEAsia' },
        ms: { name: 'Malay', native: 'Bahasa Melayu', flag: '🇲🇾', region: 'SEAsia' },
        tl: { name: 'Tagalog', native: 'Tagalog', flag: '🇵🇭', region: 'SEAsia' },
        fil: { name: 'Filipino', native: 'Filipino', flag: '🇵🇭', region: 'SEAsia' },
        my: { name: 'Burmese', native: 'မြန်မာ', flag: '🇲🇲', region: 'SEAsia' },
        km: { name: 'Khmer', native: 'ភាសាខ្មែរ', flag: '🇰🇭', region: 'SEAsia' },
        lo: { name: 'Lao', native: 'ລາວ', flag: '🇱🇦', region: 'SEAsia' },
        jv: { name: 'Javanese', native: 'Basa Jawa', flag: '🇮🇩', region: 'SEAsia' },
        // East Asia (5)
        zh: { name: 'Chinese (Simplified)', native: '中文（简体）', flag: '🇨🇳', region: 'EAsia' },
        'zh-TW': { name: 'Chinese (Traditional)', native: '中文（繁體）', flag: '🇹🇼', region: 'EAsia' },
        ja: { name: 'Japanese', native: '日本語', flag: '🇯🇵', region: 'EAsia' },
        ko: { name: 'Korean', native: '한국어', flag: '🇰🇷', region: 'EAsia' },
        mn: { name: 'Mongolian', native: 'Монгол', flag: '🇲🇳', region: 'EAsia' },
        // Middle East (4)
        ar: { name: 'Arabic', native: 'العربية', flag: '🇸🇦', region: 'MiddleEast', rtl: true },
        fa: { name: 'Persian', native: 'فارسی', flag: '🇮🇷', region: 'MiddleEast', rtl: true },
        he: { name: 'Hebrew', native: 'עברית', flag: '🇮🇱', region: 'MiddleEast', rtl: true },
        tr: { name: 'Turkish', native: 'Türkçe', flag: '🇹🇷', region: 'MiddleEast' },
        // Central Asia (3)
        az: { name: 'Azerbaijani', native: 'Azərbaycan', flag: '🇦🇿', region: 'CentralAsia' },
        uz: { name: 'Uzbek', native: 'Oʻzbek', flag: '🇺🇿', region: 'CentralAsia' },
        kk: { name: 'Kazakh', native: 'Қазақ', flag: '🇰🇿', region: 'CentralAsia' },
        // Africa (5)
        am: { name: 'Amharic', native: 'አማርኛ', flag: '🇪🇹', region: 'Africa' },
        sw: { name: 'Swahili', native: 'Kiswahili', flag: '🇰🇪', region: 'Africa' },
        pcm: { name: 'Nigerian Pidgin', native: 'Nigerian Pidgin', flag: '🇳🇬', region: 'Africa' },
        ha: { name: 'Hausa', native: 'Hausa', flag: '🇳🇬', region: 'Africa' },
        yo: { name: 'Yoruba', native: 'Yorùbá', flag: '🇳🇬', region: 'Africa' },
        // Caucasus (2)
        ka: { name: 'Georgian', native: 'ქართული', flag: '🇬🇪', region: 'Caucasus' },
        hy: { name: 'Armenian', native: 'Հայdelays', flag: '🇦🇲', region: 'Caucasus' }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // TRANSLATIONS - 69 LANGUAGES (Essential UI strings)
    // Missing keys automatically fall back to English
    // ═══════════════════════════════════════════════════════════════════════════
    translations: {
        // ═══════════════════════════════════════════════════════════════════════
        // ENGLISH (en) - MASTER REFERENCE
        // ═══════════════════════════════════════════════════════════════════════
        en: {
            brand: { name: "ScanGuru", tagline: "AI-Powered Medical Imaging" },
            nav: { modalities: "Modalities", technology: "Technology", clinical_evidence: "Clinical Evidence", about: "About", contact: "Contact", try_free: "Try It Free", apply_pilot: "Apply for Pilot", signup: "Sign Up Free", login: "Log In" },
            hero: { badge: "Free Plan Available", title: "The Complete Medical Imaging AI Platform", subtitle: "Multi-modal fusion AI analyzing 400+ pathologies across 8 imaging modalities.", cta_primary: "Sign Up Free", cta_try_free: "Try It Free — No Account", cta_secondary: "Explore Modalities →", stats: { modalities: "8+", modalities_label: "Modalities", pathologies: "400+", pathologies_label: "Pathologies", languages: "69", languages_label: "Languages", accuracy: "85-95%", accuracy_label: "Accuracy" } },
            trust_bar: { title: "Enterprise-Grade Security & Compliance", hipaa: "HIPAA Compliant", gdpr: "GDPR Ready", dicom: "DICOM Compatible", hl7: "HL7/FHIR Integration", cloud: "Cloud & On-Premise" },
            modalities: { cxr: { title: "Chest X-Ray", pathologies: "50 Pathologies", learn_more: "Learn More →" }, ct_brain: { title: "CT Brain", pathologies: "30+ Pathologies", learn_more: "Learn More →" }, mammography: { title: "Mammography", pathologies: "25 Pathologies", learn_more: "Learn More →" }, mri: { title: "MRI (6 Types)", pathologies: "30+ Pathologies", learn_more: "Learn More →" }, msk: { title: "MSK X-Ray", pathologies: "75+ Pathologies", learn_more: "Learn More →" }, dental: { title: "Dental X-Ray", pathologies: "40+ Pathologies", learn_more: "Learn More →" }, ultrasound: { title: "Ultrasound", pathologies: "50+ Pathologies", learn_more: "Learn More →" }, pet: { title: "PET & PET-CT", pathologies: "25+ Pathologies", learn_more: "Learn More →" } },
            cta: { badge: "Free Plan Available", title: "Join the ScanGuru Get Started", subtitle: "Get early access, preferential pricing, and direct input.", try_free: "Try It Free — No Account Needed", primary: "Sign Up Free →", secondary: "Download Platform Overview" },
            footer: { description: "Comprehensive AI-powered medical imaging platform.", platform: "Platform", company: "Company", resources: "Resources", try_free: "🚀 Try It Free", copyright: "© 2025 ScanGuru. All rights reserved.", privacy: "Privacy Policy", terms: "Terms of Service" },
            form: { name: "Full Name", email: "Email Address", submit: "Submit", scan_generate: "Scan & Generate PDF", age: "Age", sex: "Sex", male: "Male", female: "Female", other: "Other", consent: "I confirm patient consent" },
            badge: { critical: "CRITICAL", warning: "WARNING", normal: "NORMAL", urgent: "URGENT" },
            results: { title: "Analysis Results", processing_time: "Processing Time", seconds: "seconds", download_pdf: "Download PDF", findings: "Findings" },
            errors: { upload_failed: "Upload failed. Please try again.", analysis_failed: "Analysis failed.", file_too_large: "File too large. Max 50MB." },
            common: { loading: "Loading...", save: "Save", cancel: "Cancel", download: "Download", upload: "Upload", search: "Search", next: "Next", previous: "Previous", back: "Back", close: "Close" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // SPANISH (es) - Español
        // ═══════════════════════════════════════════════════════════════════════
        es: {
            brand: { name: "ScanGuru", tagline: "Imágenes Médicas con IA" },
            nav: { modalities: "Modalidades", technology: "Tecnología", clinical_evidence: "Evidencia Clínica", about: "Nosotros", contact: "Contacto", try_free: "Prueba Gratis", apply_pilot: "Solicitar Piloto", signup: "Registrarse Gratis", login: "Iniciar Sesión" },
            hero: { badge: "Plan Gratuito Disponible", title: "La Plataforma Completa de IA para Imágenes Médicas", subtitle: "IA de fusión multi-modal analizando 400+ patologías en 8 modalidades.", cta_primary: "Registrarse Gratis", cta_try_free: "Prueba Gratis — Sin Cuenta", cta_secondary: "Explorar Modalidades →", stats: { modalities: "8+", modalities_label: "Modalidades", pathologies: "400+", pathologies_label: "Patologías", languages: "69", languages_label: "Idiomas", accuracy: "85-95%", accuracy_label: "Precisión" } },
            trust_bar: { title: "Seguridad y Cumplimiento Empresarial", hipaa: "Compatible HIPAA", gdpr: "Listo GDPR", dicom: "Compatible DICOM", hl7: "Integración HL7/FHIR", cloud: "Nube y Local" },
            modalities: { cxr: { title: "Rayos X de Tórax", pathologies: "50 Patologías", learn_more: "Más Info →" }, ct_brain: { title: "TC Cerebral", pathologies: "30+ Patologías", learn_more: "Más Info →" }, mammography: { title: "Mamografía", pathologies: "25 Patologías", learn_more: "Más Info →" }, mri: { title: "RMN (6 Tipos)", pathologies: "30+ Patologías", learn_more: "Más Info →" }, msk: { title: "Rayos X MSK", pathologies: "75+ Patologías", learn_more: "Más Info →" }, dental: { title: "Rayos X Dental", pathologies: "40+ Patologías", learn_more: "Más Info →" }, ultrasound: { title: "Ultrasonido", pathologies: "50+ Patologías", learn_more: "Más Info →" }, pet: { title: "PET y PET-CT", pathologies: "25+ Patologías", learn_more: "Más Info →" } },
            cta: { badge: "Plan Gratuito Disponible", title: "Comienza con ScanGuru", subtitle: "Acceso anticipado y precios preferenciales.", try_free: "Prueba Gratis — Sin Cuenta", primary: "Registrarse Gratis →", secondary: "Descargar Resumen" },
            footer: { description: "Plataforma integral de IA para imágenes médicas.", platform: "Plataforma", company: "Empresa", resources: "Recursos", try_free: "🚀 Prueba Gratis", copyright: "© 2025 ScanGuru. Todos los derechos reservados.", privacy: "Política de Privacidad", terms: "Términos de Servicio" },
            form: { name: "Nombre Completo", email: "Correo Electrónico", submit: "Enviar", scan_generate: "Escanear y Generar PDF", age: "Edad", sex: "Sexo", male: "Masculino", female: "Femenino", other: "Otro", consent: "Confirmo el consentimiento del paciente" },
            badge: { critical: "CRÍTICO", warning: "ADVERTENCIA", normal: "NORMAL", urgent: "URGENTE" },
            results: { title: "Resultados del Análisis", processing_time: "Tiempo de Procesamiento", seconds: "segundos", download_pdf: "Descargar PDF", findings: "Hallazgos" },
            errors: { upload_failed: "Error al subir. Intente de nuevo.", analysis_failed: "Error en análisis.", file_too_large: "Archivo muy grande. Máx 50MB." },
            common: { loading: "Cargando...", save: "Guardar", cancel: "Cancelar", download: "Descargar", upload: "Subir", search: "Buscar", next: "Siguiente", previous: "Anterior", back: "Volver", close: "Cerrar" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // FRENCH (fr) - Français
        // ═══════════════════════════════════════════════════════════════════════
        fr: {
            brand: { name: "ScanGuru", tagline: "Imagerie Médicale par IA" },
            nav: { modalities: "Modalités", technology: "Technologie", clinical_evidence: "Preuves Cliniques", about: "À Propos", contact: "Contact", try_free: "Essai Gratuit", apply_pilot: "Demander Pilote", signup: "Inscription Gratuite", login: "Connexion" },
            hero: { badge: "Plan Gratuit Disponible", title: "La Plateforme IA Complète d'Imagerie Médicale", subtitle: "IA de fusion multi-modale analysant 400+ pathologies sur 8 modalités.", cta_primary: "Inscription Gratuite", cta_try_free: "Essai Gratuit — Sans Compte", cta_secondary: "Explorer les Modalités →", stats: { modalities: "8+", modalities_label: "Modalités", pathologies: "400+", pathologies_label: "Pathologies", languages: "69", languages_label: "Langues", accuracy: "85-95%", accuracy_label: "Précision" } },
            trust_bar: { title: "Sécurité et Conformité Enterprise", hipaa: "Conforme HIPAA", gdpr: "Prêt RGPD", dicom: "Compatible DICOM", hl7: "Intégration HL7/FHIR", cloud: "Cloud et Local" },
            modalities: { cxr: { title: "Radio Thorax", pathologies: "50 Pathologies", learn_more: "En Savoir Plus →" }, ct_brain: { title: "Scanner Cérébral", pathologies: "30+ Pathologies", learn_more: "En Savoir Plus →" }, mammography: { title: "Mammographie", pathologies: "25 Pathologies", learn_more: "En Savoir Plus →" }, mri: { title: "IRM (6 Types)", pathologies: "30+ Pathologies", learn_more: "En Savoir Plus →" }, msk: { title: "Radio MSK", pathologies: "75+ Pathologies", learn_more: "En Savoir Plus →" }, dental: { title: "Radio Dentaire", pathologies: "40+ Pathologies", learn_more: "En Savoir Plus →" }, ultrasound: { title: "Échographie", pathologies: "50+ Pathologies", learn_more: "En Savoir Plus →" }, pet: { title: "TEP et TEP-TDM", pathologies: "25+ Pathologies", learn_more: "En Savoir Plus →" } },
            cta: { badge: "Plan Gratuit Disponible", title: "Commencez avec ScanGuru", subtitle: "Accès anticipé et tarifs préférentiels.", try_free: "Essai Gratuit — Sans Compte", primary: "Inscription Gratuite →", secondary: "Télécharger l'Aperçu" },
            footer: { description: "Plateforme complète d'imagerie médicale par IA.", platform: "Plateforme", company: "Entreprise", resources: "Ressources", try_free: "🚀 Essai Gratuit", copyright: "© 2025 ScanGuru. Tous droits réservés.", privacy: "Politique de Confidentialité", terms: "Conditions d'Utilisation" },
            form: { name: "Nom Complet", email: "Adresse Email", submit: "Soumettre", scan_generate: "Scanner et Générer PDF", age: "Âge", sex: "Sexe", male: "Masculin", female: "Féminin", other: "Autre", consent: "Je confirme le consentement du patient" },
            badge: { critical: "CRITIQUE", warning: "ATTENTION", normal: "NORMAL", urgent: "URGENT" },
            results: { title: "Résultats de l'Analyse", processing_time: "Temps de Traitement", seconds: "secondes", download_pdf: "Télécharger PDF", findings: "Résultats" },
            errors: { upload_failed: "Échec du téléchargement. Réessayez.", analysis_failed: "Échec de l'analyse.", file_too_large: "Fichier trop volumineux. Max 50MB." },
            common: { loading: "Chargement...", save: "Enregistrer", cancel: "Annuler", download: "Télécharger", upload: "Téléverser", search: "Rechercher", next: "Suivant", previous: "Précédent", back: "Retour", close: "Fermer" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // GERMAN (de) - Deutsch
        // ═══════════════════════════════════════════════════════════════════════
        de: {
            brand: { name: "ScanGuru", tagline: "KI-gestützte Medizinische Bildgebung" },
            nav: { modalities: "Modalitäten", technology: "Technologie", clinical_evidence: "Klinische Evidenz", about: "Über Uns", contact: "Kontakt", try_free: "Kostenlos Testen", apply_pilot: "Pilotprojekt Beantragen", signup: "Kostenlos Registrieren", login: "Anmelden" },
            hero: { badge: "Kostenloser Plan Verfügbar", title: "Die Komplette KI-Plattform für Medizinische Bildgebung", subtitle: "Multi-modale Fusions-KI analysiert 400+ Pathologien in 8 Modalitäten.", cta_primary: "Kostenlos Registrieren", cta_try_free: "Kostenlos Testen — Ohne Konto", cta_secondary: "Modalitäten Erkunden →", stats: { modalities: "8+", modalities_label: "Modalitäten", pathologies: "400+", pathologies_label: "Pathologien", languages: "69", languages_label: "Sprachen", accuracy: "85-95%", accuracy_label: "Genauigkeit" } },
            trust_bar: { title: "Enterprise-Sicherheit und Compliance", hipaa: "HIPAA-Konform", gdpr: "DSGVO-Bereit", dicom: "DICOM-Kompatibel", hl7: "HL7/FHIR-Integration", cloud: "Cloud und On-Premise" },
            modalities: { cxr: { title: "Thorax-Röntgen", pathologies: "50 Pathologien", learn_more: "Mehr Erfahren →" }, ct_brain: { title: "CT Gehirn", pathologies: "30+ Pathologien", learn_more: "Mehr Erfahren →" }, mammography: { title: "Mammographie", pathologies: "25 Pathologien", learn_more: "Mehr Erfahren →" }, mri: { title: "MRT (6 Typen)", pathologies: "30+ Pathologien", learn_more: "Mehr Erfahren →" }, msk: { title: "MSK-Röntgen", pathologies: "75+ Pathologien", learn_more: "Mehr Erfahren →" }, dental: { title: "Dental-Röntgen", pathologies: "40+ Pathologien", learn_more: "Mehr Erfahren →" }, ultrasound: { title: "Ultraschall", pathologies: "50+ Pathologien", learn_more: "Mehr Erfahren →" }, pet: { title: "PET und PET-CT", pathologies: "25+ Pathologien", learn_more: "Mehr Erfahren →" } },
            cta: { badge: "Kostenloser Plan Verfügbar", title: "Starten Sie mit ScanGuru", subtitle: "Früher Zugang und Vorzugspreise.", try_free: "Kostenlos Testen — Ohne Konto", primary: "Kostenlos Registrieren →", secondary: "Übersicht Herunterladen" },
            footer: { description: "Umfassende KI-Plattform für medizinische Bildgebung.", platform: "Plattform", company: "Unternehmen", resources: "Ressourcen", try_free: "🚀 Kostenlos Testen", copyright: "© 2025 ScanGuru. Alle Rechte vorbehalten.", privacy: "Datenschutz", terms: "Nutzungsbedingungen" },
            form: { name: "Vollständiger Name", email: "E-Mail-Adresse", submit: "Absenden", scan_generate: "Scannen und PDF Erstellen", age: "Alter", sex: "Geschlecht", male: "Männlich", female: "Weiblich", other: "Andere", consent: "Ich bestätige die Patienteneinwilligung" },
            badge: { critical: "KRITISCH", warning: "WARNUNG", normal: "NORMAL", urgent: "DRINGEND" },
            results: { title: "Analyseergebnisse", processing_time: "Verarbeitungszeit", seconds: "Sekunden", download_pdf: "PDF Herunterladen", findings: "Befunde" },
            errors: { upload_failed: "Upload fehlgeschlagen. Bitte erneut versuchen.", analysis_failed: "Analyse fehlgeschlagen.", file_too_large: "Datei zu groß. Max 50MB." },
            common: { loading: "Laden...", save: "Speichern", cancel: "Abbrechen", download: "Herunterladen", upload: "Hochladen", search: "Suchen", next: "Weiter", previous: "Zurück", back: "Zurück", close: "Schließen" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // PORTUGUESE (pt) - Português
        // ═══════════════════════════════════════════════════════════════════════
        pt: {
            brand: { name: "ScanGuru", tagline: "Imagem Médica com IA" },
            nav: { modalities: "Modalidades", technology: "Tecnologia", clinical_evidence: "Evidência Clínica", about: "Sobre", contact: "Contacto", try_free: "Experimente Grátis", apply_pilot: "Solicitar Piloto", signup: "Registo Gratuito", login: "Entrar" },
            hero: { badge: "Plano Gratuito Disponível", title: "A Plataforma Completa de IA para Imagem Médica", subtitle: "IA de fusão multi-modal analisando 400+ patologias em 8 modalidades.", cta_primary: "Registo Gratuito", cta_try_free: "Experimente Grátis — Sem Conta", cta_secondary: "Explorar Modalidades →", stats: { modalities: "8+", modalities_label: "Modalidades", pathologies: "400+", pathologies_label: "Patologias", languages: "69", languages_label: "Línguas", accuracy: "85-95%", accuracy_label: "Precisão" } },
            trust_bar: { title: "Segurança e Conformidade Empresarial", hipaa: "Conforme HIPAA", gdpr: "Pronto RGPD", dicom: "Compatível DICOM", hl7: "Integração HL7/FHIR", cloud: "Nuvem e Local" },
            form: { name: "Nome Completo", email: "Email", submit: "Enviar", scan_generate: "Digitalizar e Gerar PDF", age: "Idade", sex: "Sexo", male: "Masculino", female: "Feminino", other: "Outro", consent: "Confirmo o consentimento do paciente" },
            common: { loading: "Carregando...", save: "Guardar", cancel: "Cancelar", download: "Descarregar", upload: "Carregar", search: "Pesquisar", next: "Seguinte", previous: "Anterior", back: "Voltar", close: "Fechar" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // PORTUGUESE BRAZIL (pt-BR) - Português (Brasil)
        // ═══════════════════════════════════════════════════════════════════════
        'pt-BR': {
            brand: { name: "ScanGuru", tagline: "Imagem Médica com IA" },
            nav: { modalities: "Modalidades", technology: "Tecnologia", clinical_evidence: "Evidência Clínica", about: "Sobre", contact: "Contato", try_free: "Teste Grátis", apply_pilot: "Solicitar Piloto", signup: "Cadastre-se Grátis", login: "Entrar" },
            hero: { badge: "Plano Gratuito Disponível", title: "A Plataforma Completa de IA para Imagens Médicas", subtitle: "IA de fusão multimodal analisando mais de 400 patologias em 8 modalidades.", cta_primary: "Cadastre-se Grátis", cta_try_free: "Teste Grátis — Sem Conta", cta_secondary: "Explorar Modalidades →", stats: { modalities: "8+", modalities_label: "Modalidades", pathologies: "400+", pathologies_label: "Patologias", languages: "69", languages_label: "Idiomas", accuracy: "85-95%", accuracy_label: "Precisão" } },
            form: { name: "Nome Completo", email: "Email", submit: "Enviar", scan_generate: "Escanear e Gerar PDF", age: "Idade", sex: "Sexo", male: "Masculino", female: "Feminino", other: "Outro", consent: "Confirmo o consentimento do paciente" },
            common: { loading: "Carregando...", save: "Salvar", cancel: "Cancelar", download: "Baixar", upload: "Enviar", search: "Pesquisar", next: "Próximo", previous: "Anterior", back: "Voltar", close: "Fechar" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // ITALIAN (it) - Italiano
        // ═══════════════════════════════════════════════════════════════════════
        it: {
            brand: { name: "ScanGuru", tagline: "Imaging Medico con IA" },
            nav: { modalities: "Modalità", technology: "Tecnologia", clinical_evidence: "Evidenza Clinica", about: "Chi Siamo", contact: "Contatti", try_free: "Prova Gratis", apply_pilot: "Richiedi Pilota", signup: "Registrati Gratis", login: "Accedi" },
            hero: { badge: "Piano Gratuito Disponibile", title: "La Piattaforma IA Completa per l'Imaging Medico", subtitle: "IA di fusione multi-modale che analizza 400+ patologie su 8 modalità.", cta_primary: "Registrati Gratis", cta_try_free: "Prova Gratis — Senza Account", cta_secondary: "Esplora Modalità →", stats: { modalities: "8+", modalities_label: "Modalità", pathologies: "400+", pathologies_label: "Patologie", languages: "69", languages_label: "Lingue", accuracy: "85-95%", accuracy_label: "Precisione" } },
            form: { name: "Nome Completo", email: "Email", submit: "Invia", scan_generate: "Scansiona e Genera PDF", age: "Età", sex: "Sesso", male: "Maschio", female: "Femmina", other: "Altro", consent: "Confermo il consenso del paziente" },
            common: { loading: "Caricamento...", save: "Salva", cancel: "Annulla", download: "Scarica", upload: "Carica", search: "Cerca", next: "Avanti", previous: "Precedente", back: "Indietro", close: "Chiudi" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // DUTCH (nl) - Nederlands
        // ═══════════════════════════════════════════════════════════════════════
        nl: {
            brand: { name: "ScanGuru", tagline: "AI-Gestuurde Medische Beeldvorming" },
            nav: { modalities: "Modaliteiten", technology: "Technologie", clinical_evidence: "Klinisch Bewijs", about: "Over Ons", contact: "Contact", try_free: "Gratis Proberen", apply_pilot: "Pilot Aanvragen", signup: "Gratis Registreren", login: "Inloggen" },
            hero: { badge: "Gratis Plan Beschikbaar", title: "Het Complete AI Platform voor Medische Beeldvorming", subtitle: "Multi-modale fusie AI analyseert 400+ pathologieën over 8 modaliteiten.", cta_primary: "Gratis Registreren", cta_try_free: "Gratis Proberen — Zonder Account", cta_secondary: "Modaliteiten Verkennen →", stats: { modalities: "8+", modalities_label: "Modaliteiten", pathologies: "400+", pathologies_label: "Pathologieën", languages: "69", languages_label: "Talen", accuracy: "85-95%", accuracy_label: "Nauwkeurigheid" } },
            form: { name: "Volledige Naam", email: "E-mailadres", submit: "Verzenden", scan_generate: "Scannen en PDF Genereren", age: "Leeftijd", sex: "Geslacht", male: "Man", female: "Vrouw", other: "Anders", consent: "Ik bevestig de toestemming van de patiënt" },
            common: { loading: "Laden...", save: "Opslaan", cancel: "Annuleren", download: "Downloaden", upload: "Uploaden", search: "Zoeken", next: "Volgende", previous: "Vorige", back: "Terug", close: "Sluiten" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // POLISH (pl) - Polski
        // ═══════════════════════════════════════════════════════════════════════
        pl: {
            brand: { name: "ScanGuru", tagline: "Obrazowanie Medyczne z AI" },
            nav: { modalities: "Modalności", technology: "Technologia", clinical_evidence: "Dowody Kliniczne", about: "O Nas", contact: "Kontakt", try_free: "Wypróbuj Za Darmo", apply_pilot: "Zgłoś Się do Pilotażu", signup: "Zarejestruj Się Za Darmo", login: "Zaloguj Się" },
            hero: { badge: "Darmowy Plan Dostępny", title: "Kompletna Platforma AI do Obrazowania Medycznego", subtitle: "Wielomodalna fuzja AI analizująca 400+ patologii w 8 modalitach.", cta_primary: "Zarejestruj Się Za Darmo", cta_try_free: "Wypróbuj Za Darmo — Bez Konta", cta_secondary: "Poznaj Modalności →", stats: { modalities: "8+", modalities_label: "Modalności", pathologies: "400+", pathologies_label: "Patologie", languages: "69", languages_label: "Języków", accuracy: "85-95%", accuracy_label: "Dokładność" } },
            form: { name: "Imię i Nazwisko", email: "Adres Email", submit: "Wyślij", scan_generate: "Skanuj i Generuj PDF", age: "Wiek", sex: "Płeć", male: "Mężczyzna", female: "Kobieta", other: "Inne", consent: "Potwierdzam zgodę pacjenta" },
            common: { loading: "Ładowanie...", save: "Zapisz", cancel: "Anuluj", download: "Pobierz", upload: "Prześlij", search: "Szukaj", next: "Dalej", previous: "Poprzedni", back: "Wstecz", close: "Zamknij" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // RUSSIAN (ru) - Русский
        // ═══════════════════════════════════════════════════════════════════════
        ru: {
            brand: { name: "ScanGuru", tagline: "Медицинская Визуализация на базе ИИ" },
            nav: { modalities: "Модальности", technology: "Технологии", clinical_evidence: "Клинические Данные", about: "О Нас", contact: "Контакты", try_free: "Попробовать Бесплатно", apply_pilot: "Подать Заявку на Пилот", signup: "Зарегистрироваться Бесплатно", login: "Войти" },
            hero: { badge: "Бесплатный План Доступен", title: "Полная ИИ Платформа для Медицинской Визуализации", subtitle: "Мультимодальный ИИ анализирует более 400 патологий в 8 модальностях.", cta_primary: "Зарегистрироваться Бесплатно", cta_try_free: "Попробовать Бесплатно — Без Аккаунта", cta_secondary: "Исследовать Модальности →", stats: { modalities: "8+", modalities_label: "Модальностей", pathologies: "400+", pathologies_label: "Патологий", languages: "69", languages_label: "Языков", accuracy: "85-95%", accuracy_label: "Точность" } },
            form: { name: "Полное Имя", email: "Электронная Почта", submit: "Отправить", scan_generate: "Сканировать и Создать PDF", age: "Возраст", sex: "Пол", male: "Мужской", female: "Женский", other: "Другой", consent: "Подтверждаю согласие пациента" },
            common: { loading: "Загрузка...", save: "Сохранить", cancel: "Отмена", download: "Скачать", upload: "Загрузить", search: "Поиск", next: "Далее", previous: "Назад", back: "Назад", close: "Закрыть" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // UKRAINIAN (uk) - Українська
        // ═══════════════════════════════════════════════════════════════════════
        uk: {
            brand: { name: "ScanGuru", tagline: "Медична Візуалізація на базі ШІ" },
            nav: { modalities: "Модальності", technology: "Технології", clinical_evidence: "Клінічні Дані", about: "Про Нас", contact: "Контакти", try_free: "Спробувати Безкоштовно", apply_pilot: "Подати Заявку на Пілот", signup: "Зареєструватися Безкоштовно", login: "Увійти" },
            hero: { badge: "Безкоштовний План Доступний", title: "Повна ШІ Платформа для Медичної Візуалізації", subtitle: "Мультимодальний ШІ аналізує понад 400 патологій у 8 модальностях.", cta_primary: "Зареєструватися Безкоштовно", cta_try_free: "Спробувати Безкоштовно — Без Акаунту", cta_secondary: "Дослідити Модальності →", stats: { modalities: "8+", modalities_label: "Модальностей", pathologies: "400+", pathologies_label: "Патологій", languages: "69", languages_label: "Мов", accuracy: "85-95%", accuracy_label: "Точність" } },
            form: { name: "Повне Ім'я", email: "Електронна Пошта", submit: "Надіслати", scan_generate: "Сканувати та Створити PDF", age: "Вік", sex: "Стать", male: "Чоловіча", female: "Жіноча", other: "Інша", consent: "Підтверджую згоду пацієнта" },
            common: { loading: "Завантаження...", save: "Зберегти", cancel: "Скасувати", download: "Завантажити", upload: "Вивантажити", search: "Пошук", next: "Далі", previous: "Попередній", back: "Назад", close: "Закрити" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // HINDI (hi) - हिन्दी
        // ═══════════════════════════════════════════════════════════════════════
        hi: {
            brand: { name: "ScanGuru", tagline: "AI संचालित मेडिकल इमेजिंग" },
            nav: { modalities: "मोडैलिटीज़", technology: "प्रौद्योगिकी", clinical_evidence: "क्लिनिकल साक्ष्य", about: "हमारे बारे में", contact: "संपर्क करें", try_free: "मुफ्त आज़माएं", apply_pilot: "पायलट के लिए आवेदन करें", signup: "मुफ्त साइन अप", login: "लॉग इन" },
            hero: { badge: "मुफ्त योजना उपलब्ध", title: "संपूर्ण मेडिकल इमेजिंग AI प्लेटफॉर्म", subtitle: "8 इमेजिंग मोडैलिटीज़ में 400+ पैथोलॉजी का विश्लेषण करने वाली मल्टी-मोडल फ्यूजन AI।", cta_primary: "मुफ्त साइन अप करें", cta_try_free: "मुफ्त आज़माएं — खाता नहीं चाहिए", cta_secondary: "मोडैलिटीज़ देखें →", stats: { modalities: "8+", modalities_label: "मोडैलिटीज़", pathologies: "400+", pathologies_label: "पैथोलॉजी", languages: "69", languages_label: "भाषाएं", accuracy: "85-95%", accuracy_label: "सटीकता" } },
            trust_bar: { title: "एंटरप्राइज़-ग्रेड सुरक्षा और अनुपालन", hipaa: "HIPAA अनुपालक", gdpr: "GDPR तैयार", dicom: "DICOM संगत", hl7: "HL7/FHIR एकीकरण", cloud: "क्लाउड और ऑन-प्रेमाइस" },
            modalities: { cxr: { title: "छाती का एक्स-रे", pathologies: "50 पैथोलॉजी", learn_more: "और जानें →" }, ct_brain: { title: "सीटी ब्रेन", pathologies: "30+ पैथोलॉजी", learn_more: "और जानें →" }, mammography: { title: "मैमोग्राफी", pathologies: "25 पैथोलॉजी", learn_more: "और जानें →" } },
            form: { name: "पूरा नाम", email: "ईमेल पता", submit: "जमा करें", scan_generate: "स्कैन करें और PDF बनाएं", age: "आयु", sex: "लिंग", male: "पुरुष", female: "महिला", other: "अन्य", consent: "मैं रोगी की सहमति की पुष्टि करता/करती हूं" },
            badge: { critical: "गंभीर", warning: "चेतावनी", normal: "सामान्य", urgent: "अत्यावश्यक" },
            results: { title: "विश्लेषण परिणाम", processing_time: "प्रोसेसिंग समय", seconds: "सेकंड", download_pdf: "PDF डाउनलोड करें", findings: "निष्कर्ष" },
            common: { loading: "लोड हो रहा है...", save: "सहेजें", cancel: "रद्द करें", download: "डाउनलोड", upload: "अपलोड", search: "खोजें", next: "अगला", previous: "पिछला", back: "वापस", close: "बंद करें" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // ARABIC (ar) - العربية - RTL
        // ═══════════════════════════════════════════════════════════════════════
        ar: {
            brand: { name: "ScanGuru", tagline: "التصوير الطبي بالذكاء الاصطناعي" },
            nav: { modalities: "الأنماط", technology: "التكنولوجيا", clinical_evidence: "الأدلة السريرية", about: "من نحن", contact: "اتصل بنا", try_free: "جرب مجاناً", apply_pilot: "التقدم للتجربة", signup: "التسجيل مجاناً", login: "تسجيل الدخول" },
            hero: { badge: "خطة مجانية متاحة", title: "منصة الذكاء الاصطناعي الكاملة للتصوير الطبي", subtitle: "ذكاء اصطناعي متعدد الأنماط يحلل أكثر من 400 مرض عبر 8 أنماط تصوير.", cta_primary: "التسجيل مجاناً", cta_try_free: "جرب مجاناً — بدون حساب", cta_secondary: "← استكشف الأنماط", stats: { modalities: "+8", modalities_label: "أنماط", pathologies: "+400", pathologies_label: "أمراض", languages: "69", languages_label: "لغة", accuracy: "95-85%", accuracy_label: "الدقة" } },
            trust_bar: { title: "أمان ومطابقة مؤسسية", hipaa: "متوافق مع HIPAA", gdpr: "جاهز لـ GDPR", dicom: "متوافق مع DICOM", hl7: "تكامل HL7/FHIR", cloud: "سحابي ومحلي" },
            modalities: { cxr: { title: "أشعة الصدر", pathologies: "50 مرض", learn_more: "← المزيد" }, ct_brain: { title: "التصوير المقطعي للدماغ", pathologies: "+30 مرض", learn_more: "← المزيد" }, mammography: { title: "تصوير الثدي", pathologies: "25 مرض", learn_more: "← المزيد" } },
            form: { name: "الاسم الكامل", email: "البريد الإلكتروني", submit: "إرسال", scan_generate: "مسح وإنشاء PDF", age: "العمر", sex: "الجنس", male: "ذكر", female: "أنثى", other: "آخر", consent: "أؤكد موافقة المريض" },
            badge: { critical: "حرج", warning: "تحذير", normal: "طبيعي", urgent: "عاجل" },
            results: { title: "نتائج التحليل", processing_time: "وقت المعالجة", seconds: "ثواني", download_pdf: "تحميل PDF", findings: "النتائج" },
            common: { loading: "جار التحميل...", save: "حفظ", cancel: "إلغاء", download: "تحميل", upload: "رفع", search: "بحث", next: "التالي", previous: "السابق", back: "رجوع", close: "إغلاق" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // PERSIAN (fa) - فارسی - RTL
        // ═══════════════════════════════════════════════════════════════════════
        fa: {
            brand: { name: "ScanGuru", tagline: "تصویربرداری پزشکی با هوش مصنوعی" },
            nav: { modalities: "روش‌ها", technology: "فناوری", clinical_evidence: "شواهد بالینی", about: "درباره ما", contact: "تماس", try_free: "رایگان امتحان کنید", apply_pilot: "درخواست آزمایشی", signup: "ثبت نام رایگان", login: "ورود" },
            hero: { badge: "طرح رایگان موجود است", title: "پلتفرم کامل هوش مصنوعی تصویربرداری پزشکی", subtitle: "هوش مصنوعی چندوجهی که بیش از 400 بیماری را در 8 روش تصویربرداری تحلیل می‌کند.", cta_primary: "ثبت نام رایگان", cta_try_free: "رایگان امتحان کنید — بدون حساب", cta_secondary: "← کاوش روش‌ها", stats: { modalities: "+8", modalities_label: "روش", pathologies: "+400", pathologies_label: "بیماری", languages: "69", languages_label: "زبان", accuracy: "95-85%", accuracy_label: "دقت" } },
            form: { name: "نام کامل", email: "ایمیل", submit: "ارسال", scan_generate: "اسکن و ایجاد PDF", age: "سن", sex: "جنسیت", male: "مرد", female: "زن", other: "دیگر", consent: "رضایت بیمار را تأیید می‌کنم" },
            common: { loading: "در حال بارگذاری...", save: "ذخیره", cancel: "لغو", download: "دانلود", upload: "آپلود", search: "جستجو", next: "بعدی", previous: "قبلی", back: "بازگشت", close: "بستن" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // HEBREW (he) - עברית - RTL
        // ═══════════════════════════════════════════════════════════════════════
        he: {
            brand: { name: "ScanGuru", tagline: "הדמיה רפואית מונעת בינה מלאכותית" },
            nav: { modalities: "מודליות", technology: "טכנולוגיה", clinical_evidence: "עדות קלינית", about: "אודות", contact: "צור קשר", try_free: "נסה בחינם", apply_pilot: "הגש בקשה לפיילוט", signup: "הרשמה חינם", login: "התחברות" },
            hero: { badge: "תוכנית חינמית זמינה", title: "פלטפורמת AI המלאה להדמיה רפואית", subtitle: "AI מולטי-מודלי המנתח מעל 400 פתולוגיות ב-8 מודליות הדמיה.", cta_primary: "הרשמה חינם", cta_try_free: "נסה בחינם — ללא חשבון", cta_secondary: "← חקור מודליות", stats: { modalities: "+8", modalities_label: "מודליות", pathologies: "+400", pathologies_label: "פתולוגיות", languages: "69", languages_label: "שפות", accuracy: "95-85%", accuracy_label: "דיוק" } },
            form: { name: "שם מלא", email: "אימייל", submit: "שלח", scan_generate: "סרוק וצור PDF", age: "גיל", sex: "מין", male: "זכר", female: "נקבה", other: "אחר", consent: "אני מאשר את הסכמת המטופל" },
            common: { loading: "טוען...", save: "שמור", cancel: "ביטול", download: "הורדה", upload: "העלאה", search: "חיפוש", next: "הבא", previous: "הקודם", back: "חזרה", close: "סגור" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // URDU (ur) - اردو - RTL
        // ═══════════════════════════════════════════════════════════════════════
        ur: {
            brand: { name: "ScanGuru", tagline: "AI سے چلنے والی طبی امیجنگ" },
            nav: { modalities: "طریقے", technology: "ٹیکنالوجی", clinical_evidence: "طبی ثبوت", about: "ہمارے بارے میں", contact: "رابطہ کریں", try_free: "مفت آزمائیں", apply_pilot: "پائلٹ کے لیے درخواست دیں", signup: "مفت سائن اپ", login: "لاگ ان" },
            hero: { badge: "مفت پلان دستیاب", title: "مکمل طبی امیجنگ AI پلیٹ فارم", subtitle: "ملٹی موڈل فیوژن AI 8 امیجنگ طریقوں میں 400+ پیتھالوجیز کا تجزیہ کرتی ہے۔", cta_primary: "مفت سائن اپ کریں", cta_try_free: "مفت آزمائیں — اکاؤنٹ نہیں چاہیے", cta_secondary: "← طریقے دیکھیں", stats: { modalities: "+8", modalities_label: "طریقے", pathologies: "+400", pathologies_label: "پیتھالوجیز", languages: "69", languages_label: "زبانیں", accuracy: "95-85%", accuracy_label: "درستگی" } },
            form: { name: "پورا نام", email: "ای میل", submit: "جمع کرائیں", scan_generate: "اسکین کریں اور PDF بنائیں", age: "عمر", sex: "جنس", male: "مرد", female: "عورت", other: "دیگر", consent: "میں مریض کی رضامندی کی تصدیق کرتا/کرتی ہوں" },
            common: { loading: "لوڈ ہو رہا ہے...", save: "محفوظ کریں", cancel: "منسوخ", download: "ڈاؤن لوڈ", upload: "اپ لوڈ", search: "تلاش", next: "اگلا", previous: "پچھلا", back: "واپس", close: "بند کریں" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // CHINESE SIMPLIFIED (zh) - 中文（简体）
        // ═══════════════════════════════════════════════════════════════════════
        zh: {
            brand: { name: "ScanGuru", tagline: "AI驱动的医学影像" },
            nav: { modalities: "检查类型", technology: "技术", clinical_evidence: "临床证据", about: "关于我们", contact: "联系我们", try_free: "免费试用", apply_pilot: "申请试点", signup: "免费注册", login: "登录" },
            hero: { badge: "免费计划可用", title: "完整的医学影像AI平台", subtitle: "多模态融合AI，分析8种影像模式中的400多种病理。", cta_primary: "免费注册", cta_try_free: "免费试用 — 无需账户", cta_secondary: "探索检查类型 →", stats: { modalities: "8+", modalities_label: "检查类型", pathologies: "400+", pathologies_label: "病理", languages: "69", languages_label: "语言", accuracy: "85-95%", accuracy_label: "准确率" } },
            trust_bar: { title: "企业级安全与合规", hipaa: "符合HIPAA", gdpr: "支持GDPR", dicom: "兼容DICOM", hl7: "HL7/FHIR集成", cloud: "云端和本地部署" },
            modalities: { cxr: { title: "胸部X光", pathologies: "50种病理", learn_more: "了解更多 →" }, ct_brain: { title: "脑部CT", pathologies: "30+种病理", learn_more: "了解更多 →" }, mammography: { title: "乳腺X光", pathologies: "25种病理", learn_more: "了解更多 →" } },
            form: { name: "姓名", email: "电子邮件", submit: "提交", scan_generate: "扫描并生成PDF", age: "年龄", sex: "性别", male: "男", female: "女", other: "其他", consent: "我确认患者同意" },
            badge: { critical: "危急", warning: "警告", normal: "正常", urgent: "紧急" },
            results: { title: "分析结果", processing_time: "处理时间", seconds: "秒", download_pdf: "下载PDF", findings: "发现" },
            common: { loading: "加载中...", save: "保存", cancel: "取消", download: "下载", upload: "上传", search: "搜索", next: "下一步", previous: "上一步", back: "返回", close: "关闭" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // CHINESE TRADITIONAL (zh-TW) - 中文（繁體）
        // ═══════════════════════════════════════════════════════════════════════
        'zh-TW': {
            brand: { name: "ScanGuru", tagline: "AI驅動的醫學影像" },
            nav: { modalities: "檢查類型", technology: "技術", clinical_evidence: "臨床證據", about: "關於我們", contact: "聯絡我們", try_free: "免費試用", apply_pilot: "申請試點", signup: "免費註冊", login: "登入" },
            hero: { badge: "免費方案可用", title: "完整的醫學影像AI平台", subtitle: "多模態融合AI，分析8種影像模式中的400多種病理。", cta_primary: "免費註冊", cta_try_free: "免費試用 — 無需帳戶", cta_secondary: "探索檢查類型 →", stats: { modalities: "8+", modalities_label: "檢查類型", pathologies: "400+", pathologies_label: "病理", languages: "69", languages_label: "語言", accuracy: "85-95%", accuracy_label: "準確率" } },
            form: { name: "姓名", email: "電子郵件", submit: "提交", scan_generate: "掃描並生成PDF", age: "年齡", sex: "性別", male: "男", female: "女", other: "其他", consent: "我確認患者同意" },
            common: { loading: "載入中...", save: "儲存", cancel: "取消", download: "下載", upload: "上傳", search: "搜尋", next: "下一步", previous: "上一步", back: "返回", close: "關閉" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // JAPANESE (ja) - 日本語
        // ═══════════════════════════════════════════════════════════════════════
        ja: {
            brand: { name: "ScanGuru", tagline: "AI医療画像診断" },
            nav: { modalities: "モダリティ", technology: "技術", clinical_evidence: "臨床エビデンス", about: "会社概要", contact: "お問い合わせ", try_free: "無料お試し", apply_pilot: "パイロット申請", signup: "無料登録", login: "ログイン" },
            hero: { badge: "無料プランあり", title: "完全な医療画像AIプラットフォーム", subtitle: "8種類の画像モダリティで400以上の病理を分析するマルチモーダル融合AI。", cta_primary: "無料登録", cta_try_free: "無料お試し — アカウント不要", cta_secondary: "モダリティを見る →", stats: { modalities: "8+", modalities_label: "モダリティ", pathologies: "400+", pathologies_label: "病理", languages: "69", languages_label: "言語", accuracy: "85-95%", accuracy_label: "精度" } },
            modalities: { cxr: { title: "胸部X線", pathologies: "50病理", learn_more: "詳細 →" }, ct_brain: { title: "脳CT", pathologies: "30+病理", learn_more: "詳細 →" }, mammography: { title: "マンモグラフィー", pathologies: "25病理", learn_more: "詳細 →" } },
            form: { name: "氏名", email: "メールアドレス", submit: "送信", scan_generate: "スキャン＆PDF生成", age: "年齢", sex: "性別", male: "男性", female: "女性", other: "その他", consent: "患者の同意を確認します" },
            badge: { critical: "緊急", warning: "警告", normal: "正常", urgent: "至急" },
            results: { title: "分析結果", processing_time: "処理時間", seconds: "秒", download_pdf: "PDFダウンロード", findings: "所見" },
            common: { loading: "読み込み中...", save: "保存", cancel: "キャンセル", download: "ダウンロード", upload: "アップロード", search: "検索", next: "次へ", previous: "前へ", back: "戻る", close: "閉じる" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // KOREAN (ko) - 한국어
        // ═══════════════════════════════════════════════════════════════════════
        ko: {
            brand: { name: "ScanGuru", tagline: "AI 의료 영상" },
            nav: { modalities: "모달리티", technology: "기술", clinical_evidence: "임상 증거", about: "소개", contact: "문의", try_free: "무료 체험", apply_pilot: "파일럿 신청", signup: "무료 가입", login: "로그인" },
            hero: { badge: "무료 플랜 제공", title: "완벽한 의료 영상 AI 플랫폼", subtitle: "8가지 영상 모달리티에서 400개 이상의 병리를 분석하는 멀티모달 퓨전 AI.", cta_primary: "무료 가입", cta_try_free: "무료 체험 — 계정 불필요", cta_secondary: "모달리티 탐색 →", stats: { modalities: "8+", modalities_label: "모달리티", pathologies: "400+", pathologies_label: "병리", languages: "69", languages_label: "언어", accuracy: "85-95%", accuracy_label: "정확도" } },
            form: { name: "성명", email: "이메일", submit: "제출", scan_generate: "스캔 및 PDF 생성", age: "나이", sex: "성별", male: "남성", female: "여성", other: "기타", consent: "환자 동의를 확인합니다" },
            badge: { critical: "위급", warning: "경고", normal: "정상", urgent: "긴급" },
            common: { loading: "로딩 중...", save: "저장", cancel: "취소", download: "다운로드", upload: "업로드", search: "검색", next: "다음", previous: "이전", back: "뒤로", close: "닫기" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // THAI (th) - ไทย
        // ═══════════════════════════════════════════════════════════════════════
        th: {
            brand: { name: "ScanGuru", tagline: "การถ่ายภาพทางการแพทย์ด้วย AI" },
            nav: { modalities: "ประเภทการตรวจ", technology: "เทคโนโลยี", clinical_evidence: "หลักฐานทางคลินิก", about: "เกี่ยวกับเรา", contact: "ติดต่อเรา", try_free: "ทดลองฟรี", apply_pilot: "สมัครโครงการนำร่อง", signup: "สมัครฟรี", login: "เข้าสู่ระบบ" },
            hero: { badge: "แผนฟรีพร้อมใช้งาน", title: "แพลตฟอร์ม AI การถ่ายภาพทางการแพทย์ที่สมบูรณ์", subtitle: "AI แบบผสมผสานหลายโหมดวิเคราะห์พยาธิวิทยากว่า 400 รายการใน 8 โหมดการถ่ายภาพ", cta_primary: "สมัครฟรี", cta_try_free: "ทดลองฟรี — ไม่ต้องมีบัญชี", cta_secondary: "สำรวจประเภทการตรวจ →", stats: { modalities: "8+", modalities_label: "ประเภท", pathologies: "400+", pathologies_label: "พยาธิวิทยา", languages: "69", languages_label: "ภาษา", accuracy: "85-95%", accuracy_label: "ความแม่นยำ" } },
            form: { name: "ชื่อ-นามสกุล", email: "อีเมล", submit: "ส่ง", scan_generate: "สแกนและสร้าง PDF", age: "อายุ", sex: "เพศ", male: "ชาย", female: "หญิง", other: "อื่นๆ", consent: "ข้าพเจ้ายืนยันความยินยอมของผู้ป่วย" },
            common: { loading: "กำลังโหลด...", save: "บันทึก", cancel: "ยกเลิก", download: "ดาวน์โหลด", upload: "อัพโหลด", search: "ค้นหา", next: "ถัดไป", previous: "ก่อนหน้า", back: "กลับ", close: "ปิด" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // VIETNAMESE (vi) - Tiếng Việt
        // ═══════════════════════════════════════════════════════════════════════
        vi: {
            brand: { name: "ScanGuru", tagline: "Hình ảnh Y tế AI" },
            nav: { modalities: "Phương thức", technology: "Công nghệ", clinical_evidence: "Bằng chứng Lâm sàng", about: "Giới thiệu", contact: "Liên hệ", try_free: "Dùng thử Miễn phí", apply_pilot: "Đăng ký Thí điểm", signup: "Đăng ký Miễn phí", login: "Đăng nhập" },
            hero: { badge: "Gói Miễn phí Có sẵn", title: "Nền tảng AI Hình ảnh Y tế Toàn diện", subtitle: "AI hợp nhất đa phương thức phân tích hơn 400 bệnh lý trên 8 phương thức chẩn đoán hình ảnh.", cta_primary: "Đăng ký Miễn phí", cta_try_free: "Dùng thử Miễn phí — Không cần Tài khoản", cta_secondary: "Khám phá Phương thức →", stats: { modalities: "8+", modalities_label: "Phương thức", pathologies: "400+", pathologies_label: "Bệnh lý", languages: "69", languages_label: "Ngôn ngữ", accuracy: "85-95%", accuracy_label: "Độ chính xác" } },
            form: { name: "Họ tên", email: "Email", submit: "Gửi", scan_generate: "Quét và Tạo PDF", age: "Tuổi", sex: "Giới tính", male: "Nam", female: "Nữ", other: "Khác", consent: "Tôi xác nhận sự đồng ý của bệnh nhân" },
            common: { loading: "Đang tải...", save: "Lưu", cancel: "Hủy", download: "Tải xuống", upload: "Tải lên", search: "Tìm kiếm", next: "Tiếp", previous: "Trước", back: "Quay lại", close: "Đóng" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // INDONESIAN (id) - Bahasa Indonesia
        // ═══════════════════════════════════════════════════════════════════════
        id: {
            brand: { name: "ScanGuru", tagline: "Pencitraan Medis Bertenaga AI" },
            nav: { modalities: "Modalitas", technology: "Teknologi", clinical_evidence: "Bukti Klinis", about: "Tentang Kami", contact: "Kontak", try_free: "Coba Gratis", apply_pilot: "Daftar Pilot", signup: "Daftar Gratis", login: "Masuk" },
            hero: { badge: "Paket Gratis Tersedia", title: "Platform AI Pencitraan Medis Lengkap", subtitle: "AI fusi multi-modal menganalisis 400+ patologi di 8 modalitas pencitraan.", cta_primary: "Daftar Gratis", cta_try_free: "Coba Gratis — Tanpa Akun", cta_secondary: "Jelajahi Modalitas →", stats: { modalities: "8+", modalities_label: "Modalitas", pathologies: "400+", pathologies_label: "Patologi", languages: "69", languages_label: "Bahasa", accuracy: "85-95%", accuracy_label: "Akurasi" } },
            form: { name: "Nama Lengkap", email: "Email", submit: "Kirim", scan_generate: "Pindai dan Buat PDF", age: "Usia", sex: "Jenis Kelamin", male: "Laki-laki", female: "Perempuan", other: "Lainnya", consent: "Saya mengonfirmasi persetujuan pasien" },
            common: { loading: "Memuat...", save: "Simpan", cancel: "Batal", download: "Unduh", upload: "Unggah", search: "Cari", next: "Berikutnya", previous: "Sebelumnya", back: "Kembali", close: "Tutup" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // MALAY (ms) - Bahasa Melayu
        // ═══════════════════════════════════════════════════════════════════════
        ms: {
            brand: { name: "ScanGuru", tagline: "Pengimejan Perubatan Dikuasakan AI" },
            nav: { modalities: "Modaliti", technology: "Teknologi", clinical_evidence: "Bukti Klinikal", about: "Tentang Kami", contact: "Hubungi", try_free: "Cuba Percuma", apply_pilot: "Mohon Perintis", signup: "Daftar Percuma", login: "Log Masuk" },
            hero: { badge: "Pelan Percuma Tersedia", title: "Platform AI Pengimejan Perubatan Lengkap", subtitle: "AI gabungan multi-modal menganalisis 400+ patologi dalam 8 modaliti pengimejan.", cta_primary: "Daftar Percuma", cta_try_free: "Cuba Percuma — Tanpa Akaun", cta_secondary: "Terokai Modaliti →", stats: { modalities: "8+", modalities_label: "Modaliti", pathologies: "400+", pathologies_label: "Patologi", languages: "69", languages_label: "Bahasa", accuracy: "85-95%", accuracy_label: "Ketepatan" } },
            form: { name: "Nama Penuh", email: "Emel", submit: "Hantar", scan_generate: "Imbas dan Jana PDF", age: "Umur", sex: "Jantina", male: "Lelaki", female: "Perempuan", other: "Lain-lain", consent: "Saya mengesahkan kebenaran pesakit" },
            common: { loading: "Memuatkan...", save: "Simpan", cancel: "Batal", download: "Muat turun", upload: "Muat naik", search: "Cari", next: "Seterusnya", previous: "Sebelumnya", back: "Kembali", close: "Tutup" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // TURKISH (tr) - Türkçe
        // ═══════════════════════════════════════════════════════════════════════
        tr: {
            brand: { name: "ScanGuru", tagline: "Yapay Zeka Destekli Tıbbi Görüntüleme" },
            nav: { modalities: "Modaliteler", technology: "Teknoloji", clinical_evidence: "Klinik Kanıt", about: "Hakkımızda", contact: "İletişim", try_free: "Ücretsiz Dene", apply_pilot: "Pilot İçin Başvur", signup: "Ücretsiz Kayıt", login: "Giriş Yap" },
            hero: { badge: "Ücretsiz Plan Mevcut", title: "Eksiksiz Tıbbi Görüntüleme Yapay Zeka Platformu", subtitle: "8 görüntüleme modalitesinde 400'den fazla patolojiyi analiz eden çok modlu füzyon AI.", cta_primary: "Ücretsiz Kayıt", cta_try_free: "Ücretsiz Dene — Hesap Gerektirmez", cta_secondary: "Modaliteleri Keşfet →", stats: { modalities: "8+", modalities_label: "Modalite", pathologies: "400+", pathologies_label: "Patoloji", languages: "69", languages_label: "Dil", accuracy: "85-95%", accuracy_label: "Doğruluk" } },
            form: { name: "Ad Soyad", email: "E-posta", submit: "Gönder", scan_generate: "Tara ve PDF Oluştur", age: "Yaş", sex: "Cinsiyet", male: "Erkek", female: "Kadın", other: "Diğer", consent: "Hasta onayını doğruluyorum" },
            common: { loading: "Yükleniyor...", save: "Kaydet", cancel: "İptal", download: "İndir", upload: "Yükle", search: "Ara", next: "İleri", previous: "Geri", back: "Geri", close: "Kapat" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // BENGALI (bn) - বাংলা
        // ═══════════════════════════════════════════════════════════════════════
        bn: {
            brand: { name: "ScanGuru", tagline: "AI চালিত মেডিকেল ইমেজিং" },
            nav: { modalities: "মোডালিটি", technology: "প্রযুক্তি", clinical_evidence: "ক্লিনিক্যাল প্রমাণ", about: "আমাদের সম্পর্কে", contact: "যোগাযোগ", try_free: "বিনামূল্যে চেষ্টা করুন", apply_pilot: "পাইলটের জন্য আবেদন করুন", signup: "বিনামূল্যে সাইন আপ", login: "লগ ইন" },
            hero: { badge: "বিনামূল্যে পরিকল্পনা উপলব্ধ", title: "সম্পূর্ণ মেডিকেল ইমেজিং AI প্ল্যাটফর্ম", subtitle: "মাল্টি-মোডাল ফিউশন AI ৮টি ইমেজিং মোডালিটিতে ৪০০+ প্যাথলজি বিশ্লেষণ করে।", cta_primary: "বিনামূল্যে সাইন আপ করুন", cta_try_free: "বিনামূল্যে চেষ্টা করুন — অ্যাকাউন্ট লাগবে না", cta_secondary: "মোডালিটি দেখুন →", stats: { modalities: "৮+", modalities_label: "মোডালিটি", pathologies: "৪০০+", pathologies_label: "প্যাথলজি", languages: "৬৯", languages_label: "ভাষা", accuracy: "৮৫-৯৫%", accuracy_label: "নির্ভুলতা" } },
            form: { name: "পূর্ণ নাম", email: "ইমেইল", submit: "জমা দিন", scan_generate: "স্ক্যান করুন এবং PDF তৈরি করুন", age: "বয়স", sex: "লিঙ্গ", male: "পুরুষ", female: "মহিলা", other: "অন্যান্য", consent: "আমি রোগীর সম্মতি নিশ্চিত করছি" },
            common: { loading: "লোড হচ্ছে...", save: "সংরক্ষণ", cancel: "বাতিল", download: "ডাউনলোড", upload: "আপলোড", search: "অনুসন্ধান", next: "পরবর্তী", previous: "আগের", back: "ফিরে যান", close: "বন্ধ" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // TAMIL (ta) - தமிழ்
        // ═══════════════════════════════════════════════════════════════════════
        ta: {
            brand: { name: "ScanGuru", tagline: "AI மருத்துவ படவரைவு" },
            nav: { modalities: "முறைகள்", technology: "தொழில்நுட்பம்", clinical_evidence: "மருத்துவ சான்றுகள்", about: "எங்களைப் பற்றி", contact: "தொடர்பு கொள்ளுங்கள்", try_free: "இலவசமாக முயற்சிக்கவும்", apply_pilot: "பைலட்டுக்கு விண்ணப்பிக்கவும்", signup: "இலவச பதிவு", login: "உள்நுழைய" },
            hero: { badge: "இலவச திட்டம் கிடைக்கிறது", title: "முழுமையான மருத்துவ படவரைவு AI தளம்", subtitle: "8 படவரைவு முறைகளில் 400+ நோயியல்களை பகுப்பாய்வு செய்யும் பல-முறை இணைப்பு AI.", cta_primary: "இலவசமாக பதிவு செய்யவும்", cta_try_free: "இலவசமாக முயற்சிக்கவும் — கணக்கு தேவையில்லை", cta_secondary: "முறைகளை ஆராயுங்கள் →", stats: { modalities: "8+", modalities_label: "முறைகள்", pathologies: "400+", pathologies_label: "நோயியல்", languages: "69", languages_label: "மொழிகள்", accuracy: "85-95%", accuracy_label: "துல்லியம்" } },
            form: { name: "முழு பெயர்", email: "மின்னஞ்சல்", submit: "சமர்ப்பிக்கவும்", scan_generate: "ஸ்கேன் செய்து PDF உருவாக்கவும்", age: "வயது", sex: "பாலினம்", male: "ஆண்", female: "பெண்", other: "பிற", consent: "நோயாளியின் ஒப்புதலை உறுதிப்படுத்துகிறேன்" },
            common: { loading: "ஏற்றுகிறது...", save: "சேமிக்க", cancel: "ரத்து", download: "பதிவிறக்க", upload: "பதிவேற்ற", search: "தேடு", next: "அடுத்து", previous: "முந்தைய", back: "பின்", close: "மூடு" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // TELUGU (te) - తెలుగు
        // ═══════════════════════════════════════════════════════════════════════
        te: {
            brand: { name: "ScanGuru", tagline: "AI వైద్య చిత్రీకరణ" },
            nav: { modalities: "మోడాలిటీలు", technology: "సాంకేతికత", clinical_evidence: "క్లినికల్ సాక్ష్యం", about: "మా గురించి", contact: "సంప్రదించండి", try_free: "ఉచితంగా ప్రయత్నించండి", signup: "ఉచిత సైన్ అప్", login: "లాగిన్" },
            hero: { badge: "ఉచిత ప్లాన్ అందుబాటులో ఉంది", title: "పూర్తి మెడికల్ ఇమేజింగ్ AI ప్లాట్‌ఫారమ్", subtitle: "8 ఇమేజింగ్ మోడాలిటీలలో 400+ పాథాలజీలను విశ్లేషించే మల్టీ-మోడల్ ఫ్యూజన్ AI.", cta_primary: "ఉచితంగా సైన్ అప్ చేయండి", cta_try_free: "ఉచితంగా ప్రయత్నించండి — ఖాతా అవసరం లేదు", stats: { modalities: "8+", modalities_label: "మోడాలిటీలు", pathologies: "400+", pathologies_label: "పాథాలజీలు", languages: "69", languages_label: "భాషలు", accuracy: "85-95%", accuracy_label: "ఖచ్చితత్వం" } },
            form: { name: "పూర్తి పేరు", email: "ఇమెయిల్", submit: "సమర్పించు", scan_generate: "స్కాన్ చేసి PDF సృష్టించు", age: "వయస్సు", sex: "లింగం", male: "పురుషుడు", female: "స్త్రీ", other: "ఇతర", consent: "నేను రోగి సమ్మతిని ధృవీకరిస్తున్నాను" },
            common: { loading: "లోడ్ అవుతోంది...", save: "సేవ్", cancel: "రద్దు", download: "డౌన్‌లోడ్", upload: "అప్‌లోడ్", search: "శోధన", next: "తదుపరి", previous: "మునుపటి", back: "వెనుకకు", close: "మూసివేయి" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // SWAHILI (sw) - Kiswahili
        // ═══════════════════════════════════════════════════════════════════════
        sw: {
            brand: { name: "ScanGuru", tagline: "Upigaji Picha wa Matibabu kwa AI" },
            nav: { modalities: "Njia", technology: "Teknolojia", clinical_evidence: "Ushahidi wa Kimatibabu", about: "Kuhusu Sisi", contact: "Wasiliana Nasi", try_free: "Jaribu Bure", apply_pilot: "Omba Majaribio", signup: "Jisajili Bure", login: "Ingia" },
            hero: { badge: "Mpango wa Bure Unapatikana", title: "Jukwaa Kamili la AI la Upigaji Picha wa Matibabu", subtitle: "AI ya mchanganyiko wa njia nyingi inayochambua patholojia 400+ katika njia 8 za upigaji picha.", cta_primary: "Jisajili Bure", cta_try_free: "Jaribu Bure — Bila Akaunti", cta_secondary: "Chunguza Njia →", stats: { modalities: "8+", modalities_label: "Njia", pathologies: "400+", pathologies_label: "Patholojia", languages: "69", languages_label: "Lugha", accuracy: "85-95%", accuracy_label: "Usahihi" } },
            form: { name: "Jina Kamili", email: "Barua pepe", submit: "Wasilisha", scan_generate: "Changanua na Tengeneza PDF", age: "Umri", sex: "Jinsia", male: "Mwanaume", female: "Mwanamke", other: "Nyingine", consent: "Ninathibitisha idhini ya mgonjwa" },
            common: { loading: "Inapakia...", save: "Hifadhi", cancel: "Ghairi", download: "Pakua", upload: "Pakia", search: "Tafuta", next: "Inayofuata", previous: "Iliyotangulia", back: "Rudi", close: "Funga" }
        },

        // ═══════════════════════════════════════════════════════════════════════
        // ADDITIONAL LANGUAGES (Minimal essential strings)
        // Fallback to English for missing keys
        // ═══════════════════════════════════════════════════════════════════════
        
        // Remaining European
        cs: { brand: { name: "ScanGuru", tagline: "AI Medicínské Zobrazování" }, nav: { modalities: "Modality", technology: "Technologie", about: "O nás", contact: "Kontakt", try_free: "Vyzkoušet Zdarma", signup: "Registrace Zdarma", login: "Přihlásit" }, form: { name: "Celé Jméno", email: "Email", submit: "Odeslat", age: "Věk", sex: "Pohlaví", male: "Muž", female: "Žena" }, common: { loading: "Načítání...", save: "Uložit", cancel: "Zrušit", download: "Stáhnout", close: "Zavřít" } },
        ro: { brand: { name: "ScanGuru", tagline: "Imagistică Medicală cu AI" }, nav: { modalities: "Modalități", technology: "Tehnologie", about: "Despre Noi", contact: "Contact", try_free: "Încearcă Gratuit", signup: "Înregistrare Gratuită", login: "Autentificare" }, form: { name: "Nume Complet", email: "Email", submit: "Trimite", age: "Vârstă", sex: "Sex", male: "Masculin", female: "Feminin" }, common: { loading: "Se încarcă...", save: "Salvează", cancel: "Anulează", download: "Descarcă", close: "Închide" } },
        el: { brand: { name: "ScanGuru", tagline: "Ιατρική Απεικόνιση με AI" }, nav: { modalities: "Μέθοδοι", technology: "Τεχνολογία", about: "Σχετικά", contact: "Επικοινωνία", try_free: "Δοκιμή Δωρεάν", signup: "Εγγραφή Δωρεάν", login: "Σύνδεση" }, form: { name: "Ονοματεπώνυμο", email: "Email", submit: "Υποβολή", age: "Ηλικία", sex: "Φύλο", male: "Άνδρας", female: "Γυναίκα" }, common: { loading: "Φόρτωση...", save: "Αποθήκευση", cancel: "Ακύρωση", download: "Λήψη", close: "Κλείσιμο" } },
        sr: { brand: { name: "ScanGuru", tagline: "AI Медицинско Снимање" }, nav: { modalities: "Модалитети", technology: "Технологија", about: "О Нама", contact: "Контакт", try_free: "Пробај Бесплатно", signup: "Бесплатна Регистрација", login: "Пријава" }, form: { name: "Пуно Име", email: "Емаил", submit: "Пошаљи", age: "Године", sex: "Пол", male: "Мушки", female: "Женски" }, common: { loading: "Учитавање...", save: "Сачувај", cancel: "Откажи", download: "Преузми", close: "Затвори" } },
        sv: { brand: { name: "ScanGuru", tagline: "AI-Driven Medicinsk Bildgivning" }, nav: { modalities: "Modaliteter", technology: "Teknik", about: "Om Oss", contact: "Kontakt", try_free: "Testa Gratis", signup: "Registrera Gratis", login: "Logga In" }, form: { name: "Fullständigt Namn", email: "E-post", submit: "Skicka", age: "Ålder", sex: "Kön", male: "Man", female: "Kvinna" }, common: { loading: "Laddar...", save: "Spara", cancel: "Avbryt", download: "Ladda ner", close: "Stäng" } },
        da: { brand: { name: "ScanGuru", tagline: "AI-Drevet Medicinsk Billeddannelse" }, nav: { modalities: "Modaliteter", technology: "Teknologi", about: "Om Os", contact: "Kontakt", try_free: "Prøv Gratis", signup: "Registrer Gratis", login: "Log Ind" }, form: { name: "Fulde Navn", email: "E-mail", submit: "Indsend", age: "Alder", sex: "Køn", male: "Mand", female: "Kvinde" }, common: { loading: "Indlæser...", save: "Gem", cancel: "Annuller", download: "Download", close: "Luk" } },
        no: { brand: { name: "ScanGuru", tagline: "AI-Drevet Medisinsk Avbildning" }, nav: { modalities: "Modaliteter", technology: "Teknologi", about: "Om Oss", contact: "Kontakt", try_free: "Prøv Gratis", signup: "Registrer Gratis", login: "Logg Inn" }, form: { name: "Fullt Navn", email: "E-post", submit: "Send", age: "Alder", sex: "Kjønn", male: "Mann", female: "Kvinne" }, common: { loading: "Laster...", save: "Lagre", cancel: "Avbryt", download: "Last ned", close: "Lukk" } },
        fi: { brand: { name: "ScanGuru", tagline: "AI-Pohjainen Lääketieteellinen Kuvantaminen" }, nav: { modalities: "Modaliteetit", technology: "Teknologia", about: "Meistä", contact: "Yhteystiedot", try_free: "Kokeile Ilmaiseksi", signup: "Rekisteröidy Ilmaiseksi", login: "Kirjaudu" }, form: { name: "Koko Nimi", email: "Sähköposti", submit: "Lähetä", age: "Ikä", sex: "Sukupuoli", male: "Mies", female: "Nainen" }, common: { loading: "Ladataan...", save: "Tallenna", cancel: "Peruuta", download: "Lataa", close: "Sulje" } },
        hu: { brand: { name: "ScanGuru", tagline: "AI Orvosi Képalkotás" }, nav: { modalities: "Modalitások", technology: "Technológia", about: "Rólunk", contact: "Kapcsolat", try_free: "Próbáld Ki Ingyen", signup: "Ingyenes Regisztráció", login: "Bejelentkezés" }, form: { name: "Teljes Név", email: "Email", submit: "Küldés", age: "Kor", sex: "Nem", male: "Férfi", female: "Nő" }, common: { loading: "Betöltés...", save: "Mentés", cancel: "Mégse", download: "Letöltés", close: "Bezárás" } },

        // Indian Languages (remaining)
        mr: { brand: { name: "ScanGuru", tagline: "AI वैद्यकीय प्रतिमाकरण" }, nav: { try_free: "मोफत वापरा", signup: "मोफत नोंदणी", login: "लॉग इन" }, form: { name: "पूर्ण नाव", email: "ईमेल", submit: "सबमिट करा", age: "वय", sex: "लिंग", male: "पुरुष", female: "स्त्री" }, common: { loading: "लोड होत आहे...", save: "जतन करा", cancel: "रद्द करा", download: "डाउनलोड", close: "बंद करा" } },
        gu: { brand: { name: "ScanGuru", tagline: "AI મેડિકલ ઇમેજિંગ" }, nav: { try_free: "મફત અજમાવો", signup: "મફત સાઇન અપ", login: "લોગ ઇન" }, form: { name: "પૂરું નામ", email: "ઈમેલ", submit: "સબમિટ કરો", age: "ઉંમર", sex: "લિંગ", male: "પુરુષ", female: "સ્ત્રી" }, common: { loading: "લોડ થઈ રહ્યું છે...", save: "સાચવો", cancel: "રદ કરો", download: "ડાઉનલોડ", close: "બંધ કરો" } },
        kn: { brand: { name: "ScanGuru", tagline: "AI ವೈದ್ಯಕೀಯ ಚಿತ್ರಣ" }, nav: { try_free: "ಉಚಿತವಾಗಿ ಪ್ರಯತ್ನಿಸಿ", signup: "ಉಚಿತ ಸೈನ್ ಅಪ್", login: "ಲಾಗಿನ್" }, form: { name: "ಪೂರ್ಣ ಹೆಸರು", email: "ಇಮೇಲ್", submit: "ಸಲ್ಲಿಸು", age: "ವಯಸ್ಸು", sex: "ಲಿಂಗ", male: "ಪುರುಷ", female: "ಮಹಿಳೆ" }, common: { loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...", save: "ಉಳಿಸು", cancel: "ರದ್ದುಮಾಡು", download: "ಡೌನ್‌ಲೋಡ್", close: "ಮುಚ್ಚು" } },
        ml: { brand: { name: "ScanGuru", tagline: "AI മെഡിക്കൽ ഇമേജിംഗ്" }, nav: { try_free: "സൗജന്യമായി പരീക്ഷിക്കുക", signup: "സൗജന്യ സൈൻ അപ്പ്", login: "ലോഗിൻ" }, form: { name: "മുഴുവൻ പേര്", email: "ഇമെയിൽ", submit: "സമർപ്പിക്കുക", age: "പ്രായം", sex: "ലിംഗം", male: "പുരുഷൻ", female: "സ്ത്രീ" }, common: { loading: "ലോഡ് ചെയ്യുന്നു...", save: "സംരക്ഷിക്കുക", cancel: "റദ്ദാക്കുക", download: "ഡൗൺലോഡ്", close: "അടയ്ക്കുക" } },
        pa: { brand: { name: "ScanGuru", tagline: "AI ਮੈਡੀਕਲ ਇਮੇਜਿੰਗ" }, nav: { try_free: "ਮੁਫ਼ਤ ਅਜ਼ਮਾਓ", signup: "ਮੁਫ਼ਤ ਸਾਈਨ ਅੱਪ", login: "ਲੌਗ ਇਨ" }, form: { name: "ਪੂਰਾ ਨਾਮ", email: "ਈਮੇਲ", submit: "ਜਮ੍ਹਾਂ ਕਰੋ", age: "ਉਮਰ", sex: "ਲਿੰਗ", male: "ਪੁਰਸ਼", female: "ਔਰਤ" }, common: { loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...", save: "ਸੇਵ ਕਰੋ", cancel: "ਰੱਦ ਕਰੋ", download: "ਡਾਊਨਲੋਡ", close: "ਬੰਦ ਕਰੋ" } },
        or: { brand: { name: "ScanGuru", tagline: "AI ମେଡିକାଲ ଇମେଜିଂ" }, nav: { try_free: "ମାଗଣାରେ ଚେଷ୍ଟା କରନ୍ତୁ", signup: "ମାଗଣା ସାଇନ ଅପ", login: "ଲଗ ଇନ" }, form: { name: "ପୂର୍ଣ୍ଣ ନାମ", email: "ଇମେଲ", submit: "ଦାଖଲ କରନ୍ତୁ", age: "ବୟସ", sex: "ଲିଙ୍ଗ", male: "ପୁରୁଷ", female: "ମହିଳା" }, common: { loading: "ଲୋଡ ହେଉଛି...", save: "ସଞ୍ଚୟ", cancel: "ବାତିଲ", download: "ଡାଉନଲୋଡ", close: "ବନ୍ଦ କରନ୍ତୁ" } },
        as: { brand: { name: "ScanGuru", tagline: "AI চিকিৎসা প্ৰতিবিম্ব" }, form: { name: "সম্পূৰ্ণ নাম", email: "ইমেইল", submit: "দাখিল কৰক" }, common: { loading: "লোড হৈ আছে..." } },
        ks: { brand: { name: "ScanGuru", tagline: "AI طبی تصویر کشی" }, form: { name: "پورٕ ناو", email: "ای میل", submit: "جمع کرو" }, common: { loading: "لوڈ ہورہا..." } },
        sd: { brand: { name: "ScanGuru", tagline: "AI طبي تصوير" }, form: { name: "پورو نالو", email: "اي ميل", submit: "جمع ڪريو" }, common: { loading: "لوڊ ٿي رهيو آهي..." } },
        mai: { brand: { name: "ScanGuru", tagline: "AI मेडिकल इमेजिंग" }, form: { name: "पूरा नाम", email: "ईमेल", submit: "जमा करू" }, common: { loading: "लोड भ रहल अछि..." } },
        doi: { brand: { name: "ScanGuru", tagline: "AI मेडिकल इमेजिंग" }, form: { name: "पूरा नांऽ", email: "ईमेल", submit: "जमा करो" }, common: { loading: "लोड हो रया है..." } },
        ne: { brand: { name: "ScanGuru", tagline: "AI चिकित्सा इमेजिङ" }, nav: { try_free: "निःशुल्क प्रयास गर्नुहोस्", signup: "निःशुल्क साइन अप", login: "लग इन" }, form: { name: "पूरा नाम", email: "इमेल", submit: "पेश गर्नुहोस्", age: "उमेर", sex: "लिङ्ग", male: "पुरुष", female: "महिला" }, common: { loading: "लोड हुँदैछ...", save: "बचत गर्नुहोस्", cancel: "रद्द गर्नुहोस्", download: "डाउनलोड", close: "बन्द गर्नुहोस्" } },
        si: { brand: { name: "ScanGuru", tagline: "AI වෛද්‍ය රූපකරණය" }, nav: { try_free: "නොමිලේ උත්සාහ කරන්න", signup: "නොමිලේ ලියාපදිංචි වන්න", login: "පුරනය" }, form: { name: "සම්පූර්ණ නම", email: "විද්‍යුත් තැපෑල", submit: "ඉදිරිපත් කරන්න", age: "වයස", sex: "ස්ත්‍රී පුරුෂ භාවය", male: "පිරිමි", female: "ගැහැණු" }, common: { loading: "පූරණය වෙමින්...", save: "සුරකින්න", cancel: "අවලංගු කරන්න", download: "බාගන්න", close: "වසන්න" } },
        dv: { brand: { name: "ScanGuru", tagline: "AI މެޑިކަލް އިމޭޖިންގ" }, form: { name: "ފުރިހަމަ ނަން", email: "އީމެއިލް", submit: "ފޮނުވާ" }, common: { loading: "ލޯޑްވަނީ..." } },
        bho: { brand: { name: "ScanGuru", tagline: "AI मेडिकल इमेजिंग" }, form: { name: "पूरा नाम", email: "ईमेल", submit: "जमा करीं" }, common: { loading: "लोड हो रहल बा..." } },

        // Southeast Asian (remaining)
        tl: { brand: { name: "ScanGuru", tagline: "AI Medical Imaging" }, nav: { try_free: "Subukan ng Libre", signup: "Mag-sign Up ng Libre", login: "Mag-log In" }, form: { name: "Buong Pangalan", email: "Email", submit: "Isumite", age: "Edad", sex: "Kasarian", male: "Lalaki", female: "Babae" }, common: { loading: "Naglo-load...", save: "I-save", cancel: "Kanselahin", download: "I-download", close: "Isara" } },
        fil: { brand: { name: "ScanGuru", tagline: "AI Medical Imaging" }, nav: { try_free: "Subukan ng Libre", signup: "Mag-sign Up ng Libre", login: "Mag-log In" }, form: { name: "Buong Pangalan", email: "Email", submit: "Isumite", age: "Edad", sex: "Kasarian", male: "Lalaki", female: "Babae" }, common: { loading: "Naglo-load...", save: "I-save", cancel: "Kanselahin", download: "I-download", close: "Isara" } },
        my: { brand: { name: "ScanGuru", tagline: "AI ဆေးပညာပုံရိပ်" }, form: { name: "အမည်အပြည့်အစုံ", email: "အီးမေးလ်", submit: "တင်သွင်းပါ" }, common: { loading: "ဖွင့်နေသည်..." } },
        km: { brand: { name: "ScanGuru", tagline: "AI រូបភាពវេជ្ជសាស្រ្ត" }, form: { name: "ឈ្មោះពេញ", email: "អ៊ីមែល", submit: "ដាក់ស្នើ" }, common: { loading: "កំពុងផ្ទុក..." } },
        lo: { brand: { name: "ScanGuru", tagline: "AI ການຖ່າຍພາບທາງການແພດ" }, form: { name: "ຊື່ເຕັມ", email: "ອີເມວ", submit: "ສົ່ງ" }, common: { loading: "ກຳລັງໂຫລດ..." } },
        jv: { brand: { name: "ScanGuru", tagline: "AI Pencitraan Medis" }, form: { name: "Jeneng Lengkap", email: "Email", submit: "Kirim" }, common: { loading: "Ngemot..." } },

        // East Asian (remaining)
        mn: { brand: { name: "ScanGuru", tagline: "AI Эмнэлгийн Дүрс Оношлогоо" }, nav: { try_free: "Үнэгүй туршиж үзэх", signup: "Үнэгүй бүртгүүлэх", login: "Нэвтрэх" }, form: { name: "Бүтэн нэр", email: "Имэйл", submit: "Илгээх", age: "Нас", sex: "Хүйс", male: "Эрэгтэй", female: "Эмэгтэй" }, common: { loading: "Ачааллаж байна...", save: "Хадгалах", cancel: "Цуцлах", download: "Татах", close: "Хаах" } },

        // Central Asian
        az: { brand: { name: "ScanGuru", tagline: "AI Tibbi Görüntüləmə" }, nav: { try_free: "Pulsuz Sınayın", signup: "Pulsuz Qeydiyyat", login: "Daxil Olun" }, form: { name: "Tam Ad", email: "E-poçt", submit: "Göndər", age: "Yaş", sex: "Cins", male: "Kişi", female: "Qadın" }, common: { loading: "Yüklənir...", save: "Saxla", cancel: "Ləğv et", download: "Yüklə", close: "Bağla" } },
        uz: { brand: { name: "ScanGuru", tagline: "AI Tibbiy Tasvirlash" }, nav: { try_free: "Bepul Sinab Ko'ring", signup: "Bepul Ro'yxatdan O'ting", login: "Kirish" }, form: { name: "To'liq Ism", email: "Elektron Pochta", submit: "Yuborish", age: "Yosh", sex: "Jins", male: "Erkak", female: "Ayol" }, common: { loading: "Yuklanmoqda...", save: "Saqlash", cancel: "Bekor qilish", download: "Yuklab olish", close: "Yopish" } },
        kk: { brand: { name: "ScanGuru", tagline: "AI Медициналық Бейнелеу" }, nav: { try_free: "Тегін Байқап Көріңіз", signup: "Тегін Тіркелу", login: "Кіру" }, form: { name: "Толық Аты-жөні", email: "Электрондық Пошта", submit: "Жіберу", age: "Жасы", sex: "Жынысы", male: "Ер", female: "Әйел" }, common: { loading: "Жүктелуде...", save: "Сақтау", cancel: "Болдырмау", download: "Жүктеп алу", close: "Жабу" } },

        // African (remaining)
        am: { brand: { name: "ScanGuru", tagline: "AI የሕክምና ምስል" }, nav: { try_free: "በነጻ ይሞክሩ", signup: "በነጻ ይመዝገቡ", login: "ይግቡ" }, form: { name: "ሙሉ ስም", email: "ኢሜይል", submit: "አስገባ", age: "እድሜ", sex: "ፆታ", male: "ወንድ", female: "ሴት" }, common: { loading: "በመጫን ላይ...", save: "አስቀምጥ", cancel: "ሰርዝ", download: "አውርድ", close: "ዝጋ" } },
        pcm: { brand: { name: "ScanGuru", tagline: "AI Medical Imaging" }, nav: { try_free: "Try Am Free", signup: "Sign Up Free", login: "Log In" }, form: { name: "Full Name", email: "Email", submit: "Submit", age: "Age", sex: "Sex", male: "Man", female: "Woman" }, common: { loading: "E dey load...", save: "Save", cancel: "Cancel", download: "Download", close: "Close" } },
        ha: { brand: { name: "ScanGuru", tagline: "AI Hoton Likita" }, nav: { try_free: "Gwada Kyauta", signup: "Yi Rajista Kyauta", login: "Shiga" }, form: { name: "Cikakken Suna", email: "Imel", submit: "Aika", age: "Shekaru", sex: "Jinsi", male: "Namiji", female: "Mace" }, common: { loading: "Ana lodawa...", save: "Ajiye", cancel: "Soke", download: "Sauke", close: "Rufe" } },
        yo: { brand: { name: "ScanGuru", tagline: "AI Àwòrán Ìṣègùn" }, nav: { try_free: "Gbiyanju Lọ́fẹ̀ẹ́", signup: "Forúkọsílẹ̀ Lọ́fẹ̀ẹ́", login: "Wọlé" }, form: { name: "Orúkọ Kíkún", email: "Ímeèlì", submit: "Fíránṣẹ́", age: "Ọjọ́ Orí", sex: "Ìbálòpọ̀", male: "Ọkùnrin", female: "Obìnrin" }, common: { loading: "Ń gbé jáde...", save: "Fipamọ́", cancel: "Fagilé", download: "Gbàmúlẹ̀", close: "Tí" } },

        // Caucasian
        ka: { brand: { name: "ScanGuru", tagline: "AI სამედიცინო გამოსახულება" }, nav: { try_free: "სცადეთ უფასოდ", signup: "რეგისტრაცია უფასოდ", login: "შესვლა" }, form: { name: "სრული სახელი", email: "ელ.ფოსტა", submit: "გაგზავნა", age: "ასაკი", sex: "სქესი", male: "მამრობითი", female: "მდედრობითი" }, common: { loading: "იტვირთება...", save: "შენახვა", cancel: "გაუქმება", download: "ჩამოტვირთვა", close: "დახურვა" } },
        hy: { brand: { name: "ScanGuru", tagline: "AI Բdelays Պdelays" }, nav: { try_free: "Փdelays Անdelays", signup: "Գdelays Անdelays", login: "Մdelays" }, form: { name: "Լdelays Delays", email: "Էdelays", submit: " Delays" }, common: { loading: "Բdelays..." } }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // METHODS
    // ═══════════════════════════════════════════════════════════════════════════
    
    init() {
        const savedLang = localStorage.getItem('scanguru-lang') || this.detectLanguage() || 'en';
        this.setLanguage(savedLang);
        this.setupLanguageSwitcher();
        console.log(`✅ ScanGuru i18n v4.0 initialized: ${this.currentLang} (69 languages available)`);
    },
    
    detectLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0];
        if (this.languages[browserLang]) return browserLang;
        if (this.languages[langCode]) return langCode;
        return null;
    },
    
    setLanguage(lang) {
        if (!this.languages[lang]) {
            console.warn(`Language ${lang} not found, falling back to English`);
            lang = 'en';
        }
        
        this.currentLang = lang;
        localStorage.setItem('scanguru-lang', lang);
        
        // Set RTL if needed
        const isRTL = this.rtlLanguages.includes(lang);
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        document.body.classList.toggle('rtl', isRTL);
        
        // Translate all elements
        this.translatePage();
        
        // Update language button
        this.updateLanguageSwitcherButton(lang);
        
        // Dispatch event
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    },
    
    /**
     * Get translation with automatic English fallback
     */
    t(key, defaultValue = '') {
        const keys = key.split('.');
        
        // Try current language first
        let value = this.translations[this.currentLang];
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                value = undefined;
                break;
            }
        }
        
        // Fallback to English if not found
        if (value === undefined) {
            value = this.translations.en;
            for (const k of keys) {
                if (value && typeof value === 'object' && k in value) {
                    value = value[k];
                } else {
                    value = undefined;
                    break;
                }
            }
        }
        
        return value !== undefined ? value : defaultValue || key;
    },
    
    translatePage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);
            if (translation && translation !== key) {
                if (el.tagName === 'INPUT' && el.type === 'placeholder') {
                    el.placeholder = translation;
                } else if (el.hasAttribute('placeholder')) {
                    el.placeholder = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });
        
        // Handle placeholders separately
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = this.t(key);
            if (translation) el.placeholder = translation;
        });
    },
    
    setupLanguageSwitcher() {
        const langBtn = document.getElementById('langBtn');
        const langDropdown = document.getElementById('langDropdown');
        
        if (!langBtn || !langDropdown) return;
        
        this.buildLanguageDropdown(langDropdown);
        
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langBtn.classList.toggle('open');
            langDropdown.classList.toggle('show');
        });
        
        document.addEventListener('click', () => {
            langBtn.classList.remove('open');
            langDropdown.classList.remove('show');
        });
    },
    
    buildLanguageDropdown(container) {
        const regions = {};
        
        Object.entries(this.languages).forEach(([code, info]) => {
            const region = info.region || 'Other';
            if (!regions[region]) regions[region] = [];
            regions[region].push({ code, ...info });
        });
        
        let html = '';
        const regionOrder = ['Europe', 'Americas', 'India', 'SouthAsia', 'SEAsia', 'EAsia', 'MiddleEast', 'CentralAsia', 'Africa', 'Caucasus'];
        const regionNames = {
            'Europe': '🌍 Europe',
            'Americas': '🌎 Americas',
            'India': '🇮🇳 India',
            'SouthAsia': '🌏 South Asia',
            'SEAsia': '🌏 Southeast Asia',
            'EAsia': '🌏 East Asia',
            'MiddleEast': '🌍 Middle East',
            'CentralAsia': '🌍 Central Asia',
            'Africa': '🌍 Africa',
            'Caucasus': '🌍 Caucasus'
        };
        
        regionOrder.forEach(region => {
            if (regions[region] && regions[region].length > 0) {
                html += `<div class="lang-region-header">${regionNames[region] || region}</div>`;
                regions[region].forEach(lang => {
                    const isActive = lang.code === this.currentLang ? 'active' : '';
                    html += `
                        <div class="lang-option ${isActive}" data-lang="${lang.code}">
                            <span class="lang-flag">${lang.flag}</span>
                            <span class="lang-native">${lang.native}</span>
                        </div>
                    `;
                });
            }
        });
        
        container.innerHTML = html;
        
        container.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.dataset.lang;
                this.setLanguage(lang);
                container.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                document.getElementById('langBtn')?.classList.remove('open');
                container.classList.remove('show');
            });
        });
    },
    
    updateLanguageSwitcherButton(lang) {
        const langBtn = document.getElementById('langBtn');
        if (!langBtn) return;
        
        const langInfo = this.languages[lang];
        if (!langInfo) return;
        
        const flagEl = langBtn.querySelector('.lang-flag');
        const codeEl = langBtn.querySelector('.lang-code');
        
        if (flagEl) flagEl.textContent = langInfo.flag;
        if (codeEl) codeEl.textContent = lang.toUpperCase().split('-')[0];
    },
    
    getAvailableLanguages() {
        return Object.entries(this.languages).map(([code, info]) => ({ code, ...info }));
    },
    
    getLanguageCount() {
        return Object.keys(this.languages).length;
    }
};

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ScanGuruI18n.init());
} else {
    ScanGuruI18n.init();
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScanGuruI18n;
}
