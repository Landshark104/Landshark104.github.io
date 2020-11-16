const db = await openDB('dogsdb', 2, {
    upgrade(db, oldVersion, newVersion, transaction) {
      switch (oldVersion) {
        case 0: // no db created before
          // a store introduced in version 1
          db.createObjectStore('store1')
        case 1:
          // delete the old store in version 2, create a new one
          db.deleteObjectStore('store1')
          db.createObjectStore('store2')
      }
    }
  })