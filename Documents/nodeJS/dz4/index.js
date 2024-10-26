const user = {
    name: '',
    email: '',
    password: ''
  };
  
    function readUsersFromFile() {
    try {
      const data = fs.readFileSync('users.json');
      return JSON.parse(data);
    } catch (error) {
      console.error('Ошибка при чтении файла:', error);
      return [];
    }
  }
  
  function writeUsersToFile(users) {
    fs.writeFileSync('users.json', JSON.stringify(users));
  }
  
  function updateUserInFile(user) {
    const users = readUsersFromFile();
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === user.email) {
        users[i] = user;
        break;
      }
    }
    writeUsersToFile(users);
  }
  
  function getUser(userId) {
    const users = readUsersFromFile();
    let user = null;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === userId) {
        user = users[i];
        break;
      }
    }
    return user;
  }
  
  function createUser(userData) {
    const users = readUsersFromFile();
    users.push(userData);
    writeUsersToFile(users);
  }
  
  function deleteUser(userId) {
    const users = readUsersFromFile();
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === userId) {
        users.splice(i, 1);
        break;
      }
    }
    writeUsersToFile(users);
  }
  