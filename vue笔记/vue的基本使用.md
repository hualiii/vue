## vue的基本概念

### class和style的基本绑定

#### class 绑定方法

> class 对象绑定

```html
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```
```js
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```

> class 数组绑定

```html
<div v-bind:class="[activeClass, errorClass]"></div>
```

```js
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

> 小技巧

+ class 对象绑定可以绑定一个属性对象/计算属性对象

```html
<div v-bind:class="classObject"></div>
```
```js
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```

```js
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

+ 数组绑定class可以使用三目运算

```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```

+ 数组绑定class可以使用对象

```html
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```

> 用在组件上

当在一个自定义组件上使用 class property 时，这些 class 将被添加到`该组件的根元素上面`。这个元素上`已经存在的 class 不会被覆盖`。

#### style 绑定方法

> style 对象绑定

```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```
```js
data: {
  activeColor: 'red',
  fontSize: 30
}
```

使用大驼峰式命名  可以绑定一个属性对象/计算属性对象

> 对象语法

v-bind:style 的数组语法可以将多个样式对象应用到同一个元素上：
```html
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```