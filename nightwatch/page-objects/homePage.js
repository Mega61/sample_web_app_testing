module.exports = {
    url: 'http://localhost:3000',
    elements: {
      cityNameInput: { selector: '//input[@name="cityName"]', locateStrategy: 'xpath' },
      unitInput: { selector: '//input[@name="unit"]', locateStrategy: 'xpath' },
      weatherButton: { selector: '//button[@id="weatherButton"]', locateStrategy: 'xpath' },
      cityNameText: { selector: '//p[contains(text(),"City Name: ")]', locateStrategy: 'xpath' }
    }
  }
