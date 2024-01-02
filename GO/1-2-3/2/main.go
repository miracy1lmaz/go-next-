package main

import (
	"fmt"
	"math"
)

func calculate(num float64) (float64, float64, float64) {
	root := math.Sqrt(num)
	return root - 1, root + 1, num
}

func main() {
	var input float64
	fmt.Print("Please enter a number: ")
	if _, err := fmt.Scan(&input); err != nil {
		fmt.Println("Please enter a valid number.")
		return
	}

	low, high, original := calculate(input)
	fmt.Printf("%v\n", low)
	fmt.Printf("%v\n", high)
	fmt.Printf("%v\n", original)
}


//!Inside this code block, the square root,
//!one less, one more, and the number itself
//!are written.
