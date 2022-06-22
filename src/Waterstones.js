class Waterstones {
    constructor(title) {
      this.title = title
      this.onLoan = false
    }
  
    isOnLoan() {
      return this.onLoan
    }
  
    checkIn() {
       if (!this.isOnLoan()) throw new Error('item is not currently on loan')
       this.onLoan = false
    }
  
    checkOut() {
      if (this.isOnLoan()) throw new Error('item is currently on loan')
      this.onLoan = true
    }
  }
  
  module.exports = Waterstones