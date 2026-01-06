## 📂 Task: camelize

**Objective:** Convert dash-separated strings into camelCase.
**Logic:**

1. Split the string by `-`
2. Capitalize words after the first and join
   **Toolbox:** `split()`, `map()`, `charAt()`, `slice()`, `join()`

### 💻 Solution

```javascript
function camelize(str) {
  return str
    .split("-")
    .map((word, i) =>
      i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}
```

### 📂 Task: Filter Range

**Problem:** Get numbers between `a` and `b` into a new array.
**Strategy:** Use `.filter()` to check if `item >= a` AND `item <= b`. (Keep original array intact).

**Code:**

```javascript
const filterRange = (arr, a, b) => arr.filter((num) => num >= a && num <= b);
```

---

## 📂 Task: Filter Range In Place

**Objective:** Modify the EXISTING array to remove values outside range [a, b].
**Toolbox:** `for` loop, `.splice()`, `i--` (Mutating)

### 💻 Solution

```javascript
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // Check if value is OUTSIDE the range
    if (val < a || val > b) {
      arr.splice(i, 1); // Remove 1 element at current index
      i--; // Backtrack index to account for the shift
    }
  }
}
```

## 📂 Task: Copy and Sort Array

**Objective:** Create a sorted version of an array while keeping the original array unmodified.
**Strategy:** Create a shallow copy of the array first (so the original isn't changed), then use `.sort()` on that copy.

**Toolbox:** `Spread operator [...]` or `slice()`, `sort()`

### 💻 Solution

```javascript
function copySorted(arr) {
  // Use spread to create a copy, then sort the copy
  return [...arr].sort();
}
```
