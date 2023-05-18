const user = {
  id: 1,
  name: "John",
  age: 25,
};

function save(user) {
  const userString = JSON.stringify(user);
  localStorage.setItem('user', userString);
}

function load() {
  try {
    const userString = localStorage.getItem('user');
    const userObject = JSON.parse(userString);
    console.log(userObject);
  } catch (error) {
    console.log('Error:', error);
  }
}