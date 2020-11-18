if (window.innerWidth >=768) {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.fromTo('.services .devider-line',{
    scrollTrigger: {
      trigger: '.title-wrapper',
      scrub: true
    },
    x: 100,
    duration: 1},
    {scrollTrigger: {
      trigger: '.title-wrapper',
      scrub: true
    },
    x: -100,
    duration: 1}
  );
  
  gsap.fromTo('.services .section-title, .services .section-subtitle',{
    scrollTrigger: {
      trigger: '.title-wrapper',
      scrub: true
    },
    x: -50,
    duration: 1},
    {scrollTrigger: {
      trigger: '.title-wrapper',
      scrub: true
    },
    x: 50,
    duration: 1}
  );

  
  gsap.fromTo('.line1',{
    scrollTrigger: {
      trigger: '.line1',
      scrub: true
    },
    x: -100,
    duration: 1},
    {scrollTrigger: {
      trigger: '.line1',
      scrub: true
    },
    x: 100,
    duration: 1}
  );

  gsap.fromTo('.line2',{
    scrollTrigger: {
      trigger: '.line2',
      scrub: true
    },
    x: 100,
    duration: 1},
    {scrollTrigger: {
      trigger: '.line2',
      scrub: true
    },
    x: -100,
    duration: 1}
  );

}