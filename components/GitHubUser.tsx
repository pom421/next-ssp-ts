import Link from "next/link";
import React from "react";
import { useGitHubContext } from "./GitHubContext";

type Props = {};

const users = ["revolunet", "tannerlinsley", "pom421", "garronej", "sw-yx"];

function pickRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const GitHubUser: React.FC<Props> = () => {
  const { user, refreshData } = useGitHubContext();

  return (
    <>
      <div>GitHubUser</div>

      <p>{user?.name}</p>
      <p>Followers: {user?.followers}</p>

      <button onClick={() => refreshData && refreshData(pickRandom(users))}>
        Voir fiche aléatoire
      </button>
    </>
  );
};

export default GitHubUser;
