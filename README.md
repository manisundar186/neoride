# neoride
NeoRide application official website by Mani Sundar. Application is going to build in Angular.

# Header

  A reusable header bar for the application. Handles branding, navigation actions, and optional user controls.

  Features

    Displays app title or logo

    Optional back button

    Optional action buttons (e.g., notifications, menu, profile)

    Emits events for parent components to react to

# Footer

  A reusable footer bar for displaying navigation links, status info, or persistent actions.

  Features

    Fixed bottom layout

    Supports icons, labels, or custom content

    Ideal for app-wide navigation or secondary actions

    Responsive and mobile-friendly design

# Home

  Main landing screen composed of multiple section components that build the homepage experience.

  Features

    Uses a modular layout with dedicated section components

    Integrates:

      LandingSectionComponent – hero/intro section

      ShortInfoComponent – quick highlights or feature points

      TrustedPartnersComponent – list or logos of verified partners

      UserCommentsComponent – testimonials or feedback section

      ConclusionComponent – final CTA or closing message

    Handles overall page structure and data flow between sections

    Fully responsive layout

# About

  Page dedicated to describing the organization and showcasing the team behind the product.

  Features

    Structured into two sub-components:

    AboutSectionComponent – details about the company, mission, and background

    TeamsSectionComponent – displays team members, roles, and brief profiles

    Clean, informative layout focused on brand story and credibility

    Fully responsive arrangement suitable for mobile and desktop

# config.ts

  Centralized configuration file used to store reusable, app-wide constants and settings.

  Features

    Holds environment-independent configurable values

    Provides a single source of truth for URLs, keys, labels, and global options

    Simplifies maintenance by avoiding hard-coded values across components and services

    Easy to import and use anywhere in the application
