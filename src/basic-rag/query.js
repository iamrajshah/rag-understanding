import {createEmbedding} from './createEmbedding.js';
import {retrieveChunk} from './retrieveChunk.js';
import {buildContext} from './buildContext.js';
import { generateResponse } from './generateResponse.js';

const query = "What is Elon Musk's vision for the future?";

const [embedding] = await createEmbedding([query]);

const relevantChunks = await retrieveChunk(embedding);
console.log(relevantChunks);

const context = buildContext(relevantChunks);
console.log(context);

const response = generateResponse(context);
console.log(response);  