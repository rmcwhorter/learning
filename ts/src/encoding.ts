
export function string_to_buffer(input: string): Buffer {
    return Buffer.from(input)
}

export function hex_string_to_buffer(input: string): Buffer {
    return Buffer.from(input, "hex")
}

export function base64_string_to_buffer(input: string): Buffer {
    return Buffer.from(input, "base64")
}

export function buffer_to_string(input: Buffer): string {
    return input.toString()
}

export function buffer_to_hex_string(input: Buffer): string {
    return input.toString("hex")
}

export function buffer_to__base64_string(input: Buffer): string {
    return input.toString("base64")
}

export function string_to_hex(input: string): string {
    const b = Buffer.from(input)
    return b.toString('hex')
}

export function string_to_base64(input: string): string {
    const b = Buffer.from(input)
    return b.toString('base64')
}

export function hex_to_base64(input: string): string {
    const b = Buffer.from(input, "hex")
    return b.toString('base64')
}

export function base64_to_hex(input: string): string {
    const b = Buffer.from(input, "base64")
    return b.toString('hex')
}

export function hex_to_string(input: string): string {
    const b = Buffer.from(input, "hex")
    return b.toString()
}

export function base64_to_string(input: string): string {
    const b = Buffer.from(input, "base64")
    return b.toString()
}