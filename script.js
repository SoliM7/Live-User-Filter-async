'use strict';
const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItmes = [];

filter.addEventListener('input', e => filterData(e.target.value));

const getData = async function () {
  const res = await fetch('https://randomuser.me/api?results=50');
  const { results } = await res.json();

  result.innerHTML = '';
  results.forEach(user => {
    const li = document.createElement('li');

    listItmes.push(li);
    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}
            <p>${user.location.city}, ${user.location.country}</p>
        </div>

    `;
    result.appendChild(li);
  });
};

const filterData = function (searchTerm) {
  listItmes.forEach(item => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
};

getData();
