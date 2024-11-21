import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  console.log(session);
  return (
    <>
      <h1 className="h1-bold">Welcome to Next.js 15</h1>
    </>
  );
};
export default Home;
