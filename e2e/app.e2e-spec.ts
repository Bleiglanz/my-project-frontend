import { MyProjectFrontendPage } from './app.po';

describe('my-project-frontend App', function() {
  let page: MyProjectFrontendPage;

  beforeEach(() => {
    page = new MyProjectFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
