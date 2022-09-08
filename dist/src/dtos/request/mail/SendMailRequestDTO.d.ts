export default class SendMailRequestDTO {
    _email: string;
    constructor({ email }: {
        email: any;
    });
    get email(): string;
}
