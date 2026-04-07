# 🚀 Raj Gupta | Full-Stack Developer Portfolio

> **Explore my interactive 3D portfolio** featuring cutting-edge animations, space-themed aesthetics, and an immersive 3D keyboard showcasing my technical skills.

A modern, jaw-dropping developer portfolio packed with interactive 3D animations, buttery smooth transitions, and a cosmic visual experience. Built by **Raj Gupta**, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects.

**🌐 Live Site:** [https://rajportfolio06.netlify.app](https://rajportfolio06.netlify.app)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/0607rj/3d-portfolio)

![Portfolio Preview](https://github.com/0607rj/Portfolio/blob/main/public/assets/projects-screenshots/portfolio/landing.png?raw=true)

---

## 👨‍💻 About Me

I'm **Raj Gupta**, a passionate full-stack developer and creative technologist. I specialize in building:

- 🎨 Interactive web experiences with seamless animations
- 🌌 3D web applications using cutting-edge technologies
- 💼 Full-stack solutions from concept to deployment
- 🚀 Innovative projects like Coding Ducks, The Booking Desk, and Ghostchat

**Let's build something amazing together!**

📧 **Contact:** [happyhome18110@gmail.com](mailto:happyhome18110@gmail.com)

**Connect with me:**
- 🐦 Twitter/X: [@0607rj](https://x.com/0607rj)
- 💼 LinkedIn: [Raj Gupta](https://www.linkedin.com/in/raj-gupta-0607rj/)
- 📷 Instagram: [@0607rj](https://www.instagram.com/0607rj)
- 👨‍💻 GitHub: [@0607rj](https://github.com/0607rj)
- 👤 Facebook: [Raj Gupta](https://www.facebook.com/raj.gupta.0607)

## ✨ Features

- **Interactive 3D Keyboard** — Custom Spline keyboard where each keycap represents a skill, revealing titles and descriptions on hover/press
- **Buttery Animations** — GSAP + Framer Motion powered scroll, hover, and reveal animations
- **Space Theme** — Floating particles on a dark canvas for a cosmic vibe
- **Light & Dark Mode** — Full theme support with seamless transitions
- **Responsive Design** — Works flawlessly across all devices and screen sizes
- **Contact Form** — Integrated email delivery via Resend API
- **Real-time Features** — Live cursors, online presence, and chat (optional)
- **Performance Optimized** — Built with Next.js 14 for lightning-fast load times
- **SEO Ready** — Comprehensive meta tags, Open Graph, and Twitter Cards
- **Analytics** _(optional)_ — Umami analytics integration for privacy-focused insights

---

## 🎯 Featured Projects

This portfolio showcases my best work, including:

- **🦆 Coding Ducks** — Interactive coding learning platform
- **🏨 The Booking Desk** — Hotel booking management system
- **👻 Ghostchat** — Anonymous real-time chat application
- And many more exciting projects!

Each project includes live demos, source code links, and detailed tech stack information.

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 14, React 18, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI, Aceternity UI |
| **Animation** | GSAP, Framer Motion |
| **3D** | Spline Runtime |
| **Email** | Resend |
| **Misc** | Lenis (smooth scroll), Zod, next-themes |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **Package Manager:** pnpm (recommended), npm, or yarn
- **Resend API Key** (for contact form functionality)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/0607rj/3d-portfolio.git
    cd 3d-portfolio
    ```

2. **Install dependencies:**

    ```bash
    # Using pnpm (recommended)
    pnpm install

    # Or using npm
    npm install

    # Or using yarn
    yarn install
    ```

3. **Set up environment variables:**

    Copy `.env.example` to `.env.local` and fill in the values:

    ```bash
    cp .env.example .env.local
    ```

    | Variable | Required | Description |
    |---|---|---|
    | `RESEND_API_KEY` | Yes | API key from [Resend](https://resend.com) for the contact form |
    | `NEXT_PUBLIC_WS_URL` | No | WebSocket server URL for realtime features (cursors, chat, presence) |
    | `UMAMI_DOMAIN` | No | Umami analytics script URL |
    | `UMAMI_SITE_ID` | No | Umami website ID |

4. **Run the development server:**

    ```bash
    # Using pnpm
    pnpm dev

    # Or using npm
    npm run dev

    # Or using yarn
    yarn dev
    ```

5. **Open your browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000) and see the magic ✨

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

---

## 🎨 Make It Your Own

All personal info is centralized in [`src/data/config.ts`](src/data/config.ts). Edit this single file to rebrand the portfolio:

```ts
const config = {
  title: "Raj Gupta | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Raj Gupta, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short: "Discover the portfolio of Raj Gupta, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Raj Gupta",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Raj Gupta",
  email: "happyhome18110@gmail.com",
  site: "https://rajgupta.site",

  // GitHub stars button in the header
  githubUsername: "0607rj",
  githubRepo: "3d-portfolio",

  social: {
    twitter: "https://x.com/0607rj",
    linkedin: "https://www.linkedin.com/in/raj-gupta-0607rj/",
    instagram: "https://www.instagram.com/0607rj",
    facebook: "https://www.facebook.com/raj.gupta.0607",
    github: "https://github.com/0607rj",
  },
};
```

Other files you'll want to customize:

| File | What to change |
|---|---|
| `src/data/projects.tsx` | Your projects, screenshots, descriptions, and tech stacks |
| `src/data/constants.ts` | Skills list (name, description, icon) and work experience |
| `public/assets/` | Your images, OG image, and project screenshots |

---

## ⌨️ Updating the 3D Keyboard Skills

The 3D keyboard keycaps are baked into a Spline file. To update the skills displayed on the keyboard:

1. **Import** the `public/assets/skills-keyboard.spline` file into [Spline](https://spline.design/)
2. **Unhide** the keycap objects you want to edit
3. **Update** the logo images on each keycap to your new skill icons
4. **Rename** each keycap object to match the skill's `name` field in `src/data/constants.ts` (e.g. `js`, `react`, `docker`)
5. **Hide** all keycap objects again
6. **Export** the scene and overwrite `public/assets/skills-keyboard.spline`

After updating the Spline file, make sure `src/data/constants.ts` has matching entries for every skill on the keyboard:

```ts
// Each keycap object name in Spline must match a key in SKILLS
export const SKILLS: Record<SkillNames, Skill> = {
  js: { name: "js", label: "JavaScript", shortDescription: "...", ... },
  react: { name: "react", label: "React", shortDescription: "...", ... },
  // ... add/remove entries to match your keyboard
};
```

The `SkillNames` enum, `SKILLS` record, and the Spline keycap names must all stay in sync for the keyboard interactions to work correctly.

---

## 🔌 Realtime Features (Optional)

The portfolio supports optional realtime features powered by a **separate backend API**:

- 🖱️ **Live cursors** — See other visitors' cursors in realtime
- 👥 **Online presence** — Shows who's currently on the site
- 💬 **Chat** — Live chat between visitors

These features activate automatically when the `NEXT_PUBLIC_WS_URL` environment variable is set. Without it, the portfolio works perfectly fine as a static site — no realtime features, no backend dependency.

> [!NOTE]
> The backend API is **not open source**. This is intentional! Too many people have cloned the portfolio and claimed they built it from scratch. The realtime server stays private to keep the live experience unique make make it standout.


---

## 🚀 Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/0607rj/3d-portfolio)

This site is deployed on **Vercel**. To deploy your own:

1. Push your code to a GitHub repository
2. Connect the repository to [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Vercel handles the rest — automatic deployments on every push

---

## 🤝 Contributing

If you'd like to contribute or suggest improvements, feel free to open an issue or submit a pull request. All contributions are welcome!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 💖 Credits & Acknowledgments

**Created by:** [Raj Gupta (@0607rj)](https://github.com/0607rj)  
**Website:** [https://rajgupta.site](https://rajgupta.site)  
**Repository:** [https://github.com/0607rj/3d-portfolio](https://github.com/0607rj/3d-portfolio)

If you use this portfolio as a template, a credit or link back to the original repo would be much appreciated! ❤️

---

## ⭐ Support

If you found this project helpful or inspiring:
- ⭐ Star the repository
- 🍴 Fork it to create your own version
- 📢 Share it with others
- 🐛 Report bugs or suggest features via [GitHub Issues](https://github.com/0607rj/3d-portfolio/issues)

**Built with ❤️ by Raj Gupta**
