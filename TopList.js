
class TopList {
   constructor() {
    this.users = [];
   }

   addUser(user) {
     this.users.push({user});
   }

   sort() {
    this.users.sort(function(a, b){
        return b.user.points - a.user.points;
    });
   }

   top10() {
     this.sort();
     var result = [];
     var top10List = this.users.slice(0, 10);
     for (var i = 0; i < top10List.length; i++) {
       result.push({name: top10List[i].user.name, points: top10List[i].user.points});
     }
     return result;
   }


}

module.exports = TopList;
