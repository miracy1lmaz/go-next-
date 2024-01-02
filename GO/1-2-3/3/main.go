package main

import "fmt"

//!mostFrequent finds the most frequently occurring word in a slice of strings.


func mostFrequent(words []string) string {
	frequency := make(map[string]int)
	maxFreq := 0
	mostFreqWord := ""

//!Iterate through each word in the slice.


	for _, word := range words {
		frequency[word]++
		if frequency[word] > maxFreq {
			maxFreq = frequency[word]
			mostFreqWord = word
		}
	}

	return mostFreqWord  //!Return the most frequent word.
}

func main() {
	words := []string{"apple", "pie", "apple", "red", "red", "red"}
	fmt.Println(mostFrequent(words))
}
