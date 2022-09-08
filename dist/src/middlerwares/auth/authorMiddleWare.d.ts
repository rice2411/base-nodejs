declare const authorMiddleWare: {
    checkUserRole: (role?: number) => (req: any, res: any, next: any) => Promise<void>;
};
export default authorMiddleWare;
