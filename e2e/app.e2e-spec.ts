import { PlotPage } from './app.po';

describe('plot App', () => {
  let page: PlotPage;

  beforeEach(() => {
    page = new PlotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
