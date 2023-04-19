# JavaScript Implementation of Kount Command functions.
## Currently only supports creating a KHASH credit card hash.

***Usage***

```
# bash
export CONFIG_KEY=<kount configuration key provided to clients>
```

```
const khash = require('./khash');
var PTOK = khash.hash("4111111111111111", 14);

```
