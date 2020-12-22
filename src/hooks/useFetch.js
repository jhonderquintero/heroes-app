import {useState, useEffect, useRef} from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    const componentIsMounted = useRef(true);

    useEffect(() => {
        return () => {
            componentIsMounted.current = false
        }
    }, []);

    useEffect(() => {
        setState({
            data: null,
            loading: true,
            error: null
        });
        
        fetch(url)
        .then(resp => resp.json())
            .then(data => {
                if(componentIsMounted){
                    setState({
                        data, 
                        loading: false,
                        error: null,
                    });
                }else{
                    console.log('Data no received');
                }
            })
    }, [url])

    return {...state}
}
