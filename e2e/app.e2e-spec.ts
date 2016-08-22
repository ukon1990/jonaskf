import { Jonaskfv2Page } from './app.po';

describe('jonaskfv2 App', function() {
  let page: Jonaskfv2Page;

  beforeEach(() => {
    page = new Jonaskfv2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
