import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>this page doesn't exist</p>
      <Link href={"/"}>Return to landing page</Link>
    </div>
  );
};

export default NotFound;
