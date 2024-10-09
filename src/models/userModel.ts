import mongoose, { Schema, Document, Model } from "mongoose"


interface User extends Document {
    user_name: string,
    todos: [Todo]
}


interface Todo extends Document {
    tytle: string
}

const TodoSchema: Schema<Todo> = new Schema<Todo>({
    tytle: {
        type: String,
        required: true
    }

    }, { timestamps: true }
)


const UserSchema: Schema<User> = new Schema<User>({
    user_name: {
        type: String,
        required: true
    },
    todos: [TodoSchema]

    }, { timestamps: true }
)




const UserModel: Model<User> = mongoose.model<User>('user', UserSchema)

export default UserModel