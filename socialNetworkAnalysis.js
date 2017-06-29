var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// List everyone and for each of them, list the names of who they follow and who follows them
function nameList(){

}

// Identify who follows the most people
function whoFollowsMost(){
  var mostFollowing = "";
  var mostFollowingCount = 0;
  for (var personId in data){
    if(mostFollowingCount <= data[personId]["follows"].length){
      mostFollowingCount = data[personId]["follows"].length;
      mostFollowing = data[personId]["name"];
    }
  }
  return mostFollowing;
}

// Identify who has the most followers
function whoHasMostFollowers(){
  var mostFollower = "";
  var mostFollowerCount = 0;
  for (var personId in data){
    var followerCount = 0;
    for (var id in data){
      data[id]["follows"].forEach(function(item){
        if(item == personId){
          followerCount++;
        }
      })
    }
    if(mostFollowerCount <= followerCount){
      mostFollowerCount = followerCount;
      mostFollower = data[personId]["name"];
    }
  }
  return mostFollower;
}

// Identify who has the most followers over 30
function gotMostFollowersOver30(){
  var mostFollowerOver30 = "";
  var mostFollowerCount = 0;
  for (var personId in data){
    var followerCount = 0;
    for (var id in data){
      data[id]["follows"].forEach(function(item){
        if(item == personId && data[id]["age"] >= 30){
          followerCount++;
        }
      })
    }
    if(mostFollowerCount <= followerCount){
      mostFollowerCount = followerCount;
      mostFollowerOver30 = data[personId]["name"];
    }
  }
  return mostFollowerOver30;
}

function followsMostOver30(){
  var mostFollowingOver30 = "";
  var mostFollowOver30Count = 0;
  for (var personId in data){
    var followOver30Count = 0;
    data[personId]["follows"].forEach(function(item){
      if(data[item]["age"] >= 30){
        followOver30Count++;
      }
    })
    if(mostFollowOver30Count <= followOver30Count){
      mostFollowOver30Count = followOver30Count;
      mostFollowingOver30 = data[personId]["name"];
      console.log(mostFollowOver30Count, mostFollowingOver30);
    }
  }
  return mostFollowingOver30;
}

// List those who follow someone that doesn't follow them back
function followNoFollow(){
  var followNoFollowArr = [];
  for (var personId in data){
    var followingArr = data[personId]["follows"];
    var follows = false;
    followingArr.forEach(function(item){
      data[item]["follows"].forEach(function(person){
        if(person == personId){
          follows = true;
        }
      })
    })
    if(follows == false){
      followNoFollowArr.push(data[personId]["name"]);
    }
  }
  return followNoFollowArr;
}

// List everyone and their reach (sum of # of followers and # of followers of followers)
function calculateReach(){
  var resultArr = [];
  for(var personId in data){
    var dataArr = [];
    var name = data[personId]["name"];
    var reach = getNumOfFollowers(personId);
    for (var id in data){
      data[id]["follows"].forEach(function(item){
        if(item == personId){
          reach += getNumOfFollowers(id);
        }
      })
    }
    dataArr.push(name, reach);
    resultArr.push(dataArr);
  }
  return resultArr;
}

function getNumOfFollowers(personId){
  var followerCount = 0;
  for (var id in data){
    data[id]["follows"].forEach(function(item){
      if(item == personId){
        followerCount++;
      }
    })
  }
  return followerCount;
}