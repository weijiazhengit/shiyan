import Vue from "vue";
import { Button,   MessageBox,  Message,Container,Aside,Main,Header ,Form ,FormItem ,Input} from "element-ui";

Vue.use(Button);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Header);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
