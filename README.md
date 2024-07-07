

## Project Title

Nabeah website

## Description

This project is a simple React-based website designed to provide a user-friendly interface for creating exams. The website includes a header, a footer, and functionality to submit code and create new exams.

## Features

- **Header**: Displays the website logo.
- **Footer**: Provides links to "Contact Us," "Terms and Conditions," and "About Nabeih" pages, along with the website logo.
- **Main Content**: Includes components for submitting code, a label, and a button to create a new exam.
- **Routing**: Uses state management to navigate between pages.



## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/react-exam-website.git
   cd react-exam-website
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Run the project**:
   ```sh
   npm start
   ```

## Components

### Header

Located in `App.js`, the `Header` component displays the website logo.

### Footer

Located in `App.js`, the `Footer` component includes navigation links and the website logo.

### Box

Imported from `home_header.js`, this component is displayed at the top of the main content area.

### Submit_code

Imported from `Submit_code.js`, this component is used for submitting code.

## Usage

- **Submit Code**: Use the `Submit_code` component to submit your code.
- **Create Exam**: Click on the "اصنع اختبار" button to create a new exam. This will set the state `gotopage` to `true`, which can be used for navigation or rendering different components based on the state.

## Styling

The website is styled using `index.css`. Ensure your styles are properly scoped to avoid conflicts.

## Screenshots

![Alt text](https://github.com/arwaalkhathlan/task-1/blob/dad95b2cb816c6f40fc3cb727405492069591b72/Readme_assets/Screenshot%202024-07-07%20085202.png)

![Alt text](Readme_assets\Screenshot 2024-07-07 085213.png)
![Alt text](Readme_assets\Screenshot 2024-07-07 085220.png)

