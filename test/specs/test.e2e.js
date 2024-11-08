//import { expect } from "@wdio/globals";
import assert from "assert/strict";

describe("Webdriverio main page", () => {
  xit("Should have correct title", async () => {
    await browser.url("https://webdriver.io/");

    const title = await browser.getTitle();
    console.log(title);

    await expect(browser).toHaveTitle(
      "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    );
  });

  xit("Should show addValue command", async () => {
    await browser.url("https://the-internet.herokuapp.com/login");
    let input = await $("#username");
    await input.addValue("hello");
    await browser.pause(2000);

    await input.addValue(123);
    await browser.pause(2000);

    await expect(input).toHaveValue("hello123");
  });

  xit("Should show setValue command", async () => {
    await browser.url("https://the-internet.herokuapp.com/login");
    let input = await $("#username");
    await input.setValue("world");
    await browser.pause(2000);

    console.log(await input.getValue());
    await expect(input).toHaveValue("world");
  });
  xit("Should show click command", async () => {
    await browser.url("https://the-internet.herokuapp.com/login");

    let loginBtn = await $(".radius");
    await browser.pause(2000);
    await loginBtn.click();
    await browser.pause(4000);

    let inputUsername = await $("#username");
    await inputUsername.addValue("tomsmith");
    await browser.pause(2000);

    let inputPassword = await $("#password");
    await inputPassword.addValue("SuperSecretPassword!");
    await browser.pause(2000);

    await loginBtn.click();
    await browser.pause(4000);
  });

  xit("Should show getAttribute command", async () => {
    await browser.url("https://dou.ua/search");

    let inputSearch = await $("#gsc-i-id1");
    let attr = await inputSearch.getAttribute("aria-label");
    console.log("Placeholder attribute is: " + attr);

    await inputSearch.setValue("Cat");
    attr = await inputSearch.getValue();
    await browser.pause(2000);
    console.log("Value attribute is: " + attr);
  });

  xit("Should show getLocation command", async () => {
    await browser.url("https://dou.ua");

    let inputSearch = await $("#txtGlobalSearch");
    let location = await inputSearch.getLocation();
    console.log("Location is: " + location);

    let xLocation = await inputSearch.getLocation("x");
    console.log("Location by x is: " + xLocation);
  });

  xit("Should show getText command", async () => {
    await browser.url("https://webdriver.io");

    let subtitle = await $(".hero__subtitle");
    console.log("Subtitle text is: " + (await subtitle.getText()));
  });

  xit("if element is clickable", async () => {
    await browser.url("https://webdriver.io");

    const blogButton = await $('.button[href="/docs/gettingstarted"]');
    let clickable = await blogButton.isClickable();
    console.log("is clickable: " + clickable);
  });

  xit("if element is displayed", async () => {
    await browser.url("https://webdriver.io");

    const blogButton = await $('.button[href="/docs/gettingstarted"]');
    let isDisplayed = await blogButton.isDisplayed();
    console.log("is displayed: " + isDisplayed);
  });

  xit("if element is visible", async () => {
    await browser.url("https://webdriver.io");

    const blogButton = await $('.button[href="/docs/gettingstarted"]');
    let displayedInViewport = await blogButton.isDisplayedInViewport();
    console.log("is displayed in viewport: " + displayedInViewport);

    const footer = await $('.footer__link-item[href="/docs/gettingstarted]');
    let footerDisplayedInViewport = await footer.isDisplayedInViewport();
    console.log(
      "is footer link displayed in viewport: " + footerDisplayedInViewport
    );
  });

  xit("if element is enabled", async () => {
    await browser.url("https://webdriver.io");

    const getStartedButton = await $('.button[href="/docs/gettingstarted"]');
    let isEnabled = await getStartedButton.isEnabled();
    console.log("is button enabled: " + isEnabled);
  });

  xit("if element is focused", async () => {
    await browser.url("https://webdriver.io");

    const getStartedButton = await $('.button[href="/docs/gettingstarted"]');
    let isFocused = await getStartedButton.isFocused();
    console.log("is button focused: " + isFocused);
    await browser.pause(2000);
    await getStartedButton.click();
    console.log("is getting started button focused after click: " + isFocused);
    await browser.pause(2000);
  });

  xit("should show movement to element action", async () => {
    await browser.url("https://webdriver.io");

    const getStartedLink = await $(
      '.footer__link-item[href="/docs/gettingstarted"]'
    );
    await browser.pause(2000);
    await getStartedLink.scrollIntoView();
    await browser.pause(2000);
  });

  xit("should show save screenshot command", async () => {
    await browser.url("https://webdriver.io");

    const getStartedLink = await $(
      '.footer__link-item[href="/docs/gettingstarted"]'
    );
    await browser.pause(2000);
    await getStartedLink.scrollIntoView();
    await browser.pause(2000);
    await getStartedLink.saveScreenshot("linkScreenshot.png");
  });

  xit("should switch to another window", async () => {
    await browser.url("https://webdriver.io");

    await browser.newWindow("https://google.com");
    await browser.pause(2000);

    await browser.switchWindow("https://webdriver.io");
    await browser.pause(2000);
  });

  xit("should show waitUntil command", async () => {
    await browser.url("https://webdriver.io");

    await browser.waitUntil(
      async () => {
        return $('.button[href="/docs/gettingstarted"]').isDisplayed();
      },
      5000,
      "Button is not displayed"
    );
  });

  xit("should get HTML for certain elements", async () => {
    await browser.url("https://webdriver.io");

    const outerHTML = await $(".dropdown__menu").getHTML();
    console.log("outerHTML: " + outerHTML);

    const innerHTML = await $(".dropdown__menu").getHTML(false);
    console.log("innerHTML: " + innerHTML);

  });
});
