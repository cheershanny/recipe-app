import React from 'react'

const RecipePage = ({ params }: { params: { slug: string } }) => {
  return (
    <div>RecipePage: {params.slug}</div>
  )
}

export default RecipePage