const itemsContainer = document.querySelector('.items');
    let draggedItem = null;

    // Allow drag
    itemsContainer.addEventListener('dragstart', (e) => {
      draggedItem = e.target;
      e.target.style.opacity = '0.5'; // Change appearance of the dragged item
    });

    // When drag ends, reset the dragged item's appearance
    itemsContainer.addEventListener('dragend', (e) => {
      e.target.style.opacity = '1'; // Reset opacity of dragged item
    });

    // Allow items to be dropped by preventing default behavior
    itemsContainer.addEventListener('dragover', (e) => {
      e.preventDefault(); // Prevent default behavior to allow drop
    });

    // Handle drop event
    itemsContainer.addEventListener('drop', (e) => {
      e.preventDefault();
      const target = e.target;

      // Make sure the target is an item (not the container itself)
      if (target && target !== draggedItem && target.classList.contains('item')) {
        // Swap positions
        const draggedIndex = Array.from(itemsContainer.children).indexOf(draggedItem);
        const targetIndex = Array.from(itemsContainer.children).indexOf(target);
        
        if (draggedIndex < targetIndex) {
          itemsContainer.insertBefore(draggedItem, target.nextSibling);
        } else {
          itemsContainer.insertBefore(draggedItem, target);
        }
      }
    });