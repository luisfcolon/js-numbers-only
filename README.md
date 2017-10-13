# Numbers Only

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
