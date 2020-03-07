import * as mongoose from 'mongoose';

export const EndpointSchema = new mongoose.Schema({
    title: String,
    url: String,
    public: Boolean
})