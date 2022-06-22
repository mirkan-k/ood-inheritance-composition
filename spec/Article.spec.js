const Article = require('../src/Article.js')
const Author = require('../src/Waterstones.js').Author

describe("Article", () => {
  let article
  beforeEach(() => {
    article = new Article('My Lovely Book', new Author('Mirkan', '07123456789'))
  })

  describe('#constructor', () => {
    it('has a title', () => {
      expect(article.title).toEqual('My Lovely Book')
    })

    it('is not on loan', () => {
      expect(article.isOnLoan()).toEqual(false)
    })
  })

  describe('#checkOut', () => {
    it ('sets the article to be on loan', () => {
      article.checkOut()
      expect(article.isOnLoan()).toEqual(true)
    })

    it ('raises an error if the article is already on loan', () => {
      article.checkOut()
      expect(() => article.checkOut()).toThrowError('item is currently on loan')
    })
  })

  describe('#checkIn', () => {
    it ('sets the article to not be on loan', () => {
      article.checkOut()
      article.checkIn()
      expect(article.isOnLoan()).toEqual(false)
    })

    it ('raises an error if the article is not on loan', () => {
      expect(() => article.checkIn()).toThrowError('item is not currently on loan')
    })
  })

  describe('#getAuthorDetails', () => {
    it ('retrieves the Author detials', () => {
      const expected = {author: 'Mirkan', publisherNumber: '07123456789'}

      const result = article.getAuthorDetails()
      expect(result).toEqual(expected)
    })
  })

  describe('#setAuthor', () => {
    it ('sets the Author detials', () => {
      const authorName = 'Bob'
      const publisherNumber = '079...'

      const expected = { author: 'Bob', publisherNumber: '079...' }

      article.setAuthor(authorName, publisherNumber)
      expect(article.getAuthorDetails()).toEqual(expected)
    })
  })
})
