declare const fileController: {
    upload: (req: any, res: any, next: any) => Promise<any>;
    getFile: (req: any, res: any, next: any) => Promise<void>;
};
export default fileController;
