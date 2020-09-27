//for the mouseover on the letters at the top
const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
  span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.adEventListener('mouseout', function(e) {
  span.classList.remove('animated', 'rubberBand')
}))

//for the level bars
const pythonBar = document.querySelectorAll('.bar-html')
const reactBar = document.querySelectorAll('.bar-react')
const mysqlBar = document.querySelectorAll('.bar-mysql')

var t1 = new TimelineLite()

t1.fromTo(pythonBar, 0.75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
t1.fromTo(reactBar, 0.75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
t1.fromTo(mysqlBar, 0.75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
  triggerElement: '.skills',
  triggerHook: 0
})
scene.setTween(t1)
scene.addTo(controller)

//didn't do the showing work category

