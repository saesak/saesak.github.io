//for the mouseover on the letters at the top
const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
  span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e) {
  span.classList.remove('animated', 'rubberBand')
}))

//for the level bars
const pythonBar = document.querySelectorAll('.bar-html')
const reactBar = document.querySelectorAll('.bar-react')
const mysqlBar = document.querySelectorAll('.bar-mysql')

var t1 = new TimelineLite()

t1.fromTo(pythonBar, 0.75, {width: '0px'}, {width: '300px', ease: Power4.easeOut})
t1.fromTo(reactBar, 0.75, {width: '0px'}, {width: '100px', ease: Power4.easeOut})
t1.fromTo(mysqlBar, 0.75, {width: '0px'}, {width: '100px', ease: Power4.easeOut})

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
  triggerElement: '#skills',
  triggerHook: 1
})
  .setTween(t1)
  .addTo(controller)

//didn't do the showing work category

