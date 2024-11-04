import LoginPage from "./../../pages/invalidLogin.js";

describe("5 Test cases", () => {
  it("invalid Sign in", async () => {
    await browser.url("https://github.com");

    await LoginPage.clickMainSignIn();
    await browser.pause(2000);
    await LoginPage.setUsernameInput("marshal");
    await LoginPage.setPasswordInput("123321");
    await browser.pause(2000);
    await LoginPage.clickOnSignIn();
    await browser.pause(2000);
    console.log("is alert box visible: " + LoginPage.isAlertBoxVisible());
  });
    it("GitHub pricing plans", async () => {
      await browser.url("https://github.com");

      const pricingLink = await $('.Link--secondary[href="/pricing"]');
      await pricingLink.scrollIntoView();
      await pricingLink.click();
      const titlePriceLink = await browser.getTitle();
      console.log(titlePriceLink);
      await expect(browser).toHaveTitle(
        "Pricing · Plans for every developer · GitHub"
      );
    });

    it("Invalid Sign in", async () => {
      await browser.url("https://github.com");

      const signInBtn = await $('.HeaderMenu-link--sign-in[href="/login"]');
      await signInBtn.click();
      await browser.pause(2000);
      const loginInput = await $("#login_field");
      await loginInput.setValue("marshal");
      const passwordInput = $("#password");
      await passwordInput.setValue("123321");
      const submitBtn = await $(".js-sign-in-button");
      await submitBtn.click();
      await browser.pause(2000);
      const alertTxt = await $("#js-flash-container");
      let isDisplayedAlertTxt = await alertTxt.isDisplayed();
      console.log("Is alert displayed: " + isDisplayedAlertTxt);
    });

    it("Navigate to github docs page", async () => {
      await browser.url("https://github.com");

      const docsBtn = await $('.lh-condensed [href="https://docs.github.com"]');
      await docsBtn.click();
      await browser.pause(2000);
      const docsTitle = await $("#title-h1");
      await expect(docsTitle).toHaveText("GitHub Docs");
    });

    it("GitHub sitemap url check", async () => {
      await browser.url("https://github.com");

      const siteMapBtn = await $('.Link--secondary[href="/sitemap"]');
      await siteMapBtn.click();
      await browser.pause(2000);
      const currentUrl = await browser.getUrl();
      await expect(currentUrl).toContain("sitemap");
    });

    it("Search for Ajax", async () => {
      await browser.url("https://github.com");

      const sideBarSearch = await $(".header-search-button");
      await sideBarSearch.click();
      await browser.pause(2000);
      const searchInput = await $("#query-builder-test");
      await searchInput.setValue("Ajax");
      await browser.pause(2000);
      await browser.keys("Enter");
      await browser.pause(3000);
    });
});
