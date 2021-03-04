describe("ChangeGenerator", () => {
  var change_generator;

  beforeEach(() => {
    change_generator = new ChangeGenerator()
  })

  it('returns ["£1"] for input of 1', () => {
    expect(change_generator.convert(1)).toEqual(["£1"])
  })

  it('returns ["£1", "£1"] for input of 2', () => {
    expect(change_generator.convert(2)).toEqual(["£1", "£1"])
  })

  it('returns ["£1", "£1", "£1"] for input of 3', () => {
    expect(change_generator.convert(3)).toEqual(["£1", "£1", "£1"])
  })

  it('returns ["£5"] for input of 5', () => {
    expect(change_generator.convert(5)).toEqual(["£5"])
  })
})
