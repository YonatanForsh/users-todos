import mongoose from 'mongoose'

const connectionString: string = "mongodb://localhost:27017/users-todos"

const connectToMongo = async () => {
    try {
        await mongoose.connect(connectionString)   
    } catch (err) {
        console.log(err);     
    }
}


export {
    connectToMongo
}
