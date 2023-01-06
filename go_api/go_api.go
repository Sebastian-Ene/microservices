package main

import (
	"fmt"
	"home/sene/microservices/go_api/morestrings"

	"github.com/google/go-cmp/cmp"
)

func main() {
	var_1 := 12
	var_2 := "cal"
	fmt.Println(var_1, var_2, var_1, '\n')
	fmt.Println(morestrings.ReverseRunes("!oG ,olleH"))
	fmt.Println(cmp.Diff("Hello World", "Hello Go"))
}
