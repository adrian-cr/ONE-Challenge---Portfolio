document.addEventListener("DOMContentLoaded", () => {

	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
		  return;
		}
    if ((entry.target.nodeName === "H2") || (entry.target.classList.contains("card-icon"))) {
      entry.target.classList.remove('in-view');
    }
	  });
	});

	const allAnimatedElements = document.querySelectorAll('.animate');

	allAnimatedElements.forEach((element) => observer.observe(element));

}, {threshold:0.2, rootMargin: "0px"});
