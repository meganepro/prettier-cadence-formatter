declare module 'prettier-plugin-cadence'{
  export const languages: {
    name: string;
    parsers: string[];
    extensions: string[];
  }[];
  export const parsers: {
    cadence: {
        parse: (text: any) => {
            nodeType: string;
            start: any;
            end: any;
            lineStart: any;
            lineEnd: any;
            value: any;
        } | {
            children: any[];
            nodeType: string;
            start: any;
            end: any;
            lineStart: any;
            lineEnd: any;
            value?: undefined;
        };
        astFormat: string;
        locStart: (node: any) => any;
        locEnd: (node: any) => any;
    };
  };
  export const printers: {
    cadence: {
        print: (path: any, options: any, print: any) => any;
        printComment: (path: any, options: any) => any;
        canAttachComment: (node: any) => any;
        getCommentChildNodes: (node: any) => any;
        handleComments: {};
    };
  };
  export const options: {};
  export const defaultOptions: {
    tabWidth: number;
  }
}