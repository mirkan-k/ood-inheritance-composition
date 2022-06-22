const Waterstones = require('./Waterstones').Waterstones

class Newspaper extends Waterstones {
  isNotAvailable() {
    throw new Error('newspapers are not available for loan')
  }

  checkIn() {
    throw this.isNotAvailable()
  }

  checkOut() {
    throw this.isNotAvailable()
  }
}

module.exports = Newspaper
