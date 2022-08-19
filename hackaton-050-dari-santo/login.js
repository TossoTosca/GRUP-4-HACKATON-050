//Data
let users = [
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
if(!localStorage.getItem(`users`)) 
localStorage.setItem(`users`, JSON.stringify(users, null, 2))
//signUp Function

function tambahUser() {
console.log('here');
let objTemp = {}
let NamaBaru = document.getElementById("NamaBaru").value;
console.log(NamaBaru);
let usernameBaru = document.getElementById("UsernameBaru").value;
let passwordBaru = document.getElementById("PasswordBaru").value;
let users = JSON.parse(localStorage.getItem(`users`))
console.log(users)
objTemp.name = NamaBaru
objTemp.username = usernameBaru
objTemp.password = passwordBaru
users.push(objTemp)
localStorage.setItem(`users`, JSON.stringify(users, null, 2))
alert(`Register Berhasil silahkan klik tombol silang dan sign in`)

}


//selectors
const login = document.getElementById('loginForm');

//Events
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let passed = false;
  let username = document.getElementById('floatingInput').value;
  let password = document.getElementById('floatingPassword').value;
  let users = JSON.parse(localStorage.getItem(`users`))
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      passed = true;
      localStorage.setItem('user', JSON.stringify(users[i]))
    }
  }

  if (passed) window.location.href = 'index.html';
  if (!passed) alert('Invalid username or password');
});