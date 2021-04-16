import { useState } from "react"


export const useCounter = ( initialState = 10 )  => {
    
        const [counter, setCounter] = useState(initialState);

        const aumentar = () => setCounter( counter + 1);
            
        const decrementar = () => setCounter( counter - 1);
          
        const resetear = () => setCounter( initialState);

        return {

            counter,
            aumentar,
            decrementar,
            resetear,
        }

}
