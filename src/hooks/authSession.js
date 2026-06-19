export function getAuthSession() {
  return {
    token: localStorage.getItem("token") || null,
    userId: localStorage.getItem("userId") || null,
    userName: localStorage.getItem("userName") || null,
  };
}

export function saveAuthSession({ token, userId, userName = null }) {
  localStorage.setItem("token", token);
  localStorage.setItem("userId", userId);

  if (userName) {
    localStorage.setItem("userName", userName);
  } else {
    localStorage.removeItem("userName");
  }
}

export function clearAuthSession() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("userName");
}
