// Kanban Todo List Application
// Uses localStorage for persistence

const STORAGE_KEY = 'kanbanTodoState';

// State
let todos = [];
let editingId = null;

// DOM Elements
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const todoForm = document.getElementById('todoForm');
const todoIdInput = document.getElementById('todoId');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const priorityInput = document.getElementById('priority');
const tagsInput = document.getElementById('tags');

const addTodoBtn = document.getElementById('addTodoBtn');
const closeModalBtn = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');

const todoCards = document.getElementById('todo-cards');
const inProgressCards = document.getElementById('in-progress-cards');
const completedCards = document.getElementById('completed-cards');

const todoCount = document.getElementById('todo-count');
const inProgressCount = document.getElementById('in-progress-count');
const completedCount = document.getElementById('completed-count');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderBoard();
  setupEventListeners();
  setupDragAndDrop();
});

// State Management
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      todos = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error loading state:', e);
    todos = [];
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (e) {
    console.error('Error saving state:', e);
  }
}

// Generate unique ID
function generateId() {
  return 'todo-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

// CRUD Operations
function addTodo(todoData) {
  const newTodo = {
    id: generateId(),
    title: todoData.title,
    description: todoData.description || '',
    priority: todoData.priority || 'medium',
    tags: todoData.tags || [],
    status: 'todo',
    createdAt: Date.now()
  };
  todos.push(newTodo);
  saveState();
  renderBoard();
}

function editTodo(id, todoData) {
  const index = todos.findIndex(t => t.id === id);
  if (index !== -1) {
    todos[index] = {
      ...todos[index],
      title: todoData.title,
      description: todoData.description || '',
      priority: todoData.priority || 'medium',
      tags: todoData.tags || []
    };
    saveState();
    renderBoard();
  }
}

function deleteTodo(id) {
  if (confirm('Are you sure you want to delete this todo?')) {
    todos = todos.filter(t => t.id !== id);
    saveState();
    renderBoard();
  }
}

function updateTodoStatus(id, newStatus) {
  const index = todos.findIndex(t => t.id === id);
  if (index !== -1) {
    todos[index].status = newStatus;
    saveState();
    renderBoard();
  }
}

// Rendering
function renderBoard() {
  const todoItems = todos.filter(t => t.status === 'todo');
  const inProgressItems = todos.filter(t => t.status === 'in-progress');
  const completedItems = todos.filter(t => t.status === 'completed');

  renderColumn(todoCards, todoItems);
  renderColumn(inProgressCards, inProgressItems);
  renderColumn(completedCards, completedItems);

  todoCount.textContent = todoItems.length;
  inProgressCount.textContent = inProgressItems.length;
  completedCount.textContent = completedItems.length;
}

function renderColumn(container, items) {
  if (items.length === 0) {
    container.innerHTML = '<div class="empty-state">No items</div>';
    return;
  }

  container.innerHTML = items.map(todo => createCardHTML(todo)).join('');

  // Add event listeners to cards
  container.querySelectorAll('.card').forEach(card => {
    const id = card.dataset.id;

    card.querySelector('.edit-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openEditModal(id);
    });

    card.querySelector('.delete-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTodo(id);
    });

    // Drag events
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);
  });
}

function createCardHTML(todo) {
  const tagsHTML = todo.tags.length > 0
    ? `<div class="tags-container">${todo.tags.map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join('')}</div>`
    : '';

  return `
    <div class="card priority-${todo.priority}" draggable="true" data-id="${todo.id}">
      <div class="card-header">
        <span class="card-title">${escapeHTML(todo.title)}</span>
        <div class="card-actions">
          <button class="edit-btn" title="Edit">&#9998;</button>
          <button class="delete-btn" title="Delete">&#128465;</button>
        </div>
      </div>
      ${todo.description ? `<p class="card-description">${escapeHTML(todo.description)}</p>` : ''}
      <div class="card-meta">
        <span class="priority-badge ${todo.priority}">${todo.priority}</span>
        ${tagsHTML}
      </div>
    </div>
  `;
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Modal Handling
function openModal(isEdit = false) {
  modal.classList.add('active');
  modalTitle.textContent = isEdit ? 'Edit Todo' : 'Add New Todo';
  if (!isEdit) {
    resetForm();
  }
  titleInput.focus();
}

function closeModal() {
  modal.classList.remove('active');
  resetForm();
  editingId = null;
}

function resetForm() {
  todoForm.reset();
  todoIdInput.value = '';
  priorityInput.value = 'medium';
}

function openEditModal(id) {
  const todo = todos.find(t => t.id === id);
  if (!todo) return;

  editingId = id;
  todoIdInput.value = id;
  titleInput.value = todo.title;
  descriptionInput.value = todo.description;
  priorityInput.value = todo.priority;
  tagsInput.value = todo.tags.join(', ');

  openModal(true);
}

function handleFormSubmit(e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  if (!title) return;

  const todoData = {
    title,
    description: descriptionInput.value.trim(),
    priority: priorityInput.value,
    tags: tagsInput.value
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0)
  };

  if (editingId) {
    editTodo(editingId, todoData);
  } else {
    addTodo(todoData);
  }

  closeModal();
}

// Drag and Drop
let draggedCard = null;

function setupDragAndDrop() {
  const columns = document.querySelectorAll('.column');

  columns.forEach(column => {
    const cardsContainer = column.querySelector('.cards-container');

    cardsContainer.addEventListener('dragover', handleDragOver);
    cardsContainer.addEventListener('dragenter', handleDragEnter);
    cardsContainer.addEventListener('dragleave', handleDragLeave);
    cardsContainer.addEventListener('drop', handleDrop);
  });
}

function handleDragStart(e) {
  draggedCard = e.target;
  e.target.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', e.target.dataset.id);
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
  draggedCard = null;

  // Remove drag-over class from all columns
  document.querySelectorAll('.column').forEach(col => {
    col.classList.remove('drag-over');
  });
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
  e.preventDefault();
  const column = e.target.closest('.column');
  if (column) {
    column.classList.add('drag-over');
  }
}

function handleDragLeave(e) {
  const column = e.target.closest('.column');
  if (column && !column.contains(e.relatedTarget)) {
    column.classList.remove('drag-over');
  }
}

function handleDrop(e) {
  e.preventDefault();

  const column = e.target.closest('.column');
  if (!column) return;

  column.classList.remove('drag-over');

  const todoId = e.dataTransfer.getData('text/plain');
  const newStatus = column.dataset.status;

  if (todoId && newStatus) {
    updateTodoStatus(todoId, newStatus);
  }
}

// Event Listeners
function setupEventListeners() {
  addTodoBtn.addEventListener('click', () => openModal(false));
  closeModalBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  todoForm.addEventListener('submit', handleFormSubmit);

  // Close modal on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
