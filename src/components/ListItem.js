import React from 'react'
import { Link } from 'react-router-dom'


let getTime = (note) => {
    return new Date(note.updated).toLocaleDateString()
}


let getTitle = (note) => {
    const title = note.body.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0, 45)
    }
    return title
}


let getContent = (note) => {
    //Get content after title
    let title = getTitle(note)
    let content = note.body.replaceAll('\n', '')
    content = content.replaceAll(title, '')
    if (content.length > 45) {
        return content.slice(0, 45) + '...'
    } else {
        return content
    }

}


const ListItem = ({ post }) => {
    return (
        <Link to={`/post/${post.id}`}>
            <div className="notes-list-item">
                <h3>{getTitle(post)}</h3>
                <p><span>{getTime(post)}</span>{getContent(post)}</p>
            </div>
        </Link>
    )
}

export default ListItem