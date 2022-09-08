interface IFileService {
    upload: (files: any) => Promise<any>;
    get: (fileName: string, res: any, next: any) => Promise<any>;
}
declare const fileService: IFileService;
export default fileService;
