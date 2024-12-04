import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

const Logo = ({ size = 10 }) => {
  return (
    <Image
      alt="Your Company"
      src="/images/pattern/common/logo.svg"
      className={classNames('mx-auto w-auto', `h-${size}`)}
      width={size}
      height={size}
    />
  )
}

export default Logo
