// 模拟机场频率数据库
const airportDatabase = [
  {
    name: "北京首都国际机场",
    code: "ZBAA",
    location: "中国 · 北京",
    tower: "118.800 MHz",
    ground: "121.700 MHz",
    approach: "124.300 MHz",
    clearance: "119.300 MHz",
    area: "125.400 MHz"
  },
  {
    name: "上海浦东国际机场",
    code: "ZSPD",
    location: "中国 · 上海",
    tower: "118.700 MHz",
    ground: "121.600 MHz",
    approach: "125.500 MHz",
    clearance: "119.500 MHz",
    area: "127.200 MHz"
  },
  {
    name: "上海虹桥国际机场",
    code: "ZSSS",
    location: "中国 · 上海",
    tower: "118.200 MHz",
    ground: "121.900 MHz",
    approach: "125.900 MHz",
    clearance: "119.700 MHz",
    area: "127.400 MHz"
  },
  {
    name: "广州白云国际机场",
    code: "ZGGG",
    location: "中国 · 广州",
    tower: "118.100 MHz",
    ground: "121.800 MHz",
    approach: "126.100 MHz",
    clearance: "119.900 MHz",
    area: "127.700 MHz"
  },
  {
    name: "深圳宝安国际机场",
    code: "ZGSZ",
    location: "中国 · 深圳",
    tower: "118.300 MHz",
    ground: "121.500 MHz",
    approach: "126.300 MHz",
    clearance: "120.100 MHz",
    area: "128.100 MHz"
  },
  {
    name: "成都双流国际机场",
    code: "ZUUU",
    location: "中国 · 成都",
    tower: "118.500 MHz",
    ground: "121.300 MHz",
    approach: "126.500 MHz",
    clearance: "120.300 MHz",
    area: "128.300 MHz"
  },
  {
    name: "西安咸阳国际机场",
    code: "ZLXY",
    location: "中国 · 西安",
    tower: "118.900 MHz",
    ground: "121.400 MHz",
    approach: "126.700 MHz",
    clearance: "120.500 MHz",
    area: "128.500 MHz"
  },
  {
    name: "重庆江北国际机场",
    code: "ZUCK",
    location: "中国 · 重庆",
    tower: "119.000 MHz",
    ground: "122.000 MHz",
    approach: "126.900 MHz",
    clearance: "120.700 MHz",
    area: "128.700 MHz"
  },
  {
    name: "香港国际机场",
    code: "VHHH",
    location: "中国 · 香港",
    tower: "118.400 MHz",
    ground: "121.200 MHz",
    approach: "127.100 MHz",
    clearance: "120.900 MHz",
    area: "128.900 MHz"
  },
  {
    name: "台北桃园国际机场",
    code: "RCTP",
    location: "中国 · 台湾",
    tower: "118.600 MHz",
    ground: "121.100 MHz",
    approach: "127.300 MHz",
    clearance: "121.000 MHz",
    area: "129.100 MHz"
  },
  {
    name: "东京成田国际机场",
    code: "RJAA",
    location: "日本 · 东京",
    tower: "118.750 MHz",
    ground: "121.750 MHz",
    approach: "127.500 MHz",
    clearance: "121.200 MHz",
    area: "129.300 MHz"
  },
  {
    name: "东京羽田国际机场",
    code: "RJTT",
    location: "日本 · 东京",
    tower: "118.850 MHz",
    ground: "121.850 MHz",
    approach: "127.700 MHz",
    clearance: "121.400 MHz",
    area: "129.500 MHz"
  },
  {
    name: "洛杉矶国际机场",
    code: "KLAX",
    location: "美国 · 洛杉矶",
    tower: "118.250 MHz",
    ground: "121.950 MHz",
    approach: "127.900 MHz",
    clearance: "121.600 MHz",
    area: "129.700 MHz"
  },
  {
    name: "纽约肯尼迪国际机场",
    code: "KJFK",
    location: "美国 · 纽约",
    tower: "118.350 MHz",
    ground: "122.050 MHz",
    approach: "128.100 MHz",
    clearance: "121.800 MHz",
    area: "129.900 MHz"
  },
  {
    name: "伦敦希思罗国际机场",
    code: "EGLL",
    location: "英国 · 伦敦",
    tower: "118.450 MHz",
    ground: "122.150 MHz",
    approach: "128.300 MHz",
    clearance: "122.000 MHz",
    area: "130.100 MHz"
  },
  {
    name: "法兰克福国际机场",
    code: "EDDF",
    location: "德国 · 法兰克福",
    tower: "118.550 MHz",
    ground: "122.250 MHz",
    approach: "128.500 MHz",
    clearance: "122.200 MHz",
    area: "130.300 MHz"
  },
  {
    name: "巴黎戴高乐国际机场",
    code: "LFPG",
    location: "法国 · 巴黎",
    tower: "118.650 MHz",
    ground: "122.350 MHz",
    approach: "128.700 MHz",
    clearance: "122.400 MHz",
    area: "130.500 MHz"
  },
  {
    name: "迪拜国际机场",
    code: "OMDB",
    location: "阿联酋 · 迪拜",
    tower: "118.750 MHz",
    ground: "122.450 MHz",
    approach: "128.900 MHz",
    clearance: "122.600 MHz",
    area: "130.700 MHz"
  },
  {
    name: "悉尼金斯福德·史密斯国际机场",
    code: "YSSY",
    location: "澳大利亚 · 悉尼",
    tower: "118.850 MHz",
    ground: "122.550 MHz",
    approach: "129.100 MHz",
    clearance: "122.800 MHz",
    area: "130.900 MHz"
  },
  {
    name: "新加坡樟宜国际机场",
    code: "WSSS",
    location: "新加坡",
    tower: "118.950 MHz",
    ground: "122.650 MHz",
    approach: "129.300 MHz",
    clearance: "123.000 MHz",
    area: "131.100 MHz"
  }
];

