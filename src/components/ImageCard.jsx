import React from 'react'
import Tag from './Tag'

export default function ImageCard({ image }) {
    
    return (
        <a href={image.pageURL}><div className="max-w-sm overflow-hidden rounded shadow-lg">
        <img
          src={image.webformatURL}
          alt=""
          className="min-w-full"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {image.tags.split(",").map((tag, i) => {
                    return (
                        <Tag key={i} tag={tag}/>
                    )
                })}
        </div>
        </div>
        </a>
  )
}

