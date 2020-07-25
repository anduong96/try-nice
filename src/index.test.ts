import { tryNice, tryNiceAsync } from './index'

describe('Try/catch test', () => {
  it('Should not have error', () => {
    const [result, error] = tryNice(() => 1)
    expect(result).toEqual(1)
    expect(error).toEqual(undefined)
  })

  it('Should have error', () => {
    const [result, error] = tryNice(() => {
      throw new Error()
    })

    expect(result).toEqual(undefined)
    expect(error).toBeInstanceOf(Error)
  })
})

describe('Try/catch async test', () => {
  it('Should not have error', async () => {
    const [result, error] = await tryNiceAsync<number>(() => Promise.resolve(1))
    expect(result).toEqual(1)
    expect(error).toEqual(undefined)
  })

  it('Should have error', async () => {
    const [result, error] = await tryNiceAsync<undefined, Error>(() =>
      Promise.reject(new Error())
    )
    expect(result).toEqual(undefined)
    expect(error).toBeInstanceOf(Error)
  })
})
