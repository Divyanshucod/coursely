import React from 'react'
import Image from 'next/image'
type Props = {}

const Partner = (props: Props) => {
  return (
    <div className="w-full">
    <h2 className="text-center text-gray-700">
      Trusted by over 16,000 companies and millions of learners around the
      world
    </h2>
    <div className="w-full flex justify-between">
      <Image
        src="volkswagen_logo.svg"
        alt="volkswagen_logo"
        height="50"
        width="50"
      />
      <Image src="cisco_logo.svg" alt="cisco_logo" height="50" width="50" />
      <Image src="citi_logo.svg" alt="citi_logo" height="50" width="50" />
      <Image
        src="ericsson_logo.svg"
        alt="ericsson_logo"
        height="50"
        width="50"
      />
      <Image
        src="samsung_logo.svg"
        alt="samsung_logo"
        height="50"
        width="50"
      />
      <Image src="vimeo_logo.svg" alt="vimeo_logo" height="50" width="50" />
      <Image
        src="procter_gamble_logo.svg"
        alt="procter_gamble_logo"
        height="50"
        width="50"
      />
    </div>
  </div>
  )
}

export default Partner