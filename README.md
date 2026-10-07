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

- **Node.js** (version 20.19+ or 22+ required by Vite) – (https://nodejs.org)
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
git clone https://github.com/ShiBzOk/digital-passport.git
```

**2. Navigate into the project folder**
```bash
cd digital-passport
```

**3. Configure environment variable** - 
Create a .env file in the root directory and add your API key (provided via Canvas):
```bash
echo "VITE_API_KEY=YOUR_API_KEY_HERE" > .env
```

**4. Install dependencies**
```bash
npm install
```

**5. Start the development server**
```bash
npm run dev
```

**6. Open the app in your browser**
http://localhost:5173


---


## API

**REST Countries API – https://restcountries.com/**

The app fetches country data on initial load using the following endpoint:
GET [https://api.restcountries.com/countries/v5?limit=100](https://api.restcountries.com/countries/v5?limit=100)

**Authentication**

Requests require an API key sent as a Bearer token in the Authorization header:
```javascript
headers: {
  Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
}
```
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


**Why not Vue?** Vue is known for being easy to learn and beginner friendly. Compared to React, it has a smaller ecosystem and is used less frequently in the industry, which means there are fewer libraries, resources, and community support available [1].

**Why not Angular?** Angular is a powerful framework with many built-in features, but it has a steeper learning curve than React. For this project, it would have added unnecessary depth and more functionality than we needed [1].

**Why React?** We chose React because it provides a good balance between simplicity and flexibility. According to the Stack Overflow Developer Survey 2025, React is one of the most common web libraries and frameworks among developers according to the Stack Overflow Developer Survey 2025 [1]. It also has a detailed documentation and community support. 

Another important reason is that React was the library used during this course, allowing us to build on the knowledge we had already gained. This also helped us continue our learning, as we are still new to the framework.

Also becoming more familiar and comfortable with React improves our preparation for real world software development after graduation. One of the main goals of this project was not only to build an application from scratch, but also to strengthen and broaden our existing knowledge while gaining experience with new and industry relevant technologies, Using React allowed us to achieve both these goals.

---

References
[1] Stack Overflow, "Stack Overflow Developer Survey 2025," Stack Overflow, 2025. [Online]. Available: https://survey.stackoverflow.co/2025/technology#most-popular-technologies-webframe .
