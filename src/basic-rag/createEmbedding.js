import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,
});

export async function createEmbedding(text) {
    const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
    dimensions: 1536,
    encoding_format: "float",
});

return embedding.data.map(item => item.embedding);
}