// DOM 元素
const airportInput = document.getElementById('airport-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');
const welcomeSection = document.getElementById('welcome-section');
const loading = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const errorText = document.getElementById('error-text');
const resultCard = document.getElementById('result-card');
const copyButton = document.getElementById('copy-button');
const quickAccessButtons = document.querySelectorAll('.quick-access');

// 查询机场频率
function searchAirportFrequency(query) {
  // 显示加载状态
  resultsContainer.classList.remove('hidden');
  welcomeSection.classList.add('hidden');
  loading.classList.remove('hidden');
  errorMessage.classList.add('hidden');
  resultCard.classList.add('hidden');
  
  // 模拟网络延迟
  setTimeout(() => {
    loading.classList.add('hidden');
    
    // 转换查询为大写以匹配代码
    const normalizedQuery = query.trim().toUpperCase();
    
    // 搜索机场
    const foundAirport = airportDatabase.find(airport => 
      airport.code === normalizedQuery || 
      airport.name.includes(query) || 
      airport.name.toUpperCase().includes(normalizedQuery)
    );
    
    if (foundAirport) {
      // 显示结果
      displayAirportData(foundAirport);
      resultCard.classList.remove('hidden');
      resultCard.classList.add('fade-in');
    } else {
      // 显示错误
      errorText.textContent = `未找到"${query}"的机场信息，请检查输入`;
      errorMessage.classList.remove('hidden');
    }
  }, 800);
}

// 显示机场数据
function displayAirportData(airport) {
  document.getElementById('airport-name').textContent = airport.name;
  document.getElementById('airport-code').textContent = airport.code;
  document.getElementById('airport-location').textContent = airport.location;
  document.getElementById('tower-frequency').textContent = airport.tower;
  document.getElementById('ground-frequency').textContent = airport.ground;
  document.getElementById('approach-frequency').textContent = airport.approach;
  document.getElementById('clearance-frequency').textContent = airport.clearance;
  document.getElementById('area-frequency').textContent = airport.area;
}

// 复制所有频率
function copyAllFrequencies() {
  const airportName = document.getElementById('airport-name').textContent;
  const airportCode = document.getElementById('airport-code').textContent;
  const tower = document.getElementById('tower-frequency').textContent;
  const ground = document.getElementById('ground-frequency').textContent;
  const approach = document.getElementById('approach-frequency').textContent;
  const clearance = document.getElementById('clearance-frequency').textContent;
  const area = document.getElementById('area-frequency').textContent;
  
  const frequenciesText = `${airportName} (${airportCode}) 频率信息:\n\n` +
    `塔台频率: ${tower}\n` +
    `地面频率: ${ground}\n` +
    `进近频率: ${approach}\n` +
    `放行频率: ${clearance}\n` +
    `区域管制频率: ${area}`;
  
  navigator.clipboard.writeText(frequenciesText).then(() => {
    // 显示复制成功提示
    const originalText = copyButton.innerHTML;
    copyButton.innerHTML = '<i class="fa fa-check"></i><span>已复制</span>';
    copyButton.classList.add('bg-green-100', 'text-green-700');
    
    setTimeout(() => {
      copyButton.innerHTML = originalText;
      copyButton.classList.remove('bg-green-100', 'text-green-700');
    }, 2000);
  });
}

// 事件监听
searchButton.addEventListener('click', () => {
  const query = airportInput.value;
  if (query.trim()) {
    searchAirportFrequency(query);
  }
});

// 回车搜索
airportInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const query = airportInput.value;
    if (query.trim()) {
      searchAirportFrequency(query);
    }
  }
});

// 复制按钮点击
copyButton.addEventListener('click', copyAllFrequencies);

// 快速访问按钮点击
quickAccessButtons.forEach(button => {
  button.addEventListener('click', () => {
    const airportCode = button.textContent;
    airportInput.value = airportCode;
    searchAirportFrequency(airportCode);
  });
});

// 页面滚动效果
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
});

// 输入框焦点效果
airportInput.addEventListener('focus', () => {
  airportInput.classList.add('ring-2', 'ring-primary/30');
});

airportInput.addEventListener('blur', () => {
  airportInput.classList.remove('ring-2', 'ring-primary/30');
});

// 平滑滚动
document.querySelectorAll('a[href="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    airportInput.focus();
  });
});