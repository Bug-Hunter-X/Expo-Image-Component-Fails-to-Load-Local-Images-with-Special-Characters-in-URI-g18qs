# Expo Image Component Issue with Special Characters in Local URIs

This repository demonstrates a bug where the Expo `Image` component fails to load local images when their URIs contain special characters (e.g., spaces, parentheses).  The image URI is correctly generated and accessible but the component doesn't render the image.  No error messages are logged to the console, making debugging difficult.

The `bug.js` file contains the buggy implementation, and `bugSolution.js` shows a workaround.