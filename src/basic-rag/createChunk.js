export async function createChunk(text) {
        return text.trim().split('\n\n').map(chunk => chunk.trim()).filter(chunk => chunk.length > 0);
}