import React from 'react'
import '@/styles/globals.css';
import { title } from 'process';

export const metadata = {
  title: 'propertyPulse',
  description: 'realtor world for proper real estate search'
}

const layout = ({children }) => {
  return (
    <html lang='en'>
      <body>
        <div>{children }</div>
      </body>
    </html>
    
  )
}

export default layout