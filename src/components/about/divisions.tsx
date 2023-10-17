import React from 'react'

export default function Divisions({data}: any) {
  return (
    <div className="text-primary">
      <div className="text-5xl font-medium">Divisions</div>
      <div className='text-xl'>{data.description}</div>
    </div>
  );
}