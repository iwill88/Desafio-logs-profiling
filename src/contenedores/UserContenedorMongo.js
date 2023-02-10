const {UsersDAO} = require('../../MongoDB/mongoConnection')
class UsersContenedor {
    constructor  () {
       
       this.database = UsersDAO
       
   }

   getAll(){
        return  this.database.find({});
         
        
   }

   
   find(username) { 
       return this.database.findOne({username:username});
   }

   async save(newUser) {
       await this.database.create(newUser);
       return newUser;
   }


    deleteUser(_id) {
    console.log("id",_id);
    return this.database.deleteOne({_id});
   }


}

module.exports = UsersContenedor;