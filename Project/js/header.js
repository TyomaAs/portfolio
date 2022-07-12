console.log("Работает программа шапки");
const bodyHTML = document.querySelector('.wrapper');
let header =
	`<header class="header">
	<div class="header__container">
		<div class="header__logo">
			<a href="index.html" title="На головну"><img src="https://github.com/TyomaAs/portfolio/blob/225a5f19510f351afdd007c7f90b323caac228c8/Project/img/icon/logo/logo.JPG" alt="Logo"></a>
		</div>
		<div class="header__title-search">
			<div class="header__title">
				<a href="index.html">Artemii Tsipino</a>
			</div>
			<form class="header__search" action="#">
				<input class="search" name="search" type="text" placeholder="Задати питання" value="">
			</form>
		</div>
		<div class="header__navigation">
			<div class="navigation__icon">
				<span></span>
			</div>
			<div class="navigation__body">
				<ul class="navigation__list">
					<li><a href="#" class="navigation__link">Головна</a></li>
					<li><a href="#" class="navigation__link">Новини</a></li>
					<li><a href="#" class="navigation__link">Роботи</a></li>
					<li><a href="#" class="navigation__link">Зв'язок</a></li>
				</ul>
			</div>
		</div>
	</div>
</header>`
bodyHTML.insertAdjacentHTML('afterbegin', header);
