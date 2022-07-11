import { newSpecPage } from '@stencil/core/testing';
import { InfoComponent } from '../info-component';

describe('info-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InfoComponent],
      html: `<info-component></info-component>`,
    });
    expect(page.root).toEqualHtml(`
      <info-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </info-component>
    `);
  });
});
