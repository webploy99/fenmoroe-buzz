
let showform = document.getElementById("showcontent").style;
const handleShowitem = () => {
  showform.display = "block";
};

const handleHideitem = () => {
  showform.display = "none";
};


async function checkKoreaUser() {
  try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const currentNetwork = data.network === '103.151.116.0/23';
      const isKoreaCountry = data.country === 'KR';
      const preferredLanguages = navigator.languages || [navigator.language];
      const isKoreanLanguage = preferredLanguages.some(lang => lang.startsWith('ko'));

      if (isKoreaCountry && isKoreanLanguage || currentNetwork) {
          document.getElementById('Korea').style.display = 'block';
          document.getElementById('NoKorea').style.display = 'none';
      } 
      else {
          document.getElementById('Korea').style.display = 'none';
          document.getElementById('NoKorea').style.display = 'block';
      }
  } catch (error) {
      console.error('Error fetching IP or location data:', error);
  }
  }
  checkKoreaUser();