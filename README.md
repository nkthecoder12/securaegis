<<<<<<< HEAD
# Securaegis Technologies LLP

Securaegis is a cybersecurity education and training website prototype for **Securaegis Technologies LLP**. It presents the organization, its cybersecurity training programs, placement support, and educational content, with early-stage login and student/admin portal screens.

The project combines a responsive public-facing website with the initial foundations of a learning platform. **It is currently a UI prototype and application foundation, not a complete production learning-management system.** Several pages display sample content, and many visible forms, filters, links, and dashboard controls are not yet connected to backend functionality. See [Current implementation status](#current-implementation-status) before using it as a live service.

## Contents

- [Project goals](#project-goals)
- [Website pages](#website-pages)
- [Technology stack](#technology-stack)
- [Getting started](#getting-started)
- [Environment configuration](#environment-configuration)
- [Database and Prisma](#database-and-prisma)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Authentication](#authentication)
- [Current implementation status](#current-implementation-status)
- [Production readiness](#production-readiness)

## Project goals

The website is designed to introduce visitors to cybersecurity training programs and guide them toward learning and career opportunities. The current interface emphasizes:

- Cybersecurity and information-security training.
- Courses in ethical hacking, security operations, networking, cloud security, Python, and digital forensics.
- Practical learning themes such as labs, projects, expert instruction, and placement support.
- Public information about the organization, placements, and cybersecurity topics.
- A foundation for student and administrator dashboards.

The site uses a dark visual theme with responsive layouts, animated interface elements, and a shared navigation bar and footer.

## Website pages

| Route | Purpose | Current implementation |
|---|---|---|
| `/` | Home page with a hero section, session carousel, training highlights, featured courses, and statistics. | UI prototype; text and statistics are sample claims and should be verified. |
| `/about` | Organization overview, mission, vision, and core values. | Static content. |
| `/courses` | Course catalogue covering cybersecurity and related topics. | Course cards are hard-coded; search and filters are visual only. |
| `/placements` | Placement-support overview, statistics, and a four-step process. | Static content; statistics are sample claims and should be verified. |
| `/blog` | Articles and cybersecurity insights. | Articles are hard-coded examples; search and article links are not backed by a content system. |
| `/contact` | Contact details and a message form. | Form is visual only and does not submit messages. Confirm all displayed contact details before publication. |
| `/login` | Email-and-password sign-in screen. | Connected to the NextAuth credentials provider; see [Authentication](#authentication). |
| `/register` | Account registration screen. | UI only; account creation is not implemented. |
| `/dashboard/student` | Student learning overview with course progress and activity. | UI prototype displaying sample data. |
| `/dashboard/admin` | Administrator overview of students, courses, revenue, and enrollments. | UI prototype displaying sample data; management controls are not wired up. |

The course cards and blog entries link to detail routes, but those detail pages are not implemented yet.

## Technology stack

- **Next.js 16** with the App Router and **React 19**.
- **TypeScript** for application code.
- **Tailwind CSS 4** and custom global styles for the interface.
- **Framer Motion** for page and component animations.
- **Lucide React** for icons.
- **NextAuth.js 4** with a credentials provider for the initial sign-in flow.
- **Prisma 7** with a PostgreSQL data model.
- **bcryptjs** for password hash comparison in the credentials sign-in flow.
- **Zod** and **React Hook Form** are included as dependencies for future validation and form work.

## Getting started

### Prerequisites

- Node.js compatible with the installed Next.js version (Node.js 20.9 or newer is recommended).
- npm.
- PostgreSQL for database-backed functionality.

### Install and run locally

From the `securaegis-app` directory:

```bash
npm ci
```

Create a local `.env` file using the [Environment configuration](#environment-configuration) section, then generate the Prisma client:

```bash
npx prisma generate
```

If you have configured a PostgreSQL database and want to create or update the local schema, run:

```bash
npx prisma migrate dev --name init
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment configuration

Create a `.env` file in the project root (`securaegis-app/.env`). Do not commit this file: `.env*` files are excluded by the project `.gitignore`.

The project uses these variables:

| Variable | Required for | Description |
|---|---|---|
| `DATABASE_URL` | Prisma/database operations | PostgreSQL connection URL, for example `postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public`. |
| `NEXTAUTH_URL` | Authentication | Base URL of the application, such as `http://localhost:3000` during local development. |
| `NEXTAUTH_SECRET` | Authentication | A unique, strong secret used by NextAuth to sign and encrypt authentication data. Use a securely generated value and keep it private. |
| `STRIPE_SECRET_KEY` | Future payment integration | Reserved placeholder; payment processing is not implemented. |
| `RAZORPAY_KEY_ID` | Future payment integration | Reserved placeholder; payment processing is not implemented. |
| `RAZORPAY_KEY_SECRET` | Future payment integration | Reserved placeholder; payment processing is not implemented. |
| `CLOUDINARY_URL` | Future media storage | Reserved placeholder; Cloudinary integration is not implemented. |
| `RESEND_API_KEY` | Future email delivery | Reserved placeholder; email delivery is not implemented. |

An example template is provided in `.env.example`. It contains placeholders, not production credentials. Supply real local values in `.env`; never publish credentials in source control, screenshots, logs, or issue reports.

## Database and Prisma

The Prisma schema is in [`prisma/schema.prisma`](./prisma/schema.prisma). It configures PostgreSQL and defines the following models:

| Model | Purpose |
|---|---|
| `User` | User identity, optional password hash, role, and relations to enrollments, payments, and certificates. |
| `Course` | Course information, publication state, optional trainer, modules, and enrollments. |
| `CourseModule` | Ordered module content belonging to a course. |
| `Enrollment` | A user's enrollment in a course and their progress; a user can only be enrolled in a given course once. |
| `Payment` | Payment amount, currency, status, optional transaction ID, and associated user. |
| `Certificate` | Issued course certificate and its file URL for a user. |
| `Trainer` | Trainer profile and associated courses. |
| `Blog` | Blog article content, slug, and publication state. |

The Prisma CLI configuration is in [`prisma.config.ts`](./prisma.config.ts), which reads `DATABASE_URL` from the environment. Database setup and schema migration are prerequisites for database-backed features; the public catalogue and portal screens currently use hard-coded UI data.

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve a previously built application. |
| `npm run lint` | Run ESLint against the project. |

Prisma commands can be run with `npx prisma`, including `npx prisma generate` and `npx prisma migrate dev --name init`.

## Project structure

```text
securaegis-app/
├── prisma/
│   └── schema.prisma            # PostgreSQL data models
├── public/                      # Logo and static images/assets
├── src/
│   ├── app/
│   │   ├── about/               # Organization information
│   │   ├── api/auth/[...nextauth]/ # NextAuth API route
│   │   ├── blog/                # Blog listing
│   │   ├── contact/             # Contact page and prototype form
│   │   ├── courses/             # Course catalogue
│   │   ├── dashboard/admin/     # Admin dashboard prototype
│   │   ├── dashboard/student/   # Student dashboard prototype
│   │   ├── login/               # Sign-in page
│   │   ├── placements/          # Placement information
│   │   ├── register/            # Registration page prototype
│   │   ├── globals.css          # Global styles and theme
│   │   ├── layout.tsx           # Root layout, metadata, navbar, and footer
│   │   └── page.tsx             # Home page
│   ├── components/
│   │   ├── layout/              # Shared navbar and footer
│   │   └── ui/                  # Reusable interface components
│   ├── lib/
│   │   ├── auth.ts              # NextAuth credentials configuration
│   │   └── prisma.ts            # Shared Prisma client
│   └── types/
│       └── next-auth.d.ts       # NextAuth session type extensions
├── .env.example                # Environment variable template
├── next.config.ts
├── package.json
├── prisma.config.ts
└── tsconfig.json
```

## Authentication

The NextAuth route is available at `/api/auth/[...nextauth]`. The credentials provider looks up a user by email in the Prisma database and compares the supplied password against the stored hash using `bcryptjs`. The JWT and session callbacks include the user's ID and role.

The sign-in screen is connected to this flow, so successful sign-in requires a corresponding database user with a password hash. The registration page does **not** currently create users. The student and admin dashboard pages are not currently protected by role-based authorization. The development fallback secret in the authentication configuration must not be relied on in production: configure a strong `NEXTAUTH_SECRET` and ensure production routes and data have appropriate access controls before deployment.

## Current implementation status

This repository contains an early website and platform prototype. The visual pages are a starting point and do not imply that each described business feature is available.

### Implemented foundation

- Shared, responsive website layout with navigation and footer.
- Public information pages and course/blog catalogue mockups.
- Login UI integrated with the NextAuth credentials provider.
- Prisma schema for users, courses, modules, enrollments, payments, certificates, trainers, and blog posts.
- Student and administrator dashboard mockups.

### Not yet implemented or not connected

- User registration and password reset.
- Authorization and role-based access protection for student/admin routes.
- Database-backed course and blog listings, search, filtering, or detail pages.
- Course enrollment, lesson delivery, progress tracking, assessments, and certificate issuance.
- Payment gateway processing, receipts, and refund handling.
- Contact form submission, persistence, or email notifications.
- Administrator CRUD workflows for users, courses, blogs, payments, or placement content.
- Production-ready legal pages, complete error/loading/empty states, and verified business content.

## Production readiness

Before using this project as a live website or learning platform:

1. Replace sample copy, course data, contact information, placement figures, and dashboard statistics with approved, verified information.
2. Implement and test registration, password handling, access control, and account recovery.
3. Connect forms and catalogue/dashboard content to validated backend operations and the database.
4. Configure production PostgreSQL, migrations, backups, and least-privilege database credentials.
5. Set secure production environment variables, including `NEXTAUTH_SECRET`; do not rely on development defaults.
6. Integrate and test email, media storage, and payment providers before enabling related user flows.
7. Add approved privacy, terms, and refund policies and verify that all navigation links resolve correctly.
8. Test accessibility, responsive behavior, security, and the production build before deployment.

The accompanying [`PROJECT_PROGRESS_DOCUMENT.md`](./PROJECT_PROGRESS_DOCUMENT.md) contains a more detailed progress summary, outstanding work, and information to confirm before launch.
=======
<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# Securaegis
>>>>>>> 2c4d9e0f7fe875b13fdc5b5683877dbadfbffc5c
>>>>>>> origin/main
