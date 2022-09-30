import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/338334903.webp?k=09477c8554727f13a3519fb475a14923f8b62a11a97515357b53080d9cc76fba&o=&s=1" alt="" className="searchItemImage" />
      <div className="searchItemDesc">
      <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="searchItemDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
          <span className="siPrice">$123</span>
          <span className="siTax0p">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>

        </div>
      </div>
    </div>
  )
}

export default SearchItem
