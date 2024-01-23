const choice = (items) =>{
    const idx = Math.floor(Math.random() * items.length);
    return items[idx];     
    
}



const remove = (item, items) => {
    const index = items.indexOf(item);
    return index !== -1 ? [...items.slice(0, index), ...items.slice(index + 1)] : items;
  };



    // function remove(item, items) {
    //     for (let i = 0; i < items.length; i++) {
    //       if (items[i] === item) {
    //         return [...items.slice(0, i), ...items.slice(i + 1)];
    //       }
    //     }
    //   }
    
        
    





export {choice, remove};