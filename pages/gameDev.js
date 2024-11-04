class GameDevPage {
  get news() {
    return $('a[href="https://gamedev.dou.ua/news/?from=fpnews"]');
  }
  get blogs() {
    return $('a[href="https://gamedev.dou.ua/blogs/?from=fpcol"]');
  }
  get globalSearch() {
    return $("#txtGlobalSearch");
  }
  get clearBtn() {
    return $('a[href="javascript:void(0)"]');
  }

  async globalSearchInput(value) {
    await this.globalSearch.addValue(value);
  }

  async clearInputBtn() {
    await this.clearBtn.click();
  }
}

export default new GameDevPage();
