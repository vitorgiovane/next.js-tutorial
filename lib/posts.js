import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => getFileData(fileName))
  const sortedPostsByDate = allPostsData.sort(sortPostsByDate)

  return sortedPostsByDate
}

function getFileData(fileName) {
  const id = removeExtensionMdFromFileName(fileName)
  const fileContent = getContentOfFile(postsDirectory, fileName)
  const matterResult = matter(fileContent)
  return {
    id,
    ...matterResult.data
  }
}

function removeExtensionMdFromFileName(fileName) {
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
