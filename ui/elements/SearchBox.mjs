import { BaseElement } from './BaseElement'

export class SearchBox extends BaseElement {
  constructor(page) {
    super(page, '#search-box')
  }

  async search(query) {
    await this.fill(query)
    await this.page.keyboard.press('Enter')
  }
}
