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
            title: '2026년, 에너지 대전환의 원년...탄소중립 선도',
            content: '2026년에는 에너지대전환의 성과 원년으로, 탄소중립 선도를 위한 가시적 성과 창출을 목표로 하고 있습니다.',
            url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148924935'
        },
        {
            title: '2026년, 에너지 대전환의 원년...탄소중립 선도',
            content: '2026년에는 에너지대전환의 성과 원년으로, 탄소중립 선도를 위한 가시적 성과 창출을 목표로 하고 있습니다.',
            url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148924935'
        },
        {
            title: '2026년, 에너지 대전환의 원년...탄소중립 선도',
            content: '2026년에는 에너지대전환의 성과 원년으로, 탄소중립 선도를 위한 가시적 성과 창출을 목표로 하고 있습니다.',
            url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148924935'
        },
        {
            title: 'KB증권, "LS전선, 2026년에도 실적 개선 지속될 것"',
            content: 'KB증권은 LS의 비상장 자회사 LS전선의 실적 개선과 수주 모멘텀이 2026년에도 지속될 것으로 전망했습니다.',
            url: 'https://www.newswatch.kr/news/articleView.html?idxno=74955'
        },
        {
            title: 'KB증권, "LS전선, 2026년에도 실적 개선 지속될 것"',
            content: 'KB증권은 LS의 비상장 자회사 LS전선의 실적 개선과 수주 모멘텀이 2026년에도 지속될 것으로 전망했습니다.',
            url: 'https://www.newswatch.kr/news/articleView.html?idxno=74955'
        },
        {
            title: 'KB증권, "LS전선, 2026년에도 실적 개선 지속될 것"',
            content: 'KB증권은 LS의 비상장 자회사 LS전선의 실적 개선과 수주 모멘텀이 2026년에도 지속될 것으로 전망했습니다.',
            url: 'https://www.newswatch.kr/news/articleView.html?idxno=74955'
        },
        {
            title: 'LS마린솔루션, 세계 최대급 HVDC 해저케이블 포설선 건조',
            content: 'LS마린솔루션은 2026년부터 현장에 투입될 세계 최대급 HVDC 해저케이블 포설선 건조 계약을 체결하여, LS그룹이 케이블 제조부터 시공까지 일괄 수행하는 턴키 수주 역량을 강화할 예정입니다.',
            url: 'https://www.economidaily.com/view.php?ud=202401251347343236b1b3463a38_27'
        },
        {
            title: 'LS마린솔루션, 세계 최대급 HVDC 해저케이블 포설선 건조',
            content: 'LS마린솔루션은 2026년부터 현장에 투입될 세계 최대급 HVDC 해저케이블 포설선 건조 계약을 체결하여, LS그룹이 케이블 제조부터 시공까지 일괄 수행하는 턴키 수주 역량을 강화할 예정입니다.',
            url: 'https://www.economidaily.com/view.php?ud=202401251347343236b1b3463a38_27'
        },
        {
            title: 'LS마린솔루션, 세계 최대급 HVDC 해저케이블 포설선 건조',
            content: 'LS마린솔루션은 2026년부터 현장에 투입될 세계 최대급 HVDC 해저케이블 포설선 건조 계약을 체결하여, LS그룹이 케이블 제조부터 시공까지 일괄 수행하는 턴키 수주 역량을 강화할 예정입니다.',
            url: 'https://www.economidaily.com/view.php?ud=202401251347343236b1b3463a38_27'
        },
        {
            title: 'LS전선, 2026년 CES서 케이블 상태판정 기술 사업화 계약',
            content: 'LS전선은 2026년 1월 미국 라스베이거스 CES 2026에서 한국전력과 \'케이블 상태판정 기술(SFL-R) 사업화 및 글로벌 시장 공동 진출\'을 위한 계약을 체결했습니다.',
            url: 'https://www.ceoscoredaily.com/page/view/20240517142755-9653'
        },
        {
            title: 'LS전선, 2026년 CES서 케이블 상태판정 기술 사업화 계약',
            content: 'LS전선은 2026년 1월 미국 라스베이거스 CES 2026에서 한국전력과 \'케이블 상태판정 기술(SFL-R) 사업화 및 글로벌 시장 공동 진출\'을 위한 계약을 체결했습니다.',
            url: 'https://www.ceoscoredaily.com/page/view/20240517142755-9653'
        },
        {
            title: 'LS전선, 2026년 CES서 케이블 상태판정 기술 사업화 계약',
            content: 'LS전선은 2026년 1월 미국 라스베이거스 CES 2026에서 한국전력과 \'케이블 상태판정 기술(SFL-R) 사업화 및 글로벌 시장 공동 진출\'을 위한 계약을 체결했습니다.',
            url: 'https://www.ceoscoredaily.com/page/view/20240517142755-9653'
        },
        {
            title: 'LS일렉트릭, HVDC 변환용 변압기 국산화로 시장 주도',
            content: 'LS일렉트릭은 HVDC 변환용 변압기 국산화로 시장을 주도하고 있으며, 서해안 에너지 고속도로 사업에 참여할 예정입니다.',
            url: 'https://www.ttlnews.com/news/articleView.html?idxno=28599'
        },
        {
            title: 'LS일렉트릭, HVDC 변환용 변압기 국산화로 시장 주도',
            content: 'LS일렉트릭은 HVDC 변환용 변압기 국산화로 시장을 주도하고 있으며, 서해안 에너지 고속도로 사업에 참여할 예정입니다.',
            url: 'https://www.ttlnews.com/news/articleView.html?idxno=28599'
        },
        {
            title: 'LS일렉트릭, HVDC 변환용 변압기 국산화로 시장 주도',
            content: 'LS일렉트릭은 HVDC 변환용 변압기 국산화로 시장을 주도하고 있으며, 서해안 에너지 고속도로 사업에 참여할 예정입니다.',
            url: 'https://www.ttlnews.com/news/articleView.html?idxno=28599'
        },
        {
            title: '대한전선, HVDC 케이블 전용 테스트 센터 준공',
            content: '대한전선은 HVDC 케이블 전용 테스트 센터를 준공하여 제품 경쟁력을 강화하고 글로벌 시장 공략에 속도를 내고 있습니다.',
            url: 'https://www.g-enews.com/article/Global-Biz/2024/01/202401241103289656b1b3463a38_1'
        },
        {
            title: '대한전선, HVDC 케이블 전용 테스트 센터 준공',
            content: '대한전선은 HVDC 케이블 전용 테스트 센터를 준공하여 제품 경쟁력을 강화하고 글로벌 시장 공략에 속도를 내고 있습니다.',
            url: 'https://www.g-enews.com/article/Global-Biz/2024/01/202401241103289656b1b3463a38_1'
        },
        {
            title: '대한전선, HVDC 케이블 전용 테스트 센터 준공',
            content: '대한전선은 HVDC 케이블 전용 테스트 센터를 준공하여 제품 경쟁력을 강화하고 글로벌 시장 공략에 속도를 내고 있습니다.',
            url: 'https://www.g-enews.com/article/Global-Biz/2024/01/202401241103289656b1b3463a38_1'
        },
        {
            title: '대한전선, 해저케이블 인프라 확충 가속',
            content: '대한전선은 정부의 \'에너지고속도로\' 사업에 적극 참여하기 위해 해저케이블 연구개발 및 생산 인프라 확충에 속도를 내고 있습니다.',
            url: 'https://www.electimes.com/news/articleView.html?idxno=331604'
        },
        {
            title: '대한전선, 해저케이블 인프라 확충 가속',
            content: '대한전선은 정부의 \'에너지고속도로\' 사업에 적극 참여하기 위해 해저케이블 연구개발 및 생산 인프라 확충에 속도를 내고 있습니다.',
            url: 'https://www.electimes.com/news/articleView.html?idxno=331604'
        },
        {
            title: '대한전선, 해저케이블 인프라 확충 가속',
            content: '대한전선은 정부의 \'에너지고속도로\' 사업에 적극 참여하기 위해 해저케이블 연구개발 및 생산 인프라 확충에 속도를 내고 있습니다.',
            url: 'https://www.electimes.com/news/articleView.html?idxno=331604'
        },
        {
            title: '미중 갈등, 2026년 이후 해저케이블 시장에 영향',
            content: '미국과 중국의 대립 심화로 인해 국제 통신 해저 케이블의 접속지가 중국에서 동남아시아로 전환되고 있으며, 2026년 이후 중국에 해저 케이블이 부설되지 않을 것으로 예상됩니다.',
            url: 'https://www.g-enews.com/article/Global-Biz/2024/01/20240125083839212b1b3463a38_1'
        },
        {
            title: '미중 갈등, 2026년 이후 해저케이블 시장에 영향',
            content: '미국과 중국의 대립 심화로 인해 국제 통신 해저 케이블의 접속지가 중국에서 동남아시아로 전환되고 있으며, 2026년 이후 중국에 해저 케이블이 부설되지 않을 것으로 예상됩니다.',
            url: 'https://www.g-enews.com/article/Global-Biz/2024/01/20240125083839212b1b3463a38_1'
        },
        {
            title: '미중 갈등, 2026년 이후 해저케이블 시장에 영향',
            content: '미국과 중국의 대립 심화로 인해 국제 통신 해저 케이블의 접속지가 중국에서 동남아시아로 전환되고 있으며, 2026년 이후 중국에 해저 케이블이 부설되지 않을 것으로 예상됩니다.',
            url: 'https.g-enews.com/article/Global-Biz/2024/01/20240125083839212b1b3463a38_1'
        },
        {
            title: '변압기 \'슈퍼 사이클\', 2026년에도 계속된다',
            content: '2026년 변압기 산업은 인공지능(AI) 데이터센터의 급증과 노후화된 전력망 교체 수요에 힘입어 전례 없는 \'슈퍼 사이클\'을 맞이하고 있습니다.',
            url: 'https://www.g-enews.com/article/report/2024/02/202402010857317267e764a3833b_1'
        },
        {
            title: '변압기 \'슈퍼 사이클\', 2026년에도 계속된다',
            content: '2026년 변압기 산업은 인공지능(AI) 데이터센터의 급증과 노후화된 전력망 교체 수요에 힘입어 전례 없는 \'슈퍼 사이클\'을 맞이하고 있습니다.',
            url: 'https://www.g-enews.com/article/report/2024/02/202402010857317267e764a3833b_1'
        },
        {
            title: '변압기 \'슈퍼 사이클\', 2026년에도 계속된다',
            content: '2026년 변압기 산업은 인공지능(AI) 데이터센터의 급증과 노후화된 전력망 교체 수요에 힘입어 전례 없는 \'슈퍼 사이클\'을 맞이하고 있습니다.',
            url: 'https://www.g-enews.com/article/report/2024/02/202402010857317267e764a3833b_1'
        },
        {
            title: '글로벌 변압기 시장, 2026년 700억 달러 규모로 성장 전망',
            content: '글로벌 변압기 시장은 2026년에 699억 7천만 달러 규모로 추정되며, 2040년에는 1,754억 달러에 이를 것으로 전망됩니다.',
            url: 'https.researchnester.com/reports/transformers-market/5123'
        },
        {
            title: '글로벌 변압기 시장, 2026년 700억 달러 규모로 성장 전망',
            content: '글로벌 변압기 시장은 2026년에 699억 7천만 달러 규모로 추정되며, 2040년에는 1,754억 달러에 이를 것으로 전망됩니다.',
            url: 'https.researchnester.com/reports/transformers-market/5123'
        },
        {
            title: '글로벌 변압기 시장, 2026년 700억 달러 규모로 성장 전망',
            content: '글로벌 변압기 시장은 2026년에 699억 7천만 달러 규모로 추정되며, 2040년에는 1,754억 달러에 이를 것으로 전망됩니다.',
            url: 'https.researchnester.com/reports/transformers-market/5123'
        }
    ].sort((a, b) => a.title.localeCompare(b.title));

    newsData.forEach(news => {
        const article = document.createElement('article');
        const title = document.createElement('h2');
        const content = document.createElement('p');
        const link = document.createElement('a');

        title.textContent = news.title;
        content.textContent = news.content;
        link.href = news.url;
        link.target = '_blank'; // Open in new tab

        link.appendChild(title);
        link.appendChild(content);
        article.appendChild(link);

        newsArticles.appendChild(article);
    });
});