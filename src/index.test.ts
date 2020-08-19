import { tryNice, tryNiceAsync } from './index'

describe('Try/catch test', () => {
  it('Should not have error', () => {
    function test(first: number, second: number) {
      return first + second
    }

    const [result, error] = tryNice(test, 1, 2)
    expect(result).toEqual(3)
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
    const bypass = async (num: number) => num
    const expectedResult = 1
    const [result, error] = await tryNiceAsync(bypass, expectedResult)
    expect(result).toEqual(expectedResult)
    expect(error).toEqual(undefined)
  })

  it('Should have error', async () => {
    const [result, error] = await tryNiceAsync(() =>
      Promise.reject(new Error())
    )

    expect(result).toEqual(undefined)
    expect(error).toBeInstanceOf(Error)
  })
})
