# Career Path - Career Counseling Website

**Career Navigator** is a modern, user-friendly career counseling platform that helps individuals make informed decisions about their professional future. Built using React, React Router, Firebase, and Tailwind CSS, this website offers personalized career guidance, services, and resources.

---

## 🚀 Live Site URL

[Visit Career Path](https://career-path-and-counciling.netlify.app)

---

## ✨ Features

1. **Responsive Design**:
   - Fully optimized for mobile, tablet, and desktop views.
   - Sleek, intuitive UI design with seamless navigation.

2. **Dynamic Routing**:
   - React Router is used for dynamic and protected routing.
   - Logged-in users are not redirected to the login page after reloading protected routes.

3. **Secure Authentication**:
   - Email and password-based authentication.
   - Google Login option for quick and easy access.
   - Forgot password feature with email reset functionality.

4. **Personalized User Experience**:
   - Users can update their name and photo in the "My Profile" section.
   - Profile updates are managed securely with Firebase's `updateProfile()` method.

5. **Interactive Features**:
   - Feedback/comments section on each service detail page.
   - Toggle password visibility for improved user experience.

6. **Dynamic Content**:
   - JSON-based service data displayed in cards.
   - Services include pricing, categories, counselor details, and "Learn More" options.

7. **Extra Features**:
   - Dynamic titles for each page.
   - Eye-catching slider with Swiper.js and animations using AOS.
   - Comprehensive 404 Not Found page for unmatched routes.

---

## 📋 Layout Structure

### Navbar:
- Displays the website name and active navigation links: `Home`, `My Profile`.
- For logged-in users:
  - Displays their image and name on hover.
  - Includes a logout button.
- For non-logged-in users:
  - Displays a login button.

### Main Section:
- The main section dynamically displays content based on routes:
  - **Home Page**: Slider, services, and two extra sections.
  - **Services Section**: JSON-based data in a card layout.
  - **Service Details Page**: Shows service-specific details, comments, and feedback.
  - **Protected Routes**: Accessible only to logged-in users.

### Footer:
- Displays relevant information with an eye-catching design and responsive layout.

---

## 🛠️ Technologies Used

- **React**: Component-based library for building user interfaces.
- **React Router**: Handles navigation and private routing.
- **Firebase**: User authentication and data storage.
- **Tailwind CSS**: Utility-first framework for styling.
- **Swiper.js**: Modern slider implementation.
- **AOS**: Adds smooth animations to elements.

---

## 🔧 Installation Guide

1. Clone the repository:
   ```bash
   git clone https://github.com/programming-hero-web-course1/b10-a9-authentication-ashrafulhossain1.git
