export function RowList({bookmarks}){
    return (
        bookmarks.map(bookmark=>(
            <tr key={bookmark.id}>
                <td>{bookmark.id}</td>
                <td>{bookmark.title}</td>
                <td>{bookmark.url}</td>
            </tr>
            )
        )
    )
}