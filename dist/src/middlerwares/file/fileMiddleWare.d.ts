declare const fileMiddleWare: {
    fileExtLimiter: (allowedExtArray: any) => (req: any, res: any, next: any) => any;
    fileSizeLimiter: (req: any, res: any, next: any) => any;
    filesPayloadExists: (req: any, res: any, next: any) => any;
};
export default fileMiddleWare;
