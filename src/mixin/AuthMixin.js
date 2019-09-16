import { ACCESS_TOKEN_KEY } from '../domain/services/LoginService'

export default {
  computed: {
    $currentUser() {
      const currentUser = localStorage.getItem(ACCESS_TOKEN_KEY);
      return currentUser ? JSON.parse(currentUser) : null;
    }
  }
}
