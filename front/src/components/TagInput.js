import React, { useState } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import  '../styles/reset.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';
import '../styles/style_tag.css';
import { useStore } from 'react-redux';
const KeyCodes = {
  comma: 188,
  enter: 13,
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

const Tags = () => {
  const [tags, setTags] = useState([])
  const store = useStore()
  const handleDelete = i => {
    const newTags = tags.filter((tag, index) => index !== i)
    setTags(newTags)
  }

  const handleAddition = tag => {
    setTags([...tags, tag])
  }

  return (
    <div className="search-input__row">
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