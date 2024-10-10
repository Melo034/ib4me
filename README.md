# Ib4me

**Ib4me** is a blockchain-based crowdfunding platform designed to help patients raise the necessary funds needed for life-saving treatments. By bringing communities together, Ib4me makes it easy for individuals to contribute and support those in need, offering both traditional and digital payment methods, including local and cryptocurrency options.

## Table of Contents
1. [Website Screenshots](#website-screenshots)
2. [Features](#features)
3. [Technology Overview](#technology-overview)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation Steps](#installation-steps)
5. [Usage](#usage)
6. [Performance](#performance)
7. [Security Considerations](#security-considerations)

## Website Screenshots
![Screenshot 2024-09-16 172212](https://github.com/user-attachments/assets/b7a20d14-47dc-4ae1-846c-33e775fca0c9)

![Screenshot 2024-09-16 172338](https://github.com/user-attachments/assets/07c048fc-1923-4fce-949e-1897b1417d88)

![Screenshot 2024-09-16 211206](https://github.com/user-attachments/assets/0c9c4b73-2331-4a97-9768-f725ef666465)

![Screenshot 2024-09-16 211240](https://github.com/user-attachments/assets/e2eec06a-7c18-4271-9f54-4a8a1dd375c4)

![Screenshot 2024-09-16 211412](https://github.com/user-attachments/assets/cd572147-8fa6-4b1f-913f-73fb99246a6a)

![Screenshot 2024-09-16 211553](https://github.com/user-attachments/assets/aa3fc637-78b7-4802-9fab-8e07ecd9ffea)

## Features
- **Local Payment Integration:** Supports donations via popular local payment methods such as Orange Money, Afrimoney, and Qmoney, making it easier for users in specific regions to contribute.
- **Cryptocurrency Donations:** Accepts donations through Blinks, allowing users to donate using cryptocurrency, thus expanding the accessibility of the platform to a global audience.
- **User Authentication:** Provides secure account creation, enabling users to specify the health conditions they are interested in supporting and join relevant communities.
- **Campaign Management:** Allows patients or their families to create fundraising campaigns, track donations, and manage updates to keep donors informed.
- **Responsive Frontend:** Developed using React with TypeScript, offering a smooth, dynamic, and responsive user experience across devices.
- **Backend API:** Built with Node.js and Express, offering robust server-side logic and well-defined API endpoints to handle various functionalities.
- **Database:** Utilizes MongoDB for scalable, flexible, and efficient data storage.
- **Notification System:** Includes an email and SMS notification system to keep donors and campaign creators updated about campaign progress and important updates.
- **Security Features:** Incorporates essential security measures, such as SSL encryption, data validation, and secure authentication methods, to protect user data and financial transactions.

## Technology Overview
- **Frontend:** React with TypeScript for a modern, maintainable, and scalable user interface.
- **Backend:** Node.js with Express for efficient handling of server-side logic and API endpoints.
- **Database:** MongoDB for non-relational, scalable data management.
- **API Testing:** Insomnia is used for API testing to ensure reliable and consistent performance of endpoints.
- **Blockchain Integration:** Uses Blinks for handling cryptocurrency donations, providing a secure and transparent way to track contributions on the blockchain.

## Getting Started

### Prerequisites
Ensure you have the following installed on your machine:
- **Node.js:** Version 14 or higher.
- **MongoDB:** For database management.
- **Insomnia:** For API testing and validation.

### Installation Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/Melo034/ib4me.git
    cd ib4me
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add your database connection string, API keys, and other necessary environment variables.
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Access the platform at `http://localhost:3000` in your browser.

## Usage
1. **Register an Account:** Sign up by providing basic details and selecting the health conditions or communities you are interested in supporting.
2. **Create a Campaign:** If you are a patient or representative, you can create a new fundraising campaign by filling out the required information, including the treatment details and funding goal.
3. **Donate:** Users can browse available campaigns and contribute via local payment options or cryptocurrency through Blinks.
4. **Track Progress:** Keep track of donation progress and receive updates through the platform's notification system.

## Performance
- **Fast Loading Times:** Optimized for speed with efficient code practices, lazy loading of assets, and minimized bundle sizes.
- **Efficient Database Queries:** Implements indexing and caching mechanisms to ensure quick data retrieval and optimal performance, even under high load conditions.
- **Scalable Architecture:** Designed to handle increasing numbers of users and donations without significant degradation in performance.

## Security Considerations
- **Data Encryption:** All sensitive data, including user information and payment details, are encrypted using industry-standard protocols.
- **Authentication and Authorization:** Implements JWT-based authentication and role-based access control to ensure secure access to resources.
- **Regular Security Audits:** Conducts regular security audits and updates dependencies to mitigate vulnerabilities.

## Live Demo

You can also explore a live version of the project here: [IB4ME Live Demo](https://hib4me-client.onrender.com/)

