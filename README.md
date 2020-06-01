# KnoRest

> an opinionated client for interacting with JSON rest endpoints

## Installation

```sh
npm i --save-dev jrest
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
kRest.update(message, 'message')
```


#### `destroy`

Run a DELETE call against member route of endpoint with an id

```sh
kRest.destroy(45)
```

returns `true` if call was successful, `false` if not
