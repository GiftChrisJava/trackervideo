"use client";
export default function page() {
  return (
    <form action="../auth/signin" method="post">
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />

      <br />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />

      <button>Login</button>
    </form>
  );
}
