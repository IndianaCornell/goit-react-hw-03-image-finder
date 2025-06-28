# 1 - Книга контактів

Використай рішення з попереднього домашнього завдання та додай зберігання контактів у `localStorage`.

## Вимоги:

- Під час **додавання** та **видалення** контактів — актуальний список зберігається в `localStorage`.
- При **завантаженні застосунку** — якщо дані в `localStorage` є, вони зчитуються та встановлюються в `state`.

---

# 2 - Пошук зображень

Створи React-застосунок для пошуку зображень за ключовим словом із використанням Pixabay API.

## Структура компонентів:

- `<Searchbar />`
- `<ImageGallery />`
- `<ImageGalleryItem />`
- `<Loader />`
- `<Button />`
- `<Modal />`

Готові стилі можна використати з `styles.css`.

---

## 📦 Інструкція з Pixabay API:

**URL приклад:**

```
https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
```

### Обов’язкові параметри запиту:

- `key` — приватний ключ доступу (отримай після реєстрації)
- `q` — пошуковий запит
- `image_type=photo`
- `orientation=horizontal`
- `per_page=12`

> При новому запиті значення `page` має бути скинуте на 1.

### Необхідні поля з відповіді API:

- `id`
- `webformatURL`
- `largeImageURL`

---

## 🔧 Опис компонентів

### `<Searchbar onSubmit={handleSubmit} />`

Форма пошуку:

```html
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>
    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

---

### `<ImageGallery />`

Список карток:

```html
<ul class="gallery">
  <!-- Набір <li> із зображеннями -->
</ul>
```

---

### `<ImageGalleryItem />`

Одна картка зображення:

```html
<li class="gallery-item">
  <img src="" alt="" />
</li>
```

---

### `<Button />`

Кнопка **Load more**:

- Завантажує наступну сторінку зображень.
- Показується тільки якщо є завантажені зображення.
- Не рендериться, якщо масив порожній.

---

### `<Loader />`

- Відображає спінер під час завантаження.
- Можна використати `react-loader-spinner` або інший готовий компонент.

---

### `<Modal />`

Модальне вікно з великим зображенням.

HTML-структура:

```html
<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
```

Закриття:

- Клік на overlay
- Клавіша `ESC`
