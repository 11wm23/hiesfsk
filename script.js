// 机场频率数据库 - 将从JSON文件加载
let airportDatabase = [];

// 加载机场数据
async function loadAirportData() {
  try {
    const response = await fetch('china_airports.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    airportDatabase = await response.json();
    console.log('成功加载中国机场数据，共', airportDatabase.length, '个机场');
  } catch (error) {
    console.error('加载机场数据失败:', error);
    // 加载失败时使用备用数据
    airportDatabase = [
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
        name: "广州白云国际机场",
        code: "ZGGG",
        location: "中国 · 广州",
        tower: "118.100 MHz",
        ground: "121.800 MHz",
        approach: "126.100 MHz",
        clearance: "119.900 MHz",
        area: "127.700 MHz"
      }
    ];
  }
}

// 页面加载时初始化
window.addEventListener('DOMContentLoaded', loadAirportData);

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
const airportList = document.getElementById('airport-list');
const cityName = document.getElementById('city-name');
const airportItems = document.getElementById('airport-items');
let currentQuery = '';

// 查询机场频率
function searchAirportFrequency(query) {
  currentQuery = query.trim();
  
  // 显示加载状态
  resultsContainer.classList.remove('hidden');
  welcomeSection.classList.add('hidden');
  loading.classList.remove('hidden');
  errorMessage.classList.add('hidden');
  resultCard.classList.add('hidden');
  airportList.classList.add('hidden');
  
  // 检查数据库是否已加载
  if (airportDatabase.length === 0) {
    // 如果数据库尚未加载，显示等待信息
    errorText.textContent = "机场数据正在加载中，请稍候再试...";
    loading.classList.add('hidden');
    errorMessage.classList.remove('hidden');
    return;
  }
  
  // 模拟网络延迟
  setTimeout(() => {
    loading.classList.add('hidden');
    
    // 转换查询为大写以匹配代码
    const normalizedQuery = currentQuery.toUpperCase();
    
    // 首先检查是否是精确的机场代码匹配
    const exactCodeMatch = airportDatabase.find(airport => airport.code === normalizedQuery);
    
    if (exactCodeMatch) {
      // 如果是精确的代码匹配，直接显示该机场
      displayAirportData(exactCodeMatch);
      resultCard.classList.remove('hidden');
      resultCard.classList.add('fade-in');
    } else {
      // 搜索城市或机场名称
      // 从位置信息中提取城市名称（例如从"中国 · 北京"中提取"北京"）
      const cityAirports = airportDatabase.filter(airport => {
        // 检查机场名称是否包含查询
        const nameMatch = airport.name.includes(currentQuery) || airport.name.toUpperCase().includes(normalizedQuery);
        
        // 检查位置信息中的城市是否包含查询
        const locationParts = airport.location.split(' · ');
        const cityName = locationParts.length > 1 ? locationParts[1] : locationParts[0];
        const cityMatch = cityName.includes(currentQuery) || cityName.toUpperCase().includes(normalizedQuery);
        
        return nameMatch || cityMatch;
      });
      
      if (cityAirports.length > 0) {
        if (cityAirports.length === 1) {
          // 只有一个匹配的机场，直接显示
          displayAirportData(cityAirports[0]);
          resultCard.classList.remove('hidden');
          resultCard.classList.add('fade-in');
        } else {
          // 多个匹配的机场，显示机场列表
          displayAirportList(cityAirports, currentQuery);
        }
      } else {
        // 显示错误
        errorText.textContent = `未找到与"${currentQuery}"相关的中国机场信息，请检查输入`;
        errorMessage.classList.remove('hidden');
      }
    }
  }, 800);
}

// 显示机场列表
function displayAirportList(airports, query) {
  // 从第一个机场获取城市名称
  const locationParts = airports[0].location.split(' · ');
  const city = locationParts.length > 1 ? locationParts[1] : locationParts[0];
  
  // 设置城市名称标题
  cityName.textContent = `${city}的机场列表 (共${airports.length}个)`;
  
  // 清空现有的机场项目
  airportItems.innerHTML = '';
  
  // 添加每个机场的项目
  airports.forEach(airport => {
    const airportItem = document.createElement('div');
    airportItem.className = 'bg-white rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer transition-all hover:shadow-md';
    airportItem.innerHTML = `
      <h4 class="font-semibold text-dark">${airport.name}</h4>
      <p class="text-primary font-medium">${airport.code}</p>
    `;
    
    // 添加点击事件
    airportItem.addEventListener('click', () => {
      // 显示选中的机场信息
      displayAirportData(airport);
      resultCard.classList.remove('hidden');
      resultCard.classList.add('fade-in');
    });
    
    airportItems.appendChild(airportItem);
  });
  
  // 显示机场列表
  airportList.classList.remove('hidden');
  
  // 隐藏结果卡片，直到用户选择一个机场
  resultCard.classList.add('hidden');
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