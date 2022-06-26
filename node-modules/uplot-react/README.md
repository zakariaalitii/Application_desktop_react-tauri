# uplot-react


React wrapper for [uPlot](https://github.com/leeoniya/uPlot "uPlot") that allows you to work with charts declaratively inside your favorite framework.

**Table of Contents**

- [Motivation](#motivation)
- [React](#react)
    - [Installation](#installation)
    - [How to use](#how-to-use)
    - [Demo](#demo)
- [Documentation](#documentation)

# Motivation

While several other uPlot wrappers already exist, all of them have one of the following limitations:
1. They create uPlot instance once, during component mount phase, and expect you to handle all the update logic yourself.
2. They recreate uPlot instance anew whenever the props change, even if the instance can be updated to reflect the changes.

In comparison this library tries it's best not to recreate the uPlot instance once the props change. Instead of recreation it tries to use uPlot public API to keep it up to date with the props.

# React
## Installation
Install uplot-react package with uplot dependency:
- Using npm: `$ npm install uplot-react uplot`
- Using yarn: `$ yarn add uplot-react uplot`

You also need React 16.8 or above to be installed inside your project tree.

## How to use
```javascript
import React from 'react';
import uPlot from 'uplot';
import UplotReact from 'uplot-react';
import 'uplot/dist/uPlot.min.css';

const Chart = () =>
    (<UplotReact
        options={options}
        data={data}
        target={target}
        onCreate={(chart) => {}}
        onDelete={(chart) => {}}
    />);
```
## Demo
See the [live demo](https://codesandbox.io/s/uplot-react-6ykeb?file=/react/uplot-react-example.tsx "live demo")

You can also run the demo app locally:

`$ git clone https://github.com/skalinichev/uplot-wrappers.git`

`$ cd uplot-wrappers && yarn install && yarn run serveReact`

# Documentation
| Parameter | Requirement | Description |
|:-----:|:--:|:----------------------------|
| options  |required|Options for uPlot. Passed as the first argument to uPlot constructor: `new uPlot(options)`|
| data  |required|Data for uPlot. Passed as the second argument to uPlot constructor: `new uPlot(options, data)` |
| target  |optional|Target html element or init function for uPlot. Passed as the third argument to uPlot constructor: `new uPlot(options, data, target)` A new div target element will be created automatically if none is passed in the props|
| onCreate  |optional|Callback function, invoked upon uPlot instance creation or recreation|
| onDelete  |optional|Callback function, invoked before uPlot instance gets destroyed, either because the props has changed so much it's impossible to update the chart or because the component is about to be unmounted|
