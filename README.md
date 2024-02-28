# LiteKart Utility NPM Package

[![npm version](https://litekart.in/logo-litekart.png)](https://litekart.in)

This npm package provides functionality to connect with the LiteKart backend and can be used as services.

## Installation

You can install the LiteKart npm package using npm:

```bash 
npm i @misiki/litekart-utils
```


You can install the LiteKart npm package using pnpm:

```bash 
pnpm i @misiki/litekart-utils
```

## Usages 

you can use this by importing services and tehn using teh functions as needed

```bash 
import {services} from '@misiki/litekart-utils'
```

```bash
const data = await services.CartServices.fetchCart(
    ...
)
```


## Contributions
We are in early phase of this npm package and needs contribution from the community.