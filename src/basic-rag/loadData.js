import {readFile} from 'node:fs/promises';

export  async function loadData(filePath)        {
   return await readFile(filePath, 'utf-8');
};