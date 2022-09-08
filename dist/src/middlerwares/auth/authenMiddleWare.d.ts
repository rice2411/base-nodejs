declare const authMiddleWare: {
    requireLogin: (req: any, res: any, next: any) => Promise<any>;
    checkUserBan: (req: any, res: any, next: any) => Promise<any>;
};
export default authMiddleWare;
