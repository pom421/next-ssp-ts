import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import React from "react";
import { GitHubContext } from "../../components/GitHubContext";
import GitHubUser from "../../components/GitHubUser";
import { InferGetServerSidePropsType } from "next";

import type { GitHubUserType } from "../../types/types";
import { fetcher } from "../../utils/fetcher";

// Type le contexte de la route
export const getServerSideProps = async (
  context: GetServerSidePropsContext<{ id: string }>
) => {
  const id = context.params?.id || "pom421";

  const res = context.res;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const user: GitHubUserType = await fetcher(
    `https://api.github.com/users/${id}`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  return {
    props: { user },
  };
};

// Récupère le type par inférence du getServerSideProps
function GithubPage({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [username, setUsername] = React.useState(user.name || "");

  const refreshData = (username: string) => {
    setUsername(username);
    router.replace("/github/" + username);
  };

  return (
    <GitHubContext.Provider value={{ user, refreshData }}>
      <h1>GitHub</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          refreshData(username);
        }}
      >
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <button type="submit">Go</button>
      </form>

      <GitHubUser />
    </GitHubContext.Provider>
  );
}

export default GithubPage;
