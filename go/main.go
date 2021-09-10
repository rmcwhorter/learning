package main

import (
	"fmt"
)

func main() {
	s1 := []byte("1c0111001f010100061a024b53535009181c")
	s2 := []byte("686974207468652062756c6c277320657965")
	h1, _ := decode_hex(s1)
	h2, _ := decode_hex(s2)

	fmt.Printf("%s\n", h1)
	fmt.Printf("%s\n", h2)

	if len(s1) == len(s2) {
		h3 := make([]byte, len(h1))
		for idx:=0;idx<len(h1);idx++ {
			h3[idx] = h1[idx]^h2[idx]
		}
		fmt.Printf("%s\n", h3)

	}
	


}
