import { Before, After, setWorldConstructor } from '@cucumber/cucumber'
import CustomWorld from '../classes/CustomWorld.mjs'

setWorldConstructor(CustomWorld)

Before(async function () {
  await this.init()
})

After(async function () {
  await this.teardown()
})
