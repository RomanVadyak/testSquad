import { expect } from "@wdio/globals";

describe("Home task 2", () => {
  it("click API button", async () => {
    await browser.url("https://webdriver.io");

    const apiBtn = await $('nav a[href="/docs/api"]');
    await apiBtn.click();
    await browser.pause(2000);

    const sponsorBtn = await $('.footer__link-item[href="/docs/sponsor"]');
    await browser.pause(2000);
    await sponsorBtn.scrollIntoView();
    await browser.pause(2000);
    await sponsorBtn.saveScreenshot("sponsorbtn.png");

    let isDisplayedSponsorBtn = sponsorBtn.isDisplayed();
    console.log("sponsor button is displayed: " + isDisplayedSponsorBtn);
    await browser.pause(2000);

    const protocolCommandsBtn = await $(
      '.pagination-nav__link[href="/docs/api/protocols"]'
    );
    let displayedInViewport = await protocolCommandsBtn.isDisplayed();
    console.log("is protocol commands button visible: " + displayedInViewport);
    await browser.pause(2000);

    let clickable = await protocolCommandsBtn.isClickable();
    console.log("is protocol commands button clickable: " + clickable);
    await browser.pause(2000);

    let getHTML = await protocolCommandsBtn.getHTML();
    console.log("protocol commands button HTML: " + getHTML);
    await browser.pause(2000);
    await protocolCommandsBtn.click();
    await browser.pause(2000);

    await browser.waitUntil(
      async () => {
        return $("h2#webdriver-protocol").isDisplayed();
      },
      4000,
      "Text is not displayed"
    );
  });
});
