import Vue from "vue";
import { Button, MessageBox,  Message,Container,Aside,Main,Header ,Form ,FormItem ,Input ,Select,Option ,Card  , Col , Row ,Menu ,MenuItem ,Submenu ,MenuItemGroup ,Table ,TableColumn } from "element-ui";

Vue.use(Button);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Header);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select); 
Vue.use(Option); 
Vue.use(Card); 
Vue.use(Col); 
Vue.use(Row); 
Vue.use(Menu); 
Vue.use(MenuItem); 
Vue.use(MenuItemGroup); 
Vue.use(Submenu); 
Vue.use(Table); 
Vue.use(TableColumn); 
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm


