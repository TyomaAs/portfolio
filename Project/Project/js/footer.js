console.log("Работает программа подвала");
const body = document.querySelector('.wrapper');
let footer =
	`<footer class="footer">
	<div class="footer__backcall-list">
		<div class="footer__backcall instagram"><a href="https://www.instagram.com/by_dest1ny/?r=nametag"><img src="img/icon/backcall/instagram_logo.png" alt="instagram"></a></div>
		<div class="footer__backcall telegram"><a href="https://t.me/by_dest1ny"><img src="img/icon/backcall/telegram_logo.png" alt="telegram"></a></div>
		<div class="footer__backcall discord" title="Не хватає 2 рівня :("><a href="#"><img src="img/icon/backcall/discord_logo.png" alt="discord"></a></div>
		<div class="footer__backcall weblancer"><a href="https://www.weblancer.net/users/ArtemiiTsipino/"><img src="img/icon/backcall/weblancer_logo.png" alt="weblancer"></a></div>
	</div>
	<div class="footer__copyright">\u00A9 Artemii Tsipino</div>
</footer>`
body.insertAdjacentHTML('beforeend', footer);
