const TOKEN = "$vG8!z@Qm#L4W^bP2*rT1o%K7y&X3dJ9CqZ5M(N)6F+U";

export function setAuthCookies(username) {
  document.cookie = `username=${username}; path=/; max-age=31536000`;
  document.cookie = `login=${TOKEN}; path=/; max-age=31536000`;
}

export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.length === 2 ? parts.pop().split(';').shift() : null;
}

export function getUsername() {
  return getCookie('username');
}

export function getAuthToken() {
  return getCookie('login') === TOKEN;
}