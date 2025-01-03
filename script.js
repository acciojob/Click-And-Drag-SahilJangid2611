 const itemsContainer = document.querySelector('.items');
    let isMouseDown = false;
    let startX;
    let scrollLeft;

    // When mouse is down, we want to track the initial position
    itemsContainer.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      startX = e.pageX - itemsContainer.offsetLeft;
      scrollLeft = itemsContainer.scrollLeft;
      itemsContainer.classList.add('active'); // Add 'active' class for styling
    });

    // When mouse is up, stop tracking movement
    itemsContainer.addEventListener('mouseup', () => {
      isMouseDown = false;
      itemsContainer.classList.remove('active'); // Remove 'active' class when mouse is up
    });

    // When mouse leaves, stop tracking movement
    itemsContainer.addEventListener('mouseleave', () => {
      isMouseDown = false;
      itemsContainer.classList.remove('active');
    });

    // When mouse is moving, adjust the scroll position
    itemsContainer.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - itemsContainer.offsetLeft;
      const walk = (x - startX) * 2; // Multiply by 2 to make dragging faster
      itemsContainer.scrollLeft = scrollLeft - walk;
    });