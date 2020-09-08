# country-state-list
List of country and states with additional meta data

## Supported Countries

- India - "in"

## How to use

```
npm install @yomerce/country-state-list
```

### getCountryInfo

```javascript
const {getCountryInfo} = require("@yomerce/country-state-list");

const data = getCountryInfo("in");
```

### getStates

```javascript
const {getStates} = require("@yomerce/country-state-list");

const data = getStates("in");
```