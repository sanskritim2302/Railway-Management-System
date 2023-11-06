import './searchItem.css';

const SearchItem = () => {
  return (
<div className="searchItem">
    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/85257658.jpg?k=4492528f7ee3f1cf80d7415491d106d923dbfabb21e0361d7a0d003f70939492&o=" 
    alt="" 
    className="siImg"
     />
    <div className="siDesc">
        <h1 className="siTitle">Leman Locke</h1>
        <span className="siDistance">4km from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio</span>
        <span className="siFeatures">Entire apartment • 1 bedroom • 1 bathroom • 1 kitchen • 29m²</span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
    </div>
    <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">$112</span>
            <span className="siTaxOp">includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
        </div>
    </div>
    
</div>
    )
}

export default SearchItem