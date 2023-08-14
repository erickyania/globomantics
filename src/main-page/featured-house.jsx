const FeaturedHouse = ({house}) => {
    if(house)
     return (
        <div>
            <div className="row featuredHouse">
                <h3 className="col-md-12 text-centre">Featured House</h3>
            </div>
            <House house={house}></House>
        </div>
     );
}
 
export default FeaturedHouse;