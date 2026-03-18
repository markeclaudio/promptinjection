const translations = {
  en: {
    header_client: "100% Client-side",
    hero_title: "Inject prompts into PDFs.",
    hero_subtitle: "Add instructions, descriptions, or hidden prompts to your PDF metadata in seconds.",
    feature_1: "No files are uploaded to the server. Everything happens in your browser.",
    feature_2: "Modify the \"Subject\" field of the PDF.",
    feature_3: "Invisible text injection (opacity 0) on the first page.",
    feature_4: "Ideal for security testing, watermarking, or AI cataloging.",
    note_title: "Note:",
    note_text: "We don't need your files! To protect your privacy, this tool is designed to work only on your computer. Nothing is ever sent over the internet",
    tab_inject: "Inject",
    tab_verify: "Verify",
    step_1: "1. Upload PDF",
    drop_title: "Click or drag here",
    drop_subtitle: "Only PDF files (max 50MB)",
    step_2_inject: "2. Enter Prompt",
    prompt_placeholder: "Enter text to inject into PDF description...",
    btn_inject: "Inject & Download",
    btn_verify: "Scan PDF",
    scan_results: "Scan Results",
    success_msg: "PDF processed successfully!",
    footer_text: "© 2026 promptinjection.app • No data leaves your browser.",
    error_invalid_pdf: "Please select a valid PDF file.",
    error_processing: "Error processing PDF. The file might be protected or corrupted.",
    processing: "Processing...",
    scanning: "Scanning...",
    verify_res_subject: "Subject:",
    verify_res_keywords: "Keywords:",
    verify_res_title: "Title:",
    verify_res_suspicious: "⚠️ Suspiciously long metadata found!",
    verify_res_ok: "✅ Metadata length seems normal.",
    verify_res_opacity: "⚠️ Found text with 0 opacity or invisible rendering!",
    verify_res_opacity_ok: "✅ No invisible text detected."
  },
  it: {
    header_client: "100% Lato Client",
    hero_title: "Inietta prompt nei PDF.",
    hero_subtitle: "Aggiungi istruzioni, descrizioni o prompt nascosti ai metadati del tuo PDF in pochi secondi.",
    feature_1: "Nessun file viene caricato sul server. Tutto avviene nel tuo browser.",
    feature_2: "Modifica il campo \"Oggetto\" del PDF.",
    feature_3: "Iniezione di testo invisibile (opacità 0) sulla prima pagina.",
    feature_4: "Ideale per test di sicurezza, watermarking o catalogazione AI.",
    note_title: "Nota:",
    note_text: "I tuoi file non ci servono! Per proteggere la tua privacy, abbiamo progettato questo strumento affinché funzioni solo sul tuo computer. Niente viene inviato via internet.",
    tab_inject: "Inietta",
    tab_verify: "Verifica",
    step_1: "1. Carica PDF",
    drop_title: "Clicca o trascina qui",
    drop_subtitle: "Solo file PDF (max 50MB)",
    step_2_inject: "2. Inserisci Prompt",
    prompt_placeholder: "Inserisci il testo da iniettare nella descrizione del PDF...",
    btn_inject: "Inietta e Scarica",
    btn_verify: "Scansiona PDF",
    scan_results: "Risultati Scansione",
    success_msg: "PDF elaborato con successo!",
    footer_text: "© 2026 promptinjection.app • Nessun dato lascia il tuo browser.",
    error_invalid_pdf: "Per favore seleziona un file PDF valido.",
    error_processing: "Errore durante l'elaborazione del PDF. Il file potrebbe essere protetto o corrotto.",
    processing: "Elaborazione...",
    scanning: "Scansione...",
    verify_res_subject: "Oggetto:",
    verify_res_keywords: "Parole Chiave:",
    verify_res_title: "Titolo:",
    verify_res_suspicious: "⚠️ Trovati metadati sospettosamente lunghi!",
    verify_res_ok: "✅ La lunghezza dei metadati sembra normale.",
    verify_res_opacity: "⚠️ Trovato testo con opacità 0 o rendering invisibile!",
    verify_res_opacity_ok: "✅ Nessun testo invisibile rilevato."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // --- i18n Setup ---
  const savedLang = localStorage.getItem('app_lang');
  const userLang = navigator.language || navigator.userLanguage;
  let lang = savedLang || (userLang.startsWith('it') ? 'it' : 'en');
  
  function t(key) {
    return translations[lang][key] || translations['en'][key] || key;
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });
    updateFlagUI();
  }

  function updateFlagUI() {
    const btnEn = document.getElementById('langEn');
    const btnIt = document.getElementById('langIt');
    if (!btnEn || !btnIt) return;
    
    if (lang === 'it') {
      btnIt.classList.remove('opacity-50');
      btnIt.classList.add('opacity-100', 'ring-2', 'ring-black/20');
      btnEn.classList.add('opacity-50');
      btnEn.classList.remove('opacity-100', 'ring-2', 'ring-black/20');
    } else {
      btnEn.classList.remove('opacity-50');
      btnEn.classList.add('opacity-100', 'ring-2', 'ring-black/20');
      btnIt.classList.add('opacity-50');
      btnIt.classList.remove('opacity-100', 'ring-2', 'ring-black/20');
    }
  }

  function setLanguage(newLang) {
    lang = newLang;
    localStorage.setItem('app_lang', lang);
    applyTranslations();
    hideMessages();
    const verifyResults = document.getElementById('verifyResults');
    if (verifyResults) verifyResults.classList.add('hidden');
  }

  applyTranslations();

  // --- DOM Elements ---
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');
  const fileInfo = document.getElementById('fileInfo');
  const fileNameDisplay = document.getElementById('fileName');
  const fileSizeDisplay = document.getElementById('fileSize');
  const clearFileBtn = document.getElementById('clearFileBtn');
  const promptInput = document.getElementById('promptInput');
  const actionBtn = document.getElementById('actionBtn');
  const btnText = document.getElementById('btnText');
  const btnIcon = document.getElementById('btnIcon');
  const btnSpinner = document.getElementById('btnSpinner');
  const errorMsg = document.getElementById('errorMsg');
  const successMsg = document.getElementById('successMsg');
  
  // Tabs
  const tabInject = document.getElementById('tabInject');
  const tabVerify = document.getElementById('tabVerify');
  const injectContent = document.getElementById('injectContent');
  const verifyContent = document.getElementById('verifyContent');
  
  // Verify Elements
  const verifyBtn = document.getElementById('verifyBtn');
  const verifyBtnText = document.getElementById('verifyBtnText');
  const verifyIcon = document.getElementById('verifyIcon');
  const verifySpinner = document.getElementById('verifySpinner');
  const verifyResults = document.getElementById('verifyResults');
  const resultsList = document.getElementById('resultsList');

  let currentFile = null;
  let currentMode = 'inject';

  // --- Event Listeners ---
  const langEnBtn = document.getElementById('langEn');
  const langItBtn = document.getElementById('langIt');
  if (langEnBtn) langEnBtn.addEventListener('click', () => setLanguage('en'));
  if (langItBtn) langItBtn.addEventListener('click', () => setLanguage('it'));

  tabInject.addEventListener('click', () => switchTab('inject'));
  tabVerify.addEventListener('click', () => switchTab('verify'));

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('border-black/20', 'bg-black/[0.02]');
  });
  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('border-black/20', 'bg-black/[0.02]');
  });
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('border-black/20', 'bg-black/[0.02]');
    if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
  });
  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length) handleFile(e.target.files[0]);
  });
  clearFileBtn.addEventListener('click', () => {
    currentFile = null;
    fileInput.value = '';
    verifyResults.classList.add('hidden');
    updateUI();
  });
  promptInput.addEventListener('input', updateUI);
  actionBtn.addEventListener('click', injectPrompt);
  verifyBtn.addEventListener('click', verifyPdf);

  // --- Functions ---
  function switchTab(mode) {
    currentMode = mode;
    hideMessages();
    if (mode === 'inject') {
      tabInject.classList.replace('tab-inactive', 'tab-active');
      tabVerify.classList.replace('tab-active', 'tab-inactive');
      injectContent.classList.remove('hidden');
      verifyContent.classList.add('hidden');
    } else {
      tabVerify.classList.replace('tab-inactive', 'tab-active');
      tabInject.classList.replace('tab-active', 'tab-inactive');
      verifyContent.classList.remove('hidden');
      injectContent.classList.add('hidden');
    }
    updateUI();
  }

  function handleFile(file) {
    hideMessages();
    verifyResults.classList.add('hidden');
    if (file.type === 'application/pdf') {
      currentFile = file;
      updateUI();
    } else {
      showError(t('error_invalid_pdf'));
    }
  }

  function updateUI() {
    if (currentFile) {
      dropZone.classList.add('hidden');
      fileInfo.classList.remove('hidden');
      fileInfo.classList.add('flex');
      fileNameDisplay.textContent = currentFile.name;
      fileSizeDisplay.textContent = (currentFile.size / 1024 / 1024).toFixed(2) + ' MB';
    } else {
      dropZone.classList.remove('hidden');
      fileInfo.classList.add('hidden');
      fileInfo.classList.remove('flex');
    }

    if (currentMode === 'inject') {
      const prompt = promptInput.value.trim();
      if (currentFile && prompt) {
        actionBtn.disabled = false;
        actionBtn.classList.remove('bg-black/5', 'text-black/20', 'cursor-not-allowed');
        actionBtn.classList.add('bg-black', 'text-white', 'hover:bg-black/90', 'shadow-lg', 'shadow-black/10');
      } else {
        actionBtn.disabled = true;
        actionBtn.classList.add('bg-black/5', 'text-black/20', 'cursor-not-allowed');
        actionBtn.classList.remove('bg-black', 'text-white', 'hover:bg-black/90', 'shadow-lg', 'shadow-black/10');
      }
    } else if (currentMode === 'verify') {
      if (currentFile) {
        verifyBtn.disabled = false;
        verifyBtn.classList.remove('bg-black/5', 'text-black/20', 'cursor-not-allowed');
        verifyBtn.classList.add('bg-black', 'text-white', 'hover:bg-black/90', 'shadow-lg', 'shadow-black/10');
      } else {
        verifyBtn.disabled = true;
        verifyBtn.classList.add('bg-black/5', 'text-black/20', 'cursor-not-allowed');
        verifyBtn.classList.remove('bg-black', 'text-white', 'hover:bg-black/90', 'shadow-lg', 'shadow-black/10');
      }
    }
  }

  function showError(msg) {
    errorMsg.querySelector('span').textContent = msg;
    errorMsg.classList.remove('hidden');
    errorMsg.classList.add('flex');
    successMsg.classList.add('hidden');
    successMsg.classList.remove('flex');
  }

  function showSuccess(msgKey = 'success_msg') {
    successMsg.querySelector('span').textContent = t(msgKey);
    successMsg.classList.remove('hidden');
    successMsg.classList.add('flex');
    errorMsg.classList.add('hidden');
    errorMsg.classList.remove('flex');
  }

  function hideMessages() {
    errorMsg.classList.add('hidden');
    errorMsg.classList.remove('flex');
    successMsg.classList.add('hidden');
    successMsg.classList.remove('flex');
  }

  function addResultItem(text, className = 'text-black/70') {
    const li = document.createElement('li');
    li.textContent = text;
    li.className = className;
    resultsList.appendChild(li);
  }

  function addMetadataItem(label, content) {
    const li = document.createElement('li');
    li.className = 'flex flex-col gap-1 mb-4';
    
    const header = document.createElement('div');
    header.className = 'font-bold text-xs uppercase tracking-widest text-black/40';
    header.textContent = `${label} (${content.length} chars)`;
    
    const body = document.createElement('div');
    body.className = 'bg-white p-3 rounded-xl border border-black/5 text-xs font-mono break-all max-h-32 overflow-y-auto text-black/80 shadow-sm';
    body.textContent = content || '—';
    
    li.appendChild(header);
    li.appendChild(body);
    resultsList.appendChild(li);
  }

  // --- Core Logic ---
  async function injectPrompt() {
    const prompt = promptInput.value.trim();
    if (!currentFile || !prompt) return;

    actionBtn.disabled = true;
    btnText.textContent = t('processing');
    btnIcon.classList.add('hidden');
    btnSpinner.classList.remove('hidden');
    hideMessages();

    try {
      const arrayBuffer = await currentFile.arrayBuffer();
      const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);

      pdfDoc.setSubject(prompt);
      pdfDoc.setKeywords([prompt, 'injected-prompt', 'hidden-data']);
      pdfDoc.setTitle(prompt);

      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      if (firstPage) {
        firstPage.drawText(prompt, {
          x: 10,
          y: 10,
          size: 2,
          opacity: 0,
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      const nameWithoutExt = currentFile.name.replace(/\.pdf$/i, '');
      link.download = `${nameWithoutExt}_inj.pdf`;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      showSuccess();
    } catch (err) {
      console.error(err);
      showError(t('error_processing'));
    } finally {
      updateUI();
      btnText.textContent = t('btn_inject');
      btnIcon.classList.remove('hidden');
      btnSpinner.classList.add('hidden');
    }
  }

  async function verifyPdf() {
    if (!currentFile) return;

    verifyBtn.disabled = true;
    verifyBtnText.textContent = t('scanning');
    verifyIcon.classList.add('hidden');
    verifySpinner.classList.remove('hidden');
    hideMessages();
    verifyResults.classList.add('hidden');
    resultsList.innerHTML = '';

    try {
      const arrayBuffer = await currentFile.arrayBuffer();
      const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);

      const subject = pdfDoc.getSubject() || '';
      const keywords = pdfDoc.getKeywords() || '';
      const title = pdfDoc.getTitle() || '';

      let suspiciousMetadata = false;
      if (subject.length > 200 || keywords.length > 200 || title.length > 200) {
        suspiciousMetadata = true;
      }

      addMetadataItem(t('verify_res_subject'), subject);
      addMetadataItem(t('verify_res_keywords'), keywords);
      addMetadataItem(t('verify_res_title'), title);

      if (suspiciousMetadata) {
        addResultItem(t('verify_res_suspicious'), 'text-red-500 font-bold mt-2');
      } else {
        addResultItem(t('verify_res_ok'), 'text-emerald-600 font-bold mt-2');
      }

      // Check for invisible text patterns in raw bytes
      const textContent = new TextDecoder('utf-8', { fatal: false }).decode(arrayBuffer);
      
      // /ca 0 or /ca 0.0 sets fill opacity to 0
      // 3 Tr sets text rendering mode to invisible
      const hasInvisibleText = textContent.includes('/ca 0') || 
                               textContent.includes('/ca 0.0') || 
                               textContent.includes('3 Tr');

      if (hasInvisibleText) {
        addResultItem(t('verify_res_opacity'), 'text-red-500 font-bold mt-2');
      } else {
        addResultItem(t('verify_res_opacity_ok'), 'text-emerald-600 font-bold mt-2');
      }

      verifyResults.classList.remove('hidden');
    } catch (err) {
      console.error(err);
      showError(t('error_processing'));
    } finally {
      updateUI();
      verifyBtnText.textContent = t('btn_verify');
      verifyIcon.classList.remove('hidden');
      verifySpinner.classList.add('hidden');
    }
  }
});
