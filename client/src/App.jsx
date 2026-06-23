import { Children } from 'react'
import './App.css'
import {RowList} from './components/BookmarkRow.jsx'

function App() {

  const bookmarks=[
    {
        id:1,
        title:"React",
        url:"https://react.dev/"
    },
    {
        id:2,
        title:"TypeScript",
        url:"https://www.typescriptlang.org/docs/"
    },
    {
        id:3,
        title:"Express",
        url:"https://expressjs.com/en/guide"
    },
  ]

  return (
    <>
      <section id="center">
        <div>
          <h1>My Bookmarks</h1>
          <table>
            <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>URL</th>
                    </tr>
              </thead>
            <tbody>
              <RowList bookmarks={bookmarks} />
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default App
