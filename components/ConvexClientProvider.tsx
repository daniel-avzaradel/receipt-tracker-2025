"use client";

import { ReactNode, useEffect } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useAuth, useUser } from "@clerk/nextjs";
import { SchematicProvider, useSchematicEvents } from "@schematichq/schematic-react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const SchematicWrapped = ({ children }: { children: ReactNode }) => {
  const { identify } = useSchematicEvents();
  const { user } = useUser();

  useEffect(() => {
    const userName = 
      user?.username ??
      user?.fullName ??
      user?.emailAddresses[0].emailAddress;

    if(user?.id && identify) {
      identify({
        name: userName,
        // User level keys
        keys: {
          id: user.id,
        },
        // Company level keys
        company: {
          keys: {
            id: user.id,
          }
        }
      })
    }
  }, [user, identify]);

  return children;
}

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <SchematicProvider publishableKey={process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY!}>
        <SchematicWrapped>
          {children}
        </SchematicWrapped>
      </SchematicProvider>
    </ConvexProviderWithClerk>
  );
}
