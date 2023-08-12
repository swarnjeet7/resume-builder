import React, { type ReactElement } from 'react';
import Link from 'next/link';

export default function Home(): ReactElement {
  return (
    <div className="w-full">
      <Link
        href="http://localhost:3000/create-cv/sections/index"
        className="w-full"
      >
        Create your resume
      </Link>
    </div>
  );
}
