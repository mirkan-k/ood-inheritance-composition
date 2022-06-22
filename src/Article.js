const { Waterstones, Author } = require('./Waterstones')

class Article extends Waterstones {
  constructor(title, author) {
    super(title),
    this.author = author
  }

  setAuthor(name, telephoneNum) {
    if (name !== null && 
        telephoneNum !== null) {
          this.author.setName(name)
          this.author.setPublisherTelephoneNum(telephoneNum)
    }
    else {
      throw new Error('sorry but at least on of your inputs were invalid')
    }
  }

  getAuthorDetails() {
    return this.author.getDetails()
  }
}

module.exports = Article
