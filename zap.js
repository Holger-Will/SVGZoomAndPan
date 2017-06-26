function addSVGZoomAndPan(svg){
  svg.addEventListener("wheel",function(evt){
    var newScale
    if(evt.deltaY>0){newScale=svg.currentScale/1.1}
    if(evt.deltaY<0){newScale=svg.currentScale*1.1}
    var oldScale=svg.currentScale
     svg.currentTranslate.x=(-evt.offsetX+svg.currentTranslate.x)*(newScale/oldScale)
     svg.currentTranslate.y=(-evt.offsetY+svg.currentTranslate.y)*(newScale/oldScale)
     svg.currentScale=newScale
     svg.currentTranslate.x+=evt.offsetX
     svg.currentTranslate.y+=evt.offsetY
  })
  svg.addEventListener("mousedown",function(evt){
    svg.classList.add("dragging")
    if(evt.shiftKey){
      var ox=evt.offsetX
      var oy=evt.offsetY
      var otx=svg.currentTranslate.x
      var oty=svg.currentTranslate.y
      svg.addEventListener("mousemove",move)
      document.addEventListener("mouseup",out)
      function out(evt){
        svg.removeEventListener("mousemove",move)
        document.removeEventListener("mouseup",out)
        svg.classList.remove("dragging")
      }
      function move(evt){
        svg.currentTranslate.x=otx+(evt.offsetX-ox)
        svg.currentTranslate.y=oty+(evt.offsetY-oy)
      }
    }
  })
}
