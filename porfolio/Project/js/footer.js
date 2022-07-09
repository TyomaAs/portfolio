console.log("Работает программа подвала");
const body = document.querySelector('.wrapper');
let footer = 
`<footer class="footer">
	<div class="footer__backcall-list">
		<div class="footer__backcall instagram"><a href="https://www.instagram.com/by_destiny/?r=nametag"><img src="img/icon/backcall/instagram_logo.png" alt="instagram"></a></div>
		<div class="footer__backcall telegram"><a href="https://t.me/by_destiny"><img src="img/icon/backcall/telegram_logo.png" alt="telegram"></a></div>
		<div class="footer__backcall viber"><a href="#"><img src="img/icon/backcall/viber_logo.png" alt="viber"></a></div>
		<div class="footer__backcall weblancer"><a href="https://www.weblancer.net/users/ArtemiiTsipino/"><img src="img/icon/backcall/weblancer_logo.png" alt="weblancer"></a></div>
	</div>
	<div class="footer__copyright">\u00A9 Artemii Tsipino</div>
</footer>`
body.insertAdjacentHTML('beforeend', footer);
