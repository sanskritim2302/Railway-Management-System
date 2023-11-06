import "./featured.css";

const Featured = () => {
    return(
        <div className="featured">
            <div className="featuredItem">
                    <img src="https://cf.bstatic.com/xdata/images/city/max500/684500.jpg?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&o="
                    alt="Featured" 
                    className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Marines</h1>
                    {/* <h2>520 Properties</h2> */}
                </div>
            </div>
            <div className="featuredItem">
                    <img src="https://cf.bstatic.com/xdata/images/city/max500/822312.jpg?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o="
                    alt="Featured" 
                    className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Agra</h1>
                    {/* <h2>340 Properties</h2> */}
                </div>
            </div>
            <div className="featuredItem">
                    <img src="https://cf.bstatic.com/xdata/images/city/max500/955874.jpg?k=4a962e9b93f968482ab2a4df07a766be2ba265fb473abbc02c855560a33f4425&o="
                    alt="Featured" 
                    className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Gujrat</h1>
                    {/* <h2>130 Properties</h2> */}
                </div>
            </div>
        </div>
    )
}
export default Featured;