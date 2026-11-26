import {loadData} from './loadData.js';
import {createChunk} from './createChunk.js';
import {createEmbedding} from './createEmbedding.js';
import {storeEmbedding} from './storeEmbedding.js';

const filePath = './src/docs/elon.txt';
const data = await loadData(filePath);
const chunks = await createChunk(data);
const embeddings = await createEmbedding(chunks);

console.log(embeddings);
await storeEmbedding(filePath, chunks, embeddings);