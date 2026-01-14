# Ashish Kumar - Professional Portfolio Website

A modern, fully responsive portfolio website built with Next.js 14, React, Tailwind CSS, and Framer Motion. Features smooth animations, dark mode, and a fully functional contact form.

## 🌟 Features

- **Hero Section** with typing animation
- **Dark/Light Mode** toggle
- **Smooth Animations** with Framer Motion
- **Glassmorphism Design** with modern UI elements
- **Contact Form** integrated with EmailJS
- **SEO Optimized** with metadata and Open Graph tags
- **Mobile-First Responsive Design**
- **Performance Optimized** with Next.js 14 App Router
- **Scroll-Based Animations**
- **Project Showcase** with live demo links
- **Skills Section** with animated progress bars
- **Education Timeline**
- **Experience Details**
- **Social Links Integration**
- **Loading Screen** support
- **Accessibility** focused components

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Dark Mode**: next-themes
- **TypeScript**: Full type safety

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- EmailJS account (for contact form functionality)
- Git

## 🚀 Quick Start

### 1. Clone or Download Repository

```bash
# If you have git
git clone https://github.com/Aashishrishu02/portfolio.git
cd portfolio

# Or navigate to your project folder
cd c:\Users\Lenovo\Desktop\Projects\Portfolio_website
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure EmailJS

EmailJS is pre-integrated for the contact form. To enable it:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Copy your Service ID, Template ID, and Public Key
5. Update these values in `components/sections/Contact.tsx`:

```typescript
// Line 10: Initialize EmailJS
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY')

// Lines 43-48: Update in handleSubmit
await emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formRef.current!,
  'YOUR_PUBLIC_KEY'
)
```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── providers.tsx       # Theme provider setup
│   ├── globals.css         # Global styles
│   └── page.module.css     # Page-specific styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── Section.tsx         # Reusable section wrapper
│   └── sections/
│       ├── Hero.tsx        # Hero section with animation
│       ├── About.tsx       # About me section
│       ├── Education.tsx   # Education timeline
│       ├── Experience.tsx  # Work experience
│       ├── Projects.tsx    # Project showcase
│       ├── Skills.tsx      # Skills with progress bars
│       └── Contact.tsx     # Contact form
├── public/
│   ├── favicon.ico         # Favicon
│   └── og-image.jpg        # Open Graph image
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/sections/Hero.tsx`):
   - Update name and roles in the typing animation
   - Modify introduction text
   - Update social media links

2. **About Section** (`components/sections/About.tsx`):
   - Update bio and description
   - Modify skills list
   - Update location and education info

3. **Projects** (`components/sections/Projects.tsx`):
   - Add your project details
   - Update GitHub and live demo links
   - Modify technology tags

4. **Skills** (`components/sections/Skills.tsx`):
   - Update skill names and proficiency levels
   - Add/remove skill categories
   - Adjust percentages

5. **Contact** (`components/sections/Contact.tsx`):
   - Update email address
   - Update phone number
   - Configure EmailJS (see above)

### Modify Styling

- **Colors**: Edit color variables in `tailwind.config.js`
- **Fonts**: Import custom fonts in `app/globals.css`
- **Animations**: Adjust animation configs in `tailwind.config.js`
- **Global Styles**: Modify `app/globals.css`

### Update Metadata

Edit `app/layout.tsx` to update:
- Site title and description
- Open Graph tags for social sharing
- Twitter card information
- Google verification code

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy the 'out' directory to Netlify
# Or connect your GitHub repo to Netlify for automatic deployments
```

### Deploy to Other Platforms

1. Build the project:
   ```bash
   npm run build
   ```

2. The `.next` folder contains the production build
3. Push to your preferred platform (GitHub Pages, AWS, etc.)

## 📝 Environment Variables

Create a `.env.local` file (optional):

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🔍 SEO Optimization

- ✅ Meta tags for all pages
- ✅ Open Graph image and tags
- ✅ Twitter card information
- ✅ Robots and sitemap metadata
- ✅ Structured data ready
- ✅ Mobile-friendly responsive design
- ✅ Fast loading performance with Next.js

To further optimize:

1. Add `robots.txt` in `/public`
2. Create `sitemap.xml` in `/public`
3. Submit to Google Search Console and Bing Webmaster Tools
4. Update verification codes in `app/layout.tsx`

## 🎯 Features Documentation

### Theme Toggle
- Automatic theme detection based on system preferences
- Manual toggle with Sun/Moon icon
- Persisted theme preference
- Smooth transitions between themes

### Animations
- Framer Motion for component animations
- Scroll-triggered animations with `whileInView`
- Smooth page transitions
- Hover effects on interactive elements
- Typewriter effect on hero section

### Contact Form
- Email validation
- Loading state with spinner
- Success/error messages
- Integration with EmailJS
- Fallback email link

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly buttons and interactions
- Optimized for all screen sizes

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## 📧 Contact

- **Email**: ashishkumarbhadai@gmail.com
- **Phone**: +91-7061460429
- **GitHub**: [Aashishrishu02](https://github.com/Aashishrishu02)
- **LinkedIn**: [Aashish Singh](https://www.linkedin.com/in/aashish-singh-4298482b2?utm_source=share_via&utm_content=profile&utm_medium=member_android)
- **Location**: Muzaffarpur, India

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)
- Email service by [EmailJS](https://www.emailjs.com/)
- Dark mode by [next-themes](https://github.com/pacocoursey/next-themes)

## 📌 Version

Current Version: 1.0.0

Last Updated: January 2026

---

**Made with ❤️ by Ashish Kumar**
