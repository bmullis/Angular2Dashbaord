import { SchedulerAppPage } from './app.po';

describe('scheduler-app App', function() {
  let page: SchedulerAppPage;

  beforeEach(() => {
    page = new SchedulerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
