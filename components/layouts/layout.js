//import Link from "next/link";
import { Link } from "../../routes";

const Layout = ({ children }) => (
  <div>
    <ul>
      <li>
        <Link route="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link route="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link route="user" params={{ name: "mango" }}>
          <a>User page</a>
        </Link>
      </li>
    </ul>
    {children}
  </div>
);

export default Layout;
