import { QdrantClient } from "@qdrant/js-client-rest";
import "dotenv/config";


const client = new QdrantClient({
    url: process.env.QDRANT_URL,
    apiKey: process.env.QDRANT_API_KEY,
});
export async function retrieveChunk(embedding, topK = 5) {

    const results = await client.query("people", {
        query: embedding,
        with_payload: true,
        // filter: {
        //     must: [
        //         {
        //             key: "vector",
        //             match: {
        //                 vector: embedding,
        //             },
        //         },
        //     ],
        // },
        limit: topK,
    });

    return results.points.map(point => point.payload.chunk);
}

import { QdrantClient } from "@qdrant/js-client-rest";
import { createEmbedding } from "./createEmbedding.js";