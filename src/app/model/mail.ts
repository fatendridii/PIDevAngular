export interface MailRequest {
    to?: string;
    from?: string;
    subject?: string;
    name?: string;
  }
  
  export interface MailResponse {
    success?: boolean;
    message?: string;
  }
  