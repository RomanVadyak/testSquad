class GitHubSecondTask {
  get subscribeLink() {
    return $('a[href="https://resources.github.com/newsletter/"]');
  }
  get newsletterTxt() {
    return $("#hero-section-brand-heading");
  }
  get workEmailInput() {
    return $('input[type="email"]');
  }
  get selectCountry() {
    return $("#country");
  }
  get selectCountry() {
    return $("#country");
  }
  get optionalCountry() {
    return $('option[value="UA"]');
  }
  get checkbox() {
    return $("#gated-agree-marketingEmailOptin1");
  }
  get submitBtn() {
    return $('button[type="submit"]');
  }
  get thanksForSubscription() {
    return $("#hero-section-brand-heading");
  }

  async clickOnSubscribeLink() {
    await this.subscribeLink.click();
  }
  async typeWorkEmaleInput(value) {
    await this.workEmailInput.addValue(value);
  }
  async clickOnCountry() {
    await this.selectCountry.click();
  }
  async clickSelectCountry() {
    await this.selectCountry.click();
  }
  async ukraineItIs() {
    await this.optionalCountry.click();
  }
  async clickCheckbox() {
    await this.checkbox.click();
  }
  async clickSubmitBtn() {
    await this.submitBtn.click();
  }
}
export default new GitHubSecondTask();
