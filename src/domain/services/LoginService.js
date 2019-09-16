import { provider, auth } from '../../config/fireBaseSecurityConfig'
export const ACCESS_TOKEN_KEY = "access_token";

export async function login() {
  const response = await auth.signInWithPopup(provider);
  const profile = response.user;
  const userToken = await profile.getIdToken();
  localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify({
    authenticated: true,
    profile,
    userToken
  }));
}

export async function logout() {
  await auth.signOut();
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}
