import otpGenerator from 'otp-generator' 

export const generateOtp = () => {
    return otpGenerator.generate(6, {
        digits: true, alphabets: false, upperCase: false, specialChars: false
    });
}