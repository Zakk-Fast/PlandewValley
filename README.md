# 🌾 Plandew Valley

**Plandew Valley** is a cozy, browser-based planning tool for Stardew Valley players who want to optimize their crop layouts, maximize seasonal profits, and experiment with field designs. Built for fans who love both strategy and aesthetics, the app blends drag-and-drop mechanics with real-time profit calculations. Currently only supports Spring.

![Screenshot 2025-06-25 123605](https://github.com/user-attachments/assets/2494be2e-c57e-42ae-be6f-ba7b7da3977a)

---

## 🧩 Features

- **Drag-and-Drop Crop Planner**  
  Design your fields with an intuitive drag-and-drop UI. Assign crops to tiles within preset or custom plot layouts.

- **Preset & Custom Field Cards**  
  Choose from pre-configured sprinkler layouts (e.g., Quality, Iridium) or create your own field size.

- **Profit & ROI Calculations**  
  See how much gold you’ll make per crop, including raw sale value, seed cost, and processing in Kegs or Jars.

- **Processing Support**  
  Automatically adjusts profits based on whether you're turning crops into Wine, Jelly, Juice, or Pickles.

- **Seasonal Filtering**  
  Quickly switch between Spring, Summer, and Fall to plan ahead for each farming season.

- **Responsive Design**  
  Works beautifully on both desktop and mobile browsers.

---

## 🛠 Tech Stack

| Area          | Tools / Frameworks                     |
|---------------|----------------------------------------|
| Frontend      | React, TypeScript, Zustand, Framer Motion |
| UI/UX         | Tailwind CSS, custom SVG icons, responsive layout |
| Animations    | Framer Motion for fluid transitions and hover effects |
| State Management | Zustand for lightweight, scalable app state |
| Data Handling | JSON crop database with processing multipliers |

---

## 🧪 Planned Features
- Mobile version
- Adding all crop for other seasons
- Save/load plot configurations  
- Compare crop strategies side-by-side  
- Toggle between growth stages visually  
- Cloud sync via localStorage or backend

---

## 🖼 Screenshots

![Screenshot 2025-06-25 123619](https://github.com/user-attachments/assets/cf59202a-df80-4dd3-aac8-8514befb35a4)
![Screenshot 2025-06-25 123605](https://github.com/user-attachments/assets/feeb4e01-5944-4325-9097-39dece7ef2eb)
![Screenshot 2025-06-25 123824](https://github.com/user-attachments/assets/f8eed33a-1d69-4720-b67a-9fc6cf2f8bff)
![PlandewDemo](https://github.com/user-attachments/assets/baa0991f-9499-4a27-9af1-4ae41b09ed4e)


---

## 🧬 Data Sources

Crop data pulled from the [Stardew Valley Wiki](https://stardewvalleywiki.com/Crops), including:
- Growth time
- Regrowth cycles
- Seed prices
- Base sell prices
- Processing outputs (Wine, Jelly, etc.)

---

## 📦 Installation & Development

```bash
git clone https://github.com/Zakk-Fast/plandew-valley.git
cd plandew-valley
npm install
npm run dev
