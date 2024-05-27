import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPost from "./components/UserPost";
import type { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({ params: { userId } }: Params) : Promise<Metadata> {
  const userdata: Promise<User> = getUser(userId);
  const user: User = await userdata;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  }
}

const UserDetails = async ({ params: { userId } }: Params) => {
  const userdata: Promise<User> = getUser(userId);
  const getUserPost: Promise<Post[]> = getUserPosts(userId);

  // const [user, userPosts] = await Promise.all([userdata, getUserPost]);

  const user = await userdata;

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPost promise={getUserPost} />
      </Suspense>
    </>
  );
};

export default UserDetails;
