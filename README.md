# Blood Donation Website

## Overview

The Blood Donation website is a user-centric platform designed to facilitate blood donations by connecting donors with recipients. The website includes features for searching and filtering donors, detailed donor profiles, user account management, and administrative tools for overseeing site activity and user accounts. The aim is to promote and streamline the process of blood donation, ensuring that those in need can easily find willing donors and that the donation process is secure, efficient, and user-friendly.

## Live Link

Visit the live website: [Blood Donation Website](your-live-link-here)

## GitHub Repository

Check out the code on GitHub: [Blood Donation Repository](your-github-link-here)

## Features

### 1. Home Page/Landing Page

- **Header**
  - **Logo**: Prominently displayed website logo.
  - **Navigation Bar**: Links to:
    - Home
    - About Us
    - Login/Register (if not logged in)
    - My Profile (if logged in)
- **Hero Section**
  - **Catchy Headline**: Promoting blood donation (e.g., "Save Lives, Donate Blood!").
  - **Button**: "Search Donors" button that redirects to the Donor List page with search options.
- **About Section (About Us)**
  - **Content**: Brief description of the website's purpose and mission.
  - **Team Information**: Information about the team behind the website (optional).
- **Search Blood Donors**
  - **Search and Filter Options**: Allow users to search for blood donors by:
    - Blood type
    - Location
    - Availability
  - **Donor Cards**: Display up to 10 recent donor profiles in card format. Each card should include:
    - Donor's name
    - Photo (optional)
    - Blood type
    - Location
    - Availability status
    - Link to the full donor details page
- **Coverage Area**
  - **Map or List**: Show the areas covered by the blood donation service, highlighting regions with available donors.
- **Extra Sections (Unique and Relevant)**
  - **Success Stories**: Testimonials from people who have donated or received blood through the website.
  - **Donation Tips**: Useful tips and guidelines for donating blood.
- **Footer**
  - **Contact Information**: Email address, phone number, social media links.
  - **Copyright Information**: Standard copyright details.
  - **Additional Links**: Terms of Use, Privacy Policy, etc.

### 2. Login & Registration

- **Login Form**
  - **Fields**:
    - Username or email address
    - Password
- **Registration Form**
  - **Fields**:
    - Username
    - Email address
    - Password (with confirmation)
    - Option to donate blood (Yes/No)
    - Additional details (e.g., blood type, location)

### 3. Donor List Page

- **Features**
  - **Search and Filter Options**
    - Blood type
    - Location
    - Availability status
  - **Donor Cards**: Display donor profiles in card format with pagination. Each card should include:
    - Donor's name
    - Photo (optional)
    - Blood type
    - Location
    - Availability status
    - Link to the full donor details page

### 4. Donor Details Page

- **Features**
  - **Donor Information**: Detailed information about the donor, including:
    - Name
    - Photo (optional)
    - Blood type
    - Location
    - Availability status
    - Contact details (visible only after request approval)
  - **Request Blood Button**: Button to initiate a request for blood donation (redirects to Blood Request page).

### 5. Blood Request Page (Private)

- **Features**
  - **Form Fields**:
    - Requester's contact information (prefilled from profile if possible)
    - Additional Information (Hospital name, date, time, etc)
    - Agreement to terms and conditions
  - **Submit Button**: Submit the blood request.

### 6. My Profile

- **User Account Information**
  - **Edit Profile**: Options to edit username, email, and other details.
  - **Change Password**: Link to Change Password page.
- **Subsections**
  - **6.1 My Blood Requests**
    - List of blood requests made by the user.
    - Details for each request:
      - Donor's name
      - Blood type
      - Status of the request (pending, approved, rejected)
      - See contact information of the donor (if approved)
  - **6.2 Requests for Blood to Me**
    - List of blood requests received by the user.
    - Details for each request:
      - Requester's name
      - Blood type needed
      - Status of the request (pending, approved, rejected)
      - Option to accept/reject the request and change status
      - Display contact details of the requester (if approved)
  - **6.3 Change Password Page**
    - **Fields**:
      - Current password
      - New password (with confirmation)

### 7. Admin Dashboard

- **User Management**
  - **View and Manage User Accounts**: Activate/deactivate accounts, edit roles.

### 8. Change Password Page

- **Features**
  - **Fields**:
    - Current password
    - New password (with confirmation)

### 9. About Us

## Technologies Used

- **Frontend**: Next.js, Tailwind CSS, Ant Design
- **State Management**: Redux
- **HTTP Client**: Axios

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/blood-donation-website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blood-donation-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm install
   ```
