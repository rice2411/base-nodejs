export interface IOAuth2Service {
  success: (data: any) => Promise<any>;
  fail: () => Promise<any>;
}
