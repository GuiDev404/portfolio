import React from 'react'

const Tag = ({ label, className }) => {
  return (
    <span className={`${className}`}>{label}</span>
  )
}

export default Tag