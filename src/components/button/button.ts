import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './button.styles.js';

/**
 * An example button component
 *
 * @tag awc-button
 *
 * @csspart control - The button element
 *
 * @cssproperty [--awc-button-bg-color=#f0f0f0] - The background color of the button
 * @cssproperty [--awc-button-fg-color=#333] - The text color of the button
 * @cssproperty [--awc-button-border-color=transparent] - The border color of the button
 *
 * @slot - The main content for the button
 *
 */
export default class AwcButton extends LitElement {
  static override styles = styles;

  /** Changes the display of the button */
  @property()
  variation?: 'default' | 'primary' | 'hollow' | 'transparent';

  /** Controls the disabled property of the button */
  @property({ type: Boolean })
  disabled = false;

  override render() {
    return html`
      <button part="control" ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}

export { AwcButton };
