import React from 'react'

export const LibraryCard = () => {
  return (
    <div className="card flex gap-2">
      <div className="w-25">
        <img 
          src="https://cdn.shopify.com/app-store/listing_images/2ba7583fa0a005ad77c8d906c8c92b81/icon/CPqqzZvb2P0CEAE=.png"
          alt=""
          width={40} 
          height={40}
          className="rounded"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-white text-sm">Liked Songs</h4>
        <p className="text-gray-400 text-xs">Playlist * 48 songs</p>
      </div>
    </div>
  )
}
