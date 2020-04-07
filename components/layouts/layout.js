import Link from "next/link";

const Layout = ({ children }) => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/user?name=mango" as="/user/mango">
          <a>User page</a>
        </Link>
      </li>
    </ul>
    {children}
  </div>
);

export default Layout;
