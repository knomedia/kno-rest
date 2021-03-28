# KnoRest

> an opinionated client for interacting with JSON rest endpoints

## Installation

```sh
npm i --save-dev kno-rest
```

## Notes

This client has several opinions, and was initially built for quickly working
with rails JSON apis that I often end up building. The conventions it follows
work well with my workflow, but your mileage may vary.

As an example of this, see the `src/default_headers.js` file where you'll see
that all the rest calls include the `X-CSRF-Token` header which is plucked from
the rails page on which the application lives. Also, we always set the `Accept`
header to `application/json`


## Basic Usage

Create a new instance and call a crud endpoint:

```js
cont ENDPOINT = "/api/v1/messages"
async function getMessages() {
  let messageService = new KRest(ENDPOINT)
  let messages = await messagesService.index() // makes a GET call to endpoint
  return messages
}
```

## Methods


#### `index`

Run a GET call against endpoint:

```sh
kRest.index()
```


#### `create`

Run a POST call against endpoint:

```sh
kRest.create({message: {title: "hi", user_id: 3}})
```


#### `show`

Run a GET call against member route of endpoint with an id

```sh
kRest.show(45)
```


#### `update`

Run a PUT call against member route of endpoint with an id

```sh
let message = {id: 45, title:"hello", user_id: 3}
kRest.update(message.id, {message})
```


#### `destroy`

Run a DELETE call against member route of endpoint with an id

```sh
kRest.destroy(45)
```

returns `true` if call was successful, `false` if not


## non-standard REST endpoints

The above methods all take advantage of two methods on the kno-rest object.
`collection` and `member`. Using them you can buildup endpoint urls and execute
ajax calls to non-standard REST endpoints as well

For example assume you have typical REST crud stuff for a Foo at `/api/v1/foo`,
but you also have a member route at `/api/v1/foo/:id/bars`. You can use the
`member` method to hit it with various method requests.

```javascript
let ENDPOINT = "/api/v1/foo"
krest = new KnoRest(ENDPOINT)
let bar = {name: 'baz'}
kRest.member('POST', 32, {bar}, 'bar')
// sends  POST to '/api/v1/foo/32/bar' with the {bar} object
```

Same for collection routes:

```javascript
let ENDPOINT = "/api/v1/foo"
krest = new KnoRest(ENDPOINT)
krest.collection('GET', {from: '7d', to: '2d'}, 'sort')
// calls GET on /api/v1/foo/sort with the from and to params
```
```
