import React from 'react'

const rdNavigationFunction = () => {
  return (
    <div className="child2">
      <p>RDナビゲーション機能</p>
      <p>機能</p>
      <p>下記のボタンからサイトにアクセスし、RD学系の紹介冊子にかざすと</p>
      <p>ARでナビゲーターが各コースの紹介をしてくれます。</p>
      <p>(パソコンからでも使用することができます。)</p>
      <p>※注意事項</p>
      <p>・サイトにアクセスした後、カメラを許可してください。</p>
      <button
        type="button"
        onClick={() =>
          (window.location.href = 'https://www.kamlab-ninja-map.com/rd')
        }
      >
        RDナビゲーション機能へ
      </button>
    </div>
  )
}

export default rdNavigationFunction
