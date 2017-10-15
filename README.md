# Numbers Only

[![Build Status](https://travis-ci.org/luisfcolon/js-numbers-only.svg?branch=master)](https://travis-ci.org/luisfcolon/js-numbers-only)
[![Coverage Status](https://coveralls.io/repos/github/luisfcolon/js-numbers-only/badge.svg?branch=master)](https://coveralls.io/github/luisfcolon/js-numbers-only?branch=master)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/luisfcolon/js-numbers-only/master/LICENSE)
[![NPM downloads](https://img.shields.io/npm/dt/numbers-only.svg)](https://www.npmjs.com/package/numbers-only)
[![GitHub issues](https://img.shields.io/github/issues/luisfcolon/js-numbers-only.svg)](https://github.com/luisfcolon/js-numbers-only/issues)

## Overview

Javascript event handler to only allow numbers and a few special characters.

Works with `text` and `number` input types.

Allows the following characters:

* `tab`
* `del`
* left-arrow
* right-arrow
* 0 - 9 using standard keyboard
* 0 - 9 using a numberpad

## Installation

Using npm

```
npm install numbers-only
```

Using yarn

```
yarn add numbers-only
```

## Usage

It works best when you use `numbersOnly` as the event handler for `keydown` events.

```javascript
import numbersOnly from 'numbers-only';


<input type="text" name="some-numeric-field" onkeydown="numbersOnly" />
```
