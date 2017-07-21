# angular-electron-starter
An angular starter kit based on electron.

## Features
- Webpack configuration
- Auto Reload
- Sass support
- Global styles + component styles
- tslint configuration
- production server
- electron setup
- electron-packager scripts

## Installation and usage
Open a terminal in the project folder and run the following commands.

**Install all required node dependencies:**
```
npm install
```

**Start the developer mode:**
```
npm start
```
The application starts and you'll see the app running. You can edit the source files and the app will be automatically updated. 

**Build the app for production:**
```
npm run package:win
```

This commands creates executable files for Windows in the `packages`-folder. There are also scripts for other operating systems in the `packages.json`-file.

