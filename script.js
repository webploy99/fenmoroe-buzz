function Url() {
  fbq('track', 'Purchase');
  var urls = new Array();
     urls[0] = "https://bit.ly/TAyao88"; 
  n = Math.floor(Math.random() * 1);
  location.href = urls[n];
}


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
      } 
      else {
          document.getElementById('NoKorea').style.display = 'block';
      }
  } catch (error) {
      console.error('Error fetching IP or location data:', error);
  }
  }
  checkKoreaUser();