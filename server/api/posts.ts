import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

// 基础content文件夹路径
const baseContentFolder = path.join(process.cwd(), 'content');
// 文章路径
const articlesFolder = path.join(baseContentFolder, 'articles');

export default defineEventHandler(() => {
  console.log('Articles folder path:', articlesFolder);

  const fileNames = fs.readdirSync(articlesFolder);
  console.log('Article files:', fileNames);

  const posts = fileNames.map(fileName => {
    // 获取文件名作为文章标题
    const id = fileName.replace(/.md$/, '');

    const fileFullPath = path.join(articlesFolder, fileName);
    const fileContent = fs.readFileSync(fileFullPath, { encoding: 'utf-8' });
    const matterInfo = matter(fileContent);
    const fileInfo = fs.statSync(fileFullPath);

    return {
      id,
      title: matterInfo.data.title || id,
      date: matterInfo.data.date || fileInfo.birthtime,
      content: matterInfo.content,
      data: matterInfo.data
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
});
