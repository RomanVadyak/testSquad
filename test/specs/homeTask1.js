import { expect } from "@wdio/globals";

describe("Home Task", () => {
  it("WebDriverIO task", async () => {
    await browser.url("https://webdriver.io");

    const clickAPI = await $('//a[text()="API"]');
    await clickAPI.click();
    browser.pause(4000);

    let currentUrl = await browser.getUrl();
    console.log("Current URL is: " + currentUrl);

    let pageTitle = await browser.getTitle();
    console.log("Page title is: " + pageTitle);

    const heading = await $("h1");
    let headingText = await heading.getText();
    console.log("Heading text is: " + headingText);

    const breadcrumbs = await $("span.breadcrumbs__link");
    let breadcrumbsText = await breadcrumbs.getText();
    console.log("Breadcrumbs text is: " + breadcrumbsText);

    const link = await $("a=WebDriver");
    let attr = await link.getAttribute("href");
    console.log("Attribute is: " + attr);

    const search = await $(".DocSearch-Button-Placeholder");
    await search.click();
    browser.pause(2000);

    const searchInput = await $("#docsearch-input");
    await searchInput.addValue("all is done");

    await searchInput.setValue("");
  });
});
