<img src="src/logo.png" alt="drawing" width="80"/>

# Effective Altruists at McGill

Built by [Josh Katofsky](https://github.com/jkatofsky) and [Gabriela Moisescu-Pareja](https://github.com/gabrielamp).

Built with [react-static](https://github.com/react-static/react-static).

## Setup

Yarn is used here. NPM will also work.

1. Clone this repository.

   ```bash
   git clone https://github.com/jkatofsky/mcgill-effective-altruism.git
   cd mcgill-effective-altruism
   ```

2. Install the project dependencies.

    ```bash
    yarn install
    ```

3. And run locally.

    ```bash
    yarn start
    ```

## Deployment

Right now, yarn is the only package manager [that will properly build a react-static project](https://github.com/react-static/react-static/issues/1552). NPM will *not* work.

To build the site and host the result locally, run

```bash
yarn stage
```

or, to simply generate the `dist` folder for hosting elsewhere,
run

```bash
yarn build
```

**Important:** This repository has continuous integration with Netlify. Code pushed to the master branch will automoatically deploy. If you have write privileges to this repository, do your development in a seperate branch and only merge when it has been **staged** locally and works without errors.
