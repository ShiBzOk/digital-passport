# CapyPassport

> A digital travel logbook where you can explore the world, stamp countries you've visited and save dream destinations to your bucket list.

**Course:** Flerplattformsapplikationer med webbtekniker – DA395B  
**Group members:** Nikola Rajic, Alexandar Radic, Mohamad Shihabi

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI framework – component-based structure |
| Vite 8 | Build tool – fast development server |
| localStorage | Client-side data persistence |
| REST Countries API | Country data source |
| Git / GitHub | Version control |

---

## Features

- **Search** – Filter countries by name (minimum 3 characters required)
- **Region filter** – Filter by Africa, Americas, Asia, Europe or Oceania
- **Alphabetical sorting** – Countries are always sorted A-Z
- **Country detail panel** – Click any card to see population, timezone, currency and a Google Maps link
- **Stamp countries** – Mark countries as visited to build your digital passport
- **Bucket list** – Save countries you want to visit
- **localStorage** – All user data persists between sessions

---

## Installation Guide

Make sure you have the following installed before running the project, if needed click the links provided to download:

- **Node.js** (version 18 or higher) – (https://nodejs.org) 
- **npm** (comes bundled with Node.js)
- **Git** – (https://git-scm.com)

To verify your installations, run these commands in your terminal:

```bash
node --version
npm --version
git --version
```

---

## Installation & Running Locally

**1. Clone the repository**
```bash
git clone  https://github.com/ShiBzOk/digital-passport
```

**2. Navigate into the project folder**
```bash
cd digital-passport
```

**3. Install dependencies**
```bash
npm install
```

**4. Start the development server**
```bash
npm run dev
```

**5. Open the app in your browser**
http://localhost:5173


---


## API

**REST Countries API** – https://restcountries.com/v3.1

The app fetches all country data once on startup using the following URL:
https://restcountries.com/v3.1/all?fields=name,capital,region,maps,population,timezones,flags,currencies,cca3


User data is stored in localStorage under two keys:
- `stampedCountries` – array of visited country codes (e.g. `["SWE", "JPN"]`)
- `wishlistCountries` – array of bucket list country codes


---

## Team & Responsibilities

| Member | Responsibilities |
|--------|-----------------|
| Nikola Rajic | API fetch, search logic, region filter, alphabetical sorting |
| Mohamad Shihabi | State management, localStorage, Passport & Bucketlist views, EmptyState |
| Alexandar Radic | Layout, CSS, responsiveness, CountryGrid, CountryCard |

---
## Framework Comparison

We chose React over other popular frameworks. Here is a brief comparison:

| | React | Vue | Angular |
|---|---|---|---|
| **Type** | Library | Framework | Full framework |
| **Learning curve** | Medium | Low | High |
| **Maintained by** | Meta | Community | Google |
| **Usage (2024)** | 39.5% | 15.4% | 17.1% |
| **Best for** | Flexible UI components | Beginner-friendly apps | Large enterprise apps |

**Why not Vue?** Vue is beginner-friendly and has a lower learning curve, but has a smaller ecosystem and is less common in the industry compared to React.

**Why not Angular?** Angular is a full framework with built-in solutions for everything, but it has a steep learning curve and is considered overkill for a project of this size.

**Why React?** React strikes the right balance, it is the most widely used library according to the Stack Overflow Developer Survey 2024 [1], it has a large ecosystem, and it is the framework we studied during this course. 

---

## References

[1] Stack Overflow, "Stack Overflow Developer Survey 2024," Stack Overflow, 2024. [Online]. Available: https://survey.stackoverflow.co/2024/technology#most-popular-technologies-webframe. [Accessed: 31 May 2025].

