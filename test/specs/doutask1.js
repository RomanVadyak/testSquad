import DouPage from "./../../pages/doutask.js";
import GameDevPage from "./../../pages/gameDev.js";

describe("Dou.ua Task", () => {
  it("Home Task", async () => {
    await browser.url("https://dou.ua");

    await DouPage.clickOnSalaryBtn();
    await browser.pause(2000);

    expect(DouPage.firstQuartile).toHaveValue("I Квартиль");
    await DouPage.clickOnJobsBtn();
    await browser.pause(2000);
    expect(DouPage.searchBtn).toBeDisplayed();

    await DouPage.clickOnSearchBtn();
    await browser.pause(2000);

    expect(DouPage.quickTransition).toHaveValue("Швидкий перехід:");
    await browser.pause(2000);

    await DouPage.clickOnGameDevLink();
    await browser.pause(2000);

    expect(GameDevPage.news).toHaveValue("Новини");
    expect(GameDevPage.blogs).toHaveValue("Блоги");

    await GameDevPage.globalSearchInput("stalker");
    await browser.pause(2000);
    await browser.keys("Enter");
    await browser.pause(2000);

    await GameDevPage.clearInputBtn();
    await browser.pause(2000);
  });
});
