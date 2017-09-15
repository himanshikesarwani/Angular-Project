/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module "jwt-decode" {
  function decode(token: string): any;
  namespace decode {}  // notice how we have to create a namespace that is equal to the function we're assigning the export to
  export = decode;
}