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
        seeder.populateModels(data, function(err, done){
            if(err){
                return console.log("seed err", err)
            }
            if(done){
                return console.log("seed done", done)
            }
            seeder.disconnect();
        });
 
    });

});

export default seeder;