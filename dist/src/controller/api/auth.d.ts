declare const authController: {
    login: (req: any, res: any, next: any) => Promise<any>;
    register: (req: any, res: any, next: any) => Promise<any>;
    verifyToken: (req: any, res: any, next: any) => Promise<any>;
};
export default authController;
