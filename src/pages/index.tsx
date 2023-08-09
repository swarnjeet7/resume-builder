import React, { type ReactElement } from 'react';
import Link from 'next/link';

export default function Home(): ReactElement {
  return (
    <Link href="http://localhost:3000/create-cv/sections/index">
      Create your resume
    </Link>
  );
}