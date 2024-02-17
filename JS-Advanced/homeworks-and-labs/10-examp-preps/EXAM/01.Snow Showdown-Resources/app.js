window.addEventListener("load", solve);

function solve() {
  const nameRef = document.getElementById('snowman-name');
  const heightRef = document.getElementById('snowman-height');
  const locationRef = document.getElementById('location');
  const creatorRef = document.getElementById('creator-name');
  const selectRef = document.getElementById('special-attribute');
  const addBtnRef = document.querySelector('.add-btn');
  const snowmanPreviewRef = document.querySelector('.snowman-preview');
  const snowmanListRef = document.querySelector('.snow-list');
  const heroElRef = document.getElementById('hero');
  const backImgRef = document.getElementById('back-img');
  const bodyRef = document.querySelector('.body');

  addBtnRef.addEventListener('click', (event) => {
    event.preventDefault();
    const name = nameRef.value;
    const height = heightRef.value;
    const location = locationRef.value;
    const creator = creatorRef.value;
    const select = selectRef.value;

    if (
      !name ||
      height <= 0 ||
      !location ||
      !creator ||
      !select
    ) {
      return;
    }

    const liEl = e('li');
    liEl.className = 'snowman-info';

    const articleEl = e('article');
    articleEl.appendChild(e('p', `Name: ${name}`));
    articleEl.appendChild(e('p', `Height: ${height}`));
    articleEl.appendChild(e('p', `Location: ${location}`));
    articleEl.appendChild(e('p', `Creator: ${creator}`));
    articleEl.appendChild(e('p', `Attribute: ${select}`));

    liEl.appendChild(articleEl);

    const divEl = e('div');
    divEl.className = 'btn-container';

    const editBtn = divEl.appendChild(e('button', 'Edit'));
    editBtn.className = 'edit-btn';

    const nextBtn = divEl.appendChild(e('button', 'Next'));
    nextBtn.className = 'next-btn';

    liEl.appendChild(divEl);
    snowmanPreviewRef.appendChild(liEl);

    addBtnRef.parentElement.reset();
    addBtnRef.disabled = true;

    editBtn.addEventListener('click', (event) => {
      event.preventDefault();

      addBtnRef.disabled = false;

      nameRef.value = name;
      heightRef.value = height;
      locationRef.value = location;
      creatorRef.value = creator;
      selectRef.value = select;

      liEl.remove();
    });

    nextBtn.addEventListener('click', (event) => {
      event.preventDefault();
      liEl.remove();

      const liEl2 = e('li');
      liEl2.className = 'snowman-content';

      const articleEl2 = e('article');
      articleEl2.appendChild(e('p', `Name: ${name}`));
      articleEl2.appendChild(e('p', `Height: ${height}`));
      articleEl2.appendChild(e('p', `Location: ${location}`));
      articleEl2.appendChild(e('p', `Creator: ${creator}`));
      articleEl2.appendChild(e('p', `Attribute: ${select}`));
      const sendBtn = articleEl.appendChild(e('button', 'Send'));
      sendBtn.className = 'send-btn';

      liEl2.appendChild(articleEl);

      snowmanListRef.appendChild(liEl2);

      sendBtn.addEventListener('click', (event) => {
        event.preventDefault();

        heroElRef.remove();
        backImgRef.hidden = false;
        const backBtn = e('button', 'Back');
        backBtn.className = 'back-btn';
        bodyRef.appendChild(backBtn);

        backBtn.addEventListener('click', (event) => {
          event.preventDefault();
          window.location.reload();
        });
      });
    });
  });
  function e(type, content) {

    const element = document.createElement(type);
    if (content) {
      element.textContent = content;
    }
    return element;
  }
}
