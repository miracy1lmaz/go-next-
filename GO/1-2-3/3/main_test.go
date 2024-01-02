package main

import (
	"testing"
)

// TestMostFrequent tests the mostFrequent function for accuracy.

func TestMostFrequent(t *testing.T) {
	words := []string{"apple", "pie", "apple", "red", "red", "red"}
	expected := "red"    // Expected output.

	result := mostFrequent(words)
	//if result
	if result != expected { 
		t.Errorf("mostFrequent() = %v, want %v", result, expected)
	}
}
