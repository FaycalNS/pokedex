"use client";

import { ApolloProvider as Provider } from "@apollo/client";
import client from "@/lib/api/graphql/client";

export default function ApolloProvider({ children }: { children: React.ReactNode }) {
  return <Provider client={client}>{children}</Provider>;
}
