angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
	
	var contactsLoadedEvent = new Event('contactsLoaded');
	
	var friends = [];  

  	var fields = ["name", "phoneNumbers"];
  	document.addEventListener("deviceready", function(){
		var options = new ContactFindOptions();
		options.filter="";
		options.multiple=true; 
	  
	  	navigator.contacts.find( fields, function(contacts){
	  		for (var i=0; i < contacts.length; i++) {
				friends.push(contacts[i].clone());
			}
			document.dispatchEvent(contactsLoadedEvent);
	  	}, function(error){
	  		console.log("Error");
	  	}, options);
	},
	false);

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
