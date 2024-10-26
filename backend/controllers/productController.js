


// function for 'add product'
// p_img2_1,p_img2_2,p_img2_3,p_img2_4

const addProduct = async(req, res) => {
    try {
        const {name, description, price, category, subCategory, sizes, bestseller} = req.body

        const image1 = req.files.image1[1]
        const image2 = req.files.image2[1]
        const image3 = req.files.image3[1]
        const image4 = req.files.image4[1]

        console.log(name, description, price, category, subCategory, sizes, bestseller)
        console.log(image1, image2, image3, image4)
        
        res.json({})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}


// fucntion for 'list product'

const listProducts = async(req, res) => {
    
}

// fucntion for 'remove product'

const removeProduct = async(req, res) => {
    
}

// fucntion for 'single product info'

const singleProduct = async(req, res) => {
    
}

export {listProducts, removeProduct, addProduct, singleProduct}