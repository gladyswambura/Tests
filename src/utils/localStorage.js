
export const setItem = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key) => {

    
    try {
        const stringItem = localStorage.getItem(key)
        if(stringItem){
            const parsed = JSON.parse(stringItem)
            return parsed
        }
    } catch (error) {
        console.log(error);
    }
}