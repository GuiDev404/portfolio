import React from 'react'
import Tag from './Tag'

const ListOfTags = ({ tags, className, tagClassname }) => {
  return <div className={`flex items-center gap-3 ${className}`}>
    {tags.map(tag=> <Tag key={tag} className={tagClassname} label={tag} />)}
  </div>
}

export default ListOfTags