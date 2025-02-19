let currentUser = null;
let chats = JSON.parse(localStorage.getItem('chats')) || {};
let users = JSON.parse(localStorage.getItem('users')) || [];
let balance = 1000; // Начальный баланс пользователя
let userId = localStorage.getItem('userId') || generateUserId(); // Загружаем ID или генерируем новый

// Генерация уникального ID пользователя
function generateUserId() {
  const newUserId = 'user_' + Math.random().toString(36).substr(2, 9);
  localStorage.setItem('userId', newUserId); // Сохраняем ID в localStorage
  return newUserId;
}

// Сохраняем пользователя в массив и в localStorage
function saveUser(user) {
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}

// Поиск пользователя по ID
function findUserById(userId) {
  return users.find(user => user.id === userId);
}

// Обновляем ID в интерфейсе
function updateUserId() {
  document.getElementById('dropdown-id').textContent = userId;
  document.getElementById('profile-id').textContent = userId;
}

// Открытие профиля
function openProfile() {
  document.getElementById('profile-modal').style.display = 'block';
  updateBalance();
  updateUserId(); // Обновляем ID в интерфейсе
}

// При загрузке страницы
window.onload = function() {
  // Проверяем, есть ли пользователь в массиве users
  if (!findUserById(userId)) {
    const newUser = {
      id: userId,
      name: 'Новый пользователь', // Можно запросить имя у пользователя
      balance: 1000,
    };
    saveUser(newUser); // Сохраняем пользователя
  }

  updateUserId(); // Обновляем ID в интерфейсе
  const chatList = document.getElementById('chat-list');
  for (const user in chats) {
    chatList.innerHTML += `<li id="chat-${user}"><a href="#" onclick="openChat('${user}')">${user}</a></li>`;
  }
};