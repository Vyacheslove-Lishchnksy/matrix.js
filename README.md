# What is matrix?
matrix is a React-based framework that simulates matrices of arbitrary size.

![matrix_gif](https://github.com/user-attachments/assets/ee0c443a-4119-4d4e-8721-08249377ec70)

# How to write programs?
To write programs, you need to use the main.ts file located in the ./app folder. You should render your applications using the matrix module.

# The `before` function
before — executes the code once before the main process of the application begins.

# The `draw` function
draw — is the main function that repeats continuously throughout the entire lifecycle of the application.\

Ось готовий текст у форматі Markdown (.md), який ви можете просто скопіювати та зберегти у файл.

```markdown
# Getting Started
---
The program is written here: `./app/main.ts`. However, you first need to configure the project in the `./utils/constants.ts` file. It looks like this:

```typescript
export const matrixParams: paramsForMatrix = {
  columns: 16,
  rows: 16,
  fps: 3
}

```

These are the default parameters.

`columns` — the number of vertical lines in the matrix.
`rows` — the number of horizontal lines in the matrix.
`fps` — how many frames per second will be rendered.

Now you can return to the main file.

# Working with draw

---

The minimal configuration for operation looks like this:

```ts
import { drawFunctionArgumants } from "../components/AppBody";

export const before = ({  }: drawFunctionArgumants) => {

}

export const draw = ({  }: drawFunctionArgumants) => {

};

```

We will need the `draw` function where we will perform our work. To operate, we will require the `matrix` module. It will look like this:

```typescript
export const draw = ({ matrix }: drawFunctionArgumants) => {

};

```

To add variables that will not be overwritten every time, you can do the following:

```ts
let frameCounter = 0;
let iterator = 0;

export const draw = ({ matrix }: drawFunctionArgumants) => {

};

```

Since we are creating something like a stopwatch, we need to update the matrix once per second. To avoid changing the main parameters of the matrix, you can simply use this construction:

```ts
if (frameCounter === matrix.fps * 1) {
	frameCounter = 0;
}
frameCounter++;

```

To render digits, we will use `drawDozens` from the `./setaps/drawer/numbers` module. Here is the full code:

```ts
import { drawFunctionArgumants } from "../components/AppBody";
import { white } from "./setaps/colorama/colors";
import { drawDozens } from "./setaps/drawer/numbers";

export const before = ({ matrix }: drawFunctionArgumants) => {

}

let frameCounter = 0;
let number = 0;

export const draw = ({ matrix, pressNow }: drawFunctionArgumants) => {
  matrix.off();

  drawDozens(matrix,
    number, // The number to be drawn,
    {
      position: { x: 3, y: 4 }, // Position relative to the top-left corner
      fill: white // Digit color
    })
    
  // You need to multiply by the number of seconds to wait
  if (frameCounter === matrix.fps * 1) {
    number++
    frameCounter = 0
  }

  if (number > 99) {
    number = 0;
  }
  
  frameCounter++
};

```
