import { useState } from 'react'

const City = ({data}) => {

    const [ value, setValue ] = useState( "" )



    return (
        <div>
             <h2 className="details">{data.base}</h2>
        </div>
        
    );
}

export default City;