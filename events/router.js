const { Router } = require("express");
const Events = require("./model");

const router = new Router();

function getEvents(request, response, next) {
  Events.findAll()
    .then(events => {
      response.send(events)
    })
    .catch(next);
}

router.get("/", getEvents);

function createEvent(request, response, next) {
  Events.create(request.body)
    .then(event => response.send(event))
    .catch(next);
}

router.post("/userevents", createEvent);

module.exports = router;
