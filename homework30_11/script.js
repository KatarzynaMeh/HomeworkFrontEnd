const fetchProduct = (id, callback) =>
  fetch(`https://dummyjson.com/users/${id}`)
    .then((responce) => responce.json())
    .then((data) => callback(data));

const showUser = (userInfo) => {

  const userContainer = document.createElement("div");
  document.body.append(userContainer);

  const userName = document.createElement("p");
  userName.classList.add(".user-name");
  userName.innerText = `Vorname: ${userInfo.firstName}`;

  const userSurname = document.createElement("p");
  userSurname.classList.add(".user-surname");
  userSurname.innerText = `Nachname: ${userInfo.lastName}`;

  const userAge = document.createElement("p");
  userAge.classList.add(".user-age");
  userAge.innerText = `Alter: ${userInfo.age}`;

  const userMail = document.createElement("p");
  userMail.classList.add(".user-mail");
  userMail.innerText = `Email: ${userInfo.email}`;

  const userPhone = document.createElement("p");
  userPhone.classList.add(".user-phone");
  userPhone.innerText = `Telefonnummer: ${userInfo.phone}`;

  const userAvatar = document.createElement("img");
  userAvatar.classList.add(".user-img");
  userAvatar.src = userInfo.image;

  userContainer.append(
    userAvatar,
    userName,
    userSurname,
    userAge,
    userMail,
    userPhone
  );
};

const myUser = fetchProduct(1, (users) => showUser(users));


const arrayUsers = (id) => {
  let arr = [];
  for (let i = 0; i <= 15; i++) {
    arr.push(id[i]);
  }
};

arrayUsers(myUser);



