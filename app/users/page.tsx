import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};
console.log("hello in where");

const UsersPage = async () => {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  console.log("hello");

  const content = (
    <section>
      <h2>
        <Link href={"/"}>Back to home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
          </div>
        );
      })}
    </section>
  );
  return content;
};

export default UsersPage;
