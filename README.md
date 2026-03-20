# 📄 PDF Prompt Injector

**Inject prompts into PDFs in seconds.** A lightweight, secure tool to add instructions, descriptions, or hidden prompts to your PDF metadata and content to test your AI application.
 [https://promptinjection.app](https://promptinjection.app)

---

## ✨ Key Features

* **🔒 100% Client-Side:** No files are ever uploaded to a server. All processing happens locally in your browser.
* **Metadata Manipulation:** Automatically modifies the **"Subject"** field of the PDF.
* **🫥 Invisible Text Injection:** Adds a hidden text layer (opacity 0) on the first page, making it "invisible" to humans but readable by machines and AI scrapers.
* **🚀 Instant & Lightweight:** No heavy dependencies; modify your documents in real-time.

---

## 🛠️ How it Works

The tool utilizes two primary methods to ensure your prompts are detected by AI systems:

1.  **Subject Metadata:** The prompt is inserted into the PDF's "Subject" field. Many PDF readers and AI indexing systems prioritize this field as the document's main description.
2.  **Hidden Text Layer:** By injecting text with **0% opacity** on the first page, the prompt becomes part of the document's selectable text. This is ideal for targeting LLMs (Large Language Models) that "read" the text content without affecting the visual design.

---

## 🎯 Ideal For

* **Security Testing:** Researching *Prompt Injection* vulnerabilities in document-based AI workflows.
* **AI Cataloging:** Providing specific context or instructions to AI agents during document analysis.
* **Hidden Watermarking:** Adding non-visual metadata or descriptions for internal tracking.

---

## 🚀 Quick Start

1.  **Open** the application in your browser.
2.  **Upload** your PDF (remember: it stays on your machine!).
3.  **Enter** your desired prompt or instruction.
4.  **Download** the modified version instantly.

---

> [!WARNING]
> ## ⚠️ Legal Disclaimer
>
> **This tool is provided for educational and ethical security testing purposes only.**
>
> The primary goal of `promptinjection.app` is to assist developers, security researchers, and red teamers in identifying, understanding, and mitigating prompt injection vulnerabilities in LLM-based applications. 
>
> 1. **Authorized Testing Only:** You must only use this software on systems you own or for which you have explicit, written permission to conduct security testing. Using this tool against third-party services (e.g., OpenAI, Anthropic, Google) or any Company without authorization may violate their **Terms of Service** and could lead to account suspension or legal action.
> 2. **No Liability:** The author(s) of this project shall not be held responsible for any misuse of this software, nor for any direct or indirect damage, data loss, or legal consequences resulting from its use. 
> 3. **"As Is" Basis:** This software is provided "as is" without warranty of any kind, express or implied. The user assumes all risks associated with its execution.
>
> **By downloading, installing, or using this software, you acknowledge that you have read this disclaimer and agree to act in compliance with all applicable local and international laws.**

---

## ⚖️ License

Distributed under the **MIT License**. 

**Note on Attribution:** You are free to use, modify, and distribute this software, provided that the original copyright notice and this permission notice are included in all copies or substantial portions of the software.

Copyright (c) 2026 [markeclaudio]