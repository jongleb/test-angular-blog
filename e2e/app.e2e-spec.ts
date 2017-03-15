import { TestAngularBlogPage } from './app.po';

describe('test-angular-blog App', function() {
  let page: TestAngularBlogPage;

  beforeEach(() => {
    page = new TestAngularBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
