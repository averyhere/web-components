import { css } from 'lit';

export default css`
  :host {
    --awc-button-bg-color: #f0f0f0;
    --awc-button-fg-color: #333;
    --awc-button-border-color: transparent;

    display: inline-flex;
  }

  button {
    cursor: pointer;
    background-color: var(--awc-button-bg-color);
    border: 1px solid var(--awc-button-border-color);
    border-radius: 4px;
    color: var(--awc-button-fg-color);
    padding: 8px 16px;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  :host([variation='primary']) {
    --awc-button-bg-color: #024996;
    --awc-button-fg-color: white;
    --awc-button-border-color: #024996;
  }

  :host([variation='hollow']) {
    --awc-button-bg-color: transparent;
    --awc-button-fg-color: #024996;
    --awc-button-border-color: #024996;
  }

  :host([variation='transparent']) {
    --awc-button-bg-color: transparent;
    --awc-button-fg-color: #024996;
    --awc-button-border-color: transparent;
  }
`;
