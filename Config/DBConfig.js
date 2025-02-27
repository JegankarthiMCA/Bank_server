import mongoose from "mongoose";

const DBconfig = async () => {
    try {
        // await mongoose.connect('mongodb://localhost/bank')
        await mongoose.connect('mongodb+srv://jegankjack121:1234@cluster1.vaoio.mongodb.net/')
        console.log("DB connected");
    } catch (error) {
        console.log("couldn't connect DB", error);
    }
}

export default DBconfig;
