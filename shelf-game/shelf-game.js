document.addEventListener('DOMContentLoaded', function () {
  var COPIES_PER_TYPE = 3;
  var ITEM_TYPES = [
    { id: 'burger', icon: '🍔', name: 'Burger' },
    { id: 'apple', icon: '🍎', name: 'Apple' },
    { id: 'drink', icon: '🥤', name: 'Drink' },
    { id: 'candy', icon: '🍬', name: 'Candy' },
    { id: 'chicken', icon: '🍗', name: 'Chicken' },
    { id: 'taco', icon: '🌮', name: 'Taco' },
    { id: 'noodles', icon: '🍜', name: 'Noodles' },
    { id: 'strawberry', icon: '🍓', name: 'Strawberry' },
    { id: 'onion', icon: '🧅', name: 'Onion' },
    { id: 'carrot', icon: '🥕', name: 'Carrot' },
    { id: 'tomato', icon: '🍅', name: 'Tomato' },
    { id: 'potato', icon: '🥔', name: 'Potato' },
    { id: 'corn', icon: '🌽', name: 'Corn' },
    { id: 'bean', icon: '🫘', name: 'Bean' },
    { id: 'peas', icon: '🫘', name: 'Peas' },
    { id: 'spinach', icon: '🥬', name: 'Spinach' },
    { id: 'broccoli', icon: '🥦', name: 'Broccoli' },
    { id: 'cabbage', icon: '🥬', name: 'Cabbage' }
  ];

  var grid = document.querySelector('.shelf-grid');
  if (!grid) {
    return;
  }

  var cells = Array.prototype.slice.call(grid.querySelectorAll('.shelf-cell'));
  var setsRemainingEl = document.getElementById('sets-remaining');
  var messageEl = document.getElementById('game-message');
  var restartBtn = document.getElementById('restart-btn');

  var completedTypes = new Set();
  var totalSets = ITEM_TYPES.length;
  var gameOver = false;
  var dragItemId = null;

  function placeItemInCell(cell, itemEl) {
    var slots = Array.prototype.slice.call(cell.querySelectorAll('.shelf-slot'));
    var emptySlot = slots.find(function (slot) {
      return !slot.querySelector('.shelf-item');
    });

    if (!emptySlot) {
      return false;
    }

    emptySlot.appendChild(itemEl);
    return true;
  }

  function attachCellHandlers(cell) {
    cell.addEventListener('dragover', function (event) {
      event.preventDefault();
    });

    cell.addEventListener('dragenter', function (event) {
      event.preventDefault();
      if (gameOver) return;
      if (cell.querySelectorAll('.shelf-item').length >= COPIES_PER_TYPE) return;
      cell.classList.add('drop-target');
    });

    cell.addEventListener('dragleave', function () {
      cell.classList.remove('drop-target');
    });

    cell.addEventListener('drop', function (event) {
      event.preventDefault();
      cell.classList.remove('drop-target');
      if (gameOver) return;

      var itemId = dragItemId;
      if (event.dataTransfer && event.dataTransfer.getData) {
        var dataId = event.dataTransfer.getData('text/plain');
        if (dataId) {
          itemId = dataId;
        }
      }

      if (!itemId) return;

      var selector = '.shelf-item[data-item-id="' + itemId + '"]';
      var itemEl = document.querySelector(selector);
      if (!itemEl) return;

      var originCell = itemEl.closest('.shelf-cell');
      if (originCell === cell) return;

      if (!placeItemInCell(cell, itemEl)) {
        return;
      }
      checkForSet(cell);
      updateStatus();
    });
  }

  function createItemElement(id, def) {
    var span = document.createElement('span');
    span.className = 'shelf-item';
    span.textContent = def.icon;
    span.setAttribute('aria-label', def.name);
    span.setAttribute('role', 'img');
    span.draggable = true;
    span.dataset.itemId = 'item-' + id;
    span.dataset.type = def.id;

    span.addEventListener('dragstart', function (event) {
      if (gameOver) {
        event.preventDefault();
        return;
      }
      dragItemId = span.dataset.itemId;
      if (event.dataTransfer && event.dataTransfer.setData) {
        event.dataTransfer.setData('text/plain', dragItemId);
        event.dataTransfer.effectAllowed = 'move';
      }
      span.classList.add('dragging');
    });

    span.addEventListener('dragend', function () {
      span.classList.remove('dragging');
      dragItemId = null;
      cells.forEach(function (cell) {
        cell.classList.remove('drop-target');
      });
    });

    return span;
  }

  function checkForSet(cell) {
    var items = Array.prototype.slice.call(cell.querySelectorAll('.shelf-item'));
    if (items.length !== COPIES_PER_TYPE) {
      return;
    }

    var firstType = items[0].dataset.type;
    var allSameType = items.every(function (item) {
      return item.dataset.type === firstType;
    });

    if (!allSameType) {
      return;
    }

    if (completedTypes.has(firstType)) {
      items.forEach(function (item) {
        item.remove();
      });
      return;
    }

    items.forEach(function (item) {
      item.remove();
    });
    completedTypes.add(firstType);

    if (messageEl) {
      messageEl.textContent = 'Cleared all ' + firstType + ' items from this shelf.';
    }

    if (completedTypes.size === totalSets) {
      gameOver = true;
      if (messageEl) {
        messageEl.textContent = 'All sets completed. Well done!';
      }
    }
  }

  function updateStatus() {
    if (!setsRemainingEl) return;
    var remaining = totalSets - completedTypes.size;
    setsRemainingEl.textContent = 'Sets remaining: ' + remaining;
  }

  function initGame() {
    completedTypes = new Set();
    gameOver = false;
    dragItemId = null;
    if (messageEl) {
      messageEl.textContent = '';
    }

    cells.forEach(function (cell) {
      cell.innerHTML = '';

      var slotsWrapper = document.createElement('div');
      slotsWrapper.className = 'shelf-slots';
      for (var i = 0; i < COPIES_PER_TYPE; i += 1) {
        var slot = document.createElement('div');
        slot.className = 'shelf-slot';
        slotsWrapper.appendChild(slot);
      }
      cell.appendChild(slotsWrapper);

      attachCellHandlers(cell);
    });

    var capacities = new Array(cells.length).fill(0);
    var itemIdCounter = 0;
    var allItems = [];

    ITEM_TYPES.forEach(function (def) {
      for (var i = 0; i < COPIES_PER_TYPE; i += 1) {
        allItems.push(def);
      }
    });

    allItems.forEach(function (def) {
      var shelfIndex;
      var safety = 0;
      do {
        shelfIndex = Math.floor(Math.random() * cells.length);
        safety += 1;
      } while (capacities[shelfIndex] >= COPIES_PER_TYPE && safety < 1000);

      capacities[shelfIndex] += 1;

      var itemEl = createItemElement(itemIdCounter, def);
      itemIdCounter += 1;
      placeItemInCell(cells[shelfIndex], itemEl);
    });

    updateStatus();
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', function () {
      initGame();
    });
  }

  initGame();
});

