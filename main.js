document.addEventListener('DOMContentLoaded', () => {
    const newsArticles = document.getElementById('news-articles');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // 임시 뉴스 데이터 (실제로는 API를 통해 가져와야 합니다.)
    const newsData = [
        {
            title: 'LS전선, 해저케이블 사업 날개 다나',
            content: 'LS전선이 해저케이블 사업에서 연이어 대규모 수주를 따내며 글로벌 시장에서 입지를 굳히고 있다. ...'
        },
        {
            title: '가온전선, 전력케이블 수요 증가로 실적 개선 기대',
            content: '가온전선이 국내외 전력 인프라 투자 확대에 따른 전력케이블 수요 증가로 실적 개선이 기대된다. ...'
        },
        {
            title: '효성중공업, 미국 시장서 변압기 수주 낭보',
            content: '효성중공업이 미국 전력 시장 호황에 힘입어 대규모 변압기 수주에 성공했다. ...'
        },
        {
            title: 'HD현대일렉트릭, 중동서 신규 변압기 사업 수주',
            content: 'HD현대일렉트릭이 중동 지역에서 신규 변압기 사업을 수주하며 시장 다각화에 나서고 있다. ...'
        }
    ];

    newsData.forEach(news => {
        const article = document.createElement('article');
        const title = document.createElement('h2');
        const content = document.createElement('p');

        title.textContent = news.title;
        content.textContent = news.content;

        article.appendChild(title);
        article.appendChild(content);

        newsArticles.appendChild(article);
    });
});