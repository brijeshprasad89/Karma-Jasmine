describe('Users factory', function() {
  var Users;

  var userList = [
     {
       id: '1',
       name: 'Jane',
       role: 'Designer',
       location: 'New York',
       twitter: 'gijane',
       pokemon: { name: 'blastoise' }
     },
     {
       id: '2',
       name: 'Bob',
       role: 'Developer',
       location: 'New York',
       twitter: 'billybob',
       pokemon: { name: 'growlithe' }
     },
     {
       id: '3',
       name: 'Jim',
       role: 'Developer',
       location: 'Chicago',
       twitter: 'jimbo',
       pokemon: { name: 'hitmonchan' }
     },
     {
       id: '4',
       name: 'Bill',
       role: 'Designer',
       location: 'LA',
       twitter: 'dabill',
       pokemon: { name: 'barney' }
     }
   ];

   var singleUser = {
   id: '2',
   name: 'Bob',
   role: 'Developer',
   location: 'New York',
   twitter: 'billybob',
   pokemon: { name: 'growlithe' }
 };
  // Before each test load our api.users module
  //angular.mock is optional in the below line. Instead you can write beforeEach(module('api.users'))
  beforeEach(angular.mock.module('api.users'));

  // Before each test set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_Users_) {
    Users = _Users_;
  }));

  // A simple test to verify the Users factory exists
  it('should exist', function() {
    expect(Users).toBeDefined();
  });

  // A set of tests for our Users.all() method
 describe('.all()', function() {
   // A simple test to verify the method all exists
   it('should exist', function() {
     expect(Users.all).toBeDefined();
   });

   it('should return a hard-coded list of users', function() {
      expect(Users.all()).toEqual(userList);
    });
 });

 // A set of tests for our Users.findById() method
   describe('.findById()', function() {
     // A simple test to verify the method findById exists
     it('should exist', function() {
       expect(Users.findById).toBeDefined();
     });

     // A test to verify that calling findById() with an id, in this case '2', returns a single user
    it('should return one user object if it exists', function() {
      expect(Users.findById('2')).toEqual(singleUser);
    });

    it('should return undefined if the user cannot be found', function() {
      expect(Users.findById('ABC')).not.toBeDefined();
    });

   });

});
