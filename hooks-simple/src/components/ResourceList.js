import React,  {useState, useEffect} from 'react';
import axios from 'axios';

import useResources from './useResources';

const ResourceList = ({resource}) =>  {

    const resources = useResources(resource)
    // const [resources, setResources] = useState([]);
    
    /* const fetchResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

        setResources(response.data);
        
    } */

    // useEffect(() => {
    //     (async (resource) => {
    //         const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    
    //         setResources(response.data);
            
    //     })(resource)
    // }, [resource])

    return(
        <div>{resources.length}</div>
    )
    
    /* useEffect(() => {
        fetchResource(resource)
    }, [resource]) */

    
     
}

export default ResourceList;