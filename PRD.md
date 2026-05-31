# Product Requirement Document (PRD)

## Project Code Name: Omniverse QR (Phase 1 MVP)

**Author:** AI/ML & Full Stack Engineering Lead

**Target:** AI Code Assistant Deployment (Cursor/Lovable/v0/Bolt)

**Document Version:** 1.0.0

---

## 1. Executive Summary & Core Objective

Omniverse QR is a tech-driven AI Product-as-a-Service designed for small-to-medium businesses (SMBs) and manufacturers with highly fragmented or completely offline digital presence.

The core objective of Phase 1 is to build an interactive, high-fidelity web MVP that simulates the end-to-end user loop: from a business owner uploading raw organizational identity documents to generating a unified customer-facing storefront and AI agent hub accessible via a single QR code.

---

## 2. Target Persona & User Journeys

### Persona A: The Business Owner (e.g., Local Textile Manufacturer/Cafe Owner)

* **Problem:** Has catalog PDFs, a WhatsApp Business account, Google Maps pictures, and print materials, but no structured website or technical literacy to build one.
* **Journey:** Logs in ➔ Uploads raw assets ➔ Instantly prints a generated QR code ➔ Monitors customer analytics and leaves with content ideas.

### Persona B: The End Customer

* **Problem:** Scans a physical QR at a store/showroom; wants immediate information without downloading an app or scrolling endless static pages.
* **Journey:** Scans QR ➔ Enters an interactive storefront ➔ Chats with a natural-language AI bot to find specific products, leave reviews, or click out to WhatsApp.

---

## 3. Scope of the MVP (System Architecture Overview)

```
[Owner Dashboard / Ingestion UI] ----> [Simulated Core Processing Engine]
                                                |
                                                v
[Customer-Facing Storefront UI] <---- [Dynamic QR Code Generation]

```

To enable fast iteration by AI generation tools, **Phase 1 UI will simulate data ingestion and RAG capabilities with static mocking scripts, while enforcing rigorous frontend-side schema validation.**

---

## 4. Detailed Feature Specifications & UI Wireframe Flows

### Screen 1: Business Owner Onboarding & Multi-Modal Ingestion Desk

* **UI Components:**
* A clean, multi-step stepper layout or a centralized side-panel dashboard.
* **Drag-and-Drop Ingestion Hub:** File drop zones specifically labeled for `.pdf`, `.mp3/.wav`, `.mp4` (video walkthroughs), and text fields for social handles (`Instagram/Storefront links`).
* **Ingestion Status Grid:** A card grid layout showing files being parsed with a simulated progress loader, switching to green status chips (`"OCR Extracted"`, `"Audio Transcribed"`, `"Vectors Vectorized"`).
* **Generation Trigger:** A prominent CTA button labeled `"Generate Omni-Storefront & RAG Model"`.



### Screen 2: Owner Control Center (The Analytics & Retention Dashboard)

* **UI Components:**
* **The QR Master Card:** Displays the generated QR Code with dynamic download configurations (`PNG/SVG` options and customized frames).
* **Analytics Grid:** Micro-charts tracking:
* Total Scans (Timeseries line graph).
* Top User Intent Queries (e.g., *"Red floral print fabrics"* — 45 queries).
* Feedback Sentiment (Positive/Neutral/Negative split donut chart).


* **AI Weekly Content Engine:** A specialized component displaying three tailored marketing post hooks/carousels generated *specifically* from the business data uploaded in Screen 1.
* **Integration Toggle Grid:** Simple, high-fidelity toggle switches for activating downstream hooks (`WhatsApp Business Hook`, `Slack Real-time Alerts`, `Discord Webhook`).
* **Embed Code Snippet Wrapper:** A clean code snippet component (`<iframe>` copyable markdown) allowing developers to inject the whole module into an existing WordPress site.



### Screen 3: The Customer-Facing Omni-Storefront (Mobile-Responsive Absolute Priority)

* **UI Components:**
* **Header Module:** Dynamic profile image, business name, and quick brand context tags derived from ingestion.
* **Tabbed View System:**
* **Tab 1: Storefront View:** A card matrix detailing catalog items, service prices, or menu options with structured image overlays and direct pricing labels.
* **Tab 2: Chat with AI Assistant:** An end-to-end messaging stream interface containing:
* Quick-action chip prompts (e.g., *"What are your holiday timings?"*, *"Show me luxury collections"*).
* Streaming text components natively displaying bilingual responses (English/Hindi script toggle).
* **Fallback Escalation Banner:** A conditional alert ribbon that pops up if a mock query drops beneath confidence parameters: *"Want to speak to a human? Click here to redirect to WhatsApp Chat."*


* **Tab 3: Interactive Feedback Loop:** A unified rating widget (1-5 stars) linked to a structural form area for capturing text critiques.





---

## 5. Technical Requirements & Validation Rules (For AI Prompter Execution)

* **Design Paradigm:** Modern minimalist clean aesthetics. Incorporate standard deep charcoal/white layouts with clear highlight primary colors for call-to-actions.
* **Responsiveness Constraints:** Screen 1 & Screen 2 must scale fluidly across desktop/tablet orientations. Screen 3 **must be optimized as a mobile-first view layout** replicating Safari/Chrome mobile viewport dimensions perfectly.
* **State Machine Configurations (Frontend):**
* When file uploads are completed, toggle the global application state to unlock the Screen 2 Dashboard.
* Simulate multi-modal inputs by altering text/items displayed in Screen 3 dynamically based on the preset business type selected by the user (e.g., switching from *Cafe* presets to *Textile Factory* presets).



---

## 6. Prompting Blueprint for Immediate Generation

*Copy and paste the segment below directly into your AI coding agent of choice to generate the interface:*

```text
Act as a Principal Frontend Engineer and UI Designer. Build a clean, modular React component architecture (or single-page deployment structure) for the "Omniverse QR" platform MVP based on the attached PRD specifications. 

Requirements:
1. Implement Screen 1 (Multi-Modal Upload Portal with fake extraction animation states).
2. Implement Screen 2 (Owner Analytics with dynamic code-copy options, mock charts, and webhook toggles).
3. Implement Screen 3 (Mobile-first responsive viewport showcasing the dual Storefront Catalog layout alongside an AI chat stream that responds with context-aware Hindi/English answers).
4. Use Tailwind CSS for formatting. Ensure strict component isolation so state transfers correctly when a user triggers "Generate Storefront". Maintain interactive mock actions for every click target.

```