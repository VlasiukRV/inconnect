
export function setUser(token) {
  if (!localStorage.getItem('id_token')) {
    localStorage.setItem('id_token', token);
  }
}

export function isAuthenticated() {
  if (localStorage.getItem('id_token')) {
    return true
  }
  return false
}

export function deauthenticateUser() {
  localStorage.removeItem('id_token');
}