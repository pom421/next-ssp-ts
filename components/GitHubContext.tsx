import { useRouter } from "next/router";
import React from "react";
import { GitHubUserType } from "../types/types";

type GHContextType = {
  user?: GitHubUserType;
  refreshData?: (username: string) => void;
};

export const GitHubContext = React.createContext<GHContextType>({});

export const useGitHubContext = () => {
  const values = React.useContext(GitHubContext);
  if (!values) {
    throw new Error(
      "useGitHubContext must be used within a GitHubContextProvider"
    );
  }
  return values;
};
