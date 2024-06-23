const avatarGuideFunction = () => {
  return (
    <div className="child4">
      <p>アバター案内機能</p>
      <p>機能</p>
      <p>
        下記のボタンからサイトにアクセスし、オープンキャンパスマップの地図を読み取ると
      </p>
      <p>
        アバターとボタンがARで表示され、ボタンを押すと案内アナウンスが流れます。
      </p>
      <p>(パソコンからでも使用することができます。)</p>
      <p>※注意事項</p>
      <p>・サイトにアクセスした後、カメラを許可してください。</p>
      <button
        type="button"
        onClick={() =>
          (window.location.href = 'https://www.kamlab-ninja-map.com/explain')
        }
      >
        アバター案内機能へ
      </button>
    </div>
  )
}

export default avatarGuideFunction
