import { DidntRedditPage } from './app.po';

describe('didnt-reddit App', () => {
  let page: DidntRedditPage;

  beforeEach(() => {
    page = new DidntRedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
