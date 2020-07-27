## @ali/test-plus

## Install

```
$ npm install @ali/test-plus --save
```

## Usage

```
import MyComponent from '@ali/test-plus';
```

## API

### Props

|name|type|default|describe|
|:---------------|:--------|:----|:----------|
|name|String|''|describe|

### Function

|name|param|return|describe|
|:---------------|:--------|:----|:----------|
|name|Object|/|describe|

## Example

```
import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import MyComponent from '@ali/test-plus';

render(<MyComponent />, document.body, { driver: DriverUniversal });
```
