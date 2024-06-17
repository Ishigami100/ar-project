import React from 'react'

const PosterAudioFunction = () => {
  return (
    <div className="child3">
      <p>ポスター音声機能</p>
      <p>機能</p>
      <p>
        下記のボタンからサイトにアクセスし、神戸研究室に飾られているポスターを読み取ると
      </p>
      <p>
        ARでスタート、ストップボタンが表示され、押すと各ポスターの音声が流れます。
      </p>
      <p>(パソコンからでも使用することができます。)</p>
      <p>※注意事項</p>
      <p>・サイトにアクセスした後、カメラを許可してください。</p>
      <button
        type="button"
        onClick={() =>
          (window.location.href = 'https://www.kamlab-ninja-map.com/poster')
        }
      >
        ポスター音声機能へ
      </button>
    </div>
  )
}

export default PosterAudioFunction
