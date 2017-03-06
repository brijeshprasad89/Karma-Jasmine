describe('UsersController', function() {
  var $controller, UsersController, UsersFactory;

  // Mock the list of users we expect to use in our controller
  var userList = [
    { id: '1', name: 'Jane', role: 'Designer', location: 'New York', twitter: 'gijane', pokemon: { name: 'blastoise' }},
    { id: '2', name: 'Bob', role: 'Developer', location: 'New York', twitter: 'billybob',pokemon: { name: 'growlithe' } },
    { id: '3', name: 'Jim', role: 'Developer', location: 'Chicago', twitter: 'jimbo',pokemon: { name: 'hitmonchan' } },
    { id: '4', name: 'Bill', role: 'Designer', location: 'LA', twitter: 'dabill',pokemon: { name: 'barney' } }
  ];

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('components.users'));
  // Add the module for our Users service
  beforeEach(angular.mock.module('api.users'));

  beforeEach(inject(function(_$controller_, _Users_) {
    $controller = _$controller_;
    UsersFactory = _Users_;

    // Spy and force the return value when UsersFactory.all() is called
    spyOn(UsersFactory, 'all').and.callFake(function() {
      return userList;
    });

    // Add the factory as a controller dependency
    UsersController = $controller('UsersController', { Users: UsersFactory });
  }));

  it('should be defined', function() {
    expect(UsersController).toBeDefined();
  });

  // Add a new test for our expected controller behavior
  it('should initialize with a call to Users.all()', function() {
    expect(UsersFactory.all).toHaveBeenCalled();
    expect(UsersController.users).toEqual(userList);
  });
});
