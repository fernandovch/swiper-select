import { newE2EPage } from '@stencil/core/testing';

describe('info-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<info-component></info-component>');

    const element = await page.find('info-component');
    expect(element).toHaveClass('hydrated');
  });
});
