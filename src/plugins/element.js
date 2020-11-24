import Vue from 'vue';
import {
  Button, // element - Button
  Badge, // element - Badge
  Col, // element - Col
  Container, // element - Container
  Aside, // element - Aside
  Checkbox, // element - Checkbox
  Dialog, // element - Dialog
  Footer, // element - Footer
  Header, // element - Header
  Input, // element - Input
  Loading, // element - Loading
  Main, // element - Main
  Menu, // element - Menu
  MenuItem, // element - MenuItem
  MenuItemGroup, // element - MenuItemGroup
  MessageBox, // element - MessageBox
  Message, // element - Message
  Radio, // element - Radio
  RadioGroup, // element - RadioGroup
  RadioButton, // element - RadioButton
  Row, // element - Row
  Switch, // element - Switch
  Tag, // element - Tag
  Table, // element - Table
  TableColumn, // element - TableColumn
  Notification, // element - Notification
  Submenu, // element - Submenu
  Pagination, // element - Pagination
  Form, // element - Form
  FormItem, // element - FormItem
  Select, // element - Select
  Option, // element - Option
  Progress, // element - Progress
  CheckboxGroup, // element - CheckboxGroup
  CascaderPanel, // element - CascaderPanel
  DatePicker, // element - DatePicker
  Tree, // element - Tree
  Dropdown, // element - Dropdown
  DropdownMenu, // element - DropdownMenu
  DropdownItem, // element - DropdownItem
  Upload, // element - Upload
  Popover, // element - Popover
  Link,
  Steps,
  Step,
  Tooltip,
  Cascader, // element - Cascader
  Tabs, // element-tab
  TabPane, // element - TabPane
  Timeline, // element - Timeline
  TimelineItem, // element - TimelineItem
  Card, // element - card
  Calendar, // element -Calendar
  CheckboxButton,
  TimePicker,
  Autocomplete, // element - CheckboxButton
  OptionGroup, // element - OptionGroup
  ButtonGroup, // element - ButtonGroup
  Image, // element - Image
  Collapse,
  CollapseItem,
  Transfer,
  InfiniteScroll,
  Divider
} from 'element-ui';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
[
  Button, // element - Button
  Badge, // element - Badge
  Col, // element - Col
  Container, // element - Container
  Aside, // element - Aside
  Checkbox, // element - Checkbox
  Dialog, // element - Dialog
  Footer, // element - Footer
  Header, // element - Header
  Input, // element - Input
  Loading, // element - Loading
  Main, // element - Main
  Menu, // element - Menu
  MenuItem, // element - MenuItem
  MenuItemGroup, // element - MenuItemGroup
  Radio, // element - Radio
  RadioGroup, // element - RadioGroup
  RadioButton, // element - RadioButton
  Row, // element - Row
  Switch, // element - Switch
  Tag, // element - Tag
  Table, // element - Table
  TableColumn, // element - TableColumn
  Submenu, // element - Submenu
  Pagination, // element - Pagination
  Form, // element - Form
  FormItem, // element - FormItem
  Select, // element - Select
  Steps,
  Step,
  Option, // element - Option
  Progress, // element - Progress
  CheckboxGroup, // element - CheckboxGroup
  CascaderPanel, // element - CascaderPanel
  DatePicker, // element - DatePicker
  TimePicker,
  Tree, // element - Tree
  Dropdown, // element - Dropdown
  DropdownMenu, // element - DropdownMenu
  DropdownItem, // element - DropdownItem
  Upload, // element - Upload
  Popover, // element - Popover
  Link,
  Tooltip,
  Cascader, // element - Cascader
  Tabs, // element - Tab
  TabPane, // element - TabPane
  Timeline, // element - Timeline
  TimelineItem, // element - TimelineItem
  Card, // element - Card
  Calendar, // element - Calendar
  CheckboxButton, // element - CheckboxButton
  Autocomplete,
  OptionGroup, // element - OptionGroup
  ButtonGroup, // element - ButtonGroup
  Image, // element - Image
  Collapse,
  CollapseItem,
  Transfer,
  InfiniteScroll,
  Divider
].forEach((comp) => {
  Vue.use(comp);
});
Vue.component(CollapseTransition.name, CollapseTransition);
Vue.prototype.$ELEMENT = { size: 'small' };
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
