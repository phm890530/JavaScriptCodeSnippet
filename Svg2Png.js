((node /* SVG 元素 */, multiple = 1 /* 缩放倍率 */) => {
  const Serializer = new XMLSerializer()
  const Source = `<?xml version="1.0" standalone="no"?>\r\n${Serializer.serializeToString(node)}`
  const Img = new Image()
  Img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(Source)}`
  Img.onload = () => {
    const CanvasEl = document.createElement('canvas')
    CanvasEl.width = Img.naturalWidth * multiple
    CanvasEl.height = Img.naturalHeight * multiple
    const ctx = CanvasEl.getContext('2d')
    ctx.drawImage(Img, 0, 0, Img.naturalWidth * multiple, Img.naturalHeight * multiple)
    const a = document.createElement('a')
    a.href = CanvasEl.toDataURL()
    a.download = Date.now()
    a.click()
  }
})($0 /* 选中 Svg 元素，控制台注入代码 */)