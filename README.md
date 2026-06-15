# News Portal - Hybrid Application (Ionic & Angular)

A hybrid mobile news portal application built using Ionic Framework v8, Angular v20, and Capacitor v7. This application is designed to deliver a dynamic and interactive news reading experience with customizable global theme options.

## Key Features

- **User Authentication**: Secure login using pre-defined local user accounts and a password change feature.
- **News Categories**: Organizes articles into specific categories: Economy, Sports, Technology, Health, and Lifestyle.
- **Real-time News Search**: Real-time article filtering by title.
- **Article Details & Gallery**: Detailed view of articles featuring an image gallery powered by Swiper slider.
- **Interactive Rating System**: A 1-to-5 star rating system associated with the active user session. Articles with an average rating of 4.0 or higher are highlighted in green.
- **Comment Section & Replies**: A nested comment and reply system for user interaction.
- **Bookmarks/Favorites**: Ability to bookmark articles for quick access under a dedicated favorites tab.
- **Theme Customization**: Dynamically switch the app theme (Default/Brown Cream, Sea Blue, Leaf Green, Pastel Purple). Settings are persisted via local storage.
- **Views Tracking**: Tracks the total views/clicks for each article.

## Project Structure

```text
src/
├── app/
│   ├── login/               # User authentication page
│   ├── home/                # Homepage displaying featured (slider) & latest news
│   ├── daftar-berita/       # Article list page (supports category filtering)
│   ├── kategori/            # News categories directory
│   ├── cari-berita/         # Real-time search page
│   ├── baca-berita/         # Detailed article view (includes gallery, comments, and rating)
│   ├── my-favorite/         # Bookmarked articles page
│   ├── profile/             # Profile details and change password page
│   ├── themes/              # Theme picker page
│   ├── tabs/                # Navigation tabs and side menu layout config
│   └── services/
│       ├── auten.pengguna.ts # AuthService handling mock authentication
│       └── data.berita.ts    # NewsService handling mock news database and interactions
├── assets/                  # Static assets
└── theme/                   # Global style variables and Ionic configurations
```

## Tech Stack

- **Core Framework**: Angular v20
- **UI Component Framework**: Ionic Framework v8
- **Mobile Native Bridge**: Capacitor v7
- **Additional Libraries**:
  - RxJS (Reactive Extensions)
  - Swiper (Touch Slider)
  - Ionicons (Icon Library)

## Prerequisites

Ensure you have the following installed on your system:
- Node.js (version 18 or higher)
- npm (Node Package Manager)
- Ionic CLI installed globally:
  ```bash
  npm install -g @ionic/cli
  ```
- Angular CLI installed globally (optional but recommended):
  ```bash
  npm install -g @angular/cli
  ```

## Installation & Running the Project

1. **Clone or Download the Repository**:
   Download the project files to your local machine.

2. **Install Project Dependencies**:
   Open a terminal in the root of the project directory and run:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   Start the local development server by running:
   ```bash
   ionic serve
   ```
   The application will launch in your default web browser at `http://localhost:8100`.

## Test User Credentials

This project uses simulated user accounts stored locally in `AuthService`. Use the following credentials to log in:

| Username | Password (NRP) | Description |
|---|---|---|
| user | user123 | Demo Account |
