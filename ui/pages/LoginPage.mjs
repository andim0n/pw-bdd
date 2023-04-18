import { BasePage } from './BasePage'

export class LoginPage extends BasePage {
  constructor(page) {
    super(page)
  }

  async enterEmail(email) {
    await this.fill('#email', email)
  }

  async enterPassword(password) {
    await this.fill('#password', password)
  }

  async clickLoginButton() {
    await this.click('#login-button')
  }

  async login(email, password) {
    await this.enterEmail(email)
    await this.enterPassword(password)
    await this.clickLoginButton()
  }
}
