import { browser, element, by } from 'protractor';

export class Unrav0204Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
