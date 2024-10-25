import mongoose from 'mongoose';

const schema = mongoose.Schema({
        name: { 
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
    });

const User = mongoose.model.User || mongoose.model('User', schema);

export default User;

