import React, {useRef} from 'react'

type Props = { 
    children: React.ReactNode;
}

export const FeatureTitle = ({children}:Props) => {
  const ref = useRef<HTMLParagraphElement>(null)
  return (
    <p className="font-komikax py-16 text-4xl text-gray-300">
    {children}
  </p>
  )
}
