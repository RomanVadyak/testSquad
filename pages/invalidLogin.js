class LoginPage {
  get signInMainBtn() {
    return $('.HeaderMenu-link--sign-in[href="/login"]');
  }
  get loginInput() {
    return $("#login_field");
  }
  get passwordInput() {
    return $("#password");
  }
  get signInBtn() {
    return $(".js-sign-in-button");
  }
  get alertBox() {
    return $(".js-flash-alert");
  }

  async clickMainSignIn() {
    await this.signInMainBtn.click();
  }

  async setUsernameInput(value) {
    await this.loginInput.addValue(value);
  }

  async setPasswordInput(value) {
    await this.passwordInput.addValue(value);
  }

  async clickOnSignIn() {
    await this.signInBtn.click();
  }

  async isAlertBoxVisible() {
    await this.alertBox.isVisible();
  }
}
export default new LoginPage();
