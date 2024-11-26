# QR-check Frontend Development TODO

## Setup and Configuration
- [x] Initial Next.js 13+ setup with TypeScript
- [x] Tailwind CSS configuration
- [x] shadcn/ui components integration
- [x] Theme configuration (light/dark mode)
- [ ] Internationalization setup (i18n) for Russian and English

## Authentication & Authorization
- [x] Mock authentication service
  - [x] Login page with email/phone
  - [x] Registration flow
  - [ ] Password recovery
  - [ ] 2FA implementation
- [x] Role-based access control (RBAC)
  - [x] Protected routes
  - [x] Role-specific navigation
  - [x] Auth middleware
  - [ ] Viewer role
  - [ ] Promoter role
  - [ ] Admin role
- [ ] Protected routes setup

## Layout and Navigation
- [x] Main layout structure
  - [x] Responsive header with navigation
  - [ ] Footer with essential links
  - [x] Sidebar for admin/promoter dashboard
- [x] Navigation menu components
  - [x] Public navigation
  - [x] Role-specific navigation
- [ ] Mobile-responsive design

## Core Features

### Viewer Features
- [ ] Event Discovery
  - [x] Advanced search component
  - [x] Filtering system
  - [x] Event cards and lists
  - [x] Event details page
- [ ] Ticket Management
  - [x] Ticket selection interface
  - [x] Additional services selection
  - [ ] Purchase confirmation
  - [ ] QR code display
  - [ ] Ticket history
- [ ] Additional Services
  - [ ] Pre-order interface
  - [ ] Service selection
  - [ ] Shopping cart

### Promoter Features
- [ ] Event Management
  - [ ] Event creation form
  - [ ] Event editing interface
  - [ ] Event statistics dashboard
- [ ] Audience Management
  - [ ] Guest database interface
  - [ ] Invitation system
  - [ ] Audience analytics
- [ ] Service Management
  - [ ] Additional services setup
  - [ ] Pricing configuration
  - [ ] Inventory management

### Admin Features
- [ ] User Management
  - [ ] User list with filters
  - [ ] User details and editing
  - [ ] Role management
- [ ] System Configuration
  - [ ] Global settings interface
  - [ ] Permission management
  - [ ] Content moderation tools

## Shared Components
- [ ] Search Components
  - [ ] Advanced search bar
  - [ ] Filter system
- [ ] UI Components
  - [ ] Loading states
  - [ ] Error boundaries
  - [ ] Toast notifications
- [ ] Form Components
  - [ ] Input validation
  - [ ] Error handling
  - [ ] Success feedback

## Mock Data and Services
- [ ] Event data
- [ ] User data
- [ ] Transaction data
- [ ] Analytics data
- [ ] Mock API service

## Testing and Quality Assurance
- [ ] Unit tests setup
- [ ] Component testing
- [ ] E2E testing setup
- [ ] Accessibility testing
- [ ] Performance optimization

## Documentation
- [ ] Component documentation
- [ ] Setup instructions
- [ ] Development guidelines
- [ ] User guide

## Progressive Web App (PWA)
- [ ] PWA configuration
- [ ] Offline support
- [ ] Push notifications
- [ ] App manifest

## Deployment
- [ ] Build optimization
- [ ] Environment configuration
- [ ] CI/CD setup
- [ ] Analytics integration