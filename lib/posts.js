import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => getFileData(fileName))
  const sortedPostsByDate = allPostsData.sort(sortPostsByDate)

  return sortedPostsByDate
}

function getFileData(fileName) {
  const id = fileNameWithoutExtension(fileName)
  const fileContent = getContentOfFile(postsDirectory, fileName)
  const matterResult = matter(fileContent)
  return {
    id,
    ...matterResult.data
  }
}

function fileNameWithoutExtension(fileName) {
  return fileName.replace(/\.md$/, '')
}

function getContentOfFile(postsDirectory, fileName) {
  const fullPath = path.join(postsDirectory, fileName)
  const fileContent = fs.readFileSync(fullPath, 'utf8')

  return fileContent
}

function sortPostsByDate(a, b) {
  if (a.date < b.date) return 1

  return -1
}

export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileNameWithoutExtension(fileName)
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
