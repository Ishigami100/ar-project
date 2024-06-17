import React from 'react'

const Footer = () => {
  return (
    <footer>
      アンケートにご協力ください。
      <button
        type="button"
        onClick={() =>
          (window.location.href = 'https://forms.gle/dqBYki2QWNmtinyS9')
        }
      >
        アンケートへ
      </button>
    </footer>
  )
}

export default Footer
