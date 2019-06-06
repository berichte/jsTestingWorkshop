
### 1. Task

Write and test a function calculating the total of an order.
Because our proxy is so fine you can't use any npm modules for this.

return an obj like: 
```
{
  items: [],
  total: number,
}
```

### 2. Task

Write and test a function calculating the total of an order and adding taxes.
The TaxRateService will give you the tax depending on language code async.
Still no npm modules available because of our proxy. (supported country codes: de, gb, fr).
We still have the issue with our proxy...🙄

return an obj like: 
```
{
  items: [],
  total: number,
  tax: number,
}
```

### 3. Task
Sometimes the tax service does not respond. Your function should try it at least 3 times. Make sure this is tested as well. Our guys are on the proxy but you still can't use npm.


### 4. Task
Finally the proxy settings have been changed and we can use jest from npm.
Install jest as dev setting and rewrite your tests using jest.