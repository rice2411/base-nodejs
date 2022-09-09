import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface IOTP {
    userId: string;
    otp: string;
}

const OTPSchema = new Schema(
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

const model = mongoose.model<IOTP>('OTP', OTPSchema);

export { model as OTP };
