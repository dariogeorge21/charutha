import React from 'react'
import Link from 'next/link';

const SubHeader = () => {
  return (
    <div>
      <div className="flex flex-col items-start">
        <Link
          href="/"
          className="text-xl sm:text-6xl font-bold tracking-tighter transition-colors duration-300 text-white"
          style={{ 
            fontFamily: 'var(--font-playfair)',
            fontWeight: 900,
            letterSpacing: '-0.02em'
          }}
        >
          CHARUTHA
        </Link>
        <span
          className="text-[0.5rem] sm:text-xs font-light tracking-[0.2em] transition-colors duration-300 self-end text-white/80"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          ESTD 1995
        </span>
      </div>
    </div>
  )
}

export default SubHeader
