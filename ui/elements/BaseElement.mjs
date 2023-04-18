export class BaseElement {
  constructor(page, selector) {
    this.page = page
    this.selector = selector
  }

  async click() {
    await this.page.click(this.selector)
  }

  async fill(value) {
    await this.page.fill(this.selector, value)
  }

  async getText() {
    return await this.page.$eval(this.selector, element => element.textContent.trim())
  }

  async getAttribute(attribute) {
    return await this.page.$eval(this.selector, (element, attribute) => element.getAttribute(attribute), attribute)
  }

  async isVisible() {
    return !!(await this.page.$(this.selector))
  }
}
