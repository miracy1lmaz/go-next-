package main

import (
	"testing"
)

// TestSortWords tests if the sortWords function sorts the words correctly

func TestSortWords(t *testing.T) {
    words := []string{"aaaasd", "a", "aab", "aaabcd", "ef", "cssssssd", "fdz", "kf", "zc", "lklklklklklklkl", "l"}
	expected := []string{"aaaasd", "aaabcd", "aab" ,"a" ,"lklklklklklklkl", "cssssssd" ,"fdz" ,"ef" ,"kf", "zc", "l"}

    sortWords(words)

    for A, word := range words {
        if word != expected[A] {
            t.Errorf("Sorting error; expected: %v, got: %v", expected, words)
            break
        }
    }
}
