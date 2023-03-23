/* eslint-disable indent */
export default function ({ store, redirect }) {
  // Check if the user is authenticated
  if (!store.state.auth.isLoggedIn) {
    // Redirect to the login page
    redirect('/login');
  }
}
