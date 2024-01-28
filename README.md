# TBC X USAID

![Project Logo](./src/assets/img/logo.svg)

Visit official website to explore courses and start your journey in the dynamic world of technology.

[Live](https://tbc-x-usaid.netlify.app/)

## 🛠️ Technologies Used

- [Sass](https://sass-lang.com/)
- [npm](https://www.npmjs.com/)
- [Parcel](https://parceljs.org/)

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

#### Clone repository

Clone this repository to your local machine using the following command:

```bash
git clone git@github.com:Kriss1s/TBCXUSAID.git
```

#### Install the dependencies

Install the dependencies using the following command:

```bash
npm install
```

### 🔥 Start the Project

#### Development Mode

To run the project in development mode with live reloading, use the following command:

```bash
npm start
```

This will launch the development server, and you can view your project at http://localhost:1234

#### Production Build

For a production-ready build, execute:

```bash
npm run build
```

This will generate a dist directory with optimized and minified files ready for deployment.

## File Structure

- **dist/**: Compiled files (output)

- **node_modules/**: Project dependencies

- **src/**: Source code

  - **assets/**: Project assets
  - **sass/**: Stylesheets written in Sass
    - **abstracts/**: Abstracts (mixins, variables)
      - \_mixins.scss
      - \_variables.scss
    - **base/**: Base styles (reset, standart styles)
      - \_base.scss
      - \_reset.scss
    - **components/**: Reusable components
      - \_buttons.scss
      - \_card.scss
      - \_carousel.scss
      - \_question_box.scss
    - **layout/**: Layout styles
      - \_footer.scss
      - \_header.scss
      - \_main.scss
    - **static/**: Static styles
      - index.scss
  - **JS/**: JavaScript files
    - carousel.min.js
    - controller.js
    - humburgerMenu.min.js
    - question.min.js

- **index.html**: HTML entry point

- **.gitignore**: Git ignore file

- **.parcelrc**: Parcel configuration file

- **ChangeLog.md**: Change log

- **package-lock.json**: npm package lock file

- **package.json**: Project configuration and dependencies

- **README.md**: Project README file
