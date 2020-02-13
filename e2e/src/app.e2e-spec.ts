import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to APM!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
  it('timer and parent seconds should match', function () {
    let parent = element(by.tagName(parentTag));
    let message = parent.element(by.tagName('app-countdown-timer')).getText();
    browser.sleep(10); // give `seconds` a chance to catchup with `message`
    let seconds = parent.element(by.className('seconds')).getText();
    expect(message).toContain(seconds);
  });
  
  it('should stop the countdown', function () {
    let parent = element(by.tagName(parentTag));
    let stopButton = parent.all(by.tagName('button')).get(1);
  
    stopButton.click().then(function() {
      let message = parent.element(by.tagName('app-countdown-timer')).getText();
      expect(message).toContain('Holding');
    });
  });
});
