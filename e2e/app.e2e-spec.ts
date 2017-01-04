import { LearnAngular2fromScratchPage } from './app.po';

describe('learn-angular2from-scratch App', function() {
  let page: LearnAngular2fromScratchPage;

  beforeEach(() => {
    page = new LearnAngular2fromScratchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello Angular');
  });
});
