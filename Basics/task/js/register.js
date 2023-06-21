const username = "Admin";
const password = "Admin@2023";

function validate() {
  const username1 = document.forms["form"]["username"];

  const password1 = document.forms["form"]["password"];

  if (username1.value.length == 0) {
    alert("Username must not be empty");
    return false;
  }
  if (password1.value.length == 0) {
    alert("password must not be empty");
    return false;
  }

  if (username1.value.length > 0 && password1.value.length > 0) {
    if (username1.value == username && password1.value == password) {
      return true;
    }
  }
  alert("Invalid credentials");
  return false;
}
