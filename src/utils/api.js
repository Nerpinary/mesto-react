class Api {

  constructor({url, token}) {
    this._base_url = url;
    this._token = token;
  }

  getInitialCards() {
    return fetch(`${this._base_url}/cards`, {
      headers: this._token,
    })
    .then((res) => this._check(res))
  }

  addNewCard(data) {
    return fetch(`${this._base_url}/cards`, {
      method: 'POST',
      headers: this._token,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._check)
  }

  deleteCard(_id) {
    return fetch(`${this._base_url}/cards/${_id}`, {
      method: 'DELETE',
      headers: this._token
    })
    .then(this._check)
  }

  getInfo() {
    return fetch(`${this._base_url}/users/me`, {
      method: 'GET',
      headers: this._token
    })
    .then(this._check)
  }

  setInfo(data) {
    return fetch(`${this._base_url}/users/me`, {
      method: 'PATCH',
      headers: this._token,
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    })
    .then(this._check)
  }

  setAvatar(data) {
    return fetch(`${this._base_url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._token,
      body: JSON.stringify({
        avatar: data.link
      })
    })
    .then(this._check)
  }

  setLike(data) {
    return fetch(`${this._base_url}/cards/likes/${data._id}`, {
      method: 'PUT',
      headers: this._token
    })
    .then(this._check)
  }

  removeLike(data) {
    return fetch(`${this._base_url}/cards/likes/${data._id}`, {
      method: 'DELETE',
      headers: this._token
    })
    .then(this._check)
  }

  _check(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-25',
  token: {
    authorization: '279ec5ff-9344-4c5f-b9ff-6ef489a3fe7d',
    'Content-Type': 'application/json'
},});