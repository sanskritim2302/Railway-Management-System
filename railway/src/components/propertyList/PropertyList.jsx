import "./propertyList.css";

 const PropertyList = () => {
  return (
<div className="pList">
    <div className="pListItem">
        <img src="https://images.pexels.com/photos/3188234/pexels-photo-3188234.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Goa Trains</h1>
            <h2>233 hotels</h2>
        </div>
    </div>
    <div className="pListItem">
        <img src="https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Mumbai Trains</h1>
            <h2>15 resorts</h2>
        </div>
    </div>
    <div className="pListItem">
        <img src="https://images.pexels.com/photos/904272/pexels-photo-904272.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Delhi Trains</h1>
            <h2>233 villas</h2>
        </div>
    </div> 
    {/* <div className="pListItem">
        <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>210 apartments</h2>
        </div>
    </div> */}
    <div className="pListItem">
        <img src="https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Bangalore Trains</h1>
            <h2>240 motels</h2>
        </div>
    </div>
</div>  )
}

export default PropertyList;