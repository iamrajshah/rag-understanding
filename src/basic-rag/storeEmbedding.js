import { QdrantClient } from "@qdrant/js-client-rest";
import "dotenv/config";
    
const client = new QdrantClient({
  url: process.env.QDRANT_URL,
  apiKey: process.env.QDRANT_API_KEY,
});

await client.createCollection("people", {
  vectors: { size: 1536, distance: "Cosine" },
});

export async function storeEmbedding(filePath, chunks, embedding) {
    // Implement the logic to store the 
    const points = chunks.map((chunk, index) => ({
        id: index,
        vector: embedding[index],
        payload: {
            chunk,
            filePath,
            paragraphIndex: index + 1,
        },
    }));

    await client.upsert("people", {
        points,
    });

}