import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface IOtp {
    userId: string;
    otp: string;
}

const OtpSchema = new Schema(
    {
        userId: {
            type: String,
            require: true
        },
        otp: {
            type: String,
            require: true
        },
    },
    { 
        timestamps: true 
    }
);

const model = mongoose.model<IOtp>('OTP', OtpSchema);

export { model as Otp };
