interface IUserTokenInfo {
    _id: string;
    username: string;
    role: any;
}
interface IGenerateInfo {
    _id: string;
    username: string;
    role: any;
    secret: any;
    expire_in: any;
}
interface ITokenService {
    generate: (iGenerateInfo: IGenerateInfo) => string;
    verifyToken: (token: string, secret: string) => any;
    createToken: (iUserTokenInfo: IUserTokenInfo) => any;
}
declare const tokenService: ITokenService;
export { tokenService };
