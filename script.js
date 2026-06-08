document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('games-container');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('game-modal');
    
    // Элементы модалки
    const mTitle = document.getElementById('modal-title');
    const mDesc = document.getElementById('modal-desc');
    const mVideo = document.getElementById('modal-video');
    const mAdminHeadset = document.getElementById('modal-admin-headset');
    const mAdminIcon = document.getElementById('modal-admin-icon');
    const mAdminSysname = document.getElementById('modal-admin-sysname');

    let allGames = []; // Сюда сохраним загруженные игры

    // 1. Загрузка JSON с ESP32
    try {
        const response = await fetch('./games.json');
        allGames = await response.json();
        renderGames('all'); // Отрисовываем все игры при старте
    } catch (error) {
        container.innerHTML = '<p style="text-align:center; color:red;">Ошибка загрузки игр!</p>';
        console.error('Ошибка JSON:', error);
    }

    // 2. Функция отрисовки карточек
    function renderGames(filterCategory) {
        container.innerHTML = ''; // Очищаем контейнер

        allGames.forEach(game => {
            if (filterCategory === 'all' || game.category === filterCategory) {
                // Создаем элемент карточки
                const card = document.createElement('div');
                card.className = 'game-card';
                card.innerHTML = `
                    <div class="card-badge">VR</div>
                    <div class="card-image" style="background-image: url('${game.imageUrl}')"></div>
                    <div class="card-content">
                        <h2>${game.title}</h2>
                    </div>
                `;

                // Вешаем клик на открытие модалки напрямую с объектом game
                card.addEventListener('click', () => openModal(game));
                container.appendChild(card);
            }
        });
    }

    // 3. Логика фильтров
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGames(btn.dataset.filter);
        });
    });

    // 4. Логика модального окна
    function openModal(game) {
        mTitle.textContent = game.title;
        mDesc.textContent = game.desc;
        mVideo.src = game.videoUrl;
        
        mAdminHeadset.textContent = game.admin.headset;
        mAdminIcon.textContent = game.admin.icon;
        mAdminSysname.textContent = game.admin.sysname;

        modal.style.display = 'flex';
        mVideo.play().catch(()=>{});
    }

    const closeModal = () => { 
        modal.style.display = 'none'; 
        mVideo.pause(); 
        mVideo.src = ''; 
    };

    document.querySelector('.close-btn').addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
});
