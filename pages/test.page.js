const testPageSelectors = {
    inputEditLinkSelector: "[href='/edit']",
    clickBtnSelector: "[href='/buttons']",
    fileLinkSelector:"[href='/file']",
    alertLinkSelector:"[href='/alert']",
    dropDownLinkSelector:"[href='/dropdowns']"
}


class TestPage {
    constructor(page) {
        this.page = page
    }

    async accessInputFields(){
      await this.page.click(testPageSelectors.inputEditLinkSelector)
    }
    async accessButtonPage(){
        await this.page.click(testPageSelectors.clickBtnSelector)
      }
      async accessFilePage(){
        await this.page.click(testPageSelectors.fileLinkSelector)
      }
      async accessAlertPage(){
        await this.page.click(testPageSelectors.alertLinkSelector)
      }
      async accessDropdownPage(){
        await this.page.click(testPageSelectors.dropDownLinkSelector)
      }

}

module.exports={TestPage,testPageSelectors}