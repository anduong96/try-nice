import { tryNice, tryNiceAsync } from './index'

describe('Try/catch test', () => {
  it('Should not have error', () => {
    function addTwoNumber(first: number, second: number): number {
      return first + second
    }

    const [result, error] = tryNice(addTwoNumber, 1, 2)
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
    async function promiseAddTwoNumber({
      first,
      second
    }: {
      first: number
      second: number
    }): Promise<number> {
      return first + second
    }

    const [result, error] = await tryNiceAsync(promiseAddTwoNumber, {
      first: 1,
      second: 2
    })

    expect(result).toEqual(3)
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
