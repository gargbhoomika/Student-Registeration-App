import { StudentRegistrationAppPage } from './app.po';

describe('student-registration-app App', function() {
  let page: StudentRegistrationAppPage;

  beforeEach(() => {
    page = new StudentRegistrationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
