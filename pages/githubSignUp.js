class GithubSignUp {
  get signUpLink() {
    return $(
      'a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]'
    );
  }
  get welcomeText() {
    return $(".js-warp-hide h1");
  }
  get emailInput() {
    return $("#email");
  }
  get continuePassBtn() {
    return $('button[data-continue-to="password-container"]');
  }
  get passwordInput() {
    return $("#password");
  }
  get continueUsernameBtn() {
    return $('button[data-continue-to="username-container"]');
  }
  get usernameInput() {
    return $("#login");
  }
  get continueFinalBtn() {
    return $('button[data-continue-to="opt-in-container"]');
  }
  get verifyAccount() {
    return $('button[data-continue-to="captcha-and-submit-container"]');
  }
  get welcomeMsg() {
    return $('span[data-target="typing-effect.content"]');
  }

  async clickSignUpLink() {
    await this.signUpLink.click();
  }
  async typeEmail(value) {
    await this.emailInput.addValue(value);
  }
  async clickContinueToPassword() {
    await this.continuePassBtn.click();
  }
  async typePassword(value) {
    await this.passwordInput.addValue(value);
  }
  async clickContinueToUsername() {
    await this.continueUsernameBtn.click();
  }
  async typeUsername(value) {
    await this.usernameInput.addValue(value);
  }
  async clickContinueFinal() {
    await this.continueFinalBtn.click();
  }
  async clickVerifyAccount() {
    await this.verifyAccount.click();
  }
}

export default new GithubSignUp();
