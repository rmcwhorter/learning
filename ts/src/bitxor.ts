import * as Encoding from "./encoding"
import { assert } from "./assert"

export function fixed_xor(left: Buffer, right: Buffer): Buffer {
    assert(left.length == right.length, "Lengths must match!")

    var out: Buffer = Buffer.alloc(left.length)

    for (var i = 0;i<left.length;i++) {
        
        //console.log(left.readUInt8(i))
        //console.log(right.readUInt8(i),"\n")
        
        out.writeUInt8(left[i] ^ right[i], i)
    }

    return out
}