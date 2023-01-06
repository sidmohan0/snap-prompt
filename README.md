
# snap-prompt
Snapprompt

## Overview
Snapprompt is a Chrome extension that allows users to take a snapshot of an image or video and extract the text from it using OpenAI's API. The extracted text is displayed in a code block and can be copied to the clipboard.

## User Goals
Easily extract text from images and videos
Copy the extracted text to the clipboard
## User Stories
As a user, I want to be able to take a snapshot of an image or video, so that I can extract the text from it.

As a user, I want to be able to copy the extracted text to the clipboard, so that I can easily paste it into another document.

## Technical Requirements
Chrome extension that can be installed from the Chrome Web Store
Ability to take a snapshot of the current tab using the Chrome tabs API
Use of OpenAI's API to extract text from images
UI for displaying the extracted text in a code block and adding a copy button
## Technical Constraints
Only works in the Chrome browser
Requires an internet connection to use the OpenAI API
## Assumptions
The user has a valid OpenAI API key
The user is running the latest version of Chrome
