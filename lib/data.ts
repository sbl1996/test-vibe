// lib/data.ts
export const author = {
  name: "Your Name",
  email: "your.email@example.com",
  affiliation: "Your University/Institution",
  socials: {
    github: "https://github.com/your-github",
    googleScholar: "https://scholar.google.com/citations?user=your-id",
    linkedin: "https://linkedin.com/in/your-linkedin",
  },
};

export const publications = [
  {
    title: "A Groundbreaking Paper on Next.js and UI Design",
    authors: "Your Name, Co-author One, Co-author Two",
    journal: "Proceedings of the Very Important Conference (VIC), 2024",
    tags: ["Conference", "CVPR"],
    links: {
      pdf: "/papers/paper1.pdf",
      code: "https://github.com/your-repo/project",
    },
  },
  // ... more publications
];

export const news = [
  {
    date: "2024-05-20",
    description: '🎉 One paper accepted to <strong>CVPR 2024</strong> as a <span class="font-semibold text-primary">Highlight</span> presentation. Congrats to all collaborators!',
    tags: ["Paper Accepted"],
  },
  {
    date: "2024-03-15",
    description: '🏆 Our team won the <strong>First Place</strong> in the "AI for Good" hackathon. Check out our project <a href="#" class="underline">here</a>.',
    tags: ["Award"],
  },
  {
    date: "2023-11-01",
    description: '🎤 Gave a talk on "Modern Web Development with Next.js" at the university tech summit.',
    tags: ["Talk"],
  },
  {
    date: "2023-09-01",
    description: '🚀 Released my new open-source project, "shadcn-academic-starter" on GitHub.',
    tags: ["Open Source"],
  },
];

// 项目和比赛数据
export const projects = [
  {
    title: "AI Medical Image Analysis",
    description: "An open-source tool for segmenting and classifying medical scans using PyTorch and MONAI. Achieved 95% accuracy on the BraTS dataset.",
    tags: ["PyTorch", "Deep Learning", "Medical Imaging", "Open Source"],
    link: "https://github.com/your-repo/ai-medical-image",
    imageUrl: "/projects/medical-ai.png", // 在 public/projects/ 目录下准备一张图片
  },
  {
    title: '"AI for Good" Hackathon Winner',
    description: "Developed a real-time sign language translation app using MediaPipe and a custom LSTM model. Won first place out of 50 teams.",
    tags: ["Python", "TensorFlow", "Competition Winner", "Mobile App"],
    link: "https://devpost.com/software/your-project-link",
    imageUrl: "/projects/hackathon.jpeg",
  },
  {
    title: "Personal Academic Website",
    description: "This website itself! Built with Next.js, Tailwind CSS, and Shadcn/ui. Fully static and deployed on GitHub Pages.",
    tags: ["Next.js", "TypeScript", "Shadcn/ui", "Open Source"],
    link: "https://github.com/your-repo/my-academic-page",
    // 这个项目可以没有图片
  },
];