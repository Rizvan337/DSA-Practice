# Sliding Window Pattern

## 🔹 When to Use

- Problem involves **subarray** or **substring**
- Looking for **longest / shortest / max / min**
- Continuous elements
- Condition can be **checked incrementally**

## 🔹 Key Idea

Maintain a **window [left, right]** and expand/shrink it to satisfy the condition.

## 🔹 Steps

1. Initialize left = 0, right = 0
2. Expand right pointer to include new element
3. If condition breaks:
   - Move left pointer until window is valid
4. Track answer (max/min) after each expansion

## 🔹 Common Uses / Examples

- Longest Substring Without Repeating Characters
- Minimum Window Substring
- Maximum Sum Subarray of Size K
- Fruits Into Baskets

## 🔹 Data Structures

- Set → track unique elements
- HashMap → track frequency
- Array → track counts / sums

## 🔹 Daily Drill Question (Thinking Only)

- LeetCode #3 Longest Substring Without Repeating Characters
  > Identify window, left/right moves, data stored (Set)
