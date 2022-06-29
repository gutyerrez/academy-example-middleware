declare namespace NodeJS {
  export interface ProcessEnv {
    HOST: string;
    PORT: string;

    APP_KEY: string;
  }
}