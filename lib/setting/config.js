require('dotenv').config()
exports.config = {
    'serverIp':process.env.SERVER_IP || '127.0.0.1',
    'serverPort': process.env.SERVER_PORT || 6000,
    'storage': process.env.STORAGE || '/Users/chris/Documents/work/ACR/storage'
}