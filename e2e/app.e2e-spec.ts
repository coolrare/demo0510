import { Demo0510Page } from './app.po';

describe('demo0510 App', () => {
  let page: Demo0510Page;

  beforeEach(() => {
    page = new Demo0510Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
