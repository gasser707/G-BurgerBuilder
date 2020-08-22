import {useState, useEffect} from 'react'


export default httpClient =>{
    
    const [error, setError] = useState(null)


        //used to have component will mount here
        const reqInterceptors = httpClient.interceptors.request.use(req => {

            setError(null)
            return req;
        });

        const resInterceptors = httpClient.interceptors.response.use(response => response, error => {
            setError(error)

        });

        //used to have component will unmount that why we have clean up function
        useEffect(() => {

            return () => {

                httpClient.interceptors.request.eject(reqInterceptors);
                httpClient.interceptors.response.eject(resInterceptors);

            }
        }, [reqInterceptors, resInterceptors])




        const errorConfirmedHandler = () => {
            setError(null)
        }

        return [error, errorConfirmedHandler]




}