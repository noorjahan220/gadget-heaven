import toast from "react-hot-toast"


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
    const allCarts = localStorage.getItem('carts')
    
    if(allCarts){
        const carts = JSON.parse(allCarts)
        return carts
    }
    else{
        return []
    }

}




const addFavorite = (detail) =>{
    
    const favorites = getAllFavorites()


    const isExist = favorites.find(item => item.product_id === detail.product_id);
    favorites.push(detail);
    localStorage.setItem('favorites',JSON.stringify(favorites) )
    toast.success('Successfully add to favorites!');
}

const addCart = (detail) =>{
    const carts = getAllCarts()

    const isExistCart = carts.find(item => item.product_id === detail.product_id);
    
   
      if(isExistCart) return toast.error('This item is already in the cart!');
   
    
        carts.push(detail);
    localStorage.setItem('carts',JSON.stringify(carts) )
    toast.success('Successfully add to cart!');
  
}


const removeCart =(id)=>{
    const carts = getAllCarts();
    const remainingCart = carts.filter(detail=> detail.product_id != id);
    localStorage.setItem('carts',JSON.stringify(remainingCart) )
    toast.success('Successfully Removed Cart!');
}

const removeWish = (item)=>{
    const favorites = getAllFavorites();
    const remainingWish = favorites.filter(detail=> detail.product_id != item);
    localStorage.setItem('favorites',JSON.stringify(remainingWish) )
    toast.success('Successfully Removed Favorites!');
}








export{getAllCarts, getAllFavorites, addFavorite, addCart,removeCart,removeWish}

