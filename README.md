# Memory Card Game

A simple memory card game built with React and TypeScript.

## Description

This is a classic memory card game where players need to match pairs of cards. The game features:
- Card flipping animation
- Match validation
- Prevention of invalid moves

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [your-repository-url]
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

## How to Play

1. Click on any card to reveal it
2. Click on a second card to find a match
3. If the cards match, they stay face up
4. If they don't match, both cards will flip face down after 1 second
5. Continue until all pairs are matched

## Tech Stack

- React
- TypeScript
- Vite

## Project Structure

```
memory-card/
├── src/
│   ├── components/
│   │   ├── Card.tsx
│   │   └── GameBoard.tsx
│   ├── memory.data.ts
│   └── App.tsx
```

## Contributing

Feel free to submit issues and enhancement requests!