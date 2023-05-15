
const Clim=({data})=>{


    // Cadena para las imagenes
    let aux=""
    aux=data?.weather?.[0].icon
    let aux2="./"+aux+".svg"

    
    return(
        <div className="back">
          
            <div className="weather-card">
                
                <div className="section1">
                   <h1 className="Grades">{Math.round(data?.main?.temp)}°</h1>
                   <img src={aux2} alt=""/>
                </div>

                <div className="section2">
                   <h2 className="details">{data?.weather?.[0].main}</h2>
                </div>
          
                <div className="section3">
                   <h2 className="Country">{data?.name}-{data?.sys?.country}</h2>
                   <h2 className="details">{data?.weather?.[0].description}</h2>
                </div>
            </div>
           

          

        </div>
    )
}
export default Clim;