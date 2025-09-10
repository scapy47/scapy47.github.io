# Markdown Rendering Test

This file is designed to **test Markdown rendering** across platforms.

---

## Headers

# H1
## H2
### H3
#### H4
##### H5
###### H6

---

## Emphasis

- *Italic*
- **Bold**
- ***Bold Italic***
- ~~Strikethrough~~

---

## Lists

### Unordered List
- Item 1
  - Subitem 1.1
  - Subitem 1.2
- Item 2

### Ordered List
1. First
2. Second
   1. Nested Second.1
   2. Nested Second.2

---

## Links

- [OpenAI](https://openai.com)
- [Relative link to section](#headers)

---

## Images

![Sample Image](https://via.placeholder.com/150 "Placeholder Image")

---

## Blockquotes

> This is a blockquote.  
>> Nested blockquote.

---

## Table

| Month    | Savings |
| -------- | ------- |
| January  | $250    |
| February | $80     |
| March    | $420    |

---

## LaTeX

- $\pi \approx 3.14159$
- $\pm \, 0.2$
- $\dfrac{0}{1} \neq \infty$
- $0 < x < 1$
- $0 \leq x \leq 1$
- $x \geq 10$
- $\forall \, x \in (1,2)$
- $\exists \, x \notin [0,1]$
- $A \subset B$
- $A \subseteq B$
- $A \cup B$
- $A \cap B$
- $X \implies Y$
- $X \impliedby Y$
- $a \to b$
- $a \longrightarrow b$
- $a \Rightarrow b$
- $a \Longrightarrow b$
- $a \propto b$

---

## Code

Inline code: `print("Hello, World!")`

### Code Block
```python
def greet(name):
    return f"Hello, {name}!"

