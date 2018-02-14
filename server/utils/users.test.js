const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Lounge'
    }, {
      id: '2',
      name: 'Jen',
      room: 'Gist'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Lounge'
    }]
  });

  it('should add new user', () => {
    let users = new Users();
  let user = {
    id: '123',
    name: 'Peter',
    room: 'The Office Fans'
  }

  let resUser = users.addUser(user.id, user.name, user.room);

  expect(users.users).toEqual([user]);
  });
  
  it('should remove a user', () => {
    userId = '1';
    let user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    userId = '88';
    let user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    let userId ='2'
    let user = users.getUser(userId);
    expect(user.id).toBe(userId)
  });
  it('should not find a user', () => {
    let userId = '67'
    let user = users.getUser(userId)

    expect(user).toNotExist();
  });

  it('should return names for Lounge', () => {
    let userList = users.getUserList('Lounge');

    expect(userList).toEqual(['Mike', 'Julie']);
  });
  it('should return names for Gist', () => {
    let userList = users.getUserList('Gist');

    expect(userList).toEqual(['Jen']);
  });
});