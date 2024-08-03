# OrdinalsBot Frontend Assessment

This repository contains the code for the frontend assessment project completed for the frontend developer role at OrdinalsBot.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)

## Features

- View the available and transferable balance of any BRC20 token.
- Render relevant order information on the page.
- Connect a browser wallet.
- View current Bitcoin block and current price.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- nvm (Node Version Manager) installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/naseeb88900/ordinalsbot-assessment.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ordinalsbot-assessment
    ```

3. Use the correct Node.js version:

    ```bash
    nvm use
    ```

    If you don't have the required version of Node.js installed, you can install it using:

    ```bash
    nvm install
    ```

4. Install dependencies:

    ```bash
    npm install
    ```

5. Set up environment variables:

    Create a `.env.local` file in the root directory and add the following:

    ```env
    API_KEY=your_api_key
    WALLET_ADDRESS=your_brc20_wallet_address
    ```

6. Start the development server:

    ```bash
    npm run dev
    ```

7. Open your browser and navigate to `http://localhost:3000` to access the assessment.

## Project Structure

- `public/`: Static assets like images, fonts, and other resources.
- `src/app`: App Router.
- `src/styles/`: Stylesheets and Tailwind CSS configuration files.
- `src/lib/`: Utility functions and helper modules.
- `src/constants`: Constants used throughout the application.
