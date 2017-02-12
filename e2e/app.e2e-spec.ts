import { Unrav0204Page } from './app.po';

describe('unrav0204 App', function() {
  let page: Unrav0204Page;

  beforeEach(() => {
    page = new Unrav0204Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
