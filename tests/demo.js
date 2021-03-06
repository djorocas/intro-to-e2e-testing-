module.exports = {
    '@tags': ['demo'],
    'Demo test Google': function (client) {
        client
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .assert.title('Google')
            .assert.visible('input[type=text]')
            .setValue('input[type=text]', 'Testing')
            .waitForElementVisible('input[name=btnK]', 1000)
            .click('input[name=btnK]')
            .pause(5000)
    }
};

// Document upload
// .setValue('input[type="file"]', require('path').resolve(__dirname + '/../assets/Smartseries.pdf'))