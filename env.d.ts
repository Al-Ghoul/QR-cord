// env.d.ts

declare namespace NodeJS {
  interface ProcessEnv {
    BOT_TOKEN: string;
    GUILD_ID: string;
    APP_ID: string; 
  }
}

