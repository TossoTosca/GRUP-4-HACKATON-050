//Data
const users = [
    {
    name: 'santo',
    username: 'santo123',
    password: '123456',
    },
    {
    name: 'patrick',
    username: 'patrick123',
    password: '123456',   
    },
    {
    name: 'krisna',
    username: 'krisna123',
    password: '123456',   
    },
    {
    name: 'rizky',
    username: 'rizky123',
    password: '123456',   
    },
    {
    name: 'nauval',
    username: 'nauval123',
    password: '123456',   
    }
]
//selectors
const login = document.getElementById('loginForm');

//Events
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let passed = false;
    let username = document.getElementById('floatingInput').value;
    let password = document.getElementById('floatingPassword').value;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        passed = true;
        localStorage.setItem('users', JSON.stringify(users[i]))
      }
    }
  
    if (passed) window.location.href = 'index.html';
    if (!passed) alert('Invalid username or password');
  });