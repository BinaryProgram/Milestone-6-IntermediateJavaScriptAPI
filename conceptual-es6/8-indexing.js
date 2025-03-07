const numbers = [5,2,6,23,27];

// map is best for indexing - most of the case we will use It.
numbers.map((item,index,arr) => {
    console.log('Item ',item," Index ", index,' Array ',arr);
})