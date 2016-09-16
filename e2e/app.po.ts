import { browser, element, by } from 'protractor/globals';

export class MyProjectFrontendPage {

  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.id('Mein Name')).getText();
  }
}
