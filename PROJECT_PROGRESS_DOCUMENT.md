# Securaegis Website Project Progress

**Project:** Securaegis Technologies LLP website and cybersecurity learning platform  
**Document purpose:** Current progress, available pages, pending work, and commercial proposal  
**Prepared:** 18 September 2026

## 1. Current Project Overview

The project is currently at the **UI prototype and application foundation stage**. The website has a responsive dark cybersecurity-themed interface, shared navigation and footer, public information pages, course listing, authentication screens, and initial student/admin dashboard screens.

The project is built with Next.js, React, Tailwind CSS, Framer Motion, Lucide icons, NextAuth, Prisma, and PostgreSQL configuration.

The current screens demonstrate the intended user experience. Several values, links, forms, course records, blog records, contact details, placement statistics, and dashboard records are sample content and must be replaced with approved business data before launch.

## 2. Pages Currently Available

### Public website pages

| Page | Current status | Current content |
|---|---|---|
| Home `/` | Implemented as UI prototype | Hero section, course call-to-action, session carousel, benefits, featured courses, and statistics |
| About `/about` | Implemented as UI prototype | Company introduction, mission, vision, and core values |
| Courses `/courses` | Implemented as UI prototype | Six course cards with category, level, duration, fees, rating, and student count; search/filter UI is visual only |
| Placements `/placements` | Implemented as UI prototype | Placement statistics and four-step placement process |
| Blog `/blog` | Implemented as UI prototype | Three sample articles, categories, author/date information, and search UI |
| Contact `/contact` | Implemented as UI prototype | Contact form and company address, phone, and email information |
| Login `/login` | Screen implemented | Email/password form connected to the NextAuth credentials flow |
| Registration `/register` | Screen implemented, workflow pending | Registration form is present, but account creation is not connected to a backend action |

### Portal pages

| Page | Current status | Current content |
|---|---|---|
| Student dashboard `/dashboard/student` | UI prototype | Enrolled courses, learning hours, certifications, assignments, progress, and notifications using sample data |
| Admin dashboard `/dashboard/admin` | UI prototype | Admin navigation, student/course/revenue statistics, recent enrollments, and create-course button |

### Shared website elements

- Responsive desktop and mobile navigation.
- Courses dropdown in the desktop navigation.
- Animated navigation behavior on scroll.
- Shared footer with quick links, course links, contact information, and legal-policy links.
- Responsive layouts and motion effects across the main screens.
- Prisma database models for users, courses, modules, enrollments, payments, certificates, trainers, and blogs.

## 3. Items To Be Added

### Essential website functionality

- Connect all forms to backend APIs and database records.
- Complete user registration, validation, password hashing, login errors, logout, and password reset.
- Add role-based access control so only authorized students and administrators can access their portals.
- Connect course cards to real course detail pages.
- Add course enrollment and payment flow.
- Add payment gateway integration, payment status handling, invoice/receipt generation, and refund handling.
- Add real search, category filters, sorting, and pagination for courses and blog articles.
- Add CMS functionality for administrators to manage courses, modules, trainers, blogs, placements, testimonials, and site content.
- Add student learning functionality: course modules, lessons, progress tracking, assignments, completion status, and certificates.
- Add admin functions for managing students, enrollments, payments, courses, blogs, and placement records.
- Add contact-form email notification and database storage.
- Add email notifications for registration, enrollment, payment, course updates, and certificate availability.
- Add privacy policy, terms of service, refund policy, and FAQ pages.

### Content and trust elements

- Replace all sample text and statistics with verified company information.
- Add approved company logo files, course images, trainer profiles, certificates, testimonials, hiring partners, and placement success stories.
- Add social-media URLs and working contact details.
- Add SEO metadata, Open Graph images, sitemap, robots file, and structured data where appropriate.
- Add accessibility review, mobile testing, browser testing, loading states, empty states, and error pages.

### Deployment and operations

- Configure the production PostgreSQL database and run migrations.
- Configure production environment variables and secure secrets.
- Deploy the application to the selected hosting provider.
- Configure domain, SSL, email service, payment gateway, backups, and monitoring.
- Perform final QA, security checks, client acceptance testing, and handover documentation.

## 4. Items To Be Removed or Replaced Before Launch

