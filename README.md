# Numbers Only

[![Build Status](https://travis-ci.org/luisfcolon/js-numbers-only.svg?branch=master)](https://travis-ci.org/luisfcolon/js-numbers-only)
[![Coverage Status](https://coveralls.io/repos/github/luisfcolon/js-numbers-only/badge.svg?branch=master)](https://coveralls.io/github/luisfcolon/js-numbers-only?branch=master)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/luisfcolon/js-numbers-only/master/LICENSE)
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

TBD

## Usage

It works best when you use `numbersOnly` as the event handler for `keydown` events.

```
import numbersOnly from 'numbersOnly';

<input type="text" name="some-numeric-field" onkeydown="numbersOnly" />
```
