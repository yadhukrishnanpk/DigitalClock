# 🕰️ Modern Digital Clock with Dark Mode

A sleek, responsive digital clock web application featuring a real-time 12-hour display and a smooth dark mode transition. Built using semantic HTML5, CSS3 (Flexbox), and Vanilla JavaScript.

## 🚀 Features

_**Real-Time Updates**_: Displays hours, minutes, and seconds, updating every 1000ms.

_**12-Hour Format**_: Automatically calculates AM/PM and converts 24-hour time.

_**Dark Mode Toggle**_: A seamless transition between light and dark themes using a CSS class toggle.

_**Responsive Design**_: Centered layout that works across various screen sizes.

_**Modern Typography**_: Utilizes the "Orbitron" Google Font for a high-tech digital aesthetic.

## 🛠️ Tech Stack

_**HTML5**_: Structure and semantic layout.

_**CSS3**_: Custom styling, Flexbox for alignment, and smooth transitions.

_**JavaScript (ES6)**_: DOM manipulation, Date object handling, and interval timing.

_**FontAwesome**_: Icons for the light/dark mode toggle.

_**Google Fonts**_: Specialized "Orbitron" typeface.


## 📂 Project Structure

### Plaintext

├── **index.html**  ➡ _Main structure of the clock_

├── **clock.css**   ➡ _All styling, including Dark Mode variables_

└── **clock.js**    ➡ _Time logic and theme switching functionality_ 


## 🧠 Technical Highlights 

This project focuses on clean, reusable logic within clock.js. Below are the key functional highlights:

## 🎨 Asset Integration & Styling
To ensure a high-quality "Digital" aesthetic and robust performance, this project integrates external assets via industry-standard CDNs:

> _**Typography**_: Orbitron via Google Fonts for that classic high-tech digital look.

> _**Iconography**_: Font Awesome 7.0.1 via Cloudflare CDN for the smooth theme-switching UI.

## ⚙ Intelligent Zero-Padding

Instead of redundant if/else statements, a streamlined helper function ensures all time units maintain a consistent two-digit "**00**" format:

💻 **_JavaScript_**

```
hours = hours < 10 ? "0" + hours : hours;
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;  // Converts 5 to "05" 
```
## ⏰ Time Type & Format Logic

The clock handles the conversion from a 24-hour system to a user-friendly 12-hour **AM/PM** format using modern JavaScript syntax:

⏳ **_AM/PM Detection_**: 

```hours < 12 ? "AM" : "PM"```

⏱ _**12-Hour Correction**_: 

```hours = hours > 12 ? hours - 12 : hours; // Handles the "0" midnight edge case perfectly.```



> [!IMPORTANT]
>  **DEMO PURPOSE ONLY**: _This project is a front-end demonstration of digital clock logic and theme switching. It is intended for educational and portfolio display purposes and is not designed for production-level time tracking or server-side synchronization_.
