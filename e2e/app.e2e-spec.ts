import { ManletsPage } from './app.po';

describe('manlets App', () => {
  let page: ManletsPage;

  beforeEach(() => {
    page = new ManletsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
