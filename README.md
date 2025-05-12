# AI Text Detector

A web application that analyzes text to detect AI-generated content. The application provides a percentage score of how likely the text is AI-generated and highlights potentially AI-generated sections.

## Features

- Text analysis for AI detection
- Dark/Light theme toggle
- Real-time text highlighting
- Percentage score of AI-generated content
- Modern, responsive UI

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Usage

1. Paste your text into the input field
2. Click "Analyze Text" to process the content
3. View the results showing:
   - Overall percentage of AI-generated content
   - Highlighted sections indicating AI-generated text
4. Toggle between dark and light themes using the switch in the top-right corner

## Note

This is currently using a mock implementation for the AI detection. To implement actual AI detection, you'll need to:

1. Sign up for an AI detection API service
2. Replace the mock implementation in `App.tsx` with actual API calls
3. Add your API key to the environment variables

## Technologies Used

- React
- TypeScript
- Material-UI
- Axios (for API calls) 