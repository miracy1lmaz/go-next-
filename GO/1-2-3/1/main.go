package main

import (
	"fmt"
	"sort"
	"strings"
)

//!sortWords function

func sortWords(words []string) {
	//!sort.Slice  custom sorting
	sort.Slice(words, func(A, B int) bool {
		countA := strings.Count(words[A], "a")
		countB := strings.Count(words[B], "a")
		if countA == countB {
			return len(words[A]) > len(words[B])
		}
		return countA > countB
	})
}

func main() {

	// !Slice of words to be sorted

	words := []string{"aaaasd", "a", "aab", "aaabcd", "ef", "cssssssd", "fdz", "kf", "zc", "lklklklklklklkl", "l"}
	sortWords(words)
	fmt.Println(words)
}
