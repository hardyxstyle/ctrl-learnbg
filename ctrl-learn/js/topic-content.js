/* =============================================
   CTRL+LEARNBG — Topic Content: 7, 8, 9, 10
   ============================================= */

const TOPIC_CONTENT = {
  7: {
    theory: `
      <h2>📝 Компютърна обработка на текстове — MS Word</h2>
      <div class="definition"><div class="def-term">СТРУКТУРНИ ЕДИНИЦИ НА ТЕКСТ</div><div class="def-body">Символ → Дума → Изречение → Абзац → Раздел → Документ</div></div>
      <h3>Форматиране на текст</h3>
      <ul>
        <li><strong>Шрифт (Font)</strong> — вид на буквите: Arial, Times New Roman, Calibri...</li>
        <li><strong>Размер</strong> — в точки (pt). Стандарт: 12pt</li>
        <li><strong>Стил</strong>: <b>Bold (удебелен)</b>, <i>Italic (курсив)</i>, <u>Underline (подчертан)</u></li>
        <li><strong>Подравняване</strong>: ляво, дясно, централно, двустранно (Justify)</li>
      </ul>
      <h3>Настройки на страница</h3>
      <table class="data-table">
        <tr><th>Настройка</th><th>Опции</th></tr>
        <tr><td>Ориентация</td><td>Portrait (вертикална) / Landscape (хоризонтална)</td></tr>
        <tr><td>Размер</td><td>A4 (21×29.7 cm), A3, Letter...</td></tr>
        <tr><td>Полета</td><td>Горе, долу, ляво, дясно (Margins)</td></tr>
      </table>
      <h3>Таблици в Word</h3>
      <ul>
        <li>Insert → Table → избираш брой редове и колони</li>
        <li>Можеш да обединяваш клетки (Merge Cells)</li>
        <li>Задаваш рамки, цвят, подравняване на текста</li>
      </ul>
      <h3>Специални знаци и изображения</h3>
      <ul>
        <li>Insert → Symbol → Special Character</li>
        <li>Insert → Pictures (от файл) или Online Pictures</li>
      </ul>
      <div class="highlight-box">💡 <strong>Клавишни комбинации в Word:</strong> Ctrl+B (удебелен), Ctrl+I (курсив), Ctrl+U (подчертан), Ctrl+Z (отмяна), Ctrl+S (запис)</div>
    `,
    tasks: [
      { title: 'Задача 1: Форматиране', diff: 'easy', desc: 'Кое е правилното форматиране за заглавие на документ? Опиши поне 3 характеристики.', answer: 'Заглавието трябва да е с <strong>по-голям шрифт</strong> (напр. 16-18pt), <strong>удебелено (Bold)</strong>, <strong>централно подравняване</strong>, евентуално различен шрифт.' },
      { title: 'Задача 2: Ориентация', diff: 'easy', desc: 'Кога използваш Landscape (хоризонтална) ориентация на страницата?', answer: 'Landscape е подходяща за: <strong>таблици с много колони</strong>, <strong>презентации или плакати</strong>, <strong>широки графики</strong>, документи с повече широчина, отколкото височина.' },
      { title: 'Задача 3: Таблица', diff: 'medium', desc: 'Опиши стъпките за създаване на таблица с 3 реда и 4 колони в MS Word.', answer: '1. Отиди в меню <strong>Insert</strong><br>2. Кликни <strong>Table</strong><br>3. Избери <strong>3 реда × 4 колони</strong> от мрежата (или Insert Table → въведи числата)<br>4. Таблицата се появява в документа.' },
    ],
    quiz: [
      { type:'mc', question:'В MS Word "Bold" означава:', options:['Курсив','Подчертан','Удебелен','Зачертан'], correct:'Удебелен' },
      { type:'mc', question:'A4 листът е с размери:', options:['21×29.7 cm','29.7×42 cm','21×27.9 cm','15×21 cm'], correct:'21×29.7 cm' },
      { type:'mc', question:'Клавишната комбинация за запис в Word е:', options:['Ctrl+P','Ctrl+S','Ctrl+Z','Ctrl+N'], correct:'Ctrl+S' },
      { type:'tf', question:'Landscape означава вертикална ориентация на страницата.', correct:'Грешно' },
      { type:'mc', question:'Justify подравняването означава:', options:['Ляво подравняване','Дясно подравняване','Централно','Двустранно (разтегнато)'], correct:'Двустранно (разтегнато)' },
      { type:'mc', question:'Специалните знаци в Word се вмъкват от:', options:['Home → Font','Insert → Symbol','View → Special','Format → Character'], correct:'Insert → Symbol' },
      { type:'tf', question:'В Word можем да обединяваме клетки на таблица (Merge Cells).', correct:'Вярно' },
      { type:'mc', question:'Ctrl+Z в Word изпълнява:', options:['Запис','Зачертаване','Отмяна на последно действие','Ново форматиране'], correct:'Отмяна на последно действие' },
    ]
  },
  8: {
    theory: `
      <h2>📈 Електронни таблици — MS Excel</h2>
      <div class="definition"><div class="def-term">ОСНОВНИ ЕЛЕМЕНТИ</div><div class="def-body"><strong>Клетка</strong> = пресечна точка на ред и колона (напр. A1, B3). <strong>Ред</strong> = хоризонтален (1, 2, 3...). <strong>Колона</strong> = вертикална (A, B, C...). <strong>Работен лист</strong> = Sheet.</div></div>
      <h3>Типове данни в клетка</h3>
      <ul>
        <li><strong>Числа</strong> — по подразбиране дясно подравнени</li>
        <li><strong>Текст</strong> — по подразбиране ляво подравнен</li>
        <li><strong>Формули</strong> — започват с <strong>=</strong></li>
        <li><strong>Дата/Час</strong></li>
      </ul>
      <h3>Формули и функции</h3>
      <table class="data-table">
        <tr><th>Функция</th><th>Описание</th><th>Пример</th></tr>
        <tr><td><strong>SUM</strong></td><td>Сума от стойности</td><td>=SUM(A1:A10)</td></tr>
        <tr><td><strong>AVERAGE</strong></td><td>Средноаритметично</td><td>=AVERAGE(B1:B5)</td></tr>
        <tr><td><strong>MAX</strong></td><td>Максимална стойност</td><td>=MAX(C1:C20)</td></tr>
        <tr><td><strong>MIN</strong></td><td>Минимална стойност</td><td>=MIN(D1:D10)</td></tr>
        <tr><td><strong>COUNT</strong></td><td>Брой клетки с числа</td><td>=COUNT(A1:A10)</td></tr>
        <tr><td><strong>IF</strong></td><td>Условна функция</td><td>=IF(A1>5,"Да","Не")</td></tr>
      </table>
      <div class="highlight-box">💡 Диапазон A1:A10 означава клетките от A1 до A10 включително.</div>
      <h3>Сортиране на данни</h3>
      <ul>
        <li>Data → Sort → избираш колона и посока (А-Я или Я-А)</li>
        <li>Може по множество критерии</li>
      </ul>
      <h3>Графична интерпретация</h3>
      <ul>
        <li>Маркираш данните → Insert → Chart</li>
        <li>Видове: стълбовидна, кръгова, линейна, точкова</li>
      </ul>
    `,
    tasks: [
      { title: 'Задача 1: Формула за сума', diff: 'easy', desc: 'В клетки A1:A5 са числата 10, 20, 30, 40, 50. Напиши формулата за тяхната сума в A6.', answer: '<strong>=SUM(A1:A5)</strong> — резултатът ще е 150.' },
      { title: 'Задача 2: Средна оценка', diff: 'easy', desc: 'Учениците имат оценки в B2:B11. Напиши формулата за средна оценка в B12.', answer: '<strong>=AVERAGE(B2:B11)</strong>' },
      { title: 'Задача 3: Условна функция', diff: 'hard', desc: 'В C1 е оценката на ученик. Напиши формула в D1, която показва "Издържал" ако оценката е ≥ 3, или "Скъсан" ако е < 3.', answer: '<strong>=IF(C1>=3,"Издържал","Скъсан")</strong>' },
    ],
    quiz: [
      { type:'mc', question:'Как се записва адресът на клетка в 3-ти ред, колона B?', options:['3B','B3','B:3','ROW3B'], correct:'B3' },
      { type:'mc', question:'Функцията за средноаритметично е:', options:['=SUM()','=AVG()','=AVERAGE()','=MEAN()'], correct:'=AVERAGE()' },
      { type:'tf', question:'Всяка формула в Excel задължително започва с =.', correct:'Вярно' },
      { type:'mc', question:'=MAX(A1:A5) връща:', options:['Сумата','Средната','Максималната стойност','Минималната стойност'], correct:'Максималната стойност' },
      { type:'mc', question:'За да сортираш данни в Excel, отиваш в меню:', options:['Home','Insert','Data','View'], correct:'Data' },
      { type:'tf', question:'В Excel текстът по подразбиране е подравнен вдясно.', correct:'Грешно' },
      { type:'mc', question:'=IF(A1>10,"Да","Не") — ако A1=15, резултатът е:', options:['Да','Не','15','Грешка'], correct:'Да' },
      { type:'mc', question:'Диапазонът A1:C3 включва колко клетки?', options:['6','9','3','12'], correct:'9' },
    ]
  },
  9: {
    theory: `
      <h2>🎞️ Компютърна презентация — MS PowerPoint</h2>
      <div class="definition"><div class="def-term">СЛАЙД</div><div class="def-body">Основната единица на презентацията — един "екран" с информация. Всеки слайд има <strong>дизайн (тема)</strong>, <strong>оформление (layout)</strong> и <strong>съдържание</strong>.</div></div>
      <h3>Елементи на слайда</h3>
      <ul>
        <li><strong>Заглавие (Title)</strong> — основният текст</li>
        <li><strong>Съдържание (Content)</strong> — текст, снимки, графики</li>
        <li><strong>Бележки на лектора (Notes)</strong> — видими само за презентатора</li>
      </ul>
      <h3>Анимационни ефекти</h3>
      <table class="data-table">
        <tr><th>Тип</th><th>Описание</th></tr>
        <tr><td><strong>Entrance (Вход)</strong></td><td>Как обектът се появява на слайда</td></tr>
        <tr><td><strong>Emphasis (Акцент)</strong></td><td>Ефект върху вече показан обект</td></tr>
        <tr><td><strong>Exit (Изход)</strong></td><td>Как обектът изчезва от слайда</td></tr>
        <tr><td><strong>Transition (Преход)</strong></td><td>Ефект при смяна между слайдове</td></tr>
      </table>
      <h3>Файлови формати</h3>
      <ul>
        <li><strong>.pptx</strong> — стандартен формат, може да се редактира</li>
        <li><strong>.ppt</strong> — стар формат</li>
        <li><strong>.pps / .ppsx</strong> — слайдшоу (отваря се директно в режим представяне)</li>
        <li><strong>.pdf</strong> — неизменяем формат</li>
      </ul>
      <h3>Правила за добра презентация</h3>
      <ul>
        <li>Не повече от <strong>6 реда текст</strong> на слайд</li>
        <li>Шрифт минимум <strong>24pt</strong> за видимост</li>
        <li><strong>Контраст</strong> между текст и фон</li>
        <li>Ограничена анимация — не пречи на съдържанието</li>
        <li>Гледай към аудиторията, не към екрана</li>
      </ul>
      <div class="highlight-box">💡 За смяна между слайдове по времетраене: Transitions → Advance Slide → After [X] seconds</div>
    `,
    tasks: [
      { title: 'Задача 1: Видове анимации', diff: 'easy', desc: 'Как се казва анимационният ефект, при който текстът излита от слайда? Кой тип е?', answer: 'Анимации при изчезване на обект се казват <strong>Exit (Изход)</strong> ефекти. Пример: Fly Out (излита навън).' },
      { title: 'Задача 2: Файлов формат', diff: 'easy', desc: 'Искаш да изпратиш презентация на учителя, но той да не може да я редактира. Кой формат избираш?', answer: '<strong>.pps или .ppsx</strong> (SlideShow — отваря се директно) или <strong>.pdf</strong> (неизменяем). Не избираш .pptx защото той позволява редактиране.' },
      { title: 'Задача 3: Правила', diff: 'medium', desc: 'Ученик е направил слайд с 15 реда текст с шрифт 10pt и 8 различни цвята. Кои правила нарушава?', answer: 'Нарушени правила: 1) <strong>Твърде много текст</strong> (макс. 6 реда); 2) <strong>Шрифтът е твърде малък</strong> (минимум 24pt); 3) <strong>Твърде много цветове</strong> — смущава четенето. Препоръчват се 2-3 цвята максимум.' },
    ],
    quiz: [
      { type:'mc', question:'Кой формат отваря директно като SlideShow?', options:['.pptx','.ppt','.pps','.docx'], correct:'.pps' },
      { type:'mc', question:'Transition ефектите в PowerPoint са:', options:['Анимации на обекти в слайда','Ефекти при смяна на слайдове','Цветови схеми','Шрифтове'], correct:'Ефекти при смяна на слайдове' },
      { type:'tf', question:'Entrance анимацията показва как обектът се появява на слайда.', correct:'Вярно' },
      { type:'mc', question:'Препоръчителният минимален размер на шрифта в презентация е:', options:['10pt','16pt','24pt','36pt'], correct:'24pt' },
      { type:'mc', question:'Бележките на лектора (Notes) са:', options:['Видими на всеки слайд','Видими само за презентатора','Показват се на аудиторията','Не могат да се добавят'], correct:'Видими само за презентатора' },
      { type:'tf', question:'.pptx форматът може да се редактира.', correct:'Вярно' },
      { type:'mc', question:'Максималният препоръчителен брой реда текст на слайд е:', options:['3','6','10','15'], correct:'6' },
      { type:'mc', question:'Emphasis анимацията:', options:['Показва как обектът излиза','Показва как обектът влиза','Акцентира върху вече показан обект','Прави преход между слайдове'], correct:'Акцентира върху вече показан обект' },
    ]
  },
  10: {
    theory: `
      <h2>🔗 Интернет — глобалната мрежа</h2>
      <div class="definition"><div class="def-term">ИНТЕРНЕТ</div><div class="def-body">Глобална компютърна мрежа, свързваща милиарди устройства по целия свят чрез стандартни протоколи (TCP/IP).</div></div>
      <h3>Начини за достъп до интернет</h3>
      <table class="data-table">
        <tr><th>Вид</th><th>Описание</th></tr>
        <tr><td><strong>DSL/ADSL</strong></td><td>Чрез телефонна линия</td></tr>
        <tr><td><strong>Кабелен</strong></td><td>Чрез коаксиален кабел</td></tr>
        <tr><td><strong>Оптичен (Fiber)</strong></td><td>Светлинни сигнали — най-бърз</td></tr>
        <tr><td><strong>Мобилен (3G/4G/5G)</strong></td><td>Безжичен чрез мобилна мрежа</td></tr>
        <tr><td><strong>WiFi</strong></td><td>Безжичен в локалната мрежа</td></tr>
      </table>
      <h3>Електронни адреси</h3>
      <ul>
        <li><strong>URL</strong> (Uniform Resource Locator) — адрес на уеб страница: <code>https://www.example.com</code></li>
        <li><strong>IP адрес</strong> — уникален адрес на устройство в мрежата: <code>192.168.1.1</code></li>
        <li><strong>Email адрес</strong>: <code>потребител@домейн.bg</code></li>
      </ul>
      <h3>Електронна поща (Email)</h3>
      <ul>
        <li><strong>To (До)</strong> — получател</li>
        <li><strong>CC</strong> — копие до друг получател</li>
        <li><strong>BCC</strong> — скрито копие</li>
        <li><strong>Subject</strong> — тема на писмото</li>
        <li><strong>Attach (Прикачи)</strong> — файл към писмото</li>
      </ul>
      <h3>Комуникация в реално време</h3>
      <ul>
        <li><strong>Чат (Chat)</strong> — текстови съобщения в реално време</li>
        <li><strong>Видеоконференция</strong> — Zoom, Teams, Google Meet</li>
        <li><strong>VoIP</strong> — гласови разговори по интернет (Skype, Viber)</li>
      </ul>
      <div class="highlight-box">💡 <strong>HTTPS</strong> = защитена връзка. Виждаш катинарче 🔒 в браузъра.</div>
    `,
    tasks: [
      { title: 'Задача 1: Email структура', diff: 'easy', desc: 'Опиши какво е Subject, CC и BCC в имейл. Кога използваш BCC?', answer: '<strong>Subject</strong> = темата/заглавието на писмото.<br><strong>CC</strong> = Carbon Copy — копие; всички получатели виждат кой още е получил.<br><strong>BCC</strong> = Blind CC — скрито копие; получателите НЕ виждат другите в BCC. Използваш BCC при масови изпращания за поверителност.' },
      { title: 'Задача 2: URL анализ', diff: 'medium', desc: 'В URL адреса https://www.mon.bg/bg/home разпознай: протокола, домейна и пътя.', answer: 'Протокол: <strong>https</strong><br>Домейн: <strong>www.mon.bg</strong><br>Път: <strong>/bg/home</strong>' },
      { title: 'Задача 3: Видове достъп', diff: 'medium', desc: 'Кой вид достъп до интернет е НАЙ-БЪРз и защо?', answer: '<strong>Оптичен (Fiber)</strong> интернет е най-бърз, защото данните се предават чрез <strong>светлинни сигнали</strong> в оптичен кабел — скоростта на светлината е максималната физична скорост. Скорости до 10 Gbps са постижими.' },
    ],
    quiz: [
      { type:'mc', question:'URL означава:', options:['Uniform Resource Locator','Universal Remote Link','Uniform Remote Language','User Resource Link'], correct:'Uniform Resource Locator' },
      { type:'mc', question:'Кой достъп до интернет е НАЙ-БЪРз?', options:['DSL','WiFi','Оптичен (Fiber)','3G'], correct:'Оптичен (Fiber)' },
      { type:'tf', question:'HTTPS означава защитена (криптирана) връзка.', correct:'Вярно' },
      { type:'mc', question:'BCC в имейл означава:', options:['Копие до видим получател','Скрито копие','Тема на писмото','Прикачен файл'], correct:'Скрито копие' },
      { type:'mc', question:'IP адресът е:', options:['Адресът на имейл','Уникален адрес на устройство в мрежата','Името на уеб страница','Вид браузър'], correct:'Уникален адрес на устройство в мрежата' },
      { type:'tf', question:'VoIP позволява гласови разговори по интернет.', correct:'Вярно' },
      { type:'mc', question:'Какво съдържа полето "Subject" в имейл?', options:['Адресът на получателя','Съдържанието на писмото','Темата/заглавието на писмото','Прикачените файлове'], correct:'Темата/заглавието на писмото' },
      { type:'mc', question:'WiFi е:', options:['Кабелна интернет връзка','Безжична локална мрежа','Вид вирус','Тип имейл'], correct:'Безжична локална мрежа' },
    ]
  }
};

