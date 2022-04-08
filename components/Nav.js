import { useSession, signIn, signOut } from "next-auth/react";

export const Nav = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );

  return (
    <nav className="flex items-center justify-between navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Seasons</a>
        </li>
        <li>
          <a href="#">Series</a>
        </li>
        <li>
          <a href="#"> Movies</a>
        </li>
      </ul>
      <div className="search">
        <input
          className="w-[500px]"
          type="text"
          name="search"
          id="search"
          placeholder="search this Website"
        />
      </div>
    </nav>
  );
};
