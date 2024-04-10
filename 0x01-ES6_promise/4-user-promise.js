function signUpUser(firstName, lastName) {
  return Promise.resolve({
    fsName: firstName,
    laName: lastName,
  });
}

export default signUpUser;
