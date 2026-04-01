const config = {
  title: "Raj Gupta | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Raj Gupta, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Raj Gupta, a full-stack developer creating interactive web experiences and innovative projects.",
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

  // for github stars button
  githubUsername: "0607rj",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/0607rj",
    linkedin: "https://www.linkedin.com/in/raj-gupta-0607rj/",
    instagram: "https://www.instagram.com/0607rj",
    facebook: "https://www.facebook.com/raj.gupta.0607",
    github: "https://github.com/0607rj",
  },
};
export { config };
