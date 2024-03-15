import mongoose from "mongoose";

const DBconfig = async () => {
    try {
        // await mongoose.connect('mongodb://localhost/bank')
        await mongoose.connect('mongodb+srv://jegankjack121:987123@cluster0.qbb81tx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("DB connected");
    } catch (error) {
        console.log("couldn't connect DB", error);
    }
}

export default DBconfig;
