# Gremlin Technical Take Home

> Build active attacks popover

The task is to build an active attacks popover.

**INTRODUCTION**

You may use any pattern or library that you find suitable to accomplish this task.


- [Getting Started](#getting-started)
- [What we are looking for](#what-we-are-looking-for)
- [Styling](#styling)
- [Extra Credit](#extra-credit)

## Getting Started

This repo uses create-react-app as its foundation in order to allow candidates to get started quickly.

To get started run the following commands:

```sh
git clone https://github.com/gremlin/frontend-interview-test.git

cd frontend-interview-test

npm install

npm run start
```

Your browser should automatically open to `localhost:3000`.

> For more information about create-react-app please reference their comprehensive documentation.
https://github.com/facebook/create-react-app 


## What we are looking for

- Does it work?
- Does the implementation handle loading and error states?
- Mobile-first styling and UX.
- Proper-use of life-cycle events and handlers.
- Clean, well-commented code.

## Styling

For styling you may use css placed in './styles.css' or any css framework you would like.

If you would like to use the css prop from emotion, ensure the
following is at the top of every component file as seen in `./index.js`

```js
/* @jsx jsx */
import { jsx } from '@emotion/core'
```

See [emotion.sh](https://emotion.sh) for examples and further information if needed.

## Extra Credit

- Implement functionality to fail the API requests on purpose to test error states
  - Could be a fixed position checkbox or overlay with options
- Utilization of latest React APIs
- Dynamic theming
