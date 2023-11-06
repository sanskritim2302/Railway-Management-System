import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/maillist/MailList";
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



    const Hotel = () => {

        const [slideNumber, setSlideNumber] = useState(0);
        const [openSlider, setOpenSlider] = useState(false);

    const photos = [
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/85257658.jpg?k=4492528f7ee3f1cf80d7415491d106d923dbfabb21e0361d7a0d003f70939492&o=&hp=1"
        },
        {
            src:"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/82094355.jpg?k=d551e575865cae152bed86651e12afc1a143ecefc59e0e07878b744817b2f93c&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/167412358.jpg?k=25ac95d72edd1ca8a23141db27267f33f1e94aa92c78601de47801efe0ee9b05&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/80374576.jpg?k=3dd762c2d0a6914ae02b94cb10f6b1a4f2f7b301db4c622bfc093697b67ca3cc&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/95075441.jpg?k=71b2daea0dbaa611e882eeb3306fbc2fb6a065638d86391eac377ce9dad0b0ac&o=&hp=1"
        },
    ];
    const handleOpenSlider = (i)=> {
        setSlideNumber(i);
        setOpenSlider(true);    
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if(direction === "l"){
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber -1;
        }else {
             newSlideNumber = slideNumber === 0 ? 5 : slideNumber -1;
        }
        setSlideNumber(newSlideNumber);
    }

    return (
        <div>
            <Navbar />
             <Header type="list"/>
             <div className="hotelContainer">
            { openSlider &&  <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark} 
                className="close" 
                onClick={() =>setOpenSlider(false)}/>
                <FontAwesomeIcon icon={faCircleArrowLeft} 
                className="arrow" 
                onClick={()=> handleMove("l")}/>
                <div className="sliderWrapper">
                    <img src={photos[slideNumber].src} alt="" 
                    className="sliderImg" />
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} 
                className="arrow" 
                onClick={()=> handleMove("r")}/>
                </div>}

                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Leman Locke</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>15 Leman Street, Tower Hamlets, London, E1 8EN, United Kingdom –</span>
                    </div>
                    <span className="hotelDistance">Excellent location - 500m from the center</span>
                    <span className="hotelPriceHighlight"> Book a stay over $700 at this property and get a free airport taxi</span>
                   <div className="hotelImages">
                    {photos.map((photo, i)=>(
                        <div className="hotelImageWrapper">
                            <img onClick={() => handleOpenSlider(i)}
                             src={photo.src} 
                             alt=""
                              className="hotelImg" />
                            </div>
                    ))}
                </div>
                <div className="hotelDetails">
                    <div className="hotelDetailsText">
                        <h1 className="hotelTitle">Welcome To Leman Locke!</h1>
                        <p className="hotelDesc">Offering stylish accommodations with free WiFi, Leman Locke is located in Shoreditch, London, 901 m from both the Tower of London and Brick Lane.

                        Each accommodations has city views, a dining area and seating area with bespoke furniture and a flat-screen Samsung Smart TV with Google Chromecast.

                        There is also a fully equipped kitchen with a washing machine, dishwasher, oven, fridge, microwave and toaster. Dishes and utensils are also provided. A rainfall shower, complimentary toiletries and a hairdryer are featured in the private bathrooms.

                        Leman Locke also includes a fitness center with gym. Guests can enjoy a meal at the on-site restaurant, buy a sandwich, salad or coffee from the cafe or a drink at the bar.

                        There is a 24-hour reception and concierge service at Leman Locke.

                        Tower Bridge is 0.6 mi from Leman Locke, while London Bridge is 0.9 mi away. The nearest airport is London City Airport, 5 mi from the property.
                        This is our guests' favorite part of London, according to independent reviews.

                        Couples in particular like the location – they rated it 9.4 for a two-person trip.</p>
                    
                
                    </div>
                    <div className="hotelDetailsPrice">
                        <h1>Property Highlight</h1>
                        <h2>Perfect for a 2-week stay!</h2>
                        <span className="hotelPriceDesc">
                    Located in the top-rated area in London, this property has an excellent location score of 9.3!
                        </span>
                        <h2>
                            <b>$1200</b> (14 nights)
                        </h2>
                        <button>Reserve or Book Now!</button>
                    </div>
                 </div>
                </div>
                <MailList />
            <Footer />
             </div>
        </div>

        )
}

export default Hotel;