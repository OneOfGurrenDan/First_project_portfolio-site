// ==========================================
// Главный JavaScript файл
// ==========================================

// Приветствие в консоли при загрузке страницы
console.log('👋 Добро пожаловать на мой сайт-визитку!');
console.log('🚀 Создано с использованием HTML, CSS и JavaScript');
console.log('📧 Свяжитесь со мной: ivan.petrov@example.com');

// ==========================================
// Всплывающее приветствие
// ==========================================

// Функция показа приветственного сообщения
function showWelcomeMessage() {
    // Проверяем, показывали ли мы уже приветствие в этой сессии
    if (!sessionStorage.getItem('welcomeShown')) {
        setTimeout(() => {
            alert('👋 Добро пожаловать на мой сайт! Приятного просмотра!');
            sessionStorage.setItem('welcomeShown', 'true');
        }, 1000); // Показываем через 1 секунду после загрузки
    }
}

// ==========================================
// Плавная прокрутка к секциям
// ==========================================

// Функция для плавной прокрутки
function smoothScroll() {
    // Получаем все ссылки на странице
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Получаем href ссылки
            const targetId = this.getAttribute('href');
            
            // Если это внутренняя ссылка
            if (targetId !== '#' && targetId.startsWith('#')) {
                e.preventDefault();
                
                // Находим целевую секцию
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Плавно прокручиваем к секции
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ==========================================
// Анимация кнопок контактов
// ==========================================

function animateContactButtons() {
    const buttons = document.querySelectorAll('.contact-btn');
    
    buttons.forEach(button => {
        // Добавляем эффект при наведении
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Эффект при клике
        button.addEventListener('click', function(e) {
            // Создаем эффект пульсации
            this.style.animation = 'pulse 0.3s ease';
            
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    });
}

// ==========================================
// Анимация появления навыков при прокрутке
// ==========================================

function animateSkillsOnScroll() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Создаем observer для отслеживания появления элементов
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Добавляем задержку для последовательного появления
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                
                // Прекращаем наблюдение после появления
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Срабатывает когда 10% элемента видно
    });
    
    // Устанавливаем начальное состояние и начинаем наблюдение
    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
}

// ==========================================
// Добавление эффекта набора текста для имени
// ==========================================

function typewriterEffect() {
    const nameElement = document.querySelector('.name');
    if (!nameElement) return;
    
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    nameElement.style.borderRight = '2px solid white';
    
    let i = 0;
    const speed = 100; // Скорость печати в миллисекундах
    
    function type() {
        if (i < originalText.length) {
            nameElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Убираем курсор после окончания печати
            setTimeout(() => {
                nameElement.style.borderRight = 'none';
            }, 500);
        }
    }
    
    // Запускаем эффект
    setTimeout(type, 500);
}

// ==========================================
// Отслеживание времени на сайте
// ==========================================

function trackVisitTime() {
    const startTime = Date.now();
    
    window.addEventListener('beforeunload', () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        console.log(`⏱️ Вы провели на сайте ${timeSpent} секунд. Спасибо за визит!`);
    });
}

// ==========================================
// Инициализация всех функций
// ==========================================

// Ждем полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Страница загружена, инициализация скриптов...');
    
    // Запускаем все функции
    showWelcomeMessage();
    smoothScroll();
    animateContactButtons();
    animateSkillsOnScroll();
    typewriterEffect();
    trackVisitTime();
    
    console.log('✅ Все скрипты успешно инициализированы!');
});

// ==========================================
// Информация для разработчиков
// ==========================================

console.log('%c💡 Подсказка для разработчиков', 'color: #4a90e2; font-size: 14px; font-weight: bold;');
console.log('Этот сайт создан как учебный проект');
console.log('Использованные технологии: HTML5, CSS3, JavaScript (Vanilla)');
console.log('Особенности: адаптивный дизайн, плавная прокрутка, анимации');