- Placeholder company address, phone numbers, and email addresses.
- Sample course fees, ratings, student counts, trainer names, dates, and dashboard statistics.
- Unverified claims such as placement percentages, salary packages, number of students, hiring partners, and certifications.
- Placeholder blog authors, article dates, article content, and empty image areas.
- Non-functional search fields, filter buttons, registration button, create-course button, and dashboard navigation links.
- Empty `#` social-media links and placeholder policy/FAQ links.
- Broken or currently unavailable routes such as individual course details, individual blog articles, FAQ, privacy, terms, and refund pages.
- Any duplicate, outdated, or client-unapproved content supplied during the prototype stage.

## 5. Routes Requiring Creation or Completion

The current navigation references several routes that are not yet implemented as page files. These should be created or removed from navigation after client confirmation:

- Course detail routes, for example `/courses/ethical-hacking`, `/courses/networking`, `/courses/soc-analyst`, `/courses/python`, and dynamic course detail pages.
- Blog detail routes, for example `/blog/1` or slug-based article pages.
- `/faq`
- `/privacy`
- `/terms`
- `/refund`
- Student portal pages for course learning, assignments, certificates, profile, and payment history.
- Admin pages for students, courses, payments, blogs, placements, trainers, and settings.

## 6. Information Required From the Client

Please provide or confirm the following before production implementation:

1. Final company name, logo, brand colors, address, phone numbers, email addresses, and social-media links.
2. Approved page list and any pages to be removed or added.
3. Final course list, descriptions, modules, duration, fees, discounts, prerequisites, trainers, images, and certification details.
4. Placement statistics, hiring-partner logos, testimonials, and permission to publish student success stories.
5. Blog content, authors, images, publishing schedule, and admin users who will manage it.
6. Registration fields, user roles, approval rules, and password-reset requirements.
7. Preferred payment gateway and business/payment account details.
8. Refund policy, privacy policy, terms of service, and FAQ content.
9. Preferred hosting provider, domain access, business email service, and database details.
10. Any integrations required, such as WhatsApp, CRM, Google Analytics, Meta Pixel, email marketing, or video-learning services.
11. Final confirmation of all public claims and statistics before publishing.

## 7. Suggested Delivery Phases

### Phase 1: Confirmation and UI completion

Finalize sitemap, branding, content, responsive layouts, missing public pages, and client-approved design.

### Phase 2: Backend and database

Implement database setup, registration, authentication, roles, course management, blog management, contact submissions, and admin operations.

### Phase 3: Learning and payments

Implement course details, enrollment, payment gateway, student learning area, progress tracking, certificates, notifications, and payment records.

### Phase 4: Testing and launch

Complete content replacement, security and accessibility checks, mobile/browser QA, deployment, domain configuration, training, and handover.

## 8. Recommended Project Price

The current screens are a prototype. A production-ready platform with authentication, database, admin management, course enrollment, payments, student learning features, certificates, deployment, and testing is substantially larger than a basic brochure website.

### Recommended quote

**Recommended total project fee: INR 1,50,000**

This quote assumes the client provides the final content and assets, and that the scope includes the core website, authentication, course management, student/admin dashboards, enrollment/payment integration, testing, and deployment.

### Suggested payment schedule

- **40% advance to begin:** INR 60,000
- **30% after public pages and core backend are ready:** INR 45,000
- **30% before production launch and final handover:** INR 45,000

Do not include domain, hosting, paid email services, payment-gateway charges, premium media, third-party subscriptions, or taxes in this development fee unless agreed separately.

### Scope alternatives

- **Frontend/UI-only delivery:** approximately INR 60,000-90,000.
- **Full production platform described above:** approximately INR 1,20,000-1,80,000 depending on final integrations and learning features.
- **Additional work after scope approval:** charge separately at an agreed hourly/day rate or through a written change request.

## 9. Commercial Conditions to Confirm

- The quotation covers the agreed features only; new modules or major design changes are additional work.
- The client is responsible for providing accurate legal, business, course, and placement content.
- The client owns the final website content and approved project deliverables after all invoices are paid.
- A reasonable post-launch bug-fix period should be agreed, for example 15-30 days. New features are not included in bug-fix support.
- Delivery dates depend on timely client feedback, content, credentials, and approvals.
- Work may pause if a scheduled payment or required client input is delayed.

## 10. Client Approval

Please confirm:

- Approved pages and features.
- Final content and assets to be supplied.
- Selected payment gateway and hosting provider.
- Final project price and payment schedule.
- Any requested changes to the scope or delivery phases.

**Client name:** ______________________________  
**Signature:** _________________________________  
**Date:** _____________________________________
