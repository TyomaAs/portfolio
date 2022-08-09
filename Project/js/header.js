console.log("Работает программа шапки");
const bodyHTML = document.querySelector('.wrapper');
const header =
	`<header class="header">
	<div class="header__container">
		<div class="header__logo">
			<a href="index.html" title="На головну"><img src="img/icon/logo/logo.JPG" alt="Logo"></a>
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
					<li><a href="index.html" class="navigation__link">Головна</a></li>
					<li><a href="news.html" class="navigation__link">Новини</a></li>
					<li><a href="my-works.html" class="navigation__link">Роботи</a></li>
					<li><a href="contact.html" class="navigation__link">Зв'язок</a></li>
				</ul>
			</div>
		</div>
	</div>
</header>`
bodyHTML.insertAdjacentHTML('afterbegin', header);
