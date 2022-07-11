import { FromSchema } from "json-schema-to-ts";
import { GistSchema, UserSchema } from "../public/github-schema";

export type GitHubUserType = FromSchema<typeof UserSchema>;
export type GitHubGistType = FromSchema<typeof GistSchema>;
