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
  }, function(error){
  	console.log("Error");
  }, options);

  return {
    all: function() {
      return friends;
    },
    get: function(phoneNumber) {
      for (var i=0; i < contacts.length; i++) {
      	if(friends[i] == phoneNumber){
      		return friends[i];
      	}
		return "";
      };
    }
  };
});
