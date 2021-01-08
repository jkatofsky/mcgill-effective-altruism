<img src="src/logo.png" alt="drawing" width="80"/>

<img src="https://api.netlify.com/api/v1/badges/4d76ef8a-6e14-4cbc-9d42-60ac6c40a5e3/deploy-status" float="right">

# Effective Altruists at McGill

Doing good better. The website for the McGill chapter of the [effective altruism](https://www.effectivealtruism.org/) movement.

Built by [Josh Katofsky](https://github.com/jkatofsky) and [Gabriela Moisescu-Pareja](https://github.com/gabrielamp).

Built with [react-static](https://github.com/react-static/react-static) and hosted on [Netlify](https://www.netlify.com/).

## Setup

react-static has [problems when used with NPM](https://github.com/react-static/react-static/issues/1552). Use [yarn](https://yarnpkg.com/) instead.

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

## Building

To build the site and host the result locally, run

```bash
yarn stage
```

or, to simply generate the `dist` folder for hosting elsewhere,
run

```bash
yarn build
```

## Contributing & Deployment

If you wish to contribute code, please fork the repository and make a pull request!

**IMPORTANT:** For those with write privileges to this repository, know that it is continuously deployed with Netlify. Code pushed to the master branch will be automatically built on production. If you have write privileges to this repository, do your development in a seperate branch and *only* merge to master when it has been **staged** locally and works as expected & without errors there.
