<img src="public/images/ea-logo.png" alt="drawing" width="80"/>

<img src="https://api.netlify.com/api/v1/badges/12a2190a-5861-4816-bb81-97f41009747d/deploy-status">

# Effective Altruists at McGill

Doing good better. The website for the McGill chapter of the [effective altruism](https://www.effectivealtruism.org/) movement.

Built with [Next.js](https://nextjs.org/) and hosted on [Netlify](https://www.netlify.com/).

## Setup

All of the following commands should also work with `npm`, but I use `yarn`.

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
    yarn dev
    ```

## Contributing

If you wish to contribute, please fork the repository and make a pull request!

**IMPORTANT:** For those with write privileges to this repository, know that it is continuously deployed with Netlify. Code pushed to the master branch will be automatically built on production. It is therefore very important to test building the site and hosting the result locally before pushing any code:

```bash
yarn build && yarn start
```
