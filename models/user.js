import { users } from './lib/db';


class User {
  static add(props) {
    const user = props;
    user.id = users.length + 1;
    users.push(user);
    return user;
  }

  static find(id) {
    const id = parseInt(id, 10);
    const user = users.find(user => user.id === id);
    return user;
  }

  static all(){
  	return users;
  }
}

export default User;
