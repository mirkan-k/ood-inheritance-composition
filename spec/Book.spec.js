const Book = require('../src/Book.js')
const Author = require('../src/Waterstones.js').Author

describe("Book", () => {
  let book
  beforeEach(() => {
    book = new Book('My Lovely Book', new Author('Mirkan', '07123456789'))
  })

  describe('#constructor', () => {
    it('has a title', () => {
      expect(book.title).toEqual('My Lovely Book')
    })

    it('is not on loan', () => {
      expect(book.isOnLoan()).toEqual(false)
    })
  })

  describe('#checkOut', () => {
    it ('sets the book to be on loan', () => {
      book.checkOut()
      expect(book.isOnLoan()).toEqual(true)
    })

    it ('raises an error if the book is already on loan', () => {
      book.checkOut()
      expect(() => book.checkOut()).toThrowError('item is currently on loan')
    })
  })

  describe('#checkIn', () => {
    it ('sets the book to not be on loan', () => {
      book.checkOut()
      book.checkIn()
      expect(book.isOnLoan()).toEqual(false)
    })

    it ('raises an error if the book is not on loan', () => {
      expect(() => book.checkIn()).toThrowError('item is not currently on loan')
    })
  })

  describe('#getAuthorDetails', () => {
    it ('retrieves the Author detials', () => {
      const expected = {author: 'Mirkan', publisherNumber: '07123456789'}

      const result = book.getAuthorDetails()
      expect(result).toEqual(expected)
    })
  })

  describe('#setAuthor', () => {
    it ('sets the Author detials', () => {
      const authorName = 'Bob'
      const publisherNumber = '079...'

      const expected = { author: 'Bob', publisherNumber: '079...' }

      book.setAuthor(authorName, publisherNumber)
      expect(book.getAuthorDetails()).toEqual(expected)
    })
  })
})
