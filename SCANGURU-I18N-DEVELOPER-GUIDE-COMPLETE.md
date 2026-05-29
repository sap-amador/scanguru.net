# ScanGuru i18n Developer Guide
## Complete Implementation — Marketing + Dashboard
### Version 5.1 | 83 Languages

---

## 📋 TABLE OF CONTENTS

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [File Structure](#file-structure)
4. [Marketing Pages (Webflow)](#marketing-pages-webflow)
5. [Dashboard Pages (Portal)](#dashboard-pages-portal)
6. [Language Switcher Implementation](#language-switcher-implementation)
7. [Translation Key Reference](#translation-key-reference)
8. [RTL Language Support](#rtl-language-support)
9. [JavaScript API](#javascript-api)
10. [Testing & Verification](#testing--verification)
11. [Troubleshooting](#troubleshooting)

---

## OVERVIEW

### What This Covers

| Context | Pages | Platform |
|---------|-------|----------|
| **Marketing** | Homepage, Modalities, Technology, About, Contact, Signup, etc. | Webflow (scanguru.net) |
| **Dashboard** | Login, Dashboard, Patients, Patient Detail | Static HTML (portal) |

### Key Features

- **83 languages** including Hindi, Chinese, Arabic, Spanish, French, etc.
- **RTL support** for Arabic, Persian, Hebrew, Urdu
- **Unified system** — same localStorage key across marketing + dashboard
- **Auto-detection** — browser language → saved preference → English fallback
- **Dynamic dropdown** — auto-generated from language definitions

### CDN URL

```
https://cdn.jsdelivr.net/gh/sap-amador/scanguru.net@main/scanguru-i18n-v5.1-complete.js
```

---

## QUICK START

### Step 1: Add Script to Every Page

Add this to the `<head>` section of every HTML page (marketing and dashboard):

```html
<!-- ScanGuru i18n v5.1 — 83 Languages -->
<script src="https://cdn.jsdelivr.net/gh/sap-amador/scanguru.net@main/scanguru-i18n-v5.1-complete.js"></script>
```

### Step 2: Add Language Switcher HTML

See [Language Switcher Implementation](#language-switcher-implementation) for code.

### Step 3: Add `data-i18n` Attributes

Add `data-i18n="key.path"` to elements that need translation:

```html
<h1 data-i18n="home.title">The Complete Medical Imaging AI Platform</h1>
<button data-i18n="nav.login">Login</button>
```

### Step 4: Test

Open browser console and run:
```javascript
ScanGuruI18n.setLanguage('hi')  // Switch to Hindi
ScanGuruI18n.setLanguage('ar')  // Switch to Arabic (RTL)
ScanGuruI18n.setLanguage('en')  // Back to English
```

---

## FILE STRUCTURE

```
scanguru.net/                          # GitHub repo
├── scanguru-i18n-v5.1-complete.js     # Main i18n file (83 languages)
└── README.md

Marketing Pages (Webflow):
├── index.html                         # Homepage
├── modalities.html                    # Modalities page
├── modalities/cxr.html               # CXR subpage
├── modalities/ct-brain.html          # CT Brain subpage
├── modalities/dental.html            # Dental subpage
├── ... (other modality pages)
├── technology.html                    # Technology page
├── about.html                         # About page
├── contact.html                       # Contact page
├── signup.html                        # Signup/pilot form
├── try-free.html                      # Free demo page
└── privacy.html                       # Privacy policy

Dashboard Pages (Portal):
├── portal-login.html                  # Login page
├── dashboard-main.html                # Main dashboard
├── patients.html                      # Patient list
└── patient-detail.html                # Patient detail view
```

---

## MARKETING PAGES (WEBFLOW)

### Page-by-Page Key Mapping

#### Homepage (index.html)

| Element | `data-i18n` Key |
|---------|-----------------|
| Nav "Platform" | `nav.platform` |
| Nav "Modalities" | `nav.modalities` |
| Nav "Technology" | `nav.technology` |
| Nav "Clinical Evidence" | `nav.clinical_evidence` |
| Nav "About" | `nav.about` |
| Nav "Contact" | `nav.contact` |
| Nav "Try It Free" button | `nav.try_free` |
| Nav "Sign Up Free" button | `nav.apply_pilot` |
| Nav "Login" link | `nav.login` |
| Hero badge | `home.badge` |
| Hero title | `home.title` |
| Hero subtitle | `home.subtitle` |
| Stat "8+" | `home.stat_modalities` |
| Stat "Modalities" label | `home.stat_modalities_label` |
| Stat "400+" | `home.stat_pathologies` |
| Stat "Pathologies" label | `home.stat_pathologies_label` |
| Stat "82" | `home.stat_languages` |
| Stat "Languages" label | `home.stat_languages_label` |
| Stat "85-95%" | `home.stat_accuracy` |
| Stat "Accuracy" label | `home.stat_accuracy_label` |
| CTA "Sign Up Free" | `home.cta_pilot` |
| CTA "Try It Free" | `home.cta_try` |
| Trust bar "HIPAA" | `trust_bar.hipaa` |
| Trust bar "GDPR" | `trust_bar.gdpr` |
| Trust bar "DICOM" | `trust_bar.dicom` |
| Trust bar "HL7/FHIR" | `trust_bar.hl7` |
| Trust bar "Cloud" | `trust_bar.cloud` |
| Bottom CTA badge | `cta.badge` |
| Bottom CTA title | `cta.title` |
| Bottom CTA subtitle | `cta.subtitle` |
| Bottom CTA button | `cta.btn_pilot` |

#### Try Free / Demo Page

| Element | `data-i18n` Key |
|---------|-----------------|
| Form "Full Name" | `form.name` |
| Form "Age" | `form.age` |
| Form "Sex" | `form.sex` |
| Form "Male" option | `form.sex_male` |
| Form "Female" option | `form.sex_female` |
| Form "Upload Image" | `form.upload` |
| Form "Select Modality" | `form.select_modality` |
| Submit button | `form.submit` |
| Result "Critical" | `results.critical` |
| Result "Warnings" | `results.warnings` |
| Result "Normal" | `results.normal` |
| "Download PDF" button | `results.download_pdf` |
| "View Details" link | `results.view_details` |

#### Common Elements (Footer, etc.)

| Element | `data-i18n` Key |
|---------|-----------------|
| Loading spinner text | `common.loading` |
| Save button | `common.save` |
| Cancel button | `common.cancel` |
| Download button | `common.download` |
| Search placeholder | `common.search` |
| Next button | `common.next` |
| Back button | `common.back` |
| Close button | `common.close` |

---

## DASHBOARD PAGES (PORTAL)

### Portal Login (portal-login.html)

#### Brand Panel (Left Side)

| Element | `data-i18n` Key |
|---------|-----------------|
| Headline "Medical Imaging" | `login.brand.headline` |
| Headline "Intelligence" (highlighted) | `login.brand.headline_highlight` |
| Subtitle paragraph | `login.brand.subtitle` |
| Feature "Real-time Monitoring" | `login.brand.feature_monitoring` |
| Feature "AI Analysis Results" | `login.brand.feature_ai` |
| Feature "PACS/RIS Integration" | `login.brand.feature_pacs` |
| Feature "Audit Logs" | `login.brand.feature_audit` |
| Stat "Hospitals Connected" | `login.brand.stat_hospitals` |
| Stat "Studies Analyzed" | `login.brand.stat_studies` |
| Stat "Uptime SLA" | `login.brand.stat_uptime` |

#### Login Form (Right Side)

| Element | `data-i18n` Key |
|---------|-----------------|
| Title "Sign in to Portal" | `login.form.title` |
| Subtitle | `login.form.subtitle` |
| "Email Address" label | `login.form.email_label` |
| Email placeholder | `login.form.email_placeholder` (use `data-i18n` on placeholder) |
| "Password" label | `login.form.password_label` |
| "Remember me" checkbox | `login.form.remember_me` |
| "Forgot password?" link | `login.form.forgot_password` |
| "Sign In" button | `login.form.sign_in` |
| "or continue with" divider | `login.form.or_continue` |
| "Google SSO" button | `login.form.google_sso` |
| "SAML SSO" button | `login.form.saml_sso` |
| Security badge | `login.security.badge` |
| "Don't have an account?" | `login.form.no_account` |
| "Contact Sales" link | `login.form.contact_sales` |
| "Need help?" link | `login.form.need_help` |

#### Error Messages

| Element | `data-i18n` Key |
|---------|-----------------|
| Invalid credentials | `login.errors.invalid_credentials` |
| Server error | `login.errors.server_error` |

---

### Dashboard Main (dashboard-main.html)

#### Sidebar Navigation

| Element | `data-i18n` Key |
|---------|-----------------|
| Section "Overview" | `dashboard.sidebar.overview` |
| "Dashboard" | `dashboard.sidebar.dashboard` |
| "Analytics" | `dashboard.sidebar.analytics` |
| Section "Studies" | `dashboard.sidebar.studies` |
| "All Studies" | `dashboard.sidebar.all_studies` |
| "Recent" | `dashboard.sidebar.recent` |
| "Critical" | `dashboard.sidebar.critical` |
| Section "Patients" | `dashboard.sidebar.patients` |
| "All Patients" | `dashboard.sidebar.all_patients` |
| "Add Patient" | `dashboard.sidebar.add_patient` |
| Section "System" | `dashboard.sidebar.system` |
| "Settings" | `dashboard.sidebar.settings` |
| "Integrations" | `dashboard.sidebar.integrations` |
| "Audit Log" | `dashboard.sidebar.audit_log` |
| "Help & Support" | `dashboard.sidebar.help` |
| "Log Out" | `dashboard.sidebar.logout` |

#### Header

| Element | `data-i18n` Key |
|---------|-----------------|
| Search placeholder | `dashboard.header.search_placeholder` |
| Notifications tooltip | `dashboard.header.notifications` |
| Help tooltip | `dashboard.header.help` |
| Profile tooltip | `dashboard.header.profile` |

#### Stats Cards

| Element | `data-i18n` Key |
|---------|-----------------|
| "Critical Findings" title | `dashboard.stats.critical_findings` |
| "Need immediate attention" | `dashboard.stats.need_immediate` |
| "Pending Review" title | `dashboard.stats.pending_review` |
| "Awaiting radiologist" | `dashboard.stats.awaiting_radiologist` |
| "Analyzed Today" title | `dashboard.stats.analyzed_today` |
| "Studies processed" | `dashboard.stats.studies_processed` |
| "Total Studies" title | `dashboard.stats.total_studies` |
| "All time" | `dashboard.stats.all_time` |

#### Quick Actions

| Element | `data-i18n` Key |
|---------|-----------------|
| "Upload Study" | `dashboard.actions.upload_study` |
| "New Analysis" | `dashboard.actions.new_analysis` |
| "View Reports" | `dashboard.actions.view_reports` |
| "Export Data" | `dashboard.actions.export_data` |

#### Studies Table

| Element | `data-i18n` Key |
|---------|-----------------|
| Column "Patient" | `dashboard.table.patient` |
| Column "Modality" | `dashboard.table.modality` |
| Column "Status" | `dashboard.table.status` |
| Column "AI Analysis" | `dashboard.table.ai_analysis` |
| Column "Time" | `dashboard.table.time` |
| Column "Findings" | `dashboard.table.findings` |
| Column "Confidence" | `dashboard.table.confidence` |
| Column "Actions" | `dashboard.table.actions` |

#### Status Badges

| Element | `data-i18n` Key |
|---------|-----------------|
| "Critical" | `dashboard.status.critical` |
| "Urgent" | `dashboard.status.urgent` |
| "Routine" | `dashboard.status.routine` |
| "Normal" | `dashboard.status.normal` |
| "Pending" | `dashboard.status.pending` |
| "Awaiting Review" | `dashboard.status.awaiting_review` |
| "Reviewed" | `dashboard.status.reviewed` |
| "Completed" | `dashboard.status.completed` |

#### Time Labels (for dynamic content)

| Use Case | `data-i18n` Key |
|----------|-----------------|
| "Just now" | `dashboard.time.just_now` |
| "X min ago" | `dashboard.time.minutes_ago` |
| "Xh ago" | `dashboard.time.hours_ago` |
| "Xd ago" | `dashboard.time.days_ago` |
| "Today" | `dashboard.time.today` |
| "Yesterday" | `dashboard.time.yesterday` |

#### Modality Widget

| Element | `data-i18n` Key |
|---------|-----------------|
| "Modality Breakdown" title | `dashboard.modality_widget.title` |
| "study" (singular) | `dashboard.modality_widget.study` |
| "studies" (plural) | `dashboard.modality_widget.studies` |

#### Empty States

| Element | `data-i18n` Key |
|---------|-----------------|
| "No studies yet" | `dashboard.empty.no_studies` |
| "No patients found" | `dashboard.empty.no_patients` |
| "No results match" | `dashboard.empty.no_results` |
| "No new notifications" | `dashboard.empty.no_notifications` |

#### Pagination

| Element | `data-i18n` Key |
|---------|-----------------|
| "Showing" | `dashboard.pagination.showing` |
| "of" | `dashboard.pagination.of` |
| "results" | `dashboard.pagination.results` |
| "Previous" | `dashboard.pagination.previous` |
| "Next" | `dashboard.pagination.next` |

---

### Patients List (patients.html)

#### Page Header

| Element | `data-i18n` Key |
|---------|-----------------|
| Page title "Patients" | `patient.title` |
| Page subtitle | `patient.subtitle` |
| Search placeholder | `patient.search_placeholder` |
| "Add Patient" button | `dashboard.actions.add_patient` |

#### Mini Stats

| Element | `data-i18n` Key |
|---------|-----------------|
| "Total Patients" | `dashboard.stats.total_patients` |
| "Active Studies" | `dashboard.stats.active_studies` |
| "Critical" | `dashboard.stats.critical_findings` |
| "This Week" | `dashboard.stats.this_week` |

#### Patients Table

| Element | `data-i18n` Key |
|---------|-----------------|
| Column "Patient" | `dashboard.table.patient` |
| Column "MRN" | `dashboard.table.mrn` |
| Column "DOB" | `dashboard.table.dob` |
| Column "Sex" | `dashboard.table.sex` |
| Column "Studies" | `dashboard.table.studies` |
| Column "Last Visit" | `dashboard.table.last_visit` |
| Column "Actions" | `dashboard.table.actions` |

#### Add Patient Modal

| Element | `data-i18n` Key |
|---------|-----------------|
| Modal title "Add New Patient" | `patient.modal.add_title` |
| "First Name" label | `patient.modal.first_name` |
| "Last Name" label | `patient.modal.last_name` |
| "MRN" label | `patient.modal.mrn` |
| MRN placeholder | `patient.modal.mrn_placeholder` |
| "Date of Birth" label | `patient.modal.dob` |
| "Sex" label | `patient.modal.sex` |
| "Male" option | `patient.modal.sex_male` |
| "Female" option | `patient.modal.sex_female` |
| "Other" option | `patient.modal.sex_other` |
| "Email" label | `patient.modal.email` |
| "Phone" label | `patient.modal.phone` |
| "Notes" label | `patient.modal.notes` |
| "Save Patient" button | `patient.modal.save` |
| "Cancel" button | `patient.modal.cancel` |

---

### Patient Detail (patient-detail.html)

#### Header & Navigation

| Element | `data-i18n` Key |
|---------|-----------------|
| "Back" button tooltip | `patient.detail.back` |
| Breadcrumb "Patients" | `dashboard.sidebar.patients` |

#### Tabs

| Element | `data-i18n` Key |
|---------|-----------------|
| "Overview" tab | `patient.detail.overview` |
| "Studies" tab | `patient.detail.studies` |
| "Timeline" tab | `patient.detail.timeline` |

#### Patient Stats

| Element | `data-i18n` Key |
|---------|-----------------|
| "Total Studies" | `patient.detail.total_studies` |
| "Critical" | `patient.detail.critical_findings` |
| "Last Scan" | `patient.detail.last_scan` |

#### Action Buttons

| Element | `data-i18n` Key |
|---------|-----------------|
| "New Study" | `patient.detail.new_study` |
| "Download Report" | `patient.detail.download_report` |

#### Patient Info Labels

| Element | `data-i18n` Key |
|---------|-----------------|
| "Age" | `patient.info.age` |
| "years" | `patient.info.years` |
| "Sex" | `patient.info.sex` |
| "Male" | `patient.info.male` |
| "Female" | `patient.info.female` |
| "MRN" | `patient.info.mrn` |
| "Date of Birth" | `patient.info.dob` |
| "Created" | `patient.info.created` |
| "Last Updated" | `patient.info.last_updated` |

#### Study History Section

| Element | `data-i18n` Key |
|---------|-----------------|
| "Study History" title | `patient.study_history.title` |
| "No studies yet" | `patient.study_history.no_studies` |
| "View All Studies" | `patient.study_history.view_all` |
| "View Details" | `patient.study_history.view_details` |

#### AI Findings Section

| Element | `data-i18n` Key |
|---------|-----------------|
| "AI Findings Summary" title | `patient.findings.title` |
| "No AI findings" | `patient.findings.no_findings` |
| "Primary Finding" | `patient.findings.primary_finding` |
| "Secondary Findings" | `patient.findings.secondary_findings` |
| "Confidence" | `patient.findings.confidence` |
| "Recommendation" | `patient.findings.recommendation` |

---

## LANGUAGE SWITCHER IMPLEMENTATION

### Option A: Marketing Pages (Webflow Navbar)

Add to the navbar, typically in the top-right area:

```html
<!-- Language Switcher for Marketing Pages -->
<div id="langSwitcher" style="position: relative; margin-left: 16px;">
  <button id="langBtn" title="Change language" style="
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
  ">
    <span class="lang-flag" style="font-size: 18px;">🌐</span>
    <span class="lang-code">EN</span>
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
    </svg>
  </button>
  <div id="langDropdown" style="
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 8px;
    background: #1E293B;
    border: 1px solid #334155;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    min-width: 200px;
    max-height: 320px;
    overflow-y: auto;
    display: none;
    z-index: 1000;
  "></div>
</div>

<style>
#langBtn:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); }
#langDropdown.show { display: block !important; }
.lang-region-header { padding: 8px 12px; font-size: 10px; font-weight: 600; color: #64748B; text-transform: uppercase; background: #0F172A; position: sticky; top: 0; }
.lang-option { display: flex; align-items: center; gap: 10px; padding: 10px 12px; cursor: pointer; font-size: 13px; color: #94A3B8; }
.lang-option:hover { background: rgba(20, 184, 166, 0.1); color: #F8FAFC; }
.lang-option.active { background: rgba(20, 184, 166, 0.15); color: #14B8A6; }
</style>
```

### Option B: Dashboard Pages (Header Toolbar)

Add next to notifications/help icons in the dashboard header:

```html
<!-- Language Switcher for Dashboard -->
<div id="langSwitcher" style="position: relative;">
  <button id="langBtn" title="Change language" style="
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 18px;
  ">
    <span class="lang-flag">🌐</span>
  </button>
  <div id="langDropdown" style="
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 8px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.4);
    min-width: 220px;
    max-height: 360px;
    overflow-y: auto;
    display: none;
    z-index: 1000;
  "></div>
</div>

<style>
#langBtn:hover { background: var(--primary-bg); border-color: var(--primary); color: var(--primary); }
#langDropdown.show { display: block !important; }
.lang-region-header { padding: 8px 12px; font-size: 10px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; background: var(--bg-tertiary); position: sticky; top: 0; }
.lang-option { display: flex; align-items: center; gap: 10px; padding: 10px 12px; cursor: pointer; font-size: 13px; color: var(--text-secondary); }
.lang-option:hover { background: var(--primary-bg); color: var(--text-primary); }
.lang-option.active { background: var(--primary-bg); color: var(--primary); }
</style>
```

### Option C: Login Page (Floating Corner)

For the login page, add a floating switcher in the corner:

```html
<!-- Language Switcher for Login Page -->
<div id="langSwitcher" style="position: fixed; top: 20px; right: 20px; z-index: 100;">
  <button id="langBtn" style="
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    background: rgba(30, 41, 59, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(51, 65, 85, 0.5);
    border-radius: 10px;
    color: #94A3B8;
    cursor: pointer;
    font-size: 13px;
  ">
    <span class="lang-flag" style="font-size: 16px;">🌐</span>
    <span class="lang-code">EN</span>
  </button>
  <div id="langDropdown" style="
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 8px;
    background: #1E293B;
    border: 1px solid #334155;
    border-radius: 12px;
    min-width: 200px;
    max-height: 300px;
    overflow-y: auto;
    display: none;
  "></div>
</div>
```

---

## RTL LANGUAGE SUPPORT

### RTL Languages

| Code | Language | Native |
|------|----------|--------|
| `ar` | Arabic | العربية |
| `fa` | Persian | فارسی |
| `he` | Hebrew | עברית |
| `ur` | Urdu | اردو |

### Automatic RTL Handling

The i18n script automatically:
1. Adds `class="rtl"` to `<body>`
2. Sets `dir="rtl"` on `<html>`

### Required CSS for Dashboard RTL

Add this CSS to all dashboard pages:

```css
/* RTL Support */
body.rtl {
  direction: rtl;
}

body.rtl .sidebar {
  left: auto;
  right: 0;
  border-right: none;
  border-left: 1px solid var(--border);
}

body.rtl .main-content {
  margin-left: 0;
  margin-right: var(--sidebar-width);
}

body.rtl .nav-item i {
  margin-right: 0;
  margin-left: 12px;
}

body.rtl .header-actions {
  margin-left: 0;
  margin-right: auto;
}

body.rtl .breadcrumb {
  direction: rtl;
}

body.rtl .patient-meta {
  flex-direction: row-reverse;
}

body.rtl .btn i:first-child {
  margin-right: 0;
  margin-left: 8px;
}

body.rtl .modal {
  text-align: right;
}

body.rtl .form-label {
  text-align: right;
}

body.rtl .patients-table {
  direction: rtl;
}

body.rtl .patients-table th,
body.rtl .patients-table td {
  text-align: right;
}
```

### Required CSS for Marketing RTL

Add this to Webflow custom CSS:

```css
body.rtl {
  direction: rtl;
}

body.rtl .navbar {
  flex-direction: row-reverse;
}

body.rtl .nav-links {
  flex-direction: row-reverse;
}

body.rtl .hero-content {
  text-align: right;
}

body.rtl .feature-grid {
  direction: rtl;
}

body.rtl .stat-item {
  text-align: right;
}
```

---

## JAVASCRIPT API

### Core Methods

```javascript
// Get current language
ScanGuruI18n.currentLang  // → "en"

// Set language (auto-updates page)
ScanGuruI18n.setLanguage('hi')  // → "hi"

// Translate a key
ScanGuruI18n.t('dashboard.sidebar.patients')  // → "Patients" or translated

// Get language count
ScanGuruI18n.getLanguageCount()  // → 83

// Get language info
ScanGuruI18n.languages['hi']  // → { name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳', ... }

// Manually update translations on page
ScanGuruI18n.updatePageTranslations()

// Rebuild dropdown
ScanGuruI18n.buildDropdown()

// Detect language (browser/saved preference)
ScanGuruI18n.detectLanguage()  // → "en" or detected language
```

### Event Listener

Listen for language changes to update dynamic content:

```javascript
document.addEventListener('languageChanged', (e) => {
    console.log('Language changed to:', e.detail.lang);
    
    // Re-render dynamic content
    renderStudyTable();
    renderNotifications();
    updateStatusBadges();
});
```

### Translating Dynamic Content

For JavaScript-generated content, use the `t()` function:

```javascript
// Example: Building a study row
function buildStudyRow(study) {
    const statusLabel = ScanGuruI18n.t(`dashboard.status.${study.status}`);
    const timeLabel = formatTimeAgo(study.timestamp);
    
    return `
        <tr>
            <td>${study.patient.name}</td>
            <td>${study.modality}</td>
            <td><span class="status-badge">${statusLabel}</span></td>
            <td>${timeLabel}</td>
        </tr>
    `;
}

// Example: Format time ago with translations
function formatTimeAgo(timestamp) {
    const mins = Math.floor((Date.now() - timestamp) / 60000);
    
    if (mins < 1) {
        return ScanGuruI18n.t('dashboard.time.just_now');
    }
    if (mins < 60) {
        return ScanGuruI18n.t('dashboard.time.minutes_ago').replace('{n}', mins);
    }
    
    const hours = Math.floor(mins / 60);
    if (hours < 24) {
        return ScanGuruI18n.t('dashboard.time.hours_ago').replace('{n}', hours);
    }
    
    const days = Math.floor(hours / 24);
    return ScanGuruI18n.t('dashboard.time.days_ago').replace('{n}', days);
}
```

---

## TESTING & VERIFICATION

### Browser Console Commands

```javascript
// Check version
ScanGuruI18n.version  // → "5.1.0"

// Check language count
ScanGuruI18n.getLanguageCount()  // → 83

// Test Hindi
ScanGuruI18n.setLanguage('hi')

// Test Arabic (RTL)
ScanGuruI18n.setLanguage('ar')

// Test Chinese
ScanGuruI18n.setLanguage('zh')

// Check if RTL is applied
document.body.classList.contains('rtl')  // → true for ar/fa/he/ur

// Get current language
ScanGuruI18n.currentLang

// Translate specific key
ScanGuruI18n.t('dashboard.stats.critical_findings')

// Check localStorage
localStorage.getItem('scanguru_lang')

// Reset to English
ScanGuruI18n.setLanguage('en')
```

### Testing Checklist

#### Marketing Pages
- [ ] Language switcher appears in navbar
- [ ] Dropdown shows all 83 languages grouped by region
- [ ] Clicking a language updates all `data-i18n` elements
- [ ] Language persists after page refresh
- [ ] RTL languages flip layout correctly
- [ ] Navigation links still work after language change

#### Dashboard Pages
- [ ] Language switcher appears in header toolbar
- [ ] Sidebar navigation translates
- [ ] Stats cards translate
- [ ] Table headers translate
- [ ] Status badges translate
- [ ] Modals translate (Add Patient, etc.)
- [ ] RTL flips sidebar to right side
- [ ] RTL flips main content area
- [ ] Tables read right-to-left in RTL

#### Login Page
- [ ] Language switcher visible in corner
- [ ] Brand panel content translates
- [ ] Form labels translate
- [ ] Button text translates
- [ ] Error messages translate
- [ ] RTL flips layout

#### Cross-Page Persistence
- [ ] Set language on marketing site → Dashboard shows same language
- [ ] Set language in dashboard → Marketing site shows same language
- [ ] Language persists across browser sessions

---

## TROUBLESHOOTING

### Script Not Loading

**Symptom:** `ScanGuruI18n is not defined`

**Solution:**
1. Check script URL is correct
2. Ensure script is in `<head>` before other scripts
3. Check browser console for 404 errors
4. Try clearing CDN cache: add `?v=2` to URL

### Translations Not Updating

**Symptom:** Text stays in English after language change

**Solution:**
1. Verify `data-i18n` attribute is correct
2. Check key exists: `ScanGuruI18n.t('your.key')`
3. Ensure no typos in key path
4. Call `ScanGuruI18n.updatePageTranslations()` manually

### RTL Not Working

**Symptom:** Arabic/Hebrew shows LTR

**Solution:**
1. Verify CSS is loaded
2. Check `body.classList.contains('rtl')`
3. Check `document.documentElement.dir`
4. Add missing RTL CSS rules

### Dropdown Not Appearing

**Symptom:** Click language button, nothing happens

**Solution:**
1. Ensure `#langDropdown` element exists
2. Check CSS `display: none` is being toggled to `block`
3. Verify click handler is attached
4. Check z-index conflicts

### Language Not Persisting

**Symptom:** Language resets on page refresh

**Solution:**
1. Check localStorage is enabled
2. Verify: `localStorage.getItem('scanguru_lang')`
3. Check for localStorage errors in console
4. Ensure `detectLanguage()` is called on init

---

## APPENDIX: Complete Language List

| Code | Language | Native | Region | RTL |
|------|----------|--------|--------|-----|
| en | English | English | Americas | |
| zh | Chinese (Simplified) | 简体中文 | Asia | |
| zh-TW | Chinese (Traditional) | 繁體中文 | Asia | |
| hi | Hindi | हिन्दी | Asia | |
| es | Spanish | Español | Europe | |
| ar | Arabic | العربية | MENA | ✓ |
| fr | French | Français | Europe | |
| bn | Bengali | বাংলা | Asia | |
| pt | Portuguese | Português | Europe | |
| pt-BR | Portuguese (Brazil) | Português (Brasil) | Americas | |
| ru | Russian | Русский | Europe | |
| ja | Japanese | 日本語 | Asia | |
| de | German | Deutsch | Europe | |
| ko | Korean | 한국어 | Asia | |
| vi | Vietnamese | Tiếng Việt | Asia | |
| tr | Turkish | Türkçe | Europe | |
| it | Italian | Italiano | Europe | |
| th | Thai | ไทย | Asia | |
| id | Indonesian | Bahasa Indonesia | Asia | |
| pl | Polish | Polski | Europe | |
| uk | Ukrainian | Українська | Europe | |
| nl | Dutch | Nederlands | Europe | |
| fa | Persian | فارسی | MENA | ✓ |
| he | Hebrew | עברית | MENA | ✓ |
| ur | Urdu | اردو | Asia | ✓ |
| ... | (58 more) | ... | ... | |

**Total: 83 languages**

---

## VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 5.0.0 | May 2026 | Initial 82-language marketing i18n |
| 5.1.0 | May 2026 | Added dashboard translations (login, dashboard, patients, patient-detail) |

---

*Document Version: 5.1.0*  
*Last Updated: May 2026*
