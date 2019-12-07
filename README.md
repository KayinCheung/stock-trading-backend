## Running the project

- npm install
- npm start

It will automatically deploy at port 5000 and connect to this mongodb instance: mongodb+srv://aaa:aaa@cluster0-6fssf.mongodb.net/test?retryWrites=true&w=majority

The DB instance can be modified by changing the variable in `config.js`

## Features

#### GET /portfolio?user=Username

- Returns the portfolio holdings for specified user. In this demo, the holdings is hardcoded to return the same data.

| Input Params  | Type |
| ------------- | ------------- |
| user  | String  |


| Return Fields  | Type |
| ------------- | ------------- |
| user  | String  |
| cash  | Number  |
| stock  | Object, where key is a `string` of stock ticker, value is the `stock` object  |

| Stock Object  | Type |
| ------------- | ------------- |
| position  | Number  |
| cost_basis  | Number  |
| sector  | String  |

#### GET /trade?username=User&page=0

| Fields  | Type |
| ------------- | ------------- |
| username  | String  |
| page  | Integer >=0  |

Returns the trades of the corresponding user at the specified page. Page 0 returns the latest 10 trades.

#### POST /trade/submitorder?username=User&page=0

| Fields  | Type |
| ------------- | ------------- |
| username  | String  |
| page  | Integer >=0  |

Returns the trades of the corresponding user at the specified page. Page 0 returns the latest 10 trades.
