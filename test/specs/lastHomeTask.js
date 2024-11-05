import GitHubSignUp from "./../../pages/githubSignUp.js";
import GitHubSecondTask from "./../../pages/gitHubsecond.js";

describe("GitHub first task", () => {
  it("Sign up on GitHub", async () => {
    await browser.url("https://github.com");

    await GitHubSignUp.clickSignUpLink();
    await browser.pause(2000);

    expect(GitHubSignUp.welcomeText).toHaveValue(
      "Welcome to GitHub! Let's begin the adventure"
    );
    expect(GitHubSignUp.welcomeText).toBeDisplayed();

    await GitHubSignUp.typeEmail("example@123qwe.com");
    await browser.pause(2000);

    await GitHubSignUp.clickContinueToPassword();
    await browser.pause(2000);

    await GitHubSignUp.typePassword("123_QwErTy");
    await browser.pause(2000);

    await GitHubSignUp.clickContinueToUsername();
    await browser.pause(2000);

    await GitHubSignUp.typeUsername("AqaIsForMe");
    await browser.pause(2000);

    await GitHubSignUp.clickContinueFinal();
    await browser.pause(2000);

    //await GitHubSignUp.clickVerifyAccount();
    await browser.pause(2000);

    expect(GitHubSignUp.welcomeMsg).toBeDisplayed();
  });

  it("GitHub second task", async () => {
    await browser.url("https://github.com");

    await GitHubSecondTask.subscribeLink.scrollIntoView();
    await GitHubSecondTask.clickOnSubscribeLink();
    await browser.pause(2000);
    let resources = browser.getUrl();
    expect(resources).toHaveValue("resources.github.com");
    await browser.pause(2000);
    expect(GitHubSecondTask.newsletterTxt).toBeDisplayed();

    await GitHubSecondTask.typeWorkEmaleInput("marshal@123qwe.com");
    await browser.pause(2000);

    await GitHubSecondTask.clickOnCountry();
    await browser.pause(2000);

    await GitHubSecondTask.clickSelectCountry();
    await browser.pause(2000);

    await GitHubSecondTask.ukraineItIs();
    await browser.pause(2000);

    await GitHubSecondTask.clickCheckbox();
    await browser.pause(2000);

    await GitHubSecondTask.clickSubmitBtn();
    await browser.pause(2000);
    await GitHubSecondTask.thanksForSubscription.isDisplayed();
  });
});
