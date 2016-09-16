import { MyProjectFrontendPage } from './app.po';

describe('my-project-frontend App', function() {
  let page: MyProjectFrontendPage;

  beforeEach(() => {
    page = new MyProjectFrontendPage();
  });

  it('Header ist mein Name', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual("Anton's Seite");
  });
});
