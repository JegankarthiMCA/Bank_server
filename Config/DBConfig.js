import mongoose from "mongoose";

const DBconfig = async () => {
    try {
        // await mongoose.connect('mongodb://localhost/bank')
        await mongoose.connect('mongodb+srv://jegankjack121:123@cluster0.qbb81tx.mongodb.net/?retryWrites=true&w=majority')
        console.log("DB connected");
    } catch (error) {
        console.log("couldn't connect DB", error);
    }
}

export default DBconfig;