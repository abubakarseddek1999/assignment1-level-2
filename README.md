from pathlib import Path

readme_content = """# TypeScript Basics

## 1. Differences Between `interface` and `type`

- **Interface** 👉 মূলত object structure define করতে ব্যবহৃত হয়, extend করা যায় (inheritance friendly)।  
- **Type** 👉 শুধু object না, union, intersection, primitive ইত্যাদিও define করা যায় (more flexible)।  

➡️ Usage:  
- শুধু object shape চাইলে → `interface`  
- complex / multiple type (union, primitive ইত্যাদি) চাইলে → `type`  

---

## 2. `keyof` Keyword

`keyof` TypeScript-এ একটি টাইপ অপারেটর যা কোনো object type এর সব key-গুলোর union type তৈরি করে।  

```ts
type Person = { name: string; age: number; };
type Keys = keyof Person; // "name" | "age"
