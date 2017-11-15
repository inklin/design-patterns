'use strict';
const Repository = require('./repo');
const AdapterFacade = require('./adapter').adapterFacade;

// Using Postgres connection string
const repo = new Repository(AdapterFacade("postgres://localhost/example"));
repo.save("test data");

// Using redis connection connection string
const secondRepo = new Repository(AdapterFacade("redis://localhost/example"));
secondRepo.save("some other test data");
