import toast from "react-hot-toast"

// get all coffees from local storage
const getAllFavorites = ()=>{
    const all = localStorage.getItem('favorites')
    
    if(all){
        const favorites = JSON.parse(all)
        return favorites
    }
    else{
        return []
    }

}
const getAllCarts = ()=>{
    const allCarts = localStorage.getItem('favorites')
    
    if(allCarts){
        const carts = JSON.parse(allCarts )
        return carts
    }
    else{
        return []
    }

}


// add a coffee to local storage

const addFavorite = (detail) =>{
    const favorites = getAllFavorites()
    const isExist = favorites.find(item => item.id == detail.id)
    if(isExist) return toast.error('Favorite item is already exists!');
    favorites.push(detail);
    localStorage.setItem('favorites',JSON.stringify(favorites) )
    toast.success('Successfully add to favorites!');
}

const addCart = (detail) =>{
    const carts = getAllCarts()
    const isExists = carts.find(item => item.id == detail.id)
    if(isExists) return toast.error('This item is already exists in cart!');
    carts.push(detail);
    localStorage.setItem('carts',JSON.stringify(carts) )
    toast.success('Successfully add to cart!');
}







// remove coffee form local storage


export{addFavorite}
export{addCart}
export{getAllFavorites}