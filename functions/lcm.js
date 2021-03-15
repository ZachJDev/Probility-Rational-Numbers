const gcd = require('./gcd')

const lcm = (...args) => {
    if(args.length < 1) throw  new Error("cannot find lcm of no numbers")
    if (args.length < 2) return args[0]
    if (args.includes(0)) throw new Error("Cannot find lcm of a set containing zero")
    const findLcm = (a, b) => (a * b) / gcd(a, b)
    return args.reduce((acc, cur) => findLcm(acc, cur), 1)
}

module.exports = lcm