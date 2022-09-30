import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/540x270/619895.webp?k=06e39004f89d8794fe72264c0c988f5196a59fcb686c4b0d44171c7201e58e84&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Budapest</h1>
            <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/540x270/619924.webp?k=33e7b956a63a2039046cc86289f34565d0c19c0acae256e08f2dbe95bf28e633&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Vienna</h1>
            <h2>543 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/540x270/653169.webp?k=52221e7299455127fa8ef6730e2399b0c683e8cc4a6ea84ebeecd95d4bac024d&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Prague</h1>
            <h2>2015 properties</h2>
        </div>
      </div>

    </div>
  )
}

export default Featured
