import { ICaceresPage } from './app.po';

describe('i-caceres App', () => {
  let page: ICaceresPage;

  beforeEach(() => {
    page = new ICaceresPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
