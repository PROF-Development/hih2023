import React, { useState } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import '../styles/style_tag.css'

const KeyCodes = {
  comma: 188,
  enter: 13,
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

const Tags = () => {
  const [tags, setTags] = useState([])

  const handleDelete = i => {
    const newTags = tags.filter((tag, index) => index !== i)
    setTags(newTags)
  }

  const handleAddition = tag => {
    console.log(tag)
    console.log(tags)
    setTags([...tags, tag])
  }

  return (
    <div className="tags-container">
      <ReactTags
        tags={tags}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        delimiters={delimiters}
        placeholder="Words"
        minQueryLength={1}
        allowDragDrop={false}
        classNames={{
          tags: 'tags',
          tagInput: 'tag-input',
          tag: 'tag',
          remove: 'tag-remove',
        }}
      />
    </div>
  )
}

export default Tags;