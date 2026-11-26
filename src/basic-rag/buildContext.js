export function buildContext(relevantChunks) {
    return relevantChunks.map(() => {
        const {text, filePath, paragraphIndex} = relevantChunks.payload;
        return `Source - ${filePath} - Paragraph ${paragraphIndex}) - ${text}`
    }).join("\n\n");
}