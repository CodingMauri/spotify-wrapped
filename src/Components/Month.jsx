import React from 'react'

export default function Month({topTracks}) {
  return (
    <div className = "flex w-full h-full flex-col">{topTracks.map((track,index) => (
        <>
        <ul key ={index}>{index + 1 }{track}</ul>
        </>
    ))}</div>
  )
}
