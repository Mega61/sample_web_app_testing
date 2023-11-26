describe('weather_endpoint', function () {

  it('Can consult the weather endpoint', function (browser) {
    const page = browser.page.homePage()
    page
      .navigate()
      .waitForElementVisible('@cityNameInput')
      .sendKeys('@cityNameInput','Medellin')
      .sendKeys('@unitInput','metric')
      .click('@weatherButton')
      .assert.visible('@cityNameText', 'City has be consulted')
  })
})
