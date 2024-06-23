((node /* Canvas 元素 */) => {
  const a = document.createElement('a')
  a.href = node.toDataURL()
  a.download = Date.now()
  a.click()
})($0 /* 选中 Canvas 元素，控制台注入代码 */)