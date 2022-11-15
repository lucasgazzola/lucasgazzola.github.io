export type scrollTriggerParams = {
  selector: string
  options?: { rootMargin: string }
}
export type addObserverParams = {
  element: Element
  options?: { rootMargin: string }
}

const scrollTrigger = ({
  selector,
  options = { rootMargin: '0px' },
}: scrollTriggerParams) => {
  const elements = document.querySelectorAll(selector)
  elements.forEach(element => {
    addObserver({ element, options })
  })
}

function addObserver({ element, options }: addObserverParams) {
  if (!('IntersectionObserver' in window)) {
    console.info('IntersectionObserver is not supported')
    return
  }
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        observer.unobserve(entry.target)
      }
    })
  }, options)
  observer.observe(element)
}
// Example usages:

scrollTrigger({
  selector: '.scroll-reveal',
  options: {
    rootMargin: '50px',
  },
})
