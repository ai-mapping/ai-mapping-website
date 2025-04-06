import fs from 'fs';
import path from 'path';

// Read the markdown file
const mdFilePath = path.join(process.cwd(), 'src/content/homepage/regional.md');
const mdContent = fs.readFileSync(mdFilePath, 'utf8');

const regionalContent = {
  content: mdContent
};

export default regionalContent;