function loadTopicContent(num) {
  const data = TOPIC_CONTENT[num];
  if (!data) return;

  // Theory
  const tc = document.getElementById('theory-content-' + num);
  if (tc) tc.innerHTML = data.theory;

  // Tasks
  const tasksContainer = document.getElementById('tasks-content-' + num);
  if (tasksContainer && data.tasks) {
    tasksContainer.innerHTML = data.tasks.map(t => `
      <div class="task-card reveal">
        <div class="task-header">
          <div class="task-title">${t.title}</div>
          <span class="difficulty-badge ${t.diff}">${t.diff === 'easy' ? 'Лесна' : t.diff === 'medium' ? 'Средна' : 'Трудна'}</span>
        </div>
        <div class="task-desc">${t.desc}</div>
        <button class="task-answer-toggle">💡 Покажи отговора</button>
        <div class="task-answer">${t.answer}</div>
      </div>`).join('');
    initTaskToggles();
  }

  // Quiz
  if (data.quiz) {
    const qs = [...data.quiz].sort(() => Math.random() - 0.5);
    initQuiz(qs, 'quiz-topic' + num);
    const st = window['quizState_quiz-topic' + num];
    if (st) {
      const r = st.render;
      st.render = function() {
        if (st.current() >= qs.length) {
          renderQuizResult(document.getElementById('quiz-topic' + num), st.score(), qs.length);
        } else {
          r();
        }
      };
    }
  }
}
