import { Router } from "express";
import { readFile } from "fs";
import { join } from "path";
const productRouter = Router();

productRouter.get("/", (req, res) => {
    // Define the path to the products.json file
    const filePath = join(__dirname, '../products.json');
    
    // Read the file asynchronously
    readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Handle the error if the file can't be read
            return res.status(500).json({ error: "Failed to read products file" });
        }

        try {
            // Parse the JSON data
            const products = JSON.parse(data);
            // Send the JSON data as a response
            setTimeout(()=>{res.json(products);},1000)
            // res.json(products);
        } catch (parseError) {
            // Handle JSON parsing errors
            res.status(500).json({ error: "Failed to parse products data" });
        }
    });
});

export default productRouter;
