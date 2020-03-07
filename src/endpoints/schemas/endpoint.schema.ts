import * as mongoose from 'mongoose';

export const EndpointSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Enter title']
    },
    url: {
        type: String,
        required: [true, 'Enter url'] 
    },
    public: {
        type: Boolean,
        required: false
    }
})