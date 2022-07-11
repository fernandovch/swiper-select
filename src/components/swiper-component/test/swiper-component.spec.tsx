import { newSpecPage } from '@stencil/core/testing';
import { SwiperComponent } from '../swiper-component';

describe('swiper-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwiperComponent],
      html: `<swiper-component></swiper-component>`,
    });
    expect(page.root).toEqualHtml(`
      <swiper-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swiper-component>
    `);
  });
});
