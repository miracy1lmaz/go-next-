package main

import (
	"testing"
)

func TestCalculateRoots(t *testing.T) {
	// Test case 1 

	low, high, original := calculate(9)
	if low != 2 || high != 4 || original != 9 {
t.Errorf("Expected 2, 4, 9; got %v, %v, %v", low, high, original)
	}

}