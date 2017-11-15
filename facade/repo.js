'use strict';

class Repository {
  constructor(adapter) {
    this.db = adapter;
  }

  save(data) {
    this.db.save(data);
    console.log(`${data} saved to ${this.db.name}.`);
  }
}

module.exports = Repository;
