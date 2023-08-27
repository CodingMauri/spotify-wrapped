import React from 'react'

export default function Month({topTracks}) {
  return (
    <div>{topTracks.map((track) => (
        <>
        <li>{track}</li>
        </>
    ))}</div>
  )
}
