import seeder from "mongoose-seed";
import data from "./mock.js";

const db = "mongodb://localhost/nest";

seeder.connect(db, function() {
    seeder.loadModels( [
        "./src/accounts/account.model.ts"
    ]);

// Clear specified collections
seeder.clearModels(['Account'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});

export default seeder;