# 🚀 FocusFlow – AI-Powered Intelligent Distraction Redirector

**FocusFlow** is a Chrome extension built with Agentic AI to help users stay on task and avoid digital distractions. It monitors browsing behavior, detects when the user strays from focus sites to distracting ones, and gently nudges them back with personalized messages generated using Google’s Gemini API.

🧠 Built in 24 hours during Innovation Hacks under the **Agentic AI Track (Personalized Companions)**.

---

## 🎯 Features

- 🔍 Tracks tab activity in real-time
- 🧠 Uses Gemini LLM to classify sites as **Focus** or **Distraction**
- ⏱ Waits 5 minutes before showing a personalized **motivational nudge**
- ✅ Redirects to previous focus site if user accepts
- 🔁 Offers timed reminders if user chooses to stay on distraction
- 👨‍💻 Modular agent-based architecture for extensibility

---

## 🖼️ Demo

🎥 [**Video**](https://drive.google.com/drive/folders/1mKWrytH3qFUztUmvuu2NRepRBIk1olvo?usp=drive_link)


---

## 🧠 Agent Architecture

| Agent File              | Role |
|-------------------------|------|
| `services/classifier.js`    | Sends site title to Gemini to classify as focus/distraction |
| `services/gemini.js`        | Handles Gemini API requests |
| `services/config.js`        | Stores config values like model & key |
| `dialog.js`                 | Renders popup dialog UI on distraction |
| `background.js`             | Core logic: tracks site switch, triggers nudges |
| `content.js`                | Listens for messages and connects popup with current tab |

---

## 🛠️ Tech Stack

- 💻 **Chrome Extension** (Manifest v3)
- 🌐 JavaScript (ES Modules)
- 🎨 CSS for custom styling
- 🤖 Google Gemini API for AI classification & nudges

---

## 📁 Folder Structure

📦 focusflow-extension ├── services/ │ ├── classifier.js │ ├── gemini.js │ └── config.js ├── background.js ├── content.js ├── dialog.js ├── popup.html ├── popup.js ├── styles.css └── manifest.json



---

## 🔧 Installation & Setup

1. Clone this repo
   ```bash
   git clone https://github.com/your-username/focusflow.git


Open Chrome and navigate to chrome://extensions

Enable Developer mode (top right)

Click Load unpacked and select the cloned folder

Open any focus site (e.g., notion.so, canvas.asu.edu)

Then visit a distraction site (e.g., instagram.com) → wait 5 mins for the nudge!

🔐 Environment Setup
Go to Google AI Studio

Generate your Gemini API key

In config.js, replace:
export const GEMINI_API_KEY = "your-key-here";


⚠️ Limitations
Free Gemini tier allows 50 requests/day

Classification may fall back to neutral if quota is exceeded

Service worker may unload if inactive — long-term timers may need optimization

🛣️ Future Features
Emotion-aware nudges (sentiment + tone)

Focus analytics dashboard

Habit streak tracking

Sound alerts and Pomodoro integration

Offline fallback (local model)

🧑‍💻 Team
Shreyas Hingmire
Nishtha Wagh
Shivani CHauhan

Built during Innovation Hacks 2025 💡

📜 License
MIT License