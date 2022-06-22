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

class Author {
    constructor(name, telephoneNum) {
        this.name = name,
        this.telephoneNum = telephoneNum
    }

    setName(name) {
        this.name = name
    }

    setPublisherTelephoneNum(num) {
        this.telephoneNum = num
    }

    getDetails() {
        return {author: this.name, publisherNumber: this.telephoneNum}
    }
}

module.exports = { 
    Waterstones,
    Author
}