import './index.js';
import { expect, fixture, html } from '@open-wc/testing';
import { AwcButton } from './index.js';

describe('AwcButton', () => {
  describe('accessibility', () => {
    it('default is accessible', async () => {
      const el = await fixture<AwcButton>(
        html`<awc-button>My Button</awc-button>`,
      );
      await expect(el).to.be.accessible();
    });

    it('variations are accessible', async () => {
      const el = await fixture<AwcButton>(html`
        <awc-button variation="primary">My Button</awc-button>
        <awc-button variation="hollow">My Button</awc-button>
        <awc-button variation="transparent">My Button</awc-button>
      `);
      await expect(el).to.be.accessible();
    });

    it('disabled is accessible', async () => {
      const el = await fixture<AwcButton>(
        html`<awc-button disabled>My Button</awc-button>`,
      );
      const button = el.shadowRoot?.querySelector('button');

      await expect(el).to.be.accessible();
      await expect(button?.hasAttribute('disabled')).to.be.true;
    });
  });
});
