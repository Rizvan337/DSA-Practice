# Binary Search Pattern

## 🔹 When to Use

- Array **sorted** or **monotonic**
- Find **minimum / maximum / first / last**
- “Can we do it in X?” type of problems

## 🔹 Key Idea

- Reduce search space by half each time
- Check mid element → decide which side to search next

## 🔹 Steps

1. Define search space (start, end)
2. Find mid
3. Check condition:
   - Condition satisfied → move left/right accordingly
4. Repeat until search space exhausted

## 🔹 Common Uses / Examples

- Search in Rotated Sorted Array
- Koko Eating Bananas
- Median of Two Sorted Arrays
- Find Peak Element

## 🔹 Variants

- Binary Search on index
- Binary Search on answer

## 🔹 Daily Drill Question

- LeetCode #875 Koko Eating Bananas
  > Identify monotonic property and search space
