# Fresh Egg Eslint and Prettier Setup

## What it does

- Lints JavaScript and TypeScript based on the latest standards
- Fixes issues and formatting errors with Prettier
- Lints + Fixes inside of html script tags
- Lints + Fixes React via eslint-config-airbnb

## Project Install

It's recommended you install this once per every project. ESLint used to have global configs, but no longer.

1. If you don't already have a `package.json` file, create one with `npm init -y`.

2. Then we need to install this config

```
npm install eslint-config-freshegg
```

4. We need to put our eslint settings in a file in the root of your project. I prefer to use our existing `package.json`, and add an `eslintConfig` property. You can also create a new `.eslintrc` or `.eslintrc.js` file that lives where package.json does:

**in package.json**, add this anywhere top level. Like right under your "scripts" object.

```json
"eslintConfig": {
  "extends": ["freshegg"]
}
```

Or put this in a `.eslintrc` file

```json
{
  "extends": ["freshegg"]
}
```

For TypeScript projects, use `freshegg/typescript`.

```json
{
  "extends": ["freshegg/typescript"]
}
```

TypeScript users will also need a `tsconfig.json` file in their project. An empty object (`{}`) 

5. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

6. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`. You probably want your editor to do this though.

## Settings

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"`.

```js
{
  "extends": [
    "freshegg"
  ],
  "rules": {
    "no-console": 2,
  }
}
```

### Prettier Rules

There are only 2 prettier rules included in the config - `singleQuote: true` and `endOfLine: 'auto'`.

If you want custom [prettier options](https://prettier.io/docs/en/options.html), it's recommended to create a `.prettierrc` file in your root directory like so:

```js
{
  "singleQuote": true,
  "endOfLine": "auto",
  "tabWidth": 4
}
```

You can also put this in your EsLint config as a rule like so:

```json
{
  "extends": ["freshegg"],
  "rules": {
    ... any eslint rules here
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "endOfLine": "auto",
        "tabWidth": 4
      },
    ],
  }
}
```


## With VS Code


Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the Open (Open Settings) icon in the top right corner:

```js
// These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript][javascriptreact][typescript][typescriptreact]": {
  "editor.formatOnSave": false
},
// show eslint icon at bottom toolbar
"eslint.alwaysShowStatus": true,
// tell the ESLint plugin to run on save
"editor.codeActionsOnSave": {
  "source.fixAll": true
}
```

After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right and select 'Allow Everywhere' in the alert window.

Finally you'll usually need to restart VS code. They say you don't need to, but it's never worked for me until I restart.

## With Create React App

1. Run `npx install-peerdeps --dev eslint-config-freshegg`
1. Crack open your `package.json` and replace `"extends": "react-app"` with `"extends": "freshegg"`

## With Gatsby

1. Run `npx install-peerdeps --dev eslint-config-freshegg`
1. follow the `Local / Per Project Install` steps above


### Ensure the Prettier plugin is disabled if installed.

1. Open Prettier configuration by going to File > Settings (Edit > Preferences on Mac) > Languages & Frameworks > Code Quality Tools > Prettier (optionally just search settings for "prettier")
1. Uncheck both **On code reformat** and **On save**
1. _Optional BUT IMPORTANT:_ If you have the Prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already.
   1. Make sure the **Run for files** glob does not include `js,ts,jsx,tsx`.
   2. An example glob for styles, config, and markdown. `{**/*,*}.{yml,css,sass,md}`

## With Typescript

Same instructions as above, just make sure you extend `freshegg/typescript` instead of just `freshegg`.
