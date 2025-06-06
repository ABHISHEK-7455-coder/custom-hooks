import { useState, useEffect } from "react";

export default function useFetch(url){
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        
        useEffect(() => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to fetch users');
                setLoading(false);
            });
        }, []);

        return {
            data,
            loading,
            error
        }
}