angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
	
	var friends = [];  

  	var fields = ["name", "phoneNumbers"];
  	var options = new ContactFindOptions();
	options.filter="";
	options.multiple=true; 
  
  	navigator.contacts.find( fields, function(contacts){
  		friends = contacts;
  		console.log("friends.size" + friends.length);
  		console.log("contacts.size" + contacts.length);
  	}, function(error){
  		console.log("Error");
  	}, options);

  	return {
    	all: function() {
      	return friends;
  	  },
    	get: function(phoneNumber) {
      		for (var i=0; i < contacts.length; i++) {
      			for (var k=0; k < friends[i].phoneNumbers.length; k++) {
					if(friends[i].phoneNumbers[k] == phoneNumber){
      					return friends[i];
      				}
				}
     	 	}
     	 	return "";
    	}
 	 };
});
