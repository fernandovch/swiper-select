import { newE2EPage } from '@stencil/core/testing';

describe('swiper-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swiper-component></swiper-component>');

    const element = await page.find('swiper-component');
    expect(element).toHaveClass('hydrated');
  });
});
