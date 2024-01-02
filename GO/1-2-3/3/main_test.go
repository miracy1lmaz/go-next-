package main

import (
	"testing"
)

// TestMostFrequent tests the mostFrequent function for accuracy.

func TestMostFrequentExisting(t *testing.T) {
	words := []string{"apple", "pie", "apple", "red", "red", "red"}
	expected := "red" //!Expected output.
	result := mostFrequent(words)
	if result != expected {
		t.Errorf("mostFrequent() = %v, want %v", result, expected)
	}
}

//! NEW TEST

func TestMostFrequentNew(t *testing.T) {
	words := []string{"a", "a", "a", "c", "b", "c", "c"}
	expected := "a" // new test .

	result := mostFrequent(words)
	if result != expected {
		t.Errorf("mostFrequent() = %v, want %v", result, expected)
	}
}