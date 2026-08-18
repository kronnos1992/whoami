import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-heading: "Space Grotesk", "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
    --font-body: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
    --font-mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", Consolas, monospace;
    --gradient-accent: linear-gradient(120deg, #7c3aed 0%, #a855f7 45%, #22d3ee 100%);
    --gradient-accent-soft: linear-gradient(120deg, rgba(124, 58, 237, 0.16) 0%, rgba(34, 211, 238, 0.12) 100%);
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 96px;
  }

  body {
    font-family: var(--font-body);
    background: var(--color-bg);
    color: var(--color-text);
    font-size: 1rem;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    transition: background-color 0.35s ease, color 0.35s ease;
  }

  #root {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    color: var(--color-text);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  h1 { font-size: clamp(2.25rem, 6vw, 4rem); }
  h2 { font-size: clamp(1.6rem, 4vw, 2.4rem); }
  h3 { font-size: 1.25rem; }

  p { margin: 0; }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover { color: var(--color-secondary); }

  img { max-width: 100%; display: block; }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: 1rem;
  }

  ::selection {
    background: var(--color-primary);
    color: #fff;
  }

  /* Accessible focus states */
  :focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* Skip link for keyboard users */
  .skip-link {
    position: fixed;
    top: -100%;
    left: 1rem;
    z-index: 10000;
    padding: 0.75rem 1.25rem;
    background: var(--color-primary);
    color: #fff;
    border-radius: 8px;
    font-weight: 600;
    transition: top 0.2s ease;
  }

  .skip-link:focus {
    top: 1rem;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-bg);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-borderStrong);
    border-radius: 8px;
    border: 2px solid var(--color-bg);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }

  .gradient-text {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Boot screen */
  .boot-screen {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: #0d0c14;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s ease;

    &.fade-out {
      opacity: 0;
      pointer-events: none;
    }
  }

  .boot-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .boot-messages {
    margin-top: 1.5rem;
  }

  .boot-message {
    font-family: var(--font-mono);
    font-size: 0.95rem;
    margin-bottom: 1rem;
    color: var(--color-primary);
    min-height: 1.5rem;
  }

  .boot-progress {
    width: min(340px, 80vw);
    height: 4px;
    background: #262238;
    border-radius: 9999px;
    overflow: hidden;
  }

  .boot-progress-bar {
    height: 100%;
    background: var(--gradient-accent);
    border-radius: 9999px;
    transition: width 0.3s ease;
  }

  .boot-meta {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    color: #868098;
    text-transform: uppercase;
    width: min(340px, 80vw);
  }

  .boot-skip {
    margin-top: 1.5rem;
    background: transparent;
    border: 1px solid #262238;
    color: #868098;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.2s ease;

    &:hover {
      color: var(--color-primary);
      border-color: var(--color-primary);
    }
  }
`;
