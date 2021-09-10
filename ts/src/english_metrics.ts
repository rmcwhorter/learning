
export var frequency_map = new Map()
frequency_map.set("e", 0.1202)
frequency_map.set("t", 0.091)
frequency_map.set("a", 0.0812)
frequency_map.set("o", 0.0768)
frequency_map.set("i", 0.0731)
frequency_map.set("n", 0.0695)
frequency_map.set("s", 0.0628)
frequency_map.set("r", 0.0602)
frequency_map.set("h", 0.0592)
frequency_map.set("d", 0.0432)
frequency_map.set("l", 0.0398)
frequency_map.set("u", 0.0288)
frequency_map.set("c", 0.0271)
frequency_map.set("m", 0.0261)
frequency_map.set("f", 0.0230)
frequency_map.set("y", 0.0211)
frequency_map.set("f", 0.0209)
frequency_map.set("g", 0.0203)
frequency_map.set("p", 0.0182)
frequency_map.set("b", 0.0149)
frequency_map.set("v", 0.0111)
frequency_map.set("k", 0.0069)
frequency_map.set("x", 0.0017)
frequency_map.set("q", 0.0011)
frequency_map.set("j", 0.001)
frequency_map.set("z", 0.0007)

export function naive_metric(input: string): number {
    var count = 0
    var mse = 0

    var internal_map = new Map()
    internal_map.set("e", 0)
    internal_map.set("t", 0)
    internal_map.set("a", 0)
    internal_map.set("o", 0)
    internal_map.set("i", 0)
    internal_map.set("n", 0)
    internal_map.set("s", 0)
    internal_map.set("r", 0)
    internal_map.set("h", 0)
    internal_map.set("d", 0)
    internal_map.set("l", 0)
    internal_map.set("u", 0)
    internal_map.set("c", 0)
    internal_map.set("m", 0)
    internal_map.set("f", 0)
    internal_map.set("y", 0)
    internal_map.set("f", 0)
    internal_map.set("g", 0)
    internal_map.set("p", 0)
    internal_map.set("b", 0)
    internal_map.set("v", 0)
    internal_map.set("k", 0)
    internal_map.set("x", 0)
    internal_map.set("q", 0)
    internal_map.set("j", 0)
    internal_map.set("z", 0)

    for (var idx = 0; idx < input.length; idx++) {
        console.log(input[idx])
        console.log(typeof internal_map.get(input[idx].toLowerCase))
        console.log(typeof internal_map.get(input[idx].toLowerCase) === "number")
        if (typeof internal_map.get(input[idx].toLowerCase) === "number") {
            internal_map.set(input[idx].toLowerCase, internal_map.get(input[idx].toLowerCase)+1)
            count++
        }
    }

    for (const key of internal_map.keys()) {
        console.log(key)
        console.log(typeof key)
        console.log(internal_map.get(key))
        console.log(frequency_map.get(key))
        
        mse += ((internal_map.get(key)/count) - frequency_map.get(key))**2
    }

    console.log(typeof input[0])


    return mse
}