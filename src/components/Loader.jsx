import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200
      }}>
        <TailSpin
          height={80}
          width={80}
          ariaLabel="loading"
          color="#1976d2"
          visible={true}
        />
      </div>
  )
}

export default Loader