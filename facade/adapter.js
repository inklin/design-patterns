'use strict';

class PgAdapter {
  constructor(connectionString) {
    /*
     * We can use connection strings to make individual
     * connections to the database
     */
    this.connectionString = connectionString;
    this.name = "PG Adapter";
  };

  save(data) {
    /* We create a .save() function
     * in our all adapter classes.
     *
     * The client does not have to worry about
     * how the adapter saves the data.
     */
    console.log("Saving to PG.");
  }
}

class RedisAdapter {
  constructor(connectionString) {
    this.connectionString = connectionString;
    this.name = "Redis Adapter";
  }

  save(data) {
    console.log("Saving to Redis.");
  }
}

const AdapterFacade = (connectionString) => {
  if (connectionString.startsWith("postgres")) {
    return new PgAdapter(connectionString);
  } else if (connectionString.startsWith("redis")) {
    return new RedisAdapter(connectionString);
  } else {
    throw new Exception("That connection is not supported.");
  }
}

/*
 * If we export the two adapters, the client
 * has to decide whether to use the Posgres adapter or the Redis adapter.
 * However, we should be able to decide which adapter to use given
 * a connection string.
 *
 * Example
 * exports.pg = PgAdapter;
 * exports.redis = RedisAdapter;
 *
 * in another file:
 * const PgAdapter = require('./adapter').pg;
 * const repo = new Repository(new PgAdapter("postgres://localhost/example"));
 * repo.save("My data");
 *
 * Here the client is choosing to use the PgAdapter specifically.
 * We can also use a facade to hide the implementation details
 * of which adapter to use, based on the connnection string given.
 */
exports.adapterFacade = AdapterFacade;
