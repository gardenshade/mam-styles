# MAM Styles

A userscript written in CoffeeScript that allows locally developed CSS (via SASS) to be tested on MAM.

Eventually this might host some actual styles as well.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Ruby](http://rubyinstaller.org/)
- [Compass](http://compass-style.org/install/)

## Installation

- Make sure the prerequisites are installed on your system
- Clone this project to your computer
- Make sure your terminal window is open to this project folder, and run `npm install`
- Duplicate `edit_gulpfile.js` and rename it to `gulpfile.js`
- Open Firefox and create a new userscript
    - Set the name exactly to `Custom Styles for MAM`
    - Set the includes to `https://myanonamouse.net/*` & `https://www.myanonamouse.net/*`
- Open `gulpfile.js` and set the value of `YOUR_DIR` to the path of your Greasemonkey scripts directory
- If you didn't set the local Greasemonkey location, you'll probably get an unnecessary folder showing up in your project directory until I get around to fixing this
- Make sure your terminal window is open to this project folder, and run `gulp`
