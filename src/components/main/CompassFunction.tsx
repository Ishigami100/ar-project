import React from 'react'

const CompassFunction = () => {
  return (
    <div className="child1">
      <p>コンパス機能</p>
      <p>機能</p>
      <p>
        下記のボタンからサイトにアクセスし、オープンキャンパスマップの地図を読み取ると
      </p>
      <p>ARで神戸研究室まで直線距離と方角を表示します。</p>
      <p>(パソコンからでも使用することができます。)</p>
      <p>※注意事項</p>
      <p>・使う際は必ず位置情報をONにして使ってください。</p>
      <p>・サイトにアクセスした後、カメラを許可してください。</p>
      <p>・方角を示す場合は必ず歩きながら使用してください。</p>
      <button
        type="button"
        onClick={() =>
          (window.location.href = 'https://www.kamlab-ninja-map.com/compass')
        }
      >
        コンパス機能へ
      </button>
    </div>
  )
}

export default CompassFunction
