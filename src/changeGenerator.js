class ChangeGenerator {
  convert(n) {
    let array = []
    const money = [5, 1]
    money.forEach((value) => {
      while (n - value >= 0) {
        array.push(`£${value}`)
        n -= value
      }
    })
    return array
  }
}
