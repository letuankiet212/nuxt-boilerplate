declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module 'element-ui/lib/locale/lang/*' {
  const content: any;
  export default content;
}

declare module 'element-ui/lib/message' {
  const content: any;
  export default content;
}
