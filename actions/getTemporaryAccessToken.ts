"use server"

import { currentUser } from "@clerk/nextjs/server";
import { SchematicClient } from "@schematichq/schematic-typescript-node";

const apiKey = process.env.SCHEMATIC_API_KEY;
const client = new SchematicClient({ apiKey });
// Get a temporary access token
export async function getTemporaryAccessToken(companyId: string) {
    console.log("Getting temporary access token");
    const user = await currentUser();

    if(!user) {
        throw new Error("User not found");
    }

    console.log("Issuing temporary access token for user", user.id);

  const resp = await client.accesstokens.issueTemporaryAccessToken({    
    resourceType: "company",
    lookup: { id: user.id }, // The lookup will vary depending on how you have configured your company keys
  });

  console.log("Token response received :",
    resp.data ? "Token issued successfully" : "Token issuance failed"
  );
  
  return resp.data?.token;
}