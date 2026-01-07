# Two Pointers Pattern

## 🔹 When to Use

- Array (often sorted)
- Find **pairs / triplets / ranges**
- Compare elements from **two ends**

## 🔹 Key Idea

Use **two pointers moving from opposite ends** to reduce time complexity from O(n²) to O(n)

## 🔹 Steps

1. Sort array if necessary
2. Initialize left = 0, right = n-1
3. Move pointers based on condition:
   - sum too small → move left
   - sum too large → move right

## 🔹 Common Uses / Examples

- Two Sum II (Sorted Array)
- Container With Most Water
- 3Sum / 3Sum Closest
- Remove Duplicates from Sorted Array

## 🔹 Daily Drill Question (Thinking Only)

- LeetCode #11 Container With Most Water
  > Identify left/right moves and how to calculate answer
