import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fplist">
        <div className="fpItem">
             <img src="https://cf.bstatic.com/xdata/images/hotel/square600/245003751.webp?k=826fbf4b4b8ae9d3373e536be44191a267d1ef20b08f276aef0d0707e1b00eb4&o=&s=1" alt="" className="fpImg" />      
        <span className="fpName">Ocean View Goan Beach House</span>        
        <span className="fpCity">Goa</span>
        <span className="fpPricing">41% less than usual</span>   
        <span className="fpRating">
        <button>9.4</button>
        <span>Wonderful</span>   
                </span>
            </div>
        <div className="fpItem">
             <img src="https://cf.bstatic.com/xdata/images/hotel/square600/239135131.jpg?k=b416e142e94dd5101eafcce452697548738a5753ff610dd3a999f03a20e8bc1c&o=" alt="" className="fpImg" />      
        <span className="fpName">The Oberoi</span>        
        <span className="fpCity">Mumbai</span>
        <span className="fpPricing">Luxury hotel with dining</span>   
        <span className="fpRating">
        <button>8.6</button> 
        <span>Excellent</span>   
                </span>
                 </div><div className="fpItem">
             <img src="https://images.pexels.com/photos/18816019/pexels-photo-18816019/free-photo-of-lake-surrounded-by-a-coniferous-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"height={"245px"} alt="" className="fpImg" />      
        <span className="fpName">Vijinapura Lake</span>        
        <span className="fpCity">Bangalore</span>
        <span className="fpPricing">Great place to visit</span>   
        <span className="fpRating">
        <button>9.4</button> 
        <span>Impressive</span>   
                </span>
                 </div>

                 <div className="fpItem">
             <img src="https://images.pexels.com/photos/13471509/pexels-photo-13471509.jpeg?auto=compress&cs=tinysrgb&w=600
             " alt="" height={"245px"} className="fpImg" />      
        <span className="fpName"> Hotel Red Fort</span>        
        <span className="fpCity">Delhi</span>
        <span className="fpPricing">Most popular attraction </span>   
        <span className="fpRating">
        <button>9.2</button> 
        <span>Awesome</span>   
                </span>
                 </div>

            </div>

  )
}

export default FeaturedProperties;