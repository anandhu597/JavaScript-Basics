Here is a **short, clean version** filled for your task 👇

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
