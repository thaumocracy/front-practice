const googleSearch = require('./script')

const dbMock = [
  'dog.com',
  'wwe.com',
  'wrestling.com',
  'whatever.ru',
  'makemockup.io',
  'makecatpic.nl',
  'whattheheck.ca',
  'whatculture.com',
  'whatculture.wrestling.com'
]

//googleSearch('what',dbMock)
describe('Silly first part', () => {
  it('Should be equal',() => {expect('woo').toEqual('woo')})
  it('Should return 2 results',() => {expect(googleSearch('make',dbMock).length).toBe(2)})
  it('Should return no more than 3 results',() => {expect(googleSearch('what',dbMock).length).toEqual(3)})
  it('Should empty array',() => {expect(googleSearch('kitten',dbMock)).toEqual([])})
  it('Should not break with null',() => {expect(googleSearch(null,dbMock)).toEqual([])})
  it('Should not break with undefined',() => {expect(googleSearch(undefined,dbMock)).toEqual([])})
  it('Should not be equal',() => {expect('woo').not.toEqual('kittie')})
})
