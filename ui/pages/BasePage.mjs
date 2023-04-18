export class BasePage {
  constructor(page) {
    this.page = page
  }

  async goto(url) {
    await this.page.goto(url)
  }

  async getTitle() {
    return await this.page.title()
  }

  async getUrl() {
    return await this.page.url()
  }

  async click(selector) {
    await this.page.click(selector)
  }

  async fill(selector, value) {
    await this.page.fill(selector, value)
  }

  async getText(selector) {
    return await this.page.$eval(selector, element => element.textContent.trim())
  }

  async getAttribute(selector, attribute) {
    return await this.page.$eval(selector, (element, attribute) => element.getAttribute(attribute), attribute)
  }
}
