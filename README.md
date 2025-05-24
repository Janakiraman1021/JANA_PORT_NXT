# Jana's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS. Features dynamic content loading, smooth animations, and a dark mode toggle.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: System-aware dark mode with manual toggle
- **Dynamic Content**: Content loaded from API endpoints
- **Smooth Animations**: Using Framer Motion for smooth transitions
- **SEO Optimized**: Built with Next.js for optimal SEO performance

### Key Sections

- 📚 Books & Publications
- 💼 Professional Experience
- 🎯 Skills & Expertise
- 🏆 Certifications
- 🌟 Featured Projects
- 📅 Events & Activities
- 📝 Blog Posts
- 📫 Contact Information

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide Icons
- **API Integration**: Axios
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JanakiRaman-2002/portfolio-website.git
```

2. Install dependencies:
```bash
cd portfolio-website
npm install
```

3. Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=https://port-backend-onv7.onrender.com/api
```

4. Start the development server:
```bash
npm run dev
```

## 📂 Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
├── components/             # Reusable components
│   ├── sections/          # Page sections
│   └── ui/               # UI components
├── lib/                   # Utility functions
├── public/                # Static assets
│   ├── assets/           # Images and media
│   └── fonts/           # Custom fonts
├── styles/               # Global styles
└── types/                # TypeScript types
```

## 🔧 Configuration

### Environment Variables

- `NEXT_PUBLIC_API_URL`: API endpoint URL

### API Integration

The website fetches data from several endpoints:
- `/api/skills` - Technical skills and proficiency levels
- `/api/projects` - Portfolio projects
- `/api/books` - Published books and writings
- `/api/certifications` - Professional certifications
- `/api/events` - Events and speaking engagements

## 🎨 Customization

### Theming

Colors and theme settings can be modified in:
```bash
tailwind.config.js
```

### Content

Update the API endpoints in `lib/api.ts` to point to your backend service.

## 📱 Progressive Web App

The website is PWA-ready with:
- Service Worker support
- Offline capability
- App manifest
- Install prompts

## 🚀 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

Janaki Raman - [@JanakiRaman2002](https://twitter.com/JanakiRaman2002)

Project Link: [https://github.com/JanakiRaman-2002/portfolio-website](https://github.com/JanakiRaman-2002/portfolio-website)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [shadcn/ui](https://ui.shadcn.com)