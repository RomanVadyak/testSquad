class DouPage {
  get salaryBtn() {
    return $('a[href="https://jobs.dou.ua/salaries/"]');
  }
  get firstQuartile() {
    return $("#q1 h3");
  }
  get jobsBtn() {
    return $('a[href="https://jobs.dou.ua/"]');
  }
  get searchBtn() {
    return $(".btn-search");
  }
  get quickTransition() {
    return $(".example");
  }
  get gameDevLink() {
    return $('a[href="https://gamedev.dou.ua/?from=button"]');
  }

  async clickOnSalaryBtn() {
    await this.salaryBtn.click();
  }

  async clickOnJobsBtn() {
    await this.jobsBtn.click();
  }

  async clickOnSearchBtn() {
    await this.searchBtn.click();
  }

  async clickOnGameDevLink() {
    await this.gameDevLink.click();
  }
}
export default new DouPage();
