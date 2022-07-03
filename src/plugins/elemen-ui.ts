import Vue from 'vue';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ja';
import Message from 'element-ui/lib/message';

export default (_context: any, inject: any) => {
  Vue.use(Element, { locale });

  inject('message', Message);
};
