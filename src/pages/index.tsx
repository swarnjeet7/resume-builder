import React, { type FC } from 'react';
import Link from 'next/link';

export default function Home(): FC {
  return (
    <Link href="http://localhost:3000/create-cv/sections/index">
        Create your resume
      </Link>
  );
}
