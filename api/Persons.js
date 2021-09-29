const { Router, request } = require("express");
const router = Router();
const generateId = require("../util/GenerateId");

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

router.get("/", (request, response) => {
  return response.json(persons);
});

router.get("/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((p) => p.id === id);
  if (!person) return response.status("400").end();
  return response.json(person);
});

router.delete("/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((p) => p.id !== id);
  response.status("204").end();
});

router.post("/", (request, response) => {
  const body = request.body;
  const insertedName = persons.find((p) => p.name === body.name);

  if (!body.name || !body.number)
    return response.status(400).json({ error: "missing name or number" });

  if (insertedName)
    return response.status(400).json({ error: "name must be unique" });

  const person = {
    id: generateId(persons),
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(person);

  response.json(person);
});

router.get("/info", (request, response) => {
  response.send(
    `Phonebook has info for ${persons.length} people <br> ${new Date()}`
  );
});

module.exports = router;
