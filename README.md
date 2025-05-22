# Pro-folio

**Pro-folio** is an open-source developer portfolio website designed to showcase your skills, projects, and experience in a visually appealing and interactive manner similar to a VSCode window. The website is built using Next.js, React, and Tailwind CSS, with integration for sending emails via EmailJS.

## Features

- **Responsive Design**: Optimized for both mobile and web with a developer-themed layout.
- **Customizable Content**: Easily update your information through `user.json` and `meta.json`.
- **SEO Optimized**: Pre-configured meta tags and Open Graph (OG) images for improved search engine visibility.

## Installation

To set up the portfolio on your local machine, follow these simple steps:

1. **Clone the Repository:**

   ```shell
   git clone https://github.com/Derpnezz/portfolio.git
   cd portfolio
   ```

2) **Install deps:**

   ```shell
   npm install
   ```

3. **EmailJS Setup:**

- Create an account on EmailJS.
- Create a new service and template following their [docs](https://www.emailjs.com/docs/tutorial/overview/).
- Update the .env.local file with your EmailJS SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY
  ```js
  const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
  ```

4. **Customize your information**

- Update user.json with your personal details, including your name, bio, and social links.
- Update meta.json with information about your tech stack.
- Update layout.tsx with to change the meta information for your website

5. **Run in local and make necessary changes**
   ```shell
   npm run dev
   ```

## Deployment

Simply push your repository to GitHub, link your repo to [Vercel](https://vercel.com), and the platform will handle the rest.

## Contributions

Special thanks to [Yanka Darelova](https://www.linkedin.com/in/yanka-darelova/) who is creator of this [design](https://www.figma.com/community/file/1100794861710979147/portfolio-for-developers-concept-v-2). Her design was the core inspiration and basis for this portfolio. <br>
Also a special thanks to [Prem Banker](https://github.com/prem-banker/pro-folio) because I used his code as a huge reference for this as well.